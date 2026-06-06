# Prompts — the live entry points

These are the **conversational entry points** the coach uses. They drive the flow (ask the student,
research, present options, generate outputs); the **playbooks** hold the deterministic mechanics they
reference, and **`spec.md`** holds the definitions. You don't run these yourself — Claude follows
them.

| Prompt | When it fires | Pairs with |
|---|---|---|
| `00_default_behavior.md` | Always in force — standing behavior + formatting rules | every session |
| `01_subject_guide_prompt.md` | Building a `subject_examiner_guide.md` (once per subject/level) | `playbooks/01_build_guides.md` |
| `02_topic_session_prompt.md` | Every topic study session (topic guide → clusters → questions → tracking) | `playbooks/01`–`04` |

**Also drop here, if you have it:** the **CSE gold-standard example guide** (e.g.
`cse_example_subject_guide.md`) as the quality bar — `playbooks/01_build_guides.md` reads it first
and matches its depth, structure, and tone when building any subject guide. (You may also copy it to
`CSE/H2/subject_examiner_guide.md` to use as the live guide.)

**Does NOT go here:** raw exam materials (those go in `inputs/`) or anything Claude generates
(guides, clusters, gaps).
