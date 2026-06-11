# Playbooks — the mechanics

Step-by-step procedures Claude reads **before** running each operation. They hold the deterministic
mechanics; the **prompts** (`system/prompts/`) are the conversational entry points that invoke them,
and **`spec.md`** holds the definitions. Playbooks **reference** `spec.md` rather than restating it.

**You don't edit or run these — Claude follows them.**

| Playbook | When Claude reads it | Entry prompt |
|---|---|---|
| `00_ingest_inputs.md` | Filing the assistant's `inputs/_inbox/` drop pile into the structured `inputs/` tree — the one place Claude touches `inputs/` (mechanical filing, not generation) | student: *"ingest the inbox"* |
| `01_build_guides.md` | Building a subject guide (once per subject/level) or a topic guide — incl. the 90% / 5-dimension check and `[OFFICIAL]`/`[INFERRED]` tagging | `prompts/01`, `prompts/02` Step 4 |
| `02_cluster_and_study.md` | Proposing the cluster breakdown, generating clusters one at a time, writing study + pre-study sheets | `prompts/02` Steps 3–5 |
| `03_run_session.md` | The full session loop: generate adversarial questions → detect confidence → grade → the 7-step gap-tracking sequence → next set | `prompts/02` Step 6 |
| `04_convergence.md` | Checking the three convergence conditions; final model test + official paper | `prompts/02` Step 7 |

Each playbook names the **template** it copies from `system/templates/`.
