# Flags — Calculus > Differential_Equations (Cluster 3)

> Append-only. Each session that exercises this cluster adds an entry below.
> Format: `YYYY-MM-DD | card # | what went wrong | confidence | gap state`

## 2026-07-08 — Q1–Q4 walkthrough (voice transcript)

**Q1 — Separable DE, IC y=0 at x=1**
- Rusty on separation direction ("I'm confusing myself, if I want to bring this over…") — recovered
- Forgot +C on integration, caught himself later
- Locked the 4-step: (1) separate (2) integrate + C (3) sub IC to find C (4) present as solution
- Final: ⅓y³ + y = x² − 1
- State: FRAGILE — right process end-to-end, but two visible stumbles (direction, +C)

**Q2 — dy/dx = y cos x, y=3 at x=0**
- **Missed |y| on ln y** — self-flagged: "very important… I forgot to put the absolute sign"
- Then correctly exponentiated: ln y = sin x + ln 3 → y = e^(sin x) · e^(ln 3) = 3 e^(sin x)
- Locked presentation rules:
  - When you integrate 1/y, it's ln|y|
  - Final answer must be in `y = …` form
  - If constant is a ln (like ln 3), pull it out as a multiplier via e^(ln 3) = 3
- State: FRAGILE — process right, but |·| slip is a real recurring examiner-mark loss

**Q3 — Substitution DE, u = x² type (starting from scratch)**
- Cold start: "I do not have anything else, so I just substitute it as u and then I don't know what to do. Oh, I forgot all of this, bro"
- Full mechanic was gone — had to reconstruct
- Reconstructed 6-step:
  1. Find du/dx from u = f(x)
  2. Rearrange the DE
  3. Sub du in (via du/dx to swap out dx)
  4. Integrate for u
  5. Substitute back to x
  6. Combine constants (A = e^C etc.) when merging
- State: **ACTIVE** — zero fluency, rebuilt from first principles. Needs one clean rep.

**Q4 — x dy/dx = y + 2x² cos x, substitution u = y/x**
- **MAJOR UNLOCK**: when the substitution is u = y/x (or y = xu), you substitute in TWO places:
  1. **dy/dx** — becomes u + x·(du/dx) via product rule on y = xu
  2. **y itself** — gets replaced by xu
- Direct quote: "if they give you u equals to whatever y over x, make y the subject, then you can swap straight in. Then there will be two areas you swap. The first one is dy/dx, and the second one would be y."
- Secondary insight: "sometimes it's not just u. Sometimes it can be y" — the differentiation target depends on the substitution shape, not a fixed rule
- Reached: y = x(2 sin x + C)
- State: FRAGILE — landed the insight but with a "holy shit I've never thought of that" moment. Needs a second u = y/x rep to lock.

**Cross-cutting patterns to consolidate later:**
- Modulus signs on ln integrals (Q2)
- Substitution DE mechanic (Q3–Q4): fluency is thin overall — worth a dedicated card on "which variable do I differentiate the substitution wrt?" branching by substitution shape (u = f(x) → straightforward du/dx; u = y/x → make y subject, product-rule dy/dx, sub y and dy/dx both)

---

## 2026-07-09 — Pre-study sheet DE walkthrough (Patterns 1/2/3, Q1–Q9)

Massive session. Full walkthrough of the DE section of the Calculus pre-study sheet. Multiple foundational gaps surfaced that the pre-study sheet and prior clusters had NOT explicitly taught. Post-session action: rebuild `cluster_03_study_sheet.html` end-to-end using tutorial-style presentation (see MEMORY: `feedback_tutorial_style_solutions`).

### Three-pattern taxonomy (was cold, now LOCKED)

Ethan reconstructed from scratch. Now solid:

| Pattern | Form | Trigger words |
|---|---|---|
| 1 | dN/dt = ±kN | "proportional to the amount itself", one variable, no ceiling mentioned |
| 2 | dN/dt = ±k(K − N) | "proportional to the difference / gap / deficit", two values named (e.g. current temp and room temp) |
| 3 | dN/dt = kN(K − N) | "proportional to the product", both current AND remaining-capacity present |

**Direction**: minus for decay/cooling, plus for growth/warming. Sign is set from context, not from the pattern shape.

### Pattern 1 (Q1 isotope decay, Q2 bacteria doubling, Q6 half-life)

- Locked full 4-step: separate → integrate (+C) → sub IC to find A → present M = M₀ e^(−kt)
- Solving for k with a second data point (e.g. after 5 years, M = 150): sub, isolate e-term, ln both sides
- **Recurring slip**: forgets `+C` on integration. Caught it himself Q4/Q5, but every session so far this has re-appeared. FRAGILE at best.
- **Recurring slip**: forgets `|·|` on ln y. Caught himself Q2. Still FRAGILE.

### Pattern 2 (Q3/Q4 coffee cooling, warming drink)

- **MAJOR UNLOCK: do NOT expand the bracket.**
  First attempt on coffee cooling — expanded −k(T − 20) = −kT + 20k, tried to integrate that, dead-ended.
  Insight: keep the bracket. `dT / (T − K) = −k dt` → integrate LHS as `ln|T − K|` using the f'(x)/f(x) pattern.
- **NEW GAP surfaced: chain-rule minus sign.**
  For the warming case with `k(25 − T)`: derivative of (25 − T) is −1, so integrating `1/(25 − T)` gives **−ln|25 − T|**. Ethan missed this initially — got a sign inversion. Now flagged, but this is FRAGILE.
- **MAJOR META-RULE surfaced (not in current cluster material): what is A?**
  For Pattern 2, A is NOT the starting value — it's the **gap between starting value and target** (K).
  - Coffee cooling from 90 to room-K = 20: A = 90 − 20 = 70. So T = 20 + 70e^(−kt).
  - Drink warming from 5 to room-K = 25: A = 5 − 25 = −20. So T = 25 − 20e^(−kt).
  Direct quote: *"A is the integration constant, which is the starting minus the ending for pattern 2. I thought A is always just the first thing. Oh, so I also got the coffee thing wrong."*
  **State: ACTIVE** — this rule was not in the study sheet; needs to be surfaced explicitly in the rebuild.

### Pattern 3 (Q5 infection 10000, Q7 rumor spread 5000)

- **HUGE GAP: partial fractions method was 100% new.** Ethan quote: "Wait, question five is a huge knowledge gap as well. I had no idea how to solve it." → "Partial fractions, right? So you have to solve partial fractions." → "That's crazy. I didn't think of that. Fuck, this is so fun, holy fuck."
- New skill locked:
  1. Separate: `dI / [I(K − I)] = k dt`
  2. Partial fractions: `1/[I(K−I)] = (1/K)·[1/I + 1/(K − I)]` — factorise 1/K out to simplify
  3. Integrate both sides: `(1/K)·[ln|I| − ln|K − I|] = kt + C`
  4. Group the two lns: `ln|I/(K − I)| = Kkt + KC`
  5. Exponentiate: `I/(K − I) = ±e^C · e^(Kkt)` → let `A = ±e^C`
  6. Sub IC: A = I₀ / (K − I₀). "Room-left-at-start over amount-at-start? No wait — amount-at-start over room-left-at-start." **Order-of-ratio was ambiguous in his head — needs a clean card.**
  7. Solve for I: cross-multiply, isolate.
- **NEW META-RULE surfaced: A for Pattern 3 is a ratio, not a value.**
  `A = I₀ / (K − I₀)` when equation is arranged `I/(K − I) = A e^(Kkt)`.
- **Sign trap**: R = A·... presented as `R / (K − R) = A e^(...)`, but he initially got a monstrous A = 24 million because he didn't realise the algebra rearranges to include a MINUS. Locked after correction.

### Meta-rules that must be TAUGHT explicitly in the rebuild

1. **A is not "the initial value" — it's the integration constant, and its meaning changes per pattern:**
   - Pattern 1: A = initial value directly (M = A·e^(±kt), so at t=0, M = A)
   - Pattern 2: A = initial value − target value (the *gap*; can be negative if warming from below)
   - Pattern 3: A = initial / (K − initial) (a *ratio*)
2. **Method for Pattern 2: never expand the bracket.** Integrate `1/(T − K)` via f'/f, adding a chain-rule minus sign if the bracket is (K − T) instead of (T − K).
3. **Method for Pattern 3: partial fractions is mandatory.** Factor out 1/K, group the two lns, then exponentiate.
4. **Method for finding A universally: plug t=0 and initial value into the exponentiated equation.** Do NOT try to plug into the ln form.
5. **Sign of k**: always state `k > 0` alongside; the sign in the equation (`+kN` vs `−kN`) is set by the physical direction.

### Long-term behaviour / carrying capacity questions (Q8/Q9 fish)

Now solid:
- Carrying capacity = the K in the bracket (the ceiling)
- Equilibrium values = roots of RHS (Pattern 3 has two: N=0 and N=K; Patterns 1 and 2 have one)
- Fastest growth for Pattern 3 = **always at K/2** — Ethan needs to just memorise this
- Long-term behaviour:
  - Pattern 1 growth: N → ∞ (and comment: model unrealistic)
  - Pattern 1 decay: N → 0
  - Pattern 2: N → K (from above if cooling, from below if warming)
  - Pattern 3: N → K
State: FRAGILE — first exposure, needs one more rep.

### Recurring low-level slips (still ACTIVE across all patterns)

- Forgetting `+C` on integration (Q1, Q3, Q4)
- Forgetting `|·|` on `ln y` (Q2)
- Chain-rule minus sign on `∫ 1/(K − T) dT` (Q4)
- Order-of-ratio confusion when substituting IC for Pattern 3 (Q5)

### User-flagged rebuild ask

Direct quote: *"your clusters are missing a lot of nuance you need to present to me questions ideally by taking questions from the tutorials and the exact answers as they present them, because I need to learn how questions are being presented or how my answers should be presented. They are not teaching me that well right now. It seems very jumbled up… Update all future classes and save this as a rule."*

Action logged: rebuild cluster 3 study sheet to (a) present worked answers in tutorial style, (b) teach the four meta-rules above explicitly at the top, (c) use questions that mirror school tutorial question stems. Memory rule saved: `feedback_tutorial_style_solutions`.

### Drug injection question (constant source + proportional sink)

`dD/dt = 4 − 0.5D`, with D(0) = 0. Body absorbs at constant 4 mg/hr; body removes at rate proportional to amount present (constant 0.5).

- **NEW PATTERN surfaced**: constant source + proportional sink. Ethan first mis-classified as Pattern 2 (gap), then as Pattern 1 (proportional), then landed on: it's actually a hybrid that COLLAPSES to Pattern 2 by re-writing:
  - `dD/dt = 4 − 0.5D = −0.5(D − 8)` → Pattern 2 with target K = 8, rate constant 0.5
  - Steady-state = 4/0.5 = 8 (source rate ÷ sink rate)
- Direct quote: *"it's a gap question, yes, but simultaneously it's also pattern one. This is more like pattern one and pattern two, because we didn't see that as a difference. The rate of fun is a pattern one question, because it is the same variable."*
- **NEW GAP: chain-rule constant balancing when integrating**.
  Integrating `1/(4 − 0.5D)` requires multiplying by 1/(−0.5) = −2 outside the ln to balance the chain rule:
  `∫ dD / (4 − 0.5D) = −2 ln|4 − 0.5D|`
  Ethan first tried to pull constants out incorrectly. Confusion quote: *"if I bring a minus 0.5 down here, I need to balance it out, right… we can just make it 2 over minus half, which is minus 2. And then I just put the D there."*
  State: FRAGILE — the chain-rule constant balancing is not intuitive to him yet.
- Long-term: `D → 8` as `t → ∞` (approaches the steady state from below). "Long-term amount of drug in body tends to 8."

### 7-step method Ethan verbalised at end (solid)

1. Form the DE (identify pattern from keywords, set sign).
2. Move variables around (separate).
3. Integrate both sides → ln appears → **remember +C**.
4. Isolate ln, exponentiate → `±e^C` becomes `A`.
5. Sub initial condition (t=0, given value) into the exponentiated equation → find A.
6. Present the explicit function.
7. For long-term: let t → ∞ and read off the limit; for finding t at a given value, sub and solve.

### Additional rebuild trigger

Cluster 6 to be built as a dedicated Pattern-1/2/3 mastery cluster, using tutorial-style solutions and teaching all meta-rules explicitly (per user ask 2026-07-09).

