# Playbook 04 — Convergence & Final Validation

**Goal:** decide whether a topic is exam-ready. Convergence is **not** "scores are high" — the
questions are adversarial by design, so high scores prove nothing on their own.

> Definitions: `spec.md` §9 (convergence), §12 (recalibration trigger). This playbook is the
> procedure.

---

## Convergence test (all three must be true at once)

1. **ACTIVE count = 0** in the `master_status.md` summary.
2. **FRAGILE count is small** — handleable in one revision pass (typically **≤5**), not another full
   mock.
3. **Coverage complete** — every node in the topic `examiner_guide.md` content node map is SOLID,
   FRAGILE, or has been tested. **No UNTOUCHED nodes remain.** (This is the check people skip — walk
   the node map explicitly and confirm each node was hit.)

If any one fails, the loop continues (→ **playbook 03**): generate the next set targeting what's
missing — ACTIVE gaps, or untouched nodes for coverage.

---

## Final validation sequence (only after the three conditions pass)

1. **Model test** — a full set covering the **entire topic** (all clusters) under exam conditions →
   `[Topic]/tests/model_test_[N].md`.
2. **Official past paper** — the student attempts a **real SEAB/Cambridge past paper** for this topic
   under **timed conditions** → `[Topic]/tests/official_[year].md`.
3. **Interpret:**
   - Both consistently high → **topic is mastery-ready.**
   - Model >70% **but** official <50% → the **guide is misaligned with the real exam.** Do **not**
     declare ready. Trigger recalibration (**playbook 01**): find the dimension that mispredicted,
     fix it, re-validate.

The official paper is the honesty check. **A model test alone never converges a topic.**

---

## Subject-level readiness (on request only)

When the student asks, aggregate all topic `master_status.md` files for a subject/level into a
summary: total ACTIVE, total FRAGILE, which topics are converged vs in-progress. **Do not maintain
this automatically.**

## Done when

You can state, with evidence, either "converged + validated on an official paper → ready" or exactly
which condition is unmet and what the next session targets.
