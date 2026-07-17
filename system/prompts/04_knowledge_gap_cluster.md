# Prompt 04 — Knowledge Gap Cluster (the drill)

**What this is:** the second half of the drill loop. After Ethan studies + drills a main cluster, he
records a transcript of himself solving the questions and pastes it back. This turns that transcript
into a **new cluster that drills only his weak spots**. Trigger: Ethan pastes a solving transcript, or
says **"produce knowledge gaps cluster."** Applies to **every subject EXCEPT GP** (GP has no clusters —
it's skill-driven via gp-essay / gp-plan / gp-critique / gp-questions).

---

## The loop
1. A main cluster is built (`03_build_cluster.md`). Ethan drills it and records himself solving.
2. **The build message ends with, verbatim:** *"Once you are done, paste me the transcript of you
   solving questions, and I'll generate the knowledge gap cluster."*
3. Ethan pastes the transcript → run this prompt.

## What to do with the transcript
1. **Flag gaps with the protocol** (`spec.md` §3–4). Parse for confidence, not self-rating:
   - **wrong + confident → Priority 1** (list first).
   - **right + hesitant / a lucky guess → FRAGILE.**
   - **didn't know the method at all → ACTIVE.**
   - Treat Wispr voice-to-text homophones as noise, not gaps. Grade numerical/conceptual/method errors.
2. **Summarise for Ethan:** how he's doing overall + the **error PATTERNS** you see (e.g. concepts
   solid but drops the final step; skips the school's table layout; one recurring conceptual friction).
   Name the specific questions he couldn't answer / was confused/curious about.
3. **Build a NEW knowledge-gap cluster** that drills ONLY those gaps + confusions:
   - Exam-style questions that force the weak underlying concept — **do NOT label or announce the
     question types**; mix them so mastering the whole cluster ≈ acing that node in the exam.
   - It's inspired by his gaps, not a re-run of the source questions. No source-stem reuse.
   - **Format = current cluster standard:** self-contained study sheet (HTML for quantitative, `.md`
     for pure-qualitative); **all practice, no worked examples**; each card = one question + **hidden**
     solution + **hidden** archetype/trap (revealed only after the attempt); no type pill on the
     heading, neutral TOC; reproduce the school answer-key's **tables** where it uses them; MathJax
     (+ mhchem for chem).
   - Save as a `gap_` cluster: `[Subject]/H2/[Topic]/clusters/gap_[Name]/cluster_gap_[name]_study_sheet.html`.
   - Validate → `git add` + commit + push.
4. This IS "the drill." A `gap_` cluster exists to close exactly what the transcript exposed. If the
   transcript is clean, say so — don't invent gaps.

## Notes
- Ground the gap questions in the same `inputs/` + examiner guide as the main cluster (still verify the
  guides per `03_build_cluster.md` if anything in the transcript contradicts them).
- After Ethan drills the gap cluster too, genuinely-closed nodes go CLOSED in `master_status.md`
  (append-only); anything still shaky stays FRAGILE for the Saturday cumulative test.
