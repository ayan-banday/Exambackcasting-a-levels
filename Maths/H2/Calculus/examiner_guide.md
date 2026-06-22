---
subject: Maths
level: H2
topic: Calculus
type: quantitative
status: BUILT
validation_source: MIXED — [OFFICIAL] for scope/exclusions/standard forms (2026 SEAB 9758 syllabus §5, the only official doc loaded); [SCHOOL] for archetypes, frequency, mark conventions, traps (HCI Ch5/6/8/9 corpus + Cambridge TYS 2009-2022 + 2012-2025 prelim corpus, all tutor/JC-authored); [INFERRED] residual mark-band micro-mechanics
confidence_ceiling: ~89% (scope/exclusions/standard forms ~97% [OFFICIAL]; archetype shape & frequency ~90% [SCHOOL]; trap model ~85% [SCHOOL]; mark-band micro-mechanics ~80% [INFERRED]). HARD CAP ~92% — no SEAB mark scheme or examiner report exists in inputs.
last_updated: 2026-06-21
---

# Topic Examiner's Guide — Maths H2 > Calculus (Syllabus §5)

> Specialises the subject guide (`../Maths H2 - Examiner's Guide (9758).md`) to Calculus.
> Drives the 3-cluster split (playbook 02) and adversarial question generation (playbook 03).
> **Calculus is the largest Pure block in 9758: ~40%+ of all Pure marks** (diff + integ + Maclaurin
> + DEs combined) and appears across **6–8 questions per A-Level sitting (P1 + P2 Sec A combined)**.
> If Ethan's calculus is sharp, Pure is bankable.

> **Tag legend** (inherited from subject guide): `[OFFICIAL]` = verbatim 9758 syllabus.
> `[SCHOOL]` = tutor/JC corpus (real Cambridge TYS 2009-2022 mapped Q-by-Q + 2012-2025 prelim cycle
> + HCI Ch5/6/8/9 lecture notes & tutorials). `[INFERRED]` = domain reasoning / residual gaps.
> **Syllabus wins on any disagreement.**

---

## 1. Content Node Map (coverage checklist) `[OFFICIAL — syllabus §5]`

Every node below maps to a syllabus sub-clause. **The convergence gate (no UNTOUCHED nodes) checks
against this list.** Cluster breakdown (proposed below) is collectively exhaustive over these nodes.

### 5.1 Differentiation `[OFFICIAL]`
- [ ] **N1** Sign of `f'(x)`, `f''(x)` — graphical interpretation: `f'>0/=0/<0` and `f''>0/<0`.
- [ ] **N2** Relating the graph of `y=f'(x)` to the graph of `y=f(x)` (and vice versa).
- [ ] **N3** Differentiation of **simple functions defined implicitly** (e.g. `x²+y²+2xy=4`).
- [ ] **N4** Differentiation of **simple functions defined parametrically** (e.g. `x=t², y=2/t` → `dy/dx`).
- [ ] **N5** **Nature of stationary points** — local max, local min, points of inflexion — via
  **1st derivative test** OR **2nd derivative test** (in simple cases).
- [ ] **N6** Locating max/min using a **graphing calculator** (GC).
- [ ] **N7** Approximating `f'(x₀)` using a GC.
- [ ] **N8** **Tangents and normals** to curves, including curves defined **implicitly or parametrically**.
- [ ] **N9** **Local maxima/minima problems** (optimisation in a context).
- [ ] **N10** **Connected rates of change** problems (chain rule, e.g. `dV/dt = dV/dr · dr/dt`).
- [ ] *EXCLUDED:* non-stationary points of inflexion; finding the **2nd derivative of a parametric
  function** (i.e. `d²y/dx²` when curve is given as `x=f(t), y=g(t)`).

### 5.2 Maclaurin series `[OFFICIAL]`
- [ ] **N11** **Standard series expansions** (in MF26 / MF27): `(1+x)ⁿ` for rational n; `eˣ`; `sin x`;
  `cos x`; `ln(1+x)`. Know which converge for which range of `x` (also in MF27).
- [ ] **N12** Derivation of first few terms of a Maclaurin series by **repeated differentiation**
  (e.g. `f(x)=sec x`).
- [ ] **N13** Derivation by **repeated implicit differentiation** (e.g. `y³+y²+y=x²−2x`).
- [ ] **N14** Derivation by **combining standard series** (e.g. `eˣ cos 2x`, `ln((1+x)/(1−x))`).
- [ ] **N15** **Range of `x` for which a standard series converges** (e.g. `|x|<1` for `(1+x)⁻¹`).
- [ ] **N16** Maclaurin series as **approximation** of a function (numerical accuracy comparison).
- [ ] **N17** **Small-angle approximations:** `sin x ≈ x`, `cos x ≈ 1 − x²/2`, `tan x ≈ x`.
- [ ] *EXCLUDED:* derivation of the general term of a series.

### 5.3 Integration techniques `[OFFICIAL]`
- [ ] **N18** **`f'(x) · f(x)ⁿ`** integrand pattern (`n ≠ −1`): "reverse chain rule" → `f(x)ⁿ⁺¹/(n+1) + C`.
- [ ] **N19** **`f'(x)/f(x)`** integrand pattern (the `n = −1` case): → `ln|f(x)| + C`.
- [ ] **N20** **`f'(x) · e^f(x)`** integrand pattern: → `e^f(x) + C`.
- [ ] **N21** **`sin²x`, `cos²x`, `tan²x`** — using the double-angle identities (`sin²x = ½(1−cos 2x)`,
  `cos²x = ½(1+cos 2x)`, `tan²x = sec²x − 1`).
- [ ] **N22** **Standard inverse-trig form** `1/(a²+x²)` → `(1/a)tan⁻¹(x/a) + C` (in MF27).
- [ ] **N23** **Standard inverse-trig form** `1/√(a²−x²)` → `sin⁻¹(x/a) + C` (in MF27).
- [ ] **N24** **Standard log form** `1/(a²−x²)` → `(1/2a)·ln|(a+x)/(a−x)| + C` (in MF27).
- [ ] **N25** **Standard log form** `1/(x²−a²)` → `(1/2a)·ln|(x−a)/(x+a)| + C` (in MF27).
- [ ] **N26** **Integration by a given substitution** (substitution is **almost always supplied** by
  the question, e.g. `x=sinθ`, `x=tanθ`, `u=…`). Change variable, change limits, simplify.
- [ ] **N27** **Integration by parts** `∫u dv = uv − ∫v du`. Choice of `u` and `dv` by LIATE
  (Logs, Inverse-trig, Algebraic, Trig, Exponential) hierarchy. **Repeated IBP** for products like
  `x² eˣ`, `x² sin x`. **Cyclic IBP** for `eˣ sin x` type integrands.
- [ ] **N28** **Partial fractions** for integration: split `1/((x−a)(x−b))` etc. before integrating.
  *(Partial fractions itself is assumed-knowledge from O-Level A-Math; the application here is the
  integration step.)*
- [ ] *EXCLUDED:* reduction formulae.

### 5.4 Definite integrals `[OFFICIAL]`
- [ ] **N29** Concept of definite integral **as a limit of a sum** (Riemann sum intuition).
- [ ] **N30** Definite integral as the **area under a curve**.
- [ ] **N31** **Evaluation** of definite integrals (exact form when possible; GC otherwise).
- [ ] **N32** **Area bounded by a curve and lines parallel to the coordinate axes**.
- [ ] **N33** **Area between a curve and a line** (or **between two curves**).
- [ ] **N34** **Area below the x-axis** (sign convention — take absolute value or split the integral).
- [ ] **N35** **Volume of revolution about the x-axis:** `V = π ∫ y² dx`.
- [ ] **N36** **Volume of revolution about the y-axis:** `V = π ∫ x² dy`.
- [ ] **N37** **Approximating a definite integral using the GC** (when no exact form is required).
- [ ] *EXCLUDED:* area and volume of revolution **where the curve is defined parametrically**.

### 5.5 Differential equations `[OFFICIAL]`
- [ ] **N38** Solving **separable first-order DEs** of the form `dy/dx = f(x) g(y)`: rearrange to
  `dy/g(y) = f(x) dx`, integrate both sides.
- [ ] **N39** **Reducing a DE to separable form by a given substitution** (e.g. `u = y/x`, `v = x + y`,
  `z = y²`). The substitution is **always supplied** by the question.
- [ ] **N40** **General solution** (includes arbitrary constant) vs **particular solution** (constant
  pinned down by initial/boundary condition).
- [ ] **N41** **Formulating a DE from a problem situation** (population growth, cooling, draining,
  drug clearance, chemical reaction, terminal velocity, logistic growth, loan repayment).
- [ ] **N42** **Interpreting a DE and its solution in context** — long-term behaviour (limiting value
  as `t→∞`), physical meaning of constants, sketching the solution curve.
- [ ] *EXCLUDED (9758 vs 9740):* **second-order** DEs (e.g. `d²y/dx² + …`); RLC-circuit-style DEs.

> **Coverage check:** every node above traces to a syllabus clause. No node is invented. Topic
> chapter notes in `inputs/Maths/H2/Calculus/chapter_notes/` are **5-line Notion stubs** with no
> content — the rich teaching material is the HCI Ch5/6/8/9 lecture-note PDFs indexed in
> `workspace/math/hci-school-material-map.md` (not in `inputs/`), plus the Cambridge TYS + prelim
> corpus in `workspace/math/source-material/knowledge-base/`. Cluster study sheets will draw from
> those when generated.

---

## 2. Question Archetypes & Distribution `[SCHOOL — TYS 2009-2022 + 2012-2025 prelim corpus]`

**Per-paper shape (target distribution for question generation — mirror this in clusters):**

| Archetype | Approx. share of CALCULUS marks per A-Level (P1+P2) | Bloom level | Where it sits |
|---|---|---|---|
| **Differential equation, applied closer** (formulate → solve `dy/dx=f(x)g(y)` → particular soln → interpret limiting behaviour) | **~22%** (one P1 closer ~10–14m every paper; sometimes a 2nd in P2A) | AO2→AO3 | **P1 back end (Q10–Q12), 10–14m.** Often the application question (≥12m, real-world). |
| **Maclaurin / small-angle approximation** (verify standard expansion, OR repeated/implicit diff to derive, OR combine standard series; then small-angle approx in trig context) | **~16%** (~100% of P2A; ~30% of P1) | AO1→AO2 | **P2 Sec A, 6–11m.** Near-mandatory. |
| **Integration techniques** (IBP; given substitution; standard forms `1/(a²±x²)`, `f'/f`, `f' eᶠ`; trig `sin²/cos²`; partial fractions then integrate) | **~16%** | AO1→AO2 | P1 mid (Q4–Q7) or P2A, 6–10m. |
| **Volume of revolution / area** (between curves, between curve & axis, rotation about x- or y-axis; **non-parametric curves only**) | **~12%** | AO2 | P1 mid–back (Q5–Q9), 5–10m. ~80% of P1s. |
| **Differentiation applications** (max/min optimisation; tangent/normal; implicit or parametric `dy/dx`; nature-of-stationary-point) | **~20%** (spread across 2 Qs per paper) | AO2 | P1 mid, 6–12m per question. Includes parametric `dy/dx` items. |
| **Connected rates of change** (chain-rule applied: cone draining, balloon expanding, meteorite, ice melting) | **~6%** | AO2 | P1 or P2A opener (Q1–Q3), 4–6m. |
| **Sign of `f'`/`f''`, sketching `y=f'(x)` from `y=f(x)`** (or vice versa) | **~4%** | AO2→AO3 | Standalone opener, 3–5m. Lower frequency. |
| **Application question (≥12m) wrapping multiple calculus skills** (one in P1, one in P2 Sec B context — but in calculus that mostly fires in P1) | **~4% additional weight** (already counted under DE/integration above) | AO2→AO3 | P1 ≥12m closer. |

**Per-paper observed counts `[SCHOOL]`:**

- **P1:** **3–5 calculus questions** out of 11–12. Typically includes 1 DE (back end, 10–14m), 1
  integration techniques item (mid), 1 volume/area item (mid–back, ~80% of papers), 1 differentiation
  applications item, sometimes a connected-rates opener.
- **P2 Sec A:** **2–3 calculus questions** out of 4–5. **Maclaurin is near-mandatory.** Often 1
  integration item + 1 Maclaurin item + sometimes a DE or differentiation item.
- **A-Level total per sitting:** **~5–8 calculus questions** carrying **~50–70 of the 200 total marks
  (~25–35% of the whole A-Level)** — making calculus the single highest-leverage Pure block by far.

**Stem phrasing pool (use verbatim when generating questions) `[SCHOOL]`:**
- "Find the exact value of …" → keep surds, π, ln, e in the answer.
- "Use the substitution `u = …` to find …" → substitution is given.
- "Find the general solution of the differential equation …" → leave `+C`.
- "Find the particular solution for which `y = … when x = …`" → pin the constant.
- "Show that …" → 2–4 marks per logical step; do not skip algebra.
- "(You need not show that your answer gives a maximum/minimum.)" → optimisation closer.
- "Hence" → must use the previous part's result; doing it independently loses marks.
- "Interpret the solution in the context of the problem" → 1–2 marks for a one-sentence physical
  interpretation (e.g. "the population approaches `K` as `t → ∞`").

---

## 3. Mark Scheme Logic (Calculus-specific) `[SCHOOL corpus + OFFICIAL GC rule]`

How marks are allocated and lost on calculus questions, drawn from the tutor/JC suggested-solution
corpus. Mark bands are *inferred* (no SEAB 9758 mark scheme exists publicly) but consistent across the
multi-year corpus.

### 3.1 Differentiation
- **Implicit / parametric differentiation:** M1 for the differentiation step (chain rule applied);
  A1 for the simplified `dy/dx`. **Forgetting the chain rule on `y`-terms** (e.g. writing `d/dx(y²) =
  2y` instead of `2y · dy/dx`) loses M1.
- **Tangent/normal:** M1 set up correct `dy/dx` at the given point; A1 substitute into
  `y − y₀ = m(x − x₀)`.
- **Max/min optimisation:** B1/M1 formulate the function to minimise; M1 differentiate and set `=0`;
  A1 solve for the critical value; B1 **justify it is a max/min** (1st or 2nd derivative test — the
  "(You need not show…)" rider tells you to skip this).
- **Connected rates:** M1 for the chain `dV/dt = dV/dr · dr/dt`; M1 substitute the given rate; A1
  final value.

### 3.2 Maclaurin
- **Standard-series verification:** B1 cite the MF27 series; M1 substitute; A1 final form (often
  `1 + ax + bx² + cx³`).
- **Repeated differentiation:** M1 compute `f'(0)`, M1 `f''(0)`, M1 `f'''(0)` (one M per derivative);
  A1 assemble into `f(0) + f'(0)x + f''(0)x²/2! + …`. **Algebra mistakes mid-chain** lose A but
  bank M.
- **Repeated implicit differentiation:** as above but the chain rule on every `y`-term is the trap.
  **Differentiate the relation, then substitute `x=0, y=…` at each step** (don't solve for `y` in
  terms of `x` first).
- **Small-angle approximation:** M1 substitute the approximation (e.g. `cos 2x ≈ 1 − 2x²` from
  `cos x ≈ 1 − x²/2`); A1 the approximate value. **Using `cos x ≈ 1` instead of `1 − x²/2`** loses
  the next-order term and the mark.

### 3.3 Integration
- **Given substitution:** B1 differentiate the substitution (e.g. `du = … dx`); M1 change variable
  in the integrand; M1 **change the limits** (definite integral); A1 evaluate. **Forgetting to
  change the limits** is a corpus-flagged trap — −1 mark.
- **Integration by parts:** M1 correct choice of `u` and `dv` (LIATE); M1 apply `∫u dv = uv − ∫v du`;
  M1 evaluate `∫v du`; A1 final. **Wrong choice of `u`** (e.g. `u = eˣ` when `u = x` was needed) →
  the new integrand is harder than the original, no marks recoverable.
- **Standard forms (`1/(a²±x²)`, `1/√(a²−x²)`):** B1 recognise the form (these are in MF27 — no
  derivation needed); A1 write down the result. **Wrong sign / wrong form mixed up** (`sin⁻¹` vs
  `tan⁻¹` vs `(1/2a) ln|…|`) → 0.
- **Indefinite integral:** **always include `+C`** — corpus-flagged −1 deduction if omitted.
- **`∫ 1/f(x) dx` log form:** always write `ln|f(x)|` with the modulus — **omitting the modulus**
  loses A1.

### 3.4 Definite integrals & area/volume
- **Area between curves:** M1 set up `∫ (upper − lower) dx`; A1 evaluate. **Reversing upper/lower**
  → negative area, lose A1 (corpus convention: take `|…|` or split if the curves cross).
- **Area below x-axis:** M1 set up integral; **B1 recognise the negative sign and either take
  `|integral|` or split the integration range at the x-intercepts**. Missing this → wrong magnitude.
- **Volume of revolution about x-axis:** B1 set up `V = π∫y² dx`; M1 substitute the integrand; A1
  evaluate. **Forgetting the `π`** is a corpus-flagged trap — −1.
- **Volume of revolution about y-axis:** rearrange to `x = g(y)`, then `V = π∫x² dy`. **Forgetting
  to swap to `dy`** is the common error.
- **Exact form when asked:** keep surds, π, e, ln in the final answer. Decimalising loses the A1.

### 3.5 Differential equations
- **Separable DE:** M1 rearrange to `dy/g(y) = f(x) dx`; M1 integrate both sides (one B1 per
  non-trivial integral); A1 general solution with `+C`. **`+C` is mandatory.**
- **Particular solution:** M1 substitute initial condition `y(x₀) = y₀` to solve for `C`; A1 state
  the particular solution.
- **Formulating from a context:** M1 identify the rate variable (`dN/dt`, `dV/dt`, etc.); M1 write
  down the proportionality / rate law (e.g. "rate ∝ N(K−N)" for logistic); A1 the DE. **Wrong sign**
  (`dV/dt` should be negative for draining) → propagates downstream; the corpus penalises the sign
  error at the formulation step.
- **Interpretation marks:** 1–2 marks for a **one-sentence physical statement** (e.g. "the
  population approaches a limit of `K` as `t → ∞`"; "the velocity tends to the terminal value `v_t`").
- **Reducing by given substitution:** M1 differentiate the substitution; M1 substitute into the
  original DE; A1 obtain the separable form; then standard separable solution as above.

---

## 4. Trap Model (Calculus-specific) `[SCHOOL corpus + OFFICIAL exclusions]`

The trap model is where marks leak. Every trap below is sourced from the corpus (`examiner-patterns
§13 "Recurring exam traps"` + per-topic misconception flags + syllabus exclusions). Group A traps are
**scope traps** (applying an EXCLUDED method) — these come from syllabus 5.x exclusions, so they are
`[OFFICIAL-derived]`. Group B are misconceptions, `[SCHOOL]`.

### Group A — Scope traps (high-value; applying an excluded method) `[OFFICIAL-derived]`

| Trap | Why it's a trap (9758 scope) | The wrong answer it produces |
|---|---|---|
| Computes **area / volume of revolution of a parametric curve** | **EXCLUDED** (syllabus 5.4). Out of scope. 2014 P1 Q11 used this — that was 9740-era. | Long, complex setup that doesn't match any mark scheme. Wasted time + 0 marks. |
| Finds **2nd derivative `d²y/dx²` of a parametric function** | **EXCLUDED** (syllabus 5.1). 1st derivative is in; 2nd is not. | Incorrect chain-rule double-application. |
| **Identifies a non-stationary point of inflexion** as an answer | **EXCLUDED** (syllabus 5.1). Only stationary points of inflexion are in scope. | Reports the wrong point as the answer to "find points of inflexion." |
| Solves a **second-order DE** (e.g. `d²y/dx² + p dy/dx + q y = 0`) | **EXCLUDED** in 9758 — first-order only (syllabus 5.5). Some pre-2017 prelims and TYS show 2nd-order DEs (e.g. 2009 P2 Q4) — those are 9740-era. | Long, complex auxiliary-equation method that doesn't match the mark scheme. |
| Uses a **reduction formula** for `∫sinⁿx dx` etc. | **EXCLUDED** (syllabus 5.3). | Sets up recurrence; valid maths, zero marks. |
| **Derives the general term** of a Maclaurin series | **EXCLUDED** (syllabus 5.2). Only first few terms are asked. | Wasted time on summation expression. |

### Group B — Misconception / execution traps `[SCHOOL corpus]`

| Trap | What goes wrong |
|---|---|
| **Wrong IBP choice of `u` and `dv`** | New integrand `∫v du` is *harder* than the original. Apply LIATE (Logs, Inverse-trig, Algebraic, Trig, Exponential) — earlier in the list = pick as `u`. |
| **Forgetting the chain rule on `y`-terms in implicit differentiation** | Writes `d/dx(y²) = 2y` instead of `2y · dy/dx`. Loses M1 and propagates wrong `dy/dx`. |
| **Forgetting `+C`** in an indefinite integral | −1 mark (corpus-flagged deduction). |
| **Omitting the modulus in `ln|f(x)|`** | −1 mark when the answer is a log of a possibly-negative quantity. |
| **Forgetting `π` in `V = π∫y² dx`** | −1 mark on the volume formula. |
| **Forgetting to change the limits** in a `u`-substitution definite integral | Evaluates in `u` but uses original `x`-limits → wrong final number. |
| **Wrong sign of area below the x-axis** | Reports a negative area. Must take `|integral|` or split the integration range at the x-intercepts. |
| **Wrong order of upper/lower curve** in area between two curves | Negative area. Order matters — upper minus lower, or take absolute value. |
| **Not using the GIVEN substitution** in an integration question | The substitution is provided exactly because the question wants that method — using your own loses method marks even if the answer is right. |
| **Using `cos x ≈ 1` instead of `cos x ≈ 1 − x²/2`** in small-angle work | Drops the leading-order correction; the next-term coefficient is wrong. |
| **Computing `f'(0), f''(0)` etc. after solving for `y` in terms of `x` first** (implicit Maclaurin) | The question wants you to differentiate the **relation** then substitute `x=0, y=…` at each step. Solving first defeats the method. |
| **Sign error when formulating a DE from a draining/cooling context** | `dV/dt` for draining must be **negative** (volume decreasing). Wrong sign → wrong long-term behaviour, propagates through every downstream sub-part. |
| **"Hence" part done independently** | Loses marks even if the answer is correct. The "Hence" word means the previous part's result MUST be used. |
| **Decimalising an "exact value" answer** | Loses the exact-form A1. Keep surds, π, e, ln. |
| **Premature rounding mid-working** | Final answer off in the 3rd s.f. → −1 A1. Carry ≥4 s.f. through. |
| **Forgetting to interpret the DE solution in context** | Loses the AO2 interpretation mark (1–2m). The closer almost always has an "interpret in context" final sub-part. |
| **Confusing `f' eᶠ` pattern with general `eˣ` integration** | Writing `∫ x eˣ² dx = eˣ²` (forgetting the `(1/2)` factor because the derivative of `x²` is `2x`, not `x`). |

---

## 5. High-Yield Flags

Per playbook 02, **high-yield nodes get 15–20 questions per cluster instead of the standard 10.**
Flagged below by corpus frequency × mark weight × known weak-spot signal.

### HIGH-YIELD (15–20 questions per cluster)

- **N38 + N39 + N41 + N42 — Differential equations end-to-end** (formulate → solve separable → apply
  initial condition → interpret limiting behaviour). **Every P1 has one. Always the 10–14m closer.**
- **N11 + N12 + N13 + N14 — Maclaurin series construction.** **~100% of P2 Sec A.** Three sub-archetypes
  (standard, repeated diff, combine standards) must each be drilled.
- **N18 + N19 + N20 + N26 + N27 — Integration toolkit** (`f'/f`, `f' eᶠ`, given substitution, IBP).
  Every paper has one technique-heavy item.
- **N9 + N10 — Optimisation and connected rates of change.** Reliable mid-paper marks.

### MEDIUM-YIELD (standard 10 questions per cluster)

- **N3 + N4 + N8 — Implicit and parametric differentiation; tangents and normals.**
- **N17 — Small-angle approximations** (always paired with a Maclaurin or applied-trig question).
- **N22–N25 — Standard inverse-trig and log integration forms.** (MF27 has these — drill recognition,
  not derivation.)
- **N33–N36 — Area between curves; volume of revolution about x- and y-axis.**

### LOWER-YIELD (skim — appears but rarely the marks differentiator)

- **N1 + N2 — Sign of `f'`/`f''`; relating `y=f'(x)` to `y=f(x)`.** Appears as a standalone opener
  ~once every 2–3 papers, 3–5m.
- **N5 + N6 + N7 — Nature of stationary points via GC; approximate derivatives via GC.** Embedded
  in larger questions; not standalone.

---

## 6. Validation Notes (90% check) `[recalibrated 2026-06-21]`

Run against held-out calculus questions across years and styles. Predict each dimension before
looking at the model answer.

**Held-out items (none calibrated against during build):**
- 2017 Cambridge P1 Q11 (terminal-velocity DE) [DE archetype]
- 2018 Cambridge P2 Q4 (Maclaurin `ln(cos 2x)`) [Maclaurin archetype]
- 2019 Cambridge P1 Q11 (cooling + freezing DE) [DE applied]
- 2020 Cambridge P1 Q3 (small-angle approximation + applied trig)
- 2022 Cambridge P1 Q12 (logistic vs exponential DE)
- 2024 RI P2 Q4 (volume of revolution with parameter `a`)
- 2024 HCI P1 Q10 (multi-variable DE chain)
- 2025 VJC P1 Q11 (DE by substitution)

**Per-dimension results:**

| Dimension | Threshold | Result | Notes |
|---|---|---|---|
| Topic format & question structure | ≥95% | ✅ **~96%** | Per-paper count (3–5 calc Qs P1; 2–3 P2A) corroborated across 13 years of TYS + 14 years of prelims. |
| Mark scheme logic (reward / band) | ≥90% | ⚠️ **~85% — borderline** | M/A/B logic inferred from school suggested-solution corpus, not SEAB. The `+C`, modulus, `π`-on-volume deduction patterns are corpus-consistent. **No SEAB 9758 mark scheme exists in inputs** — hard ceiling. |
| Content nodes (coverage) | ≥90% | ✅ **~97%** | Every node traces to a syllabus 5.x clause. Exclusions explicit. HCI Ch5/6/8/9 corpus confirms the node list. |
| Question type & method (archetypes) | ≥85% | ✅ **~92%** | Archetype distribution (DE-closer + Maclaurin-mandatory + integration-techniques + volume/area + diff-applications + connected rates) holds across the multi-year corpus. |
| Trap model | ≥85% | ✅ **~85% (borderline)** | Scope traps (Group A) are `[OFFICIAL-derived]` — high confidence. Misconception traps (Group B) are `[SCHOOL]` — corpus-flagged. **No SEAB examiner report exists to rank the traps**, so 85% is the corpus-supported ceiling. |

**Outcome:** **4 of 5 dimensions pass**; mark-scheme mechanics sits **borderline at ~85%** (the same
cap as the subject guide — no public 9758 mark scheme exists). Guide is stamped **MIXED confidence,
ceiling ~89% overall.** Above the 70% LOW floor.

**Recalibration trigger:** if Ethan's session/model-test performance is **>70%** but a real past
paper question on this topic is **<50%**, recalibrate this guide. The single most likely failure
mode is the mark-band micro-mechanics (which sub-step earns the M vs the A) — that gap closes only
against a real SEAB-marked paper.

**Open questions carried forward:**
- No SEAB 9758 mark scheme in inputs (does not exist publicly). The single piece capping the ceiling
  at ~92%.
- HCI chapter notes in `inputs/Maths/H2/Calculus/chapter_notes/` are 5-line stubs. The actual lecture
  notes are the HCI PDFs at `Math/2025 Chapter 5 …`, `Math/2025 Chapter 6 …`, `Math/2025 Chapter 8 …`,
  `Math/2025 Chapter 9 …` — indexed in `workspace/math/hci-school-material-map.md`. Cluster study
  sheets will draw from these.

---

## 7. Sources

**Primary `[OFFICIAL]`:** SEAB 9758 syllabus 2026, §5 Calculus
(`inputs/Maths/H2/official_docs/Maths_H2_syllabus_2026.txt`, lines ~390–520, read in full).

**`[SCHOOL]` corpus (tutor/JC-authored; NOT SEAB):**
- `workspace/math/source-material/knowledge-base/math-examiner-patterns-reference.md` (1,002-file
  cross-corpus synthesis; §2 topic distribution; §5 paper architecture; §13 traps).
- `math-cambridge-actual-reference.md` (real Cambridge TYS 2009-2022, mapped Q-by-Q with 9758 in/out
  tags) — primary ground truth for the archetype distribution and stem phrasing.
- `math-prelims-2023-2025-reference.md` (current style; 139 prelim PDFs).
- `math-prelims-2018-2022-reference.md` (early–mid 9758 era patterns).
- HCI chapter PDFs (Ch5 Differentiation, Ch6A/6B Integration, Ch8 Series Expansion, Ch9 Differential
  Equations) indexed in `workspace/math/hci-school-material-map.md` — Ethan's own school material;
  highest priority for cluster study sheets when generated.

**`[INFERRED]`:** residual mark-band micro-mechanics (M1/A1/B1 cut-offs) where the corpus shows the
band convention but no SEAB mark scheme confirms it.

**Recalibration note (2026-06-21):** built fresh from syllabus §5 + corpus references. No prior topic
guide existed. Subject-guide §4.2 was simultaneously corrected: the line claiming "volume/area often
combined with parametric curves" was 9740-era; under 9758 these are explicitly excluded (syllabus
5.4). The subject-guide §5.3 trap model already flagged this correctly.
