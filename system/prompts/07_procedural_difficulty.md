# Prompt 07 — Procedural Method + Difficulty (Maths, Chemistry)

**What this is:** the study method for the procedural subjects — **Maths and Chemistry** — from Ethan's
mentor call (18 Jul 2026). The loop already works; the only thing that was broken was difficulty. This
file holds the loop, the structure, the difficulty rule, and the escalation prompt (save it verbatim).

---

## The loop (per question)

1. **Pre-study the cluster** — get the shape of what you're about to solve.
2. **Do the question.** When stuck, ask: *"What concept is here that I'm missing that I'm supposed to know?"*
3. **Articulate out loud while solving** (Wispr Flow): *why is this step important? what happens if I skip it?*
4. **After solving, extract the procedure:** the exact step-by-step process for this question type → steps 1, 2, 3, 4, 5.
5. **Extract the trigger:** *in what scenario do I know to run those five steps?* This is the pattern-recognition
   layer — without it you have a procedure you can't retrieve under exam pressure.

Clusters give a worked example + a real question, so each concept gets hammered at least twice, sometimes
across variations. Use both.

## Structure

- Each big chapter ≈ **3 clusters**.
- After each cluster, report your knowledge gaps → build a **knowledge-gap cluster** → repeat.
- So each big topic lands at ≈ **6 clusters**.
- End of week: a cumulative test covering everything so far.

## The difficulty rule (the part that was broken)

The clusters were "so easy" — stumped once, then the gap clusters and tests felt trivial vs school
questions. The system was running but doing no work.

- **Weekly tests use really hard questions; target ~80%.** Below 80 → the chapter isn't studied enough.
  Way above 80 → the test was too soft.
- **Make the job as hard as possible. Success isn't winning — it's finding as many exam-relevant gaps as possible.**
- **If it feels simple or easy, you're wasting time.** You know the feeling of cognitive load. If it's not
  there, stop and rest — there's no value in low-load reps.
- **Exam backcasting works because it trades time for pain.** Less pain = more time for the same result.
- Pull questions from the **actual past/exam papers in the materials**, then push them slightly past that level.

## Prompt — when a test comes out too easy (paste verbatim)

```
This test was too easy. I already knew [X, Y, Z] before I sat down —
here's why: [reason].
Go back to the actual exam papers in my materials, pull questions at
that difficulty level, make them slightly harder than what's in the
paper, and regenerate the test.
I want to be at the edge of what I can do, not comfortably inside it.
```

Keep firing that until you're in the optimal cognitive-load zone. Don't be polite about it.

## How this pairs with cluster building

The cluster study-sheet spec (all-practice cards, hidden archetype, tutorial-style solutions) is in
[../../../rules/01-cluster-building.md](../../rules/01-cluster-building.md). Every procedural cluster the
coach builds must hit real exam difficulty by default, name the **procedure + trigger** in each archetype
block, and close with the "paste me your transcript → gap cluster" handoff.
