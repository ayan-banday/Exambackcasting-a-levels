# Templates

Blank skeletons Claude **copies** when generating a real file, so every artifact has the same shape
regardless of subject. Placeholders look like `[Subject]`, `[Topic_Name]`, `[Date]`, `[N]`.

**You don't edit these — Claude fills copies of them.** Append-only files (`master_status`, `flags`)
are templates for the *first* write; later sessions **append** new blocks beneath, never overwrite.

| Template | Used for | Playbook |
|---|---|---|
| `subject_examiner_guide.template.md` | `[Subject]/[Level]/subject_examiner_guide.md` | 01 |
| `topic_examiner_guide.template.md` | `[Topic]/examiner_guide.md` | 02 |
| `pre_study_sheet.template.md` | `[Topic]/pre_study_sheet.md` | 03 |
| `cluster_study_sheet.template.md` | `[Topic]/clusters/[NN_Cluster]/cluster_NN_study_sheet.md` | 03 |
| `concept_doc.template.md` | concept docs for ACTIVE/FRAGILE gaps | 05 |
| `flags.template.md` | `[Topic]/clusters/[NN_Cluster]/cluster_NN_flags.md` (append-only) | 05 |
| `master_status.template.md` | `[Topic]/master_status.md` (append-only) | 05 |
| `topic_gaps.template.md` | `gaps/[Subject]/[Level]/[Topic]_gaps.md` (regenerated roll-up) | 05 |
| `model_test.template.md` | `[Topic]/tests/model_test_[N].md` | 06 |

Dates are absolute (e.g. `2026-06-05`). Names use underscores, no spaces, real content names.
Cluster folders are prefixed by their zero-padded study-order number (`01_...`, `02_...`), and
their inner study-sheet + flags files mirror the prefix (`cluster_01_study_sheet.md`,
`cluster_01_flags.md`). Off-sequence clusters (synthesis, gap, mastery) use `gap_` or `synthesis_`
in place of the number.
