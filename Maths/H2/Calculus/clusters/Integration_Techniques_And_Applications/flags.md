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

