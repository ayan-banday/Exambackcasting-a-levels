# Flags — Calculus > Differential_Equations_Mastery (Cluster 6)

> Append-only. Each session that exercises this cluster adds an entry below.
> Format: `YYYY-MM-DD | card # | what went wrong | confidence | gap state`

## 2026-07-09 — Full walkthrough Q1–Q10 (voice transcript)

**Q1 — Pattern classification (4 scenarios)**
- NAILED all four including the tricky hybrid (c) — recognised "rate in − rate out = 2 − 0.1P" collapses to Pattern 2.
- Quote: *"See, bro, that's it, right? Why was I hesitating so much? M1 is correct, T3 is correct, and F1 is correct."*
- State: **CLOSED**.

**Q2 — Pattern 1 (radioactive decay)**
- Locked the base method end-to-end (form DE → separate → integrate → ln → e-at-bottom → let A = e^C → sub IC).
- **Slip**: on long-term behaviour, initially said M → ∞ because he mentally dropped the minus sign on e^(−kt). Self-corrected: *"as t → ∞, e^(−kt) → 0, hence M → 0, then say the substance decays away completely."*
- Fumble on half-life algebra momentarily, then locked: `t_h = ln 2 / k`.
- New pattern locked: **for long-term, always narrate the intermediate step** — "e^(−kt) tends to 0, hence M tends to 0" — not just the final limit. This is what the examiner rewards.
- State: **CLOSED**.

**Q3 — Pattern 2 cooling (coffee)**
- NAILED. Locked the don't-expand method fully.
- Self-noted: *"this thing can skip out because it's pretty obvious, like, what exactly I need to do."*
- State: **CLOSED**.

**Q4 — Pattern 2 warming (drink, iron ingot)**
- Locked BOTH traps: (1) temperature difference is still `(K − T)` when starting below; (2) A = starting − target is negative.
- Direct quote on the ingot: *"the A is probably gonna be, the A is minus 700."* ✓
- State: **CLOSED**.

**Q5 — Constant source + proportional sink (drug injection)**
- Confusion at start: *"How do we solve this, ah? Do we just move the entire thing over?"* Tried to integrate `ln|4 − 0.5D| = t + C` directly (wrong).
- **MAJOR UNLOCK**: read the target `e^(−t/2)` to reverse-engineer the required rate constant. Direct quote: *"you need to read this E first. What do you see here? A minus T over 2. That means over here, there needs to be some kind of division to the T itself. So if you see a T over minus 2 here, that means dd over dt equals minus 0.5, d minus 8. We do that so that we have an e-t here."*
- **New meta-rule articulated**: *"whenever there's a fraction for rate in minus rate out, that's when you want to remove the fraction, leave it on the right side, and then move the left side over."*
- State: **CLOSED** after unlock. Add a card in a future cluster on "reading the target to plan the algebra."

**Q6 — Pattern 3 partial fractions (infection)**
- Nailed the full partial-fractions solve.
- **CRITICAL META-RULE LOCKED** (his own words): *"whenever we integrate, we have to see this, is this f'x / fx. What's the f' here? f'x of this, minus I. f'x here is a minus I, so it becomes minus ln. Super important for us to understand this, bro. This is the most common mistake that I'm making right now — I forget to do 1 over 10,000 minus I, and then when I integrate I should be a minus one because that's a minus I."*
- Chain-rule minus sign on `∫ 1/(K − I) dI` — was recurring gap, now consciously flagged and locked.
- State: **CLOSED**.

**Q7 — Pattern 3 with carrying capacity / equilibrium / fastest**
- Locked the qualitative parts (carrying capacity = K, equilibria = 0 and K, fastest at K/2, long-term → K).
- Articulated his own 8-step process for the algebra:
  1. Shift the N(K−N) portion down, retain constant DT on RHS
  2. Break into partial fractions
  3. Factorise out the 1/K
  4. Integrate → one plus ln, one minus ln (chain rule)
  5. Put together as ln[N/(K−N)]
  6. Shift over → Kkt + C
  7. Exponentiate → E^(Kkt) × E^C
  8. Let A = ±E^C, sub t=0 + initial → find A
- State: **CLOSED**.

**Q8 — Substitution y = ux**
- Locked "replace TWO things: y itself AND dy/dx via product rule."
- **Slip**: divided by x instead of x² at one point, leading to a phantom IBP. Self-corrected after checking.
- State: **FRAGILE → close after one more rep on a different sub type**.

**Q9 — "What is A?" concept card**
- Trivially easy — he cleared it in under 30 seconds.
- **User feedback triggered here**: this format doesn't fit exam questions and shouldn't be the bulk of any cluster. Rule saved to memory: `feedback_cluster_gap_closer_design`.
- State: **CLOSED** but format flagged for revision.

**Q10 — Full synthesis tank problem**
- Initial hesitation on rate-in / rate-out identification for the fresh-water case (kept trying to include the 10 kg initial).
- Locked: initial condition ≠ rate. Rate in for fresh water = 0.
- Nailed the regime-change part (fresh → brine) including the new K = 50 target.
- Practice (chlorine pool): NAILED.
- State: **CLOSED**.

### User-directed cluster-design rules surfaced during this walkthrough

1. **No repeat questions from the pre-study sheet or class test.** Vary the stems.
2. **Not every card needs Example + Practice.** Ten pure practice questions is fine; vary the shape.
3. **Every question must be exam-style** (Cambridge / school tutorial). No conceptual drills like Q9.
4. **Draw questions from actual papers** (supplementary exercises, tutorial questions), not invented ones. Present solutions the exact way the tutorial does.

All four saved to memory: `feedback_cluster_gap_closer_design`.

### Sunday-tests spec surfaced

New spec captured: weekly compiled paper across ALL topics covered so far, modeled on Hwa Chong papers, ~90 min, no examples or solutions upfront. Applies all subjects. Saved to memory: `feedback_sunday_tests`.

### Final state

All 10 cards CLOSED or near-closed. Ethan's own wrap: *"So we're done with differential equations now."*

Next: Cluster 6 was the last DE gap-closer. Cluster 3 base + Cluster 6 mastery together cover DE. Next subject/topic on his 90-day plan.

