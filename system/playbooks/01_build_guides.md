# Playbook 01 — Build the Examiner's Guides (Subject & Topic)

**Goal:** produce the two validated guides that everything else depends on — the **subject guide**
(`[Subject]/[Level]/subject_examiner_guide.md`, built once per subject/level) and each **topic
guide** (`[Subject]/[Level]/[Topic_Name]/examiner_guide.md`, built once per topic). Both are
validated by the same **90% check**. The conversational flow is in `prompts/01_subject_guide_prompt.md`
(subject) and `prompts/02_topic_session_prompt.md` Step 4 (topic).

> Definitions live in `spec.md`: §1 (the two levels), §2 (types), §5 (90% check), §7 (archetype
> distribution). This playbook is the procedure; `spec.md` wins on any conflict.

---

## Preconditions

- **Subject guide:** `inputs/[Subject]/[Level]/` contains, at minimum, **past papers**, **official
  docs** (syllabus + mark schemes), and **model answers / marked work** where mark schemes are
  absent. The subject **type** is known from `subjects.md`. If a **gold-standard example** exists
  (e.g. the CSC guide in `prompts/`), read it first — it is the quality bar.
- **Topic guide:** the subject guide already exists. The topic guide inherits the subject's paper
  structure, mark logic, and trap model, then specialises them — but it is **grounded first in the
  topic's own loaded inputs** (`inputs/[Subject]/[Level]/[Topic]/`: chapter notes, model answers,
  topic-filtered past papers, school resources) plus the syllabus scope for the topic. Only after
  ingesting those do you use targeted search to fill **genuine gaps** the inputs don't cover, anchored
  to what this exam tests at this level. (Grounding hierarchy: `spec.md` §13.)

If inputs are missing or thin, **say so and state the confidence ceiling** — never proceed silently.

---

## A. Subject guide

1. **Ingest everything** in `inputs/[Subject]/[Level]/`. Read the syllabus to enumerate the full
   **content node map** (every node the exam can test). Read several years of past papers to see how
   the paper is actually structured.
2. **Build the guide** (template: `templates/subject_examiner_guide.template.md`) covering, across
   all topics: paper structure & format · mark scheme logic (reward per band) · content node map ·
   question archetypes + **numerical distribution** (mirrored later in generation) · **trap model**
   (the most valuable section — misconceptions the exam exploits) · the examiner's mental model.
   The 7-section structure in `prompts/01_subject_guide_prompt.md` Step 3 is the canonical layout.
3. **Tag every claim** `[OFFICIAL]` / `[INFERRED]` (`spec.md` §5). Never blur the two.
4. **Run the 90% check** (below).
5. **Write the file** and update the matching row in `subjects.md` (status → BUILT, validation
   source, confidence ceiling).

## B. Topic guide

1. **Create the topic folder** `[Subject]/[Level]/[Topic_Name]/` (underscores, real content name).
1a. **Ingest the topic's inputs first.** Read everything in `inputs/[Subject]/[Level]/[Topic]/`
   (chapter notes, model answers, topic past papers, school resources) and the syllabus section for
   this topic. The **content node map (step 3) is derived from these actual materials**, then
   cross-checked against the topic's past papers — not reconstructed from memory or the subject guide
   alone. Use research only to fill gaps the inputs don't cover (`spec.md` §13). If the topic's inputs
   are thin, say so and state the ceiling.
2. **Set the topic type.** Default = the subject's type from `subjects.md`. If this topic genuinely
   closes gaps differently, declare the override in the guide's front matter, e.g.
   `type: qualitative  # override of subject default 'quantitative' — reasoning-based, not calculation`.
3. **Write the guide** (template: `templates/topic_examiner_guide.template.md`), specific to this
   topic: **content node map** (becomes the coverage checklist for convergence) · **archetypes +
   distribution stated numerically** (mirrored exactly in generation) · mark-scheme logic for this
   topic · **trap model** for this topic (drive distractors from these) · **high-yield flags** (get
   15–20 questions per cluster instead of 10).
4. **Tag claims** `[OFFICIAL]` / `[INFERRED]`.
5. **Run the 90% check** (below) on held-out topic questions.

---

## The 90% confidence check (both guides)

Hold out **5–10 past-paper questions** the guide was *not* calibrated on. For each, predict all five
dimensions **before** looking at the answer, then check the real mark scheme / model answer and count
hits. The **five dimensions and their thresholds** are defined in **`spec.md` §5** (format ≥95%;
mark scheme ≥90%; content nodes ≥90%; question type ≥85%; trap model ≥85%).

- **All five must pass.** If one fails, find the weak section, fix it, and **re-test only that
  dimension.**
- **No public mark schemes?** Use model answers / marked work as proxy, tag `[INFERRED]`, state a
  ceiling (e.g. 85–88%). Acceptable — never fake confidence.
- **Overall <70%?** Stamp the guide: `WARNING: Built with LOW confidence. Ground truth will be your
  first official mock or past paper. Recalibrate if performance mismatch occurs.`

---

## Recalibration (later, not at build time)

Recalibrate a guide **only** when reality contradicts it: session/model performance **>70%** but an
**official past paper <50%** (`spec.md` §9, §12). Find the dimension that mispredicted and fix it.

## Done when

The guide exists, all five dimensions pass (or a ceiling is explicitly stated), every claim is
`[OFFICIAL]`/`[INFERRED]` tagged, the archetype distribution is numeric, and (subject) `subjects.md`
is updated / (topic) the content node map is complete enough to serve as the coverage checklist.
Then → **playbook 02** (clusters).
