# Flags — Calculus > Integration × Differentiation Gap Drill

> Append-only. Gaps surfaced from the redrill transcript of `cluster_math_intdiff.html` (19-Q main cluster, ~80% mastery reached).
> Format: `date | Q (main cluster) | what went wrong | confidence | gap state`

## 2026-07-25 — full redrill transcript of the 19-Q intdiff cluster

Ethan drilled the whole 19-question main cluster on Loom and streamed the transcript. Reached ~80% mastery (his call). Below = every gap surfaced, mapped to the actual card. Priority 1 (confident+wrong) listed first.

### PRIORITY 1 — confident-and-wrong / total blanks (ACTIVE)

- 2026-07-25 | Q10 (hemispherical bowl) | **ENTIRELY failed.** Could not prove the bowl volume by rotating the circle about the y-axis, nor set up the connected rate of change for draining. His words: "entire q10 f***ed." The whole "prove a volume by integration → feed into dV/dt = dV/dh·dh/dt" chain is missing. | blank | **ACTIVE — highest priority** |
- 2026-07-25 | Q7 (y²=x√(1−x)) | **Completely stumped on (i) and (ii); guessed and forgot the ±** when taking the square root of y². Area setup for a `y² = …` curve (need y=±√, symmetry) not there. | guessed/wrong | **ACTIVE** |
- 2026-07-25 | Q3ii / Q6 / Q1(inverse-trig-IBP family) | **Inverse-trig integration by parts — the #1 recurring blank.** Repeatedly could not see that after differentiating an inverse-trig function you use it as `u` in IBP with `dv = dx`. Also mis-set the numerator: when differentiating cos⁻¹(x²) the top is the derivative of the *inside* (2x), not 1. The f'(u)-numerator insight was a genuine unlock mid-transcript. | wrong then unlocked | **ACTIVE** |
- 2026-07-25 | Q18 (parametric area) | **Did not know parametric area.** Tried to build a Cartesian equation instead of `∫ y (dx/dθ) dθ`. His words: "I didn't know that parametric means you just need to include the y and then another dx/dt." | blank | **ACTIVE** |
- 2026-07-25 | Q8a (nature of stationary point) | **2nd derivative test was a complete gap** — had to research how to do it mid-question before he could answer. | blank | **ACTIVE** |

### PRIORITY 2 — right-but-hesitant / careless-but-costly (FRAGILE)

- 2026-07-25 | Q2a / Q5 (reverse chain) | **Constant balancing** — kept trying to put the raw derivative constant *outside* (e.g. "6 outside") instead of the reciprocal (−1/6), then compounding to 1/36. Concept right, execution slips. His words: "one of the main mistakes I made." | recurring slip | FRAGILE |
- 2026-07-25 | Q11 (parametric normal) | Forgot (i); on (ii) confused the **normal gradient** (should be −1/tangent gradient) and forgot that "point A" means state **both x and y**. Also the trig-identity simplification for the length part failed entirely ("some f***ing trick identity"). | hesitant/partial | FRAGILE |
- 2026-07-25 | Q12 (differentiate a log) | Differentiating ln(x+√(1+x²)) via f'/f with a compound argument — got tangled on where the √ came from; **mixed up log rules** (ln(ab)=ln a+ln b vs ln(a/b)=ln a−ln b) and tried to split ln(a+b). Recovered to "leave it as something/something." | hesitant | FRAGILE |
- 2026-07-25 | Q13/Q14 (cyclic/repeated IBP) | Concept solid (recognised IBP-twice / "let I ="), but careless copy errors on VDU. Also the volume-of-revolution tail needed x=tanθ. | correct+careless | FRAGILE |
- 2026-07-25 | Q13/Q9 (volume + x=tanθ) | The (x²+1)² expansion (not cancelling terms illegally), then tan²θ/sec²θ = sin²θ, then sin²θ via cos2θ=1−2sin²θ. Getting there but needs it reflexive. | hesitant | FRAGILE |
- 2026-07-25 | Q16 (binomial expansion) | Did not recognise the **(1+u)^n form until he factored out the constant** (1/√(9−x²) → (1/3)(1−x²/9)^(−1/2)); nearly went down the repeated-differentiation path. His words: "great question, should be tested again." | unlocked | FRAGILE |
- 2026-07-25 | Q18 (1−cosθ identity) | The **1−cosθ = 2sin²(θ/2)** and sinθ=2sin(θ/2)cos(θ/2) identities for showing dy/dx = cot(θ/2) — did not see it until prompted. "be very observant for 1−cosθ, they always test that." | hesitant | FRAGILE |
- 2026-07-25 | Q17/Q19 (partial fractions) | Splitting (3x+8)/(x²+9) into f'/f (→ln) + constant/(x²+a²) (→tan⁻¹). Two arithmetic mistakes but concept right. | correct+careless | FRAGILE |
- 2026-07-25 | Q1 (hence integrate directly) | Over-complicated a "given dy/dx, hence integrate" into IBP when he should just reverse the derivative directly. | wrong then saw it | FRAGILE |
- 2026-07-25 | Q15 (IBP vs substitution) | Cardinal rule for choosing `u` ("u should get simpler when differentiated") + "change EVERYTHING to u, including inside dx" — landed it but wants reinforcement. | correct | FRAGILE |

### CLOSED / confirmed strong this run

- Q4 d/dx(cot x) from first principles; Q4b sin2x·tan x = 2sin²x; Q5 product rule + reverse; Q9 turning points; Q12ii/iii once the derivative was found; Q19 partial-fraction area ("solid").

### Recurring META-PATTERNS (surfaced in the summary to Ethan)

1. **Inverse-trig integration is the single biggest hole** — differentiate the inverse function (chain: derivative of the inside on top), then it's `u` in IBP with `dv = dx`. Appears in ~5 questions; he blanked most.
2. **Method-selection wobble** — he articulated the hierarchy himself and wants it drilled: reverse a product/chain directly → MF27 standard form / inverse trig → "hence" from an earlier part → IBP as last resort.
3. **Reverse-chain constant balancing** — the recurring careless mark-loss (wrong reciprocal constant).
4. **Parametric calculus underbuilt** — normal line (−1/gradient) AND parametric area (∫y dx/dθ) both weak; the second was a true unknown.
5. **Applied related-rates + volume proof** (bowl) — entirely absent; highest-EV single gap.
6. **Double-angle / half-angle identities not reflexive** — 1−cosθ=2sin²(θ/2), sin²θ=(1−cos2θ)/2, cos2θ forms.

### Build constraints (Ethan, this session)
- Gap cluster ≤ 11 questions (~2h), NOT 19. Collapse duplicate-concept questions (Q13≈Q14; Q11≈Q18).
- **Shuffle positions** so a Q1 miss reappears as Q5/Q7 — no positional memory.
- Fuse multiple gaps per question; exam-real difficulty; no question-type labels until end-of-card reveal.

**Gap cluster built:** `gap_Integration_Differentiation_Drill/` (11 fused questions) · dashboard: `gap_math_intdiff.html`.

---

## 2026-07-25 (later) — gap cluster Q1–Q3 drilled + Q4–Q11 rebuilt harder

Ethan drilled the first three of the gap cluster, then flagged Q4–Q11 as too easy.

- **Q1 (inverse-trig IBP):** method fully correct (differentiate → IBP with inverse as u, dv=dx → f'/f log). **Careless slip:** forgot to substitute x=½ at the end, first wrote π/4 then caught it. Answer π/8 − ¼ln2. Confidence high. State: **FRAGILE** (the inverse-trig IBP method itself is now landing — big improvement from the redrill where it was ACTIVE; only the arithmetic finish slipped).
- **Q2 (reverse-chain constant balancing + inverse-trig f'(u)):** "easy, got it already." Balanced −1/10→−1/50 and −1/2 correctly; got π/6. Confidence high. State: **FRAGILE→CLOSED-leaning** — the constant-balancing gap looks closed.
- **Q3 (2nd-derivative test incl. f''=0 fallback):** got it, including the inflexion-via-first-derivative-test fallback and the max at x=3. "so easy so easy." Confidence high. State: **CLOSED** — the 2nd-derivative-test gap is closed.

**Design correction (logged as a rule):** Ethan flagged the gap cluster as too easy — I had re-skinned the redrill questions with new numbers. Q4–Q11 **rebuilt harder + structurally different** (same gaps, different problem shapes): polynomial parametric, inverse-trig IBP with a polynomial multiplier (division in leftover), cone volume + two related rates, volume-of-revolution forcing x=tanθ then cos² double angle, genuinely cyclic IBP (∫eˣsinx), harder substitution, improper partial fractions (divide first), binomial product of two expansions + validity. Rule saved: gap questions must be harder and different in nature, never re-skins (`feedback_cluster_gap_closer_design` Rule D, `rules/02`).

---

## 2026-07-25 (later still) — rebuilt Q4–Q11 drilled

- **Q1–Q3:** "completely perfectly." CLOSED.
- **Q4 (polynomial parametric — H/V tangents + area):** "completely perfectly, very easy." Found horizontal tangent (t=1 → (1, ⅔)), rejected t=−√3 (t≥0), used parametric area y·dx/dt over 0→√3. One brief "I didn't get the link" wobble on the area setup but recovered. **Parametric area now landing** — big improvement (was a total blank in the redrill). State: FRAGILE→CLOSED.
- **Q5 (inverse-trig IBP with a polynomial multiplier):** set up IBP correctly, then **forgot the division step** on the improper leftover x²/(1+x²). Recovered only when the solution reminded him: "I forgot that you can divide the thing… if you didn't have to show me this, I wouldn't have done the long division." State: **ACTIVE** — the divide-first move on an improper fraction is NOT automatic.
- **Q6 (cone volume + two related rates):** transcript here is heavy Wispr breakdown ("scroll by 5 feet… we got ice!") — **not reliably assessable.** Re-check Q6 next session before assuming closed.
- **Q7 (volume of rev → x=tanθ → cos² double angle):** got it, but flagged it **repetitive** — "we did it before… I think we are repeating a lot, we can get faster." The x=tanθ + double-angle machinery is now solid enough that re-drilling it bores him.
- **Q8/Q9 (cyclic IBP; harder substitution):** "I'm pretty sure we know it already." Landed, familiar. Substitution change-everything is solid.
- **Q10 (improper partial fractions — divide first):** **same gap as Q5** — "I wouldn't have done the long division… you couldn't catch it [on my own]. The minute you see that… so I divide, then split it further." State: **ACTIVE** — reinforces the one real remaining hole.
- **Q11 (binomial product of two expansions + validity):** "good question bro, that's actually a good question… the question that really got me." Engaged well, landed. Liked it.

### The single real remaining gap
**Improper algebraic fraction → polynomial-divide FIRST**, before you do anything else (before the IBP leftover in Q5, before partial fractions in Q10). He only did it because the worked solution prompted him; it is not yet a reflex. Target next session: a couple of "spot the improper fraction, divide before you split/integrate" reps.

### Process feedback (mine to act on)
1. **I over-included already-closed concepts.** Q7 (tanθ + double angle) and the substitution/cyclic-IBP material were solid from the redrill, so re-drilling them read as repetitive. Gap clusters should drill ONLY still-open gaps, not re-test what's CLOSED. He wants fewer, and to "get faster."
2. He wants **more variation to surface MORE new gaps** — "there should be more variations so you can find more knowledge [gaps]… come up with a new concept for every drill question." Push novelty harder; each question ideally exposes something he hasn't met.
3. He liked the genuinely-new-shape questions (Q4 vertical-tangent reasoning, Q11 product expansion) — those are the model.
