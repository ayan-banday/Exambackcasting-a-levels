# Playbook 06 — Daily Plan Driver

Makes `SIX_WEEK_PLAN.md` the live driver of every session: read it, locate today, compare where we
are to where we should be, proactively surface the day's cluster, build it on approval, update the
tracker, sync to GitHub. This is **prelim scope**; the full A-level map is `STUDY_MAP.md`.

**When Claude reads this:** every session start (from `CLAUDE.md` §8), and whenever the student asks
*"what's next / what should I do today / build today's cluster."*

---

## The protocol (run in order)

1. **LOCATE.** Read `SIX_WEEK_PLAN.md`. Take today's real date. Find the scheduled **Day N** and its
   cluster(s). If today is a rest day, buffer day, or past-paper day, say so and act accordingly.
2. **COMPARE.** Read the status markers on the schedule + the **📍 CURRENT POSITION** block. Count
   clusters **built** vs **scheduled-to-date**. Decide: **ON TRACK / BEHIND by X days / AHEAD.**
   - If **BEHIND**: name the specific slipped clusters and point to the plan's **drop order**.
   - Check **pending gap clusters** — these are built **before** any new scheduled content.
3. **REPORT + SUGGEST (proactively, before the student asks).** One tight line, e.g.:
   > *"Today is Day 5 (Tue 15 Jul) → CSC: Economy — Growth Engine & Transition. You're on track (4/25
   > built). Want me to build it now?"*
   Also surface anything you can do for them right now (build the cluster, generate its test, process
   a submission, clear a pending gap cluster).
4. **BUILD on approval.** Generate the day's cluster via `02_cluster_and_study.md` (study sheet, from
   the topic node map, grounded in `inputs/`, `[OFFICIAL]`/`[INFERRED]` tagged) + its adversarial
   question set via `03_run_session.md`. **One cluster at a time — the one scheduled today (or the one
   the student names). Never auto-generate the whole plan** (honors `CLAUDE.md` §10).
5. **UPDATE the tracker.** Flip the day's status ⬜→🔄→✅ (or ⏭️ / 🩹). Refresh the **📍 CURRENT
   POSITION** block: Today, Progress `built/25`, Status vs plan, Last built, Next to build, Pending
   gap clusters.
6. **SYNC.** Commit + push the plan update **and** the new cluster to GitHub, so the repo always
   mirrors reality. This is standing student authorisation for this project (see Auto-sync below).

---

## Gap clusters override the schedule
When a test exposes a gap (per `03_run_session.md` / `spec.md` §3), the **gap cluster is the next
thing built** — ahead of the next scheduled content. Slot it into that day's `3:00–4:00` block or the
week's buffer day. Record it in the tracker as a 🩹 inserted row so throughput stays honest.

## Auto-sync to GitHub
The student wants every change reflected on GitHub automatically. After building a cluster or updating
the plan/tracker: `git add` the changed files → `commit` (concise message) → `push`. If the push is
rejected because the remote moved (the student's daily auto-sync), `git pull --rebase` then push. The
daily auto-sync is a backstop, not a substitute — sync at the moment of change.

## Guardrails (unchanged from `CLAUDE.md` §10)
- One cluster on its scheduled day (or on request) — not the whole plan.
- If **BEHIND**, recommend the drop order; don't silently pile up unbuilt days.
- Don't predict scores or promise grades. The plan shows what to study; the past-paper weeks show
  readiness.
- Prelim scope for now. After prelims, switch the driver to `STUDY_MAP.md` full A-level scope.
