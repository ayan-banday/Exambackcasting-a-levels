# Prompt 05 — Create a Test (Ethan's SOP)

**What this is:** Ethan's standing SOP for making a timed test from topics he's studied, drilling it on
Loom, and turning the result into recorded gaps. This is the canonical flow — follow it whenever he
says "create a test" / "make me an exam" or pastes the Step-2 prompt below. Runs in a Claude Code chat
opened **in this repo** (needs file access to read examiner guides + write files).

---

## The 4 steps

**Step 1 — Ethan gives the topics** he studied and wants tested.

**Step 2 — Ethan pastes this prompt (save it verbatim):**

> I've given you a list of topics that I've studied. I want you to go through their examiner's guide
> and create an exam for me that I can do in a time that you'll suggest. The exam should cover those
> topics such that I'm really prepared for my exams. As I'm solving the questions, I'll give you a Loom
> transcript and you're going to flag things down based on the rules I've already given you. You're
> also going to update the relevant files such that the gaps that seem to be there are recorded and
> will be targeted later on. Confirm you understand?

**Step 3 — Ethan drills it on Loom**, telling you his confidence out loud as he goes (high / low / just
guessing, and *why* — this is what makes the gap-flagging accurate).

**Step 4 — Ethan pastes the Loom transcript**; you handle the rest and git-upload. He then reviews.

---

## What you actually do

**On Step 2 (create the exam):**
1. For each topic, **read its examiner guide** (`[Subject]/H2/subject_examiner_guide.md` + the topic
   `examiner_guide.md`) and its `inputs/` — verify/auto-fix the guides against the source first
   (`03_build_cluster.md`), then build on them.
2. **Suggest a time** and build an exam that fits it, covering all the named topics with the right
   archetype spread and difficulty.
3. **Format = test, not study sheet:** questions ONLY — no worked examples, no archetype labels,
   neutral numbering; **original** questions (never reuse the source's own stems); a **hidden** answer
   key / mark scheme at the bottom for self-marking after. HTML for quantitative (MathJax, +mhchem for
   chem), essay paper for qualitative. Save under `dashboard/tests/` if it should be linkable from the
   live dashboard, else the subject's `tests/` folder.
4. **Confirm you understand** before he starts (the prompt ends with "Confirm you understand?").

**On Step 4 (process the transcript):**
1. **Flag gaps with the confidence rule** (`spec.md` §3–4, and his saved feedback rules): wrong+confident
   = Priority 1; right-but-low-confidence / guess = FRAGILE; didn't-know = ACTIVE. Weigh what he *said*
   his confidence was. Wispr/voice homophones = noise, not gaps.
2. **Give him a summary** — how he did + the error patterns.
3. **Update the relevant files so gaps are recorded and targeted later:** append to `master_status.md`
   and `cluster_NN_flags.md` (append-only), regenerate `[Topic]_gaps.md`. These feed the
   **knowledge-gap cluster** (`04_knowledge_gap_cluster.md`) that drills exactly what he missed.
4. **Git add + commit + push** ("git upload after that").

## Notes
- GP is excluded — no GP clusters/tests of this kind; GP is skill-driven (gp-essay/plan/critique/questions).
- The Saturday cumulative test is a scheduled instance of this same SOP (auto-compiles every topic
  covered so far).
