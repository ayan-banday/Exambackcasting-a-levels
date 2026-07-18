# Flags — Calculus > Integration_Techniques_And_Applications (Cluster 2)

> Append-only. Each session that exercises this cluster adds an entry below.
> Format: `YYYY-MM-DD | card # | what went wrong | confidence | gap state`

## 2026-07-02 — Cluster 2 walkthrough, Q1–Q6

### Question 1 — Reverse chain rule pattern recognition
- 2026-07-02 | Q1 example (\( \int 6x^{2}/(x^{3}+4)\,dx \)) | Correctly identified \( f'/f \) pattern. Pulled out factor of 2 correctly (numerator = 2·3x², where 3x² is derivative of x³+4). Momentary confusion mid-sentence — wrote "3x²" as the argument of ln, then self-corrected to "x³+4". | correct after self-correction | CLOSED
- 2026-07-02 | Q1 practice (\( \int x^{2}\,e^{x^{3}+2}\,dx \)) | Cleanly identified \( f'e^{f} \) pattern. Balanced with 1/3 factor because integrand has x² not 3x². Result \( \tfrac{1}{3}e^{x^{3}+2} + C \). Articulated the decision rule: "find the main one, differentiate to check derivative, balance with constant if needed." | confident + correct | CLOSED
- 2026-07-02 | Q1 | ARTICULATED META-RULE: "whenever there's a division and an integrate sign, it's f'/f" and "whenever there's a product where one factor is close to the derivative of the other, it's reverse chain rule for powers/exp." Correct trigger recognition. | trigger locked | CLOSED

### Question 2 — Trig integration via identities
- 2026-07-02 | Q2 example (\( \int_{0}^{\pi/4}\sin^{2}(2x)\,dx \)) | INITIAL ERROR: tried to apply reverse chain rule directly on \( \sin(2x) \) — brought down a factor of 2 to get \( -\tfrac{1}{4}\cos 2x \) treating it as if the integrand was \( \sin 2x \), not \( \sin^{2}(2x) \). Got answer 1/4 (wrong). | wrong method | ACTIVE
- 2026-07-02 | Q2 | UNLOCK MOMENT: "there's no formula to integrate \( \sin^{2} \) anything." Recognized trig POWERS have no direct antiderivative. Identity-first reflex required. | conceptual insight | FRAGILE
- 2026-07-02 | Q2 | ARTICULATED ALGORITHM for trig powers in integration:
  - **Even power** (sin², cos²) → double angle identity directly
  - **Odd power** (sin³, cos³) → peel off one factor, convert remaining even power using sin²+cos²=1, substitute u = cos x (or sin x)
  - **tan²** → sec²x - 1 immediately (memorise the identity)
  Second attempt gave correct answer \( \pi/8 \) using identity method. | algorithm articulated | FRAGILE (needs one more clean rep)
- 2026-07-02 | Q2 self-test (\( \int \sin^{3}(2x)\,dx \)) | Attempted a self-generated harder case (odd power). Correctly peeled off one sin(2x), converted sin²(2x) = 1 - cos²(2x), substituted u = cos(2x), du = -2sin(2x)dx. Recognized the -1/2 factor to balance. Nailed the algorithm. | correct + confident | CLOSED (single rep)
- 2026-07-02 | Q2 practice (\( \int_{0}^{\pi/3}\tan^{2}x\,dx \)) | Immediate application of tan²x = sec²x - 1. Got \( \sqrt{3} - \pi/3 \). Clean. | correct + confident | CLOSED

### Question 3 — MF27 Inverse-trig standard forms
- 2026-07-02 | Q3 example (\( \int_{0}^{2} 1/\sqrt{16-x^{2}}\,dx \)) | Correctly identified a² = 16, a = 4, form sin⁻¹(x/4). | correct | FRAGILE
- 2026-07-02 | Q3 | GAP: special angle recall. Wrote sin⁻¹(1/2) as a decimal (0.52) initially before catching himself: "no no no, presentation error because it's a special angle." Had to reason through: draw triangle → 30° → π/6. Not automatic. | knowledge gap | ACTIVE
- 2026-07-02 | Q3 practice (\( \int_{0}^{3} 1/(9+x^{2})\,dx \)) | Cleaner execution. tan⁻¹(1) = π/4 recognized as special angle immediately. Result π/12. | correct + confident | CLOSED
- 2026-07-02 | Q3 | KEY META-RULE ARTICULATED: "one over a² plus x² → tan⁻¹; one over root a² minus x² → sin⁻¹; always convert to purely x², identify a by square-rooting, apply." | trigger locked | CLOSED

### Question 4 — MF27 Log standard forms
- 2026-07-02 | Q4 example (\( \int 1/(x^{2}-9)\,dx \)) | Clean. Got \( \tfrac{1}{6}\ln\|(x-3)/(x+3)\| + C \). | correct | CLOSED
- 2026-07-02 | Q4 | IMPORTANT SELF-TAUGHT DISCIPLINE: "always remember to put absolute value when you solve these kind of questions." | good habit locked | CLOSED
- 2026-07-02 | Q4 practice (\( \int_{0}^{1} 1/(4-x^{2})\,dx \)) | Applied \( \tfrac{1}{2a}\ln\|(a+x)/(a-x)\| \). Result \( \tfrac{1}{4}\ln 3 \). | correct | CLOSED

### Question 5 — Integration by given substitution
- 2026-07-02 | Q5 example (\( \int_{0}^{1} x/(1+x^{2})^{3}\,dx \) with u=1+x²) | Clean five-step execution: (1) list substitution, (2) differentiate du = 2x dx, (3) substitute — recognized needed 1/2 factor to balance x dx vs du, (4) integrate to get -1/(4u²), (5) substitute back (though could have changed limits — both work). Result 3/16. | confident + correct | CLOSED
- 2026-07-02 | Q5 practice (\( \int_{1}^{e} (\ln x)^{2}/x\,dx \) with u = ln x) | Clean. du = (1/x) dx fits naturally. Integrated u²/3. Result 1/3. Explicitly articulated: "replace u back before adding limits because the e and 1 represent x, not u" — reasonable but note that changing limits at substitution time also works (e → u=1, 1 → u=0). Both valid. | confident + correct | CLOSED
- 2026-07-02 | Q5 | ARTICULATED ALGORITHM (5 steps): list substitution → differentiate → substitute integrand → integrate in u → substitute back / evaluate. Clean recall. | procedure locked | CLOSED

### Question 6 — Integration by Parts (single)
- 2026-07-02 | Q6 example (\( \int_{0}^{1} x\,e^{-x}\,dx \)) | GOOD DECISION PROCESS: first checked if reverse chain rule fits (\( \tfrac{d}{dx}(e^{-x}) = -e^{-x} \), integrand has extra x, doesn't fit). Then switched to IBP. Articulated the decision rule: "product-form integrand — try reverse chain rule first (eyeball for derivative pattern); if that doesn't fit, IBP." | correct triage | CLOSED
- 2026-07-02 | Q6 | GAP: FORMULA RECALL. "I forgot the overall formula. I don't think it's MF27, is it? No, it's not inside here." Correct — IBP is NOT in MF27, must be memorised as \( \int u\,dv = uv - \int v\,du \). | knowledge gap | ACTIVE
- 2026-07-02 | Q6 | NOTATION CONFUSION: he wrote "d(uv) = uv - vdu" — that's wrong notation. Correct: \( \int u\,dv = uv - \int v\,du \). The `d(uv)` is a differential (product rule going forward: `d(uv) = u dv + v du`), not the antiderivative. The IBP formula reverses that. Habit fix: write formula at top of working. | notational gap | ACTIVE
- 2026-07-02 | Q6 | LIATE applied correctly: u = x (Algebraic), dv = e^(-x) dx. du = dx, v = -e^(-x). Applied formula, got \( 1 - 2/e \). | correct execution | FRAGILE
- 2026-07-02 | Q6 practice (\( \int x\sin 3x\,dx \)) | Cleaner. u = x, dv = sin 3x dx. du = dx, v = -cos(3x)/3. Applied formula: \( -\tfrac{x}{3}\cos 3x + \tfrac{1}{3}\int \cos 3x\,dx \). Correctly identified integral of cos as sin (with 1/3 factor for chain), got \( -\tfrac{x}{3}\cos 3x + \tfrac{1}{9}\sin 3x + C \). | correct | FRAGILE
- 2026-07-02 | Q6 | HESITATION at final sign step: "What's that plus? What's that minus?" — sign tracking through IBP is not yet automatic. | sign hygiene gap | FRAGILE

## Cross-cutting patterns (Q1–Q6)

### CLOSED (this session)
- Trigger recognition across all six cards (f'/f, f'e^f, f'f^n, trig identity, MF27 form, substitution, IBP)
- Reverse chain rule vs IBP decision rule
- Absolute value discipline in log integrals
- Substitution 5-step algorithm

### ACTIVE gaps needing more reps
- **IBP formula recall** — memorise \( \int u\,dv = uv - \int v\,du \). Not in MF27.
- **IBP formula notation** — write correctly, don't confuse with product rule differential
- **Special angle recall** — sin⁻¹(1/2), cos⁻¹(1/2), tan⁻¹(1), tan⁻¹(√3) etc. Drill the exact-value table until reflex.
- **Trig-power identity-first reflex** — first instinct was reverse-chain on sin²(2x); should have been identity. One clean rep secured; needs more.

### FRAGILE
- **Identity-first reflex for trig powers** — algorithm articulated cleanly, one rep secured. Needs 3-5 more reps to become reflex.
- **Sign hygiene through IBP steps** — hesitation on final signs. Track signs step-by-step until automatic.

### Additional flag (post-hoc catch)
- 2026-07-02 | Q6 practice | Missed the double-negative in \( -\int v\,du \) when \( v \) itself is negative. For \( \int x\sin 3x\,dx \) with \( v = -\tfrac{1}{3}\cos 3x \): \( -\int v\,du = -\int -\tfrac{1}{3}\cos 3x\,dx = +\tfrac{1}{3}\int\cos 3x\,dx \). He tracked it as if the first minus was already absorbed. Self-corrected: "shit, it's --, it becomes a +." | sign-tracking gap | ACTIVE
- **The habit to lock:** write out the formula literally with the negative sign, then substitute \( v \) with its own sign preserved (parentheses around negative v). Two negatives cancel to a plus. This is exactly the "circle-signs-before-substituting" habit from Cluster 1 flags, applied to IBP.

## 2026-07-03 — Cluster 2 continuation, Q7–Q10

### Question 7 — IBP Cyclic (\( e^{x}\sin x \) type)
- 2026-07-03 | Q7 example (\( \int e^{x}\sin x\,dx \)) | Correctly identified as IBP. First IBP: u = sin x, dv = e^x dx. Got \( e^{x}\sin x - \int e^{x}\cos x\,dx \). Momentary confusion "this is double integration by parts, doesn't make sense?" — hadn't yet seen the cyclic trick. | correct start, confused mid | ACTIVE
- 2026-07-03 | Q7 | UNLOCK: "Let I = ∫e^x sin x dx" — after prompting, saw the trick. Second IBP on remaining ∫e^x cos x dx brings back I. Set up equation, solved: I = ½(e^x sin x − e^x cos x) + C. "Wah bro, that is smart, bro." | conceptual breakthrough | FRAGILE
- 2026-07-03 | Q7 | ARTICULATED 6-STEP ALGORITHM: (1) spot exponential × trig integrand, (2) let I = the integral, (3) first IBP, (4) second IBP on remaining piece, (5) recognise I reappears — move to same side, (6) solve algebraically for I. Clean articulation. | procedure locked | CLOSED
- 2026-07-03 | Q7 practice (\( \int e^{2x}\cos x\,dx \)) | Executed the algorithm. Got 5/4 I on LHS, solved I = (e^{2x}/5)(2cos x + sin x) + C. Small hiccup: didn't state the final boxed answer explicitly; trailed off. | correct method, weak final articulation | FRAGILE
- 2026-07-03 | Q7 | TRIGGER RECOGNITION locked: "exponential times trig → cyclic IBP with let-I trick." | trigger locked | CLOSED

### Question 8 — Partial Fractions then Integrate
- 2026-07-03 | Q8 example (i) — decomposition | Set up \( \dfrac{3x+5}{(x+1)(x-2)} = \dfrac{A}{x+1} + \dfrac{B}{x-2} \). Cleared denominators, expanded: 3x+5 = A(x-2) + B(x+1) → Ax + Bx and -2A + B. Compared coefficients: A+B=3, -2A+B=5. Solved A = -2/3, B = 11/3. Clean. | confident + correct | CLOSED
- 2026-07-03 | Q8 example (ii) — integrate | "Just split them up." Integrated each piece as \( \int \tfrac{A}{x+c}\,dx = A\ln\|x+c\| \). Result: -2/3 ln|x+1| + 11/3 ln|x-2| + C. | correct | CLOSED
- 2026-07-03 | Q8 | INSIGHT ARTICULATED: "always pull the constant out at the start — allows immediate f'/f pattern." Good habit locked. | habit locked | CLOSED
- 2026-07-03 | Q8 practice (\( \int \tfrac{4}{x^2-4}\,dx \)) | Factored denominator, decomposed, solved A = -1, B = 1. Integrated to -ln|x+2| + ln|x-2| + C. | correct | CLOSED
- 2026-07-03 | Q8 | LOG COMBINATION HABIT: "if you have ln A − ln B, combine to ln(A/B)." Applied here: ln|x-2| − ln|x+2| = ln|(x-2)/(x+2)| + C. Locked as habit. | habit locked | CLOSED

### Question 9 — Area Between Two Curves
- 2026-07-03 | Q9 example (\( y = x^{2},\; y = 2x+3 \)) | METHOD: (1) find intersections via graphing calculator — got x = -1, x = 3. (2) decide upper — line above parabola. (3) integrate (upper − lower). Result 32/3. | correct + confident | CLOSED (with GC crutch)
- 2026-07-03 | Q9 | MOMENTARY MEMORY GAP: "forgot the formula bro. If it's area, it's pi r squared no?" Circle-area formula intrusion. Corrected quickly. | brief confusion, resolved | FRAGILE
- 2026-07-03 | Q9 practice (\( y = x^{3},\; y = x \)) | Intersections at x = -1, 0, 1 (curves cross at origin). Region SPLIT into two pieces. Initially set limits at -1 to 1, then caught: "no it's not one and one bro, it's one and zero." Correctly identified need to split at x = 0. Took absolute value of negative-area piece. Got 1/2. | corrected mid-solve | FRAGILE
- 2026-07-03 | Q9 | X-COORDINATE-ONLY INSIGHT: "we're looking at the x coordinate only, not y" — for definite integral limits when area is w.r.t. dx. Y-values of intersection points are irrelevant to the setup. Locked. | insight locked | CLOSED
- 2026-07-03 | Q9 | ALGORITHM ARTICULATED: (1) plot on GC to see upper/lower, (2) find intersections (x-coords only), (3) top − bottom, (4) if curves cross → split at intersections and absolute-value negative pieces, (5) integrate, (6) evaluate, units². | procedure locked | CLOSED

### Question 10 — Volume of Revolution
- 2026-07-03 | Q10 | SELF-FLAGGED WEAKNESS: "I'm pretty sure my understanding of volume of revolution is a bit weak. Once you have harder questions I won't be able to solve it." Critical honesty. | conceptual weakness | ACTIVE
- 2026-07-03 | Q10 example (\( y = x^{2}+1 \), rotated about x-axis, x ∈ [0,2]) | Correctly identified V = π ∫ y² dx. Wrote out the setup. But work trailed off — didn't compute exact value. | setup correct, execution incomplete | ACTIVE
- 2026-07-03 | Q10 | CONFUSION about rotation axis: "if it's rotated about the y axis, then we need to have..." — sensed a distinction but didn't clearly articulate rearranging to x = g(y). | conceptual confusion | ACTIVE
- 2026-07-03 | Q10 practice (\( y = \sqrt{4-x^{2}} \), rotated about x-axis) | Plotted graph, found endpoints at x = ±2. Set up V = π ∫₋₂² (4-x²) dx correctly (√(4-x²) squared gives 4-x²). Said "something wrong" — but nothing was wrong! Didn't complete: this should give 32π/3 (which equals the volume of a sphere of radius 2, since we're rotating a semicircle). Failed to complete the calculation and validate the answer. | correct setup, no completion, no validation | ACTIVE
- 2026-07-03 | Q10 | MISSED THE SANITY CHECK: y = √(4-x²) is a semicircle; rotating about x-axis gives a full sphere. Sphere of radius 2 has volume 4/3 π (2)³ = 32π/3. This is a beautiful self-check for volume-of-revolution problems. | missed insight | ACTIVE

### Q6 revisit (Cluster 1) — recurring gap
- 2026-07-03 | Cluster 1 Q6 | THIRD SESSION on this card. Sign-table analysis executed correctly (\( x<1 \) → f' negative, \( 1<x<3 \) → f' positive, \( x>3 \) → f' positive). Correct classification of local min at x=1 and stationary inflexion at x=3. BUT: same sketch confusion recurs: "we're saying that this is decreasing. Isn't this increasing? Isn't this contradictory?" | recurring gap | ACTIVE
- 2026-07-03 | Cluster 1 Q6 | CORE UNRESOLVED DISTINCTION: he's mixing the graph of f (which describes what f is doing — going up or down) with the graph of f' (which is a function whose height is the value of f'). "f decreasing for x<1" describes f's direction; the sketch of y = f'(x) for x<1 shows f' BELOW the x-axis. Two different things. Needs one clean rep with side-by-side f vs f' visualisation to lock. | conceptual gap | ACTIVE

## Cross-cutting patterns from this session (Q7-Q10 + Q6 revisit)

### CLOSED
- IBP cyclic trigger recognition + 6-step algorithm
- Partial fractions + integration workflow
- Log combination habit (ln A − ln B = ln(A/B))
- "Pull constants out immediately" habit
- Area-between-curves algorithm (with GC)
- "X-coordinate only for definite integral limits" insight

### ACTIVE gaps
- **Volume of revolution — foundational understanding** (self-flagged as weak)
- **Rotation about x-axis vs y-axis mechanics**
- **Completing calculations to the final numerical value** (Q10 trailed off — same pattern as Cluster 1 "describes method, doesn't finish execution")
- **Sanity checking volume-of-revolution answers** (sphere-from-semicircle check missed)
- **f vs f' sketch distinction** (third session on Cluster 1 Q6 — must be resolved)
- **Sign hygiene through IBP steps** (from earlier — still fragile)

### FRAGILE
- IBP cyclic final answer articulation (correct method, weak articulation)
- Area between curves that cross (correct after self-correction, one more rep)
- Momentary formula intrusion under fatigue (circle area = πr² intrusion)

### META-PATTERN
- **Trigger recognition is strong** across the board — always identifies the right technique
- **Execution stops short of final answer** — Q10 practice trailed off. Q7 practice didn't state final I explicitly. Q2 (previous session) example missed the completion. This is the persistent "describes method, doesn't finish" pattern from Cluster 1.
- **Self-flagged weaknesses honestly** — Q10 "my understanding is weak" is very valuable. Critical self-awareness.


---

## 2026-07-18 — Mixed exam-paper transcript (Calculus items only)

Context: full mixed Maths paper, scored ~90%, self-reviewed as "too easy" (difficulty-calibration feedback in memory: `feedback_math_exam_paper_difficulty`). Calculus-scoped gaps:

- **Q5 area of region — misread the boundaries.** Region bounded by the curve, the **x-axis AND y-axis**; he only registered the y-axis, so integrated over the full curve span (−2 to 2) instead of the first-quadrant slice (0 to 2). Self-caught on review: *"I only read that it's bounded by the y-axis. If it's bounded by the x-axis and the y-axis, then you'll just be one of the corners, but you're just 2 and 0."* This is a **reading-discipline** gap, not a method gap — the integration itself was fine. State: **ACTIVE** (reading traps recur across topics — see Vectors Q13 "please read the question"). Target: a couple of area/volume questions where the bounding lines must be parsed carefully before setting limits.
- Efficiency note he raised himself: for `y = (x²+3x)/(x−1)`-type curves, differentiate the **split form** `x + something + c/(x−1)` rather than quotient-rule the whole thing. Good instinct — worth baking into a curve-sketching drill.
- Implicit differentiation, Maclaurin (1+3x), IBP (x²ln x), partial fractions (5x−4 over (x−2)(x−1)), volume of revolution, separable DE, Newton-cooling temperature: all landed **confidently and correctly**. Consistent with prior CLOSED states. Confirmed strong.

**Cross-topic pattern (log once, applies everywhere):** the recurring non-content error is **misreading the question** (Q5 boundaries here; the "unit vector" clause in Vectors Q13). Content mastery is high; the marks that leak are comprehension/discipline, not technique. Worth a periodic "read-the-stem-twice" drill or a discipline layer.

No new drill cluster from this paper. Logged per the always-log rule.
