# Prompt 03 — Build a Cluster (guides-first, dashboard-driven)

**What this is:** the DEFAULT trigger for building a day's study cluster(s). Ethan says
*"Follow `system/prompts/03_build_cluster.md` and build my cluster for [DATE]"* — this file tells the
chat exactly what to do. Paste it (or reference it) in a Claude Code chat opened **in this repo** (it
needs file access to read `inputs/` and write files — a plain web chat cannot). Build **one cluster at
a time**.

**The core rule Ethan added:** before building anything, **verify the subject-level and topic-level
guides against the actual input files, and auto-fix them to the ground truth if they're wrong.** Never
build a cluster on a guide that doesn't match the source material.

---

## Paste this:

> Build my study cluster(s) for **[DATE, e.g. 2026-07-17]** in this Exambackcasting repo. One cluster
> at a time — show me the file path when each is done, and tell me anything you changed in the guides.
>
> **1. Plan.** Open `dashboard/plan.js`, find the day whose `date` matches, read its `blocks` — they
> name the subject(s) + cluster/topic to build. Build only the NEW cluster(s); skip any that exist.
>
> **2. Read the source material (the ground truth).** For the topic, read EVERYTHING in
> `inputs/[Subject]/H2/[Topic]/` — the official syllabus (`official_docs/`), school `chapter_notes/`,
> `past_papers/`, `model_answers/`, `school_resources/`. This is the primary truth (spec §13).
>
> **3. Verify + auto-fix the guides against that source material (do NOT skip):**
> - Read the **subject guide** `[Subject]/H2/subject_examiner_guide.md` and the **topic guide**
>   `[Subject]/H2/[Topic]/examiner_guide.md` (create the topic guide from
>   `system/templates/topic_examiner_guide.template.md` if it doesn't exist).
> - Check them against the inputs: does the **scope, LO wording, archetype list, trap list, and mark
>   logic** actually match what the syllabus + notes + papers say? Is anything missing, stale, or
>   contradicted by the source?
> - **If a guide is wrong, incomplete, or missing → update/create it to reflect the input ground
>   truth.** Keep the honesty tags: `[OFFICIAL]` (syllabus/LO), `[SCHOOL]` (marking, from JC prelim
>   schemes — SEAB publishes none for 9476/9729), `[INFERRED]` (frequency). Append-only files stay
>   append-only. **Tell Ethan exactly what you changed and why** before moving on.
> - Only build once the guides match the inputs. The 90%-confidence check still applies (spec §; flag
>   LOW-confidence explicitly rather than faking it).
>
> **4. Build the cluster** from the corrected guides + inputs. Copy the format of
> `Chemistry/H2/Reactions_and_Stoichiometry/clusters/01_Stoichiometry_and_Redox/cluster_01_study_sheet.html`:
> - Self-contained HTML, MathJax (add `loader:{load:['[tex]/mhchem']}` + `packages:{'[+]':['mhchem']}`
>   for chemistry / any `\ce{}`).
> - Reveal-to-check cards with `M1`/`A1`/`B1` mark steps.
> - **NO type pill on the heading, NO type labels in the TOC** — just "Question 1", "Question 2"…
> - Archetype + trap revealed **only at the end of each card**, never before the attempt.
> - **Reproduce the school answer-key's visual layout** — if the key uses a TABLE (empirical formula,
>   gas-volume contraction, titration, ICE, Born-Haber), the solution uses that same table, not prose.
> - Include **definition-recall** where the exam tests definitions. **Vary card format** (not always
>   Example+Practice). Actual exam-style questions; **don't reuse the source's own questions**.
> - Bake in Ethan's logged traps for the topic (carry ≥5 s.f.; units + sig figs are discrete marks;
>   EF vs MF; `Vm = 22.7` at s.t.p.; etc.).
>
> **5. Save** to `[Subject]/H2/[Topic]/clusters/[NN_Cluster_Name]/cluster_NN_study_sheet.html` —
> number-prefixed folder AND file, underscores, real content name.
>
> **6. Validate** (card count, mhchem present, `<div>` balance, HTML parses) → `git add` the new
> cluster **and** any guide you updated → `git commit` → `git push origin main`. Do **not** open it in
> a browser unless asked.
>
> **7. Closing message — say this verbatim** (every subject except GP): *"Once you are done, paste me
> the transcript of you solving questions, and I'll generate the knowledge gap cluster."* This replaces
> the old "want me to generate the test?" line. When Ethan pastes that transcript back, follow
> `system/prompts/04_knowledge_gap_cluster.md`.

---

## Notes
- Quantitative topics (Maths, most Chem) → HTML like the reference. Pure-qualitative (CSC essay) →
  `.md` study sheet, same grounding + guide-check + no-source-reuse + varied-format rules.
- `dashboard/plan.js` is the live plan; it supersedes `SIX_WEEK_PLAN.md`.
- Gaps Ethan misses when he drills go in `cluster_NN_flags.md` (append-only) and are re-tested at a new
  angle (`playbooks/03_run_session.md`). A `gap_` cluster is built only AFTER a test exposes a gap.
