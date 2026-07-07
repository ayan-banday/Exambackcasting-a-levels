# Flags — Calculus > Applications_And_Sketching_Mastery (Cluster 5)

> Gap-closing cluster built 2026-07-03 from Cluster 2 walkthrough (Q7–Q10) and recurring Cluster 1 Q6 sketching gap.
> Focus: volume of revolution, sketching y = f'(x) / y = f(x), area-splitting, execution discipline.

## Gaps this cluster was built to close (2026-07-03)

### ACTIVE at build time
- **Volume of revolution — foundational understanding** (self-flagged as weak on Cluster 2 Q10)
- **Rotation axis mechanics** — x-axis vs y-axis
- **Sketching y = f'(x)** — recurring gap, third session on Cluster 1 Q6
- **f vs f' distinction** — the core conceptual clarity
- **Completing calculations to the final value** — "describes method, doesn't finish execution" pattern
- **Sanity checking volume answers** (sphere-from-semicircle validation)

### FRAGILE at build time
- IBP cyclic final answer articulation
- Area between curves that cross — splitting

## 2026-07-06 — Cluster 5 walkthrough starts

### Q3 example (\( \int \sec^{2}(2x)\tan(2x)\,dx \))
- 2026-07-06 | Q3 | Recognized \( \frac{d}{dx}(\tan x) = \sec^{2}x \) — correct standard derivative recall. Then got tangled on how to reverse it into the integral. Tried to see if product rule applied backwards (looking for reverse product rule). | trigger confused | ACTIVE
- 2026-07-06 | Q3 | GAP: Where does the \( \tfrac{1}{4} \) come from? Two chained \( \tfrac{1}{2} \) factors: (i) \( \frac{d}{dx}[\sec(2x)] = 2\sec(2x)\tan(2x) \) — the chain-rule 2 means we need \( \tfrac{1}{2} \) balancing factor to match \( \sec(2x)\tan(2x) \). (ii) \( \int u\,du = u^{2}/2 \) — another \( \tfrac{1}{2} \). Combined: \( \tfrac{1}{2} \cdot \tfrac{1}{2} = \tfrac{1}{4} \). | conceptual gap on chained-half | ACTIVE
- 2026-07-06 | Q3 | Confused whether the answer needs substitution at all. "Why do you even need that? You don't need to do that." — actually you DO need to see that the integrand splits as \( \sec(2x) \cdot [\sec(2x)\tan(2x)] \), where the bracketed piece is (up to a factor of 2) the derivative of \( \sec(2x) \). Then \( u = \sec(2x) \) makes it \( \tfrac{1}{2}\int u\,du \). | substitution recognition weak | ACTIVE
- 2026-07-06 | Q3 | User frustration flagged: "I feel like fucking shit, bro." Note for future: this card exposes a specific missing sub-skill — recognizing when an integrand is (function) × (derivative-of-function) as a reverse-chain-rule setup with a chained scalar factor from the chain rule. The card assumed this skill; it isn't there yet. | frustration signal | ACTIVE
- 2026-07-06 | Q3 | Left mid-solve to "shift the two hours back" (work commitment). Card not completed. | interrupted | ACTIVE

### Sub-skill to build (specific gap surfaced)
- **Reverse chain rule with chained scalar factors** — the integrand \( \sec^{2}(2x)\tan(2x) \) has TWO scaling issues: (a) the "2x" inside means the derivative of the inner function contributes an extra 2, (b) integrating \( u^{n} \) contributes \( 1/(n+1) \). Both need to be tracked simultaneously. Every future sec/tan/exp with inner \( ax \) or \( ax + b \) will have this issue.
- **Suggested drill**: 10 quick reps of \( \int f(kx)\cdot f'(kx)\,dx \) type patterns with different \( k \) values, so the "1/k" balancing factor becomes reflex.

## 2026-07-07 — Cluster 5 continuation, Q3(ii), Q4, Q5, Q6

### Q3(ii) — sec/tan algorithm (built on the fly)
- 2026-07-07 | Q3(ii) example (\( \int \sec^{4}x\tan^{3}x\,dx \)) | UNLOCK: user articulated the decision rule cleanly:
  - If \( \sec^{n} \) with tangent that has NO power → \( u = \sec x \), \( du = \sec x\tan x\,dx \).
  - If \( \sec^{2} \) with tangent that HAS a power → \( u = \tan x \), \( du = \sec^{2}x\,dx \). Then convert excess \( \sec^{2n} = (1 + \tan^{2})^{n} \).
  Also explicitly noted: "when it's \( \sec^{4} \), always change it to \( 1 + \tan^{2}x \)." User quote: "holy shit, that's so smart bro. I got this now." | algorithm articulated | CLOSED
- 2026-07-07 | Q3 practice (i) (\( \int \tan^{5}x\sec^{2}x\,dx \)) | Applied algorithm: tangent has power → \( u = \tan x \), \( du = \sec^{2}x\,dx \). Result \( \tfrac{1}{6}\tan^{6}x + C \). | confident + correct | CLOSED
- 2026-07-07 | Q3 practice (ii) (\( \int_{0}^{\pi/4}\sec^{3}x\tan x\,dx \)) | Identified no-power tangent → \( u = \sec x \). Split \( \sec^{3}x\tan x = \sec^{2}x \cdot \sec x\tan x \). Integrated \( u^{2}\,du \). Momentary confusion on evaluating at \( x = \pi/4 \): forgot to change limits when in u-substitution mode for a definite integral. Corrected: at \( x = 0 \), \( u = \sec 0 = 1 \); at \( x = \pi/4 \), \( u = \sec(\pi/4) = \sqrt{2} \). Result \( (2\sqrt{2}-1)/3 \). | correct after slip | FRAGILE
- 2026-07-07 | Q3 practice | GAP: exact-value recall on trig at \( \pi/4 \). "What's pi over four by the way? Ugh." Needed to reconstruct \( \sec(\pi/4) = \sqrt{2} \). Should be reflex. | special angle table gap | ACTIVE
- 2026-07-07 | Q3 practice | ALSO GAP: forgot to change limits when doing u-substitution on a definite integral. Habit reminder: always update limits AT SUBSTITUTION TIME, not at the end. | u-sub limits gap | FRAGILE

### Q4 — tan x Maclaurin (with MAJOR conceptual gaps surfaced)
- 2026-07-07 | Q4 (i) show \( \tan x = x + x^{3}/3 + O(x^{5}) \) by division | HUGE EPIPHANY: "You cannot divide a series term by term; you have to multiply it. Instead of dividing by cos x, you rewrite it as \( \sin x \cdot (\cos x)^{-1} \)." User did NOT know this. | major conceptual gap | ACTIVE
- 2026-07-07 | Q4 | RELATED GAP: didn't know the binomial series \( (1 - u)^{-1} = 1 + u + u^{2} + \ldots \) User quote: "This wasn't even taught bro." Actually, this IS in MF27 as part of the \( (1+x)^{n} \) standard series with \( n = -1 \), but user hasn't internalised that it applies to the composed inverse. Then must plug \( u = -\cos x + 1 \) or similar to get \( (\cos x)^{-1} \). | derived gap | ACTIVE
- 2026-07-07 | Q4 | User's meta-question: "Are there any more like this, kind of gaps that I've not been taught yet?" YES — several. Deriving 1/f(x) via binomial. Deriving series for tan/sec by composition. These are IMPLICITLY in MF27 via \( (1+x)^{n} \) but the CONNECTION is not made. **Suggested addition for future clusters**: dedicated card on "how to derive series for functions NOT in MF27 by composition with binomial." | meta-gap | ACTIVE
- 2026-07-07 | Q4 (ii) limit \( (x - \sin x)/x^{5} \) | Actually per the current cluster the limit here is \( 1/(2x^{2}) \to \infty \), diverges. But user's clean discovery here: "if we do 0/0, it's too crude, we cannot find a limit. We have to expand until something can survive." Correctly articulated the "cancel-then-go-to-next-term" rule. | insight locked | CLOSED
- 2026-07-07 | Q4 practice (\( (\tan 2x - 2\tan x)/x^{3} \)) | Correctly expanded both terms to \( x^{5} \) order. Subtracted: \( 2x^{3} + 4x^{5} + \ldots \). Divided by \( x^{3} \): \( 2 + 4x^{2} + \ldots \). Limit as \( x \to 0 \) is 2. | correct | CLOSED
- 2026-07-07 | Q4 | LOCKED FACT (user's own summary): \( \tan x = x + x^{3}/3 + 2x^{5}/15 + \ldots \) — memorise. "Very important for us to remember." | fact locked | CLOSED

### Q5 — Trig-implicit + Taylor series (new concept)
- 2026-07-07 | Q5 (i) implicit diff of \( \sin(xy) + x^{2} = 1 \) at P(1, 0) | Correctly chain-ruled \( \sin(xy) \), product-ruled inside. Got \( \cos(xy)(y + xy') + 2x = 0 \). Substituted: \( 1 \cdot y' + 2 = 0 \Rightarrow y' = -2 \). User quote after: "there's no need to factorize this... just substitute the numbers in like when you're doing double differentiation." Correct — sub the point before rearranging. | correct + insight | CLOSED
- 2026-07-07 | Q5 (ii) 2nd derivative | Applied pre-grouped differentiation. Product rule on \( \cos(xy)(y + xy') \), giving \( -\sin(xy)(y+xy')^{2} + \cos(xy)(2y' + xy'') \). Substituted the point, got \( y'' = 2 \). | correct | CLOSED
- 2026-07-07 | Q5 (iii) Taylor series | MAJOR NEW CONCEPT DISCOVERED: Taylor series around \( x = a \), NOT the Maclaurin around 0. User quote: "Oh, the Taylor series. That's — so that's something new. Why is that not taught, by the way?"
  - Maclaurin: centered at 0, uses \( x^{n} \) terms.
  - Taylor: centered at \( a \), uses \( (x - a)^{n} \) terms.
  - Formula: \( f(x) \approx f(a) + f'(a)(x-a) + \tfrac{f''(a)}{2}(x-a)^{2} + \ldots \)
  For this Q: \( y(x) \approx 0 + (-2)(x-1) + \tfrac{2}{2}(x-1)^{2} = -2(x-1) + (x-1)^{2} \). | new concept absorbed | FRAGILE
- 2026-07-07 | Q5 (iii) validity | User's own insight: "Valid for when x - 1 is small, when x is close to 1." Correct — Taylor series validity is a small neighbourhood around the centre. | insight locked | CLOSED
- 2026-07-07 | Q5 practice (xy + cos y = 2 at (2, 0)) | Applied differentiation twice with pre-grouped method. Got \( y' = 0 \), \( y'' = 0 \). "Bro is it all zero?" — surprised but correct. Sometimes trig-implicit derivatives are flat at specific points. | correct + confident | CLOSED

### Q6 — Parametric-implicit hybrid
- 2026-07-07 | Q6 example (\( x = t^{2}, y = t^{3} - t \)) (i) \( dy/dx \) | Standard parametric. Got \( \frac{3t^{2} - 1}{2t} \). Clean. | correct | CLOSED
- 2026-07-07 | Q6 (ii) tangent parallel to x-axis | MOMENTARY CONFUSION between parallel to x-axis (dy/dx = 0) vs parallel to y-axis (dy/dx undefined / vertical tangent). User caught it: "Oh, no no no. Parallel to the y-axis, parallel to the x-axis. Tangent has to be zero." Habit fix: memorise the two triggers:
  - Parallel to x-axis → \( \frac{dy}{dx} = 0 \) → set NUMERATOR of \( dy/dx \) to zero.
  - Parallel to y-axis → \( \frac{dy}{dx} \) undefined → set DENOMINATOR of \( dy/dx \) to zero.
  | corrected mid-solve | FRAGILE
- 2026-07-07 | Q6 (ii) | Solved \( 3t^{2} - 1 = 0 \Rightarrow t = \pm 1/\sqrt{3} \). Got the two coordinates by substituting each. | correct | CLOSED

### Cross-cutting patterns from this session

#### CLOSED
- Sec/tan integration decision algorithm (u = sec vs u = tan)
- Pre-grouped implicit differentiation for d²y/dx² (habit locked from earlier sessions, applied cleanly here)
- "Substitute the point immediately, don't factorize" insight
- tan x Maclaurin series memorised: \( x + x^{3}/3 + 2x^{5}/15 + \ldots \)
- Cancel-then-go-to-next-term rule for limits

#### ACTIVE (new gaps surfaced)
- **Series division is really multiplication by inverse-series** — must derive \( (\cos x)^{-1} \) via binomial expansion. Not on autopilot.
- **Binomial expansion of \( (1+x)^{-1} \)** — user hadn't internalised. It IS derivable from MF27's \( (1+x)^{n} \) with \( n = -1 \), but the CONNECTION isn't there.
- **Special angle exact values** at \( \pi/4 \) etc. — needed prompting to reconstruct \( \sec(\pi/4) = \sqrt{2} \).
- **Meta-gap**: what else is "not taught" but derivable from MF27? User's own question is high-value: "Are there any more like this?" — YES. Suggested future card: comprehensive "deriving series NOT in MF27" (tan, cot, sec, csc, sinh, cosh etc.)

#### FRAGILE
- Taylor series (new concept, absorbed but needs a couple more reps)
- U-substitution: changing limits at substitution time (definite integrals)
- Parallel to x-axis vs y-axis decision (numerator vs denominator of dy/dx)

#### META
- User is enjoying the process: "Studying is so fun, I love studying." Positive signal — cluster is engaging without being overwhelming.
- User is articulating step-by-step algorithms explicitly after each card. This is the ideal encoding behaviour — extracting the pattern, not just solving individual problems.

## Format reminder
`YYYY-MM-DD | card # | what went wrong | confidence | gap state`
