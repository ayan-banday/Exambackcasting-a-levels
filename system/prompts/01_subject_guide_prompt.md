# Prompt 01 — Build the Subject-Level Examiner's Guide

**Layer 1. Run once per subject/level.** This is the conversational entry point for building a
`subject_examiner_guide.md`. It produces a complete model of how the examiner thinks across the
whole subject. The deterministic mechanics (the 90% check, tagging, validation) live in
`playbooks/01_build_guides.md` — this prompt drives the flow and the research; the playbook governs
the rules.

> **Before you start:** enable **Research**. The system will not work without it. Confirm the
> minimum inputs exist in `inputs/[Subject]/[Level]/`: past papers, official docs (syllabus + mark
> schemes), and model answers / marked work where mark schemes are absent.

> **Project note (what's already decided — do NOT re-ask):** the exam is the **Singapore A-Level
> (SEAB/Cambridge)**; the subject and level are given by the student; the subject's **domain and
> gap-closure type are already set in `subjects.md`**. So skip generic exam/country collection and
> any "directional gate" domain classification — read the type from `subjects.md` and proceed. Ask
> only which subject + level to build.

---

## Step 1 — Confirm scope

Ask the student which **subject + level** (e.g. "Chemistry H2") to build, then confirm the inputs
you can see and the type from `subjects.md`:

> "Building the **[Subject] [Level]** guide. Type from the registry: **[type]**. Inputs I can see:
> [list]. Missing: [list]. Is this correct before I research?"

If inputs are thin, **state the confidence ceiling you'll be able to reach** — do not proceed
silently. If a **gold-standard example guide** exists (e.g. the CSC guide), read it first and match
its depth, structure, and tone — it is the quality bar.

---

## Step 2 — Ingest inputs, then research (Research enabled)

**Read the loaded inputs first.** Ingest everything in `inputs/[Subject]/[Level]/` (syllabus +
official docs, past papers, mark schemes, model answers) — this is the primary ground truth and the
content node map is built from it. **Then** research to *supplement* what the inputs don't cover
(grounding hierarchy: `spec.md` §13). Conduct an exhaustive search, anchored to the **exact exam +
subject**. Look for:
- Official past papers and question banks (SEAB/Cambridge)
- Official syllabus, learning objectives, examiner reports
- Mark schemes and model answers
- Examiner commentary on how questions are set
- Topic frequency data across multiple years
- Recent syllabus changes or newly introduced topics
- Common misconceptions and traps flagged in examiner reports

**How to search well:** every query anchors three things — the exact exam name, the exact subject,
and the specific resource you want. Never lead with generic terms ("study guide", "revision notes").
- **Good:** `Singapore A-Level H2 Chemistry kinetics examiner report mark scheme 2019 2022`
- **Bad:** `A-Level chemistry kinetics revision tips`

**Primary vs secondary:** weight **primary sources** (SEAB/Cambridge, official portals, examiner
reports) **10×** over secondary ones (revision sites, tutoring blogs, YouTube). The test: *did a
human who actually set or marked this exam write it?* If only secondary sources exist, **say so** in
the confidence report.

**Output a Research Confidence Report:**
> **What I found:** [exactly what, and from where]
> **What is missing:** [exactly what could not be found]
> **Confidence level:** HIGH / MEDIUM / LOW
> **Reason:** [one paragraph]

- **If LOW:** say so plainly — *"I don't have enough reliable material to build an accurate guide; a
  guide built on this could misdirect your study. Provide official past papers, the syllabus, or a
  legitimate mock — or I can build a targeted plan to find them. Proceed with the caveat that this
  guide will need calibration?"* Do not proceed until the student confirms.
- **If proceeding on LOW anyway:** stamp the guide with the LOW-confidence warning (`spec.md` §5).

Do not move to Step 3 until the student confirms the research report.

---

## Step 3 — Build the guide

Build `[Subject]/[Level]/subject_examiner_guide.md` from
`templates/subject_examiner_guide.template.md`. This is **not** a subject summary — it's a model of
how the examiner thinks, thorough enough that a new examiner could set a full paper from it. Cover:

1. **Exam overview** — format, question types, timing, marking; higher- vs lower-order split;
   Bloom levels tested; what the exam consistently rewards vs punishes.
2. **Topic frequency map** — every major topic with frequency, Bloom level, exam weight.
3. **Dominant question archetypes** — for each: what it looks like, how often it appears, the
   specific trap construction this exam uses, and what a correct vs incorrect approach looks like.
   Archetypes come from **what the research reveals**, not a pre-set list.
4. **How distractors are built** — the misconceptions wrong options target; the most common trap;
   what half-knowing students reliably get wrong and why.
5. **High-yield topics** (top 5–7) — why each is high-yield, what aspects are tested, the usual
   angle, and the most common wrong answer.
6. **Topics likely this cycle** — overdue by frequency, recently updated in the syllabus, or flagged
   in recent examiner reports.
7. **Examiner priorities** — a direct, unhedged briefing of what this examiner values.

**Tag every claim** `[OFFICIAL]` / `[INFERRED]` (`spec.md` §5). Then **run the 90% confidence check**
per `playbooks/01_build_guides.md` (5 dimensions, hold-out questions, fix-and-re-test failing
dimensions only).

---

## Step 4 — Close out

Update the matching row in `subjects.md` (status → BUILT, validation source, confidence ceiling).
Then tell the student:

> "Your **[Subject] [Level]** Examiner's Guide is ready and saved. You don't need to run this again
> for this subject. **Within your first week of studying, take an official mock.** If your session
> performance is >70% but the official mock is <50%, come back and we'll recalibrate — the guide is
> a hypothesis; the official paper is ground truth."
