# Prompt 02 — Topic-Level Study Session

**Layer 2. Run every study session.** This is the conversational entry point for studying a topic.
It drives the flow — identify the topic, present options, ground the session, build the pre-study
sheet and questions — while the deterministic mechanics live in the playbooks:
`02_cluster_and_study.md` (clusters + sheets), `03_run_session.md` (generate → grade → track →
next), `04_convergence.md` (readiness).

> **Before you start:** the `subject_examiner_guide.md` for this subject/level must exist (if not,
> run `prompts/01_subject_guide_prompt.md`). Enable **Research**. Read `CLAUDE.md`, the subject
> guide, and the topic's `master_status.md` if it exists.

---

## Step 1 — Identify the topic

Ask: **"What topic do you want to study today?"** Wait for the answer. Note the subject **type** from
`subjects.md` (and any per-topic override once the topic guide exists).

## Step 2 — Present options

Read the subject guide and identify topics that share mechanisms with the chosen one, are frequently
confused with it, co-occur in past papers, or benefit from being studied together. Then offer:

> "You want to study **[topic]**. Three options:
> - **A — Solo:** just [topic]. Clean and focused; pick this if time is tight.
> - **B — Combined (recommended):** [topic] is closely tied to **[2–4 related topics]** because
>   [one-line reason grounded in the guide]. Studying them together means the exam's comparison
>   traps between them won't catch you.
> - **C — You tell me:** name a specific set to combine and I'll build around that."

Wait for the choice. Do not proceed until they pick.

## Step 3 — Cluster setup

Ask: **"How many clusters? I recommend [N]"** (based on breadth and topic count — see `spec.md` §6).
Wait for the answer.

## Step 4 — Ground the session

Tell the student: *"Give me a moment to ground this properly."* Then, in order (grounding hierarchy:
`spec.md` §13 — **loaded inputs first, research supplements gaps**):

1. **Read the topic's loaded inputs FIRST.** Ingest `inputs/[Subject]/[Level]/[Topic]/` — chapter
   notes, model answers, this topic's past papers, school resources — plus the syllabus scope for the
   topic. This is the primary ground truth (the student's actual syllabus and papers). The topic guide
   and clusters are built from these materials; if they're thin, say so and state the ceiling.
2. **Read the examiner's guide.** Pull everything relevant to the chosen topic(s): frequency, Bloom
   level, archetypes, traps, high-yield angles.
3. **Targeted research (Research enabled) — to SUPPLEMENT the inputs, not replace them.** Only chase
   gaps the loaded inputs don't cover. Anchor every query to **exact exam + exact topic + resource
   type**. Look for past questions on this exact topic, examiner commentary, topic-specific
   mark-scheme language, recent changes, and topic-specific misconceptions. Primary SEAB/Cambridge
   sources first; flag secondary ones and tag `[INFERRED]`.
   - **Good:** `Singapore A-Level H2 Chemistry kinetics examiner report mark scheme`
   - **Bad:** `kinetics revision notes A-Level`
4. **Confidence check.** Summarize what you found + HIGH/MEDIUM/LOW. If LOW, ask for past papers /
   mock / syllabus specific to this topic and rerun grounding, or proceed with an explicit caveat.
5. **Build the topic guide.** Combine the **loaded inputs** (primary) with the subject guide and the
   supplementary research into
   `[Topic]/examiner_guide.md` (`templates/topic_examiner_guide.template.md`) and run the 90% check.
   Mechanics: `playbooks/01_build_guides.md`. Then propose the cluster breakdown and get approval
   before generating Cluster 1 (`playbooks/02_cluster_and_study.md`). This guide informs everything
   you generate next.

## Step 5 — Pre-study sheet

For each cluster, generate a **pre-study sheet** built around how this exam tests this topic — not a
content summary. Adapt every heading to the subject (don't use a science template for an essay
subject). Universal structure to rename/adapt per `templates/pre_study_sheet.template.md` and
`cluster_study_sheet.template.md`:

- **What it actually is** — one or two plain-language sentences, anchored to something familiar.
- **How it appears in this exam** — what a question looks like: the setup, what's given, what's
  asked. If visual recognition is tested, say what to look for and give a blind image-search link:
  *🔍 search for a visual anchor* (descriptors only — never the answer term).
- **Key differentiator** — the single line distinguishing this from the concept it's most confused
  with. The most important line on the sheet.
- **Core rule / method / central fact** — the one thing to know, then why *not* the most tempting
  alternative. Include scenario-specific exceptions as sub-points.
- **Exam trigger** — one line on how this exam specifically tests it, from the grounding step.

End each sheet with a **contrast section** comparing the two most-confused concepts in the cluster,
and close with: *"If you remember nothing else from this cluster, remember: [the single most-tested
contrast or fact]."*

## Step 6 — Adversarial questions

Generate questions per `playbooks/03_run_session.md` and `spec.md` §7:
- **Mirror the topic guide's archetype distribution exactly** — do not use a generic mix.
- **Bloom Application or higher** — never recall.
- **Every question embeds a real trap** from the trap model; **no repeated angles** across sessions.
- **Format follows the real exam** — 4-option MCQ where the subject uses MCQ; otherwise the actual
  essay/structured format. Distractors are genuinely plausible, drawn from the same cluster.
- **Visual identification:** *🔍 [open this image FIRST, before reading the options]* with a search
  query of descriptors only (no disease/drug/eponym/answer term). Don't describe the image until
  after they answer.
- **Count:** standard topic ≥10; high-yield 15–20 (`spec.md` §7).

After generating, ask: *"Want more questions on any specific part of this cluster?"*

When the student submits, grade and give feedback per `playbooks/03_run_session.md`: correct answer
+ reason, why each distractor is wrong (naming the misconception), the key differentiator, and the
exam tip — then run the 7-step session-processing sequence (`spec.md` §8) and build the next set.

## Step 7 — Session close

> "Session complete. Reminder: take an official mock at least once a week. If your session
> performance is >70% but your official mock drops below 50%, flag it — we'll recalibrate the guide.
> Don't ignore that gap; it means the guide has drifted from what the exam actually tests."
