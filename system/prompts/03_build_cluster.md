# Prompt 03 — Build a Cluster (dashboard-driven)

**What this is:** the one trigger for building a day's study cluster(s). Paste it into any Claude Code
chat opened **in this repo** (it needs file access to read `inputs/` and write the sheet — a plain
web chat cannot do this), then name the date or the cluster. Build **one cluster at a time**.

---

## Paste this:

> Build my study cluster(s) for **[DATE, e.g. 2026-07-17]** in this Exambackcasting repo. One cluster
> at a time — show me the file path when each is done.
>
> **1. Plan.** Open `dashboard/plan.js`, find the day whose `date` matches, and read its `blocks` —
> they name the subject(s) + cluster(s) to build (e.g. "Maths — Vectors Cluster 1"). Build only the
> NEW cluster(s) for that day. If a block says a cluster already exists, skip it.
>
> **2. Ground first (never skip).** Before writing anything, read:
> - `[Subject]/H2/subject_examiner_guide.md` — archetypes, traps, mark-scheme logic for that subject.
> - `inputs/[Subject]/H2/[Topic]/` — the official syllabus + school chapter notes for that topic.
> Never invent untraceable content; tag `[INFERRED]` if the syllabus/notes don't cover it.
>
> **3. Format — copy this reference exactly:**
> `Chemistry/H2/Reactions_and_Stoichiometry/clusters/01_Stoichiometry_and_Redox/cluster_01_study_sheet.html`
> - Self-contained HTML, MathJax (add `loader:{load:['[tex]/mhchem']}` + `packages:{'[+]':['mhchem']}`
>   for chemistry / any `\ce{}` notation).
> - Reveal-to-check cards with `M1`/`A1`/`B1` mark steps.
> - **NO type pill on the heading. NO type labels in the TOC** — just "Question 1", "Question 2"…
> - The archetype + the trap is revealed **only at the end of each card**, never before the attempt.
> - **Reproduce the school answer-key's visual layout.** If the key uses a TABLE (empirical formula,
>   gas-volume contraction, titration, ICE, Born-Haber), the solution uses that same table — not prose
>   steps.
> - Include **definition-recall** where the exam tests definitions. **Vary the card format** (not
>   always Example+Practice). Write **actual exam-style questions**, and don't reuse the
>   source-material's own questions.
> - Bake in Ethan's logged traps for the topic (e.g. carry ≥5 s.f. through intermediates; units + sig
>   figs are discrete marks; read EF vs MF; `Vm = 22.7` at s.t.p. not 22.4).
>
> **4. Save** to `[Subject]/H2/[Topic]/clusters/[NN_Cluster_Name]/cluster_NN_study_sheet.html` —
> number-prefixed folder AND file, underscores no spaces, real content name.
>
> **5. Validate** (card count, mhchem config present, `<div>` balance, HTML parses), then `git add`
> the new file, `git commit`, and `git push origin main`. Do **not** open it in a browser unless asked.

---

## Notes
- Quantitative topics (Maths, most Chem) → HTML like the reference. Pure-qualitative (CSC essay) →
  `.md` study sheet instead, but same grounding + no-source-reuse + varied-format rules.
- This prompt supersedes `SIX_WEEK_PLAN.md` as the plan source — `dashboard/plan.js` is the live plan.
- After Ethan drills a cluster, gaps he missed go in `cluster_NN_flags.md` (append-only) and are
  re-tested at a new angle (see `playbooks/03_run_session.md`).
