# Prompt 09 — Material Intake (topic-by-topic; H2-only)

**Enhanced model (28 Jul), not retired.** Ethan uploads materials **topic-by-topic, the day before** — not all at once. The daily behaviour:

1. **When I give tomorrow's plan, I ASK Ethan to upload the materials for tomorrow's Chem/Bio/Math topics** (lecture notes, tutorials, supplementary, past papers, answer keys). *Chem/Bio/Maths only — CSC and GP already have all their materials, never ask for those.*
2. **On paste, do TWO things only** (no ingest/extract/question-bank ceremony): (a) **file** the material into `inputs/{Subject}/H2/{Topic}/` so it's easy to find; (b) **store/reference** it for the build.
3. **Build the cluster from the real material** — use the school's ACTUAL questions (or harder), and **lift the ANSWERS VERBATIM from the school answer key** (the #1 rule; my paraphrase ≠ the mark scheme). Surface the verbatim wording in a "use these exact words" box.
4. **YouTube video** → run `yt-dlp --write-auto-subs --write-subs --skip-download --convert-subs srt` to pull the transcript, then reference it.

The all-at-once reorganise flow below still works if Ethan ever dumps everything at once, but the day-before, per-topic flow above is the default.

---

## (Legacy) all-at-once reorganise

Fire the block below only if Ethan drops the full set of PDFs at once. It reorganises the whole system so every cluster is grounded in the school's real content and wording.

---

## The paste-in prompt

> I've uploaded all the Chem, Bio, and Maths materials (lecture notes, tutorials, supplementary exercises, past papers). Before building anything else, reorganise the system around them. Do this in order and report what you did at each step:
>
> **1. Ingest.** Find every new file I dropped (check `inputs/_inbox/` and the `inputs/{Subject}/H2/{Topic}/` tree). File each one into the right subject/level/topic folder (`past_papers`, `official_docs`, `chapter_notes`, `model_answers`, `school_resources`). List anything you can't confidently place and ask me.
>
> **2. Extract verbatim answer wording.** For each subject and topic, pull the exact phrasing the school notes and mark schemes reward — the mark-earning sentences, definitions, and reasoning, word for word. Save them into each topic's examiner guide (or a `wording_reference.md` per topic) so clusters and mark schemes use the school's exact wording, never a paraphrase. Tag `[OFFICIAL]` when it's from a real mark scheme, `[INFERRED]` when it's from model answers.
>
> **3. Build a real question bank per topic.** Extract every actual question — tutorial questions, supplementary exercises, and the questions in the H2 past papers already in the repo — into a `question_bank.md` per topic, with the source labelled. These become the source for cluster examples, practices, tests, and gap clusters. From now on, practices and drill questions are drawn from THESE, pitched slightly higher, not invented from scratch.
>
> **4. Strip all H1 and H3.** Remove every H1 and H3 folder, guide, plan block, and mention across the system — I only sit H2. Delete the H1/H3 branches, scrub references in the examiner guides and the plan, and confirm nothing H1/H3 remains.
>
> **5. Reorganise / verify the schema.** With the real materials in place, re-verify each subject-level and topic-level examiner guide against the new source (fix or rebuild any that are stale or thin), and make sure the folder structure and the dashboard plan reflect the H2-only, real-question setup.
>
> **6. Then upgrade the clusters.** Once the above is done, when I ask for a cluster, build its examples and practices from the real question bank — practices harder than examples, parts (c) and (d), multi-object and chained like the real long H2 questions, and worked solutions that name every symbol and use the school's verbatim wording.
>
> Report a short summary at each step. Don't skip the H1/H3 strip or the verbatim-wording extraction — those are the whole point.

---

## Why this exists

Ethan flagged (27 Jul) that invented practice questions come out too easy and too similar to the worked example, and that the H2 papers are much harder. The fix is to source everything from the real school materials once they exist: real questions for difficulty and phrasing, real mark schemes for verbatim wording. H1 and H3 are noise — he sits H2 only. Related rules: `../rules/01-cluster-building.md` §3 and §5d (real questions, practice harder than example), `../rules/04-answer-presentation.md` §5 (verbatim wording, name every symbol). Memory: `feedback_practice_harder_than_example`, `feedback_ingest_real_materials`.
