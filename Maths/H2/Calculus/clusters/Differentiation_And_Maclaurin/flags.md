# Flags — Calculus > Differentiation_And_Maclaurin (Cluster 1)

> Append-only. Each session that exercises this cluster adds an entry below.
> Format: `YYYY-MM-DD | archetype # | what went wrong | confidence | gap state`

## 2026-06-24 — Cluster 1 walkthrough, Archetypes 1–4 (partial)

### Archetype 1 — Implicit Differentiation
- 2026-06-24 | A1(i) | Implicit diff of \( y^{2} \): wrote \( 2\frac{dy}{dx} \) instead of \( 2y\frac{dy}{dx} \) — forgot the chain rule on the y-term. Got \( \frac{dy}{dx} = \frac{y-2x}{2-x} \) instead of \( \frac{y-2x}{2y-x} \). Lost ~2 marks. | wrong | ACTIVE
- 2026-06-24 | A1(ii) | Tangent parallel to x-axis trigger → \( \frac{dy}{dx} = 0 \Rightarrow \) numerator = 0 → got it. Then substituted back to find \( y = 2\sqrt{7/3} \). Final answer was correct but didn't trust himself → confidence gap. | correct + hesitant | FRAGILE
- 2026-06-24 | A1 Practice (ii) | Tangent parallel to y-axis trigger → set denominator = 0. Got stuck: tried "when x = 0, y³ = 6" approach instead of denominator-zero method. Resolved with prompting. | hesitant | ACTIVE

### Archetype 2 — Parametric Differentiation
- 2026-06-24 | A2(i) | dy/dx via dy/dt ÷ dx/dt — clean, no issues | confident | FRAGILE (one rep only)
- 2026-06-24 | A2(ii) | Knew the equation-of-tangent setup (point, gradient, point-slope) but didn't expand and simplify to the AG form. Stopped one step short. Skipped algebraic tidy-up. | correct + hesitant | FRAGILE
- 2026-06-24 | A2 Practice | Got dy/dx = t, point (3p², 2p³), then assembled tangent y - 2p³ = p(x - 3p²) → y = px - p³. Confident. | confident + correct | CLOSED (single rep — re-test next session)

### Archetype 3 — Tangent / Normal
- 2026-06-24 | A3(i) | Normal gradient: wrote `1/m` first, then caught it himself ("oh shit, it's minus"). Got y = -¼x + ½ correctly. | correct + hesitant | FRAGILE
- 2026-06-24 | A3(ii) | Solved for second intersection via GC polynomial mode (polynomial 2). Concluded "from GC, x = 2 only, so normal does not meet C again." Acceptable Cambridge convention but stronger answer cites "4x² + 1 > 0 for all real x" algebraically. | correct (loose justification) | FRAGILE
- 2026-06-24 | A3 Practice (ii) | Quotient rule clean. But: substituted x = 2 into the simplified gradient and got m = 0 (correct — tangent is horizontal). Then forgot to compute y at x = 2 (y = 4 from the curve, not -1). Calculation slip on y-coordinate. | correct on method, wrong on y | ACTIVE

### Cross-cutting patterns flagged this session
- ACTIVE — Chain-rule-on-y in implicit diff. The classic trap. Drill 5 more implicit-diff openers next session.
- ACTIVE — Algebra hygiene: substituting back into the right equation to find y₀. Did this wrong twice (A3 Practice; A1(ii) momentarily).
- FRAGILE — Trust at the algebraic-tidy-up step. Knew the method on A2(ii) but stopped short. Watch for this on "Show that" Qs — finish to AG form.
- FRAGILE — GC syntax recall (polynomial root finder). Found it eventually; rehearse the keystroke path.

## Format reminder
`YYYY-MM-DD | archetype # | what went wrong | confidence | gap state`
