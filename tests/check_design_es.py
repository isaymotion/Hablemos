#!/usr/bin/env python3
"""Check an app folder against the isaymotion design contract before delivery.

Usage:  python scripts/check_design.py ./BatchTickler [--browser]

Static checks (always):
  files present, no unfilled {{PLACEHOLDERS}}, attribution line exact, viewport-fit=cover,
  theme-color meta, dark tokens duplicated in both blocks, only Google Fonts as external
  CSS and no external JS, storage prefix unique vs the live apps, sw.js cache prefix
  guarded, Alt-arrow handler + scroll restoration present, backup export/import ids,
  What's New data present, README mentions GitHub Pages, version matches across files.
--browser adds a Playwright pass: light/dark at 390px and 1024px, no horizontal
  overflow, drawer opens and closes, export button exists; screenshots go to
  <app>/_qa/ (delete before upload).
"""
import argparse, pathlib, re, subprocess, sys
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

ATTRIB = re.compile(r"App created by Isabella Navarro, MD\. Latest version [A-Z][a-z]+ \d{4}\. "
                    r"(?:<a href=\"mailto:isaymotion@gmail\.com\">)?isaymotion@gmail\.com")
# prefix -> repo slug that legitimately owns it (an app may keep its own prefix on a restyle)
LIVE_PREFIXES = {"sp:v1:": "stahl", "dsm:v1:": "dsmvapp", "ks:v1:": "kaplanstudy", "mse-trainer": "msetrainer",
                 "sheatrainer": "sheatrainer", "usaptayo": "tagalog", "pit.progress": "sheatrainer"}
LIVE_CACHE = {"stahl-companion-": "stahl", "mse-trainer-": "msetrainer", "usaptayo-": "tagalog", "dsm-": "dsmvapp",
              "kaplan-": "kaplanstudy", "sheatrainer-": "sheatrainer"}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("app")
    ap.add_argument("--browser", action="store_true")
    a = ap.parse_args()
    root = pathlib.Path(a.app)
    fails, warns = [], []

    def need(rel):
        p = root / rel
        if not p.exists():
            fails.append(f"missing {rel}")
            return ""
        return p.read_text(encoding="utf-8", errors="replace")

    html = need("index.html"); js = need("js/app.js")
    css = (root / "css/app.css").read_text(encoding="utf-8", errors="replace") if (root / "css/app.css").exists() \
        else need("css/style.css")  # apps that kept their own navigation (Usap Tayo) keep css/style.css
    sw = need("sw.js"); man = need("manifest.webmanifest"); readme = need("README.md")
    meta = need("data/app-meta.js"); chlog = need("data/changelog.js")
    hosp = need("data/hospital.js"); strings = need("data/strings.js")
    if hosp and "window.HOSPITAL" not in hosp:
        fails.append("data/hospital.js must define window.HOSPITAL")
    if strings and ("window.STRINGS" not in strings or not re.search(r"\b(tl|es):", strings)):
        fails.append("data/strings.js must define window.STRINGS with en and tl")
    if meta and "APP_LINKS" not in meta:
        fails.append("data/app-meta.js must define window.APP_LINKS (Other apps group)")
    for hard in ["Mariveles Mental Wellness"]:
        if js and hard in js:
            warns.append(f"'{hard}' hardcoded in js/app.js — use HOSPITAL from data/hospital.js")
    for ic in ["icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png"]:
        if not (root / "icons" / ic).exists():
            warns.append(f"icons/{ic} not generated yet (scripts/make_icons.py)")

    mrepo = re.search(r"repo:\s*['\"]([^'\"]+)['\"]", meta)
    own = (mrepo.group(1) if mrepo else "").lower()
    everything = {"index.html": html, "css/app.css": css, "js/app.js": js, "sw.js": sw,
                  "manifest": man, "README": readme, "app-meta": meta, "changelog": chlog}
    for name, text in everything.items():
        left = set(re.findall(r"\{\{[A-Z_]+\}\}", text))
        if left:
            fails.append(f"{name}: unfilled placeholders {sorted(left)}")

    if not ATTRIB.search(html):
        fails.append("attribution line is not exactly 'App created by Isabella Navarro, MD. Latest version <Month YYYY>. isaymotion@gmail.com'")
    if "viewport-fit=cover" not in html:
        fails.append("viewport meta lacks viewport-fit=cover")
    if 'name="theme-color"' not in html:
        fails.append("no theme-color meta")
    if "<!doctype html>" not in html.lower():
        fails.append("missing doctype")

    ext_css = re.findall(r'<link[^>]+rel="stylesheet"[^>]+href="(https?://[^"]+)"', html)
    for u in ext_css:
        if "fonts.googleapis.com" not in u:
            fails.append(f"external stylesheet not allowed: {u}")
    for u in re.findall(r'<script[^>]+src="(https?://[^"]+)"', html):
        fails.append(f"external script not allowed (apps must work offline): {u}")

    if css:
        if ':root[data-theme="dark"]' not in css or "prefers-color-scheme: dark" not in css:
            fails.append("dark tokens must be in both :root[data-theme=dark] and the prefers-color-scheme block")
        for tok in ["--paper", "--surface", "--ink", "--rule", "--night", "--accent", "--r-md", "--top"]:
            if tok + ":" not in css:
                fails.append(f"token {tok} missing from css/app.css")
        if "prefers-reduced-motion" not in css:
            warns.append("no prefers-reduced-motion rule")
        if "safe-area-inset" not in css:
            fails.append("no safe-area-inset padding (iPhone notch/home bar)")

    if js:
        m = re.search(r"PREFIX\s*=\s*['\"]([^'\"]+)['\"]", js)
        if not m:
            fails.append("js/app.js: no storage PREFIX")
        else:
            p = m.group(1)
            for x, owner in LIVE_PREFIXES.items():
                if (p.startswith(x) or x.startswith(p)) and owner != own:
                    fails.append(f"storage prefix '{p}' collides with {owner} (all apps share isaymotion.github.io)")
        if "ArrowLeft" not in js or "ArrowRight" not in js or "altKey" not in js:
            fails.append("Alt+Left/Right history shortcuts not wired")
        if "scrollRestoration" not in js:
            fails.append("scroll restoration not wired")
        if "data-theme" not in js or "prefers-color-scheme" not in js:
            fails.append("3-state theme toggle not wired")
        for i in ["bk-export", "bk-file"]:
            if i not in html and i not in js:
                fails.append(f"backup control #{i} missing")
        if "localStorage" in js and "try" not in js:
            fails.append("localStorage used without try/catch")
        if "serviceWorker" not in js:
            warns.append("service worker not registered")

    if sw:
        try:
            import check_sw
            ok_sw, msg_sw = check_sw.check(root)
            if not ok_sw:
                fails.append("sw.js contract: " + msg_sw)
        except Exception as ex:  # noqa: BLE001
            warns.append(f"check_sw.py could not run: {ex}")
        m = re.search(r"PREFIX\s*=\s*['\"]([^'\"]+)['\"]", sw)
        if not m:
            fails.append("sw.js: no cache PREFIX (other apps' caches would be wiped)")
        else:
            for x, owner in LIVE_CACHE.items():
                if m.group(1).startswith(x) and owner != own:
                    fails.append(f"sw.js cache prefix '{m.group(1)}' collides with {owner}")
        if "indexOf(PREFIX) === 0" not in sw and "startsWith(PREFIX)" not in sw:
            fails.append("sw.js activate must delete only caches starting with its own PREFIX")

    if man:
        for k in ['"start_url"', '"display"', '"icons"', '"theme_color"', '"background_color"']:
            if k not in man:
                fails.append(f"manifest lacks {k}")
    if readme and "GitHub Pages" not in readme:
        warns.append("README does not mention GitHub Pages upload steps")

    vers = set()
    for name, text in [("app-meta", meta), ("changelog", chlog), ("sw.js", sw)]:
        m = re.search(r"(\d+\.\d+\.\d+)", text)
        if m:
            vers.add(m.group(1))
    if len(vers) > 1:
        fails.append(f"version numbers disagree across files: {sorted(vers)}")
    if chlog and "APP_CHANGELOG" not in chlog:
        fails.append("data/changelog.js must define window.APP_CHANGELOG")

    if a.browser and not fails:
        fails += browser_pass(root, warns)

    for w in warns:
        print("WARN ", w)
    for f in fails:
        print("FAIL ", f)
    print("\n" + ("PASS — design contract met" if not fails else f"{len(fails)} problem(s)"))
    sys.exit(1 if fails else 0)


def browser_pass(root, warns):
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        warns.append("playwright not installed; skipped browser pass (pip install playwright && playwright install chromium)")
        return []
    import http.server, socketserver, threading, functools, os
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(root))
    srv = socketserver.TCPServer(("127.0.0.1", 0), handler)
    port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    qa = root / "_qa"; qa.mkdir(exist_ok=True)
    fails = []
    with sync_playwright() as p:
        b = p.chromium.launch()
        for w, label in [(390, "phone"), (1024, "tablet"), (1280, "desktop")]:
            for theme in ["light", "dark"]:
                pg = b.new_page(viewport={"width": w, "height": 844}, color_scheme=theme)
                # Simulate airplane mode: the app must look right on system fonts with Google Fonts unreachable.
                pg.route(re.compile(r"https?://(?!127\.0\.0\.1)"), lambda r: r.abort())
                pg.set_default_timeout(15000)
                errs = []
                pg.on("pageerror", lambda e: errs.append(str(e)))
                pg.goto(f"http://127.0.0.1:{port}/index.html")
                pg.wait_for_timeout(500)
                over = pg.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth + 1")
                if over:
                    fails.append(f"horizontal overflow at {w}px {theme}")
                if errs:
                    fails.append(f"JS errors at {w}px {theme}: {errs[:2]}")
                if w < 1100:
                    if pg.locator("#menu-btn").count():
                        pg.click("#menu-btn"); pg.wait_for_timeout(300)
                        if not pg.evaluate("document.body.classList.contains('drawer-open')"):
                            fails.append(f"drawer did not open at {w}px")
                        pg.keyboard.press("Escape"); pg.wait_for_timeout(300)
                        if pg.evaluate("document.body.classList.contains('drawer-open')"):
                            fails.append("drawer did not close on Escape")
                if w < 1100 and pg.locator("#menu-btn").count():
                    pg.evaluate("document.getElementById('menu-btn').click()"); pg.wait_for_timeout(200)
                    has_group = pg.evaluate("Array.from(document.querySelectorAll('.nav-label')).some(function(l){return /other apps|iba pang app/i.test(l.textContent)})")
                    want_group = pg.evaluate("!!window.SHOW_OTHER_APPS")
                    if want_group and not has_group:
                        fails.append("drawer has no 'Other apps' group although SHOW_OTHER_APPS is true")
                    if has_group and not want_group:
                        fails.append("'Other apps' group shown although SHOW_OTHER_APPS is off")
                    pg.keyboard.press("Escape"); pg.wait_for_timeout(200)
                if not pg.locator("#bk-export").count():
                    fails.append("export button not rendered")
                pg.screenshot(path=str(qa / f"{label}-{theme}.png"), full_page=True)
                pg.close()
        b.close()
    srv.shutdown()
    print(f"screenshots in {qa} (delete _qa/ before uploading)")
    return fails


if __name__ == "__main__":
    main()
