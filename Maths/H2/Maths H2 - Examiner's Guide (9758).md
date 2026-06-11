---
subject: Maths
level: H2
default_type: quantitative
status: BUILT
validation_source: MIXED
confidence_ceiling: ~88% overall (structure/scope ~98% [OFFICIAL]; archetypes ~80% [INFERRED]; trap model ~75% [INFERRED])
last_updated: 2026-06-11
---

# Subject Examiner's Guide — Mathematics H2 (9758)

> **Singapore-Cambridge GCE A-Level · Syllabus 9758 · Board: SEAB/Cambridge (UCLES) · Student: Ethan**
> How this exam *thinks* across the whole subject. Built once (playbook 01); updated only on
> recalibration. Default gap-closure type: **quantitative** — a gap closes only when variants are
> *solved* mechanically, never by reading (`spec.md` §2).

> **How to use this file.** Section 1 = the contract you're marked against. Section 3 = the master
> coverage checklist every topic guide draws from. Sections 4–5 = how questions are built and where
> the marks leak — read these before generating any practice. Section 7 = exactly how far to trust
> this guide and what would raise the ceiling.

> **Tag legend.** `[OFFICIAL]` = verbatim from the 2025/2026 SEAB 9758 syllabus or the official
> specimen paper. `[INFERRED]` = from the official specimen distribution generalised, the sister
> Cambridge 9709 syllabus transferred by analogy, the HCI Chapter 7 corpus, or established
> domain knowledge. `[TPE]` = mock-specific scope from `EXAM_SCOPE.md`. **When the syllabus and any
> secondary source disagree, `[OFFICIAL]` wins.**

> ⚠️ **CONFIDENCE NOTE (read before relying on this).** Structure, scope, and the official specimen
> distribution are HIGH confidence. **The trap model, the mark-band mechanics, and the Stats
> archetype frequency are `[INFERRED]`** — SEAB does **not** publish 9758 mark schemes or examiner
> reports publicly, so no 9758-specific examiner commentary exists to verify them. They are built
> from the syllabus *exclusions* (which are official), the specimen, the sister 9709 syllabus, and
> the HCI notes. **The real validation gate is your first official past paper under timed conditions**
> (`spec.md` §9), not this guide. If a session/mock scores >70% but an official paper <50%,
> recalibrate (Section 7).

---

# 1. Exam Overview — the contract you are marked against

## 1.1 Paper structure `[OFFICIAL]`

Two **3-hour** papers, **each 50%**, **each marked out of 100** (200 total). **All questions
compulsory — no choice on either paper.**

| Paper | Content | Structure | Marks | Weight | Time |
|---|---|---|---|---|---|
| **Paper 1** | Pure Mathematics only | 10–12 questions of varying length | 100 | 50% | 3h |
| **Paper 2 — Section A** | Pure Mathematics | 4–5 questions | 40 | 20% | (within 3h) |
| **Paper 2 — Section B** | Probability & Statistics | 6–8 questions | 60 | 30% | (within 3h) |

- **Application question:** there is **one real-world / sciences-engineering application question
  carrying ≥12 marks in Paper 1, and one in Paper 2 Section B.** It may integrate more than one
  topic. `[OFFICIAL]`
- **Topic integration:** the syllabus explicitly warns questions "may integrate ideas from more than
  one topic." Expect Vectors×Calculus (kinematics), Calculus×Sequences (Maclaurin), Stats×application
  cross-overs. `[OFFICIAL]`
- **Split of marks across the whole A-Level:** Pure Maths = P1 (100) + P2 Sec A (40) = **140/200
  (70%)**; Probability & Statistics = P2 Sec B = **60/200 (30%)**. `[OFFICIAL — derived]`

> **`[TPE]` for Ethan's mock (TPE3):** ~50% Pure / 50% Statistics, single 3-hour paper — a heavier
> Stats weighting than the real A-Level's 30%. **Do not under-prepare Stats for the mock** even
> though it is "easy to score" — it is half the mock. (Vectors remains the flagged weak spot.)

## 1.2 Assessment Objectives & what actually earns marks `[OFFICIAL]`

| AO | What it tests | Weight |
|---|---|---|
| **AO1** | Use mathematical techniques and procedures (recall + execute) | **30%** |
| **AO2** | **Formulate and solve problems, incl. real-world contexts** | **60%** |
| **AO3** | Reason and communicate mathematically (justify, prove, generalise) | **10%** |

**The single most important consequence:** **AO2 carries 60%.** This exam is *not* mostly about
recalling techniques (AO1, only 30%). The marks live in **choosing the right method, translating a
worded/real-world situation into maths, and interpreting the result back in context.** A student who
can execute every technique but freezes when a problem is unfamiliar or wrapped in context is built
to score in the 60s, not the 80s. `[OFFICIAL weights; INFERRED consequence]`

## 1.3 The graphing calculator (GC) regime `[OFFICIAL]`

- An **approved GC without CAS** is **expected and assumed** on both papers.
- **"Unsupported answers from the GC are allowed unless the question states otherwise."** So routine
  solving (equations, definite integrals, normal probabilities, regression lines) can be done
  straight on the GC.
- **Where unsupported answers are *not* allowed** (the question says "without using a calculator,"
  "show that," "find the exact value," "prove"), you **must present mathematical steps in
  mathematical notation — not calculator commands.**
- **"Incorrect answers without working will receive no marks. However, if there is written evidence
  of using a GC correctly, method marks may be awarded."** → **Always show set-up working**, even
  when the GC does the arithmetic: a wrong final answer with correct set-up still banks method marks;
  a wrong final answer alone banks nothing.
- For graphical solutions, **sketch the graph as part of the answer.** GC-tracing accuracy is
  explicitly flagged as unreliable for roots.

## 1.4 Accuracy & presentation rubric `[OFFICIAL]`

- **Non-exact numerical answers → 3 significant figures**; **angles in degrees → 1 decimal place** —
  unless the question specifies otherwise. (Front-of-paper instruction, official specimen.)
- A **List of Formulae and Results (MF26)** is **provided in the exam.** Students need *fluency
  applying* the formula list, not memorising it — but must know what is *not* on it (e.g. most
  vector geometry results, the quotient rule, definitions).

## 1.5 What the exam rewards vs punishes `[INFERRED — 9709 sister syllabus + GC rule above]`

| Rewards | Punishes |
|---|---|
| Correct **method shown** even if arithmetic slips | A bare answer that is wrong (→ 0; no method to credit) |
| Carrying **≥4 s.f. through intermediate working** | **Premature rounding** → wrong final 3 s.f. → lost accuracy mark |
| **Exact form** when asked (surds, π, ln, fractions) | Decimalising an "exact value" question |
| **Defining variables / stating distributions** (Stats) | Conclusions not **in context** (Stats, application Qs) |
| **Sketching** graphs for graphical solutions | Calculator syntax written as "working" |

> ⚠️ The mark-loss *mechanics* above (premature approximation losing the final A mark; the "PA −1"
> annotation) are documented in the **official Cambridge 9709 examiner reports** and transferred to
> 9758 **by inference** — 9758 shares the identical 3 s.f. rubric and the UCLES M/A/B apparatus, but
> no public 9758 examiner report confirms them directly. Treat as `[INFERRED]`.

---

# 2. Topic Frequency & Weight Map

Topic weighting below is **`[OFFICIAL]`** at the section level (Pure 70% / Stats 30%) and the
**single-paper level** for the specimen; **per-topic frequency across multiple years is `[INFERRED]`**
(no multi-year official tally is public — see Section 7 open questions).

| # | Topic | Section | Typical home | Bloom centre | Weight signal |
|---|---|---|---|---|---|
| 1 | Functions & graphs | A (Pure) | P1 + P2 Sec A | AO1→AO2 | Every paper; 2–3 items (transformations, curve sketching, inverse/composite) |
| 2 | Sequences & series | A (Pure) | P1 | AO1→AO2 | Reliable; AP/GP, ∑, method of differences, sum-to-infinity |
| 3 | **Vectors** | A (Pure) | P1 (often **×2**) + sometimes P2 Sec A | AO2→AO3 | **High-yield: TWO vector questions on the specimen P1 (Q6, Q10) and on Nov-2017 P1.** Ethan's weak spot. |
| 4 | Complex numbers | A (Pure) | P1 | AO1→AO2 | One substantial item; frequently a **"do not use a calculator"** question |
| 5 | **Calculus** | A (Pure) | P1 + P2 Sec A | AO2→AO3 | **Largest Pure block** — differentiation, Maclaurin, integration, definite integrals/volumes, **differential equations** (the specimen's 14-mark closer). Usually several questions. |
| 6 | Probability & Statistics | B | **All of P2 Sec B (60m)** | AO2 | P&C, binomial, normal, sampling/CLT, hypothesis testing, correlation & regression — collectively 30% of the A-Level, **~50% of the TPE mock** |

**Official specimen Paper 1 distribution (the best single OFFICIAL snapshot of Pure):** `[OFFICIAL]`

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

Read-off: **Calculus dominates Pure** (Q1, Q5, Q8, Q9, Q11 ≈ 49 marks touch calculus); **Vectors is
the second-heaviest single topic (20 marks across two questions)**; the **longest questions sit at
the back** (Q8–Q11, 11–14 marks each) and carry the application/integration load.

---

# 3. Content Node Map (the master coverage checklist) `[OFFICIAL]`

Derived verbatim from the 2026 SEAB 9758 syllabus content outline. **This is the coverage checklist
topic guides and convergence checks (`spec.md` §9) walk against.** Exclusions are listed because
**applying an excluded method is itself a recurring trap** (Section 5.2).

### Section A — Pure Mathematics

**1. Functions and graphs**
- [ ] 1.1 Functions — domain/range; inverse & composite functions; conditions for existence; domain
  restriction for an inverse; graph of a one-to-one function vs its inverse. *Exclude* `(fg)⁻¹=g⁻¹f⁻¹`
  and domain restriction to obtain a *composite*.
- [ ] 1.2 Graphs & transformations — GC graphing; characteristics (symmetry, intercepts, turning
  points, asymptotes) of conics `y²=ax`, `x²=by`, ellipse, hyperbolas, `y=(ax+b)/(cx+d)`,
  `y=(ax²+bx+c)/(dx+e)`; asymptote/symmetry equations; transformations `af(x)`, `f(x)+a`, `f(x+a)`,
  `f(ax)` and combinations; relating `y=f(x)`, `y=|f(x)|`, `y=f(|x|)`, `y=1/f(x)`; simple parametric
  curves.
- [ ] 1.3 Equations & inequalities — formulating equations / linear systems / inequalities from a
  situation; solving exactly or via GC; linear systems via GC; inequalities `f(x)/g(x)>0` (linear or
  quadratic); `|x−a|<b ⇔ a−b<x<a+b` and the `>` form; graphical inequality solving.

**2. Sequences and series**
- [ ] 2.1 — sequence/series for finite & infinite cases; sequence as `f(n)`; `uₙ`↔`Sₙ`; nth-term
  formula; recurrence `uₙ₊₁=f(uₙ)` (incl. GC generation); sum/difference of series; convergence &
  sum to infinity; **AP** nth term & sum; **GP** nth term & sum; condition for GP convergence;
  sum to infinity of a convergent GP. *(Method of differences sits here in practice.)*

**3. Vectors**  ← Ethan's flagged weak topic; HCI Ch7 corpus loaded
- [ ] 3.1 Basic properties (2D & 3D) — add/subtract, scalar multiple + geometric meaning; position,
  displacement, direction vectors; magnitude; unit vectors; distance between two points;
  **collinearity**.
- [ ] 3.2 Scalar & vector products — **ratio theorem** in geometry; scalar product and **vector
  (cross) product** + properties; **angle between two vectors**; geometric meaning of `a·n̂` and
  `a×n̂` (n̂ a unit vector). *Exclude* **triple products** `a·(b×c)` and `a×(b×c)`.
- [ ] 3.3 Three-dimensional vector geometry — vector & cartesian equations of **lines and planes**;
  **foot of perpendicular** and **distance from a point to a line / to a plane**; **angle** between
  two lines / a line & a plane / two planes; **relationships** between (i) two lines (coplanar or
  skew) (ii) a line & a plane (iii) two planes. *Exclude* **shortest distance between two skew
  lines** and the **common perpendicular** to two skew lines.

**4. Introduction to Complex numbers**  *(official title — note "Introduction")*
- [ ] 4.1 Cartesian form & Argand diagrams — extend ℝ→ℂ; complex roots of quadratics; **modulus,
  argument, conjugate**; four operations; equality of complex numbers; conjugate roots of a
  real-coefficient polynomial; Argand representation; geometric effects of conjugation, negation,
  add/subtract, and multiplication by `i`. **⚠️ *Exclude* polar (modulus-argument) form AND
  exponential form.** (Cartesian only — a major 9740→9758 narrowing; see 5.2.)

**5. Calculus**  ← largest Pure block
- [ ] 5.1 Differentiation — sign of `f'`, `f''` graphically; `y=f'(x)` ↔ `y=f(x)`; implicit &
  parametric differentiation; nature of stationary points (1st/2nd derivative test); max/min via GC;
  tangents & normals (incl. implicit/parametric); maxima/minima problems; **connected rates of
  change**. *Exclude* non-stationary points of inflexion & 2nd derivative of parametric functions.
- [ ] 5.2 Maclaurin series — standard expansions `(1+x)ⁿ`, `eˣ`, `sin x`, `cos x`, `ln(1+x)`;
  derivation by repeated/implicit differentiation or standard series; range of convergence; Maclaurin
  as approximation; **small-angle approximations** `sin x≈x`, `cos x≈1−x²/2`, `tan x≈x`. *Exclude*
  deriving the general term.
- [ ] 5.3 Integration techniques — `f'(x)·f(x)ⁿ` (incl. n=−1), `f'(x)eᶠ⁽ˣ⁾`, `sin²/cos²/tan²x`,
  standard forms `1/(a²+x²)`, `1/√(a²−x²)`, `1/(a²−x²)`, `1/(x²−a²)`; integration by substitution
  (given); **integration by parts**. *Exclude* reduction formulae.
- [ ] 5.4 Definite integrals — as limit of a sum; area under a curve; area between curve & lines /
  two curves; area below the x-axis; **volume of revolution** about x- or y-axis; GC approximation.
  *Exclude* area/volume of revolution where the curve is parametric.
- [ ] 5.5 Differential equations — general & particular solutions of `dy/dx=f(x)g(y)` (incl.
  reduction by a given substitution); **formulating a DE from a situation**; interpreting a DE & its
  solution in context.

### Section B — Probability and Statistics

**6. Probability and Statistics**
- [ ] 6.1 Probability — addition/multiplication counting principles; **permutations `ⁿPᵣ` &
  combinations `ⁿCᵣ`**; arrangements in a line/circle with repetition & restriction; add/multiply
  probabilities; mutually exclusive & independent events; tables/Venn/tree diagrams; **conditional
  probability** (simple); `P(A')=1−P(A)`, `P(A∪B)=P(A)+P(B)−P(A∩B)`, `P(A|B)=P(A∩B)/P(B)`.
- [ ] 6.2 Discrete random variables — pmf, expectation, variance; **binomial `B(n,p)`** as a model
  incl. when it is suitable; mean & variance of binomial. *Exclude* the **CDF of a discrete RV**.
  *(Note: Poisson and geometric are **not** in the include list — see 5.2.)*
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
  context**. *Exclude* the term **"Type I error,"** the concept of **Type II error**, and testing
  the **difference between two means**.
- [ ] 6.6 Correlation & linear regression — scatter diagram judgement; **product-moment correlation
  coefficient** (interpret values near −1, 0, 1); least-squares **regression line**; interpolation
  vs extrapolation; choosing the **appropriate regression line** for prediction + commenting on model
  fit; **linearising transformations** (square, reciprocal, logarithmic). *Exclude* deriving
  formulae, `r²=b₁b₂`, and hypothesis tests on `r`.

---

# 4. Question Archetypes & Distribution

**Grounding:** the Pure archetypes and per-question marks are `[OFFICIAL]` for the specimen P1 and
`[INFERRED]` (corroborated by Nov-2017) for the recurring pattern. Stats archetypes are `[INFERRED]`
from the syllabus scope + standard 9758 paper construction — **no official P2 Sec B specimen was
verified in research.** Distribution percentages are **per-topic shape, not a multi-year frequency
tally** (which is not public).

### 4.1 Vectors `[OFFICIAL specimen + HCI corpus]` — *priority topic*

Two questions per Paper 1 is the observed pattern (specimen Q6+Q10; Nov-2017 Q6+Q10). Archetypes:

| Archetype | Approx. share of vector marks | What it looks like |
|---|---|---|
| **Lines & planes geometry** (the big one) | ~45% | Equations of lines/planes; intersection; foot of perpendicular from a point; **point on a line closest to a given point**; reflection of a line/point in a line/plane; **angle** between line/plane/planes |
| **Scalar & vector product manipulation** | ~25% | `a×b=c×a` type relationships; `\|a×b\|` as area / `a·b` as projection; proving perpendicularity/parallelism; angle between vectors |
| **Ratio theorem & position-vector geometry** | ~20% | Midpoints, ratios `AP:PB`, collinearity, parallelism proofs (the HCI Tutorial 7A territory) |
| **Distance / magnitude / minimisation** | ~10% | Point-to-line & point-to-plane distance; **minimise `\|PR\|`** (= point-to-line distance, NOT skew-line distance which is excluded) |

**In scope, so fair game:** point-to-line and point-to-plane shortest distance (via projection or
perpendicular foot). **Out of scope, so it will NOT be asked straight:** shortest distance between
two *skew* lines, common perpendicular, triple products. If a question *looks* like skew-distance, it
is really point-to-line minimisation (Nov-2017 Q10 "make |PR| as small as possible").

### 4.2 Calculus `[OFFICIAL specimen + INFERRED]` — *largest Pure block*

- **Differential equation** as a long back-end question (specimen Q11, 14m — logistic; Nov-2017 Q11
  — terminal velocity): formulate the DE from a context → solve `dy/dx=f(x)g(y)` → apply initial
  conditions → interpret limiting behaviour. **The classic application/integration closer.**
- **Volume of revolution / area** often combined with **parametric** curves (specimen Q8, 12m).
- **Connected rates of change** as a short opener (specimen Q1, 4m — "ink blot" expanding).
- **Maclaurin** + **small-angle approximation** linked to trig/applied differentiation (specimen Q9).
- **Integration techniques**: by-parts, substitution, standard `1/(a²±x²)` forms, `f'/f`.

### 4.3 Functions & graphs `[INFERRED]`
- **Transformations** (short, ~5m): describe/apply a sequence of transformations; relate `f(x)` to
  `|f(x)|`, `f(|x|)`, `1/f(x)`.
- **Curve sketching + inequalities** (~7m): sketch a rational/conic, then solve an inequality
  graphically or via the `|x−a|` rules.
- **Inverse/composite functions**: existence conditions, domain restriction, `f⁻¹` and its graph.
- **System of linear equations / formulation** (often the application hook).

### 4.4 Sequences & series `[INFERRED]`
- AP/GP set-ups from a context (specimen Q4 — geometric, bouncing-ball 7/8 height).
- **Method of differences** + **convergence / sum to infinity**.
- `uₙ` ↔ `Sₙ` relationships; recurrence behaviour.

### 4.5 Complex numbers `[OFFICIAL specimen + INFERRED]`
- A substantial single question, frequently a **"do not use a calculator"** item (specimen Q7, 11m):
  operations in cartesian form, **conjugate roots** of a real polynomial, solving for roots,
  **Argand diagram**, geometric effects. **Cartesian/Argand only — no polar/exponential form.**

### 4.6 Probability & Statistics `[INFERRED — syllabus scope]` — *all of P2 Sec B (60m), ~50% of TPE*
- **P&C / arrangements** (line & circle, restrictions, repetition) → feeds probability.
- **Probability**: conditional, independent/mutually exclusive, tree/Venn, `P(A|B)`.
- **Binomial** `B(n,p)`: state model + conditions; `P(X=x)`, `P(X≤x)`, mean/variance.
- **Normal** `N(μ,σ²)`: `P(X<x)`; find `μ`/`σ`; `E/Var(aX+bY)` combinations; **back-to-front**
  ("given the probability, find the value").
- **Sampling / CLT / unbiased estimates** from summarised data — often the lead-in to a test.
- **Hypothesis test** for a mean (known variance, or large sample): formulate H₀/H₁, compute
  test statistic / p-value, **conclude in context**. 1-tail vs 2-tail choice.
- **Correlation & regression**: scatter, `r`, choose the correct regression line, **linearising
  transformation**, interpolation vs extrapolation + comment on reliability. This is usually the
  **application question (≥12m)** in Section B.

---

# 5. Trap / Distractor Model — where the marks leak

> The most valuable section for gap-hunting. **Confidence is mixed and labelled per trap.** The
> *scope-import* traps (5.2) are `[OFFICIAL-derived]` — they come straight from syllabus exclusions.
> The *mark-loss* traps (5.1) are `[INFERRED]` from the 9709 sister syllabus + the GC rule. The
> *per-topic misconception* traps (5.3) are `[INFERRED]` from domain knowledge + the HCI corpus, and
> are the ones most in need of confirmation against a real past paper.

## 5.1 Cross-cutting mark-loss traps `[INFERRED — 9709 + GC rule]`

| Trap | The mark it costs |
|---|---|
| **Premature rounding** — rounding intermediate values to 3 s.f. then reporting 3 s.f. | Final **accuracy mark** (answer off in the 3rd s.f.). Carry **≥4 s.f.** through. |
| **Bare GC answer where working is required** ("show that" / "exact" / "without a calculator") | All method marks — calculator syntax is **not** "working." |
| **Decimalising an "exact value" question** | The exact-form accuracy mark. Keep surds/π/ln/fractions. |
| **No graph sketch on a graphical-solution question** | Method/communication marks. |
| **Stats: conclusion not in context, variables/distribution not defined** | AO2 interpretation marks — the dominant AO. |

## 5.2 Scope-import traps — applying an EXCLUDED method `[OFFICIAL-derived]`

These are high-value because they come **directly from the official exclusion list**. A student
coached on an older syllabus or a foreign board reaches for a tool 9758 does not use:

| Student does | Why it's a trap (9758 scope) |
|---|---|
| Writes a complex number in **polar / r(cosθ+isinθ) / reⁱᶿ** form | **Excluded.** 9758 complex numbers are **cartesian/Argand only.** Wastes time; no credit for out-of-scope method. |
| Uses **normal approximation to the binomial** (with continuity correction) | **Excluded.** Not assessable; the question will be set so it isn't needed. |
| Reaches for **Poisson `Po(λ)`** | **Not in the include list.** (It appears in the notation list only.) |
| Computes **shortest distance between two skew lines** / a **common perpendicular** | **Excluded.** The real ask is point-to-line minimisation. |
| Uses **triple products** `a·(b×c)` for coplanarity/volume | **Excluded.** |
| Invokes **"Type I / Type II error"** language in a hypothesis-test conclusion | **Excluded terminology.** Conclude with significance + context only. |
| Tests the **difference between two population means** | **Excluded.** Only single-mean tests are in scope. |

## 5.3 Per-topic misconception traps `[INFERRED — domain + HCI corpus]`

**Vectors** (richest grounding — HCI Ch7 notes/tutorials loaded):
- Confusing **scalar projection `a·n̂`** (a length, signed) with the **vector projection `(a·n̂)n̂`**
  (a vector) — and `a×n̂` (perpendicular component magnitude). The HCI notes flag this `a·n̂` vs
  `a×n̂` distinction explicitly.
- **Foot of perpendicular** method errors: solving the wrong perpendicularity condition; mixing the
  point-to-line vs point-to-plane procedure.
- **Sign / direction errors**: using a position vector where a direction vector is needed; reversing
  `AB` vs `BA`.
- **Treating dependent (parallel) direction vectors as independent** → claiming lines are skew/
  intersecting when they are parallel; missing that "no solution" can mean parallel, not skew.
- `\|a×b\|` (area / sine) vs `a·b` (projection / cosine) **mix-ups** in angle/area questions.
- **Ratio theorem** sign/weighting slips (which point gets which weight).

**Complex numbers:** conjugate-root pairs forgotten when forming a real polynomial; arithmetic slips
multiplying/dividing in cartesian form (rationalising by the conjugate); misreading geometric effect
of ×i (90° rotation). *(Argument-range/quadrant errors are a classic trap but were **refuted as an
unverified 9758 claim** in research — flagged `[INFERRED, low]`.)*

**Calculus:** wrong **integration-by-parts** choice of u/dv; forgetting the **chain rule** in
implicit differentiation; **omitting `+c`** / mis-applying the initial condition in a DE → wrong
particular solution; mishandling **parametric** area/volume (which is out of scope — another scope
trap); sign of area below the x-axis.

**Statistics:** for a **discrete** RV, confusing `P(X≤x)` with `P(X<x)` (i.e. `P(X≤x)` includes x);
using the **sample variance** instead of the **unbiased estimate** `s²=Σ(x−x̄)²/(n−1)` (esp. from
summarised data); wrong **1-tail vs 2-tail** choice from the wording; **conclusion phrasing** that
"accepts H₀" rather than "insufficient evidence to reject H₀"; extrapolating beyond the data range
and not flagging it as unreliable.

---

# 6. High-Yield Topics & Cycle Signals

## 6.1 High-yield (where to spend revision marginal-hours) `[INFERRED — specimen weighting + scope]`
1. **Calculus** — largest Pure block; the long application closer is almost always a DE or a
   volume/area integration. High marks, integrates with everything.
2. **Vectors** — two questions per Paper 1 observed; 20 marks on the specimen. **Ethan's flagged weak
   spot → highest expected-value revision target.**
3. **Probability & Statistics (whole of Sec B)** — 30% of the A-Level, **~50% of the TPE mock**.
   "Easy to score" but volume-heavy; hypothesis testing + normal + P&C are the bankers.
4. **Complex numbers** — one predictable substantial question, often "no calculator."
5. **Functions & graphs** + **Sequences & series** — reliable, more AO1-accessible marks; good for
   securing the first 40–50 marks.

## 6.2 "Likely this cycle" `[INFERRED — LOW confidence]`
> ⚠️ **Honesty flag:** a genuine "overdue/likely" prediction needs a multi-year frequency tally,
> which is **not publicly available** for 9758 (Section 7). The following is pattern-reasoning, not a
> data-backed forecast — **do not study to it at the expense of coverage.**
- **Near-certain every paper:** a differential equation; two vector questions on P1; a normal-
  distribution question; a hypothesis test; permutations & combinations; a complex-number question.
- **Watch:** the **application/integration ≥12-mark questions** (one in P1, one in P2 Sec B) — these
  carry the AO2 load and are where strong students separate from the pack.

---

# 7. The Examiner's Mental Model + Confidence & Validation

## 7.1 What 9758 is really testing (beneath the surface) `[INFERRED from AO weights]`
- **AO2 (60%) is the whole game:** can you *translate* a worded/real-world/multi-topic situation into
  the right mathematical model, execute, and *interpret back in context*? Pure technique (AO1, 30%)
  is necessary but not where grades are decided.
- **Communication is marked:** method shown, variables defined, distributions stated, conclusions in
  context, exact form respected. The GC does the arithmetic; **you are paid for the set-up and the
  interpretation.**
- **Discipline under the GC regime:** knowing *when* unsupported answers are allowed vs when full
  notation is required is a marks variable in its own right.

## 7.2 The 90% confidence check — results `[see Section 7.3 for the honest ceiling]`

Held-out items used: **official specimen P1 Q6, Q7, Q8, Q10, Q11** (OFFICIAL question text) +
**Nov-2017 P1 Q6, Q10** (real paper, tutor "suggested" solutions). ⚠️ Caveat: the specimen informed
the build, so it is **not a clean hold-out**, and **no official mark scheme** was available to score
against — solutions are tutor-suggested `[INFERRED]`. Self-assessment per `spec.md` §5 dimension:

| Dimension | Threshold | Result | Notes |
|---|---|---|---|
| Exam format & structure | ≥95% | ✅ **~98%** | Verbatim OFFICIAL syllabus + specimen. |
| Mark scheme (reward/band) | ≥90% | ⚠️ **~85% — below** | M/A/B logic + GC rule are sound but **no public 9758 mark scheme**; mechanics `[INFERRED]` from 9709. |
| Content nodes | ≥90% | ✅ **~95%** | Exhaustive from the official content outline. |
| Question type & method | ≥85% | ✅ **~85% (borderline)** | Pure solid from specimen+Nov-2017; **P2 Sec B archetypes `[INFERRED]`**, unverified. |
| Trap model | ≥85% | ❌ **~75% — below** | Scope-import traps OFFICIAL-derived; misconception traps `[INFERRED]`, **no examiner report to confirm**. |

**Outcome:** 3 of 5 dimensions pass; **2 fall short (mark-scheme mechanics, trap model)** because the
gating evidence — official 9758 mark schemes and examiner reports — **is not published by SEAB.** Per
`spec.md` §5 the fix is to strengthen those sections and re-test that dimension; **that fix requires
official past papers/mark schemes loaded into `inputs/`, which we do not yet have.** The guide is
therefore stamped **MIXED confidence, ceiling ~88% overall**, and is **not** below the 70% LOW-
confidence floor.

## 7.3 Confidence ceiling & what would raise it
- **Trust at ~95%+:** paper structure, weightings, AO split, GC rules, accuracy rubric, the full
  content node map, scope exclusions, the specimen P1 distribution.
- **Trust at ~75–85% (verify against a real paper):** the trap model, mark-band mechanics, Stats
  archetype frequency, "likely this cycle."
- **To raise the ceiling (next inputs to load):** ① **official 9758 past papers** (any years) →
  enables a real frequency tally + clean hold-out; ② **official mark schemes / examiner reports**
  (school/authorised-educator access only) → confirms the trap model and band mechanics. Until then,
  these stay `[INFERRED]`.

## 7.4 Recalibration trigger `[OFFICIAL system rule]`
The guide is ground truth **until proven wrong**: if Ethan's session/model-test performance is
**>70% but an official past paper is <50%**, the guide is misaligned — find the mispredicting
dimension (likely the trap model or Stats archetypes) and fix it (`spec.md` §9, §12;
`playbooks/01`). **Within the first study week, sit one official mock** — that paper, not this guide,
is the honesty check.

## 7.5 Open questions carried forward (from research)
- 9758-specific examiner-report commentary on recurring errors — **not public.**
- Validated per-topic trap model for 9758 specifically — **unconfirmed.**
- Concrete 9740→9758 change list & "under-prepared" flags — **unanswered** (though the major content
  narrowings are visible in the scope exclusions: cartesian-only complex numbers; no Poisson; no
  normal-approx-to-binomial; no Type I/II error; no two-sample tests).
- Multi-year archetype frequency tally — **not assembled** (only specimen + Nov-2017 mapped).
- Official mark schemes (even the specimen) to replace tutor "suggested" answers — **not obtained.**

---

## Sources
**Primary `[OFFICIAL]`:** SEAB 9758 syllabus 2025 (`9758_y25_sy.pdf`) & 2026 (`9758_y26_sy.pdf`,
loaded at `inputs/Maths/H2/official_docs/`); SEAB/UCLES official specimen Paper 1
(`9758_y25_sp_1.pdf`). **Secondary `[INFERRED]`:** Cambridge 9709 examiner reports (mark-loss
mechanics, transferred by analogy); TheCulture.sg / EmilyLearning / jcpcme "suggested solutions"
(specimen & Nov-2017 worked answers). **Loaded corpus:** HCI Chapter 7 Vectors notes + Tutorials
7A/7B/7C solutions (`inputs/Maths/H2/Vectors/`). Full research log: deep-research run
`wf_721386c8-895` (6 angles, 20 sources, 25 claims adversarially verified).
