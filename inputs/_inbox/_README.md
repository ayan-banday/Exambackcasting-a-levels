# `_inbox/` — the drop zone (assistant's low-effort loading)

**Drop raw materials here. Don't sort them perfectly — Claude files them.** This is the easy
half of loading: you dump, Claude reads each file, classifies it, renames it to the convention,
shows you the mapping, and moves it into the real `inputs/[Subject]/[Level]/[Topic]/[category]/`
tree. Then say to the student: *"have Claude ingest the inbox."*

## Two ways to drop (both work — hinting just means fewer questions back)

**Hinted (preferred when you know it):** sort into `Subject/Topic` subfolders, and Claude only has
to infer the level + which of the 5 category folders:
```
_inbox/
    Maths/Integration/          ← e.g. 2023 paper 1, the syllabus, lecture notes
    CSE/Chinese_Politics/       ← drop that topic's files in here
```
- `Subject` ∈ `CSE`, `Maths`, `GP`, `Chemistry`, `Biology`.
- `Topic` = a real content name, underscores, no spaces (e.g. `Chinese_Politics`, not `Topic_1`).

**Raw pile (when you don't know / can't be bothered):** just drop the files loose in `_inbox/`.
Claude infers everything from each file's content. More may come back as "needs confirmation."

## What Claude does with it (playbook `system/playbooks/00_ingest_inputs.md`)
1. Reads each file → figures out **subject · level (H2/H1) · topic · category**.
2. Renames to the convention (`2023_p2.pdf`, mark scheme `2023_p2_ms.pdf`, underscores).
3. **Shows you the full `original → destination` mapping before moving anything** — so a misread
   year or wrong topic gets caught by eye.
4. Moves the confident ones; **quarantines anything ambiguous here** for you to confirm (it never
   silently misfiles — a wrong file pollutes the grounding the whole system depends on).
5. Reports which topics now clear the **3 minimum inputs** (past papers · official docs/syllabus +
   mark schemes · mark schemes OR model answers) — i.e. what's ready to build on.

## Notes
- The 5 category folders and naming rules are in `inputs/_README.md`.
- Contents of `_inbox/` are **gitignored** (transient staging) — only this README is tracked.
- You can still file directly into `inputs/[Subject]/[Level]/[Topic]/...` the manual way if you
  prefer; `_inbox/` is the shortcut, not a replacement.
