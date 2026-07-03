# Flags — Calculus > Differentiation_Maclaurin_Mastery (gap-closing cluster)

> Append-only. Gaps surfaced from the 2026-06-21 → 2026-07-02 Cluster 1 walkthrough.
> This is the parallel of Integration_DE_Mastery (which drills gaps from Clusters 2 & 3).
> Study order: Cluster 1 → Cluster 2 → Cluster 3 → this cluster (or Integration_DE_Mastery).

## 2026-07-02 — cluster built

### Cross-cluster ACTIVE gaps at build time
- Chain-rule-on-y in implicit differentiation
- Standard derivative recall (sec, tan, sec², d/dx of composites)
- Sign hygiene when substituting negative intermediates
- Full substitution habit in `(1+u)^n` Maclaurin expansions
- "Describes method, doesn't finish execution" pattern
- "Never differentiate the grouped dy/dx for f''" — always differentiate the pre-grouped implicit equation
- General Maclaurin formula anchor (when function not in MF27)
- Inequality manipulation for range of validity
- "When leading-order cancels, go to next term" (small-angle)

### FRAGILE gaps at build time
- Sketching y = f' from features of f
- Product rule on LHS of implicit diff
- Trust at algebraic tidy-up (finishing to AG form)

## 2026-07-03 — Cluster 4 walkthrough Q1–Q10

### Question 1 — Implicit differentiation chain rule discipline
- 2026-07-03 | Q1 example | Clean execution. Chain rule on y² recognised (2y·dy/dx). Product rule on 2xy applied cleanly. Grouped, solved. Result: (-3x² - 2y)/(2x - 2y). | confident + correct | CLOSED
- 2026-07-03 | Q1 practice (sin y + xy² = x³) | Clean. Chain on sin y → cos y · dy/dx. Product rule on xy². Result 3x² - y²)/(cos y + 2xy). Explicitly said "this is too easy" — good confidence signal. | confident + correct | CLOSED

### Question 2 — Standard derivative reflex (sec, tan compositions)
- 2026-07-03 | Q2 example (differentiate sec(3x)) | Correctly applied chain rule bringing down the 3. Result 3 sec(3x)tan(3x). | correct | CLOSED
- 2026-07-03 | Q2 practice (sec²(2x)) | Rewrote as [sec(2x)]², chain rule twice. Bringing down the 2 for inner. Result 4 sec²(2x)tan(2x). | correct | CLOSED
- 2026-07-03 | Q2 | **CURIOSITY GAP FLAGGED BY USER**: "How do you integrate sec²(2x)tan(2x)?" This is a great question — it's the reverse chain rule f'(x)·f(x)^n pattern with f = sec(2x), f' = 2 sec(2x)tan(2x). Answer: substitute u = sec(2x), du = 2 sec(2x)tan(2x) dx, so integrand = (1/2) u du → (1/4) sec²(2x) + C. **File this for Cluster 5 harder version.** | new knowledge gap | ACTIVE

### Question 3 — Sign hygiene / d²y/dx² via pre-grouped differentiation
- 2026-07-03 | Q3 example (y² + xy = 4 at (0,2)) | First derivative got dy/dx = -1/2 cleanly. | correct | CLOSED
- 2026-07-03 | Q3 example — 2nd derivative | Applied "differentiate pre-grouped form" ✓ (habit from previous session). Made a self-flagged "careless mistake" on the differentiation step: forgot to differentiate the "y" in "+ y" term (should give another dy/dx). Retried and got answer correctly. | correct after slip | FRAGILE
- 2026-07-03 | Q3 practice (y³ + y = x² - 3x at (0,0)) | Similar structure. User declined to fully solve saying "it's the same thing" — but the pre-grouped method habit is locked. | procedure locked | CLOSED
- 2026-07-03 | Q3 | **META-REQUEST FROM USER**: "cluster like your new clusters that emerge from my knowledge gaps make them slightly more complex. Right now it's pretty simple. Make them slightly more complex — like variable additions that lay on top of the original knowledge gap, just make things a lot more harder so that our master the topic a lot easier."
  - Action for future clusters: harder = more variables, more chained substitutions, deeper compositions, more traps.

### Question 4 — Sketching y = f'(x) — MAJOR PERSISTENT GAP
- 2026-07-03 | Q4 example (f'(x) = (x+2)(x-1)²(x-4)) | STRUGGLED HEAVILY. Tried graphing calculator first for shape — but wasn't able to correctly translate the algebraic form to the sketch. Made asymptote misidentification queries ("is there an asymptote?"). No asymptotes since it's a polynomial. Ended up flagging: "this is a knowledge gap." | major gap | ACTIVE
- 2026-07-03 | Q4 | Sign diagram method eventually applied. Got: - + - + across the four regions (x<-2, -2<x<1, 1<x<4, x>4). But couldn't reliably translate signs into the shape of the graph. | method understood, execution weak | ACTIVE
- 2026-07-03 | Q4 practice (given f's features, sketch f') | STUCK REPEATEDLY. Tried multiple times. Extensive confusion between where zeros are (f' = 0), whether curve should be above/below axis, and what "concave up at x=5" means for f'. User escalated confusion: "yeah fuck this bruh okay I do not do question 4 at all Question 4 of cluster 4 that part really gets me". | unable to complete | ACTIVE
- 2026-07-03 | Q4 | USER OPINION: "the thing I don't think is tested like that bro. It's normally they give us a graph and then ask us to sketch YFX I don't think it's tested like that." **This is partially wrong** — the reverse direction (given f, sketch f') IS in the 9758 syllabus §5.1 and appears in past papers. Both directions are tested. This gap needs closing regardless.
- 2026-07-03 | Q4 | **DIAGNOSIS**: the root issue is still the f-vs-f' distinction we've been chasing for four sessions now. When asked to sketch \( y = f'(x) \) with information about f (max, min, inflexion), user cannot reliably decide where the sketch is above / below / touching / crossing the axis. Multiple attempts to reason step-by-step break down under complexity (more than 2 features). This card should be redesigned in Cluster 5 with:
  1. Explicit "translation table" (feature of f → feature of f')
  2. Multiple worked examples that go one direction, then the reverse, side by side
  3. Simpler starting scaffolding (1 max, 1 min) → build to complex (multiple features)
  4. Sanity check: at every zero of f', verify by asking "is f increasing or decreasing on each side?"

### Question 5 — Repeated implicit differentiation
- 2026-07-03 | Q5 example (x² + xy - y³ = 3 at (1, -1)) | User declared "Fucking destroy something now" — high confidence signal. Got dy/dx = 3/2 cleanly. Then for d²y/dx², applied pre-grouped method ✓. Small calculation errors mid-way, corrected. | confident, minor slips | CLOSED
- 2026-07-03 | Q5 practice | User skipped saying "it's the same thing". Locked at method. | procedure locked | CLOSED
- 2026-07-03 | Q5 | User observation: "This is the exact same thing" as Q3. **Suggests Q3 and Q5 are too similar and should be differentiated in Cluster 5 harder version** — maybe Q5 with a trig-implicit like sin(xy) = x².

### Question 6 — Full substitution in (1+u)^n Maclaurin
- 2026-07-03 | Q6 example ((1+4x)^(-2)) | Correctly identified n = -2, u = 4x. Applied full-substitution template (write series in u first, THEN substitute — the habit was locked from previous session). But made a sign slip initially: wrote "1 - 8x + ..." with wrong sign on x² term. Retried and got 1 - 8x + 48x² - 256x³ ✓. Range: |4x| < 1 → |x| < 1/4 ✓. | correct after slip | FRAGILE
- 2026-07-03 | Q6 practice ((1-6x)^(1/3)) | Flew through it. "Crushed it." | confident + correct | CLOSED
- 2026-07-03 | Q6 | Explicit user request: "The clusters four five and six that are generated from knowledge gaps have to be way harder bro this is way too straightforward."

### Question 7 — Range of validity
- 2026-07-03 | Q7 example ((9+4x)^(1/2)) | Initially tried to solve range directly without factoring. Realized error: "you always want to factor to get 1 + something". Factored (9)(1 + 4x/9), n = 1/2, u = 4x/9. Solved |4x/9| < 1 → |x| < 9/4 ✓. | correct after re-planning | FRAGILE
- 2026-07-03 | Q7 practice (ln(2+5x)) | Split via ln(2) + ln(1 + 5x/2). Applied range for ln: -1 < u ≤ 1. Solved -2/5 < x ≤ 2/5 ✓. | correct | CLOSED
- 2026-07-03 | Q7 | **LOCKED META-INSIGHT**: "whenever they say state the range of validity for Maclaurin series, when there's a ln it's always between minus one and one, less than AND equal to one." Correct: ln(1+u) valid for -1 < u ≤ 1 (asymmetric domain). | insight locked | CLOSED

### Question 8 — Small angle when leading order cancels
- 2026-07-03 | Q8 example ((x - sin x)/x³ ≈ 1/6) | Correctly recognized need to go beyond sin x ≈ x. Used sin x ≈ x - x³/6 (from full Maclaurin). Numerator = x³/6, divided by x³ = 1/6 ✓. | correct | CLOSED
- 2026-07-03 | Q8 practice ((tan x - x)/x³ ≈ 1/3) | Struggled initially because tan x Maclaurin series is NOT in MF27. Tried to derive from sin x / cos x. Working: sin x ≈ x - x³/6, cos x ≈ 1 - x²/2. Division: tan x ≈ (x - x³/6)(1 + x²/2 + …) ≈ x + x³/3 - x³/6 = x + x³/6. Wait — actually tan x ≈ x + x³/3 (standard). User's derivation via division scaffolded but not clean. | correct answer, messy derivation | FRAGILE
- 2026-07-03 | Q8 | **USER'S DERIVED INSIGHT**: "In the Maclaurin series, if they give tangent X is basically sine x over cosine x. sine x over 1 gives you the first, and then the next time you get by the next time gives you x over 3 over x cube over three." User is trying to derive tan x's series from division. **Cleaner rule to lock**: memorise tan x ≈ x + x³/3 + 2x⁵/15 + ... directly. This is critical for exams because tan x is NOT in MF27's Maclaurin section.

### Question 9 — General Maclaurin formula assembly (e^x sec x)
- 2026-07-03 | Q9 example | User's habit rule: "Next time I see something like this, just differentiate it out because I can differentiate it. Only when I can't, then I split." Applied general Maclaurin formula (from MF27). Factored to simplify differentiation. Executed cleanly. | confident + correct | CLOSED
- 2026-07-03 | Q9 practice (ln(1 + sin x)) | Applied general Maclaurin. Correct execution. | correct | CLOSED

### Question 10 — "Show that" discipline in parametric tangent
- 2026-07-03 | Q10 example (x = 2t², y = t³ show tangent = 3px/4 - p³/2 at t=p) | CLEANEST EXECUTION OF THE SESSION. Applied 4-step process (write equation of tangent, sub t=p to find point, sub t=p in gradient, expand+match to AG). Got y = 3px/4 - p³/2 ✓. "100% on this shit bra." | confident + correct | CLOSED
- 2026-07-03 | Q10 practice | Skipped saying he's got it. Procedure locked. | procedure locked | CLOSED

## Cross-cutting patterns from Cluster 4 session

### CLOSED (locked in this session)
- Chain-rule-on-y in implicit diff (finally a clean session)
- Standard derivatives (sec, tan compositions)
- "Differentiate pre-grouped form for f''" habit
- "Factor out to get 1+u before applying MF27" habit
- General Maclaurin formula assembly (f(0) + f'(0)x + ...)
- Range of validity — ln has asymmetric domain (-1 < u ≤ 1)
- "Show that" discipline — expand to match AG (Q10 was 100%)

### ACTIVE (recurring gaps not yet closed)
- **Sketching y = f'(x)** — fourth session now. The f-vs-f' distinction is still not reflex. Cluster 5's Q1-Q2 cards should help. Needs explicit "translation table" approach.
- **Integration of sec² · tan patterns** — user's curiosity gap. Future harder cluster material.
- **Sign hygiene on small algebra steps** — Q6 sign slip. Same pattern.

### FRAGILE
- tan x Maclaurin recall (not in MF27, must memorise x + x³/3 + ...)
- Complex Maclaurin assembly with multiple derivations

## USER REQUESTS FOR CLUSTER 5 AND FUTURE MASTERY CLUSTERS

Explicit ask (2026-07-03): **"make cluster five harder"** and **"make the clusters four five and six that are generated from knowledge gaps way harder — variable additions that lay on top of the original knowledge gap"**.

Interpretation for building future clusters:
1. Don't repeat simple mechanical variations
2. Compose techniques together — implicit + trig + parametric in same question
3. Add real-world context / longer stems / more sub-parts
4. Include the trap layer — every card should have at least one pitfall
5. Move from "recognise the technique" to "recognise + execute + verify + interpret"
6. Multi-part "show that" chains that require the previous part
7. Include the specific curiosity gaps user surfaced (like ∫ sec² · tan dx)

**Concrete additions for Cluster 5 harder version:**
- Q4 sketching cards need explicit translation-table approach and multiple worked examples
- Add card on integrating sec² · tan patterns (from user's curiosity)
- Q8 tan-x-not-in-MF27 needs a dedicated "memorise these" card
- Repeated implicit differentiation with a trig-implicit (sin(xy) = x²)
- Parametric + implicit hybrid question

## Format reminder
`YYYY-MM-DD | card # | what went wrong | confidence | gap state`
