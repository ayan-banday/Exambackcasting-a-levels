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

## Format reminder
`YYYY-MM-DD | card # | what went wrong | confidence | gap state`
