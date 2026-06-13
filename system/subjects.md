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
| CSC H2 | BUILT | MIXED ([OFFICIAL] format & marking; [SCHOOL]/[INFERRED] prediction & taste) | ~90% |
| Maths H2 | BUILT | MIXED ([OFFICIAL] structure/scope/specimen; [INFERRED] trap model & Stats archetypes) | ~88% |
| GP H1 | NOT BUILT | — | — |
| Chemistry H2 | NOT BUILT | — | — |
| Biology H2 | NOT BUILT | — | — |

Update a row when its guide is built (status → BUILT, source → OFFICIAL/INFERRED/MIXED, ceiling → %).
