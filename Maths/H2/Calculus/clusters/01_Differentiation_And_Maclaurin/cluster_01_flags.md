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

### Archetype 5 — Optimisation (rectangle in semicircle)
- 2026-06-24 | A5 | Trigger recognised correctly ("you do not need to prove this is a maximum" → optimisation problem). | confident | CLOSED (trigger only — re-test execution)
- 2026-06-24 | A5 | Set up geometry correctly: semicircle radius 10, half-width x, height y, constraint \( x^{2}+y^{2}=100 \), area \( A = 2xy \). | confident | CLOSED
- 2026-06-24 | A5 | Outlined the full method (eliminate one variable, differentiate, set to zero, solve, back-substitute for the other variable, compute max area) but STOPPED SHORT of executing. Did not compute \( dA/dx \), did not solve for \( x = 5\sqrt{2} \), did not state max area \( = 100 \) cm². | correct method, no execution | ACTIVE

### Archetype 6 — Sketch \( f' \) / classify stationary points
- 2026-06-24 | A6 | On \( f'(x) = (x-1)(x-3)^{2} \): correctly identified \( x = 1 \) gives sign change \( - \to + \) → local min. | confident | FRAGILE (single rep)
- 2026-06-24 | A6 | On the \( (x-3)^{2} \) factor: identified that a sign-change test is needed at \( x = 3 \), but did NOT complete the test to conclude it's a stationary point of inflexion (sign does not change → not a max/min). Same "describes method, doesn't execute" pattern as A5. | correct trigger, no execution | ACTIVE
- 2026-06-24 | A6 | Partial reading of \( f'(x) \) — only mentioned the \( (x-1) \) factor initially. Full factorisation shapes the sign analysis; missing the double root loses the inflexion insight. | comprehension slip | ACTIVE

### Cross-cutting pattern reinforced (Archetypes 5 + 6)
- ACTIVE — **"Describes method, doesn't finish execution."** Third session in a row where he correctly identifies the trigger and lays out the procedure, but stops at the setup instead of computing the final value. This costs A1 (accuracy) marks on every optimisation / classification / show-that question. Fix: force a habit of writing out the last line of numerical algebra even when "the method is obvious." Real exam mark schemes reward the final computed value, not the outlined method.
- FRAGILE — Reading the FULL structure of \( f'(x) \) before analysing. Missed the double root at \( x = 3 \) in first read. Habit: factorise fully first, then analyse each factor's contribution to the sign.

### Archetype 6 — SKIPPED, needs redo
- 2026-06-24 | A6 | SKIPPED this session. Needs re-attempt with the sketch prominent. FLAGGED for redo next cluster session. | not attempted | ACTIVE

### Archetype 7 — Maclaurin by MF27 substitution
- 2026-06-24 | A7(i) example | Forgot \( n = -3 \) initially. Only focused on the \( (-2x) \) substitution; missed that the whole expression is \( (1+u)^{-3} \), not \( (1+u)^{n} \) with unknown n. First read read the denominator only, not the power. | wrong | ACTIVE
- 2026-06-24 | A7(i) example | Even after identifying \( n = -3 \), did not substitute \( u = -2x \) through EVERY term. Wrote \( 1 + 3x \) (should be \( 1 - 3(-2x) = 1 + 6x \), then \( +6u^{2} = +24x^{2} \), etc.). Substitution incomplete. | wrong | ACTIVE
- 2026-06-24 | A7 practice | Got \( n = \tfrac{1}{2} \) correctly. Small algebra slip on first term — wrote \( \tfrac{1}{2}x \) instead of \( \tfrac{1}{2}(3x) = \tfrac{3}{2}x \). Corrected on second read. Range of validity \( \|3x\|<1 \Rightarrow \|x\|<\tfrac{1}{3} \) got clean. | correct after slip | FRAGILE

### Archetype 8 — Maclaurin by repeated differentiation
- 2026-06-24 | A8 example | GAP: "how do you differentiate \( \sec x \)?" Momentarily confused differentiation with integration. Standard derivative \( \dfrac{d}{dx}(\sec x) = \sec x\tan x \) not on autopilot. | knowledge gap | ACTIVE
- 2026-06-24 | A8 example | GAP: assembly step. Didn't understand how \( f(0) + f'(0)x + \tfrac{f''(0)}{2}x^{2} = 1 + 0 + 2x^{2} \) gives \( 1 + 2x^{2} \). Missing the general Maclaurin formula anchor — "when function not in MF27, use \( f(x) \approx \sum \tfrac{f^{(n)}(0)}{n!}x^{n} \)." He got there after prompting. | conceptual gap | FRAGILE
- 2026-06-24 | A8 practice — tan x | Got \( f(0), f'(0), f''(0) \) clean (tan 0 = 0; sec² 0 = 1; \( 2\sec^{2}x\tan x \to 0 \)). | correct | CLOSED (single rep — retest)
- 2026-06-24 | A8 practice — f'''(x) | Differentiated \( 2\sec^{2}x\tan x \) by product rule correctly: kept \( 2\sec^{2}x \), differentiated \( \tan x \to \sec^{2}x \) giving \( 2\sec^{4}x \); kept \( \tan x \), differentiated \( 2\sec^{2}x \) via chain giving \( 4\sec^{2}x\tan x \), times the \( \tan x \) giving \( 4\sec^{2}x\tan^{2}x \). Full expression \( f'''(x) = 4\sec^{2}x\tan^{2}x + 2\sec^{4}x \). At \( x = 0 \): 0 + 2 = 2. | correct + confident | CLOSED
- 2026-06-24 | A8 practice — assembly | CONCEPTUAL CONFUSION: momentarily thought the \( x \) in the series should be replaced by \( \tan x \) (i.e. that the "x" inside \( f(x) = \tan x \) is a different \( x \) from the series variable). It's the same \( x \). He caught it: "you don't replace it — this x is fixed here." | corrected mid-thought | FRAGILE
- 2026-06-24 | A8 practice | Final assembled series \( \tan x \approx 0 + x + 0 + \tfrac{2}{6}x^{3} = x + \tfrac{1}{3}x^{3} \). Clean. | correct | CLOSED

### Cross-cutting patterns flagged this session (A7 + A8)
- ACTIVE — **Standard-derivative recall.** \( \dfrac{d}{dx}(\sec x) = \sec x\tan x \) not automatic. Suggest drilling the MF26/MF27 standard-derivative table as separate 30-second recall reps. Also flag: he confused differentiation with integration at one point ("isn't that integration?") — direction of transformation not sharp enough.
- ACTIVE — **Full substitution habit.** On \( (1+u)^{n} \) expansions, must substitute \( u = g(x) \) through EVERY term at once, not just the first. Suggested drill: write the series in \( u \) FIRST as a template, THEN substitute — don't inline.
- FRAGILE — **General Maclaurin formula anchor.** When function isn't in MF27, must call up \( f(x) \approx f(0) + f'(0)x + \tfrac{f''(0)}{2!}x^{2} + \cdots \) as the fallback template. This wasn't automatic — needed prompting.
- FRAGILE — **Variable-scope clarity in the series.** The \( x \) in \( f(x) = \tan x \) and the \( x \) in the assembled series ARE the same variable. Momentary confusion here suggests weak grip on what "the Maclaurin series of \( f(x) \)" actually IS.

### Q6 redo requirement
- Next Cluster 1 session must revisit Q6 (Archetype 6) with graph front-and-centre. The SVG is embedded in the Solution reveal; consider surfacing a partial sketch in the Example stem as scaffolding, OR add a "sketch the sign diagram first" scaffold step before the classification.

## 2026-07-02 — Cluster 1 continuation, Q6 (retry), Q9, Q10

### Archetype 6 — RETRY (previously skipped)
- 2026-07-02 | A6 example | Sign analysis correct: \( x < 1 \) → decreasing, \( 1 < x < 3 \) → increasing, \( x > 3 \) → still increasing. Correctly identified \( x = 1 \) as local min and \( x = 3 \) as stationary point of inflexion. | correct method | FRAGILE
- 2026-07-02 | A6 | CORE CONCEPTUAL BREAKTHROUGH mid-session: he was confused about the SKETCH because he was trying to sketch \( y = f(x) \) instead of \( y = f'(x) \). Realisation: "you are stating the values of X. So are you saying that this graph is FX, which is not like this graph here?" — the sketch is of \( f' \), not \( f \). Once this landed, everything clicked. | conceptual gap resolved | ACTIVE (needs one more clean rep)
- 2026-07-02 | A6 practice — sketching f' from features of f | Correctly translated: max of \( f \) at \( (-2, 5) \) → \( f'(-2) = 0 \) crossing \( + \to - \); min of \( f \) at \( (1, -3) \) → \( f'(1) = 0 \) crossing \( - \to + \); inflexion of \( f \) at \( x = 4 \) → turning point of \( f' \) (not a crossing). Worked out the shape by tracing the gradient region-by-region. | correct after struggle | FRAGILE
- 2026-07-02 | A6 practice | Extended time spent on gradient reasoning ("is it increasing or decreasing? is the gradient positive?"). Good process — but needs to internalise as reflex, not re-derive each time. | slow but correct | FRAGILE

### Archetype 9 — Maclaurin by combining standard series
- 2026-07-02 | A9 example — ln(cos 2x) | First attempt: tried to compute \( \ln(\cos 2x) \) by expanding \( \cos 2x \), then just "log-ing" the terms directly. Wrong — you can't distribute ln over a sum. | wrong first attempt | ACTIVE
- 2026-07-02 | A9 example | UNLOCK MOMENT: after prompting, understood that the trick is to set \( \cos 2x = 1 + u \) where \( u = -2x^{2} + \tfrac{2}{3}x^{4} - \ldots \), then use standard series \( \ln(1+u) \). "That is so fucking smart, bro. I didn't think of that." | conceptual insight | ACTIVE (needs rep to consolidate)
- 2026-07-02 | A9 example | Made assembly error in the final coefficient (he wrote fragments that don't quite line up). Method understood; execution needs a rep. | correct method, sloppy execution | FRAGILE
- 2026-07-02 | A9 practice — e^x sin 2x | Correctly multiplied the two series up to \( x^{3} \). Method clean: expand each, multiply keeping only terms up to target degree. | correct method | CLOSED (method)
- 2026-07-02 | A9 practice | CALCULATION ERROR: computed \( \sin 2x \approx 2x - \tfrac{(2x)^{3}}{3!} \) but simplified \( \tfrac{(2x)^{3}}{6} \) to \( \tfrac{2x^{3}}{3} \) instead of \( \tfrac{4x^{3}}{3} \). \( (2x)^{3} = 8x^{3} \), not \( 2x^{3} \). Missed the cubing of the 2. | arithmetic slip | ACTIVE
- 2026-07-02 | A9 | Meta-insight, articulated: "whenever I see two or more variables and they look like they can be found in MF27, I instantly know that it's a Maclaurin combine." Correct trigger recognition. | trigger recognised | CLOSED

### Archetype 10 — Maclaurin by repeated implicit differentiation
- 2026-07-02 | A10 example (i) | Set up implicit differentiation cleanly. Got \( 3y^{2}y' + 2yy' + y' = 2x - 2 \), substituted \( x = 0, y = 0 \), correctly got \( y'(0) = -2 \). | correct + confident | CLOSED
- 2026-07-02 | A10 example (ii) | MAJOR METHOD ERROR: attempted to differentiate the GROUPED form \( y' = \dfrac{2x-2}{3y^{2}+2y+1} \) using the quotient rule for the second derivative. Massively over-complicated. Correct method is to differentiate the pre-grouped implicit equation \( 3y^{2}y' + 2yy' + y' = 2x - 2 \) directly. | wrong method choice | ACTIVE
- 2026-07-02 | A10 example (ii) | After correction, wrote \( \tfrac{d^{2}y}{dx^{2}} = 6 \). CORRECT VALUE IS \( -6 \). Sign error in the calculation: forgot that at \( x = 0, y = 0, y' = -2 \), the term \( 2(y')^{2} = 2 \cdot 4 = 8 \) is POSITIVE, and \( 8 + y'' = 2 \) gives \( y'' = -6 \). He got \( +6 \), propagating to a wrong Maclaurin series (\( -2x + 3x^{2} \) instead of \( -2x - 3x^{2} \)). | sign error → wrong series | ACTIVE
- 2026-07-02 | A10 practice — \( e^{y} = 1 + \sin x \) | Set up: \( e^{y}\dfrac{dy}{dx} = \cos x \). At \( x = 0, y = 0 \): \( 1 \cdot y' = 1 \Rightarrow y'(0) = 1 \). | correct | CLOSED
- 2026-07-02 | A10 practice | CONFUSION: on second differentiation, forgot that LHS \( e^{y}\dfrac{dy}{dx} \) needs PRODUCT RULE (both factors depend on \( x \) — the \( e^{y} \) implicitly, the \( y' \) explicitly). Got it eventually: "Oh, this is product rule though. So I leave this here, I differentiate this…" | resolved mid-solve | FRAGILE
- 2026-07-02 | A10 practice | Got \( y''(0) = -1 \). Assembled Maclaurin: y ≈ 0 + x + \tfrac{-1}{2}x^{2} = x - \tfrac{1}{2}x^{2} \). | correct | FRAGILE
- 2026-07-02 | A10 practice | SMALL CONCEPTUAL GAP: momentarily confused about why the first term (\( y(0) \)) is 0. Got there: "when x is zero, y is x. X is zero, therefore the front is zero." The Maclaurin \( f(0) \) term IS the value of the function at zero, and here \( y(0) = 0 \). | resolved | FRAGILE
- 2026-07-02 | A10 practice | ANOTHER SMALL CONFUSION: why the answer uses \( \approx \) not \( = \). Got it: "because you chop the series off, so it's approximate." Good insight. | resolved | CLOSED

### Cross-cutting patterns flagged this session (Q6 + Q9 + Q10)
- ACTIVE — **"Never differentiate a GROUPED derivative for the second derivative."** Q10 gap. When you have \( y' = P(x,y)/Q(x,y) \) from implicit differentiation, DO NOT quotient-rule it for \( y'' \). Instead, go back to the pre-grouped implicit equation and differentiate that. Way cleaner. This is a mark-scheme convention worth internalising.
- ACTIVE — **Sign hygiene when substituting negative intermediate values.** Q10: forgot that \( (y')^{2} = 4 \) (positive) when \( y' = -2 \). Squared negative → positive. Similar slip on Q7 last session. Fix: circle intermediate values with their signs before substituting.
- ACTIVE — **Arithmetic on \( (kx)^{n} \).** \( (2x)^{3} = 8x^{3} \), not \( 2x^{3} \). Q9 practice. Small but costly.
- FRAGILE — **Sketching f' from features of f (or vice versa).** Concept locked this session but slow to execute. Needs repetition to become reflex.
- FRAGILE — **Product rule recognition on LHS of implicit diff.** Q10 practice: \( \dfrac{d}{dx}[e^{y}\,y'] \) — both factors depend on \( x \), so product rule is mandatory. Momentary confusion here. Habit: "any product of two things that both depend on \( x \) triggers product rule."
- CLOSED — **Trigger recognition for combining standard Maclaurin series.** He articulated it correctly: two MF27 candidates in the same expression → combine (multiply or substitute).

## 2026-07-02 (cont.) — Q11 + Q12

### Archetype 11 — Range of Convergence / Validity
- 2026-07-02 | A11 example | Confusion on `|3x²| ≤ 1 → |x| ≤ 1/√3`. Asked "why is it equal to one third? I don't get that". Root cause: solving nonlinear absolute-value inequalities. Managed the linear cases but stumbled on the square-root step. | conceptual gap on inequality manipulation | ACTIVE
- 2026-07-02 | A11 example | Question about `ln(1+u)` domain: "why bracket bracket square bracket on ln?" — confused about why `−1 < x ≤ 1` (strict on left, closed on right). Root cause: `ln(0)` undefined so `x = −1` excluded; `ln 2` defined so `x = 1` allowed. Small conceptual gap on domain of ln. | knowledge gap on domain | FRAGILE
- 2026-07-02 | A11 practice — (4−x)^(−1/2) | Correctly factorised `4 − x = 4(1 − x/4)`. Got `n = −1/2` and `u = −x/4`. Then wobbled solving `|−x/4| < 1 → |x| < 4`. Eventually got it. | correct method, slow | FRAGILE

### Archetype 12 — Small-Angle Approximation in Trig / Applied Context
- 2026-07-02 | A12 | Momentarily confused: "sine leads to x, tangent leads to x, cosine leads to 1 − x²/2 — but is tan x really ≈ x?" Weak recall of the three standard approximations. | knowledge gap | ACTIVE
- 2026-07-02 | A12 example — `(sin 3x)/(1 − cos 2x)` | Correctly substituted `sin 3x ≈ 3x` and `1 − cos 2x ≈ 2x²`. Got `3/(2x)`. | correct | FRAGILE
- 2026-07-02 | A12 practice — `(tan x − sin x)/x³` | CORE INSIGHT UNLOCKED: "if leading-order cancels, go to the next term." This was the missing piece. Got it: `tan x ≈ x + x³/3`, `sin x ≈ x − x³/6`, subtract to get `x³/2`, divide by `x³` gives `1/2`. Loud epiphany moment. | insight resolved | ACTIVE (needs one clean rep)
- 2026-07-02 | A12 | Related meta-question: "is small-angle in MF27?" — checked the PDF, found: sin/cos series ARE in MF27, but small-angle approximations are NOT listed as a labelled section. tan x's Maclaurin series also NOT in MF27. Practical answer: cite from Maclaurin for sin/cos, memorise tan x ≈ x. | fact acquired | CLOSED

### Cross-cutting patterns (Q11 + Q12)
- ACTIVE — **Inequality manipulation with substituted variables.** `|g(x)| < 1` when `g(x) = 3x², −x/4, 2x²` etc. Root patterns: (1) solve for the variable step by step; (2) don't skip; (3) square roots require care on signs.
- ACTIVE — **"When leading-order cancels, go to the next term."** Critical Maclaurin insight. `tan x − sin x` looks like it should be 0 at leading order — but keeping second-order terms gives the actual answer. This unlocks a huge class of exam questions.
- FRAGILE — **Small-angle memorisation (all three).** MF27 gives you sin/cos via Maclaurin truncation. tan x ≈ x needs memorisation. Drill this until it's reflex.

## END OF CLUSTER 1 SUMMARY

Full sweep across Archetypes 1–12 completed 2026-06-21 → 2026-07-02.

### Persistent ACTIVE gaps to close in the next round:
1. **Chain-rule-on-y in implicit differentiation** — the classic `2y·dy/dx` vs `2·dy/dx` trap. Seen in Q1 first pass.
2. **Standard-derivative recall** — `sec x`, `tan x` etc. Not automatic. Confused differentiation with integration once (Q8).
3. **Sign hygiene** — negative intermediates squared → positive (Q7, Q10). Circle signs before substituting.
4. **Full substitution habit** in `(1+u)^n` — substitute `u = g(x)` through EVERY term, not just the first.
5. **"Describes method, doesn't finish execution"** — Q5, Q6 pattern. Setup laid out but final value not computed.
6. **"Never differentiate the grouped `dy/dx` for f''"** — Q10. Differentiate the pre-grouped implicit equation.
7. **General Maclaurin formula anchor** — `f(x) ≈ f(0) + f'(0)x + …` not automatic when function isn't in MF27.
8. **Inequality manipulation for range of validity** — Q11.
9. **"When leading-order cancels, go next term"** — Q12 insight.

### Persistent FRAGILE gaps (need one more clean rep):
- Sketching y = f' from features of f
- Product rule recognition on LHS of implicit differentiation
- Full substitution in Maclaurin
- Small-angle memorisation of tan x ≈ x
- Trust at the algebraic tidy-up step (finish to AG form)

### CLOSED (single-rep or confident):
- Trigger recognition for connecting substitution / Maclaurin / implicit diff patterns
- Combining standard Maclaurin series (multiplication)
- General method for parametric differentiation (Q2)
- Recognition that small-angle sin/cos can be cited from MF27's Maclaurin series

## Format reminder
`YYYY-MM-DD | archetype # | what went wrong | confidence | gap state`
