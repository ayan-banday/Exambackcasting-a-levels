# Playbook 02 — Clusters & Study Sheets

**Goal:** break the topic into named clusters, get the student's approval on the breakdown, then
generate clusters **one at a time on request**, each with a study sheet. Optionally a pre-study
sheet for the big picture. Templates: `templates/cluster_study_sheet.template.md`,
`templates/pre_study_sheet.template.md`.

> Definitions: `spec.md` §6 (clustering logic). This playbook is the procedure.

---

## Cluster breakdown (do this first, once)

1. From the topic `examiner_guide.md` content node map, design **named clusters** — real content
   names (`Dimensional_Analysis`, `Homogeneity_Of_Equations`), **never** `Cluster_1`.
2. Count by breadth: **narrow → 3–4**, medium → 4–6, **wide → 5–7**.
3. Clusters must be **collectively exhaustive** — together they cover every node in the guide, so
   that once all are studied, every testable thing is accounted for. **Cross-check the breakdown
   against the actual source material** — `inputs/[Subject]/[Level]/[Topic]/` (chapter notes,
   syllabus scope) — not just the guide's node map. If the loaded notes/syllabus contain a testable
   sub-topic no cluster covers, the breakdown is incomplete — add a cluster or fold it in. This guards
   against a blind spot in the topic guide propagating into the clusters (`spec.md` §13).
4. **Propose the full breakdown** (all cluster names + one-line descriptions) and **get the
   student's approval before generating Cluster 1.** Adjust on their feedback.

**Do not auto-generate all clusters.** Generate only when the student says "generate the next
cluster." Respect their pace.

---

## Per-cluster study sheet (on request)

An **exam-preparation artifact, not a textbook summary.** Build it from the **loaded notes / model
answers / past papers** for this topic (the primary source); use research only to fill genuine gaps,
and tag anything not traceable to a source `[INFERRED]` (`spec.md` §13). Copy the template and fill:
- **Core knowledge** — exactly what's needed to answer any exam question on this cluster (no more).
- **Key facts / formulas / rules** — at the level the examiner expects.
- **Connections** — how this cluster links to the other clusters and the wider subject.
- **Examiner's angle** — how this cluster is *typically tested*, pulled from the examiner's guide.
- **Common misconceptions** — the traps from the trap model that apply here.

Write to `[Topic]/clusters/[Cluster_Name]/study_sheet.md`. May be regenerated later (e.g. when flags
show it's weak) but **never deleted.** Also create an empty `flags.md` in the cluster folder if one
doesn't exist (it's appended to during sessions).

---

## Pre-study sheet (optional)

Generated after clusters exist, or on request. **Big-picture only, light:** what the topic is
fundamentally about · how the clusters connect · the single most important concept to grasp first.
Write to `[Topic]/pre_study_sheet.md`. **Skip if the student has already done their own pre-study.**

---

## Done when

The breakdown is approved, the requested cluster's study sheet exists, and an empty `flags.md` is in
place. Next: the student studies the cluster, then asks for questions → **playbook 03**.
