# Playbook 00 — Ingest the Inbox (raw pile → structured inputs)

> **Status: v1 — refine after the first real ingest.** This is the newest playbook and has not yet
> been run end-to-end. Treat the **first batch as the calibration run**: tighten these rules from
> what actually happens, don't pre-write imagined edge cases.

**Goal:** turn the rough pile the assistant dropped in `inputs/_inbox/` into correctly-named,
correctly-filed materials under `inputs/[Subject]/[Level]/[Topic]/[category]/`, so guide-building
(playbook `01`) can ground on them. **This is the one place you touch `inputs/` — mechanical filing,
not generation.**

> Definitions: the input contract (5 categories, the 3-minimum-inputs bar, naming) is in
> `inputs/_README.md`. Grounding hierarchy: `spec.md` §13. Naming: `spec.md` §12.

---

## Preconditions
- The assistant has dropped files into `inputs/_inbox/` — **hinted** (`_inbox/[Subject]/[Topic]/...`)
  or as a **raw pile** (loose files). Both are valid.
- Triggered by the student saying e.g. *"ingest the inbox."* Never auto-run.

## Classify each file (four fields)
For every file, determine four fields and **mark each as `given`** (from a hint subfolder or the
filename) **or `inferred`** (read from the file's content):
1. **Subject** ∈ CSE · Maths · GP · Chemistry · Biology.
2. **Level** ∈ H2 · H1. (GP is H1 only.) If a paper doesn't state its level, infer from syllabus
   code / difficulty but mark it `inferred` and low-confidence.
3. **Topic** — a real content name, underscores, no spaces (`Chinese_Politics`, never `Topic_1`).
   A hint subfolder wins; otherwise derive from the syllabus + content.
4. **Category** ∈ past_papers · official_docs · chapter_notes · model_answers · school_resources
   (definitions in `inputs/_README.md`).

## Naming (apply on the move)
- Underscores, no spaces, everywhere.
- Past papers `[year]_p[N].pdf`; their mark schemes `[year]_p[N]_ms.pdf`.
- **Never invent metadata you cannot see in the file.** If the year or paper number is not actually
  on the page, do **not** guess it into the filename — flag it for the student to supply.

## Confidence gate (the grounding guard)
- **All four fields confident** (given, or clearly read) → stage the move.
- **Any field low-confidence, or a conflict** (hint says X, content says Y) → **quarantine**: leave
  the file in `_inbox/`, list it under "needs confirmation" with your best guess. **Never silently
  misfile and never silently rename** — misfiled grounding is worse than an unfiled file.

## Procedure
1. **List** everything in `_inbox/` (recurse hint subfolders).
2. For each file, **read enough to classify** the four fields; build the
   `original_path → destination_path` mapping; tag every field `given`/`inferred`.
3. **Show the full mapping table to the student before moving anything** — each row: original name,
   destination, and which fields were inferred. *This table is the rename/refile audit* — it is how a
   misread year or a wrong topic gets caught.
4. On approval, **create missing destination folders and `move`** (not copy) the confident files.
   Leave quarantined files in place.
5. **Report:**
   - what moved where;
   - what's quarantined and why (the field in doubt + best guess);
   - **per topic touched, whether it now clears the 3-minimum-inputs bar** — i.e. what's ready for
     a guide, and what's still missing.
6. **Stop at filed-and-reported.** Do not build guides here — that's playbook `01`.

## Done when
`_inbox/` holds only quarantined files (or is empty), every moved file traces to a real
subject/level/topic/category, the student has seen the mapping, and the report states which topics
are now ready for playbook `01`.
