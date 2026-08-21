#!/usr/bin/env python3
"""Convert a cluster drill markdown into a self-contained HTML drill.

Questions and mark schemes live in two halves of the markdown. This interleaves them so each
question part is immediately followed by its own hidden, revealable answer, and swaps every
[FIGURE: ...] placeholder for the real extracted image, embedded as base64.
"""
import base64, html, json, os, re, sys

MD   = sys.argv[1]
FIGS = sys.argv[2]
OUT  = sys.argv[3]
CFG  = sys.argv[4] if len(sys.argv) > 4 else None

# Per-cluster config. Pass a JSON file as argv[4] shaped like:
#   {"title": "...", "subtitle": "...", "intro_html": "...", "los_html": "...",
#    "figmap": {"3|a": "q3a.png", ...},
#    "caption": {"q3a.png": "ACJC Prelim 2024 P1 Q5", ...}}
# figmap keys are "<question>|<part>". Falls back to the Cluster 1 map below when absent.
CONFIG = json.load(open(CFG, encoding="utf-8")) if CFG else {}

# figure slot -> filename, in the order [FIGURE: ...] blocks appear inside each question
FIGMAP = {
    ("2", "a"): "q3a.png",  ("2", "b"): "q3b.png",
    ("3", "a"): "q5a.png",
    ("4", "a"): "q4a.png",  ("4", "b"): "q4b.png",
    ("5", "a"): "q7a.png",
    ("6", "c"): "q8b.png",  ("6", "d"): "q8d.png",
    ("8", "a"): "q10a.png", ("8", "d"): "q9c.png",
    ("9", "a"): "q10c.png", ("9", "b"): "q11b.png",
    ("10", "b"): "q13b.png",
    ("12", "a"): "q12.png", ("12", "b"): "q12b.png", ("12", "c"): "q12c.png",
}
CAPTION = {
    "q3a.png": "ACJC Prelim 2024 P1 Q5", "q3b.png": "HCI/School Prelim 2024 P1 Q4",
    "q4a.png": "AJC Prelim P1 Q3 (Topical 2007)", "q4b.png": "NJC Prelim 2024 P2 Q2c, Fig. 2.2",
    "q5a.png": "HCI/School Prelim 2023 P1 Q5", "q7a.png": "HCI/School Prelim 2023 P2 Q1, Fig. 1.2",
    "q8b.png": "ACJC Prelim 2020 P2 Q2, Fig. 2.1", "q8d.png": "NJC Prelim 2024 P2 Q1, Fig. 1.1",
    "q9c.png": "JJC Prelim 2018 P2 Q2, Fig. 2.1", "q10a.png": "ASRJC Prelim 2023 P2 Q1, Fig. 1.1",
    "q10c.png": "AJC Prelim 2018 P1 Q3", "q11b.png": "RVHS Prelim 2018 P2 Q2, Fig. 2.1",
    "q12.png": "PJC Prelim P1 Q6", "q13b.png": "NYJC Prelim P1 Q1 (Topical 2007)",
    "q12b.png": "NYJC Prelim 2020 P2 Q1, Fig. 1.1", "q12c.png": "TMJC Prelim 2025 P2 Q1, Fig. 1.1",
}

# --- per-cluster config overrides -------------------------------------------------
# "figmap": {} means this drill has no figures on purpose. Without the `is not None` test an
# empty map fell through to the Cluster 1 default and printed a red "figures not recovered" panel
# listing another cluster's filenames.
if CONFIG.get("figmap") is not None and not CONFIG.get("figmap"):
    FIGMAP = {}
elif CONFIG.get("figmap"):
    # keys are "<question>|<part>"; an empty part means the figure sits in the question stem,
    # before part (a), which the parser represents as part=None
    def _key(k):
        q, _, p = k.partition("|")
        return (q, p if p else None)
    FIGMAP = {_key(k): v for k, v in CONFIG["figmap"].items()}
if CONFIG.get("caption"):
    CAPTION = dict(CONFIG["caption"])
# Ethan, 21 Aug: "remove this huge chunk for all the clusters we dont need it."
# No intro block. The drill opens on Question 1. A config may still set intro_html to override.
DEFAULT_INTRO = ""

TITLE    = CONFIG.get("title", "Cluster Drill")
SUBTITLE = CONFIG.get("subtitle", "H2 Biology 9477 - Book 1")
INTRO    = CONFIG.get("intro_html", DEFAULT_INTRO)
LOS      = CONFIG.get("los_html", "")
# Ethan, 12 Aug: rate confidence out loud before every reveal. On by default for every drill;
# set "confidence_prompt": false in a config to switch it off.
CONFIDENCE = CONFIG.get("confidence_prompt", True)
# Light background by default; "dark_theme": true restores the old palette.
DARK_CSS = ':root{--bg:#14161a;--card-bg:#1c1f26;--border:#2f343d;--text:#e8eaed;--muted:#9aa3b0;--blue:#6ea8fe;--blue-soft:#1b2432;--amber:#e0a13a;--green:#4ade80;--green-soft:#16261d;--cover:#262b34;--purple:#c4a7fd;--purple-soft:#221c33;--red:#f87171;--red-soft:#2a1a1a;--btn:#232830;--btn-hover:#2f343d;--chip-bg:#3d3016;--chip-fg:#f0c674;--th-bg:#232830;--quote-bg:#2a2415;--code-bg:#262b34;--fig-bg:#f7f7f7;--dash:#3a4150;--conf-b:#b9c2d0}'
USE_DARK = CONFIG.get("dark_theme", False)

CONFIDENCE_TEXT = CONFIG.get(
    "confidence_text",
    "Say your confidence out loud before revealing: <b>high</b> / <b>medium</b> / <b>guessed</b>.",
)
# ----------------------------------------------------------------------------------

src = open(MD, encoding="utf-8").read()


def strip_emdash(t):
    """Em and en dashes are banned in everything Ethan reads. They survive in figure
    attributions and bracketed tags long after the prose is clean, so normalise them here
    rather than relying on each build to remember. Set "keep_dashes": true to opt out."""
    t = re.sub(r"\[(INFERRED|OFFICIAL|SCHOOL|CROSS-CLUSTER|FIGURE|FIG)\s*[—–]\s*", r"[\1: ", t)
    t = re.sub(r"\s+[—–]\s+", ", ", t)          # mid-sentence separator
    return t.replace("—", ", ").replace("–", "-")   # anything left over


if not CONFIG.get("keep_dashes"):
    src = strip_emdash(src)
    # the header strings and figure captions come from the config, not the markdown,
    # so they bypass the pass above
    TITLE, SUBTITLE = strip_emdash(TITLE), strip_emdash(SUBTITLE)
    INTRO, LOS = strip_emdash(INTRO), strip_emdash(LOS)
    try:
        CAPTION = {k: strip_emdash(v) for k, v in CAPTION.items()}
    except NameError:
        pass

qhalf, mhalf = re.split(r"^# Mark Schemes\s*$", src, maxsplit=1, flags=re.M)


def split_questions(text):
    out, cur, buf = {}, None, []
    for line in text.split("\n"):
        m = re.match(r"^### Question (\d+)", line)
        if m:
            if cur:
                out[cur] = "\n".join(buf)
            cur, buf = m.group(1), []
            continue
        if cur:
            buf.append(line)
    if cur:
        out[cur] = "\n".join(buf)
    return out


def split_parts(body):
    """Split a question body into [(part_letter_or_None, text), ...] preserving order."""
    chunks, cur, buf = [], None, []
    for line in body.split("\n"):
        m = re.match(r"^\*\*\(([a-z])\)\*\*", line)
        if m:
            if buf:
                chunks.append((cur, "\n".join(buf)))
            cur, buf = m.group(1), [line]
        else:
            buf.append(line)
    if buf:
        chunks.append((cur, "\n".join(buf)))
    return chunks


OPT_RE = re.compile(r"^(?:\*\*)?([A-D])(?:\*\*)?([\.\)]?)\s+\S")


def is_mcq_run(lines, i):
    """True when lines[i] really opens an option block rather than a sentence starting 'A '.

    An unpunctuated bare letter is ambiguous, so demand a run of at least two consecutive
    lines lettered sequentially from A. Punctuated or bolded letters are unambiguous.
    """
    m = OPT_RE.match(lines[i])
    if not m:
        return False
    if m.group(2) or lines[i].startswith("**"):
        return True                       # "A)", "A.", "**A**" - never a sentence
    if m.group(1) != "A":
        return False                      # a run has to start at A
    letters, j = [], i
    while j < len(lines):
        mm = OPT_RE.match(lines[j])
        if mm:
            letters.append(mm.group(1)); j += 1
        elif lines[j].strip() and letters:
            j += 1                        # a wrapped continuation line
        else:
            break
    return letters[:2] == ["A", "B"]


def b64img(fn):
    p = os.path.join(FIGS, fn)
    if not os.path.exists(p):
        return None
    return base64.b64encode(open(p, "rb").read()).decode()


def inline(t):
    t = html.escape(t)
    t = re.sub(r"\*\*\[(\d+)\]\*\*", r'<span class="marks">[\1]</span>', t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t, flags=re.S)
    t = re.sub(r"(?<!\*)\*([^*\n]+?)\*(?!\*)", r"<em>\1</em>", t)
    t = re.sub(r"`([^`]+?)`", r"<code>\1</code>", t)
    return t


def render(text, qno=None, part=None, figs_used=None):
    """Markdown-ish block renderer: tables, blockquotes, lists, figures, paragraphs."""
    out, lines, i = [], text.split("\n"), 0
    while i < len(lines):
        ln = lines[i]
        # figure placeholder (may span several lines until the closing bracket)
        if ln.lstrip().startswith("[FIGURE:"):
            blk = [ln]
            while "]" not in blk[-1] and i + 1 < len(lines):
                i += 1
                blk.append(lines[i])
            desc = " ".join(blk).strip().lstrip("[").rstrip("]")
            desc = re.sub(r"^FIGURE:\s*", "", desc)
            slot = FIGMAP.get((qno, part))
            if isinstance(slot, list):
                k = (qno, part)
                idx = FIG_IDX.get(k, 0)
                fn = slot[idx] if idx < len(slot) else None
                FIG_IDX[k] = idx + 1
            else:
                fn = slot
            data = b64img(fn) if fn else None
            if data:
                out.append(
                    f'<figure class="fig"><img src="data:image/png;base64,{data}" alt="figure">'
                    f'<figcaption>{html.escape(CAPTION.get(fn, fn))}</figcaption></figure>'
                )
                if figs_used is not None:
                    figs_used.add(fn)
            else:
                out.append(
                    '<div class="fig-missing"><strong>Figure not recovered.</strong> '
                    f"Described from the source paper: {inline(desc)}</div>"
                )
            i += 1
            continue
        # table
        if ln.startswith("|"):
            tbl = []
            while i < len(lines) and lines[i].startswith("|"):
                tbl.append(lines[i]); i += 1
            rows = [r for r in tbl if not re.match(r"^\|[\s\-:|]+\|$", r)]
            cells = [[c.strip() for c in r.strip().strip("|").split("|")] for r in rows]
            h = "".join(f"<th>{inline(c)}</th>" for c in cells[0])
            b = "".join("<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>" for r in cells[1:])
            out.append(f'<div class="tw"><table><thead><tr>{h}</tr></thead><tbody>{b}</tbody></table></div>')
            continue
        # blockquote
        if ln.startswith(">"):
            q = []
            while i < len(lines) and lines[i].startswith(">"):
                q.append(lines[i].lstrip("> ").rstrip()); i += 1
            out.append(f'<blockquote>{inline(" ".join(q))}</blockquote>')
            continue
        # list
        if re.match(r"^\s*[-*]\s+", ln):
            items = []
            while i < len(lines) and re.match(r"^\s*[-*]\s+", lines[i]):
                items.append(re.sub(r"^\s*[-*]\s+", "", lines[i])); i += 1
            out.append("<ul>" + "".join(f"<li>{inline(x)}</li>" for x in items) + "</ul>")
            continue
        # MCQ option block - "A ...", "B ...", "C ...", "D ..." each on its own line.
        # A bare "A " also starts an ordinary sentence ("A cell divides..."), so require a
        # real run: at least two consecutive lines lettered sequentially from A. Punctuated
        # or bolded letters ("A)", "A.", "**A**") are unambiguous and pass on their own.
        if re.match(r"^(?:\*\*)?[A-D](?:\*\*)?[\.\)]?\s+\S", ln) and is_mcq_run(lines, i):
            opts = []
            while i < len(lines) and re.match(r"^(?:\*\*)?[A-D](?:\*\*)?[\.\)]?\s+\S", lines[i]):
                letter = re.match(r"^(?:\*\*)?([A-D])", lines[i]).group(1)
                body = re.sub(r"^(?:\*\*)?[A-D](?:\*\*)?[\.\)]?\s+", "", lines[i]); i += 1
                # an option may wrap onto following indented/continuation lines
                while (i < len(lines) and lines[i].strip()
                       and not re.match(r"^(?:\*\*)?[A-D](?:\*\*)?[\.\)]?\s+\S", lines[i])
                       and not lines[i].startswith(("|", ">", "[FIGURE:", "**"))):
                    body += " " + lines[i].strip(); i += 1
                opts.append((letter, body))
            out.append('<div class="mcq">' + "".join(
                f'<div class="opt"><span class="optl">{L}</span><span class="optb">{inline(b)}</span></div>'
                for L, b in opts) + "</div>")
            continue
        # paragraph
        if ln.strip():
            para = []
            first = True
            while i < len(lines) and lines[i].strip() and not lines[i].startswith(("|", ">", "[FIGURE:")) \
                    and not re.match(r"^\s*[-*]\s+", lines[i]) \
                    and not (is_mcq_run(lines, i) and not first):
                para.append(lines[i]); i += 1
                first = False
            out.append(f"<p>{inline(' '.join(para))}</p>")
            continue
        i += 1
    return "\n".join(out)


FIG_IDX = {}
QS, MS = split_questions(qhalf), split_questions(mhalf)
figs_used = set()
cards = []

for qno in sorted(QS, key=int):
    qbody, mbody = QS[qno], MS.get(qno, "")
    marks = re.search(r"\[(\d+) marks?\]", qhalf.split(f"### Question {qno}")[1][:40])
    total = marks.group(1) if marks else "?"
    qparts = split_parts(qbody)
    # A question with no lettered parts yields one chunk keyed None. Dropping it silently
    # discarded the whole mark scheme, so key it None and render it under the question.
    mparts = dict(split_parts(mbody))
    # trailing metadata (Source / Concepts fused) lives in the last mark-scheme chunk
    meta = ""
    mm = re.search(r"(\*\*Source:\*\*.*)", mbody, flags=re.S)
    if mm:
        meta = mm.group(1)
        for k in mparts:
            mparts[k] = mparts[k].replace(meta, "")

    blocks = []
    for part, text in qparts:
        blocks.append(f'<div class="qpart">{render(text, qno, part, figs_used)}</div>')
        if part in mparts and mparts[part].strip():
            ans = render(mparts[part], qno, part)
            if CONFIDENCE:
                blocks.append(f'<div class="confidence">{CONFIDENCE_TEXT}</div>')
            label = f"Answer  -  part ({part})" if part else "Answer"
            btn = f"Show answer ({part})" if part else "Show answer"
            blocks.append(
                f'<div class="block answer"><span class="label">{label}</span>'
                f'<div class="answer-content">{ans}</div>'
                f'<div class="answer-overlay"><button class="reveal-btn">{btn}</button></div></div>'
            )
    arch = render(meta, qno, None) if meta else "<p> - </p>"
    blocks.append(
        '<div class="block reveal-archetype"><span class="label">Sources &amp; concepts</span>'
        f'<div class="answer-content">{arch}</div>'
        '<div class="answer-overlay"><button class="reveal-btn">Show sources</button></div></div>'
    )
    cards.append(
        f'<div class="card" id="q{qno}"><h3>Question {qno} '
        f'<span class="marks">[{total} marks]</span></h3>' + "\n".join(blocks) + "</div>"
    )

toc = " ".join(f'<a href="#q{n}">Q{n}</a>' for n in sorted(QS, key=int))
_all = set()
for v in FIGMAP.values():
    _all.update(v if isinstance(v, list) else [v])
missing = sorted(_all - figs_used)

CSS = """
/* Light is the default: Ethan finds a white background easier to read from.
   Set "dark_theme": true in a config if a dark build is ever wanted again. */
:root{--bg:#ffffff;--card-bg:#fafafa;--border:#e2e5ea;--text:#16181d;--muted:#5b6472;--blue:#1d4ed8;
--blue-soft:#eef4ff;--amber:#a35a00;--green:#047857;--green-soft:#ecfdf5;--cover:#f1f3f6;
--purple:#6d28d9;--purple-soft:#f5f3ff;--red:#b91c1c;--red-soft:#fef2f2;--btn:#f1f3f6;--btn-hover:#e2e5ea;--chip-bg:#fff3d1;--chip-fg:#8a5a00;--th-bg:#f1f3f6;--quote-bg:#fffbeb;--code-bg:#f1f3f6;--fig-bg:#fafafa;--dash:#c4cad3;--conf-b:#3f4855}
.mcq{margin:10px 0 12px;padding:2px 0}
.opt{display:flex;gap:10px;margin:6px 0;align-items:baseline}
.optl{flex:0 0 1.6em;font-weight:700;color:var(--amber);font-family:-apple-system,sans-serif}
.optb{flex:1}
*{box-sizing:border-box}
body{font-family:'Charter','Georgia','Times New Roman',serif;max-width:960px;margin:0 auto;
padding:32px 22px 80px;line-height:1.65;color:var(--text);background:var(--bg)}
""" + (DARK_CSS if USE_DARK else "") + """
h1,h2,h3,.label,.controls,button{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif}
h1{font-size:1.9em;margin:0 0 6px;border-bottom:3px solid var(--muted);padding-bottom:10px}
h3{font-size:1.15em;margin:0 0 14px;color:var(--text)}
.meta{color:var(--muted);font-size:.9em;margin:4px 0 20px}
.intro{background:var(--card-bg);border:1px solid var(--border);border-left:4px solid var(--red);
padding:14px 18px;border-radius:6px;margin:14px 0 20px;font-size:.95em}
.los{background:var(--blue-soft);border:1px solid #2b3648;border-left:4px solid var(--blue);
padding:14px 18px;border-radius:6px;margin:0 0 26px;font-size:.9em}
.los table{border-collapse:collapse;width:100%;margin-top:8px}
.los td{padding:4px 8px 4px 0;border-bottom:1px solid #2b3648;vertical-align:top}
.los td:first-child{white-space:nowrap;font-weight:600;color:var(--blue);width:42%}
.los tr:last-child td{border-bottom:none}
.controls{position:sticky;top:0;background:var(--bg);padding:10px 0;z-index:100;
border-bottom:1px solid var(--border);margin-bottom:18px;display:flex;gap:10px;flex-wrap:wrap}
.controls button{background:var(--btn);color:var(--text);border:1px solid var(--border);padding:6px 14px;border-radius:5px;
cursor:pointer;font-size:.85em;font-weight:500}
.controls button:hover{background:var(--btn-hover)}
.toc{background:var(--card-bg);border:1px solid var(--border);padding:12px 20px;border-radius:6px;
margin-bottom:26px;font-size:.9em}
.toc a{color:var(--blue);text-decoration:none;margin-right:12px;line-height:2}
.card{background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:18px 22px;
margin:22px 0;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.qpart{margin:12px 0}
.block{margin:12px 0;padding:12px 16px;border-radius:6px;border-left:4px solid var(--border);
position:relative;min-height:56px}
.block.answer{background:var(--green-soft);border-left-color:var(--green)}
.block.reveal-archetype{background:var(--purple-soft);border-left-color:var(--purple);margin-top:20px}
.label{display:block;text-transform:uppercase;font-size:.72em;letter-spacing:.08em;font-weight:700;
margin-bottom:6px;color:var(--muted)}
.block.answer .label{color:var(--green)}
.block.reveal-archetype .label{color:var(--purple)}
.answer-overlay{position:absolute;inset:0;background:var(--cover);border-radius:6px;display:flex;
align-items:center;justify-content:center;cursor:pointer}
.answer-overlay.hidden{display:none}
.reveal-btn{background:var(--btn);border:1px solid var(--border);padding:7px 18px;border-radius:5px;
cursor:pointer;font-size:.85em;font-weight:600;color:var(--text)}
.reveal-btn:hover{background:var(--btn-hover)}
.confidence{margin:10px 0 -4px;padding:5px 12px;border:1px dashed var(--dash);border-radius:5px;
color:var(--muted);font-size:.78em;letter-spacing:.02em;
font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:transparent}
.confidence b{color:var(--conf-b);font-weight:600}
.marks{display:inline-block;font-size:.8em;background:var(--chip-bg);color:var(--chip-fg);padding:2px 8px;
border-radius:10px;font-weight:700;margin-left:4px;font-family:-apple-system,sans-serif}
.fig{margin:14px 0;padding:12px;background:var(--fig-bg);border:1px solid var(--border);border-radius:6px;text-align:center}
.fig img{max-width:100%;height:auto;border-radius:3px}
.fig figcaption{margin-top:8px;font-size:.8em;color:var(--muted);font-family:-apple-system,sans-serif}
.fig-missing{margin:14px 0;padding:12px 14px;background:var(--red-soft);border:1px solid var(--red);
border-left:4px solid var(--red);border-radius:6px;font-size:.9em}
.tw{overflow-x:auto;margin:12px 0}
table{border-collapse:collapse;width:100%;font-size:.92em;background:var(--card-bg)}
th,td{border:1px solid var(--border);padding:6px 10px;color:var(--text);text-align:left;vertical-align:top}
th{background:var(--th-bg);font-weight:600}
blockquote{margin:12px 0;padding:10px 16px;background:var(--quote-bg);border-left:4px solid var(--amber);
border-radius:4px;font-size:.93em}
code{background:var(--code-bg);padding:1px 5px;border-radius:3px;font-size:.9em}
ul{margin:8px 0;padding-left:22px}
p{margin:8px 0}
@media print{.controls,.answer-overlay{display:none!important}.card{page-break-inside:avoid}}
"""

JS = """
document.querySelectorAll('.answer-overlay').forEach(function(o){
  o.addEventListener('click', function(){ o.classList.add('hidden'); });
});
document.getElementById('revealAll').addEventListener('click', function(){
  document.querySelectorAll('.answer-overlay').forEach(function(o){ o.classList.add('hidden'); });
});
document.getElementById('hideAll').addEventListener('click', function(){
  document.querySelectorAll('.answer-overlay').forEach(function(o){ o.classList.remove('hidden'); });
});
"""

missing_note = ""
if missing:
    missing_note = ('<div class="fig-missing"><strong>Figures not yet recovered:</strong> '
                    + ", ".join(html.escape(m) for m in missing)
                    + ". Those parts carry the source paper's own description instead.</div>")

doc = f"""<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{TITLE}</title>
<style>{CSS}</style></head><body>
<h1>{TITLE}</h1>
<div class="meta">{SUBTITLE}</div>
{INTRO}
{LOS}
{missing_note}
<div class="controls">
<button id="revealAll">Reveal all answers</button>
<button id="hideAll">Hide all answers</button>
</div>
<div class="toc"><strong>Questions</strong><br>{toc}</div>
{"".join(cards)}
<script>{JS}</script>
</body></html>"""

open(OUT, "w", encoding="utf-8").write(doc)
print(f"wrote {OUT}")
print(f"  questions : {len(QS)}")
print(f"  figures   : {len(figs_used)} embedded" + (f", MISSING {missing}" if missing else ""))
print(f"  size      : {os.path.getsize(OUT)/1024/1024:.2f} MB")
