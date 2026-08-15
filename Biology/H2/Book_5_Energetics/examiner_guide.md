---
subject: Biology
level: H2
topic: Book_5_Energetics
syllabus_code: 9477
type: qualitative   # subject default, but this is the WEAKEST fit of any Book so far. OVERRIDE → quantitative
                    # for three real sub-strands: reading rate off a limiting-factor or gas-exchange curve
                    # (specimen P2 Q5(c) was mean-rate arithmetic to 2 s.f.), respiratory quotient
                    # calculation from respirometer readings, and Rf calculation from a chromatogram.
                    # Those three close by solving variants until mechanical. Everything else closes by
                    # concept doc plus re-test at a new angle.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~87% MIXED. [OFFICIAL] ~97% on scope (all 12 LOs, 3(a) to 3(l), read verbatim from the syllabus PDF and cross-checked against both chapter headers, with a whole-document literal term search); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part); [SCHOOL] ~80% on marking (JC prelim schemes plus the school's own 3-page Concept Check answer key; no SEAB scheme exists for 9477); archetype frequencies are MEASURED by parsing 1275 real questions, not estimated"
last_updated: 2026-08-15
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 5: Energetics (Photosynthesis and Respiration)

> Specialises the subject guide to Book 5. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in this
> folder before building any cluster, because Book 5's school notes contain nine genuine factual or
> arithmetic errors and the most dangerous of them sits on the Overview page that students photograph.

---

## 0. Scope boundary (get this right before anything else)

**Book 5 is the cleanest-scoped Book in the course and simultaneously the one where the school teaches
the most unexaminable material.** Both facts follow from the same thing: it sits entirely inside Core
Idea 3, it covers twelve consecutive learning outcomes with nothing else mixed in, and **five of those
twelve outcomes carry a written exclusion clause.** No other Book in 9477 comes close to that density
of exclusions.

| School chapter | Core Idea | 9477 LO(s) | Pages | Note |
|---|---|---|---|---|
| 5.1 Energetics I: Photosynthesis | **3** Energy and Equilibrium | **(a), (b), (c), (d), (e), (l)** | 39 | Sections 5, 6.2, 6.3 marked FLIPPED CLASSROOM by the school |
| 5.1a Photosynthesis Concept Check ANSWERS | **3** | none printed | 3 | The only school-authored answer key in the Book. See §3 |
| 5.2 Energetics II: Cellular Respiration | **3** Energy and Equilibrium | **(a), (f), (g), (h), (i), (j), (k), (l)** | 40 | §5.5.3 and §5.6 carry the school's own "not required" banner. §5.6's shuttle box marked Supplementary |

That is **twelve learning outcomes**, 3(a) through 3(l), the whole of Core Idea 3 except the four
cell-signalling outcomes 3(m) to 3(p) which are Book 3. `[OFFICIAL]` (syllabus pp.17 to 18, read
verbatim). `[SCHOOL]` chapter split and page counts.

**There is no letter-offset error anywhere in Book 5**, and there is no word-level wording difference
either. Three commas and one capital letter differ between the school's printed outcomes and the
published syllabus, all listed in the digest's cross-chapter finding C. Nothing else.

### The practical consequence of being one Core Idea

**Paper 1 sweeps the syllabus in learning-outcome order.** Book 3 spanned three Core Ideas and its
specimen items were scattered from Q8 to Q22. Book 5 is one contiguous block of outcomes, and on the
9477 specimen its Paper 1 items landed at **Q19, Q20 and Q21, three in a row.** `[OFFICIAL]`

Two things follow. First, Book 5 questions arrive together, so weakness here costs several consecutive
marks rather than one at a time. Second, and much more importantly, **Book 5 is where Paper 4 lives.**
See §2.0. That single finding reorders the whole revision plan.

### Verbatim 9477 Learning Outcomes for Book 5

Reproduced word for word from
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`, pages 17 to 18. Candidates should be
able to: `[OFFICIAL]`

**Core Idea 3, Energy and Equilibrium**

**(a)** identify components of chloroplasts and mitochondria in drawings, photomicrographs and
electronmicrographs

**(b)** explain the absorption and action spectra of photosynthetic pigments

**(c)** With reference to the chloroplast structure, describe and explain how light energy is harnessed
and converted into chemical energy during the light-dependent reactions of photosynthesis (names of
complexes in the ETC and detailed mechanism of action of ATP synthase are not required)

**(d)** outline the three phases of the Calvin cycle in the light-independent reactions of
photosynthesis in C3 plants: (i) CO2 fixation, (ii) PGA reduction, and (iii) ribulose bisphosphate
(RuBP) regeneration, indicating the roles of rubisco, ATP and reduced NADP in these processes that
ultimately allow synthesis of sugars (knowledge of details of the structure of intermediate compounds
and the names of other enzymes is not required)

**(e)** discuss limiting factors in photosynthesis and carry out investigations on the effect of
limiting factors such as temperature, light intensity and carbon dioxide concentration on the rate of
photosynthesis

**(f)** outline the process of glycolysis, highlighting the location, raw materials used and products
formed (knowledge of details of the intermediate compounds, names of enzymes and isomerisation is not
required)

**(g)** outline the processes of the link reaction and Krebs cycle, highlighting the location, raw
materials used and products formed (in terms of dehydrogenation and decarboxylation)

**(h)** outline the process of oxidative phosphorylation, including the roles of oxygen and the
electron transport chain (ETC) in aerobic respiration (names of complexes in the ETC, detailed
mechanism of action of ATP synthase and calculation of total yield of ATP from oxidative
phosphorylation are not required)

**(i)** explain the production of a small yield of ATP from respiration in anaerobic conditions in
yeast and in mammalian muscle tissue

**(j)** explain the significance of the formation of ethanol in yeast and lactate in mammals in the
regeneration of NAD

**(k)** investigate the effect of factors including substrate concentration, oxygen concentration and
temperature on the rate of respiration

**(l)** outline chemiosmosis in photosynthesis and respiration (names of complexes in the ETC are not
required)

Core Idea 3 closes with the standing instruction: *"Use the knowledge gained in this section in new
situations or to solve related problems."* `[OFFICIAL]`

### The five exclusions the syllabus states outright

These are written into the outcome text. They are the largest time savings available anywhere in the
Biology corpus. `[OFFICIAL]`

1. **Names of complexes in the ETC are not required.** Stated three separate times, in LO (c), LO (h)
   and LO (l). Repeating an exclusion three times is the syllabus shouting.
2. **Detailed mechanism of action of ATP synthase is not required.** Stated twice, in LO (c) and LO (h).
3. **Calculation of total yield of ATP from oxidative phosphorylation is not required** (LO h). The
   school reprints this banner itself, in bold, at the top of two consecutive sections.
4. **Knowledge of details of the structure of intermediate compounds and the names of other enzymes is
   not required** (LO d). §5 works out exactly how far this reaches, because it is the one that could
   be over-applied.
5. **Knowledge of details of the intermediate compounds, names of enzymes and isomerisation is not
   required** (LO f). This kills all ten named steps of glycolysis and the whole of the school's
   Concept Check 1.

Note the difference in wording between exclusions 4 and 5, because it matters. LO (f) excludes the
**intermediate compounds** of glycolysis outright. LO (d) excludes only the **structure** of the Calvin
cycle intermediates and the **names of other enzymes**, while naming RuBP, PGA and rubisco itself in
the outcome. That is a much narrower cut than it first looks. See §5.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 5, grouped by the cluster that should teach it. Convergence
requires no UNTOUCHED node. LO letters are `[OFFICIAL]`.

### Cluster 01, chloroplast, pigments and the light-dependent reactions (LOs 3a, 3b, 3c, part of 3l)

- [ ] **Chloroplast structure to function (3a, 3c)**: envelope, stroma, thylakoid, granum, intergranal
      lamella, and for each one what it enables. The three that carry marks are stroma holding Calvin
      cycle enzymes, thylakoid stacking increasing surface area for pigments and electron carriers, and
      the thylakoid membrane being impermeable to protons.
- [ ] **Identifying chloroplast components from a micrograph (3a)**. A distinct skill from describing
      them. The corpus is full of TEM label questions and the schemes are fussy about singular and
      plural. See §3.
- [ ] **Photosynthetic pigments (3b)**: chlorophyll a as the only pigment that participates directly,
      accessory pigments, carotenoids, and the two functions of accessory pigments.
- [ ] **Absorption spectrum against action spectrum (3b)**: what each axis is, why the two curves have
      similar shapes, what the gap between them shows, and how to read the accessory-pigment
      contribution off it.
- [ ] **Photosystems (3c)**: light-harvesting complex, reaction centre, primary electron acceptor,
      PSII with P680 and PSI with P700, and why the two absorb at different wavelengths.
- [ ] **Light harvesting and resonance energy transfer (3c)**: energy passed, not electrons.
- [ ] **Non-cyclic photophosphorylation (3c)**, run forwards as a chain: photoactivation, capture by
      the primary electron acceptor, photolysis refilling the deficit, electron flow down carriers of
      progressively lower energy, proton pumping, PSI re-excitation, reduction of NADP.
- [ ] **Photolysis of water (3c)**, and all three of its roles: electrons, oxygen as by-product,
      protons contributing to the gradient. The third is the one candidates omit.
- [ ] **Cyclic photophosphorylation (3c)**, and specifically what it lacks: no PSII, no photolysis, no
      oxygen, no reduced NADP, ATP only.
- [ ] **Cyclic against non-cyclic, point for point (3c)**. The school's own answer key gives this table
      in accepted wording. Reproduced verbatim in §3.
- [ ] **Chemiosmosis in the chloroplast (3l)**: the four moves, in the thylakoid's own vocabulary.
- [ ] **Oxygen is a by-product here, not a final electron acceptor (3c)**. Flagged as one of the two
      most common photosynthesis-respiration confusions by an examiner comment in the corpus.

### Cluster 02, the Calvin cycle and limiting factors (LOs 3d, 3e)

- [ ] **CO2 fixation (3d)**: RuBP as the five-carbon acceptor, rubisco, unstable six-carbon
      intermediate, two PGA.
- [ ] **PGA reduction (3d)**: ATP supplies energy, reduced NADP supplies the hydrogen, triose phosphate
      is the product.
- [ ] **RuBP regeneration (3d)**: five of six triose phosphate returned, further ATP invested.
- [ ] **The roles of rubisco, ATP and reduced NADP (3d)**, named in the outcome in those exact words.
      A question can ask for any one of the three in isolation.
- [ ] **Carbon accounting through the cycle (3d)**: 5C to 6C to 3C to 3C, three turns per net triose
      phosphate, six turns per hexose. **`[type override → quantitative]`**
- [ ] **The Calvin cycle under a changed condition (3d, 3e)**: what happens to RuBP and PGA
      concentrations when carbon dioxide, light or temperature is removed or restored. This is the
      single highest-frequency question shape in the whole Book and it is **9477 Specimen P2 Q5**.
- [ ] **The principle of limiting factors (3e)**: the rate is set by the factor nearest its minimum.
- [ ] **Reading a limiting-factor curve (3e)**: which factor limits in which region, the saturation
      point, and what a plateau means. **`[type override → quantitative]`** for rate arithmetic off the
      curve.
- [ ] **Multi-curve limiting-factor figures (3e)**: two or three curves at different carbon dioxide
      concentrations or temperatures, and reading which factor is limiting where.
- [ ] **Temperature as a limiting factor (3e)**, and why it behaves differently from light: it acts on
      enzymes, so the curve falls again past the optimum, which light and carbon dioxide curves do not.
- [ ] **Compensation point (3e)**: rate of photosynthesis equals rate of respiration, no net gas
      exchange. Not named in the syllabus, and worth 10 marks on the specimen practical. See §5.
- [ ] **Sun against shade plants (3e)**: lower respiration rate, lower compensation point, lower
      saturation point in shade plants, and the leaf-thickness reason.

### Cluster 03, mitochondrion, glycolysis, link reaction and Krebs cycle (LOs 3a, 3f, 3g)

- [ ] **Mitochondrial structure to function (3a)**: outer membrane, inner membrane and cristae, matrix,
      intermembrane space. **9477 Specimen P1 Q21 is nothing but this.**
- [ ] **Identifying mitochondrial components from a micrograph (3a)**.
- [ ] **Which stage happens where (3a, 3f, 3g, 3h)**: cytoplasm, matrix, matrix, inner membrane. A
      one-mark question that appears constantly and a stem for much longer ones.
- [ ] **Glycolysis at outcome depth (3f)**: location, raw materials, products. Nothing else.
- [ ] **Substrate-level phosphorylation and dehydrogenation as the two mechanisms in glycolysis (3f)**.
- [ ] **The link reaction (3g)**: location, pyruvate in by active transport, one decarboxylation and
      one dehydrogenation, acetyl CoA and carbon dioxide and reduced NAD out, twice per glucose.
- [ ] **The Krebs cycle at outcome depth (3g)**: location, acetyl CoA in, two decarboxylations, three
      NAD reductions, one FAD reduction, one substrate-level phosphorylation, per turn, twice per
      glucose.
- [ ] **Why it is a cycle (3g)**: the four-carbon acceptor is regenerated.
- [ ] **Dehydrogenation and decarboxylation as the framing vocabulary (3g)**, because the outcome says
      "in terms of" those two words and schemes reject "broken down" and "converted" in their place.
- [ ] **The products budget per glucose (3f, 3g)**: 6 CO2, 4 ATP, 10 reduced NAD, 2 reduced FAD. **`[type
      override → quantitative]`** Note the school's Overview page says 4 CO2 and is wrong. See the digest.
- [ ] **The roles of NAD and FAD as coenzymes and hydrogen carriers (3g)**. **9477 Specimen P2 Q7(a)
      asked exactly this for three marks.**
- [ ] **Respiratory substrates other than glucose (3g)**: where lipid and amino acid breakdown products
      enter. Needed for respiratory quotient questions.

### Cluster 04, oxidative phosphorylation, chemiosmosis and anaerobic respiration (LOs 3h, 3i, 3j, 3l)

- [ ] **The electron transport chain (3h)**: carriers of increasing electron affinity giving one-way
      flow, energy released in steps, no ATP made by the chain itself.
- [ ] **The role of oxygen (3h)**: final electron acceptor, reduced to water, and what happens without
      it. **9477 Specimen P2 Q7(b) is this, for three marks.**
- [ ] **Chemiosmosis in the mitochondrion (3l)**: pumping into the intermembrane space, the chemical and
      electrical components of the gradient, proton motive force, return through ATP synthase.
- [ ] **Chemiosmosis compared across the two organelles (3l)**, which is the whole point of the outcome
      being shared. The mapping table is in the digest's cross-chapter finding B and neither chapter
      builds it.
- [ ] **Substrate-level against oxidative phosphorylation (3f, 3g, 3h)**: mechanism, location, share of
      total ATP.
- [ ] **Inhibitors and uncouplers applied, not named (3h, 3l)**: block the chain and there is no
      gradient; block ATP synthase and the gradient grows but no ATP is made; uncouple and the gradient
      collapses to heat.
- [ ] **Why anaerobic respiration yields so little (3i)**: only glycolysis runs, only substrate-level
      phosphorylation, net two ATP per glucose.
- [ ] **The regeneration of NAD as the whole point of fermentation (3j)**: glycolysis needs oxidised
      NAD; the chain cannot regenerate it without oxygen; pyruvate is used as the electron acceptor
      instead; glycolysis continues. This chain is LO 3(j) written out and it is the highest-value
      six-mark block in chapter 5.2.
- [ ] **Lactate in mammals, ethanol and carbon dioxide in yeast (3i, 3j)**, with the two-step detail on
      the yeast side.
- [ ] **Why lactate is recoverable and ethanol is not (3j)**: lactate returns to pyruvate, ethanol
      cannot because a carbon has left as carbon dioxide.
- [ ] **Aerobic against anaerobic yields (3i)**: the comparison, without quoting a total ATP figure
      for the aerobic side beyond "much greater".

### Cluster 05, investigating photosynthesis and respiration (LOs 3e, 3k, plus Paper 4) `[OCTOBER PRACTICAL BLOCK]`

**This cluster is not optional and it is not small. See §2.0 and §5.** Flagged here so it is visible in
the node map, but it should be built in the dedicated October practical block, not in the normal
sequence.

- [ ] **Measuring the rate of photosynthesis (3e)**: oxygen bubbles from cut pondweed, gas syringe and
      capillary, dissolved oxygen probe, carbon dioxide gas sensor, leaf-disc flotation.
- [ ] **Filters and light intensity (3e)**, which is the specimen's chosen method.
- [ ] **Redox dyes for the light-dependent reaction (3e)**: DCPIP and methylene blue as artificial
      electron acceptors, the Hill reaction, and **the fact that the endpoint is green rather than
      colourless because chloroplasts are still in the tube.** Three quarters of the cohort got that
      wrong on a school prelim.
- [ ] **Hydrogencarbonate indicator (3e)**: the colour scale against carbon dioxide concentration, and
      compensation point work.
- [ ] **Pigment separation by chromatography and Rf calculation (3b)**. **`[type override →
      quantitative]`** Taught nowhere in Book 5. See §5.
- [ ] **Measuring the rate of respiration (3k)**: the respirometer, soda lime or potassium hydroxide,
      the manometer, the compensation tube, and why constant temperature matters.
- [ ] **Respiratory quotient (3k)**: both formulae, and the values by substrate that the chapter never
      gives. **`[type override → quantitative]`**
- [ ] **Yeast investigations (3k)**: aerobic against anaerobic, substrate concentration, temperature,
      redox dye decolourisation timing.
- [ ] **Planning questions (3e, 3k)**: variables, dilution tables, controls, replicates, results table
      layout, theoretical graph, risk. **29 planning questions in the corpus, 2.3% of all records**, and
      the specimen practical closes with a 10-mark one.
- [ ] **Data-handling discipline**: quoting values with units, reading to half the smallest division,
      noticing when a graph does not start at the origin, selecting the right data series. All four are
      named in examiner comments in the corpus.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part from all four **9477 specimen papers**
(`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only
genuinely Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**,
so everything here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Book 5 landed on the specimen

| Paper | Book 5 questions | Book 5 marks (clear) | Book 5 marks (with crossovers) | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | Q19, Q20, Q21 clear; Q1 and Q2 crossover | 3 | 5 | 10% to 17% |
| **P2** Structured (90 marks) | Q5 entire (7), Q7 entire (12) | 19 | 19 | 21% |
| **P3** Section A (55 marks) | Q1(a)(iv) (6); Q1(a)(iii) crossover (2) | 6 | 8 | 11% to 15% |
| **P3** Section B essay (20 marks) | **none. Both options were Book 1** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | **Q1 entire (20), Q3 entire (10)** | **30** | **30** | **60%** |

Applying the official paper weightings of 15%, 30%, 35% and 20% `[OFFICIAL]` (syllabus p.9):

> **Book 5 was worth roughly 23% to 25% of the whole A-level on the specimen.**

For comparison, on the same four papers the Book 3 guide measured Book 3 at 13% to 16% and the Book 2
guide measured Book 2 at 8% to 11%. **Book 5 is, by a wide margin, the highest-value Book measured so
far, and roughly half of its value sits on Paper 4.** Twelve of those twenty-three percentage points
come from the practical paper alone.

### The finding that reorders the revision plan

**Book 5 supplied 60% of the 9477 specimen practical paper.** `[OFFICIAL]`

- **Question 1, 20 marks.** "In this question you will investigate the effect of light intensity on the
  rate of photosynthesis." Pondweed in a gas syringe with a capillary tube, five neutral-density
  filters, and six parts: sketch and explain the expected graph [4], record results in a self-designed
  table [5], plot the results [4], discuss what they suggest about the prediction [2], suggest the
  limiting factor acting at the darkest filter and explain [1], suggest the effect of adding sodium
  hydrogencarbonate [2], and evaluate a proposed repeat [2].
- **Question 3, 10 marks.** A full planning question on **compensation points in sun and shade ivy
  leaves**, using hydrogencarbonate indicator. The stem supplies the indicator colour scale and defines
  compensation point in words. The plan must identify dependent and independent variables, controls,
  and a repeatable method.
- Question 2, the remaining 20 marks, was stomatal density on a leaf epidermal peel, which is Book 1
  and plant anatomy.

Ethan has skipped Paper 4 entirely. On this evidence **the October practical block is not a tidy-up, it
is the single largest recoverable block of marks in the subject, and Book 5 is where most of it sits.**

### What the specimen actually asked (the useful detail)

**Paper 1, the three clear stems.** `[OFFICIAL]`

| Q | Node tested | LO | Stem type |
|---|---|---|---|
| 19 | Rubisco activation by Mg2+ and carbamate formation, with rubisco activase as an ATPase | **3(d)** | Four statements, one supported by the passage. **Entirely unfamiliar information.** Nothing about the mechanism is in the syllabus or the school's notes; the candidate must reason from the stem |
| 20 | A rate-of-oxygen-production against temperature curve for *Chlamydomonas*, asking which of carbon dioxide, light intensity and temperature must be limiting at a named point on the plateau | **3(e)** | Numbered-statement multiple response. The point R sits past the peak |
| 21 | Where the link reaction and oxidative phosphorylation occur in a mitochondrion | **3(a)/3(g)/3(h)** | Two-column "which row" grid, both cells must be right. Pure location recall |

Three structural facts follow.

1. **Q19 is a pure transfer question with zero recall content.** It gives a mechanism the syllabus does
   not teach and asks the candidate to read it. This is the standing instruction ("use the knowledge
   gained in this section in new situations") tested literally.
2. **Q21 is the only genuinely recallable Book 5 item on the whole specimen paper 1**, and it is worth
   one mark for knowing two locations. Location recall is cheap and it is asked.
3. **Q20 turns on reading a plateau correctly.** At a plateau the plotted variable is not limiting;
   something else is. The trap is answering "temperature" because temperature is on the axis.

**Paper 2 Question 5, the Calvin cycle anchor. Seven marks, four parts**, built on a *Chlorella*
suspension switched from 1% to 0.03% carbon dioxide, with RuBP and PGA concentrations plotted.

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | State **precisely** where in the chloroplast RuBP and PGA are synthesised | 1 | 3(a)/3(d) |
| (b) | Explain why RuBP concentration **changed** between 200 s and 275 s | 2 | 3(d) |
| (c) | **Calculate** the mean rate of decrease in PGA between 200 s and 350 s, show working, two significant figures | 2 | 3(d) quantitative |
| (d) | Explain how the decrease in PGA leads to a decreased harvest | 2 | 3(d)/3(e) |

Four things to take from it. The word **"precisely"** in (a) means "stroma" and not "chloroplast".
Part (b) is the classic switch-off question run in the harder direction, since RuBP *rises* when carbon
dioxide is removed because it is no longer being consumed. Part (c) is a **calculation with a
significant-figures instruction**, on a paper whose corpus otherwise shows Calculate at 2.4%. And part
(d) reaches out of the cycle into crop yield, which is the shape LO 3(e)'s "discuss" invites.

**Paper 2 Question 7, the respiration anchor. Twelve marks, three parts**, opening on one sentence:
"During cellular respiration, NAD is reduced."

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | Describe the **role of NAD** in cellular respiration | 3 | 3(f)/3(g) |
| (b) | Explain why NAD **cannot be regenerated** from reduced NAD in mitochondria in the absence of oxygen | 3 | 3(h)/3(i)/3(j) |
| (c) | A figure of ATP synthase in the inner mitochondrial membrane, two parts | 3 + 3 | 3(h)/3(l) |

**Note what Q7 does and does not ask.** It never asks for the stages of respiration. It asks for the
role of one coenzyme, the consequence of oxygen absence, and chemiosmosis read off a figure. That is
LO 3(f) to 3(l) tested through their *function* rather than their *sequence*, and it is a strong
signal that reciting four stages is not what earns marks.

**Paper 3 Question 1(a)(iv), six marks.** "The mtDNA genes do not code for the proteins found in the
mitochondrial matrix. **Name and outline two respiratory processes that depend on the proteins found in
the mitochondrial matrix.**" That is the link reaction and the Krebs cycle, named and outlined, for six
marks, arriving inside a question about Mitochondrial Eve and human evolution. `[OFFICIAL]` Two lessons:
Book 5 content appears inside other Books' stimulus material, and **"name and outline" with the location
given is exactly the shape LO 3(g) predicts.**

**Paper 3 Section B: both options were Book 1.** Zero Book 5 essays on the specimen, the same result
Book 3 got. See §2's essay section for the tension this creates.

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in the two Book 5 topic files of the question bank at
`Study Agent/Bio/_question_bank/`, plus their overflow files. Every record is a real question off a
real paper: a JC prelim, an HCI topical bank entry, a timed practice paper or an A-level paper. Sources
span 2011 to 2025 plus the 9477 specimen.

### Sample size

| Bank file | Main bank | Overflow | Total |
|---|---|---|---|
| Photosynthesis | 500 | 118 | 618 |
| Cellular_Respiration | 500 | 157 | 657 |
| **Total** | **1000** | **275** | **1275** |

**n = 1275 real questions.** Unlike Book 3, both main bank files are already at their 500-record cap
with comparatively small overflow, so main and overflow together is close to the whole available
archive. `[SCHOOL]` corpus, measured counts.

Difficulty tiering as the bank labels it: base 24.9%, harder 41.2%, hardest 34.0%.

### Format split

| Measure | Full corpus (n=1275) |
|---|---|
| MCQ | **10.9%** |
| Structured | **89.1%** |
| Figure, table, graph or micrograph led | **47.8%** |

**Paper of origin: P2 38.7%, P1 28.1%, P4 15.5%, P3 13.2%**, with 4.5% unattributed. Percentages sum
past 100 because a handful of records carry two source tags.

**The P4 share is the headline.** Book 3's corpus was 0.3% Paper 4. Book 5's is **15.5%, which is 199
records.** That is a fifty-fold difference and it lines up exactly with the specimen finding in §2.0.
The corpus and the specimen agree, independently, that this is the practical Book.

**Figure-led at 47.8% is the second headline.** Nearly half of all Book 5 questions hand you a graph, a
micrograph, a pathway diagram or a data table. In the Photosynthesis file alone it is 54.5%. Any drill
set for this Book that is more than about half text-only is not modelling the exam.

### Command-word census (structured questions only, n = 1136)

Shares do not sum to 100% because one question part can carry two command words.

| Command | Count | Share |
|---|---|---|
| **Explain** | 315 | **27.7%** |
| (no command verb, usually a completion, a label or a data-description stem) | 225 | 19.8% |
| **Describe** | 162 | **14.3%** |
| **Using / use** (a figure, a table, your knowledge) | 150 | 13.2% |
| **Suggest** | 149 | **13.1%** |
| **With reference to [figure/table]** | 129 | **11.4%** |
| State | 94 | 8.3% |
| Identify | 63 | 5.5% |
| Outline | 55 | 4.8% |
| Complete | 46 | 4.0% |
| Give | 35 | 3.1% |
| Compare | 34 | 3.0% |
| Name | 29 | 2.6% |
| **Calculate** | 27 | **2.4%** |
| Label | 23 | 2.0% |
| Discuss | 18 | 1.6% |
| Account for | 13 | 1.1% |
| Predict | 12 | 1.1% |
| Distinguish | 11 | 1.0% |
| Draw | 11 | 1.0% |
| Justify / define / comment on / deduce / evaluate | 11 | 1.0% |

Four points follow.

First, **Explain at 27.7% is the highest of any Book measured** and it is nearly double Describe. Book 5
is not a describe-the-stages topic in the examiner's hands, whatever the notes look like.

Second, **Suggest at 13.1% plus Using at 13.2% plus With reference to at 11.4% is 38% of parts that
require working from supplied material rather than from memory.** Suggest signals there is no recall
answer available, which in Book 5 almost always means an unfamiliar organism, an unfamiliar inhibitor,
an unfamiliar mutant plant or an unfamiliar apparatus.

Third, **Calculate at 2.4% is five times Book 3's rate**, and the specimen used it on Paper 2. That plus
respiratory quotient and Rf is why this guide carries three quantitative overrides rather than none.

Fourth, **Outline at 4.8% deserves attention out of proportion to its frequency**, because four of the
twelve learning outcomes begin with the word "outline" and one begins with "describe and explain". When
the outcome says outline, the mark scheme wants breadth at low depth, and candidates who write the
mechanism in full run out of time without gaining marks.

### Content archetypes

Each question classified into exactly one primary archetype by first matching rule.

| Archetype | Full corpus (n=1275) | Photosynthesis (n=618) | Cellular Respiration (n=657) | What it demands |
|---|---|---|---|---|
| **Data / figure interpretation** | **37.3%** | 43.2% | 31.8% | Describe the trend with figures quoted, then account for it. The largest archetype by a wide margin, in both chapters. |
| Unclassified | 22.4% | 20.4% | 24.2% | Mostly short completions, diagram labelling, one-line identifications and practical-method steps. |
| **Mechanism explain-chain** | **19.1%** | 17.6% | 20.5% | Cause to effect, one mark per link, run forwards. |
| **Recall / state / define / describe process** | **13.0%** | 10.4% | 15.5% | Locations, products, definitions, the stages. Genuinely present here. |
| **Compare / distinguish** | 4.2% | 4.9% | 3.7% | Both sides on one axis, point for point. Cyclic against non-cyclic, aerobic against anaerobic, chloroplast against mitochondrion. |
| Evaluate / discuss | 1.8% | 1.9% | 1.7% | |
| Calculation | 1.3% | 0.5% | 2.1% | Rate arithmetic, RQ, Rf. |
| Predict / apply to novel case | 0.8% | 1.1% | 0.5% | Under-represented relative to the specimen, which asked for it twice. |

**Data interpretation plus mechanism chain is 56% of the Book.** Those two archetypes should carry about
six of every ten drill questions, and the data half should be the larger of the two.

**Two chapter-level facts worth acting on.**

1. **Photosynthesis is a data chapter.** At 43.2% figure-led it runs almost ten points ahead of
   respiration. The stock stem is a rate curve, a two-variable limiting-factor figure, or an
   intermediate-concentration plot of the specimen's kind. Reciting the light-dependent reaction is not
   what gets tested; reading it off a graph is.
2. **Respiration carries the higher recall share (15.5%) and the higher calculation share (2.1%).**
   Locations, products and coenzyme roles can be asked cold, which specimen P1 Q21 and P2 Q7(a) both
   confirm. This is the one place in Book 5 where straight recall pays.

### Concept distribution inside the main banks

This is where the corpus tells you something the archetype table hides.

| Photosynthesis main bank (n=500) | Records | Cellular Respiration main bank (n=500) | Records |
|---|---|---|---|
| **Investigating photosynthesis, practical and analytical skills** | **224** | Oxidative phosphorylation, ETC and chemiosmosis | 173 |
| Limiting factors and the rate of photosynthesis | 71 | **Investigating the rate of respiration, practical and analytical skills** | **145** |
| The Calvin cycle | 68 | Anaerobic respiration and the regeneration of NAD | 50 |
| The light-dependent reactions and photophosphorylation | 56 | The link reaction and the Krebs cycle | 38 |
| Photosynthetic pigments, absorption and action spectra | 34 | Mitochondrial structure and the overview | 33 |
| Chemiosmosis in the thylakoid, compared with the mitochondrion | 26 | Respiratory substrates and the respiratory quotient | 25 |
| Chloroplast structure and the sites of the two stages | 21 | Glycolysis | 21 |
| | | The coenzymes NAD and FAD | 15 |

**369 of 1000 main-bank records, 36.9%, are practical and analytical skills.** In the Photosynthesis
file it is 44.8% on its own. Nothing else in the Biology corpus looks like this.

Note also how small **Glycolysis** is at 21 records out of 500. The school teaches it across four pages
with a ten-step figure and a full Concept Check, and the exam asks about it least of any respiration
node. That gap is exactly what LO 3(f)'s exclusion clause predicts.

### Essay presence, and the same tension the last two Books had

Counting distinct question parts worth 10 marks or more across the two Book 5 files:

- **57 essay-scale stems in the Book 5 corpus.**
- Split by paper: **42 from Paper 3, 14 Paper 4 planning questions, 1 unattributed.**
- Split by file: Cellular Respiration 34, Photosynthesis 23.
- Distributed across prelim years 2013 to 2025 with no quiet period. `[SCHOOL]`

Recurring stems, verbatim, showing the shapes the examiner likes:

- "Describe how plants harness light energy to drive the synthesis of organic compounds." [15]
  School Prelim 2023 P3 Q5a
- "Describe the features of the processes of aerobic respiration that allow energy from a glucose
  molecule to be harnessed." [15] School Prelim 2024 P3 Q5a
- "Outline and contrast chemiosmosis in photosynthesis and respiration." [15] JPJC Prelim 2022 P3 Q5a
- "Compare the processes in which energy is released in aerobic and anaerobic respiration." [15]
  HCI Prelim 2022 P3 Q5a
- "Explain the role of the different coenzymes in respiration." [15] CJC Prelim 2025 P3 Q5a
- "Compare the process of energy transformation in photosynthesis and aerobic respiration." [13]
  TMJC Prelim 2025 P3 Q5a
- "With reference to the structure and function of chloroplast, explain how the efficiency of
  photosynthesis is maximised in plants." [13] CJC Prelim 2021 P3 Q4a
- "Describe how the proton gradient is established in mitochondria and explain its importance." [13]
  ASRJC Prelim 2022 P3 Q5a
- "Describe the various roles of ATP in eukaryotes." [13] NJC Prelim 2024 P3 Q5(a)
- "Describe the differences between Calvin and Krebs Cycles." [12] DHS Prelim 2017 P3
- "Compare and contrast between oxidative phosphorylation and photophosphorylation." [12]
  PJC Prelim 2017 P3 Q5b
- "Cycles play important roles in both natural and man-made biological processes. Write an essay about
  cycles in biology." [15] EJC Prelim 2022 P3 Q4b
- "Explain the significance of membranes in ATP synthesis in living organisms, and discuss the
  significance of ATP synthesis in organisms that lack such membranes." [12] CJC Prelim 2022 P3 Q4b

**The pattern is bridge-led, like Book 3's, but the bridges are different and there are only four of
them.** Almost every one of the 42 Paper 3 stems asks the candidate to hold photosynthesis and
respiration together, or to hold one process against another inside a chapter. The preparation is
therefore four rehearsed bridges, not two chapters:

1. **Chemiosmosis in the chloroplast against chemiosmosis in the mitochondrion.** This is LO 3(l)
   written as an essay and it appears in the corpus more than any other single comparison.
2. **The Calvin cycle against the Krebs cycle**, or more generally anabolic against catabolic.
3. **Aerobic against anaerobic respiration**, including why the yields differ.
4. **ATP as a cross-syllabus theme**, which reaches into active transport, muscle contraction, protein
   synthesis and cell signalling. Four of the 57 stems are ATP-roles essays and they are not really
   Book 5 questions at all.

**The honest tension, unchanged from the last two builds.** The corpus files 42 essay-scale Paper 3
stems for Book 5. The official specimen gave Book 5 no essay at all, offering two Book 1 options. Both
are true. The specimen is one paper. Do not conclude that Book 5 essays are dead, and do not conclude
that one is guaranteed.

**One extra note that Book 3 did not have.** There is an examiner comment in the corpus on the school's
own 2024 P3 Q5a, the 15-mark aerobic respiration essay, which says almost nobody earned the
quality-of-written-communication mark because candidates *listed the four stages* instead of organising
the answer by **feature**: enzyme-catalysed reactions, redox reactions, substrate-level phosphorylation,
oxidative phosphorylation. `[SCHOOL]` That is a structural instruction worth more than any content
point in this section.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers
> in the corpus arrive without one. Every marking claim below is `[SCHOOL]`, drawn from JC prelim
> schemes reproduced verbatim in the question bank and from the school's own three-page Concept Check
> answer key. They are expected to be broadly representative of Cambridge house style, not identical to
> it. Quoted reject and accept lines are verbatim.

**1. "Broken down" and "converted" are rejected where the outcome's own verbs belong.** LO 3(g) says
"in terms of dehydrogenation and decarboxylation", and a school scheme enforces it in writing:
*"reference to a substrate being 'broken down' or 'converted' instead of being decarboxylated or
oxidised is rejected"*. `[SCHOOL]` The same scheme starts the mark point *"substrates such as PGAL /
pyruvate / citrate are **oxidised by removal of hydrogen atoms**"* and pairs it with *"coenzymes such as
NAD / FAD are **reduced by accepting hydrogen atoms** from substrates"*. Write the redox verbs.

**2. "Produce energy" and "synthesise energy" are rejected outright.** A scheme prints
*"(reject: synthesise / produce energy)"* against an ATP mark point, and another prints *"Reject:
energy"* where the wanted answer was ATP. `[SCHOOL]` Energy is not produced, synthesised or made. ATP is
synthesised; energy is released, transferred or trapped.

**3. Photolysis is not hydrolysis, and a scheme says so.** *"Photolysis of water replenishes the
electron deficit from the reaction centre of PSII. **Reject: hydrolysis**."* `[SCHOOL]` This is the
single most-repeated reject in the Photosynthesis file.

**4. Photoactivation and photoexcitation are not interchangeable in every scheme.** One scheme prints
*"an electron from special chlorophyll a is displaced during **photoactivation** (Reject:
photoexcite)"*, and in the same file another accepts *"photoactivation of chlorophyll a in reaction
centre / photoexcitation of electron in chlorophyll a"*. `[SCHOOL]` The schemes disagree with each
other. The safe formulation names both nouns correctly: **the chlorophyll a is photoactivated and the
electron is photoexcited**, which cannot be rejected either way.

**5. Oxygen is a by-product of photolysis in photosynthesis, and only a final electron acceptor in
respiration.** An examiner comment names this as one of the two commonest confusions between the two
chapters, alongside importing cytochrome c into a photosynthesis answer: *"some indicated that oxygen is
the final electron acceptor, which is true for respiration, but oxygen is a by-product of the photolysis
of water in photosynthesis"*. `[SCHOOL]`

**6. Singular and plural are enforced on chloroplast structures.** A scheme marks *"X: **Granum** (R!
Grana); Y: **Intergranal thylakoid / Intergranal lamella** (R! Intergranal lamellae)"*. `[SCHOOL]` If
the question says "name the structure", the answer is singular.

**7. Data answers must quote the data, with units and the right series.** Three separate examiner
comments in the corpus enforce this. One: *"it is imperative that students focus on accuracy in
selection of data for discussion (wild type plants rather than Sox4 plants); citing of data up to half
the smallest division, noting also that the graph did not start from the origin; and citing of units...
many students erroneously mixed up"*. Another rejects a described change for naming the wrong start
value: *"reject: CO2 concentration increases from 0 mg m-3, or to 1380 mg m-3, or wrong units"*.
`[SCHOOL]` With 11.4% of structured parts opening "with reference to", this is a whole-Book skill.

**8. Locations must be precise.** 9477 Specimen P2 Q5(a) prints the word "**precisely**" in the stem.
The school's own key answers the equivalent question with "**Stroma ;;**" and not "chloroplast".
`[OFFICIAL]` on the specimen wording, `[SCHOOL]` on the key.

**9. The school's key accepts three levels of answer for one ATP-source mark.** Concept Check 3(iii),
asking which process supplies the ATP for PGA reduction, is answered *"**Light-dependent reaction /
photophosphorylation / chemiosmosis ;;**"*. `[SCHOOL]` That is the stage, the process and the mechanism,
all accepted. Schemes here are generous about the level of naming and strict about the biology.

**10. The cyclic against non-cyclic comparison table, in the school's own accepted wording.** This is
the most directly usable page in the whole Book 5 corpus, reproduced verbatim from chapter 5.1a page 2.
`[SCHOOL]`

| Feature | Non-cyclic | Cyclic |
|---|---|---|
| Products | NADPH, ATP, oxygen as by-product | ATP only |
| Pathway of electrons | Non-cyclic / linear flow | Cyclic flow |
| Photosystems involved | PSII and PSI | PSI only |
| First electron donor | Water | PSI (P700) |
| Last electron acceptor | NADP+ | PSI (P700) |
| Source of high [H+] in the thylakoid space | Photolysis of water **and** active transport of H+ into thylakoid space from stroma | Active transport of H+ into thylakoid space from stroma |

The accepted phrase for proton pumping is **"active transport of H+ ions into thylakoid space from
stroma"**. The one-row difference in the last line, photolysis contributing protons only in the
non-cyclic route, is the point of the comparison.

**11. The DCPIP endpoint is green, not colourless, and three quarters of a cohort got it wrong.**
Verbatim examiner comment: *"three quarters of the students selected the incorrect option D. There is a
need to consider the colour of chloroplasts, which are green. The initial DCPIP-chloroplast mixture is
blue-green... Chloroplasts are still present"*. `[SCHOOL]` The dye goes from blue to colourless; the
*suspension* goes from blue-green to green.

**12. Reduction of NAD does not happen at the cristae.** Verbatim examiner comment on an MCQ: *"more
than 40% of the students selected the wrong options A, B or D, all of which included the wrong statement
'reduction of NAD occurs at the cristae'. Reduced NAD would have donated electrons to the electron
transport chain on the inner mitochondrial membrane. **Oxidation** of reduced NAD would have occurred,
not reduction."* `[SCHOOL]` NAD is reduced in the matrix and the cytoplasm; it is oxidised at the inner
membrane.

**13. Stoichiometry must be stated per what.** A scheme rejects an ATP-accounting answer given *"without
consideration of stoichiometry, i.e. with respect to per glucose or per acetyl CoA"*. `[SCHOOL]` Every
number in this Book needs its denominator attached.

**14. Essays are marked by feature, not by stage, and the quality mark depends on it.** The 2024 school
prelim comment quoted in §2 is the clearest structural instruction in the corpus. A 15-mark aerobic
respiration essay organised as glycolysis, link, Krebs, oxidative phosphorylation loses the
quality-of-written-communication mark even when the content is right.

**15. Where the corpus contradicts the school's notes, the corpus wins.** The bank contains mark points
that use 6 CO2 per glucose. The school's Overview page says 4. See the digest, chapter 5.2 error 5.1.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented distractors.
Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477 specimen, and
the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Learning the ten named steps of glycolysis** | Sees four pages, a full pathway figure and a Concept Check built on them | Hours on glucose-6-phosphate, fructose-1,6-bisphosphate, 1,3-bisphosphoglycerate and phosphoenolpyruvate. LO 3(f) excludes "details of the intermediate compounds, names of enzymes and isomerisation" in writing, and the exam files only 21 of 500 glycolysis records | LO 3(f) `[OFFICIAL]` |
| **Learning the named ETC carriers and complexes** | Both chapters name them: plastoquinone, cytochrome b-f, plastocyanin, ferredoxin, Complexes I to IV, ubiquinone, cytochrome c | LO (c), LO (h) **and** LO (l) each say "names of complexes in the ETC are not required". Three exclusions for one node | 9477 syllabus `[OFFICIAL]` |
| **Learning the ATP totals** | The school prints 36/38 on six separate pages | LO 3(h) excludes "calculation of total yield of ATP from oxidative phosphorylation", and the school reprints that banner itself, in bold, twice. The corpus files it at 2.7% of respiration records | LO 3(h) `[OFFICIAL]` |
| **Learning the ATP synthase rotor mechanism** | Two figures and a section on it | Excluded by LO (c) and LO (h). Note the specimen still put an ATP synthase **figure** on P2 Q7(c), so recognising the enzyme in a diagram is required and explaining its rotation is not | LO 3(c), 3(h) `[OFFICIAL]` |
| **Learning the shuttle systems** | Follows the 36-against-38 footnote | The school marks the section "(Supplementary Reading)", zero syllabus hits, and it exists only to explain a number that is itself excluded. The corpus files **1 record in 1275** | LO 3(h) `[OFFICIAL]`, corpus count |
| **Learning the eight named Krebs intermediates** | Sees the full cycle figure | LO 3(g) asks for location, raw materials and products. Citrate, isocitrate, succinate and fumarate are none of those. Keep only the regenerated four-carbon acceptor, and only to explain why it is a cycle | LO 3(g) `[OFFICIAL]` |
| **Learning plant tissue and leaf anatomy** | Three pages on parenchyma, collenchyma, sclerenchyma and leaf cross-section | Zero syllabus hits for leaf, mesophyll, palisade, epidermis, parenchyma and stomata. **Caveat: leaf material is live as a Paper 4 context**, and specimen P4 Q2 was stomatal density | 9477 syllabus grep `[OFFICIAL]` |
| **Learning phosphofructokinase and the regulation of glycolysis** | A full page with three regulators | No outcome. The underlying allosteric inhibition concept does have an outcome, in Core Idea 1 LO (s), so learn the concept there and not here | 9477 syllabus `[OFFICIAL]` |
| **Learning the structure of ATP** | Opens chapter 5.1 | ATP has **no learning outcome anywhere in 9477**. Its roles are named in LO 3(d); its adenine-ribose-three-phosphates structure is not. Four of the corpus's 57 essay stems are ATP-roles essays, and none needs the structure | 9477 syllabus `[OFFICIAL]` |
| **Learning photorespiration, C4 and CAM** | A full section plus a footnote | Zero syllabus hits. LO 3(d) says "in **C3** plants". The school's own footnote defers C4 and CAM to Climate Change. **Caveat: rubisco's dual affinity survives as a competitive-inhibition application**, see the two lists in §5 | LO 3(d) `[OFFICIAL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **Photolysis called hydrolysis** | Reaches for the familiar word | Explicit reject: *"Reject: hydrolysis"*. Water is split by **light**, not by water | photosynthesis scheme `[SCHOOL]` |
| **"Produces energy" written for "produces ATP"** | Treats energy as a substance | Explicit rejects: *"reject: synthesise / produce energy"* and *"Reject: energy"* | multiple schemes `[SCHOOL]` |
| **"Broken down" or "converted" written for decarboxylated or oxidised** | Uses everyday verbs where LO 3(g) names two technical ones | Explicit reject line in a 15-mark essay scheme. Costs a starred point | Krebs essay scheme `[SCHOOL]` |
| **Oxygen called the final electron acceptor in photosynthesis** | Imports the respiration answer | Named by an examiner comment as one of the two commonest cross-chapter confusions. Oxygen is a **by-product of photolysis**; NADP is the final acceptor in non-cyclic flow | examiner comment `[SCHOOL]` |
| **Cytochrome c or other respiratory carriers named in a photosynthesis answer** | Same import, other direction | The second of the two confusions named in the same examiner comment | examiner comment `[SCHOOL]` |
| **"Reduction of NAD occurs at the cristae"** | Confuses where the coenzyme is loaded with where it is unloaded | Over 40% of a cohort chose an option containing this. NAD is **reduced** in the matrix and cytoplasm and **oxidised** at the inner membrane | MCQ examiner comment `[SCHOOL]` |
| **Grana written where granum is asked** | Ignores number | Explicit reject: *"(R! Grana)"* and *"(R! Intergranal lamellae)"* | labelling scheme `[SCHOOL]` |
| **"Chloroplast" given where "stroma" is wanted** | Answers at the wrong precision | **9477 Specimen P2 Q5(a) prints the word "precisely" in the stem.** The school's key answers "Stroma ;;" | 9477 Specimen `[OFFICIAL]` |
| **DCPIP endpoint called colourless** | Forgets the chloroplasts are still in the tube | Three quarters of a cohort got this wrong. The dye is colourless when reduced; the **suspension** goes blue-green to green | examiner comment `[SCHOOL]` |
| **A plateau read as the plotted variable still limiting** | Answers "temperature" because temperature is on the axis | **9477 Specimen P1 Q20 exactly.** At the plateau the plotted factor is no longer limiting | 9477 Specimen `[OFFICIAL]` |
| **RuBP predicted to fall when carbon dioxide is removed** | Assumes every intermediate falls together | **9477 Specimen P2 Q5(b) exactly.** RuBP **rises** because it is no longer being consumed, while PGA falls because it is no longer being made | 9477 Specimen `[OFFICIAL]` |
| **"RuBP not available" or "RuBP is saturated" given as a limiting factor** | Reaches for the nearest noun | Explicit reject, with the accepted alternatives being temperature, light intensity, RuBP **regeneration** or saturation of rubisco **active sites** | limiting-factor scheme `[SCHOOL]` |
| **ATP counts stated without a denominator** | Writes "2 ATP" with no per-what | Explicit reject of accounting *"without consideration of stoichiometry, i.e. with respect to per glucose or per acetyl CoA"* | respiration scheme `[SCHOOL]` |
| **Four carbon dioxide given as the total per glucose** | Copies the school's Overview page on chapter 5.2 page 5 | The correct total is **six**: two from the link reaction and four from the Krebs cycle. The school's own budget table on page 23 says six, and the boxed equation on page 5 itself says six | school notes 5.2 error, digest §5.1 `[SCHOOL]` |
| **A total ATP yield quoted at all** | Copies 36/38 from the notes | Excluded by LO 3(h), and the school's own page 5 gives 30 to 32 in the same breath. If a total is unavoidable, say "the great majority of the ATP" and move on | LO 3(h) `[OFFICIAL]`, digest §5.2 |
| **A proton-to-ATP ratio quoted** | Copies "one ATP per two H+" from chapter 5.1 page 26 | Chapter 5.2 page 29 implies 3.33 and 3.0 for the same enzyme, and the modern chloroplast figure is about 4.7. Three values, one Book. All excluded | digest §5.4 and 5.2 §5.3 `[INFERRED]` |
| **Pyruvate said to diffuse into the mitochondrion** | Copies Table 5 on chapter 5.2 page 18, which says "permeable to pyruvate" | The same chapter says active transport twice, on page 19 and in Fig. 15's caption. Pyruvate is charged and crosses by **active transport through a transport protein** | school notes 5.2 contradiction, digest §5.5 `[SCHOOL]` |
| **Acetyl CoA counted as a two-carbon molecule in a carbon-balance question** | Copies the shorthand | The **acetyl group** is two carbons. Harmless in prose, wrong the moment a question asks the candidate to count carbons through the link reaction | school notes 5.2, digest §5.7 `[INFERRED]` |
| **"Lactic acid" written where the syllabus says lactate** | Copies the notes, which use both | LO 3(j) says **lactate**. The chapter's own definition on page 35 is correct and its product row two lines later is not | LO 3(j) `[OFFICIAL]`, digest §5.9 |
| **Ethanol said to be permanently unusable by yeast** | Copies chapter 5.2 page 36 | The mark-bearing point is that **ethanol cannot be reconverted to pyruvate** while lactate can. "Permanently unavailable" is false; yeast oxidises ethanol aerobically | digest §5.10 `[INFERRED]` |
| **Chlorophyll a described as yellow-green** | Copies Table 2 on chapter 5.1 page 13, where the two colours are transposed | Chlorophyll a is blue-green and chlorophyll b is yellow-green | school notes 5.1 error, digest §5.1 `[INFERRED]` |
| **"Oxidative phosphorylation releases energy trapped in ATP"** | Copies chapter 5.1 page 6, where the definition is inverted | Oxidative phosphorylation **traps** released energy **in** ATP | school notes 5.1 error, digest §5.2 `[SCHOOL]` |
| **FAD said to accept two electrons and one proton** | Copies chapter 5.1 page 21, which lumps FAD with NAD and NADP | FAD accepts two electrons and **two** protons, which is what the 2 in FADH2 means | school notes 5.1 error, digest §5.3 `[SCHOOL]` |
| **An aerobic respiration essay organised by stage** | Writes glycolysis, link, Krebs, oxidative phosphorylation in order | Loses the quality-of-written-communication mark. The scheme wants organisation by **feature**: enzyme-catalysed reactions, redox reactions, substrate-level phosphorylation, oxidative phosphorylation | school prelim examiner comment `[SCHOOL]` |
| **Data described without quoting values, units or the right series** | Describes the trend in words only | Three separate examiner comments, one naming data selection, half-smallest-division reading, non-zero origins and unit notation in one sentence | multiple schemes `[SCHOOL]` |
| **"Photoexcite" written where a scheme wants "photoactivation"** | Guesses which noun the scheme took | Two schemes in the corpus disagree. Name both correctly: the **chlorophyll a is photoactivated** and the **electron is photoexcited** | photosynthesis schemes `[SCHOOL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-document, on the 28-page PDF at
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the
outcome that carries it is quoted. Where it does not, the surrounding outcomes were read before any
verdict was reached.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **rubisco** | **1** | LO 3(d): *"indicating the roles of **rubisco**, ATP and reduced NADP in these processes"* |
| **ribulose** | **1** | LO 3(d): *"(iii) **ribulose** bisphosphate (RuBP) regeneration"* |
| **RuBP** | **1** | LO 3(d), as above |
| **PGA** | **1** | LO 3(d): *"(ii) **PGA** reduction"*. Zero hits for "phosphoglycerate", "glycerate-3-phosphate" and "GP" |
| **triose phosphate** | **0** | Nowhere. Also zero for "triose", "G3P", "GALP" and "glyceraldehyde". See the two lists |
| **photophosphorylation** | **0** | Nowhere, in any form. Also zero for "photophosphorylate" |
| **photolysis** | **0** | Nowhere. Also zero for "photolyse" and "photolytic" |
| **photosystem** | **0** | Nowhere. Also zero for "photosystem I", "PSI", "PSII", "P680", "P700" and "reaction centre" |
| **chemiosmosis** | **1** | LO 3(l): *"outline **chemiosmosis** in photosynthesis and respiration (names of complexes in the ETC are not required)"*. Zero for "chemiosmotic" |
| **proton gradient** | **0** | Nowhere. Also zero for "proton", "H+" and "hydrogen ion gradient" |
| **ATP synthase** | **2** | LO 3(c) and LO 3(h), **both times inside an exclusion**: *"detailed mechanism of action of **ATP synthase** are not required"* |
| **electron transport** | **1** + **ETC 3** | LO 3(h): *"the roles of oxygen and the **electron transport chain (ETC)** in aerobic respiration"*. The three ETC hits are LO 3(c), 3(h) and 3(l), and **all three are inside the exclusion clause** |
| **glycolysis** | **1** | LO 3(f): *"outline the process of **glycolysis**, highlighting the location, raw materials used and products formed"* |
| **link reaction** | **1** | LO 3(g): *"outline the processes of the **link reaction** and Krebs cycle"* |
| **Krebs** | **1** | LO 3(g), as above. A second raw hit is the author "Krebs, J E" in the reference list, not content |
| **citric acid** | **0** | Nowhere. Also zero for "TCA" and "tricarboxylic". The syllabus uses **Krebs cycle** only |
| **oxidative phosphorylation** | **2** | LO 3(h) twice, once naming it and once excluding its yield calculation |
| **substrate-level phosphorylation** | **0** | Nowhere, hyphenated, spaced or as "substrate level". See the two lists |
| **decarboxylation** | **1** | LO 3(g): *"products formed (in terms of dehydrogenation and **decarboxylation**)"* |
| **dehydrogenation** | **1** | LO 3(g), as above. Zero for "dehydrogenase" |
| **anaerobic** | **2** | Core Idea 3 content list, and LO 3(i): *"a small yield of ATP from respiration in **anaerobic** conditions in yeast and in mammalian muscle tissue"* |
| **lactate** | **1** | LO 3(j): *"the formation of ethanol in yeast and **lactate** in mammals in the regeneration of NAD"*. **Zero hits for "lactic"** |
| **ethanol** | **1** | LO 3(j), as above. A second raw hit is "bioethanol" in the Climate Change outcome, which is a different Book |
| **fermentation** | **0** | Nowhere. The syllabus says "anaerobic conditions" |
| **limiting factor** | **2** | LO 3(e) twice: *"discuss **limiting factors** in photosynthesis and carry out investigations on the effect of **limiting factors** such as temperature, light intensity and carbon dioxide concentration"* |
| **compensation point** | **0** | Nowhere. Also zero for "compensation". **Worth 10 marks on 9477 Specimen P4 Q3.** See the two lists |
| **respiratory quotient** | **0** | Nowhere. Also zero for "RQ" and "respirometer" |
| **chromatography** | **0** | Nowhere. Also zero for "chromatogram" |
| **Rf** | **0** | Nowhere as a term. A raw case-insensitive search returns 7 hits and **every one is a substring** of "surface", "perform" or "different". Zero real hits |
| **NADP** | **1** | LO 3(d): *"the roles of rubisco, ATP and **reduced NADP**"*. Note the syllabus form is "reduced NADP", not NADPH |
| **NAD** | **2** | LO 3(j): *"in the regeneration of **NAD**"*, plus the NADP hit above. **Zero hits for FAD** |
| **oxygen** | **2** | LO 3(h): *"the roles of **oxygen** and the electron transport chain"*; LO 3(k): *"substrate concentration, **oxygen** concentration and temperature"* |
| **chloroplast** | **4** | Core Idea 1 LO (b) organelle list; LO 2(g)'s mtDNA and chloroplast DNA exclusion; LO 3(a); LO 3(c) |
| **mitochondria** | **3** | The same three places |
| **stroma / thylakoid / granum / grana** | **0 each** | None of the four appears, although LO 3(a) and LO 3(c) both require chloroplast structure |
| **chlorophyll** | **0** | Nowhere. LO 3(b) says "photosynthetic **pigments**" instead |
| **pigment** | **1** | LO 3(b): *"explain the absorption and action spectra of photosynthetic **pigments**"* |
| **absorption spectrum / action spectrum** | **0 / 0** | The singular forms appear nowhere. **action spectra** appears once, in LO 3(b), and absorption is carried in the same phrase |
| **pyruvate / acetyl / coenzyme / redox** | **0 each** | None appears. All four are carried by LO 3(f) and 3(g)'s "raw materials used and products formed" |
| **photorespiration / C4 / CAM** | **0 each** | Nowhere. LO 3(d) says "in **C3** plants". The 7 raw CAM hits are all inside "Cambridge" |
| **leaf / mesophyll / palisade / epidermis / parenchyma / stomata** | **0 each** | None appears anywhere in the syllabus |
| **autotroph / heterotroph** | **0 each** | Nowhere |
| **substrate concentration** | **2** | Core Idea 1 LO (q) on enzymes, and LO 3(k) on respiration rate |
| **Calvin** | **1** | LO 3(d): *"the three phases of the **Calvin** cycle"* |

### A zero hit count kills the WORD, not the CONTENT

Every zero above was checked three ways before a verdict: spelling variants including hyphenated,
spaced and spelled-out acronym forms; the surrounding outcomes, to see whether a broader clause carries
the idea; and the four specimen papers, to see whether Cambridge asked for it anyway. That check moved
eleven terms out of the cut list.

#### List A: genuinely gone

Nothing in any outcome carries these, no specimen question touched them, and the corpus tests them
rarely or not at all. Skip them.

| What goes | Why it is safe to cut |
|---|---|
| **The ten named glycolysis intermediates and their enzymes** | Not merely absent. **Excluded in writing** by LO 3(f): "knowledge of details of the intermediate compounds, names of enzymes and isomerisation is not required". The corpus files them at 4.4% of respiration records |
| **The named ETC complexes and carriers**, both organelles: plastoquinone, cytochrome b-f, plastocyanin, ferredoxin, Complexes I to IV, ubiquinone, cytochrome c | **Excluded in writing three times**, in LO (c), (h) and (l). Corpus 1.5% and 4.0% |
| **Total ATP yield arithmetic**, 36, 38, 30 or 32 | **Excluded in writing** by LO 3(h). The school reprints the exclusion itself, in bold, twice. Corpus 2.7% of respiration records, 0% of photosynthesis records |
| **The ATP synthase rotor mechanism** | **Excluded in writing** by LO (c) and LO (h). Recognising the enzyme on a diagram is still required, per specimen P2 Q7(c) |
| **The shuttle systems** | School-marked Supplementary, zero hits, and they exist only to explain an excluded number. **1 corpus record in 1275** |
| **Phosphofructokinase and the regulation of glycolysis** | Zero hits, no outcome. The allosteric concept lives in Core Idea 1 LO (s) |
| **The structure of ATP**, adenine, ribose, phosphoanhydride bonds, 30.6 kJ per mole | ATP has **no learning outcome anywhere in 9477**. Only its roles are named |
| **Plant tissue types and leaf anatomy** as recall content | Zero hits for eight separate terms. **Caveat below** |
| **Autotroph, heterotroph, obligate and facultative anaerobe** as vocabulary | Zero hits, no outcome, no specimen question |
| **Photorespiration as a named process, and C4 and CAM plants** | Zero hits. LO 3(d) says C3. **Caveat below** |
| **The eight named Krebs intermediates** | Zero hits. LO 3(g) restricts to location, raw materials and products. **Caveat below** for the regenerated acceptor |
| **Sun-and-shade plant physiology beyond four rows** | Photosystem ratios, thylakoid arrangement and chloroplast size have no outcome and no corpus presence. **Caveat below** for the compensation-point rows |
| **The electromagnetic spectrum, isotopes, and oxidation and reduction as topics in their own right** | All three appear in the syllabus's ADDITIONAL INFORMATION list, where it says "No questions will be set directly on them except where relevant to the assessment of a Learning Outcome". `[OFFICIAL]` Assumed background, not content |

#### List B: loses the word, keeps the biology

**These return zero or near-zero hits and are fully examinable.** Learn the biology and expect not to be
handed the word. This list is longer than Book 3's and it contains the single highest-frequency node in
the Book.

| Term with no syllabus hit | The clause that carries it | Evidence it is examined |
|---|---|---|
| **photolysis of water** | LO 3(c), "how light energy is harnessed and converted into chemical energy during the light-dependent reactions" | **75 corpus records, 12.1% of the Photosynthesis file.** A scheme prints "Reject: hydrolysis" against it. It supplies the electrons, the oxygen and part of the proton gradient |
| **photosystem, PSI, PSII, P680, P700, reaction centre** | LO 3(c), same clause | The light-dependent reaction cannot be described without them. The school's own answer key uses "Photosystem II" and "Photosystem I" as accepted labels |
| **photophosphorylation, cyclic and non-cyclic** | LO 3(c) plus LO 3(l) | The school's key accepts "photophosphorylation" as an answer, and the cyclic-against-non-cyclic comparison is one of the Book's four rehearsed bridges |
| **triose phosphate, TP, G3P** | LO 3(d), "(ii) **PGA reduction**... that ultimately allow synthesis of sugars" | PGA reduction has a product and it must be named. **68 Calvin cycle records in the main bank.** Do not cut this on a hit count |
| **substrate-level phosphorylation** | LO 3(f) and LO 3(g), "products formed", plus LO 3(i) on the small anaerobic yield | You cannot explain why anaerobic respiration yields two ATP without it. Table 6 of the school's notes exists for this comparison |
| **proton gradient, proton motive force** | LO 3(l), "outline **chemiosmosis**" | Chemiosmosis is the gradient. Specimen P2 Q7(c) put ATP synthase in the membrane and asked about it |
| **FAD and reduced FAD** | LO 3(g), "products formed (in terms of dehydrogenation and decarboxylation)" | Reduced FAD is a Krebs product. NAD is named in LO 3(j) and FAD is not, which is an accident of which outcome needed which |
| **compensation point** | LO 3(e) on limiting factors, plus LO 3(k) | **9477 Specimen P4 Q3 is a 10-mark planning question built entirely on it**, and the paper defines the term in the stem. 31 corpus records. This is the flagship case for this whole section |
| **sun and shade leaves** | LO 3(e) | The same specimen question used sun and shade ivy leaves as its experimental system. 19 corpus records |
| **respirometer, respiratory quotient, RQ** | LO 3(k), "investigate the effect of factors including substrate concentration, oxygen concentration and temperature on the rate of respiration" | 42 corpus records including full Paper 4 planning questions. **State the confidence honestly: LO 3(k) names substrate *concentration*, not substrate *type*, so the RQ link is inferred rather than quoted.** `[INFERRED]` It is nonetheless the standard apparatus for the outcome and the corpus is unambiguous |
| **chromatography and Rf value** | LO 3(b) on pigments, plus Paper 4's MMO, PDO and ACE skill areas | 8 corpus records with full Paper 4 schemes covering table layout, Rf calculation and standard limitations. **Taught nowhere in Book 5.** The school's own Learning Experiences block names pigment extraction, so it is taught in the lab |
| **respiratory poisons and uncouplers** | LO 3(h) and LO 3(l), applied | 45 corpus records. The compound names are decoration; the three consequences are pure chemiosmosis reasoning and are a standard way of testing it |
| **oxaloacetate, or "the regenerated four-carbon acceptor"** | LO 3(g), "outline the **processes** of the link reaction and Krebs **cycle**" | You cannot say why it is a cycle without it. One intermediate survives out of eight |
| **rubisco's oxygenase activity** | LO 3(d) names rubisco, and Core Idea 1 LOs (r) and (s) cover competitive inhibition | **9477 Specimen P1 Q19 is a rubisco-activation question**, and a corpus MCQ asks about oxygen competing for the same active site. The **word** photorespiration is gone; the **competition at the active site** is examinable as an enzyme application |
| **leaf and mesophyll structure** | Nothing in Core Idea 3, but Paper 4's skill areas | **9477 Specimen P4 Q2 was stomatal density on an epidermal peel.** As Paper 2 recall it is dead. As Paper 4 material it is alive |
| **redox, oxidation and reduction vocabulary** | ADDITIONAL INFORMATION, "except where relevant to the assessment of a Learning Outcome" | LO 3(g) is written in redox verbs. A scheme rejects "broken down" and "converted" in their place. Assumed knowledge that is directly load-bearing |

### How far the intermediate-compounds exclusion actually reaches

The clause is: *"(knowledge of details of the **structure** of intermediate compounds and the names of
**other** enzymes is not required)"* `[OFFICIAL]` LO 3(d).

**Read the two italicised words carefully, because they are the whole ruling.**

**What it cuts, with high confidence:**

- **The chemical structure of every Calvin cycle intermediate.** No candidate needs to draw or describe
  RuBP, PGA, 1,3-bisphosphoglycerate or triose phosphate as molecules. Carbon count is not structure;
  see below.
- **1,3-bisphosphoglycerate specifically.** The school introduces it on page 29 as the phosphorylated
  intermediate between PGA and triose phosphate. It is an intermediate, it is not named in the outcome,
  and the outcome's own three-phase scheme runs PGA straight to the reduction product. Cut it. The
  school's own answer key does exactly this, answering the reduction step with PGA and triose phosphate
  and nothing between.
- **Every enzyme except rubisco.** The word is "**other**". Rubisco is named in the outcome; NADP
  reductase, phosphoribulokinase, SBPase and the rest are the "other enzymes". `[OFFICIAL]` Note the
  corpus contains a scheme with the reject line *"r: either NADP reductase or the manganese-containing
  enzyme that catalyses photolysis"*, which confirms the ruling from the marking side.

**What it does NOT cut, and this is where the exclusion gets over-applied:**

- **The names RuBP, PGA and rubisco.** All three are printed in the outcome itself.
- **The name of the reduction product.** LO 3(d) requires phase (ii), PGA reduction, and a phase must
  have a product. Triose phosphate returns zero syllabus hits and is required by implication, exactly
  as crossing-over was in Book 3.
- **The carbon counts.** Five carbons, six carbons, three carbons. A carbon count is not "details of the
  structure"; it is the arithmetic that makes the cycle a cycle, and **9477 Specimen P2 Q5 is built on
  RuBP and PGA concentrations changing against each other.** `[INFERRED]` on the boundary, `[OFFICIAL]`
  on the specimen evidence.
- **The ratios.** Five of six triose phosphate regenerating RuBP, six turns per hexose. The school's own
  answer key marks "5 out of 6 / 83%" as a mark point.
- **The roles of rubisco, ATP and reduced NADP.** Named in the outcome in those words.
- **Anything in LO 3(e).** Limiting factors are a separate outcome and the exclusion does not reach into
  it.

**Net effect on chapter 5.1.** Removing section 2 (leaf anatomy, 3 pages), section 1.2 (ATP structure),
the excluded carrier names inside section 4, the 1,3-bisphosphoglycerate step, section 5 (fate of
products, 2 pages), sections 6.5 to 6.8 (4 pages) and the deep half of Table 3 takes the chapter from
39 pages to roughly **25 pages of examinable content**, a cut of about 36%.

**Net effect on chapter 5.2.** Removing sections 4.2 and 4.4 (glycolysis detail and regulation, 3 pages
plus Concept Check 1), section 5.3.2's named intermediates, section 5.4.2's complexes, section 5.5.2's
rotor, sections 5.5.3 and 5.6 (the ATP arithmetic, 2 pages), the shuttle box (1 page) and section 5.8's
compound names takes the chapter from 40 pages to roughly **24 pages of examinable content**, a cut of
about 40%.

**Book 5 overall: 79 pages of teaching content, about 49 pages examinable. The cut is roughly 38%.**
That is smaller than Book 2's third-of-the-corpus cut in absolute terms but it is more concentrated:
almost all of it is one contiguous block of named chemistry, and it can be removed by deleting whole
sections rather than by filtering line by line.

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **Reading the Calvin cycle off a concentration plot** (LO 3d, 3e). **9477 Specimen P2 Q5 is this, for
   7 of the paper's 90 marks**, and it is the highest-frequency question shape in the Book. The
   drillable skill set is: predict what happens to RuBP and to PGA when carbon dioxide is removed,
   restored, or when light is removed; explain **why each moves in the direction it moves**; and do the
   rate arithmetic off the plot. `[OFFICIAL]`

2. **Limiting-factor curves, single and multiple** (LO 3e). **Specimen P1 Q20 and Specimen P4 Q1 both
   turn on it**, and the corpus files 71 records in the main bank. The four sub-skills are: name the
   limiting factor in a named region, recognise that a plateau means the plotted variable is no longer
   limiting, predict the effect of raising a second factor, and explain why the temperature curve falls
   again when the light and carbon dioxide curves do not. `[OFFICIAL]`

3. **Chemiosmosis mapped across both organelles** (LO 3l). One outcome, two organelles, and the corpus's
   most frequent essay comparison. The mapping table is in the digest's cross-chapter finding B. Drill
   until Ethan can produce either column from the other, and include the two asymmetries: photolysis
   contributes protons only in the chloroplast, and only the mitochondrion has oxygen as the final
   acceptor.

4. **Which stage happens where, and what each produces** (LOs 3a, 3f, 3g, 3h). **Specimen P1 Q21 and
   Specimen P3 Q1(a)(iv) are both nothing but this**, for 7 marks between them. The cheapest marks in
   the Book, and the corpus confirms respiration carries the highest recall share of any chapter
   measured. Drill the grid: process, location, raw materials, products, per glucose. `[OFFICIAL]`

5. **The role of NAD and the consequence of removing oxygen** (LOs 3g, 3h, 3i, 3j). **Specimen P2 Q7(a)
   and (b) are this, for 6 marks.** The chain to rehearse runs: NAD is a coenzyme and hydrogen carrier;
   it is reduced during glycolysis, the link reaction and the Krebs cycle; it delivers electrons to the
   ETC; without oxygen the chain backs up; reduced NAD is not reoxidised; the link reaction and Krebs
   cycle stop; so fermentation regenerates NAD instead so that glycolysis can continue. `[OFFICIAL]`

6. **Non-cyclic against cyclic photophosphorylation, point for point** (LO 3c). The school's own answer
   key gives the accepted wording, reproduced in §3. Drill both directions and enforce the last row,
   which is the only genuine difference in how the gradient is built.

7. **Applying the light-dependent reaction to an unfamiliar figure** (LO 3c). Photosynthesis is 43.2%
   figure-led and its figures are usually pathway diagrams with unfamiliar labels or artificial electron
   acceptors. **Specimen P1 Q19's rubisco activase is the same move on the Calvin cycle side.** The
   skill is mapping an arbitrary diagram onto photoactivation, electron transport, proton gradient and
   reduction, and saying which arrow does what. `[OFFICIAL]`

8. **Paper 4 investigation design and data handling** (LOs 3e, 3k). **This is the largest single block of
   recoverable marks in the subject and it is currently at zero.** See §5's Paper 4 section below.

9. **Data-quoting discipline across the whole Book.** With 11.4% of structured parts opening "with
   reference to" and three separate examiner comments naming data selection, units, half-smallest-
   division reading and non-zero origins, this is a cross-node skill worth its own drill set: describe
   the trend, quote two values with units from the right series, then account for it.

### Paper 4, flagged for the October practical block `[PRACTICAL]`

**Book 5 is the practical Book. Two independent measurements agree.** `[OFFICIAL]` on the specimen,
`[SCHOOL]` on the corpus.

| Evidence | Book 5 | Book 3, for comparison |
|---|---|---|
| Share of the 9477 specimen practical paper | **60%, 30 of 50 marks** | 0% |
| Corpus records sourced from Paper 4 | **199 of 1275, 15.5%** | 6 of 1955, 0.3% |
| Main-bank records under a practical-skills concept heading | **369 of 1000, 36.9%** | none |
| Planning questions in the corpus | **29, 2.3%** | few |
| School Learning Experiences that are practical | **8 of 9** | 0 of 4 |

**What the specimen practical actually required of Book 5.**

- Sketching and explaining a predicted rate-against-light-intensity graph before doing the experiment.
- Assembling a pondweed and gas-syringe apparatus and reading a capillary meniscus.
- Designing a results table from scratch, with column headings and units, before starting.
- Plotting the results and discussing them against the earlier prediction.
- Naming the limiting factor at the darkest filter and explaining the choice.
- Suggesting the effect of adding sodium hydrogencarbonate.
- Evaluating a proposal to repeat the investigation.
- A full 10-mark plan for a compensation-point investigation with hydrogencarbonate indicator, sun and
  shade ivy leaves, a named dependent and independent variable and a controlled-variable list.

**What the corpus adds that the specimen did not use.** The respirometer with soda lime and a
compensation tube; respiratory quotient calculation and the values by substrate; DCPIP and methylene
blue decolourisation timing with yeast and with isolated chloroplasts; pigment chromatography and Rf
calculation; colorimeter calibration and blanking; leaf-disc flotation; alginate-bead immobilisation;
oxygen probes and carbon dioxide gas sensors; and statistical treatment including t-tests on rates at
two temperatures.

**Two things the school's notes never teach that the practical papers require.** Both are recorded in
the digest's cross-chapter finding E and both must be filled from outside Book 5: **respiratory quotient
values by substrate**, and **pigment chromatography with Rf calculation**.

**Recommendation.** Do not fold this into the normal cluster sequence, and do not build a practical
cluster from the notes, because the notes do not contain the material. Build Cluster 05 in October from
the 199 Paper 4 corpus records and the specimen practical, and start it with the two missing nodes above.

### Low yield, and the honest findings of this build

**Finding 1: the Book 5 corpus is the cleanest of the three Books measured.** Contamination by content
with no 9477 outcome is small and localised.

| Excluded content | Photosynthesis (n=618) | Cellular Respiration (n=657) |
|---|---|---|
| Named ETC carriers and complexes | 9 (1.5%) | 26 (4.0%) |
| Named glycolysis intermediates | 17 (2.8%) | 29 (4.4%) |
| Enzyme names excluded by LO 3(d) or 3(f) | 12 (1.9%) | 17 (2.6%) |
| Total ATP yield arithmetic | 0 (0.0%) | 18 (2.7%) |
| Photorespiration, C4 or CAM | 18 (2.9%) | 0 (0.0%) |
| Shuttle systems | 0 (0.0%) | 1 (0.2%) |
| Named Krebs intermediates | 8 (1.3%) | 61 (9.3%) |
| Leaf and ground-tissue anatomy | 26 (4.2%) | 1 (0.2%) |

Compare Book 2, where roughly a third of the corpus tested dropped content, and Book 3, where one file
ran at 34.8% and another at 22.8%. **Book 5's worst single category is 9.3%**, and that is named Krebs
intermediates, most of which appear as figure labels supplied in the stem rather than as recall demands.
**Filtering is a light job here.** The one category worth a keyword filter before drilling is the ATP
totals in the respiration file, 18 records.

**Finding 2: the notes over-teach far more than the corpus over-tests.** This is the reverse of the last
two Books and it changes what the filtering job is. The school teaches four pages of glycolysis detail
that the exam files at 21 records in 500; a full page of glycolysis regulation with zero corpus presence
as a recall demand; two pages of ATP arithmetic under its own "not required" banner; and a page of
shuttle systems that the corpus tests once in 1275 questions. **The cut has to be made against the
notes, not against the question bank.**

**Finding 3: nodes that are low frequency but should not be dropped.**

- **The absorption and action spectra comparison.** LO 3(b) is a whole outcome and the corpus files only
  34 main-bank records under it, the second-smallest photosynthesis heading. Low frequency, explicitly
  required, and cheap: two graphs and one inference.
- **The coenzymes NAD and FAD.** 15 main-bank records, the smallest respiration heading, and **9477
  Specimen P2 Q7(a) opened on it for three marks.** `[OFFICIAL]` The corpus under-tests exactly what the
  specimen asked first.
- **Glycolysis at outcome depth.** 21 records, the second-smallest heading. The temptation after reading
  §5 is to cut glycolysis entirely. Do not. LO 3(f) exists, and location, raw materials and products is
  a four-mark answer that takes ten minutes to learn.
- **Chloroplast structure to function.** 21 main-bank records, the smallest photosynthesis heading, yet
  LO 3(a) and LO 3(c) both depend on it and micrograph identification is a recurring one-mark opener.

**Finding 4: the one place the corpus and the specimen disagree, and which to trust.** The corpus is
10.9% MCQ. The specimen put three of Book 5's clear Paper 1 marks into consecutive MCQ stems, which is
10% of that paper, so on that measure they agree. But the corpus is **13.2% Paper 3** while the specimen
gave Book 5 six clear Paper 3 marks out of 75, which is 8%, and zero essay. Meanwhile the corpus is
**15.5% Paper 4** while the specimen was **60%**. **Trust the specimen on Paper 4 and the corpus on
everything else.** The corpus is a prelim archive and prelims under-weight the practical paper relative
to how Cambridge built the specimen.

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with Core
  Idea 3 LOs (a) to (l) read verbatim and reproduced in §0, plus a whole-document literal term search of
  49 terms for §5 including hyphenated, spaced and acronym variants. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477
  OFFICIAL)/`), read end to end and counted question by question and part by part. `[OFFICIAL]`
- The school's own **Book 5 chapter PDFs**, 3 files, 82 pages, full text plus visual reading of every
  image-only page and of four pages rendered specifically to check figure labels. `[SCHOOL]`
- The school's own **Concept Check answer key**, chapter 5.1a, 3 pages, quoted verbatim in §3.
  `[SCHOOL]` This is the only school-authored marking artefact in the Book.
- The **question bank** at `Study Agent/Bio/_question_bank/`, the Photosynthesis and Cellular_Respiration
  files plus their overflow, **1275 real questions** with mark schemes reproduced verbatim where a key
  existed. `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list and
  the numerical audit.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery
ratings and self-jotted confusions, not content. They were excluded deliberately, per the subject guide
§3.0 and rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | ~97% `[OFFICIAL]` | Nodes derive directly from 12 LOs read verbatim from one Core Idea, cross-checked against both chapter headers with no letter or word mismatches found. The strongest scope position of any Book so far, because Book 5 does not straddle Core Ideas and its outcomes are unusually explicit about their own boundaries |
| Exam format | ~95% `[OFFICIAL]` | All four specimen papers counted directly, part by part. Book 5's presence on each paper is a count, not an estimate. The Paper 4 finding is the single most consequential number in this guide and it is a direct count of 30 marks out of 50 |
| Archetype frequency | ~85%, **measured** | n=1275 real questions parsed and classified. Residual uncertainty is not sampling error; it is that the corpus is 9744-era, so what it measures is what *prelims* asked. Contamination here is smaller than in either previous Book, which raises confidence |
| Mark scheme logic | ~82% `[SCHOOL]` **capped** | Every scheme is a JC prelim, plus one three-page school answer key. SEAB publishes no 9477 mark scheme and the specimen papers arrive without one. This is the binding cap. It is a point or two higher than Book 3's because the school's own key exists here and Book 3 had no equivalent |
| Trap model | ~90% `[SCHOOL]` | Most entries quote a verbatim reject line or examiner comment from a real scheme, **five are corroborated directly by the 9477 specimen**, and a further eight are corroborated by errors found in the school's own notes |

**Honest ceiling: ~87% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Books 2 and 3:**

1. **One Core Idea, twelve consecutive outcomes, zero labelling errors.** No offset to work around and no
   cross-Core-Idea bookkeeping.
2. **The syllabus states its own exclusions five times.** Most scope calls in this Book are quotations,
   not inferences. Compare Book 3, where the checkpoint cut required a paragraph of reasoning.
3. **A school answer key exists.** Book 3 had none. Eleven accepted phrasings in §3 are the school's own
   words rather than a reconstruction.
4. **The corpus is the cleanest measured.** Worst-case contamination 9.3% of one file, against 34.8% in
   Book 3's worst file.
5. **The specimen gives more corroboration than in any previous build.** Book 5 supplied three Paper 1
   stems, two complete Paper 2 questions, one Paper 3 sub-question and **two complete Paper 4
   questions**. Five trap-model entries trace to specimen questions.

**What is specifically weaker:**

1. **No measured student success rates**, the same gap the last two builds reported, with two partial
   exceptions: an examiner comment records that three quarters of a cohort failed the DCPIP-endpoint MCQ
   and that over 40% failed the NAD-reduction-location MCQ. Those two are real failure rates. Everything
   else in §4 is ranked by scheme frequency, syllabus weight and specimen corroboration.
2. **The school's notes are numerically unreliable in a Book whose difficulty is numerical.** The digest
   flags 27 findings of which 9 are genuine factual or arithmetic errors. Any cluster built from the
   notes without the digest open beside it will propagate them, and the "4 CO2" error is the one that
   would actually cost a mark.
3. **Paper 4 has no mark scheme evidence of Cambridge quality.** The 60% figure is a direct count of what
   was asked. How it is marked is inferred entirely from JC prelim practical schemes.

**Genuinely thin evidence, stated plainly:**

- **The respiratory quotient's status.** LO 3(k) names substrate **concentration**, not substrate
  **type**, and RQ is the standard way of distinguishing substrate type. The corpus is unambiguous that
  RQ is examined, with 42 records including full planning questions, but **no syllabus clause names it**
  and no specimen question used it. `[INFERRED]` Teach it as a Paper 4 skill rather than as a Paper 2
  recall node, and do not build a cluster around it.
- **Chromatography and Rf.** Same shape of argument, thinner: 8 corpus records, zero syllabus hits, zero
  specimen presence. It is a standard technique for LO 3(b) and the school's Learning Experiences name
  pigment extraction, but the evidence is one step weaker than for RQ.
- **Where "structure of intermediate compounds" ends and "carbon count" begins.** The ruling in §5 that
  carbon counts survive the LO 3(d) exclusion is `[INFERRED]`, supported by specimen P2 Q5 being built on
  RuBP and PGA behaviour. No scheme in the corpus states the boundary explicitly. If in doubt, keep the
  counts, which cost almost nothing, and drop the structures.
- **Essay likelihood.** The corpus files 42 essay-scale Paper 3 stems. The specimen gave Book 5 zero
  essay options, offering two Book 1 questions. Both statements are verified. Only a second official
  paper resolves which is the better predictor. The four bridges in §2 are cheap insurance either way.
- **Whether the specimen's 60% Paper 4 share is typical.** It is one paper. It could be that Cambridge
  chose photosynthesis for the specimen because it is the easiest practical to standardise across
  centres. Even discounted heavily it leaves Book 5 as the highest-value Book measured, and Ethan has
  zero practical preparation, so the recommendation does not change.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the
most likely mispredicting dimension is **paper weighting, not archetype content.** Check Paper 4 first.
The corpus is 15.5% Paper 4 and the specimen was 60%, and no amount of Paper 2 drilling closes that gap.
Only after Paper 4 has been checked should the format split in §2 be re-measured.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 2 Questions 5 and 7** sat
cold and back to back, which is 19 marks in about 25 minutes, followed by **Specimen Paper 3 Question
1(a)(iv)** for 6 marks. Between them they cover LOs 3(a), 3(d), 3(e), 3(f), 3(g), 3(h), 3(i), 3(j) and
3(l) in the examiner's own words, which is nine of the Book's twelve outcomes, and they test all three
of the Book's dominant archetypes: data interpretation, mechanism chain and recall of location and
product. **Then, separately and later, Specimen Paper 4 Questions 1 and 3 under timed conditions**,
which is 30 marks and which no amount of written practice substitutes for.
