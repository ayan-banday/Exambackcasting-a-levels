# Flags — Vectors > Basics_Products_Ratio_Theorem (Cluster 1)

> Append-only. Each session that exercises this cluster adds an entry below.
> Format: `YYYY-MM-DD | card # | what went wrong | confidence | gap state`

## 2026-07-17 — Full walkthrough Q1–Q13 (voice transcript)

**Q1 — basics (position, magnitude, unit vector, magnitude equation)**
- Mechanical parts nailed: AB, |AB|=√30, k=±3.
- **HUGE conceptual gap on unit vector**: *"I don't understand the unit vector. What's the importance of the unit vector? Why is it important?"* + *"I don't get how it equates to 1 exactly."*
- Reconstructed after guided explanation: strips length, keeps direction, divides by magnitude → magnitude 1.
- State: **FRAGILE** — mechanic yes, concept freshly built.

**Q2 — basics on P, Q, R + QP direction**
- Nailed the mechanic. Locked "PQ = −QP, just flip sign, no re-solving".
- Quadratic t = 2, t = -1 correct.
- State: **CLOSED**.

**Q3 — collinearity A, B, C: find x, y**
- Correctly identified formula AB = k·AC.
- Got x=7, y=-9 via k=1/3 (his setup gave k=1/3 from the j-component). Correct final answer.
- Minor muddle on which vector is the "big" and which is the "small" scale factor.
- State: **CLOSED** but scaling-direction is FRAGILE.

**Q4 — distinctness + collinearity for P, Q, R with a, b unknowns**
- Distinctness concept was cold: *"How do I show that they're distinct? Components are not equal?"* → had to derive "PQ = 0 ⇒ same point" from scratch. Direct quote: *"Wait, why? Can you, like, show me some proof?"*
- Once understood: PQ = (2,2,2) ≠ 0 → distinct. Then PR = k·PQ, k=3, a=8, b=7 ✓
- State: FRAGILE on the "why does PQ=0 mean same point" reasoning.

**Q5 — ratio theorem: midpoint, internal division, extended Q**
- **Ratio theorem was COLD** — had to reconstruct. Direct: *"This is, like, some fucking theory. Oh, I need them to teach me this."*
- Locked eventually: (μa + λb)/(λ+μ), "weight opposite endpoint". Got (3a+2b)/5 for AP:PB=2:3 ✓
- Extended Q where B is midpoint of AQ: **MAJOR STRUGGLE**. Tried to force ratio theorem. Direct: *"But right now I already have a midpoint. What is AQ?"* → eventually derived OQ = 2b − a from midpoint formula.
- **State: ACTIVE** on ratio theorem base; FRAGILE on external division.

**Q6 — chained ratios: triangle OAB with P on AB, Q on OA, R midpoint of BQ**
- Nailed OP = (2a+3b)/5.
- OQ: initially tried ratio theorem, then realized "OA is entirely A, so Q = (2/7)a directly". Direct quote: *"Yeah, we don't need ratio theorem for this, bro."*
- Then OR = (OB + OQ)/2 = (1/7)a + (1/2)b ✓
- State: FRAGILE — the "recognise when ratio theorem is overkill" judgement is not automatic.

**Q7 — two-different-ways intersection (cevians)**
- Confirmed the internal-only scope of ratio theorem: *"Inside the segment. Yeah, it has to be inside the segment."*
- Struggled visualising the "travel to A then some fraction t toward Y" mechanic.
- **UNLOCK moment**: *"Smart, bruh. That is so fucking smart."* Locked as a template.
- Got OP = (1/11)(3a + 2b) ✓
- State: FRAGILE — genuine first-encounter, needs 2–3 more reps.

**Q8 — dot product angle + perpendicularity + projection**
- Dot product concept needed reminding: *"What is A.B? Two vectors gives you back a pre-number. What is the importance of this pre-number?"*
- Understood sign meaning: 0 = perp, >0 = acute, <0 = obtuse.
- Small arithmetic slip on |a|² (said 13, correct 14) but final ratio came out right.
- Perpendicularity check (p = 1/2) nailed.
- **HUGE gap on scalar/vector projection**: *"What is scalar and vector projection of U? It's something like collinear, isn't it?"* → needed shadow analogy + full trig derivation.
- Direct: *"I don't get why is it a dot. I don't understand why the scalar projection formula is like that."*
- **UNLOCK**: *"Ohhhh. Okay, okay, okay. There's a huge... FFMV it start? Why does that formula work? It's you and the... getting rid of the junk."* — grasped the u·w/|w| = |u|cosθ derivation.
- Then computed scalar proj = 7/2, vector proj = (7/6)(2,1,2) ✓
- **State: FRAGILE at best on projection**. Concept was NEW.

**Q9 — cross product for triangle area + unit normal**
- Cross-product mechanic re-derived (cover middle row, cross-multiply). Rusty.
- Went through the trig derivation for triangle area: H = B sinθ, area = ½|a||b|sinθ.
- Direct: *"Because this is equal to A B sin theta. So I just need the cross product, which instead of finding the hypotenuse, the area would be half A times B."* — locked.
- Got |AB × AC|, area = √66 (approx). Unit normal recovered.
- State: FRAGILE — re-learned during the session.

**Q10 — cross product identity (q−p)×(r−p) = p×q + q×r + r×p**
- Learned/re-learned that a × a = 0. Direct: *"But why, why is that the case though?"* → derived via sin 0° = 0.
- Also mentioned a · a = |a|². Both needed re-derivation.
- Expansion attempted with some sign confusion but reached the identity.
- Part (c) collinearity deduction: **UNLOCK**: *"Cross product equals zero, that means it is parallel."* Locked.
- Meta-articulation of the 3-step reasoning (distinct → non-zero; sum=0 ⇒ parallel; shared point ⇒ collinear).
- State: FRAGILE. Multiple discovery moments.

**Q11 / Q12 — ratio theorem stacked with two-ways intersection (P Q R config)**
- Got OP = (3a+b)/4, OQ = (a+2c)/3 correctly by ratio theorem.
- PQ computation started fine.
- Then TANGLED on the OR two-ways setup — kept losing track of parameterisation.
- Recovered eventually: R on BQ → OR = b + s(OQ − b); R on CP → OR = c + s′(OP − c).
- **Didn't cleanly complete** — mixed with Q13.
- State: ACTIVE — needs a clean rep on a fresh two-ways problem with three basis vectors.

**Q13 — foot of perpendicular from B to line OA (a, b unit)**
- Read "non-parallel unit vectors" carefully after prompting — self-flagged: *"Please read the question."*
- Correctly identified as vector projection.
- Formed two equations: ON = λa (on the line), BN·a = 0 (perpendicular).
- Derived λ = a·b using a·a = 1.
- Distance |NB| = √(1 − (a·b)²), evaluated at 60° = √3/2 ✓
- Direct: *"This is a good question for us."*
- State: **CLOSED** but FRAGILE — first exposure to the projection identity.

---

### Priority-ordered gap summary

**Priority 1 (concept-level, blocks downstream):**
- Unit vector — what it is and why magnitude = 1 (Q1)
- Scalar and vector projection — trig derivation (Q8)
- Ratio theorem — first-principles rebuild (Q5)

**Priority 2 (recurring mechanic gaps):**
- External points / extended segments (Q5, Q6, Q11)
- Two-different-ways intersection (Q7, Q11)
- Foundational cross-product facts a × a = 0, a · a = |a|² (Q10)

**Priority 3 (discipline):**
- Distinctness proof pattern (Q4)
- Reading the question carefully — spotting the "unit vector" clause (Q13)

### Drill cluster built

Companion cluster `gap_Basics_Products_Ratio_Theorem/` — 10 exam-style questions each targeting one of the above.

