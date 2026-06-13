# Singapore A-Level Exam Backcasting System

A study system that prepares you for the **Singapore A-Levels (SEAB/Cambridge)** by working
*backwards* from how the exam thinks — building examiner-grade guides, testing you adversarially,
and tracking your real weak spots across sessions until each topic is genuinely exam-ready.

Subjects: **CSC, Maths, GP, Chemistry, Biology**, each at **H2 (current focus)** and **H1 (later)**.

> **New here? Read this file, then `CLAUDE.md`.** `CLAUDE.md` is the rulebook Claude follows;
> this README is the map for *you*.

---

## How it works (the loop)

1. **Your assistant loads materials** into `inputs/[Subject]/[Level]/[Topic]/` — past papers,
   syllabus, mark schemes, notes, model answers.
2. **You pick a subject + level + topic** and ask Claude to study it.
3. Claude builds the **subject guide** (once per subject/level) and the **topic guide**, validated
   against held-out past papers (the "90% check").
4. Claude proposes a **cluster breakdown** (named subtopics). You approve, then ask for clusters
   **one at a time**. Each comes with a **pre-study sheet** + **study sheet**.
5. You study a cluster, then Claude gives you **adversarial questions** (every one has a trap).
6. You answer — paste a **Loom/voice transcript** or self-rate each answer **C/U**. Claude grades,
   detects where you were actually confident vs guessing, and updates your **gaps**.
7. Repeat across clusters. Claude keeps generating questions targeting your **recurring gaps** plus
   **untested** parts of the syllabus.
8. When gaps are closed, take a **model test**, then a **real official past paper** under timed
   conditions. The official paper is the honesty check — it decides if you're ready.

---

## Who fills what (read this — it resolves the confusion)

| Folder | What it is | Who fills it |
|---|---|---|
| `inputs/` | Raw exam materials (past papers, syllabus, mark schemes, notes, model answers) | **Your assistant** |
| `system/spec.md` | The full spec — the system's brain (single source of truth) | Already placed |
| `system/subjects.md` | Registry: each subject's level(s) and gap-closure type | Already set up |
| `system/prompts/` | The live entry-point prompts Claude follows (behavior, subject-guide, topic-session) — also where you drop the CSC example guide | Set up (don't edit) |
| `system/playbooks/` | Step-by-step mechanics Claude follows for each operation | Set up (don't edit) |
| `system/templates/` | Blank skeletons Claude copies so every generated file looks the same | Set up (don't edit) |
| `gaps/` | Your rolled-up weak spots per topic | Claude (generated) |
| `[Subject]/[H2\|H1]/` | The actual guides, clusters, status, tests Claude generates as you study | Claude (generated) |

**Plain definitions:**
- **Prompt** = a conversational entry point Claude follows (e.g. "run a topic session"). **Playbook**
  = the how-to mechanics a prompt invokes (e.g. "how to process a session"). You never run these
  yourself; Claude reads them.
- **Template** = a blank fill-in-the-shape file so a `master_status.md` for Chem looks identical to
  one for Bio. You never edit these; Claude copies them.
- **Inputs** = the raw stuff your assistant loads. **Gaps** = the output showing what you're weak at.

---

## Where to put things

| Thing | Goes here |
|---|---|
| The full spec | ✅ already at `system/spec.md` (single source of truth) |
| Your **CSC gold-standard example guide** | `system/prompts/` (as the quality bar) **and/or** `CSC/H2/subject_examiner_guide.md` (to use as the real guide) — see `system/prompts/_README.md` |
| Raw exam materials | `inputs/[Subject]/[Level]/[Topic]/...` — see `inputs/_README.md` |

---

## How to start a session (what to say to Claude)

- *"Build the CSC H2 subject guide from the inputs."* → Claude runs playbook 01.
- *"I want to study Chemical Energetics for Chemistry H2."* → Claude builds the topic guide,
  proposes clusters, waits for your approval.
- *"Generate the next cluster."* → one cluster + study sheet.
- *"Give me questions on this cluster."* → adversarial question set.
- *"Here's my transcript / here are my answers (C/U)."* → Claude grades, updates gaps, builds the
  next set.
- *"Are we converged on this topic?"* → Claude checks the three convergence conditions.

---

## Current status

Scaffold built. **No guides exist yet** — every `subject_examiner_guide.md` is a placeholder marked
`STATUS: NOT BUILT`. Next steps: (1) your assistant loads `inputs/`, (2) you drop the CSC example
into `system/prompts/`, (3) you start a session.
