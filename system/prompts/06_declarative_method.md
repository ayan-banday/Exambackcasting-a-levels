# Prompt 06 — Declarative Method (CSC, GP, Bio)

**What this is:** the study method for the declarative/essay subjects — **CSC, GP, and Biology** — from
Ethan's mentor call (18 Jul 2026). These subjects are NOT studied with the procedural cluster method
(that's Maths/Chem, see [07_procedural_difficulty.md](07_procedural_difficulty.md)). They're studied
**off the model answers** through a 5-step loop. Save every prompt below verbatim — Ethan pastes them.

**The insight it's built on:** for CSC and GP, if you have the same topic sentences the examiner wants,
you score. You don't need originality — the same sentence structures, examples, and concepts repeat
across the model essays. Surface them on cue and you score. So study from the model answers directly,
not from content.

---

## The 5 steps

Steps 1–2 build the base once per topic. Steps 3–5 are the per-chapter question loop where the actual
learning happens.

1. **Pre-study → Layer 1** (10–20 min). Understand the main arguments — what the chapter is about, the
   big points that make it up. Don't skim; skimming is a waste of time. You can't answer anything yet.
2. **ONE bare-bones cluster at Layer 2** (~20 min, ~20 pages). Not three — one. The sub-arguments that
   make up each main argument. End state: you'd score 10–20% and think "I might have studied this," not
   "I can answer this well." That's correct and expected.
3. **Pull the highest-leverage questions** off the model/past papers — the fewest questions that give
   the widest coverage. Take inspiration from the model essay questions, don't copy verbatim.
4. **Attempt (Wispr Flow / voice), then hypercorrect.** Recognise the question, have no idea of the
   real answer, bullshit it anyway from what you half-remember — do NOT look anything up first. Send it
   back; Claude corrects against the model papers with the examiners' actual examples, words, key
   points, and *why each point earns marks*.
5. **Encode (SIR)** by understanding why each point matters (not memorising) until 80–90% confident on
   that question, then next.

**Layers of learning.** Layer 1 = the big points that make up the chapter (e.g. "economics has
different policies" — you know what the parts are). Layer 2 = what makes up those big concepts (Policy
One is a main concept; what main concepts make that policy come to life — one level of detail down).
Go to Layer 2 before questions. No deeper, no skimming.

**Why the loop works — the hypercorrection effect.** You get it wrong, confidently, then get corrected
against the gold standard. Wrong-then-corrected encodes far harder than right-first-time. Step 4 point
5 (why each point earns marks) is the one that transfers to unseen questions — you're not memorising
the model answer, you're understanding why it scores.

**Shortcut — skip to Step 3.** If you can already look at a question and half-know it, you're at Step 2
already. Jump straight to Step 3. Don't restart. **This is CSC Governance** — Ethan has done ~6 clusters
on it, so he goes straight to Step 3 for governance; the next topic (economics) runs all three steps.

---

## CSC prompts

**Step 2 — one Layer-2 cluster (paste verbatim):**

```
I'm studying [CHAPTER] for CSC (China Studies in Chinese, Singapore A-Levels).
Create ONE bare-bones cluster from my materials at Layer 2 depth only.
Layer 1 = the main arguments that make up this chapter.
Layer 2 = the sub-arguments that make up each of those main arguments.
I do NOT want full detail. I do NOT want examples yet. I want to
understand the main arguments of this chapter and the sub-arguments
that make up each one, individually.
The target end state: if I see an exam question on this chapter, I
should think "I've studied this, I could bullshit a rough answer" —
not "I can answer this well." Aim for 10-20% exam performance.
This should be around 20 pages of source material, studyable in ~20 min.
```

**Step 3 — pull the questions (paste verbatim):**

```
I'm working on [CHAPTER] for CSC.
Give me the appropriate number of questions such that, after I have
answered and mastered them, I have the widest possible span of coverage
across everything I could be tested on for this chapter.
Base this off the model papers and past papers in my materials. Take
inspiration from the model essay questions for the relevant chapter —
don't just copy them.
Prioritise by leverage: if I only answer these questions, I should
have the strongest possible grip on this chapter.
```

> Then: look at the question (you'll recognise it, won't know the real answer — correct). Bullshit it
> anyway from memory, no looking up. Use **Wispr Flow / voice**, not typing. Then send it back for
> correction.

**Step 3 — the correction (paste verbatim):**

```
Here's my attempt at that question: [PASTE / VOICE DUMP]
I know this is weak. Now:
1. Tell me what the actual examples the model answers use are.
2. Tell me the exact words and phrasings the examiners reward.
3. Tell me the key points — the topic sentences — that the model
   answers hit.
4. Give me the proper model answer, pulling directly from the model
   papers in my materials, not from your general knowledge.
5. For each point in that answer, tell me WHY it earns marks — what
   the examiner is actually looking for when they read it.
Then show me specifically where my attempt fell short and what I
should have surfaced instead.
```

> **CSC note:** questions come only from the TNT collection / model-answer set — never invented. See
> [../../../rules/03-exam-papers-and-tests.md](../../rules/03-exam-papers-and-tests.md).

---

## GP prompts

Same three-step structure and logic as CSC. Differences: **cadence** (~3 highest-leverage questions per
day, smaller batches run more often) and **scoping** (3–4 domains, confirmed with the teacher — see
[08_gp_domains.md](08_gp_domains.md)). GP's problem isn't knowledge, it's how you write and brainstorm
points — both fixed by studying model essays directly (pattern-matching on structure), so go almost
straight to Step 3.

**Getting the questions (paste verbatim):**

```
I'm preparing for Singapore A-Level General Paper.
The domain I'm working on is [DOMAIN].
From the model papers, past papers, and essay materials I've given you,
give me the 3 highest-leverage essay questions for today.
"Highest leverage" means: if I answer these three well, I've covered
the widest span of the arguments, examples, and angles that come up
repeatedly in this domain across past papers.
Take inspiration from the model essay questions — don't copy them
verbatim.
```

**The correction (paste verbatim):**

```
Here's my attempt: [PASTE / VOICE DUMP]
Reference the model essays and examiner reports in my materials and
give me:
1. The bullet points and topic sentences the examiners reward for
   this question type.
2. The specific examples the model essays use — real ones, from my
   materials, not invented.
3. The phrasings and sentence structures that recur across the model
   essays for this domain.
4. Why each point earns marks — what is the examiner actually
   rewarding.
5. Where my attempt fell short, point by point, and what I should
   have surfaced instead.
```

---

## Repeat / recall (CSC and GP, ~1 week later)

Encoding *is* spaced repetition — goal-based, oriented toward exam use. A week after studying something,
recall the key points from memory and check them.

**Recall check (paste verbatim):**

```
I studied [TOPIC] on [DATE]. Test me on it — ask me for the key points
from memory. Don't give me the answers first.
```

(Ayan is withholding the end-of-week-test refinement details for now — don't over-build this yet.)

---

## Biology

Bio is declarative too — same 5-step loop off model answers. **Easiest-first** per the teacher:
Evolution → Inheritance → Mutations → Cancer. Climate change is bullshittable (near-full marks, minimal
study); immunology/bacteria are hardest + smallest share → A-levels. Inheritance's crossing/probability
work is procedural — drill that bit like a Maths cluster.
