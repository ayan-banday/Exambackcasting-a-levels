# Subject Registry

**Read this at the start of every session.** It declares each subject's level(s) and default
gap-closure type. The type controls how a gap is closed (see `system/spec.md` §2 and `CLAUDE.md` §3).

This project enables a **per-topic type override**: the table below gives the *default* type for a
subject; an individual topic may override it in its own `examiner_guide.md` front matter. Read the
default first, then the topic override — the override wins **for that topic only**.

---

## Registry

| Subject | Full name | Levels | Default type | Per-topic override examples | Exam board |
|---|---|---|---|---|---|
| CSE | China Studies in English | H2 (primary), H1 | `applied` | a pure-essay topic with no sources → `qualitative` | SEAB/Cambridge |
| Maths | Mathematics | H2, H1 | `quantitative` | — | SEAB/Cambridge |
| GP | General Paper | H1 only* | `qualitative` | — | SEAB/Cambridge |
| Chemistry | Chemistry | H2, H1 | `quantitative` | organic mechanisms, qualitative analysis, explanation-style topics → `qualitative` | SEAB/Cambridge |
| Biology | Biology | H2, H1 | `qualitative` | data-handling / statistics / quantitative genetics → `quantitative` | SEAB/Cambridge |

\* **GP is examined only at H1** in the Singapore A-Level. An `H1/` and `H2/` folder are created for
every subject for consistency, but GP's `H2/` branch is normally **unused**. (If you later take
Knowledge & Inquiry, give it its own subject entry rather than repurposing GP H2.)

---

## Type → gap-closure method

The full definitions (what "mechanical", "new angle", and "worked example" mean, plus the close
conditions per type) live once in **`system/spec.md` §2**. Reading never closes a quantitative gap —
variants must be solved.

---

## Confidence ceilings (set per subject/level as guides are built)

When a subject guide is built, record here whether it was validated against `[OFFICIAL]` SEAB
mark schemes or only `[INFERRED]` proxies (model answers / marked work), and the resulting ceiling.

| Subject / Level | Guide status | Validation source | Confidence ceiling |
|---|---|---|---|
| CSE H2 | BUILT | MIXED ([OFFICIAL] format & marking; [SCHOOL]/[INFERRED] prediction & taste) | ~90% |
| CSE H1 | NOT BUILT | — | — |
| Maths H2 | BUILT | MIXED ([OFFICIAL] structure/scope/specimen; [INFERRED] trap model & Stats archetypes) | ~88% |
| Maths H1 | NOT BUILT | — | — |
| GP H1 | NOT BUILT | — | — |
| Chemistry H2 | NOT BUILT | — | — |
| Chemistry H1 | NOT BUILT | — | — |
| Biology H2 | NOT BUILT | — | — |
| Biology H1 | NOT BUILT | — | — |

Update a row when its guide is built (status → BUILT, source → OFFICIAL/INFERRED/MIXED, ceiling → %).
