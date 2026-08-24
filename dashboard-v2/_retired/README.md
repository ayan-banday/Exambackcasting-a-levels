# Retired: the old "Prelim Study Plan" board

Ethan, 24 Aug 2026: *"permanently remove this study board — when I say prelim study board it's this:
https://dashboard-v2-sepia.vercel.app/board.html"*

`index_prelim_study_plan_RETIRED.html` was the old landing page: readiness ranking, day-by-day plan,
methods, exam dates, readiness board, progress log, test pool, full map. **board.html replaces it
entirely and is the only board now.**

`index.html` is a redirect to `board.html`, so the bare domain still works.

**The Bio topic split section was moved into `board.html` before this was retired** — it is the last
section there, self-contained, no `plan.js` dependency.

**`plan.js` is now unused by anything that renders.** It is kept because `_STATE.md` and
`context/rules/07-workflow-logistics.md` still name it as the live day-by-day plan. Decide whether to
port that data into `board.html` or drop the rule; do not delete the file until that is settled.
