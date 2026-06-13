# Inputs — for the assistant (low-leverage loading)

**This is the assistant's job.** Load the raw exam materials here, organized by subject → level →
topic. Do **not** run sessions or touch anything outside `inputs/` (no gap files, guides, or status
files — those belong to Claude and the student).

## Easiest path: drop into `_inbox/`, let Claude file it
Instead of hand-filing into the five subfolders, **drop raw materials into `inputs/_inbox/`** —
loosely, or sorted into `_inbox/[Subject]/[Topic]/` subfolders if you know them — and have the
student tell Claude *"ingest the inbox."* Claude reads each file, classifies it
(subject/level/topic/category), renames it to the convention, **shows you the mapping**, and files it
into the tree below. See `inputs/_inbox/_README.md` and `system/playbooks/00_ingest_inputs.md`. The
manual route below still works if you prefer it.

## Folder pattern

```
inputs/[Subject]/[Level]/[Topic_Name]/
    past_papers/        ← Q-only or Q+A, each file labelled by year (e.g. 2023_p1.pdf)
    official_docs/      ← syllabus AND mark schemes (keep them together)
    chapter_notes/      ← textbook sections, lecture notes
    model_answers/      ← exemplar / model responses
    school_resources/   ← anything else from school
```

- `[Subject]` ∈ `CSC`, `Maths`, `GP`, `Chemistry`, `Biology`.
- `[Level]` ∈ `H2`, `H1`. (H2 is the current focus. GP is H1 only.)
- `[Topic_Name]` uses **underscores, no spaces**, and a **real content name**
  (e.g. `Chemical_Energetics`, not `Topic_1`). Create the topic folder when you load its materials.

## The 3 minimum inputs (a topic isn't ready without these)

1. **Past papers** (the more years, the better).
2. **Official docs** — syllabus **and** mark schemes.
3. **Mark schemes OR model answers** — if no public mark scheme exists, model answers / teacher-marked
   work is the acceptable proxy.

If a topic is missing one of these, leave a short note in its folder so the student knows the guide
for it will carry a lower confidence ceiling.

## Naming quick rules
- Underscores, no spaces, everywhere.
- Label past papers by year and paper (`2022_p2.pdf`, `2022_p2_ms.pdf` for the mark scheme).
- Don't rename or reorganize after Claude has built a guide on a topic.
