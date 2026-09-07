import os
import json
import base64
import glob

html_path = 'index.html'
css_path = 'css/styles.css'
js_path = 'js/app.js'

with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()
with open(css_path, 'r', encoding='utf-8') as f:
    css_content = f.read()
with open(js_path, 'r', encoding='utf-8') as f:
    js_content = f.read()

fiche_b64 = {}
# Extract exact paths from js/app.js to ensure perfect key matching
import re
fiches = re.findall(r"file:\s*'(.*?)'", js_content)

# Real content counters, computed from the bundled fiches, so the homepage
# stat cards (pièges / cas) always reflect the actual content.
stats = {'pieges': 0, 'memos': 0, 'cas': 0, 'reformulations': 0}

for p_fwd in fiches:
    # Read file corresponding to the exact path in app.js
    file_path = p_fwd.replace('/', '\\') # convert to windows path for reading
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            raw = f.read()
            fiche_b64[p_fwd] = base64.b64encode(raw.encode('utf-8')).decode('ascii')
            stats['pieges'] += len(re.findall(r'class="[^"]*\bpiege\b[^"]*"', raw))
            stats['memos'] += len(re.findall(r'class="[^"]*\bmemo\b[^"]*"', raw))
            stats['cas'] += len(re.findall(r'class="[^"]*\bcas\b[^"]*"', raw))
            stats['reformulations'] += len(re.findall(r'class="[^"]*\b(?:simplification|reformulation)\b[^"]*"', raw))
    except Exception as e:
        print(f"Warning: Could not bundle {p_fwd}: {e}")

print(f"Content stats: {stats}")

fiche_b64_json = json.dumps(fiche_b64)
fiche_stats_json = json.dumps(stats)

# Dark theme injected into each fiche. Fiches live in an iframe with their own
# CSS, so the portal's dark mode never reaches them. We redefine the fiche's
# own palette variables (so even inline styles like background:var(--lred)
# follow) plus a few hard-coded light backgrounds. Activated by data-theme.
fiche_dark_css = r"""
html[data-theme="dark"]{ --lred:#3a1c1c; --lgreen:#1c2e18; --lgold:#332c12; --lgrey:#1e293b; --red:#ff7b7b; --green:#93d072; --gold:#ffcf4d; --blue:#6ba7e0; --grey:#94a3b8; }
html[data-theme="dark"] body{ background:#0f172a; color:#e2e8f0; }
html[data-theme="dark"] .toc{ border-color:#334155; }
html[data-theme="dark"] .toc h2{ color:#93c5fd; }
html[data-theme="dark"] h3{ color:#93c5fd; }
html[data-theme="dark"] h4{ color:#8fc0ef; }
html[data-theme="dark"] caption{ color:#93c5fd; }
html[data-theme="dark"] td{ border-bottom-color:#334155; }
html[data-theme="dark"] tr:nth-child(even) td{ background:#172033; }
html[data-theme="dark"] td.spec{ background:#16283d!important; }
html[data-theme="dark"] .precision{ background:#16283d; }
html[data-theme="dark"] .precision .lbl{ color:#8fc0ef; }
html[data-theme="dark"] .simplification{ background:#241833; color:#e6d5f7; }
html[data-theme="dark"] .simplification .lbl{ color:#c99bff; }
html[data-theme="dark"] .flowchart{ background:#0b1220; border-color:#334155; }
html[data-theme="dark"] .fc-node{ background:#1e293b; color:#e2e8f0; border-color:#3b82f6; }
html[data-theme="dark"] .fc-label{ background:#1e293b; border-color:#475569; }
html[data-theme="dark"] .tree{ background:#0b1220; border-color:#334155; }
html[data-theme="dark"] .cond-item{ background:#1e293b; border-color:#334155; }
html[data-theme="dark"] .cond-item b{ color:#93c5fd; }
html[data-theme="dark"] .cmp-card{ background:#1e293b; border-color:#334155; }
html[data-theme="dark"] .cas{ background:#1e293b; border-color:#3b82f6; }
html[data-theme="dark"] .cas h4.q{ color:#93c5fd; }
html[data-theme="dark"] .cas .espece{ background:#16283d; }
html[data-theme="dark"] footer{ border-top-color:#334155; }
"""
fiche_dark_css_js = json.dumps(fiche_dark_css)

decoder_js = f"""
const FICHE_STATS = {fiche_stats_json};
const FICHE_DARK_CSS = {fiche_dark_css_js};
const FICHE_B64 = {fiche_b64_json};
function getFicheHtml(path) {{
  const b64 = FICHE_B64[path];
  if (!b64) return '<p>Fiche introuvable</p>';
  const bytes = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
}}
// Inject the dark stylesheet and set the fiche's initial theme to match the
// portal, before it is turned into a Blob.
function injectFicheTheme(html) {{
  var theme = (typeof currentTheme !== 'undefined') ? currentTheme : 'light';
  var out = html.replace(/<html/i, '<html data-theme="' + theme + '"');
  var styleTag = '<style id="__dscg_dark">' + FICHE_DARK_CSS + '</style>';
  if (/<\\/head>/i.test(out)) {{ out = out.replace(/<\\/head>/i, styleTag + '</head>'); }}
  else {{ out = styleTag + out; }}
  return out;
}}
// Reflect a portal theme change into every already-loaded fiche iframe without
// reloading it (blob iframes are same-origin, so this is allowed).
function applyThemeToFiches(theme) {{
  document.querySelectorAll('iframe.viewer-frame').forEach(function(ifr) {{
    try {{
      var doc = ifr.contentDocument;
      if (doc && doc.documentElement) doc.documentElement.setAttribute('data-theme', theme);
    }} catch (e) {{}}
  }});
}}
// Load a fiche into the iframe via a Blob URL rather than srcdoc.
// srcdoc gives the iframe no real base URL, so internal chapter links
// (<a href="#s1">) resolve against the parent portal URL and reload the
// whole portal inside the iframe ("poupee russe"). A blob: URL gives the
// iframe its own base URL, so #anchors scroll within the fiche, and it
// stays same-origin so the section dropdown / filters / print still work.
function loadFicheSrc(iframe, path) {{
  const html = injectFicheTheme(getFicheHtml(path));
  if (iframe._blobUrl) {{ URL.revokeObjectURL(iframe._blobUrl); }}
  const blob = new Blob([html], {{ type: 'text/html;charset=utf-8' }});
  iframe._blobUrl = URL.createObjectURL(blob);
  iframe.src = iframe._blobUrl;
}}
"""

newjs = js_content.replace(
    'iframe.src = fiche.file;',
    'loadFicheSrc(iframe, fiche.file);'
).replace(
    'iframe.src = firstFiche.file;',
    'loadFicheSrc(iframe, firstFiche.file);'
)

html_content = html_content.replace('<link rel="stylesheet" href="css/styles.css">', f'<style>{css_content}</style>')
html_content = html_content.replace('<script src="js/app.js"></script>', f'<script>{decoder_js}\n{newjs}</script>')

import re
# Remove the default src="..." from all iframes to prevent GitHub Pages from loading the homepage inside them
html_content = re.sub(r'(<iframe[^>]+?)\s+src="[^"]+"([^>]*>)', r'\1\2', html_content)

with open('site_publie.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
print('Bundled site_publie.html generated successfully!')
