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

