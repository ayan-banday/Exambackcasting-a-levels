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

## 2026-07-08 — Cluster 5 completion, Q6–Q10

### Q6 — parametric-implicit hybrid (continued)
- 2026-07-08 | Q6 example (iii) show tangent at t=2 is (something involving 11x, 22x-27 as stated) | User caught that the stated target `11y = 22x - 27` didn't match actual computation. Computed correctly: at t=2, point (4, 6), gradient 11/4, tangent → 4y = 11x - 20. | correct execution, target mismatch flagged | CLOSED
- 2026-07-08 | Q6 example (iv) other intersection Q | Substituted parametric into tangent: 4t³ - 11t² - 4t + 20 = 0. Knew t=2 is a root (tangent touches at t=2 with multiplicity 2). Factored as (t-2)²(4t+5) = 0. Found t_Q = -5/4. | correct | CLOSED
- 2026-07-08 | Q6 | **BIG NEW CONCEPT: multiplicity of roots for tangent/normal intersection.**
  - Tangent → multiplicity 2 (touches curve at parameter, doesn't cross) → (t - t₀)² is a factor of the substituted equation
  - Normal → multiplicity 1 (crosses at parameter) → (t - t₀) is a single factor
  - User's own articulation: "multiplicity 1 = crosses like a normal cut; multiplicity 2 = touches and bounces off like a tangent; multiplicity 3 = touches and flattens (inflexion)."
  - This is a beautiful mental model. Locked. | conceptual insight locked | CLOSED
- 2026-07-08 | Q6 practice (parametric normal, find other intersection) | Applied algorithm: parametric diff → normal equation → substitute → factor with known root t=1 (multiplicity 1) → long division. Made long-division computational error mid-way, retried. Got quadratic t² - t - 5 = 0 → t = (1 ± √21)/2. | correct after slip | FRAGILE

### Q7 — Volume of revolution with trig curves
- 2026-07-07/08 | Q7 example ((sin x + cos x)² over [0, π/2]) | UNLOCK: recognized (sin x + cos x)² = sin²x + 2sinxcosx + cos²x = 1 + sin(2x) via identities. "Two trigonometric identity — sin²+cos²=1, and 2sinxcosx = sin(2x)." Executed cleanly. Result V = π²/2 + π. | confident + correct | CLOSED
- 2026-07-08 | Q7 practice ((1 + tan x)² over [0, π/4]) | Recognized needed tan² = sec² - 1. Expanded (1 + tan x)² = 1 + 2tan x + tan²x = 2tan x + sec²x. Integrated to 2ln|sec x| + tan x. Evaluated cleanly: V = π(ln 2 + 1). | confident + correct | CLOSED
- 2026-07-08 | Q7 | KEY LOCKED HABIT: "always just expand and see if there's any identities inside. Typically there is very obvious ones." | habit locked | CLOSED

### Q8 — Applied volume + connected rates (MULTIPLE ERRORS IN CARD)
- 2026-07-08 | Q8 example | ERROR IN CARD: stated target π(3ln3 - 2), correct answer is π ln 3. Card papered over this with "discrepancy check" language. **FIXED** on 2026-07-08. | card error | FIXED
- 2026-07-08 | Q8 practice | ERROR IN CARD: stated target 16π/5, correct answer is 96π/5. **FIXED** on 2026-07-08. | card error | FIXED
- 2026-07-08 | Q8 | HUGE CONCEPTUAL UNLOCK (user's own words): "The one that is being spun around is the one that is made the subject of." — for volume of revolution about y-axis, rearrange to x = g(y), then integrate x² dy. For x-axis rotation, keep y = f(x), integrate y² dx. THE ROTATED-ABOUT AXIS DICTATES WHICH IS THE SUBJECT. | conceptual insight locked | CLOSED
- 2026-07-08 | Q8 | INITIAL CONFUSION: user tried to "merge both together" (combine two curves) when only one curve was being rotated. Then caught himself. | corrected mid-solve | FRAGILE
- 2026-07-08 | Q8 practice (iii) connected rates | Applied: V(h) = πh⁵/405 → dV/dh = πh⁴/81. At h=3: dV/dh = π. Chain rule: 2 = π · dh/dt → dh/dt = 2/π. | correct | CLOSED
- 2026-07-08 | Q8 | REMINDER TO SELF: user requested "make sure you're covering everything" — also mentioned "solid disk or ring and washer" — these are outside 9758 syllabus (they're US calc concepts). But volume via cylinder minus curve (for annular regions) IS in scope. Confirm covered.

### Q9 — Cyclic IBP with harder integrand (HINT REMOVED)
- 2026-07-08 | Q9 example (∫ e^(2x) cos 3x dx) | Applied cyclic IBP algorithm from Cluster 2 Q7. First IBP: u=cos 3x, dv=e^(2x)dx. Second IBP: u=sin 3x, dv=e^(2x)dx. Substituted back, solved: I = (e^(2x)/13)(2cos 3x + 3sin 3x) + C. | correct | CLOSED
- 2026-07-08 | Q9 example (ii) definite integral | At π/6: cos(π/2)=0, sin(π/2)=1. Value: (3e^(π/3))/13. At 0: 2/13. Difference: (3e^(π/3) - 2)/13. | correct | CLOSED
- 2026-07-08 | Q9 practice (∫ x²eˣ sin x dx) | HAD A HINT in stem — **REMOVED** on 2026-07-08. User quote: "yeah I completely don't know how to do question nine. The practice. Why is this like that? What's cyclic? What's a cyclic IBP? Exponential time trig. Oh, if we see cyclic IBP, just apply the i rule."
- 2026-07-08 | Q9 practice | UNLOCK: for triple product (polynomial × exp × trig), do IBP with u = polynomial, dv = exp × trig (using the cyclic IBP result as v). Reduce polynomial power each round. | conceptual insight locked | FRAGILE (needs one more clean rep)

### Q10 — Multi-technique synthesis
- 2026-07-08 | Q10 (i) tangent to y = xe^(-x²/2) at P(1, e^(-1/2)) | Product rule with chain: dy/dx = e^(-x²/2)(1 - x²). At x=1: gradient = 0. Tangent horizontal at y = e^(-1/2). | correct | CLOSED
- 2026-07-08 | Q10 (ii) stationary points | dy/dx = 0 → x = ±1. Classified via d²y/dx²: local max at (1, e^(-1/2)), local min at (-1, -e^(-1/2)). | correct | CLOSED
- 2026-07-08 | Q10 (iii) area | Reverse chain rule: u = -x²/2, du = -x dx. Result: 1 - e^(-1/2). Note user checked: "there's no pi in front because it's area, not volume." Correct. | correct | CLOSED
- 2026-07-08 | Q10 (iv) volume | UNLOCK: "can I just square the area?" NO. For volume: π ∫ y² dx which requires actually computing ∫ x² e^(-x²) dx (different integrand than the area integral of ∫ x e^(-x²/2) dx). User quote: "Bro, okay, I'm cheeks at this, bro. Let me redo this." | conceptual insight locked | FRAGILE
- 2026-07-08 | Q10 practice — ln x = -1 | GAP: user momentarily thought "ln x doesn't ever go to -1." Actually ln is negative for x ∈ (0, 1). ln x = -1 → x = 1/e ≈ 0.37. | knowledge slip | ACTIVE
- 2026-07-08 | Q10 practice area via IBP | Applied IBP: u = ln x, dv = x dx. Result (e² + 1)/4. | correct | CLOSED

### Cross-cutting patterns from Q6-Q10 session

#### CLOSED
- Multiplicity model for tangent/normal intersection (multiplicity 1/2/3 = crosses/touches/flat)
- (sin+cos)² = 1 + sin(2x) identity
- (1+tan)² = 2tan + sec² via tan²=sec²-1
- Volume rotation subject rule: "what's rotated is made the subject of"
- Cyclic IBP for exponential × trig
- Area (no π) vs Volume (π and y²) distinction

#### ACTIVE
- ln x can be negative! ln x = -1 at x = 1/e. Basic property forgotten.
- Long division accuracy (Q6 practice)

#### FRAGILE
- Triple-product IBP (polynomial × cyclic-IBP result) — one rep only
- Volume-after-area recognition (must redo integral, can't square area)

### ⚠️ USER FEEDBACK ON CARD QUALITY (2026-07-08)
User explicitly flagged errors and rule violations in Cluster 5:

1. **"some of ur answers do not match the question please always run double check after creating a cluster make sure it's all correct"**
   - Q8 example: target π(3ln3 - 2) but correct answer πln3. FIXED.
   - Q8 practice: target 16π/5 but correct answer 96π/5. FIXED.

2. **"dont give any hints as well why are you giving hints"**
   - Q9 practice had "(Hint: this is TRIPLE product…)" — FIXED, removed.

3. **"when we sketch graph i want you to always sketch the actual graph and make it accurate"**
   - SVG sketches were rough Bezier approximations. Must be accurate to the function shape.

Rules added to memory `feedback_math_sheet_formats.md` under three CRITICAL headings.

## Format reminder
`YYYY-MM-DD | card # | what went wrong | confidence | gap state`
