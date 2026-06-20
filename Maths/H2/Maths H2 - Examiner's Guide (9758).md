---
subject: Maths
level: H2
default_type: quantitative
status: BUILT
validation_source: MIXED — [OFFICIAL] only the 2026 SEAB 9758 syllabus (scope/structure/AOs/GC-rubric/exclusions), the sole official document in inputs/; [SCHOOL] archetypes/topic-frequency/trap-model/marking-conventions (multi-year tutor-solution corpus: real Cambridge TYS 2009-2022 suggested solutions + 2012-2025 JC prelims, all school-authored, NOT SEAB mark schemes); [RESEARCH] SEAB public specimen P1/P2 distribution (exists on seab.gov.sg but NOT loaded in inputs — unverified line-by-line here); [INFERRED] residual mark-band micro-mechanics
confidence_ceiling: ~89% overall (structure/scope/AOs ~97% [OFFICIAL]; archetypes & topic frequency ~90% [SCHOOL]; trap model ~85% [SCHOOL]; specimen distribution ~80% [RESEARCH, not in inputs]; mark-band micro-mechanics ~80% [INFERRED]). HARD CAP ~92% — no SEAB mark scheme or examiner report exists in inputs, every marked paper is a school/tutor suggested solution, and the official specimen is NOT in the loaded corpus.
last_updated: 2026-06-20
---

# Subject Examiner's Guide — Mathematics H2 (9758)

> **Singapore-Cambridge GCE A-Level · Syllabus 9758 · Board: SEAB/Cambridge (UCLES) · Student: Ethan (Nov 2026 sitting, HCI JC2)**
> How this exam *thinks* across the whole subject. Built once (playbook 01); **recalibrated 2026-06-20**
> against the newly-synced corpus. Default gap-closure type: **quantitative** — a gap closes only when
> variants are *solved* mechanically, never by reading (`spec.md` §2).

> **How to use this file.** Section 1 = the contract you're marked against. Section 3 = the master
> coverage checklist every topic guide draws from. Sections 4–5 = how questions are built and where the
> marks leak — read these before generating any practice. Section 7 = exactly how far to trust this
> guide and what would raise the ceiling.

> **Tag legend (recalibrated — read carefully, the boundaries moved this build).**
> - `[OFFICIAL]` = verbatim from the **2026 SEAB 9758 syllabus** (`inputs/Maths/H2/official_docs/Maths_H2_syllabus_2026.txt`,
>   read in full) — the **only** official document loaded in `inputs/`. Scope, structure, AO weights,
>   GC regime, accuracy rubric, content outline, exclusions, assumed knowledge, notation.
> - `[SCHOOL]` = corroborated by the **tutor/JC suggested-solution corpus** in
>   `inputs/Maths/H2/_General/` — real **Cambridge A-Level TYS 2009-2022** suggested solutions
>   (ASRJC/VJC/RI, mapped question-by-question) **plus 2012-2025 JC prelims** (15+ JCs). These are
>   *school-authored* answers and *school/inferred* mark allocations, **not SEAB mark schemes.** High
>   evidential weight for *patterns*; **not** authoritative for SEAB's exact band rules.
> - `[RESEARCH]` = sourced **online** (e.g. the SEAB public specimen papers `9758_y25_sp_1/sp_2.pdf` that
>   exist on seab.gov.sg). **⚠️ These are NOT in `inputs/` and were not verified line-by-line in this
>   build** — treat as a pattern hint, not loaded ground truth.
> - `[INFERRED]` = domain reasoning / analogy to the sister 9709 / residual gaps the corpus doesn't pin down.
> **When the syllabus and any secondary source disagree, `[OFFICIAL]` wins.**

> ⚠️ **CONFIDENCE NOTE (read before relying on this) — recalibrated, ceiling LOWERED.** The previous
> (2026-06-11/06-20) builds tagged a "specimen Paper 1 distribution" as `[OFFICIAL]` and treated it as a
> clean in-inputs hold-out. **That was an over-claim: the SEAB specimen P1/P2 PDFs are NOT in `inputs/`.**
> The *only* official document loaded is the syllabus text. The specimen exists publicly on seab.gov.sg
> (verified online), so its distribution is plausible and is retained below tagged `[RESEARCH]` — but it
> is **not loaded ground truth and was not re-checked question-by-question**, so it can no longer carry
> the validation weight the earlier build gave it. **Net effect: the honest overall ceiling drops from
> the previously-claimed ~91% to ~89%.** What *is* solid: the large `[SCHOOL]` corpus (real Cambridge TYS
> 2009-2022 mapped question-by-question, plus the full 2012-2025 prelim cycle) genuinely supports the
> archetype distribution, topic frequency, and trap model at `[SCHOOL]` confidence. **The hard ceiling
> stays ~92%:** SEAB publishes **no** 9758 mark scheme or examiner report, and none is in `inputs/` — so
> exact mark-band mechanics remain unverifiable against ground truth. **The real validation gate is
> Ethan's first official past paper under timed conditions** (`spec.md` §9), not this guide. If a
> session/mock scores >70% but an official paper <50%, recalibrate (Section 7).

---

# 1. Exam Overview — the contract you are marked against

## 1.1 Paper structure `[OFFICIAL]`

Two **3-hour** papers, **each 50%**, **each marked out of 100** (200 total). **All questions
compulsory — no choice on either paper.** `[OFFICIAL — syllabus "Scheme of Examination Papers"]`

| Paper | Content | Structure | Marks | Weight | Time |
|---|---|---|---|---|---|
| **Paper 1** | Pure Mathematics only | **10–12 questions** of different lengths | 100 | 50% | 3h |
| **Paper 2 — Section A** | Pure Mathematics | **4–5 questions** | 40 | 20% | (within 3h) |
| **Paper 2 — Section B** | Probability & Statistics | **6–8 questions** | 60 | 30% | (within 3h) |

- **Application question:** there is **one question on application of mathematics in real-world contexts
  (including sciences/engineering) carrying ≥12 marks in Paper 1, and one in Paper 2 Section B.** Either
  "may require concepts and skills from more than one topic." `[OFFICIAL — verbatim syllabus]`
- **Topic integration:** the syllabus explicitly states questions "may integrate ideas from more than
  one topic, and that topics may be tested in the contexts of problem solving and application." Expect
  Vectors×Calculus (kinematics), Calculus×Sequences (Maclaurin), Stats×application cross-overs.
  `[OFFICIAL]` The syllabus even lists context families: kinematics; optimisation; electrical circuits;
  population growth / decay / cooling; financial maths; standardised testing; market & clinical research.
- **Split of marks across the whole A-Level:** Pure Maths = P1 (100) + P2 Sec A (40) = **140/200 (70%)**;
  Probability & Statistics = P2 Sec B = **60/200 (30%)**. `[OFFICIAL — derived from the scheme]`
- **Observed question count** in real and prelim papers: P1 typically **11–12** questions; P2 Sec A
  **4–5**, P2 Sec B **6–8** — consistent across the 2009-2025 corpus. `[SCHOOL]`
- **Formula list:** a **List of Formulae and Results is provided in the exam** `[OFFICIAL]`. Edition:
  MF26 for 2017–2023; **MF27 from 2024 onward** (Ethan sits MF27). The corpus flags this changeover. `[SCHOOL]`

> **`[TPE]` for Ethan's mock (TPE3):** ~50% Pure / 50% Statistics, single 3-hour paper — a heavier
> Stats weighting than the real A-Level's 30%. **Do not under-prepare Stats for the mock** even though
> it is "easy to score" — it is half the mock. (Vectors remains the flagged weak spot.) `[context note]`

## 1.2 Assessment Objectives & what actually earns marks `[OFFICIAL]`

| AO | What it tests | Weight |
|---|---|---|
| **AO1** | Use mathematical techniques and procedures (recall facts/formulae/notation; read tables/graphs; carry out straightforward procedures) | **30%** |
| **AO2** | **Formulate and solve problems, incl. real-world contexts** (select strategy; formulate models; integrate concepts; translate between forms; interpret results in context) | **60%** |
| **AO3** | Reason and communicate mathematically (explain choice of model; deduce/infer/generalise; conjecture; construct proofs) | **10%** |

**The single most important consequence:** **AO2 carries 60%.** This exam is *not* mostly about
recalling techniques (AO1, only 30%). The marks live in **choosing the right method, translating a
worded/real-world situation into maths, and interpreting the result back in context.** A student who
can execute every technique but freezes when a problem is unfamiliar or wrapped in context is built to
score in the 60s, not the 80s. `[OFFICIAL weights; SCHOOL-corroborated consequence — the corpus shows
the 12-15m closers are overwhelmingly applied/contextual AO2 questions]`

## 1.3 The graphing calculator (GC) regime `[OFFICIAL — verbatim syllabus]`

- An **approved GC without CAS** is **expected and assumed** on both papers.
- **"As a general rule, unsupported answers obtained from GC are allowed unless the question states
  otherwise."** So routine solving (equations, definite integrals, normal probabilities, regression
  lines) can be done straight on the GC.
- **Where unsupported answers are *not* allowed** (the question says "without using a calculator,"
  "show that," "find the exact value," "prove"), candidates "must present the mathematical steps using
  mathematical notations and not calculator commands."
- **"Incorrect answers without working will receive no marks. However, if there is written evidence of
  using GC correctly, method marks may be awarded."** → **Always show set-up working**, even when the
  GC does the arithmetic: a wrong final answer with correct set-up still banks method marks; a wrong
  final answer alone banks nothing.
- For graphical solutions, **sketch the graph as part of the answer.** The syllabus explicitly warns
  GC-tracing accuracy is unreliable for roots.

> `[SCHOOL]` corroboration: across the corpus, **every paper carries 1–2 explicit "Do not use a
> calculator" items** — overwhelmingly **complex numbers, inequalities, and polynomial factorisation**.
> This is a predictable, bankable constraint, not a stylistic accident.

## 1.4 Accuracy & presentation rubric `[OFFICIAL syllabus + SCHOOL rubric reproduction]`

- **Non-exact numerical answers → 3 significant figures**; **angles in degrees → 1 decimal place** —
  unless the question specifies otherwise. (The verbatim front-of-paper rubric — "Give non-exact
  numerical answers correct to 3 significant figures, or 1 decimal place in the case of angles in
  degrees…" — is reproduced identically across the whole `[SCHOOL]` corpus.)
- A **List of Formulae and Results (MF26/MF27)** is **provided** `[OFFICIAL]`. Students need *fluency
  applying* the list, not memorising it — but must know what is *not* on it (e.g. most vector geometry
  results, the quotient rule, definitions, distribution conditions).

## 1.5 What the exam rewards vs punishes `[SCHOOL — corpus mark-allocation patterns + OFFICIAL GC rule]`

| Rewards | Punishes |
|---|---|
| Correct **method shown** even if arithmetic slips (M marks bank independently) | A bare answer that is wrong (→ 0; no method to credit) |
| Carrying **≥4 s.f. through intermediate working** | **Premature rounding** → wrong final 3 s.f. → lost accuracy mark |
| **Exact form** when asked (surds, π, ln, fractions) | Decimalising an "exact value" question |
| **Defining variables / stating distributions** (Stats) | Conclusions not **in context** (Stats, application Qs) |
| **Sketching** graphs for graphical solutions | Calculator syntax written as "working" |
| **Using the previous part** on a "Hence" stem | Doing a "Hence" part independently (marks withheld even if the answer is right) |

> ⚠️ The mark-loss *mechanics* above (M1/A1/B1 apparatus; "+C" deduction; missing-modulus deduction;
> premature-approximation accuracy loss) are documented in the **tutor/JC suggested-solution corpus**
> (`math-cambridge-actual-reference.md`; `math-prelims-2023-2025-reference.md`; `math-examiner-patterns-reference.md`
> §13) — i.e. **`[SCHOOL]/[INFERRED]`, not SEAB.** The corpus itself states mark schemes were "not
> transcribed verbatim… only mark allocation inferred from question tables." This tracks UCLES practice
> closely, but **no public 9758 mark scheme confirms the exact band cut-offs.**

---

# 2. Topic Frequency & Weight Map

Section-level weighting (Pure 70% / Stats 30%) is **`[OFFICIAL]`.** **Per-topic frequency is `[SCHOOL]`** —
the loaded corpus provides a *multi-year tally*: real Cambridge TYS 2009-2022 mapped question-by-question,
plus the full 2012-2025 prelim cycle (15+ JCs). This is a school-authored tally, not a SEAB statistic,
but it is broad and consistent.

| # | Topic | Section | Typical home | Bloom centre | Frequency signal `[SCHOOL]` |
|---|---|---|---|---|---|
| 1 | Functions & graphs | A (Pure) | P1 + P2 Sec A | AO1→AO2 | **Every paper.** One P1 functions Q + one transformations/graphs Q; often a P2A functions Q too |
| 2 | Sequences & series (AP/GP/sigma/MOD/recurrence) | A (Pure) | P1 (often ×2) | AO1→AO2 | **Every paper, 1–2 Qs.** One is frequently the P1 real-world AP/GP closer (12–13m) |
| 3 | **Vectors** | A (Pure) | P1 closer (12–14m) + P2 Sec A (7–13m) | AO2→AO3 | **Every paper.** **The P1 12-14m closer is very often 3D vectors.** Ethan's flagged weak spot → highest-EV target |
| 4 | Complex numbers | A (Pure) | P1 + sometimes P2 Sec A | AO1→AO2 | **Every paper.** Near-universal **"do not use a calculator"** instruction |
| 5 | **Calculus** (diff, integ, Maclaurin, DEs) | A (Pure) | P1 + P2 Sec A | AO2→AO3 | **Largest Pure block, spread across multiple Qs.** A differential equation appears on **every P1**; Maclaurin appears on **~100% of P2 Sec A**, ~30% of P1 |
| 6 | Probability & Statistics | B | **All of P2 Sec B (60m)** | AO2 | P&C, probability, DRV/binomial, normal, sampling/CLT, hypothesis testing, correlation & regression — **all seven appear in essentially every P2 Sec B** |

**SEAB public specimen Paper 1 distribution `[RESEARCH — NOT in inputs; unverified line-by-line]`:**

> ⚠️ The table below was carried over from the prior build, which mis-tagged it `[OFFICIAL]`. The SEAB
> specimen P1/P2 exist **online** (`9758_y25_sp_1.pdf` on seab.gov.sg, confirmed to exist) but are
> **not loaded in `inputs/`** and were **not re-verified question-by-question** in this recalibration.
> Use it as a *plausible* Pure-paper shape, not as loaded ground truth. It is fully consistent with the
> `[SCHOOL]` corpus shape, which is why it is retained.

| Q | Topic | Marks |
|---|---|---|
| 1 | Connected rates of change | 4 |
| 2 | Graph transformations | 5 |
| 3 | Curve sketching & inequalities | 7 |
| 4 | Sequences & series (geometric) | 8 |
| 5 | Differentiation & integration | 7 |
| 6 | **Vectors** (cross products) | 8 |
| 7 | **Complex numbers** ("do not use a calculator") | 11 |
| 8 | Parametric equations & volume of revolution | 12 |
| 9 | Trig + applied differentiation + small-angle approx | 12 |
| 10 | **Vectors** (lines & planes, foot of perpendicular, reflection) | 12 |
| 11 | **Differential equation** (logistic) | 14 |

**Cross-corpus topic share (real Cambridge TYS 2009-2022, P1+P2 = 200m/yr):** `[SCHOOL]`

| Topic | Approx % of total marks |
|---|---|
| Integration (techniques/applications/MOD-style) | 12–15% |
| Sequences & series (incl. Maclaurin) | 12–15% |
| Vectors (lines, planes, products) | 10–12% |
| Normal distribution (incl. CLT, hypothesis testing overlap) | 10–12% |
| Differentiation (parametric, implicit, applications) | 10–12% |
| Functions & graphs | 8–10% |
| Complex numbers | 8–10% |
| Probability | 8–10% |
| Differential equations | 5–8% |
| Discrete RV / Binomial | 6–8% |
| Correlation & regression | 5–7% |
| Permutations & combinations | 4–6% |
| Inequalities | 3–5% |

Read-off: **Calculus dominates Pure** (differentiation + integration + Maclaurin + DEs together
≈ 40%+); **Vectors is the second-heaviest single topic** and **owns the P1 closer**; the **longest
questions sit at the back** of each paper (12–15m) and carry the application/integration AO2 load.

---

# 3. Content Node Map (the master coverage checklist) `[OFFICIAL]`

Derived verbatim from the 2026 SEAB 9758 syllabus content outline (`Maths_H2_syllabus_2026.txt`, read
in full). **This is the coverage checklist topic guides and convergence checks (`spec.md` §9) walk
against.** Cross-checked against Ethan's HCI chapter-note skeletons (`inputs/Maths/H2/*/chapter_notes/`)
— which match the node list but are **sparse** (most are 5-line Notion stubs; only Vectors (79 lines),
Functions (67), and Differentiation (48) are partly fleshed out; the rich teaching material is the HCI
Stats compiled PDFs in `_General/chapter_notes/` and the HCI PDF set, which are topic-session inputs).
Exclusions are listed because **applying an excluded method is itself a recurring trap** (Section 5.2).

### Section A — Pure Mathematics

**1. Functions and graphs**
- [ ] 1.1 Functions — domain/range; inverse & composite functions; conditions for existence; domain
  restriction for an inverse; graph of a one-to-one function vs its inverse. *Exclude* `(fg)⁻¹=g⁻¹f⁻¹`
  and domain restriction to obtain a *composite*.
- [ ] 1.2 Graphs & transformations — GC graphing; characteristics (symmetry, intercepts, turning
  points, asymptotes) of conics `y²=ax`, `x²=by`, ellipse, hyperbolas, `y=(ax+b)/(cx+d)`,
  `y=(ax²+bx+c)/(dx+e)`; asymptote/symmetry equations; transformations `af(x)`, `f(x)+a`, `f(x+a)`,
  `f(ax)` and combinations; relating `y=f(x)`, `y=|f(x)|`, `y=f(|x|)`, `y=1/f(x)`; simple parametric curves.
- [ ] 1.3 Equations & inequalities — formulating equations / linear systems / inequalities from a
  situation; solving exactly or via GC; linear systems via GC; inequalities `f(x)/g(x)>0` (linear or
  quadratic); `|x−a|<b ⇔ a−b<x<a+b` and the `>` form; graphical inequality solving.

**2. Sequences and series**
- [ ] 2.1 — sequence/series for finite & infinite cases; sequence as `f(n)`; `uₙ`↔`Sₙ`; nth-term
  formula; recurrence `uₙ₊₁=f(uₙ)` (incl. GC generation); sum/difference of series; convergence & sum to
  infinity; **AP** nth term & sum; **GP** nth term & sum; condition for GP convergence; sum to infinity
  of a convergent GP. *(Method of differences sits here in practice.)*

**3. Vectors**  ← Ethan's flagged weak topic; HCI Ch7 corpus loaded (notes + Tutorials 7A/7B/7C solutions)
- [ ] 3.1 Basic properties (2D & 3D) — add/subtract, scalar multiple + geometric meaning; position,
  displacement, direction vectors; magnitude; unit vectors; distance between two points; **collinearity**.
- [ ] 3.2 Scalar & vector products — **ratio theorem** in geometry; scalar product and **vector (cross)
  product** + properties; **angle between two vectors**; geometric meaning of `a·n̂` and `a×n̂`
  (n̂ a unit vector). *Exclude* **triple products** `a·(b×c)` and `a×(b×c)`.
- [ ] 3.3 Three-dimensional vector geometry — vector & cartesian equations of **lines and planes**;
  **foot of perpendicular** and **distance from a point to a line / to a plane**; **angle** between two
  lines / a line & a plane / two planes; **relationships** between (i) two lines (coplanar or skew)
  (ii) a line & a plane (iii) two planes. *Exclude* **shortest distance between two skew lines** and the
  **common perpendicular** to two skew lines.

**4. Introduction to Complex numbers**  *(official title — note "Introduction")*
- [ ] 4.1 Cartesian form & Argand diagrams — extend ℝ→ℂ; complex roots of quadratics; **modulus,
  argument, conjugate**; four operations; equality of complex numbers; conjugate roots of a
  real-coefficient polynomial; Argand representation; geometric effects of conjugation, negation,
  add/subtract, and multiplication by `i`. **⚠️ *Exclude* polar (modulus-argument) form AND exponential
  form.** (Cartesian only — a major 9740→9758 narrowing; see 5.2.)

**5. Calculus**  ← largest Pure block
- [ ] 5.1 Differentiation — sign of `f'`, `f''` graphically; `y=f'(x)` ↔ `y=f(x)`; implicit & parametric
  differentiation; nature of stationary points (1st/2nd derivative test); max/min via GC; tangents &
  normals (incl. implicit/parametric); maxima/minima problems; **connected rates of change**. *Exclude*
  non-stationary points of inflexion & 2nd derivative of parametric functions.
- [ ] 5.2 Maclaurin series — standard expansions `(1+x)ⁿ`, `eˣ`, `sin x`, `cos x`, `ln(1+x)`; derivation
  by repeated/implicit differentiation or standard series; range of convergence; Maclaurin as
  approximation; **small-angle approximations** `sin x≈x`, `cos x≈1−x²/2`, `tan x≈x`. *Exclude* deriving
  the general term.
- [ ] 5.3 Integration techniques — `f'(x)·f(x)ⁿ` (incl. n=−1), `f'(x)eᶠ⁽ˣ⁾`, `sin²/cos²/tan²x`, standard
  forms `1/(a²+x²)`, `1/√(a²−x²)`, `1/(a²−x²)`, `1/(x²−a²)`; integration by substitution (given);
  **integration by parts**. *Exclude* reduction formulae.
- [ ] 5.4 Definite integrals — as limit of a sum; area under a curve; area between curve & lines / two
  curves; area below the x-axis; **volume of revolution** about x- or y-axis; GC approximation.
  *Exclude* area/volume of revolution where the curve is parametric.
- [ ] 5.5 Differential equations — general & particular solutions of `dy/dx=f(x)g(y)` (incl. reduction
  by a given substitution); **formulating a DE from a situation**; interpreting a DE & its solution in
  context. *(9758 is **first-order only** — second-order DEs were removed at the 9740→9758 switch; 5.2.)*

### Section B — Probability and Statistics

**6. Probability and Statistics**
- [ ] 6.1 Probability — addition/multiplication counting principles; **permutations `ⁿPᵣ` &
  combinations `ⁿCᵣ`**; arrangements in a line/circle with repetition & restriction; add/multiply
  probabilities; mutually exclusive & independent events; tables/Venn/tree diagrams; **conditional
  probability** (simple); `P(A')=1−P(A)`, `P(A∪B)=P(A)+P(B)−P(A∩B)`, `P(A|B)=P(A∩B)/P(B)`.
- [ ] 6.2 Discrete random variables — pmf, expectation, variance; **binomial `B(n,p)`** as a model incl.
  conditions under which it is suitable; mean & variance of binomial. *Exclude* the **CDF of a discrete
  RV**. *(Note: Poisson and geometric are **not** in the include list — they appear in the notation list
  only; see 5.2.)*
- [ ] 6.3 Normal distribution — continuous RV (concept); `N(μ,σ²)` as a model; standard normal;
  `P(X<x₁)` & related; symmetry; finding `x₁`/`μ`/`σ` from a probability; `E(aX+b)`/`Var(aX+b)`;
  `E(aX+bY)`/`Var(aX+bY)` for independent X,Y. **⚠️ *Exclude* normal approximation to the binomial.**
- [ ] 6.4 Sampling — population & simple random sample; **sample mean X̄** as a RV with `E(X̄)=μ`,
  `Var(X̄)=σ²/n`; distribution of X̄ from a normal population; **Central Limit Theorem** (large n,
  e.g. n≥30); **unbiased estimates** of population mean & variance, incl. from summarised data
  `Σx, Σx²` or `Σ(x−a), Σ(x−a)²`.
- [ ] 6.5 Hypothesis testing — H₀/H₁, test statistic, critical region, critical value, significance
  level, **p-value**; testing a **population mean** from (a) a normal population of **known variance**
  or (b) a **large sample** from any population; **1-tail & 2-tail**; **interpret the result in
  context**. *Exclude* the term **"Type I error,"** the concept of **Type II error**, and testing the
  **difference between two means**.
- [ ] 6.6 Correlation & linear regression — scatter diagram judgement; **product-moment correlation
  coefficient** (interpret values near −1, 0, 1); least-squares **regression line**; interpolation vs
  extrapolation; choosing the **appropriate regression line** for prediction + commenting on model fit;
  **linearising transformations** (square, reciprocal, logarithmic). *Exclude* deriving formulae,
  `r²=b₁b₂`, and hypothesis tests on `r`.

---

# 4. Question Archetypes & Distribution

**Grounding (recalibrated):** Pure and Stats archetypes are **`[SCHOOL]`** — strongly corroborated by the
loaded corpus, which maps real TYS 2009-2022 question-by-question **and** every P2 Sec B across 13
real-exam years plus the 2012-2025 prelim cycle. The specimen-derived Pure ordering is `[RESEARCH]`
(public, not in inputs). Distribution percentages below are the **per-topic shape** corroborated by the
corpus; they are *not* a SEAB-published tally.

### 4.1 Vectors `[SCHOOL corpus + HCI Ch7]` — *priority topic*

The P1 **12–14m closer is very frequently 3D vectors with real-world dressing** (canopy, gallery,
room model, pyramid, sculpture, drone, Ames room — corpus-attested), and a second vectors question
appears in P2 Sec A (7–13m). Archetypes:

| Archetype | Approx. share of vector marks | What it looks like |
|---|---|---|
| **Lines & planes geometry** (the big one) | ~45% | Equations of lines/planes; intersection; **foot of perpendicular** from a point; **point on a line closest to a given point**; **reflection** of a line/point in a line/plane; **angle** between line/plane/planes; three-planes → triangular-prism condition |
| **Scalar & vector product manipulation** | ~25% | `a×b=c×a`-type relationships; `\|a×b\|` as area / `a·b` as projection; proving perpendicularity/parallelism; angle between vectors |
| **Ratio theorem & position-vector geometry** | ~20% | Midpoints, ratios `AP:PB`, collinearity, parallelism proofs (HCI Tutorial 7A territory; 2025 VJC P1 Q3, 2019 VJC P2 Q5 corpus examples) |
| **Distance / magnitude / minimisation** | ~10% | Point-to-line & point-to-plane distance; **minimise `\|PR\|`** (= point-to-line distance, NOT skew-line distance which is excluded) |

**In scope, so fair game:** point-to-line and point-to-plane shortest distance (via projection or
perpendicular foot). **Out of scope, so it will NOT be asked straight:** shortest distance between two
*skew* lines, common perpendicular, triple products. If a question *looks* like skew-distance, it is
really point-to-line minimisation (2017 Cambridge P1 Q10 "three cables, closest point on line"; "make
|PR| as small as possible"). `[SCHOOL — corpus-attested]`

### 4.2 Calculus `[SCHOOL corpus]` — *largest Pure block*

- **Differential equation** as a long back-end question (2017 P1 Q11 — terminal velocity; 2022 P1 Q12 —
  logistic vs exponential; 2019 P1 Q11 — cooling+freezing): formulate the DE from a context → solve
  `dy/dx=f(x)g(y)` → apply initial conditions → interpret limiting behaviour. **The classic
  application/integration closer. First-order only.**
- **Volume of revolution / area** often combined with **parametric** curves (~80% of P1s have a
  volume/area item; 2015 P1 Q10, 2018 P1 Q2 corpus examples).
- **Connected rates of change** as a short opener (2016 P2 Q1 cone tank; 2023 RI P1 Q3 meteorite).
- **Maclaurin** + **small-angle approximation** linked to trig/applied differentiation (~100% of
  P2 Sec A — verify standard series or derive by repeated/implicit differentiation; 2018 P2 Q4
  ln(cos 2x); 2019 P2 Q4 sec 2x; 2020 P1 Q3 corpus examples).
- **Integration techniques**: by-parts, **given** substitution (`x=sinθ`, `x=tanθ`, `u=…`), standard
  `1/(a²±x²)` forms, `f'/f`. Substitution is almost always *explicitly given*. `[SCHOOL]`

### 4.3 Functions & graphs `[SCHOOL corpus]`
- **Transformations** (~5m): describe/apply a *sequence* of transformations (order matters); relate
  `f(x)` to `|f(x)|`, `f(|x|)`, `1/f(x)`, `f'(x)`.
- **Curve sketching + inequalities** (~7m): sketch a rational/conic "stating equations of asymptotes,
  coordinates of stationary points, intersections with axes," then solve an inequality graphically or
  via the `|x−a|` rules. Inequalities often the **"Hence" / "without a calculator" opener** (Q1/Q2).
- **Inverse/composite functions**: existence conditions, domain restriction, `f⁻¹` and its graph;
  **self-inverse** `f(f(x))=x` and **iterated/periodic** `fⁿ(x)` (e.g. `f²⁰²³(1)`, `f²⁰²⁵`, `f²⁰³⁰`) —
  a recurring trap-rich angle (2014 P1 Q1, 2018 P1 Q5, 2025 VJC P1 Q2/HCI P1 Q8 corpus examples).
- **System of linear equations / formulation** (often the application hook, real-world dressed).

### 4.4 Sequences & series `[SCHOOL corpus]`
- AP/GP set-ups from a context; the P1 **real-world AP/GP closer 12-13m** is near-certain: loan
  repayment, dosing pump, followers/influencer — corpus-attested (2018 P1 Q11 compound interest;
  2025 VJC P1 Q12 dosing pump; 2025 HCI P1 Q13 followers; 2025 ACJC P1 Q12 loan).
- **Method of differences** (telescoping, often with partial fractions) + **convergence / sum to
  infinity** + "deduce sum from r=k onwards" (2009 P1 Q3, 2015 P2 Q4, 2019 P1 Q6 corpus examples).
- `uₙ` ↔ `Sₙ` relationships; **recurrence** behaviour (converges/diverges, find a term).

### 4.5 Complex numbers `[SCHOOL corpus]`
- A substantial single question, **near-universally a "do not use a calculator" item**: operations in
  cartesian form, **conjugate roots** of a real polynomial, solving for roots, **Argand diagram**,
  geometric effects (2010 P2 Q1, 2016 P1 Q7, 2018 P2 Q2, 2019 P1 Q1, 2024 RI P1 Q8, 2025 VJC P2 Q4
  corpus examples). **Cartesian/Argand only — no polar/exponential form in 9758.**
  *(Note: several `[SCHOOL]` TYS solutions pre-2017 and some prelims show polar/exponential working —
  that is 9740-era or school habit; it is **out of 9758 scope** — see 5.2.)*

### 4.6 Probability & Statistics `[SCHOOL corpus]` — *all of P2 Sec B (60m), ~50% of TPE mock*

The corpus confirms **all seven appear in essentially every P2 Sec B**, with Normal and Hypothesis
Testing as the two longest questions (10–14m each):
- **P&C / arrangements** (line & circle, restrictions, repetition; anagrams) → 5–8m, early.
- **Probability**: conditional, independent/mutually exclusive, tree/Venn, `P(A|B)`; min/max of a union.
- **Discrete RV**: distribution table, `E(X)`, `Var(X)`, game expectation; find parameters from E/Var.
- **Binomial** `B(n,p)`: **state model + two assumptions**; `P(X=x)`, `P(X≤x)`, mean/variance; modal value.
- **Normal** `N(μ,σ²)`: `P(X<x)`; **find `μ`/`σ`** ("back-to-front"); `E/Var(aX+bY)` combinations;
  **sample mean + CLT**.
- **Sampling / CLT / unbiased estimates** from summarised data — often the lead-in to a test.
- **Hypothesis test** for a mean (known variance, or large sample via CLT): formulate H₀/H₁ **defining
  the parameter**, compute test statistic / p-value, **conclude in context**; 1-tail vs 2-tail choice;
  critical region (sometimes in terms of n). **Frequently the application question (≥12m) in Sec B.**
- **Correlation & regression**: scatter, `r`, **choose the correct regression line**, **linearising
  transformation** (square/reciprocal/log; e.g. 1/h on 1/n), interpolation vs extrapolation + **comment
  on reliability**, Fahrenheit/Celsius unit transform (2024 HCI P2 Q11 plant growth; 2019 VJC P2 Q10
  gold-standard regression playbook).

---

# 5. Trap / Distractor Model — where the marks leak

> The most valuable section for gap-hunting. **Confidence is `[SCHOOL]` for most traps**: the per-topic
> misconception traps below are corroborated by the tutor/JC suggested-solution corpus, which explicitly
> flags recurring errors (`math-examiner-patterns-reference.md` §13 "Recurring exam traps"). The
> *scope-import* traps (5.2) are `[OFFICIAL-derived]` — straight from syllabus exclusions. **What is
> still missing:** a *SEAB examiner report* confirming which traps catch the most candidates — that does
> not exist in inputs, so 5.3 cannot reach `[OFFICIAL]`.

## 5.1 Cross-cutting mark-loss traps `[SCHOOL — corpus mark conventions + OFFICIAL GC rule]`

| Trap | The mark it costs |
|---|---|
| **Premature rounding** — rounding intermediate values to 3 s.f. then reporting 3 s.f. | Final **accuracy (A) mark** (answer off in the 3rd s.f.). Carry **≥4 s.f.** through. |
| **Bare GC answer where working is required** ("show that" / "exact" / "without a calculator") | All method marks — calculator syntax is **not** "working." `[OFFICIAL GC rule]` |
| **Decimalising an "exact value" question** | The exact-form accuracy mark. Keep surds/π/ln/fractions. |
| **Forgetting `+C`** in an indefinite integral / **omitting the modulus** in a `ln` integral | −1 (corpus-flagged deduction). |
| **No graph sketch on a graphical-solution question** | Method/communication marks. `[OFFICIAL — syllabus asks for the sketch]` |
| **Doing a "Hence" part independently** of the previous result | Marks withheld even with a correct answer — "Hence" is *strict*. |
| **Stats: conclusion not in context; parameters/distribution not stated; assumptions omitted** | AO2 interpretation marks + the B mark for assumptions — the dominant AO. |
| **Missing units** in an applied/real-world context | −1 possible (corpus-flagged). |

## 5.2 Scope-import traps — applying an EXCLUDED method `[OFFICIAL-derived]`

High-value because they come **directly from the official exclusion list.** A student coached on the
older 9740 syllabus, a foreign board, or even a school habit reaches for a tool 9758 does not use.
**The corpus actively warns against these** (it tags pre-2017 questions on these as out-of-syllabus):

| Student does | Why it's a trap (9758 scope) |
|---|---|
| Writes a complex number in **polar / `r(cosθ+isinθ)` / `reⁱᶿ`** form | **Excluded.** 9758 complex numbers are **cartesian/Argand only.** (Note: several `[SCHOOL]` TYS solutions *do* use polar — they are 9740-era; do not imitate.) |
| Uses **normal approximation to the binomial** (with continuity correction) | **Excluded.** Questions are set so it isn't needed. |
| Reaches for **Poisson `Po(λ)`** or **geometric `Geo(p)`** | **Not in the include list** (notation list only). Removed at the 9740→9758 switch. |
| Uses a **t-test**, **sign test**, or **confidence interval** | **Excluded** (t-test is FM 9649 only; non-parametric tests + CIs removed). 9758 uses the **z-test only**. |
| Computes **shortest distance between two skew lines** / a **common perpendicular** | **Excluded.** The real ask is point-to-line minimisation. |
| Uses **triple products** `a·(b×c)` for coplanarity/volume | **Excluded.** |
| Solves a **second-order DE** (e.g. `d²y/dx²=…`, RLC circuit) | **Excluded** in 9758 (first-order only) — even though some `[SCHOOL]` 2009-2018 TYS show them. |
| Invokes **"Type I / Type II error"** language in a hypothesis-test conclusion | **Excluded terminology.** Conclude with significance + context only. |
| Tests the **difference between two population means** | **Excluded.** Only single-mean tests are in scope. |
| Uses **polar coordinates** in a graphing/curve question | **Excluded** (was rare in 9740; gone in 9758). |

## 5.3 Per-topic misconception traps `[SCHOOL — corpus + HCI Vectors corpus]`

**Vectors** (richest grounding — HCI Ch7 notes/tutorials + corpus vector questions):
- Confusing **scalar projection `a·n̂`** (a signed length) with the **vector projection `(a·n̂)n̂`**
  (a vector) — and `a×n̂` (perpendicular-component magnitude). The HCI notes flag this `a·n̂` vs `a×n̂`
  distinction explicitly.
- **Foot of perpendicular** errors: solving the wrong perpendicularity condition; mixing the
  point-to-line vs point-to-plane procedure.
- **Sign / direction errors**: using a position vector where a direction vector is needed; reversing
  `AB` vs `BA`.
- **Treating dependent (parallel) direction vectors as independent** → claiming lines are
  skew/intersecting when they are parallel; missing that "no solution" can mean **parallel, not skew**.
- `\|a×b\|` (area / sine) vs `a·b` (projection / cosine) **mix-ups** in angle/area questions.
- **Ratio theorem** sign/weighting slips (which point gets which weight).
- **"Verify that A lies on plane p" first-part bait** — corpus-flagged (`§13`): a 1-mark warm-up that
  tempts the student into the wrong vector form for the main calculation.

**Complex numbers:** conjugate-root pairs forgotten when forming a real polynomial; arithmetic slips
multiplying/dividing in cartesian form (rationalising by the conjugate); misreading the geometric
effect of ×i (90° rotation); **drifting into polar form** (out of scope — 5.2). Argument-range/quadrant
errors are a plausible trap but **not independently confirmed for 9758** — flag `[INFERRED, low]`.

**Calculus:** wrong **integration-by-parts** choice of u/dv; forgetting the **chain rule** in implicit
differentiation; **omitting `+C`** / mis-applying the initial condition in a DE → wrong particular
solution; mishandling **parametric** area/volume (which is out of scope — another scope trap); sign of
area below the x-axis; **not using the given substitution** exactly as specified.

**Statistics:** for a **discrete** RV, confusing `P(X≤x)` with `P(X<x)` (`P(X≤x)` includes x); using
the **sample variance** instead of the **unbiased estimate** `s²=Σ(x−x̄)²/(n−1)` (esp. from summarised
`Σx, Σx²`); wrong **1-tail vs 2-tail** choice from the wording; **conclusion phrasing** that "accepts
H₀" rather than "insufficient evidence to reject H₀"; **not defining the population-mean parameter** in
H₀/H₁; **forgetting the binomial/normal assumptions** (the free B mark); **extrapolating** beyond the
data range without flagging it as unreliable; choosing the **wrong regression line** for prediction
(regress the quantity to be predicted on the other).

---

# 6. High-Yield Topics & Cycle Signals

## 6.1 High-yield (where to spend revision marginal-hours) `[SCHOOL — corpus frequency]`
1. **Calculus** — largest Pure block; the long application closer is almost always a DE or a
   volume/area integration; Maclaurin is ~100% of P2 Sec A. High marks, integrates with everything.
2. **Vectors** — owns the P1 12–14m closer + a P2 Sec A question, every paper. **Ethan's flagged weak
   spot → highest expected-value revision target.**
3. **Probability & Statistics (whole of Sec B)** — 30% of the A-Level, **~50% of the TPE mock**.
   Volume-heavy; **Normal + Hypothesis testing are the two long bankers**, plus P&C, DRV/binomial,
   regression every paper.
4. **Complex numbers** — one predictable substantial question, near-always "no calculator."
5. **Functions & graphs** + **Sequences & series** — reliable, more AO1-accessible marks; good for
   securing the first 40–50 marks; the P1 AP/GP real-world closer is near-certain.

## 6.2 "Likely this cycle" `[SCHOOL — pattern-strong, but still not a SEAB forecast]`
> ⚠️ **Honesty flag:** this is backed by a **multi-year `[SCHOOL]` tally** (real TYS 2009-2022 +
> 2012-2025 prelims), much stronger than a specimen-only basis — but it is still a *school-corpus*
> pattern, **not** a SEAB statement of what will appear. **Cover everything;** do not over-index on the
> forecast.
- **Near-certain every paper (corpus frequency ≈100%):** a differential equation (P1); a 3D-vector
  closer (P1); a complex-number "no calc" question; a normal-distribution question; a hypothesis test;
  permutations & combinations; a linear-regression question; Maclaurin (P2 Sec A).
- **Watch:** the **application/integration ≥12-mark questions** (one in P1, one in P2 Sec B) — these
  carry the AO2 load and are where strong students separate. Corpus shows these are getting **more
  contextual** post-2017 (Snell's law, terminal velocity, logistic growth, plant growth regression,
  drone navigation, dosing pump).

---

# 7. The Examiner's Mental Model + Confidence & Validation

## 7.1 What 9758 is really testing (beneath the surface) `[OFFICIAL AO weights; SCHOOL-corroborated]`
- **AO2 (60%) is the whole game:** can you *translate* a worded/real-world/multi-topic situation into
  the right mathematical model, execute, and *interpret back in context*? Pure technique (AO1, 30%) is
  necessary but not where grades are decided. The corpus's 12–15m closers confirm this.
- **Communication is marked:** method shown, variables defined, distributions/assumptions stated,
  conclusions in context, exact form respected, "Hence" chains honoured. The GC does the arithmetic;
  **you are paid for the set-up and the interpretation.**
- **Discipline under the GC regime:** knowing *when* unsupported answers are allowed vs when full
  notation is required (the "no calculator" items) is a marks variable in its own right.

## 7.2 The 90% confidence check — results (recalibrated 2026-06-20)

Held-out items: a **spread of real Cambridge TYS** mapped in the corpus (2017 P1 Q10/Q11; 2018 P2
Q2/Q3/Q6; 2019 P1 Q1/Q12, P2 Q10; 2020 P1 Q1/Q3) + **2023-2025 prelim** items (2023 RI P1 Q12; 2024 RI
P1 Q8/Q10, HCI P2 Q11; 2025 NJC P1 Q12, VJC P1 Q12 / P2 Q4). ⚠️ Caveats: **all marked solutions are
school/tutor "suggested" answers — no SEAB mark scheme exists in inputs**, so scoring is against
school-authored answers, not ground truth; and the SEAB specimen is **not loaded** so it cannot serve as
a clean OFFICIAL hold-out (the prior build wrongly used it as one).

| Dimension | Threshold | Result | Notes |
|---|---|---|---|
| Exam format & structure | ≥95% | ✅ **~97%** | Verbatim OFFICIAL syllabus; corpus confirms 11-12/4-5/6-8 layout across 15+ JCs × many years. (Was ~98% when specimen was counted as OFFICIAL — trimmed since specimen is not loaded.) |
| Mark scheme (reward/band) | ≥90% | ⚠️ **~85% — borderline/below** | M/A/B logic + GC rule + deduction conventions `[SCHOOL]`-corroborated across the corpus, **but no SEAB mark scheme** to confirm exact band cut-offs; corpus itself says mark allocations are *inferred*, not transcribed. |
| Content nodes | ≥90% | ✅ **~96%** | Exhaustive from the official content outline; cross-checked vs HCI chapter-note skeletons (sparse but matching). |
| Question type & method | ≥85% | ✅ **~91%** | Strong on **both** Pure **and** Stats — the corpus maps every P2 Sec B across 13 real-exam years + the prelim cycle. |
| Trap model | ≥85% | ✅ **~85% (borderline)** | Misconception + scope traps corroborated by corpus error-flags. **Caps at ~85%** because no SEAB examiner report ranks the traps. |

**Outcome:** **4 of 5 dimensions pass**; **mark-scheme mechanics sits borderline at ~85%** — firmer than
a pre-corpus build but still gated by the absence of any SEAB mark scheme. The guide is stamped **MIXED
confidence, ceiling ~89% overall**, well above the 70% LOW floor. (Down from the prior build's claimed
~91% because the specimen is correctly **no longer counted as a loaded OFFICIAL source**.)

## 7.3 Confidence ceiling & what would raise it
- **Trust at ~95%+ `[OFFICIAL]`:** paper structure, weightings, AO split, GC rules, accuracy rubric,
  the full content node map, scope exclusions, assumed knowledge, notation — all verbatim from the
  loaded syllabus.
- **Trust at ~88–90% `[SCHOOL]`:** the archetype distribution, topic frequency tally, the Pure **and**
  Stats archetypes — backed by a broad multi-year tutor-solution corpus.
- **Trust at ~80% `[RESEARCH, not in inputs]`:** the specimen Paper 1 ordering/marks in §2 — public on
  seab.gov.sg but **not loaded and not re-verified line-by-line here.** Confirm against the actual
  specimen before relying on the precise per-question marks.
- **Trust at ~80–85% `[SCHOOL]/[INFERRED]` (verify against a real paper):** the trap model ranking and
  the exact mark-band micro-mechanics (M/A/B cut-offs, per-error deductions).
- **HARD CAP ~92%.** Nothing here can exceed it: **every marked paper in `inputs/` is a school/tutor
  *suggested* solution; SEAB publishes no 9758 mark scheme or examiner report, and none is loaded; and
  the official specimen is not in the corpus either.**
- **To raise the ceiling, in order of value:** ① **Ethan sits one official 9758 past paper under timed
  conditions** — the only true ground-truth gate (`spec.md` §9). ② **Load the SEAB specimen P1/P2 into
  `inputs/`** and verify §2's distribution line-by-line — that upgrades the specimen content from
  `[RESEARCH]` to `[OFFICIAL]` and recovers ~1–2 points of structure/question-type confidence. ③ An
  **authorised-educator SEAB mark scheme / examiner report** (if obtainable) would upgrade the mark-band
  mechanics + trap ranking from `[SCHOOL]` to `[OFFICIAL]` and push the mark-scheme dimension past 90%.
  Until one of those lands, the trap ranking and band mechanics stay `[SCHOOL]`/`[INFERRED]`.

## 7.4 Recalibration trigger `[OFFICIAL system rule]`
The guide is ground truth **until proven wrong**: if Ethan's session/model-test performance is **>70%
but an official past paper is <50%**, the guide is misaligned — find the mispredicting dimension (most
likely the mark-band mechanics or a specific trap) and fix it (`spec.md` §9, §12; `playbooks/01`).
**Within the first study week, sit one official mock** — that paper, not this guide, is the honesty check.

## 7.5 Open questions carried forward
- **SEAB 9758 mark scheme / examiner report** — **not in inputs** (does not exist publicly). The single
  missing piece capping the ceiling at ~92%.
- **SEAB official specimen P1/P2** — **not in inputs** either (exists on seab.gov.sg). Loading + verifying
  it is a cheap, high-value next step (§7.3 ②). The prior build's treatment of it as a loaded OFFICIAL
  hold-out was the over-claim corrected in this recalibration.
- **A clean OFFICIAL hold-out** (a real paper Ethan has not seen, marked by SEAB rules) — only Ethan's
  own timed sitting can supply this.
- **Chapter-note depth** — most HCI Notion chapter notes are 5-line stubs; the rich teaching material is
  the HCI Stats compiled PDFs (`_General/chapter_notes/`) and the HCI PDF set indexed in
  `hci-school-material-map.md` — **topic-session** input, not needed for the subject-level guide.

---

## Gaps filled from research
Only **one** element of this guide is online-sourced rather than from `inputs/`:
- **§2 SEAB specimen Paper 1 distribution** — `[RESEARCH]`. The SEAB public specimen papers
  (`9758_y25_sp_1.pdf`, `9758_y25_sp_2.pdf`) were **confirmed to exist on seab.gov.sg** via web search,
  but the direct PDF was not fetchable and the table was **not re-verified question-by-question.** It is
  retained as a plausible, corpus-consistent Pure shape, tagged `[RESEARCH]`, and imposes a **confidence
  hit**: the structure/question-type dimensions are reported ~1 point lower than the prior build that
  miscounted the specimen as loaded OFFICIAL evidence. **No syllabus-required topic was missing** — every
  content node is covered by the loaded syllabus + chapter notes + corpus, so no topic section needed
  online back-fill. Nothing in this guide is `[UNVERIFIED — needs inputs]`.

## Sources
**Primary `[OFFICIAL]` (the only official document in inputs):** SEAB 9758 syllabus 2026
(`inputs/Maths/H2/official_docs/Maths_H2_syllabus_2026.txt`, read in full; `.pdf` alongside) +
`inputs/Maths/H2/_General/official_docs/math-9758-syllabus-summary.md`.
**`[SCHOOL]` corpus (high evidential weight for patterns; tutor/JC-authored, NOT SEAB):**
`inputs/Maths/H2/_General/school_resources/` — `math-cambridge-actual-reference.md` (real Cambridge TYS
2009-2022, mapped question-by-question with 9758 in/out tags), `math-prelims-2023-2025-reference.md`
(139 PDFs, 16 JCs, current cycle), `math-examiner-patterns-reference.md` (1,002-file cross-corpus
synthesis), the 2012-2022 era sub-references, and `hci-school-material-map.md`; raw suggested-solution
PDFs in `inputs/Maths/H2/_General/past_papers/H2_Mathematics_Papers/` (real A-Level 2009-2022, ASRJC/VJC/RI)
and `.../Mathematics_Additional/A Levels/H2 Mathematics/Prelims/` (2012-2025, 15+ JCs).
**HCI loaded corpus:** Ch7 Vectors notes + Tutorials 7A/7B/7C solutions (`inputs/Maths/H2/Vectors/`);
sparse Notion chapter-note skeletons across all topics (`inputs/Maths/H2/*/chapter_notes/`); HCI Stats
compiled PDFs (`inputs/Maths/H2/_General/chapter_notes/`).
**`[RESEARCH]`:** SEAB public specimen P1/P2 existence confirmed via web (seab.gov.sg) — **not loaded in
inputs**, distribution unverified line-by-line.
**`[INFERRED]`:** Cambridge 9709 sister-syllabus analogy for residual mark-loss mechanics; domain
knowledge for the few traps the corpus doesn't pin down.
**Recalibration note (2026-06-20):** this build (a) **corrects** the prior over-claim that an OFFICIAL
specimen was loaded — it is not; the only official input is the syllabus, so the specimen content is
re-tagged `[RESEARCH]`; (b) **keeps** the `[SCHOOL]` archetype/trap upgrades, which the loaded corpus
genuinely supports; (c) **lowers** the honest overall ceiling from the prior ~91% to ~89%, while holding
the ~92% hard cap. The validation gate remains Ethan's first official paper under timed conditions.
