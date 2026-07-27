# Vectors — Knowledge Gaps

Gaps surfaced while drilling. The C1+C2 combined gap cluster (built from real uploaded questions) targets these. Newest session first.

---

## 2026-07-27 — Cluster 2 (Lines & Planes) drill

Whole chapter was new to Ethan; he performed well by the end but flagged the chapter as a gap overall. Specific weak spots to drill:

1. **Line of intersection of two planes — WHY you set a variable to 0.** He knows the method (direction = n1 × n2; fix one coordinate, solve the 2×2 for a point) but not why fixing z = 0 is legitimate. Concept to lock: the line is infinite, so fixing one coordinate just picks the single point where the line crosses that coordinate plane — any consistent choice gives a valid point on the same line. His words: "I still don't get why you can set it to be 0." (CONCEPTUAL)

2. **Foot of perpendicular: line vs plane — the two methods are different.** To a PLANE: F = P + t·n, substitute F into the plane, solve t. To a LINE: F = a + λd (general point on the line), impose PF · d = 0, solve λ. He conflated them at first ("there's nothing to substitute it into") before recovering the dot-with-direction method. Drill both back-to-back so the choice is automatic. (METHOD SELECTION)

3. **Plane normal from three points — cross-product order + the check.** He used AB × BC instead of AB × AC and got a different normal, then a wrong-looking Cartesian equation. Lock: use two vectors from the SAME point (AB and AC), and always CHECK the normal by dotting it with a plane direction vector (must be 0). He self-caught this. (PROCEDURAL slip)

4. **Distance-formula selection is not yet automatic.** He had to stop and recall which of the three applied each time: point→plane |p·n − d|/|n|, point→line |AP × d|/|d|, skew |(a2 − a1)·(d1 × d2)|/|d1 × d2|. Got them right but slowly. Interleave all three in one question so recognition speeds up. (AUTOMATICITY)

**Also fold in Cluster 1** ("I probably forgot some stuff in cluster 1 as well") — ratio theorem (weight on the opposite endpoint), collinearity via parallel displacement, scalar vs vector projection, area via ½|AB × AC|, angle via dot product. The combined gap cluster fuses C1 + C2 in each question (e.g. use the ratio theorem to build a point, form the plane through it, then a distance/foot-of-perp), so one hard question revises a wide span.

**Build note:** questions-only (gap-cluster format), hard, multi-object, ~6 questions / 30–45 min. Draw stems from the real school tutorials / supplementary / past papers once uploaded — not invented ones.
