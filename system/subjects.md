# Subject Registry

**Read this at the start of every session.** It declares each subject's level and default
gap-closure type. The type controls how a gap is closed (see `system/spec.md` §2 and `CLAUDE.md` §3).

This project enables a **per-topic type override**: the table below gives the *default* type for a
subject; an individual topic may override it in its own `examiner_guide.md` front matter. Read the
default first, then the topic override — the override wins **for that topic only**.

---

## Registry (Ethan Lim — Nov 2026 sitting)

| Subject | Full name | Level taken | Default type | Per-topic override examples | Exam board |
|---|---|---|---|---|---|
| CSC | China Studies in Chinese (中国通识) | **H2** | `applied` | a pure-essay topic with no sources → `qualitative` | SEAB/Cambridge |
| Maths | Mathematics | **H2** | `quantitative` | — | SEAB/Cambridge |
| GP | General Paper | **H1** | `qualitative` | — | SEAB/Cambridge |
| Chemistry | Chemistry | **H2** | `quantitative` | organic mechanisms, qualitative analysis, explanation-style topics → `qualitative` | SEAB/Cambridge |
| Biology | Biology | **H2** | `qualitative` | data-handling / statistics / quantitative genetics → `quantitative` | SEAB/Cambridge |

**Notes:**
- **GP is examined only at H1** in the Singapore A-Level.
- Ethan is taking H2 across CSC, Maths, Chemistry, Biology — H1 versions of these subjects are not in his exam scope, and the H1 folders have been removed from this repo to keep the structure focused.

---

## Type → gap-closure method

The full definitions (what "mechanical", "new angle", and "worked example" mean, plus the close
conditions per type) live once in **`system/spec.md` §2**. Reading never closes a quantitative gap —
variants must be solved.

---

## Confidence ceilings (set per subject as guides are built)

When a subject guide is built, record here whether it was validated against `[OFFICIAL]` SEAB
mark schemes or only `[INFERRED]` proxies (model answers / marked work), and the resulting ceiling.

| Subject | Guide status | Validation source | Confidence ceiling |
|---|---|---|---|
| CSC H2 | BUILT | MIXED ([OFFICIAL] format/AOs/band descriptors/content nodes from 2026 syllabus; [SCHOOL] 7-题型 method/traps/anchors from 朱/沈/华中 SOPs + 116 sources; [INFERRED] 2026 prediction) | ~92% |
| Maths H2 | BUILT | MIXED ([OFFICIAL] 9758 syllabus only; [SCHOOL] archetypes/frequency/traps from TYS+prelim suggested-solutions; [RESEARCH] specimen not loaded; [INFERRED] band mechanics) | ~89% |
| GP H1 | BUILT | MIXED ([OFFICIAL] 8881 structure/AOs/band descriptors; [SCHOOL] P2 architecture/technique/traps/archetypes from 2023–25 in-format prelims + AQ schemes; [INFERRED] essay prediction) | ~89% |
| Chemistry H2 | BUILT | MIXED ([OFFICIAL] 9476 syllabus scope/structure/AOs/exclusions; [SCHOOL] marking DNA + traps from prelim schemes cited in chapter notes; [INFERRED] archetype frequencies) | ~85% |
| Biology H2 | BUILT | MIXED ([OFFICIAL] 9477 syllabus scope/AOs/structure/exclusions; [SCHOOL] marking DNA/traps from 9744/9648-era prelim schemes; [INFERRED] frequencies + 6 empty-stub topics on LOs) | ~85% |

Update a row when its guide is built (status → BUILT, source → OFFICIAL/INFERRED/MIXED, ceiling → %).
