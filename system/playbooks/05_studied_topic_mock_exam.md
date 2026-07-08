# Playbook 05 — Studied-Topic Mock Exam / 已学主题 综合模考

> **Purpose:** Simulate exam conditions across MULTIPLE studied clusters/topics to test whether Ethan can deploy consolidated knowledge under time pressure. Sits between individual-cluster session tests (playbook 03) and official past paper attempts (playbook 04 convergence gate).
>
> **When to invoke:** After Ethan has completed cluster-level tests for a topic AND the master synthesis cluster (if built). Trigger phrase: **"give me a mock exam covering [topics I've studied]"** or **"create an exam covering all the topics rn"**.
>
> **Owner:** You (Claude). Ethan supplies topic list; you execute the pipeline end-to-end.

---

## 1. Confirm-understanding SOP (this workflow)

Reading this playbook confirms the workflow. When Ethan says "confirm you understand" — reference this file, don't re-derive the workflow from scratch.

**The 6-step pipeline:**

1. **Topic scoping** — Ethan lists topics. You read each topic's `examiner_guide.md` + latest `master_status.md` + `synthesis_Governance_Master/cluster_synthesis_study_sheet.md` (or equivalent synthesis cluster — off-sequence clusters use the `synthesis_` / `gap_` prefix). Identify covered clusters + covered nodes + P1 gap history.

2. **Exam design** — Build 3-question mock (default) at 30 marks each. Distribute question types per subject's real paper archetype (e.g., CSC 9629: 因素是非题 + 是非题 + 程度题 + 最字题 + 比较题 + 条件题 mix). Ensure ONE question per major cluster + ONE synthesis/comparative question. NO hints in stems.

3. **Timing suggestion** — Default: 3 × 45 min = 2h 15 min for a comprehensive mock. Alternative: 2 × 45 min = 1h 30 min mini-mock. Suggest reading time (5 min) + writing time.

4. **Session execution** — Ethan attempts. He submits answers via voice-dictated Loom transcript (per Wispr Flow rule — filter homophone artifacts). One question at a time OR batch submission both accepted.

5. **Grading + flagging** — For EACH question, apply `feedback_essay_grading_focus` rules:
   - Score /30 at top (Tier mapping: 27-30 Tier 5, 22-26 Tier 4, 17-21 Tier 三, 12-16 Tier 二, <12 Tier 一)
   - Knowledge gaps surfaced
   - His points expanded with concepts + data + cases
   - Paragraph-by-paragraph MODEL LOGIC LINES (100-200 字 each, verbatim quotes + named scholars + specific data + named cases embedded)
   - Wispr voice rule: ignore homophone typos; still flag numerical / date / conceptual errors
   - Examiner method realism: mirror actual Cambridge/SEAB, not generic "good answer"

6. **File updates (mandatory after every mock exam)**:
   - `[Topic]/master_status.md` — APPEND mock exam results block: date + 3 scores + patterns
   - `clusters/[NN_relevant_cluster]/cluster_NN_flags.md` — APPEND per-question P1 flags with state (ACTIVE / FRAGILE / CLOSED)
   - `[Topic]/_memorization_reference.md` — UPDATE §1 recurring errors if new patterns emerged; add §X entries if new concepts surfaced
   - `synthesis_Governance_Master/cluster_synthesis_flags.md` (or equivalent synthesis/gap cluster) — APPEND cross-cluster pattern findings

**Never overwrite. Always append.** Playbooks 03/04 remain in effect for file protocols.

---

## 2. Rules already in effect (applied automatically)

The playbook combines all existing feedback rules Ethan has locked in:

| Rule / 规则 | Source / 来源 | Applied by | 
|---|---|---|
| **Concept-first feedback, no nitpicks** | `feedback_essay_grading_focus.md` | Every mock question grade |
| **Score /30 at top + paragraph model logic lines** | `feedback_essay_grading_focus.md` (2026-07-05 update) | Every mock question grade |
| **Wispr Flow voice — ignore homophones** | `feedback_wispr_voice_grading.md` | Every voice-dictated answer |
| **Examiner method realism — mirror Cambridge/SEAB** | `feedback_examiner_method_realism.md` | Every model logic line + verdict |
| **Full bilingual CSC content** | Locked 2026-06-24 | Every CSC essay feedback |
| **NO question hints in stems** | Locked 2026-06-24 | Every mock question |
| **5-question limit per session test** (extended to 3 for mock exam) | Locked 2026-06-24 | Mock exam question count |
| **Direct student to study_sheet file, don't dump in chat** | Locked 2026-06-24 | Pre-mock preparation guidance |

---

## 3. Mock exam file structure

**Location:** `[Subject]/[Level]/[Topic]/tests/model_test_[N].html` (updated 2026-07-05 — HTML format per Ethan's rule).

**Format rule (locked 2026-07-05, updated 2026-07-06):** All model tests generated as **HTML files** styled like actual Cambridge/SEAB exam papers. Self-contained HTML with embedded CSS: white background, clean serif font (e.g., Georgia or Times New Roman), black text, official-style header (subject + code + paper + duration + marks), page-break-ready layout for print. **ALWAYS auto-open the HTML file in the default browser after generation** (`open [path]` on macOS) so Ethan sees it immediately. Matches Study Agent CLAUDE.md "HTML OUTPUT RULE" for exam papers.

Exception: `model_test_1.md` (Governance, 2026-07-05) stays as markdown since Ethan explicitly opted out for this one.

**Content template:**

```markdown
# Mock Exam — [Topic] — Model Test [N]

**Date generated:** YYYY-MM-DD
**Topics covered:** [list of clusters + syllabus nodes]
**Format:** [subject-specific paper format, e.g., CSC 9629 P2 style]
**Total marks:** 90 (3 × 30)
**Suggested time:** 2h 15 min (45 min per question + 5 min reading)
**Style:** Adversarial, exam-standard, no hints in stems

---

## Instructions

- Answer in [Chinese/English per subject]
- Voice dictation via Wispr Flow accepted (submit Loom transcript)
- One question at a time OR all three — your choice
- Timed practice recommended for realistic simulation

## Coverage map

| Q | 题型 | Cluster tested | Core concepts required |
|---|---|---|---|
| 1 | [type] | [cluster 1] | [named scholars + data + cases] |
| 2 | [type] | [cluster 2] | [named scholars + data + cases] |
| 3 | [type] | [cluster 3 or synthesis] | [named scholars + data + cases] |

---

## Q1 (30 marks, [题型])

[Chinese stem only. NO hints. NO trap descriptions.]

---

## Q2 (30 marks, [题型])

[Chinese stem only.]

---

## Q3 (30 marks, [题型])

[Chinese stem only.]

---

## Post-exam self-audit checklist (before submitting)

For each essay, check:
- [ ] 立场 upfront (¶1)
- [ ] 3+ 论点 each with mechanism
- [ ] ≥3 data anchors
- [ ] ≥2 named cases with year + outcome
- [ ] ≥1 scholar attribution
- [ ] Genuine 平衡 (not token)
- [ ] Cross-topic sentence
- [ ] Conclusion restates 立场

Mark **C** ONLY if all 8. Otherwise **U**.
```

---

## 4. Grading output template (for post-mock feedback)

Per-question feedback follows this exact structure:

```markdown
# Q[N] Feedback — Score: XX/30 (Tier [三/4/5])

## What you did well
[Brief praise — 3-5 bullets]

## Part 1 — Knowledge gaps surfaced
[Concepts he was reaching for; scholars unnamed; data missing]

## Part 2 — Your points expanded
[Take his exact points, show how to deepen each]

## Part 3 — Paragraph-by-paragraph model logic lines
[¶1 through ¶N model paragraphs — 100-200 字 each, verbatim quotes + scholars + data + cases embedded]

## Quick summary
[Score → Target score, 3-5 items to fix next time]
```

**Cumulative session summary (after all 3 questions graded):**

```markdown
# Mock Exam [Topic] [N] — Overall Report

- Total: XX/90 
- Q1: XX/30 | Q2: XX/30 | Q3: XX/30
- Cross-question patterns (repeating strengths/gaps)
- P1 CLOSED this mock
- P1 REOPENED / NEW this mock
- Next-session priority: [top 3 drills]
```

---

## 5. Trigger phrases

Any of these invoke this playbook:

- "give me a mock exam covering [X, Y, Z]"
- "create an exam for all the topics rn / I've studied"
- "generate a mock test covering [multiple topics]"
- "I'm ready for a comprehensive test on [topic]"
- "let me practice a full paper on [topic]"

---

## 6. Interaction with playbook 04 (convergence)

Mock exam is **NOT** the final convergence gate. Convergence still requires:
- ACTIVE gap count = 0
- FRAGILE gap count ≤ ~5
- Coverage complete (no UNTOUCHED nodes)
- **PLUS** timed attempt on OFFICIAL past paper (playbook 04 §9)

Mock exams (playbook 05) surface deployment gaps under time pressure. Official past paper attempts (playbook 04) test against the actual examiner distribution. Both required before declaring readiness.

---

## 7. When to re-run

- After building any new cluster on an already-tested topic
- After every 2 weeks of study on the topic
- 4 weeks before exam (final push readiness check)
- 1 week before exam (last calibration)

---

> **APPEND-ONLY for playbook system.** This playbook was added 2026-07-05 based on Ethan's explicit workflow request during Governance topic testing.
