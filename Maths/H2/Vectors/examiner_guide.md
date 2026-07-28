---
subject: Maths
level: H2
topic: Vectors
type: quantitative
status: BUILT
validation_source: MIXED — [OFFICIAL] scope/exclusions from 2026 SEAB 9758 syllabus §3 (the only official doc loaded); [SCHOOL] archetypes, frequency, traps, presentation style from HCI Ch7 lecture notes + Tutorials 7A/7B/7C solutions + Ch7 supplementary solutions + subject-guide §4.1/§5.3 corpus tally; [INFERRED] mark-band micro-mechanics
confidence_ceiling: ~87% (scope/exclusions ~97% [OFFICIAL]; archetype shape & frequency ~89% [SCHOOL]; trap model ~85% [SCHOOL]; mark-band micro-mechanics ~80% [INFERRED]). HARD CAP ~90% — no SEAB mark scheme / examiner report exists in inputs, and the loaded HCI tutorial 7B/7C PDFs are TRUNCATED (only Q1–Q3 of 7B and Q1 of 7C are extractable; footers show "of 16" / "of 27").
last_updated: 2026-07-28
---

# Topic Examiner's Guide — Maths H2 > Vectors (Syllabus §3)

> Specialises the subject guide (`../Maths H2 - Examiner's Guide (9758).md`) to Vectors. Drives the
> 3-cluster split (below) and adversarial question generation.
> **Vectors is Ethan's flagged weak spot and the highest-EV Pure target** — the P1 **12–14m closer is
> very frequently 3D vectors** (subject guide §2, §4.1), and a second vectors question sits in P2 Sec A.
> Estimated total contribution across a real A-Level: **10–12% of all Pure marks** (`[SCHOOL]`).

---

## 1. Content Node Map (coverage checklist) `[OFFICIAL — syllabus §3]`

Every node below traces to a syllabus sub-clause. The 3-cluster split is collectively exhaustive over
these nodes; convergence (`spec.md` §9) checks against this list.

### 3.1 Basic properties of vectors in 2-D and 3-D `[OFFICIAL]`
- [ ] **V1** Addition & subtraction of vectors; scalar multiplication of a vector; geometric meaning of
  each operation (parallelogram rule for sum; scalar multiple → parallel vectors).
- [ ] **V2** Vector notations: column `((x,y)ᵀ)` / `((x,y,z)ᵀ)`, `p = xi + yj`, `q = xi + yj + zk`,
  `AB→` arrow notation, boldface `a` and (written) `a̰` (tilde under the letter).
- [ ] **V3** **Position vector** (from origin, `OA→ = a`) vs **displacement vector** (`AB→ = OB − OA`) —
  displacement has no fixed location.
- [ ] **V4** **Magnitude** of a vector `|v| = √(x² + y² + z²)`.
- [ ] **V5** **Unit vector** `v̂ = v / |v|` — direction with magnitude 1.
- [ ] **V6** **Distance between two points**: `|AB→| = |b − a|`.
- [ ] **V7** **Angles between a vector and the coordinate axes** (direction cosines): angle with x-axis
  = angle between `v` and `i`; similarly for y, z.
- [ ] **V8** **Collinearity** of three points `A`, `B`, `C`: show `AB→ = k · AC→` (parallel + shared
  point). Equivalent: `AB→ × AC→ = 0`.

### 3.2 Scalar and vector products of vectors `[OFFICIAL]`
- [ ] **V9** **Ratio theorem** in geometrical applications. For point `P` dividing `AB` in ratio `λ:μ`
  (i.e. `AP : PB = λ : μ`): `OP→ = (μa + λb) / (λ + μ)`. Special case midpoint: `OM→ = (a + b)/2`.
- [ ] **V10** **Scalar product (dot)** `a · b = |a||b|cos θ = a₁b₁ + a₂b₂ + a₃b₃`. Properties:
  commutative, distributive, `a · a = |a|²`.
- [ ] **V11** **Vector product (cross)** `a × b`. In 3-D, `|a × b| = |a||b|sin θ`, direction
  perpendicular to both by right-hand rule. Properties: `a × b = −(b × a)`, `a × a = 0`, distributive.
- [ ] **V12** **Angle between two vectors** using dot: `cos θ = (a · b) / (|a||b|)`.
- [ ] **V13** **Geometric meaning of** `|a · n̂|` — the **scalar projection** (length) of `a` onto
  direction `n̂`. And `|a × n̂|` — the **magnitude of the perpendicular component** of `a` from `n̂`.
- [ ] **V14** Area of triangle `= ½ |AB→ × AC→|`; area of parallelogram = `|AB→ × AD→|` (adjacent sides).
- [ ] *EXCLUDED:* **triple products** `a · (b × c)` and `a × (b × c)`.

### 3.3 Three-dimensional vector geometry `[OFFICIAL]`
- [ ] **V15** Vector equation of a line: `r = a + λd`, λ ∈ ℝ. Cartesian equivalent:
  `(x−a₁)/d₁ = (y−a₂)/d₂ = (z−a₃)/d₃`.
- [ ] **V16** Vector equations of a plane: **parametric** `r = a + λd₁ + μd₂` (d₁, d₂ non-parallel);
  **scalar-product** `r · n = a · n` (with `n` a normal, often `n = d₁ × d₂`).
- [ ] **V17** Cartesian equation of a plane: `n₁x + n₂y + n₃z = d`.
- [ ] **V18** **Foot of perpendicular** from a point to a line / to a plane.
- [ ] **V19** **Distance** from a point to a line / to a plane.
- [ ] **V20** **Angle** between two lines / between a line and a plane / between two planes.
- [ ] **V21** **Relationships**: (i) two lines (parallel / intersecting / skew), (ii) a line & a plane
  (parallel / intersecting / line lies in plane), (iii) two planes (parallel / intersecting / same).
- [ ] **V22** **Intersections** of lines and planes.
- [ ] *EXCLUDED:* **shortest distance between two skew lines** and the **common perpendicular** to two
  skew lines. If a stem looks like skew-distance, it is really **point-to-line minimisation** (subject
  guide §4.1 corpus note).

> **Coverage:** every node traces to §3 of the loaded 2026 SEAB 9758 syllabus. Chapter notes
> (HCI Ch7 PDF, 121 pages) confirm the same content structure with more depth on §3.1 and §3.2
> presentation conventions; the tutorial 7B/7C PDFs are truncated (only opening questions extracted).
> **Not in inputs**: SEAB official past-paper vector questions or mark schemes — see confidence note.

---

## 2. Cluster split proposal (3 clusters) `[SCHOOL — mirrors HCI tutorial split]`

The HCI tutorial split is 7A = basics + ratio; 7B = lines; 7C = planes. Cluster split mirrors this:

| # | Cluster | Nodes covered | Estimated study depth |
|---|---|---|---|
| 1 | **Basics, Products & Ratio Theorem** | V1–V14 (all of §3.1 + §3.2 except lines/planes) | ~3h + drill |
| 2 | **Lines in 3-D** | V15 partial + V21(i) + V22 (lines only) + line-related from V18–V20 | ~2.5h + drill |
| 3 | **Planes in 3-D + Synthesis** | V16, V17, V21(ii)(iii), V22 (planes), plane-related from V18–V20 | ~3h + drill |

Cluster 1 (built 2026-07-17) is the foundation — every subsequent vector question in the exam uses
the position-vector / ratio-theorem / dot / cross machinery from here.

---

## 3. Archetype distribution `[SCHOOL — subject guide §4.1 + HCI corpus]`

The overall Vectors mark share (across the whole topic — cluster-agnostic):

| Archetype | % of vector marks | Where it lives | Cluster |
|---|---|---|---|
| **Lines & planes geometry** (equations, intersection, foot of ⊥, reflection, angle, three-planes) | ~45% | P1 closer 12–14m; P2A 7–13m | 2 + 3 |
| **Scalar & vector product manipulation** (`a×b=c×a`-type; `\|a×b\|` as area; `a·b` as projection; perp/parallel proofs; angle) | ~25% | Spread across P1 & P2A | 1 (partial) + 2 + 3 |
| **Ratio theorem & position-vector geometry** (midpoints, `AP:PB`, collinearity, parallelism proofs) | ~20% | Often the P1 or P2A short-to-medium question (5–10m) | **1** |
| **Distance / magnitude / minimisation** (`\|PR\|` minimisation, unit-vector reasoning) | ~10% | Sub-part inside a larger question | 1 + 2 + 3 |

**Cluster 1 primary targets**: the ratio-theorem + position-vector marks (~20% of vector marks) and
the dot/cross-product setup marks (~15% of the scalar/vector-product bucket) — combined **~35% of
vector marks land in this cluster's scope**.

---

## 4. Trap Model `[SCHOOL — subject guide §5.3 + HCI tutorial callouts]`

Ranked by mark-loss frequency in the corpus. First seven are Cluster 1 traps; last three are
lines/planes territory (Clusters 2–3).

### Cluster 1 traps
- **T1** Confusing **scalar projection `a · n̂`** (a signed length) with the **vector projection
  `(a · n̂) n̂`** (a vector); and both with `|a × n̂|` (the perpendicular-component magnitude). HCI Ch7
  notes explicitly flag this.
- **T2** **`|a × b|` (area / sine)** vs **`a · b` (projection / cosine)** mix-ups in angle/area
  questions — reaching for the wrong product.
- **T3** Using a **position vector where a direction vector is needed** (or vice versa); reversing
  `AB→` vs `BA→` and getting a sign wrong throughout.
- **T4** **Ratio theorem weighting slip**: for `P` dividing `AB` in ratio `λ:μ`, the position vector is
  `(μa + λb)/(λ + μ)` — **the weight goes with the** opposite **endpoint**. Getting this backwards
  gives `(λa + μb)/(λ + μ)`, which is wrong.
- **T5** Writing `|CP|/|PD| = 2/3` to justify collinearity — **you cannot divide vectors and this does
  NOT prove collinearity** (HCI Tutorial 7A Q2 explicitly warns this). Must show `CP→ = k · PD→` for
  some scalar `k`.
- **T6** Concluding two lines are **skew when they are parallel** — missing that parallel non-identical
  lines also have "no intersection". Must **explicitly check direction vectors first**.
- **T7** Forgetting the **`sin 90° = 1`** simplification when one factor is a unit vector perpendicular
  to another (supplementary Q1(iii) — this collapses `|p × q|` cleanly when `p ⊥ q` and `|p| = 1`).

### Cluster 2/3 traps (for context; won't appear in this cluster's stems)
- **T8** Solving the wrong perpendicularity condition for foot of ⊥ (line vs plane procedure).
- **T9** "Verify that A lies on plane π" first-part bait — a 1-mark warm-up that tempts you into the
  wrong vector form for the main calculation.
- **T10** Reaching for **skew-line shortest distance** or a **common perpendicular** — both **EXCLUDED**
  in 9758. The real ask is point-to-line minimisation.

---

## 5. Mark-scheme conventions `[SCHOOL — HCI tutorial solutions]`

The HCI tutorial answer style (7A + supplementary) sets Ethan's presentation target. **Cluster study
sheets must mirror it verbatim** (per memory rule `[[tutorial-style-solutions]]`):

- **Column vectors** in parentheses, stacked vertically. Never mixed with `i, j, k` form in the same
  line — pick one.
- **∴** for conclusions (final answers, verifications).
- **"By ratio theorem, …"** as the opening phrase for any ratio-theorem application.
- **"Since AB→ is parallel to (…), ∴ AB→ = m(…), where m is a scalar."** — the exact wording for a
  "parallel to a vector expression" step.
- **Simultaneous equations** labelled `— (1), (2), (3)` on the right.
- **Multiple methods** presented when useful (7A Q3 shows "Method 1" explicitly).
- **"Note that (3) = (5). Hence solving (4) and (5), k = …, t = …"** — the consistency-check pattern
  when there are more equations than unknowns.
- **Yellow callout boxes** on the right with meta-warnings ("Note that OM ≠ ½ BD. In fact, BM = ½ BD"
  — a subtle midpoint vs ratio distinction). Study sheet renders these as red `.trap` blocks.
- **Diagrams**: always include a labelled sketch when the question involves collinearity, ratios, or
  intersecting lines. HCI Tutorial 7A Q3 shows `Always draw diagram to visualise vectors involved.`
- **`(shown)`** at the end of "show that" questions.
- **`— (1)` and `⟹`** for chained implications.

---

## 6. Confidence & validation

### 6.1 90% confidence check

| Dimension | Threshold | Result | Notes |
|---|---|---|---|
| Exam format & structure | ≥95% | ✅ **~97%** | Inherited from subject guide (verbatim OFFICIAL syllabus). |
| Content nodes | ≥90% | ✅ **~96%** | Every node in §1 traces to syllabus §3. |
| Question type & method | ≥85% | ✅ **~89%** | Subject-guide corpus tally + HCI tutorial 7A + supplementary Q1–Q3 corroborate archetype shape. **Truncation caveat**: HCI 7B/7C PDFs missing pages 5+. |
| Mark scheme (reward/band) | ≥90% | ⚠️ **~85% — borderline** | No SEAB mark scheme in inputs. HCI presentation style is high-fidelity, but band cut-offs are `[INFERRED]`. |
| Trap model | ≥85% | ✅ **~85%** | Corroborated by subject guide §5.3 + HCI 7A explicit callouts. Ranking is `[SCHOOL]`, not `[OFFICIAL]`. |

**Outcome:** **4 of 5 pass** (mark-scheme borderline). Overall ~87% confidence, well above the 70%
LOW floor. Ceiling capped at ~90% pending an official past-paper sitting.

### 6.2 Recalibration trigger
If Ethan's cluster session performance is **>70%** but his first official vectors question (in a
timed paper) is **<50%**, the archetype model or trap ranking is misaligned — recalibrate.

### 6.3 Open gaps
- **RESOLVED (28 Jul):** the **full HCI Chapter 7 material is now uploaded** to `Resources/Maths/Vectors/`
  (→ `Math/Vectors/`): the complete **121-page student-copy notes** (`2025 Chapter 7 Vectors (Student Copy).pdf`)
  plus four tutorial/worked-answer PDFs (`download (50)–(53).pdf`, one ~17.5 MB = full worked solutions).
  This clears the earlier 7B/7C truncation. **Action before building Cluster 2/3:** read the planes
  tutorial + its verbatim worked answers from these PDFs, re-verify the archetype/trap tables and the
  presentation conventions (§5) against them, then build Cluster 3 (Planes) with the answers lifted
  **verbatim** from the key. File the PDFs into `inputs/Maths/H2/Vectors/` as part of that build.
- **SEAB past-paper vector questions** and mark schemes — still none loaded (the subject-guide corpus
  of real Cambridge TYS 2009-2022 + 2012-2025 prelims covers the aggregate patterns).

---

## Sources
**Primary `[OFFICIAL]`:** SEAB 9758 syllabus 2026 §3 (`inputs/Maths/H2/official_docs/Maths_H2_syllabus_2026.txt`).
**`[SCHOOL]` HCI corpus (verified in inputs):** `inputs/Maths/H2/Vectors/chapter_notes/7_Vectors.md`
(topic index) + `HCI_Ch7_Vectors_notes.pdf` (121pp; first 4pp extractable — learning objectives + §7.1
+ §7.2 fully read); `inputs/Maths/H2/Vectors/model_answers/HCI_Tutorial_7A_solutions.pdf` (Q1–Q3
extracted; ratio theorem + collinearity presentation); `HCI_Ch7_supplementary_solutions.pdf` (Q1–Q3
extracted; ACJC23 / EJC23 / SAJC22 prelim-standard questions on ratio + cross-product + collinearity —
these are the exam-style stems Cluster 1 mirrors).
**`[SCHOOL]` inherited:** subject-guide §4.1 archetype distribution (~45/25/20/10) and §5.3 trap
ranking, both backed by the multi-year Cambridge TYS + prelim corpus.
**`[INFERRED]`:** mark-band micro-mechanics; specific per-error deduction sizes.
