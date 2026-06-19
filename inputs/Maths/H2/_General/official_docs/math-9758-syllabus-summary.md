# Mathematics — Syllabus 9758 (H2)

**Level:** H2
**Year of first examination under this syllabus:** 2025
**Calculator:** Approved GC (graphing calculator, no CAS) expected and required.

---

## Assessment Objectives

| AO | Weighting | Description |
|---|---|---|
| AO1 | 30% | Use mathematical techniques and procedures: recall facts/formulae, read graphs/tables/diagrams, carry out straightforward procedures. |
| AO2 | 60% | Formulate and solve problems including real-world contexts: select strategies, formulate mathematical models, integrate concepts, translate between representations, interpret results. |
| AO3 | 10% | Reason and communicate: construct arguments, make deductions, identify assumptions, communicate solutions clearly. |

---

## Paper Structure

| Paper | Type | Duration | Marks | Weighting |
|---|---|---|---|---|
| Paper 1 | Pure Mathematics | 3 hr | 100 | 50% |
| Paper 2 | Pure Math (Sec A) + Probability & Statistics (Sec B) | 3 hr | 100 | 50% |

**Paper 1:** 10–12 questions, all compulsory. All Pure Mathematics. One compulsory application question (real-world, min 12 marks).

**Paper 2:**
- Section A — Pure Mathematics (40 marks): 4–5 questions
- Section B — Probability & Statistics (60 marks): 6–8 questions
- One compulsory application question in Section B (real-world, min 12 marks)

All questions are structured and multi-part. No MCQ. No choice questions.

---

## Content Outline

### Section A — Pure Mathematics

#### 1. Functions and Graphs

- **Functions:** domain, range, one-one functions, inverse functions (f⁻¹), composite functions (fg)
- **Graphs:** rational functions (linear/linear, quadratic/linear), conics (circle, ellipse, parabola, hyperbola)
- **Transformations:** y = f(x) → f(x+a), f(x)+a, f(ax), af(x), |f(x)|, f(|x|)
- **Asymptotes:** vertical, horizontal, oblique — must find and sketch
- **Inequalities:** solve graphically and algebraically

**Exam traps:**
- Domain restrictions when composing or inverting functions.
- Modulus inequalities — square both sides only after confirming non-negative.
- Always state the domain of the inverse function.

#### 2. Sequences and Series

- **AP:** aₙ = a + (n-1)d, S_n = n/2(2a + (n-1)d)
- **GP:** aₙ = arⁿ⁻¹, S_n = a(1−rⁿ)/(1−r), S_∞ = a/(1−r) when |r| < 1
- **Sigma notation:** Σ from r=1 to n
- **Method of differences:** telescoping sums — partial fractions then cancel
- **Recurrence relations:** uₙ₊₁ = f(uₙ), find limit as n→∞

**Exam traps:**
- S_∞ only exists when |r| < 1 — must state this condition.
- Method of differences: write out first and last few terms to identify the cancellation pattern.

#### 3. Vectors

- **2D and 3D vectors:** magnitude, unit vectors, addition, scalar multiplication
- **Scalar (dot) product:** a·b = |a||b|cosθ, perpendicularity test (a·b = 0)
- **Vector (cross) product:** a × b = |a||b|sinθ n̂, area of parallelogram
- **Lines:** vector equation r = a + λb; Cartesian form
- **Planes:** r·n = d (normal form); ax+by+cz = d; r = a + λb + μc (parametric)
- **Distances:** point to line, point to plane, between parallel lines, between skew lines
- **Angles:** between lines, between a line and plane, between planes

**Exam traps:**
- For foot of perpendicular: use parameter λ, substitute back, find position vector.
- Cross product direction follows right-hand rule — check it.

#### 4. Complex Numbers

- **Cartesian form:** z = x + iy, Re(z), Im(z), complex conjugate z̄
- **Modulus and argument:** |z| = √(x²+y²), arg(z) = arctan(y/x) in correct quadrant
- **Polar form:** z = r(cosθ + i sinθ) = re^(iθ)
- **Multiplication/division in polar form:** multiply moduli, add/subtract arguments
- **De Moivre's theorem:** (re^(iθ))ⁿ = rⁿe^(inθ)
- **Roots of equations:** nth roots of a complex number — equally spaced on Argand diagram
- **Loci on Argand diagram:** circles |z − a| = r, half-lines arg(z − a) = θ, perpendicular bisectors

**Exam traps:**
- Argument must be in range (−π, π]. Add or subtract 2π as needed.
- When finding nth roots: arguments are (θ + 2kπ)/n for k = 0, 1, ..., n−1.

#### 5. Calculus

**Differentiation:**
- Standard derivatives: xⁿ, eˣ, ln x, sin x, cos x, tan x, sec x, cosec x, cot x
- Chain rule, product rule, quotient rule
- Implicit differentiation: d/dx[f(y)] = f'(y) · dy/dx
- Parametric differentiation: dy/dx = (dy/dt)/(dx/dt)
- Applications: tangents/normals, increasing/decreasing, stationary points, curve sketching

**Maclaurin's Series:**
- Standard expansions: eˣ, sin x, cos x, ln(1+x), (1+x)ⁿ
- Small angle approximations (sin x ≈ x, cos x ≈ 1 − x²/2, tan x ≈ x)
- Finding series by differentiation or substitution

**Integration:**
- Standard integrals (reverse of differentiation + ∫1/x dx = ln|x| + C)
- By parts: ∫u dv = uv − ∫v du (LIATE order)
- By substitution
- Partial fractions (proper, improper; repeated/linear/quadratic factors)
- Definite integrals: area between curves, area under curve to x-axis
- Volume of revolution: V = π∫y² dx (about x-axis), V = π∫x² dy (about y-axis)

**Differential Equations:**
- Separable: separate variables, integrate both sides
- First-order linear: dy/dx + Py = Q — use integrating factor eᶦ∫P dx
- Formulate DEs from word problems (rates of change)
- Interpret solutions in context

**Exam traps:**
- Volume of revolution: square y (or x) first, then integrate. Never integrate then square.
- For area between curves: always sketch to determine which is on top.
- Integration by parts: apply LIATE to choose u. May need to apply twice.

---

### Section B — Probability and Statistics

#### 6. Probability

- **Set notation:** P(A ∪ B), P(A ∩ B), P(A')
- **Addition rule:** P(A ∪ B) = P(A) + P(B) − P(A ∩ B)
- **Conditional probability:** P(A|B) = P(A ∩ B)/P(B)
- **Multiplication rule:** P(A ∩ B) = P(A) × P(B|A)
- **Independence:** P(A ∩ B) = P(A) × P(B)
- **Permutations and combinations:** ⁿPᵣ = n!/(n−r)!, ⁿCᵣ = n!/[r!(n−r)!]
- Arrangements with restrictions (fixed positions, identical items, circular permutations)

#### 7. Discrete Random Variables

- E(X) = Σx·P(X=x), Var(X) = E(X²) − [E(X)]²
- **Binomial distribution:** X ~ B(n, p); P(X=x) = ⁿCₓ pˣ(1−p)ⁿ⁻ˣ; mean = np; var = np(1−p)
- **Poisson distribution:** X ~ Po(λ); P(X=x) = e⁻λλˣ/x!; mean = var = λ
- GC required for cumulative probabilities

#### 8. Normal Distribution

- X ~ N(μ, σ²); standardisation Z = (X−μ)/σ ~ N(0,1)
- Read probability from GC (normalcdf function)
- **Normal approximation to Binomial:** X ~ B(n,p) ≈ N(np, np(1−p)) when n large, p not too extreme — use continuity correction
- **Normal approximation to Poisson:** X ~ Po(λ) ≈ N(λ, λ) when λ large — use continuity correction

**Exam traps:**
- Continuity correction: P(X ≤ 4) becomes P(X < 4.5) in the continuous approximation.
- Always state the approximating distribution fully: N(μ, σ²).

#### 9. Sampling

- Random sample: every member of population has equal probability of selection
- **Unbiased estimate of population mean:** x̄ = Σx/n
- **Unbiased estimate of population variance:** s² = Σ(x−x̄)²/(n−1) = [Σx² − (Σx)²/n]/(n−1)
- **Central Limit Theorem (CLT):** For large n, X̄ ~ N(μ, σ²/n) approximately, regardless of population distribution

#### 10. Hypothesis Testing

- H₀ (null hypothesis) vs H₁ (alternative hypothesis)
- One-tailed test (H₁: μ > μ₀ or μ < μ₀) vs two-tailed test (H₁: μ ≠ μ₀)
- **z-test:** known population variance; Z = (X̄ − μ₀)/(σ/√n)
- **t-test:** unknown population variance; T = (X̄ − μ₀)/(S/√n), T ~ t(n−1)
- Compare p-value to significance level α, or compare test statistic to critical value
- **Type I error:** reject H₀ when H₀ is true. Probability = α.
- **Type II error:** fail to reject H₀ when H₁ is true.

**Exam traps:**
- For t-test: use n−1 degrees of freedom.
- Always define H₀ in terms of the population mean μ (not x̄).
- "Sufficient evidence at α% level" means p-value < α.

#### 11. Correlation and Linear Regression

- **Pearson's product moment correlation coefficient (PMCC):** r ∈ [−1, 1]
- r close to ±1 → strong linear correlation; r close to 0 → weak linear correlation
- **Regression line y on x:** ŷ = a + bx (least squares)
- **Residuals:** actual y − predicted ŷ
- Predict y from x (interpolation OK; extrapolation unreliable — must state this)
- Correlation does not imply causation

---

## Exam Technique Notes

### Showing working

All steps must be shown even when using GC. Write:
1. The method used.
2. Key intermediate values.
3. Final answer with correct units (where applicable).

GC answers are verified, not substitutes for working.

### Mark allocation guide

| Marks | Expected length |
|---|---|
| 1–2 | One or two lines of working. |
| 3–5 | Full method, intermediate steps, final answer. |
| 6–10 | Multiple parts or a multi-step problem. Full working required. |
| 12+ | Application question — set up a model, justify assumptions, solve, interpret in context. |

---

## Source Material Folder

`../workspace/math/source-material/` — drop tutorial sheets, past papers, and teacher notes here.
