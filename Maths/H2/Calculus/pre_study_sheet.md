# Pre-Study Sheet — Maths H2 > Calculus

> **Format:** every formula → worked example → practice Q + A. Cover the practice answer with your hand, attempt the Q, then check.
> **Use:** read sequentially, attempt every practice. Anything you can't do cold is a gap to flag in the cluster sheets.
> **MF27 reminder:** items marked `[MF27]` are in the formula list — you don't need to memorise the derivation, just recognise the form and apply.

---

# §5.1 DIFFERENTIATION

## Block 1 — Power Rule

**Formula:**   `d/dx (xⁿ) = n·xⁿ⁻¹`  (for any rational n)

**Example:** Differentiate `y = 3x⁵ − 2x⁻² + √x`.
- Rewrite: `y = 3x⁵ − 2x⁻² + x^(1/2)`
- `dy/dx = 15x⁴ + 4x⁻³ + (1/2)x^(−1/2)`
- Final: `dy/dx = 15x⁴ + 4/x³ + 1/(2√x)`

**Practice:** Differentiate `y = 4x³ − 1/x² + ∛x`.

**Answer:**
- Rewrite: `y = 4x³ − x⁻² + x^(1/3)`
- `dy/dx = 12x² + 2x⁻³ + (1/3)x^(−2/3)`
- Final: `dy/dx = 12x² + 2/x³ + 1/(3∛x²)`

---

## Block 2 — Exponential Derivatives

**Formula:**   `d/dx (eˣ) = eˣ`  and  `d/dx (e^f(x)) = f'(x)·e^f(x)`

**Example:** Differentiate `y = e^(3x² − 2x)`.
- Let `f(x) = 3x² − 2x`, so `f'(x) = 6x − 2`.
- `dy/dx = (6x − 2)·e^(3x² − 2x)`

**Practice:** Differentiate `y = e^(sin 2x)`.

**Answer:**
- `f(x) = sin 2x`, `f'(x) = 2 cos 2x`
- `dy/dx = 2 cos 2x · e^(sin 2x)`

---

## Block 3 — Logarithm Derivatives

**Formula:**   `d/dx (ln x) = 1/x`  and  `d/dx (ln f(x)) = f'(x)/f(x)`

**Example:** Differentiate `y = ln(x² + 1)`.
- `f(x) = x² + 1`, `f'(x) = 2x`
- `dy/dx = 2x / (x² + 1)`

**Practice:** Differentiate `y = ln(cos 3x)`.

**Answer:**
- `f(x) = cos 3x`, `f'(x) = −3 sin 3x`
- `dy/dx = −3 sin 3x / cos 3x = −3 tan 3x`

---

## Block 4 — Trig Derivatives

**Formula (standard):**   `d/dx (sin x) = cos x`,  `d/dx (cos x) = −sin x`,  `d/dx (tan x) = sec²x`

**Example:** Differentiate `y = tan(5x + 1)`.
- Chain rule: `dy/dx = sec²(5x + 1) · 5 = 5 sec²(5x + 1)`

**Practice:** Differentiate `y = cos(2x³)`.

**Answer:**
- `dy/dx = −sin(2x³) · 6x² = −6x² sin(2x³)`

---

## Block 5 — Inverse Trig Derivatives `[MF27]`

**Formula:**   `d/dx (sin⁻¹(x/a)) = 1/√(a² − x²)`,  `d/dx (tan⁻¹(x/a)) = a/(a² + x²)`

**Example:** Differentiate `y = sin⁻¹(x/3)`.
- Using `a = 3`: `dy/dx = 1/√(9 − x²)`

**Practice:** Differentiate `y = tan⁻¹(x/5)`.

**Answer:**
- Using `a = 5`: `dy/dx = 5/(25 + x²)`

---

## Block 6 — Chain Rule

**Formula:**   `d/dx [f(g(x))] = f'(g(x)) · g'(x)`

**Example:** Differentiate `y = (3x² − 4x + 1)⁷`.
- Outer: `u⁷` → `7u⁶`. Inner: `3x² − 4x + 1` → `6x − 4`.
- `dy/dx = 7(3x² − 4x + 1)⁶ · (6x − 4)`

**Practice:** Differentiate `y = √(2x³ − x²)`.

**Answer:**
- Rewrite: `y = (2x³ − x²)^(1/2)`
- `dy/dx = (1/2)(2x³ − x²)^(−1/2) · (6x² − 2x) = (6x² − 2x) / (2√(2x³ − x²)) = (3x² − x)/√(2x³ − x²)`

---

## Block 7 — Product Rule

**Formula:**   `d/dx [u·v] = u'·v + u·v'`

**Example:** Differentiate `y = x²·sin x`.
- `u = x²` → `u' = 2x`. `v = sin x` → `v' = cos x`.
- `dy/dx = 2x·sin x + x²·cos x`

**Practice:** Differentiate `y = x·eˣ`.

**Answer:**
- `u = x` → `u' = 1`. `v = eˣ` → `v' = eˣ`.
- `dy/dx = 1·eˣ + x·eˣ = eˣ(1 + x)`

---

## Block 8 — Quotient Rule

**Formula:**   `d/dx [u/v] = (u'·v − u·v') / v²`

**Example:** Differentiate `y = x / (x² + 1)`.
- `u = x` → `u' = 1`. `v = x² + 1` → `v' = 2x`.
- `dy/dx = (1·(x² + 1) − x·2x) / (x² + 1)² = (1 − x²) / (x² + 1)²`

**Practice:** Differentiate `y = sin x / x`.

**Answer:**
- `u = sin x` → `u' = cos x`. `v = x` → `v' = 1`.
- `dy/dx = (x cos x − sin x) / x²`

---

## Block 9 — Implicit Differentiation

**Method:** Differentiate every term of the equation w.r.t. `x`. Apply the **chain rule on every `y`-term** (i.e. `d/dx(yⁿ) = n·yⁿ⁻¹ · dy/dx`). Then solve for `dy/dx`.

**Example:** Find `dy/dx` if `x² + y² = 25`.
- Differentiate both sides w.r.t. `x`: `2x + 2y · dy/dx = 0`
- Solve: `dy/dx = −x/y`

**Practice:** Find `dy/dx` if `x²·y + y³ = 6`.

**Answer:**
- Differentiate (product rule on `x²·y`): `2x·y + x²·(dy/dx) + 3y²·(dy/dx) = 0`
- Group: `(x² + 3y²)·dy/dx = −2xy`
- Solve: `dy/dx = −2xy / (x² + 3y²)`

---

## Block 10 — Parametric Differentiation

**Formula:**   `dy/dx = (dy/dt) / (dx/dt)`

**Example:** Curve given by `x = t²`, `y = 2t`. Find `dy/dx`.
- `dx/dt = 2t`, `dy/dt = 2`
- `dy/dx = 2 / (2t) = 1/t`

**Practice:** Curve given by `x = cos t`, `y = sin 2t`. Find `dy/dx` in terms of `t`.

**Answer:**
- `dx/dt = −sin t`, `dy/dt = 2 cos 2t`
- `dy/dx = 2 cos 2t / (−sin t) = −2 cos 2t / sin t`

---

## Block 11 — Equation of Tangent

**Formula:**   At point `(x₀, y₀)` with gradient `m = dy/dx |_(x=x₀)`:  `y − y₀ = m(x − x₀)`

**Example:** Find the tangent to `y = x²` at `x = 3`.
- `y₀ = 9`. `dy/dx = 2x` → at `x=3`, `m = 6`.
- Tangent: `y − 9 = 6(x − 3)` → `y = 6x − 9`

**Practice:** Find the tangent to `y = ln x` at `x = e`.

**Answer:**
- `y₀ = ln e = 1`. `dy/dx = 1/x` → at `x = e`, `m = 1/e`.
- Tangent: `y − 1 = (1/e)(x − e)` → `y = x/e`

---

## Block 12 — Equation of Normal

**Formula:**   Normal gradient = `−1/m`.  Equation:  `y − y₀ = (−1/m)(x − x₀)`

**Example:** Find the normal to `y = x²` at `x = 3`.
- From Block 11, `m = 6`, point `(3, 9)`.
- Normal gradient: `−1/6`.
- Normal: `y − 9 = (−1/6)(x − 3)` → `y = −x/6 + 19/2`

**Practice:** Find the normal to `y = eˣ` at `x = 0`.

**Answer:**
- `y₀ = 1`. `m = e⁰ = 1`. Normal gradient: `−1`.
- Normal: `y − 1 = −1·(x − 0)` → `y = −x + 1`

---

## Block 13 — Nature of Stationary Points (2nd Derivative Test)

**Method:** Solve `dy/dx = 0` for stationary `x`-values. Compute `d²y/dx²` at each. **If `> 0` → local min**, **if `< 0` → local max**. If `= 0`, fall back to 1st derivative test (sign change around the point).

**Example:** Find and classify stationary points of `y = x³ − 3x`.
- `dy/dx = 3x² − 3 = 0` → `x = ±1`
- `d²y/dx² = 6x`. At `x = 1`: `6 > 0` → **min** at `(1, −2)`. At `x = −1`: `−6 < 0` → **max** at `(−1, 2)`.

**Practice:** Find and classify stationary points of `y = x⁴ − 4x³`.

**Answer:**
- `dy/dx = 4x³ − 12x² = 4x²(x − 3) = 0` → `x = 0` or `x = 3`
- `d²y/dx² = 12x² − 24x`. At `x = 3`: `108 − 72 = 36 > 0` → **min** at `(3, −27)`. At `x = 0`: `0` → inconclusive; use 1st derivative test: `dy/dx = 4x²(x−3)` is negative just before AND just after `x = 0` → **stationary point of inflexion** at `(0, 0)`.

---

## Block 14 — Connected Rates of Change

**Formula (chain rule applied to time):**   `dV/dt = dV/dr · dr/dt`  (and analogous chains)

**Example:** A spherical balloon expands so that its radius increases at `0.2 cm/s`. Find the rate of volume increase when `r = 5 cm`.
- `V = (4/3)πr³` → `dV/dr = 4πr²`
- At `r = 5`: `dV/dr = 100π`
- `dV/dt = dV/dr · dr/dt = 100π · 0.2 = 20π cm³/s`

**Practice:** Water fills a conical tank (apex down) of half-angle 30° at `dV/dt = 8 cm³/s`. Find the rate at which water depth `h` increases when `h = 10 cm`.

**Answer:**
- Geometry: `r = h tan 30° = h/√3` → `V = (1/3)π r² h = (1/3)π·(h²/3)·h = πh³/9`
- `dV/dh = πh²/3`. At `h = 10`: `dV/dh = 100π/3`
- `dV/dt = dV/dh · dh/dt` → `8 = (100π/3) · dh/dt` → `dh/dt = 24/(100π) = 6/(25π) cm/s ≈ 0.0764 cm/s`

---

# §5.2 MACLAURIN SERIES

## Block 15 — General Maclaurin Formula

**Formula:**   `f(x) = f(0) + f'(0)·x + f''(0)·x²/2! + f'''(0)·x³/3! + ...`

**Example:** Find the first 3 nonzero terms of the Maclaurin series of `f(x) = sec x`.
- `f(0) = 1`
- `f'(x) = sec x · tan x` → `f'(0) = 1·0 = 0`
- `f''(x) = sec x · tan²x + sec³x` → `f''(0) = 0 + 1 = 1`
- `f'''(x) = ...` (or use `f''(x) = sec x · (tan²x + sec²x)`, differentiate again, evaluate at 0). `f'''(0) = 0`
- `f''''(0) = 5` (after computation)
- Series: `1 + 0·x + 1·x²/2 + 0·x³/6 + 5·x⁴/24 + ...` = `1 + x²/2 + 5x⁴/24 + ...`

**Practice:** Find the first 3 nonzero terms of the Maclaurin series of `f(x) = e^(2x) · cos x`.

**Answer:**
- `f(0) = 1·1 = 1`
- `f'(x) = 2e^(2x) cos x − e^(2x) sin x` → `f'(0) = 2 − 0 = 2`
- `f''(x) = 4e^(2x) cos x − 2e^(2x) sin x − 2e^(2x) sin x − e^(2x) cos x = 3e^(2x) cos x − 4e^(2x) sin x` → `f''(0) = 3`
- Series: `1 + 2x + 3x²/2 + ...`
- (Verification by multiplying standard series: `e^(2x) = 1 + 2x + 2x² + ...`, `cos x = 1 − x²/2 + ...`, product to `x²` = `1 + 2x + (2 − 1/2)x² = 1 + 2x + 3x²/2`. ✓)

---

## Block 16 — Standard Series `(1+x)ⁿ` `[MF27]`

**Formula:**   `(1 + x)ⁿ = 1 + nx + n(n−1)x²/2! + n(n−1)(n−2)x³/3! + ...`   for `|x| < 1`

**Example:** Expand `(1 − 2x)^(1/2)` up to `x³`.
- Substitute `n = 1/2`, replace `x` with `−2x`:
- `= 1 + (1/2)(−2x) + (1/2)(−1/2)(−2x)²/2 + (1/2)(−1/2)(−3/2)(−2x)³/6`
- `= 1 − x − x²/2 − x³/2`
- Valid for `|−2x| < 1` → `|x| < 1/2`

**Practice:** Expand `(1 + 3x)^(−2)` up to `x³`.

**Answer:**
- `n = −2`, replace `x` with `3x`:
- `= 1 + (−2)(3x) + (−2)(−3)(3x)²/2 + (−2)(−3)(−4)(3x)³/6`
- `= 1 − 6x + 27x² − 108x³`
- Valid for `|3x| < 1` → `|x| < 1/3`

---

## Block 17 — Standard Series `eˣ` `[MF27]`

**Formula:**   `eˣ = 1 + x + x²/2! + x³/3! + ...`   for all `x`

**Example:** Find the first 4 terms of `e^(−x²)`.
- Replace `x` with `−x²`:
- `e^(−x²) = 1 + (−x²) + (−x²)²/2 + (−x²)³/6 + ...`
- `= 1 − x² + x⁴/2 − x⁶/6 + ...`

**Practice:** Find the first 4 terms of `e^(2x)`.

**Answer:**
- `e^(2x) = 1 + 2x + (2x)²/2 + (2x)³/6 + ...`
- `= 1 + 2x + 2x² + (4/3)x³ + ...`

---

## Block 18 — Standard Series `sin x` and `cos x` `[MF27]`

**Formula:**   `sin x = x − x³/3! + x⁵/5! − ...`     `cos x = 1 − x²/2! + x⁴/4! − ...`     for all `x`

**Example:** Find the first 3 nonzero terms of `sin(2x)`.
- Replace `x` with `2x`:
- `sin(2x) = (2x) − (2x)³/6 + (2x)⁵/120`
- `= 2x − (4/3)x³ + (4/15)x⁵`

**Practice:** Find the first 3 nonzero terms of `cos(3x)`.

**Answer:**
- Replace `x` with `3x`:
- `cos(3x) = 1 − (3x)²/2 + (3x)⁴/24`
- `= 1 − (9/2)x² + (27/8)x⁴`

---

## Block 19 — Standard Series `ln(1 + x)` `[MF27]`

**Formula:**   `ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + ...`   for `−1 < x ≤ 1`

**Example:** Expand `ln(1 + 2x²)` up to `x⁶`.
- Replace `x` with `2x²`:
- `ln(1 + 2x²) = (2x²) − (2x²)²/2 + (2x²)³/3 − ...`
- `= 2x² − 2x⁴ + (8/3)x⁶ − ...`

**Practice:** Expand `ln((1 + x)/(1 − x))` up to `x⁵`.

**Answer:**
- `ln((1 + x)/(1 − x)) = ln(1 + x) − ln(1 − x)`
- `ln(1 + x) = x − x²/2 + x³/3 − x⁴/4 + x⁵/5 − ...`
- `ln(1 − x) = −x − x²/2 − x³/3 − x⁴/4 − x⁵/5 − ...`
- Subtract: `= 2x + 2x³/3 + 2x⁵/5 + ...`

---

## Block 20 — Small-Angle Approximation `sin x ≈ x`

**Formula:**   For `x` close to 0 (in radians):  `sin x ≈ x`

**Example:** Approximate `sin(0.04)`.
- `sin(0.04) ≈ 0.04`   (calculator: `0.039989...` — error in 4th s.f.)

**Practice:** Use small-angle to approximate `(sin 3x) / x` for small `x`.

**Answer:**
- `sin 3x ≈ 3x` for small `x`
- `(sin 3x) / x ≈ 3x / x = 3`

---

## Block 21 — Small-Angle Approximation `cos x ≈ 1 − x²/2`

**Formula:**   For `x` close to 0:  `cos x ≈ 1 − x²/2`

**Example:** Approximate `cos(0.1)`.
- `cos(0.1) ≈ 1 − (0.1)²/2 = 1 − 0.005 = 0.995`   (calculator: `0.9950042...` — accurate to 4 s.f.)

**Practice:** Use small-angle to find an approximation of `(1 − cos 2x) / x²` for small `x`.

**Answer:**
- `cos 2x ≈ 1 − (2x)²/2 = 1 − 2x²`
- `(1 − cos 2x) ≈ 1 − (1 − 2x²) = 2x²`
- `(1 − cos 2x) / x² ≈ 2x² / x² = 2`

---

## Block 22 — Small-Angle Approximation `tan x ≈ x`

**Formula:**   For `x` close to 0:  `tan x ≈ x`

**Example:** Approximate `tan(0.02)`.
- `tan(0.02) ≈ 0.02`   (calculator: `0.020003...` — accurate to 4 s.f.)

**Practice:** Use small-angle to evaluate `lim(x→0) (tan 5x) / (sin 3x)`.

**Answer:**
- `tan 5x ≈ 5x`, `sin 3x ≈ 3x`
- Ratio: `5x / 3x = 5/3`

---

# §5.3 INTEGRATION TECHNIQUES

## Block 23 — Power Rule for Integration

**Formula:**   `∫ xⁿ dx = xⁿ⁺¹/(n+1) + C`   (for `n ≠ −1`)

**Example:** Find `∫ (3x² − 4x + √x) dx`.
- `∫ 3x² dx = x³`
- `∫ −4x dx = −2x²`
- `∫ √x dx = ∫ x^(1/2) dx = (2/3)x^(3/2)`
- Total: `x³ − 2x² + (2/3)x^(3/2) + C`

**Practice:** Find `∫ (2x⁻³ + 5x^(1/4)) dx`.

**Answer:**
- `∫ 2x⁻³ dx = 2 · x⁻²/(−2) = −x⁻² = −1/x²`
- `∫ 5x^(1/4) dx = 5 · x^(5/4) / (5/4) = 4x^(5/4)`
- Total: `−1/x² + 4x^(5/4) + C`

---

## Block 24 — Exponential Integration

**Formula:**   `∫ eˣ dx = eˣ + C`   and   `∫ f'(x)·e^f(x) dx = e^f(x) + C`

**Example:** Find `∫ 2x·e^(x²) dx`.
- Recognise pattern: `f(x) = x²`, `f'(x) = 2x`. The `2x` in the integrand IS the derivative of the exponent.
- Result: `e^(x²) + C`

**Practice:** Find `∫ cos x · e^(sin x) dx`.

**Answer:**
- `f(x) = sin x`, `f'(x) = cos x`. Pattern matches.
- Result: `e^(sin x) + C`

---

## Block 25 — `∫ 1/x dx`

**Formula:**   `∫ 1/x dx = ln|x| + C`   (modulus is mandatory)

**Example:** Find `∫ 5/(2x) dx`.
- `= (5/2) ∫ 1/x dx = (5/2) ln|x| + C`

**Practice:** Find `∫ 3/x dx` between `x = 1` and `x = e`.

**Answer:**
- `∫₁^e 3/x dx = 3 [ln|x|]₁^e = 3(ln e − ln 1) = 3(1 − 0) = 3`

---

## Block 26 — `f'(x)/f(x)` Pattern

**Formula:**   `∫ f'(x)/f(x) dx = ln|f(x)| + C`

**Example:** Find `∫ 2x/(x² + 3) dx`.
- `f(x) = x² + 3`, `f'(x) = 2x`. The numerator IS the derivative of the denominator.
- Result: `ln|x² + 3| + C = ln(x² + 3) + C`   (no modulus needed since `x² + 3 > 0` always)

**Practice:** Find `∫ tan x dx`.

**Answer:**
- `tan x = sin x / cos x`. Numerator? Derivative of `cos x` is `−sin x`. So rewrite:
- `tan x = −(−sin x)/cos x` → fits `−f'/f` pattern with `f = cos x`.
- `∫ tan x dx = −ln|cos x| + C` (equivalently `ln|sec x| + C`)

---

## Block 27 — `f'(x)·f(x)ⁿ` Pattern (Reverse Chain Rule)

**Formula:**   `∫ f'(x)·f(x)ⁿ dx = f(x)ⁿ⁺¹/(n+1) + C`   (for `n ≠ −1`)

**Example:** Find `∫ 2x·(x² + 1)³ dx`.
- `f(x) = x² + 1`, `f'(x) = 2x`. Outer power `n = 3`.
- Result: `(x² + 1)⁴ / 4 + C`

**Practice:** Find `∫ sin x · cos⁴x dx`.

**Answer:**
- `f(x) = cos x`, `f'(x) = −sin x`. The integrand is `−f'(x) · f(x)⁴`.
- `∫ sin x cos⁴x dx = −∫ (−sin x) cos⁴x dx = −cos⁵x / 5 + C`

---

## Block 28 — Trig Identities for Integration

**Formula:**   `sin²x = (1 − cos 2x)/2`,   `cos²x = (1 + cos 2x)/2`,   `tan²x = sec²x − 1`

**Example:** Find `∫ cos²x dx`.
- `cos²x = (1 + cos 2x)/2`
- `∫ (1 + cos 2x)/2 dx = (1/2)·x + (1/2)·(sin 2x)/2 + C = x/2 + (sin 2x)/4 + C`

**Practice:** Find `∫ tan²x dx`.

**Answer:**
- `tan²x = sec²x − 1`
- `∫ (sec²x − 1) dx = tan x − x + C`

---

## Block 29 — Standard Form `1/(a² + x²)` `[MF27]`

**Formula:**   `∫ 1/(a² + x²) dx = (1/a) tan⁻¹(x/a) + C`

**Example:** Find `∫ 1/(9 + x²) dx`.
- Identify `a² = 9` → `a = 3`.
- Result: `(1/3) tan⁻¹(x/3) + C`

**Practice:** Find `∫ 1/(4 + 9x²) dx`.

**Answer:**
- Factor: `4 + 9x² = 4(1 + (9/4)x²) = 4(1 + (3x/2)²)`. Or rewrite as `9(x² + 4/9)`.
- Cleaner: `∫ 1/(4 + 9x²) dx = (1/9) ∫ 1/((2/3)² + x²) dx = (1/9) · (3/2) tan⁻¹(x/(2/3)) + C = (1/6) tan⁻¹(3x/2) + C`

---

## Block 30 — Standard Form `1/√(a² − x²)` `[MF27]`

**Formula:**   `∫ 1/√(a² − x²) dx = sin⁻¹(x/a) + C`

**Example:** Find `∫ 1/√(25 − x²) dx`.
- `a² = 25` → `a = 5`.
- Result: `sin⁻¹(x/5) + C`

**Practice:** Find `∫ 3/√(4 − x²) dx`.

**Answer:**
- `a = 2`. Pull constant: `3 ∫ 1/√(4 − x²) dx = 3 sin⁻¹(x/2) + C`

---

## Block 31 — Standard Form `1/(a² − x²)` `[MF27]`

**Formula:**   `∫ 1/(a² − x²) dx = (1/(2a)) ln|(a + x)/(a − x)| + C`

**Example:** Find `∫ 1/(16 − x²) dx`.
- `a = 4`.
- Result: `(1/8) ln|(4 + x)/(4 − x)| + C`

**Practice:** Find `∫ 1/(9 − x²) dx`.

**Answer:**
- `a = 3`. Result: `(1/6) ln|(3 + x)/(3 − x)| + C`

---

## Block 32 — Standard Form `1/(x² − a²)` `[MF27]`

**Formula:**   `∫ 1/(x² − a²) dx = (1/(2a)) ln|(x − a)/(x + a)| + C`

**Example:** Find `∫ 1/(x² − 4) dx`.
- `a = 2`.
- Result: `(1/4) ln|(x − 2)/(x + 2)| + C`

**Practice:** Find `∫ 1/(x² − 25) dx`.

**Answer:**
- `a = 5`. Result: `(1/10) ln|(x − 5)/(x + 5)| + C`

---

## Block 33 — Integration by Parts

**Formula:**   `∫ u dv = uv − ∫ v du`     (LIATE for choosing `u`: Log, Inverse-trig, Algebraic, Trig, Exponential)

**Example:** Find `∫ x·eˣ dx`.
- LIATE: `u = x` (Algebraic), `dv = eˣ dx` (Exponential). Then `du = dx`, `v = eˣ`.
- `∫ x·eˣ dx = x·eˣ − ∫ eˣ · 1 dx = x·eˣ − eˣ + C = eˣ(x − 1) + C`

**Practice:** Find `∫ x·ln x dx`.

**Answer:**
- LIATE: `u = ln x` (Log), `dv = x dx`. Then `du = (1/x) dx`, `v = x²/2`.
- `∫ x·ln x dx = (x²/2) ln x − ∫ (x²/2)·(1/x) dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4 + C`

---

## Block 34 — Integration by Given Substitution

**Method:** Question supplies the substitution (e.g. `u = f(x)` or `x = g(u)`). (1) Compute `du` in terms of `dx`. (2) Substitute into the integrand. (3) **Change the limits** if it's a definite integral. (4) Integrate in `u`. (5) (For indefinite) substitute back; (for definite) evaluate.

**Example:** Use the substitution `u = x² + 1` to find `∫ 2x/√(x² + 1) dx`.
- `du = 2x dx`. Integrand becomes `du / √u = u^(−1/2) du`.
- `∫ u^(−1/2) du = 2 u^(1/2) + C = 2√(x² + 1) + C`

**Practice:** Use the substitution `x = 2 sin θ` to find `∫ 1/√(4 − x²) dx`.

**Answer:**
- `dx = 2 cos θ dθ`. `√(4 − x²) = √(4 − 4 sin²θ) = 2 cos θ` (assuming `cos θ > 0`).
- Integrand: `(1 / (2 cos θ)) · 2 cos θ dθ = dθ`.
- `∫ dθ = θ + C = sin⁻¹(x/2) + C`   (matches Block 30)

---

## Block 35 — Partial Fractions for Integration

**Method:** Decompose a rational integrand into simpler fractions, then integrate each.

**Example:** Find `∫ 1/((x − 1)(x + 2)) dx`.
- Decompose: `1/((x−1)(x+2)) = A/(x−1) + B/(x+2)`. Solve: `A(x+2) + B(x−1) = 1`. At `x=1`: `3A = 1` → `A = 1/3`. At `x=−2`: `−3B = 1` → `B = −1/3`.
- `∫ [1/(3(x−1)) − 1/(3(x+2))] dx = (1/3) ln|x−1| − (1/3) ln|x+2| + C = (1/3) ln|(x−1)/(x+2)| + C`

**Practice:** Find `∫ (3x + 1) / (x(x + 1)) dx`.

**Answer:**
- Decompose: `(3x+1)/(x(x+1)) = A/x + B/(x+1)`. Solve: `A(x+1) + Bx = 3x+1`. At `x=0`: `A = 1`. At `x=−1`: `−B = −2` → `B = 2`.
- `∫ [1/x + 2/(x+1)] dx = ln|x| + 2 ln|x+1| + C`

---

# §5.4 DEFINITE INTEGRALS — AREA & VOLUME

## Block 36 — Area Under a Curve

**Formula:**   `A = ∫ₐᵇ y dx`   (when `y ≥ 0` on `[a, b]`)

**Example:** Find the area under `y = x²` from `x = 0` to `x = 3`.
- `A = ∫₀³ x² dx = [x³/3]₀³ = 27/3 − 0 = 9`

**Practice:** Find the area under `y = eˣ` from `x = 0` to `x = 2`. Give an exact answer.

**Answer:**
- `A = ∫₀² eˣ dx = [eˣ]₀² = e² − 1`

---

## Block 37 — Area Between Two Curves

**Formula:**   `A = ∫ₐᵇ (y_upper − y_lower) dx`     (upper curve minus lower curve)

**Example:** Find the area enclosed between `y = x` and `y = x²` from `x = 0` to `x = 1`.
- Upper: `y = x`. Lower: `y = x²`. (On `[0,1]`, `x ≥ x²`.)
- `A = ∫₀¹ (x − x²) dx = [x²/2 − x³/3]₀¹ = 1/2 − 1/3 = 1/6`

**Practice:** Find the area enclosed between `y = 4 − x²` and `y = x + 2`. (Curves cross at the limits — find them first.)

**Answer:**
- Intersect: `4 − x² = x + 2` → `x² + x − 2 = 0` → `(x + 2)(x − 1) = 0` → `x = −2` or `x = 1`.
- Check upper: at `x = 0`, parabola = `4`, line = `2`. Parabola is upper.
- `A = ∫₋₂¹ (4 − x² − (x + 2)) dx = ∫₋₂¹ (2 − x² − x) dx`
- `= [2x − x³/3 − x²/2]₋₂¹ = (2 − 1/3 − 1/2) − (−4 + 8/3 − 2) = 7/6 − (−10/3) = 7/6 + 10/3 = 7/6 + 20/6 = 27/6 = 9/2`

---

## Block 38 — Area Below the x-axis

**Method:** If `y ≤ 0` on `[a, b]`, the integral `∫ₐᵇ y dx` gives a **negative** value. The geometric area is its **absolute value** `|∫ₐᵇ y dx|`. If the curve crosses the x-axis, **split the integration range at the x-intercepts** and add the absolute values of each piece.

**Example:** Find the area enclosed between `y = x² − 4` and the x-axis (between the roots).
- Roots: `x = ±2`. On `(−2, 2)`, `y < 0`.
- `∫₋₂² (x² − 4) dx = [x³/3 − 4x]₋₂² = (8/3 − 8) − (−8/3 + 8) = −16/3 − 16/3 + ... ` actually
- `(8/3 − 8) − (−8/3 + 8) = 8/3 − 8 + 8/3 − 8 = 16/3 − 16 = −32/3`
- Area = `|−32/3| = 32/3`

**Practice:** Find the total area enclosed between `y = sin x` and the x-axis from `x = 0` to `x = 2π`.

**Answer:**
- `sin x ≥ 0` on `[0, π]` and `sin x ≤ 0` on `[π, 2π]`. Must split.
- `∫₀^π sin x dx = [−cos x]₀^π = −(−1) − (−1) = 2`
- `|∫_π^(2π) sin x dx| = |[−cos x]_π^(2π)| = |−1 − 1| = 2`
- Total area = `2 + 2 = 4`

---

## Block 39 — Volume of Revolution about the x-axis

**Formula:**   `V = π ∫ₐᵇ y² dx`     (rotate region under `y = f(x)` about x-axis)

**Example:** Find the volume formed when `y = x` from `x = 0` to `x = 2` is rotated about the x-axis.
- `V = π ∫₀² x² dx = π [x³/3]₀² = 8π/3`

**Practice:** Find the volume formed when `y = √x` from `x = 0` to `x = 4` is rotated about the x-axis.

**Answer:**
- `y² = x`. `V = π ∫₀⁴ x dx = π [x²/2]₀⁴ = π · 8 = 8π`

---

## Block 40 — Volume of Revolution about the y-axis

**Formula:**   `V = π ∫_c^d x² dy`     (rotate region "left" of curve about y-axis; rearrange to `x = g(y)`)

**Example:** Find the volume when `y = x²` from `x = 0` to `x = 2` is rotated about the y-axis.
- Rearrange: `x = √y`. When `x = 0`, `y = 0`. When `x = 2`, `y = 4`.
- `V = π ∫₀⁴ x² dy = π ∫₀⁴ y dy = π [y²/2]₀⁴ = π · 8 = 8π`

**Practice:** Find the volume when `y = eˣ` from `x = 0` to `x = 1` is rotated about the y-axis.

**Answer:**
- Rearrange: `x = ln y`. When `x = 0`, `y = 1`. When `x = 1`, `y = e`.
- `V = π ∫₁^e (ln y)² dy`. Use IBP: `u = (ln y)²`, `dv = dy` → `du = (2 ln y)/y dy`, `v = y`.
- `∫ (ln y)² dy = y (ln y)² − ∫ 2 ln y dy = y(ln y)² − 2(y ln y − y) + C`
- Evaluate `[y(ln y)² − 2y ln y + 2y]₁^e = (e·1 − 2e·1 + 2e) − (0 − 0 + 2) = e − 2`
- `V = π(e − 2)`

---

# §5.5 DIFFERENTIAL EQUATIONS

## Block 41 — Solving a Separable First-Order DE

**Method:** A DE of the form `dy/dx = f(x)·g(y)` is **separable**. Rearrange to `dy/g(y) = f(x) dx`, then integrate **both sides**. Add `+C` once (on either side, conventionally the RHS). For a **particular solution**, substitute the given initial condition to find `C`.

**Example:** Solve `dy/dx = xy`, given `y = 2` when `x = 0`.
- Separate: `(1/y) dy = x dx`
- Integrate: `ln|y| = x²/2 + C`
- Particular: at `x = 0`, `y = 2`: `ln 2 = 0 + C` → `C = ln 2`.
- `ln|y| = x²/2 + ln 2` → `y = 2 e^(x²/2)`

**Practice:** Solve `dy/dx = (1 + x²) / y`, given `y = 1` when `x = 0`.

**Answer:**
- Separate: `y dy = (1 + x²) dx`
- Integrate: `y²/2 = x + x³/3 + C`
- Particular: at `x = 0`, `y = 1`: `1/2 = 0 + C` → `C = 1/2`.
- `y² = 2x + 2x³/3 + 1`   (or solve for `y` if asked: `y = √(2x + 2x³/3 + 1)` taking positive root since `y(0) = 1 > 0`)

---

## Block 42 — DE by Given Substitution

**Method:** Question supplies a substitution (e.g. `u = y/x`, `v = x + y`, `z = y²`). (1) Differentiate the substitution to get `du/dx` (or `dv/dx` etc.) in terms of `y, dy/dx`. (2) Substitute into the original DE. (3) The resulting DE in the new variable is separable.

**Example:** Use `u = y/x` to solve `dy/dx = (x + y)/x`.
- `y = ux` → `dy/dx = u + x · du/dx`. The original DE: `u + x du/dx = 1 + u`.
- Simplify: `x du/dx = 1` → `du = dx/x`.
- Integrate: `u = ln|x| + C` → `y/x = ln|x| + C` → `y = x ln|x| + Cx`

**Practice:** Use `v = x + y` to solve `dy/dx = (x + y)²`.

**Answer:**
- `v = x + y` → `dv/dx = 1 + dy/dx` → `dy/dx = dv/dx − 1`.
- Original DE: `dv/dx − 1 = v²` → `dv/dx = 1 + v²`.
- Separate: `dv/(1 + v²) = dx`. Integrate: `tan⁻¹ v = x + C`.
- `v = tan(x + C)` → `x + y = tan(x + C)` → `y = tan(x + C) − x`

---

## Block 43 — Formulating a DE from a Context

**Method:** Translate the physical statement into a rate equation. Common patterns:
- "Rate of change of `N` is proportional to `N`" → `dN/dt = kN`
- "Rate ∝ deficit `(K − N)`" → `dN/dt = k(K − N)`   (cooling, drug clearance — `k > 0`, sign chosen by direction)
- "Rate ∝ product `N(K − N)`" → `dN/dt = kN(K − N)`   (logistic growth)
- "Volume decreases at rate proportional to surface area" → set up using geometry.

**Example:** A cup of coffee at 80°C cools in a 20°C room. The rate of cooling is proportional to the temperature difference between coffee and room. After 5 min, coffee is at 60°C. Formulate the DE for temperature `T` at time `t`.
- "Rate of cooling ∝ (T − 20)" with cooling (T decreasing): `dT/dt = −k(T − 20)`, `k > 0`.
- Initial: `T(0) = 80`. Data point: `T(5) = 60` (used later to find `k`).

**Practice:** A tank holds `V` litres of water. Water drains at a rate proportional to the square root of the volume currently in the tank. Initially `V = 100` litres. Formulate the DE for `V` at time `t`.

**Answer:**
- "Rate of drainage ∝ √V" with `V` decreasing: `dV/dt = −k √V`, `k > 0`.
- Initial: `V(0) = 100`.

---

## Block 44 — Interpreting a DE and Its Solution in Context

**Method:** After solving, look at the long-term behaviour (`t → ∞`), the value of any constants in physical units, and how the constants control the shape (growth rate, asymptote, carrying capacity).

**Example:** A drug concentration `C(t)` satisfies `dC/dt = −0.2 C` with `C(0) = 50 mg/L`. Solve and interpret.
- Separable: `(1/C) dC = −0.2 dt` → `ln|C| = −0.2t + K` → `C = A·e^(−0.2t)`.
- Initial: `C(0) = 50` → `A = 50`. So `C(t) = 50 e^(−0.2t)`.
- **Interpretation:** as `t → ∞`, `C → 0`. The drug is cleared from the body exponentially with rate constant `0.2 per unit time` (i.e. half-life `= ln 2 / 0.2 ≈ 3.47 time units`).

**Practice:** A population `P` satisfies `dP/dt = 0.5 P(1 − P/1000)` with `P(0) = 100`. Without solving, describe the long-term behaviour, the carrying capacity, and the value of `P` when growth rate is maximum.

**Answer:**
- **Long-term:** as `t → ∞`, `P → 1000` (the logistic carrying capacity).
- **Carrying capacity:** `K = 1000`.
- **Maximum growth rate:** occurs where `d²P/dt² = 0`. For logistic, this is at `P = K/2 = 500`. (The S-curve has its inflection at half the capacity.)
- At `P(0) = 100`, the population is well below capacity → near-exponential initial growth `dP/dt ≈ 0.5 P`. As `P` approaches 1000, growth slows to zero.

---

# Closing notes

If you completed every Practice cleanly with the right method (mark scheme-style working, not just the final value), you have the formula surface of calculus. Anything you struggled with → flag it now. The cluster sheets (next step) drill these formulas in **exam-stem form** (e.g. "Show that…", "Hence find…", "(You need not show this is a max)") so you learn to recognise the technique from the question wording instead of the topic heading.

**3-cluster plan still on the table for approval:**

1. **Differentiation_And_Maclaurin** (Blocks 1–22)
2. **Integration_Techniques_And_Applications** (Blocks 23–40)
3. **Differential_Equations** (Blocks 41–44)

Say **"approve the breakdown, generate Cluster 1"** to start.
