---
subject: Biology
level: H2
topic: Book_3_Cell_Signalling_Division_Cancer_Stem_Cells
syllabus_code: 9477
type: qualitative   # subject default, and it holds almost completely here. OVERRIDE → quantitative for
                    # two narrow sub-strands only: reading DNA content, chromosome number and ploidy off a
                    # cell-cycle or meiosis graph, and rate-of-change arithmetic off a figure (specimen P3
                    # Q3(b)(i) was exactly this). Those two close by solving variants until mechanical.
                    # Everything else closes by concept doc plus re-test at a new angle.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~86% MIXED. [OFFICIAL] ~95% on scope (all 13 LOs across Core Ideas 1, 2 and 3 read verbatim from the syllabus PDF and cross-checked against every chapter header); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part); [SCHOOL] ~80% on marking (JC prelim schemes only, no SEAB scheme exists for 9477); archetype frequencies are MEASURED by parsing 1955 real questions, not estimated"
last_updated: 2026-08-12
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 3: Cell Signalling, Cell and Nuclear Division, Cancer and Stem Cells

> Specialises the subject guide to Book 3. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in this
> folder before building any cluster, because Book 3's school notes contain around a dozen genuine
> factual errors and several of them sit on the exact distinctions the outcomes test.

---

## 0. Scope boundary (get this right before anything else)

**Book 3 is the only Book in the course that spans three different Core Ideas.** Book 2 sat entirely
inside Core Idea 2. Book 3 does not, and the school's own chapter footers say so.

| School chapter | Core Idea | 9477 LO(s) | Pages | Note |
|---|---|---|---|---|
| 3.1 Cell Signalling and Communication | **3** Energy and Equilibrium | **(m), (n), (o), (p)** | 44 | Largest chapter. Sections 2, 3 and 7 are marked BACKGROUND READING or Supplementary by the school itself |
| 3.2 Cell and Nuclear Division | **2** Genetics and Inheritance | **(n), (o), (s), (t)** | 36 | Cleanest chapter in the Book |
| 3.3 Molecular Basis of Cancer | **2** Genetics and Inheritance | **(p), (q), (r)** | 31 | Two case studies marked (FYI) by the school |
| 3.4 Stem Cells | **1** The Cell and Biomolecules of Life | **(t), (u)** | 27 | Least reliable chapter. Whole of §1.4 marked (FYI) |

That is **13 learning outcomes** in total. `[OFFICIAL]` (syllabus pp.13, 15, 18, read verbatim).
`[SCHOOL]` chapter split and page counts.

**There is no letter-offset error anywhere in Book 3.** Every letter the school prints matches the
published syllabus exactly. This is worth stating plainly because Book 2 had two chapters printing a
letter one place ahead, and the reflex built there does not need to be applied here. The only wording
discrepancy is trivially small: the school prints LO 3(o) as "explain **the role** of kinases and
phosphatases", the syllabus prints "explain **the roles**". `[OFFICIAL]`

### The practical consequence of spanning three Core Ideas

**Paper 1 sweeps the syllabus in Learning Outcome order, not in Book order.** On the 9477 Specimen
Paper 1 the Book 3 items landed at **Q8** (stem cells, a Core Idea 1 outcome), **Q16 and Q17** (cancer
and meiosis, Core Idea 2 outcomes) and **Q22** (cell signalling, a Core Idea 3 outcome), with fourteen
questions of unrelated material scattered between them. `[OFFICIAL]`, counted from the specimen.

Two things follow. First, do not expect Book 3 questions to cluster on a real paper; they will be
spread from roughly one quarter of the way in to roughly three quarters of the way in. Second, and more
usefully, **a stem-cell question sits next to cell-structure and enzyme questions in the examiner's
mental ordering, not next to cancer.** Specimen P1 Q8 confirms this: it is a stem-cell stem whose
correct answer is a gene-regulation answer about methylation. Book 3 revision that never touches
Book 2's LO 2(i) will fail that question.

### Verbatim 9477 Learning Outcomes for Book 3

Reproduced word for word from
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. Candidates should be able to:
`[OFFICIAL]`

**Core Idea 1, The Cell and Biomolecules of Life (syllabus p.13)**

**(t)** describe the unique features of stem cells, including zygotic stem cells, embryonic stem cells
and blood stem cells (lymphoid and myeloid), correctly using the terms:
&nbsp;&nbsp;&nbsp;&nbsp;**i** totipotency (e.g. zygotic stem cells)
&nbsp;&nbsp;&nbsp;&nbsp;**ii** pluripotency (e.g. embryonic stem cells)
&nbsp;&nbsp;&nbsp;&nbsp;**iii** multipotency (e.g. lymphoid and myeloid stem cells)

**(u)** explain the normal functions of stem cells in a living organism, including embryonic stem cells
and blood stem cells (lymphoid and myeloid).

**Core Idea 2, Genetics and Inheritance (syllabus p.15)**

**(n)** describe the events that occur during the mitotic cell cycle and the main stages of mitosis
(including the behaviour of chromosomes, nuclear envelope, cell surface membrane and centrioles)

**(o)** explain the significance of the mitotic cell cycle (including growth, repair and asexual
reproduction) and the need to regulate it tightly (knowledge that dysregulation of checkpoints of cell
division can result in uncontrolled cell division and cancer is required, but details of the mechanism
are not required)

**(p)** identify the causative factors, including genetic, chemical carcinogens, ionising radiation and
loss of immunity, which may increase the chances of cancerous growth

**(q)** explain how the loss of function mutation of tumour suppressor genes, including p53, and gain in
function mutation of proto-oncogenes, including ras, results in uncontrolled cell division

**(r)** describe the development of cancer as a multi-step process that includes accumulation of
mutations, angiogenesis and metastasis

**(s)** describe the events that occur during the meiotic cell cycle and the main stages of meiosis
(including the behaviour of chromosomes, nuclear envelope, cell surface membrane and centrioles) (names
of the main stages are expected, but not the sub-divisions of prophase)

**(t)** explain the significance of the meiotic cell cycle (including how meiosis and random
fertilisation can lead to variation)

**Core Idea 3, Energy and Equilibrium (syllabus p.18)**

**(m)** outline the main stages of cell signalling:
&nbsp;&nbsp;&nbsp;&nbsp;**i** ligand–receptor interaction
&nbsp;&nbsp;&nbsp;&nbsp;**ii** signal transduction (phosphorylation cascade and signal amplification)
&nbsp;&nbsp;&nbsp;&nbsp;**iii** cellular response (change in gene expression)
&nbsp;&nbsp;&nbsp;&nbsp;(knowledge of intracellular receptors is not required)

**(n)** explain the roles and nature of second messengers (including cyclic AMP)

**(o)** explain the roles of kinases and phosphatases in signal amplification

**(p)** outline how insulin and glucagon regulate the concentration of blood glucose through the
respective tyrosine kinase receptor and G-protein linked receptor. (The outline should be limited to
describing how the ligand induces a conformational change in a membrane-bound receptor to trigger
downstream signalling pathways that elicit physiological changes in blood glucose concentration.
Details of different second messengers and specific kinases activated in the pathway are not required.)

Each Core Idea closes with the standing instruction: *"Use the knowledge gained in this section in new
situations or to solve related problems."* `[OFFICIAL]`

### The three exclusions the syllabus states outright

These are written into the LO text and they are where the biggest time savings in this Book are.
`[OFFICIAL]`

1. **Details of the mechanism of checkpoint regulation are not required** (LO o). This is the big one
   and §5 works out exactly how far it reaches.
2. **Knowledge of intracellular receptors is not required** (LO 3m). The school flags this itself on
   pages 8 and 10 of chapter 3.1 and then still tests intracellular receptors in Concept Check 1.
3. **Details of different second messengers and specific kinases activated in the pathway are not
   required**, for insulin and glucagon specifically (LO 3p). Note carefully that this exclusion is
   local. LO 3(n) separately requires the roles and nature of second messengers **including cyclic
   AMP**, so cAMP as a general second messenger is required; what is excluded is the pathway-specific
   inventory of which second messenger and which kinase does what inside the insulin or glucagon
   cascade.

And one exclusion by omission rather than by statement: LO 2(s) says "names of the main stages are
expected, **but not the sub-divisions of prophase**", which removes leptotene, zygotene, pachytene,
diplotene and diakinesis.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 3, grouped by the cluster that should teach it. Convergence
requires no UNTOUCHED node. LO letters are `[OFFICIAL]`.

### Cluster 01, cell signalling (Core Idea 3 LOs m, n, o, p)

- [ ] **The three stages (3m)**: ligand-receptor interaction, signal transduction, cellular response,
      in the outcome's own three-part shape. Note the outcome specifies the cellular response as a
      **change in gene expression**, so the nuclear response is the one it foregrounds.
- [ ] **Ligand-receptor specificity (3m)**: complementary 3D conformation, non-covalent binding,
      conformational change on binding. The corpus penalises calling a receptor site an "active site".
- [ ] **GPLR structure and working principle (3m, 3p)**: seven transmembrane helices, extracellular and
      intracellular domains, GDP displaced by GTP, G protein dissociates and diffuses, binds effector,
      intrinsic GTPase hydrolyses GTP to shut it off.
- [ ] **RTK structure and working principle (3m, 3p)**: two subunits, ligand binding causes aggregation
      and dimerisation, tyrosine kinase activity switches on, autophosphorylation of tail tyrosines,
      relay proteins dock on specific phosphotyrosines, several pathways run at once.
- [ ] **GPLR versus RTK compared**, point for point, because the outcome pairs them through glucagon
      and insulin.
- [ ] **Phosphorylation cascade (3m ii)**: sequential phosphorylation, conformational change at each
      step, the cascade as the transduction mechanism.
- [ ] **Kinases and phosphatases (3o)**: what each catalyses, that phosphorylation may activate **or**
      inhibit, and the switch and reset argument. The outcome asks for their roles **in signal
      amplification** specifically, which is the framing most answers miss.
- [ ] **Second messengers (3n)**: the definition, the four properties (small, non-protein,
      water-soluble, freely diffusible) and why each property matters, with cAMP as the named example
      and calcium and IP3 as the others.
- [ ] **cAMP specifically (3n)**: made from ATP by adenylyl cyclase, activates protein kinase A,
      hydrolysed to AMP by phosphodiesterase.
- [ ] **Signal amplification (3m ii, 3o)**: the three features, the two reasons it works, and the
      numbers (one receptor to ~100 G proteins, a few epinephrine molecules to hundreds of millions of
      glucose molecules).
- [ ] **Signal termination**: protein phosphatase, intrinsic GTPase, phosphodiesterase. Three named
      enzymes, three marks.
- [ ] **Specificity of response**: two cells respond differently to the same signal because they differ
      in the receiving, transducing or responding proteins.
- [ ] **Insulin and blood glucose (3p)**: RTK, conformational change, relay proteins, GLUT4 vesicle
      fusion raising glucose uptake, glycogen synthase activation. **At the outcome's level, not the
      school's.**
- [ ] **Glucagon and blood glucose (3p)**: GPLR, conformational change, cAMP, glycogenolysis and
      gluconeogenesis in **liver**, glucose released to blood.
- [ ] **Insulin and glucagon as antagonists (3p)**: alpha and beta cells of the islets of Langerhans,
      the fed and fasted states, the resulting change in blood glucose concentration.

### Cluster 02, cell and nuclear division (Core Idea 2 LOs n, o, s, t)

- [ ] **The cell cycle (2n)**: G1, S, G2 and M, what happens in each, G0, and the fact that interphase
      is roughly 90% of the cycle.
- [ ] **DNA content, chromosome number and ploidy through the cycle**. **`[type override → quantitative]`**
      Reading these off a graph is a distinct skill from describing the stages.
- [ ] **Terminology block (2n, 2s)**: chromatin and chromosome, homologous chromosomes versus sister
      chromatids, centromere versus kinetochore, centriole versus centrosome, the three microtubule
      types. This block is where most marks are lost to imprecision.
- [ ] **The four stages of mitosis (2n)**, each described against all four structures the outcome
      names: chromosomes, nuclear envelope, **cell surface membrane** and centrioles.
- [ ] **Cytokinesis in animals versus plants (2n)**: cleavage furrow and contractile ring of
      microfilaments against cell plate from Golgi vesicles, middle lamella and cellulose. This is the
      cell surface membrane half of the outcome and it is routinely skipped.
- [ ] **Significance of mitosis (2o)**: genetic stability, growth, repair and regeneration, asexual
      reproduction. The outcome names growth, repair and asexual reproduction in those words.
- [ ] **Checkpoint dysregulation leading to cancer (2o)**: that checkpoints exist, that failure gives
      uncontrolled division, and nothing about the machinery. See §5.
- [ ] **Prophase I (2s)**: synapsis, bivalent and tetrad, crossing over between non-sister chromatids,
      chiasmata.
- [ ] **Metaphase I and independent assortment (2s, 2t)**: random orientation of each bivalent,
      independent of every other bivalent, 2^n combinations, 2^23 in humans.
- [ ] **Anaphase I (2s)**: homologues separate, **centromeres do not divide**, disjunction, and
      non-disjunction as the failure mode.
- [ ] **Meiosis II (2s)**: no further DNA replication, centromeres divide, chromatids separate.
- [ ] **Significance of meiosis (2t)**: halving chromosome number so fertilisation restores it, plus
      the three sources of variation, which are crossing over, independent assortment and **random
      fertilisation**. The outcome names random fertilisation explicitly.
- [ ] **Mitosis versus meiosis compared**, stage by stage, in terms of **chromosome behaviour**.

### Cluster 03, the molecular basis of cancer (Core Idea 2 LOs p, q, r)

- [ ] **Cancer as a loss of balance (2q)**: rate of cell division exceeds rate of cell death. Note the
      school's own IMPORTANT box: uncontrolled does not mean faster.
- [ ] **Proto-oncogene and tumour suppressor gene defined (2q)**, one line each.
- [ ] **Gain of function versus loss of function (2q)**: one mutated copy is enough versus both copies
      needed; dominant versus recessive at cell level. The syllabus uses both phrases verbatim.
- [ ] **p53 (2q)**: named in the outcome. Transcription factor, activates repair proteins, arrests at
      G1/S through p21 binding Cdks, initiates apoptosis if damage is irreparable.
- [ ] **ras (2q)**: named in the outcome. Low-molecular-weight G protein, mutation changes conformation
      so GTP stays bound, constitutively active, cascade runs with no growth factor.
- [ ] **The mutation-to-uncontrolled-division causal chain (2q)**, written as links: altered base
      sequence, altered codon, altered amino acid, altered bonding, altered conformation, altered
      function, uncontrolled division.
- [ ] **Multi-step model (2r)**: accumulation of mutations in a **single cell lineage**, and the three
      lines of evidence.
- [ ] **Angiogenesis (2r)**: named in the outcome. Why a tumour needs it, angiogenesis-activating
      proteins, VEGF and FGF, the balance against inhibitors.
- [ ] **Metastasis (2r)**: named in the outcome. Invasion versus metastasis, the three-step cascade,
      secondary tumours at distant sites.
- [ ] **Causative factors (2p)**: the four the outcome names, which are **genetic, chemical carcinogens,
      ionising radiation and loss of immunity**, each with a mechanism ending in a mutation in a
      cancer-critical gene.
- [ ] **Characteristics of cancer cells**, selectively: high rate of division, genome instability,
      escaping growth restraints, angiogenesis, metastasis, avoiding immune destruction.
- [ ] **Benign versus malignant**, six axes.

### Cluster 04, stem cells (Core Idea 1 LOs t, u)

- [ ] **The two defining features (1t)**: self-renewal by mitosis while remaining unspecialised, and
      the capacity to differentiate into specialised cell types.
- [ ] **Totipotency (1t)**: zygotic stem cells, every body cell **and** the extra-embryonic membranes.
- [ ] **Pluripotency (1t)**: embryonic stem cells, all three germ layers, **but not** extra-embryonic
      membranes. The negative half is the whole distinction.
- [ ] **Multipotency (1t)**: lymphoid and myeloid stem cells, many cell lines within one tissue type.
- [ ] **Differentiation as differential gene expression**: the mechanism under all three levels, and
      the bridge back to Book 2's LO 2(i).
- [ ] **Internal and external signals for differentiation**: three external signals named.
- [ ] **Normal function of embryonic stem cells (1u)**: building the whole organism, all three germ
      layers, hence every tissue.
- [ ] **Normal function of blood stem cells (1u)**: continuous replacement of short-lived blood cells,
      scaled to demand. The two worked examples are more red cells after blood loss and more
      lymphocytes during infection.
- [ ] **The haematopoietic hierarchy (1t, 1u)**: multipotent HSC in bone marrow, common lymphoid
      progenitor giving B and T lymphocytes, common myeloid progenitor giving granulocytes, monocytes,
      erythrocytes and platelets.
- [ ] **Symmetric versus asymmetric division**: why the stem cell population is preserved while a
      stream of differentiating cells is produced.
- [ ] **The stem-cell niche**: what controls whether a stem cell self-renews or differentiates, which
      links back to Cluster 01.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part from all four **9477 specimen papers**
(`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only
genuinely Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**,
so everything here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Book 3 landed on the specimen

| Paper | Book 3 questions | Book 3 marks (clear) | Book 3 marks (with crossovers) | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | Q16, Q17, Q22 clear; Q8 and Q15 crossover | 3 | 5 | 10% to 17% |
| **P2** Structured (90 marks) | Q3 entire (12), Q6 entire (11) | 15 | 23 | 17% to 26% |
| **P3** Section A (55 marks) | Q1(b)(i) (4), Q3(a) (3), Q3(b) (6) | 13 | 13 | 24% |
| **P3** Section B essay (20 marks) | **none. Both options were Book 1** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | none | 0 | 0 | 0% |

Applying the official paper weightings of 15%, 30%, 35% and 20% `[OFFICIAL]` (syllabus p.9), **Book 3
was worth roughly 13% to 16% of the whole A-level on the specimen.** That is materially more than
Book 2, which the Book 2 guide measured at 8% to 11% on the same four papers. On this evidence Book 3
is the higher-value Book, and it is also the more evenly distributed one, appearing on three of the
four papers.

### What the specimen actually asked (the useful detail)

**Paper 1, the five relevant stems.** `[OFFICIAL]`

| Q | Node tested | LO | Stem type |
|---|---|---|---|
| 8 | Why a bone marrow stem cell in skin never makes a skin cell | 1(t)/1(u) stem, **2(i) answer** | Four long-prose explanations, one correct. **Crossover: stem-cell context, gene-regulation answer** |
| 15 | Classic versus mosaic Down syndrome | 2(k) stem, **2(n)/2(s) answer** | Applied. **Crossover: mutation context, mitosis-versus-meiosis timing answer** |
| 16 | Normal function of tumour suppressor genes | **2(q)** | Four short options. Distractor A is "to dysregulate a checkpoint of cell division", which is the LO 2(o) vocabulary used as a trap |
| 17 | Which features of meiosis contribute to genetic variation | **2(s)/2(t)** | Four numbered statements, pick three. Two of the four statements are deliberate errors: "daughter chromosomes segregate independently during anaphase II" and "alleles are exchanged between **sister** chromatids during prophase I" |
| 22 | A five-stage cell-signalling diagram: receptor, adenyl cyclase, cyclic AMP, protein kinase A, protein kinase. Which stages show signal amplification and which show enzyme activation | **3(m)/3(n)/3(o)** | "Which row" 2-column grid, both cells must be right |

Four structural facts follow, and each changes how to drill.

1. **Not one of the five is plain recall.** Every one requires a mechanism run forwards on material
   presented in the stem.
2. **Two of the five are crossovers into other Books.** Q8 is a stem-cell question answered with gene
   regulation, and Q15 is a mutation question answered with cell-division timing. A Book 3 revision
   pass that never reaches into Book 2 loses both.
3. **Q17's distractors are built out of near-miss precision errors**, not out of unrelated content.
   Anaphase II versus anaphase I, and sister versus non-sister chromatids. This is the single clearest
   signal in the whole specimen about what Book 3 questions punish.
4. **Q22 asks the candidate to distinguish amplification from activation** on the same diagram. That
   is LO 3(o) tested exactly as written, and it is a distinction the school's chapter 3.1 never draws
   explicitly. Amplification happens where **one** molecule produces **many** of the next; activation
   happens where a molecule is switched on. They are not the same steps, and a candidate who has only
   learnt "cascades amplify" cannot answer it.

**Paper 2 Question 3, the cancer anchor. Twelve marks, five parts**, opening on two aligned DNA
sequences and their encoded H-ras peptides.

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | **Explain** how the mutation shown may change the structure and function of the ras protein | 3 | 2(q), with 2(k)/2(l) |
| (b) | **Describe** the differences between gain of function and loss of function mutations | 2 | **2(q)** |
| (c) | **State** two factors that can cause mutations | 2 | **2(p)** |
| (d) | **Describe** how the c-myc translocation differs from the H-ras substitution | 2 | 2(k), in a 2(q) frame |
| (e) | With reference to Figure 3.3, **describe** differences between the effects of c-myc, H-ras and a combination in causing tumours in mice | 3 | **2(r)** |

Part (b) is LO 2(q) quoted straight back at the candidate, using both of the outcome's own phrases.
Part (a) is worth three marks, which fixes the expected causal chain at three links and not two. Part
(e) is the multi-step model tested as **data**: three tumour-incidence curves where the two-oncogene
mice develop tumours fastest, which is the accumulation-of-mutations argument in graph form. That is
the shape to expect for LO 2(r), not "describe the multi-step model".

**Paper 2 Question 6, the cell-division anchor. Eleven marks, four parts**, opening on a graph of three
distances against time during two stages of mitosis.

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a)(i) | **Identify** the two stages of mitosis shown | 2 | **2(n)** |
| (a)(ii) | **Describe** what happens to sister chromatids after 15 minutes | 2 | **2(n)** |
| (b) | **Outline** the roles of centromeres | 3 | 2(n), with 2(h) |
| (c) | **State four ways** in which the behaviour of chromosomes in meiosis is different from their behaviour in mitosis | 4 | **2(s)** |

Three things to take from this. First, **stage identification was tested from a graph, not from a
micrograph or a description.** The three curves are the distance from centromeres to poles, the
distance between sister chromatid centromeres, and the distance between the poles, which is exactly the
three-microtubule-type content on page 12 of chapter 3.2 turned into data. Second, **part (c) is the
school's page 35 comparison table, worth four marks, with the command word "state".** It is the single
most directly reproducible four marks in the Book, and the restriction to **chromosome behaviour**
rules out answers about the number of daughter cells or where the process occurs. Third, part (b)
harvests a Book 2 node from inside a Book 3 question, since centromeres are named in LO 2(h).

**Paper 3.** Book 3 appears in two separate questions.

- **Q1(b)(i)**, inside the 32-mark mitochondrial DNA question: *"Explain how meiosis leads to genetic
  recombination in the nuclear DNA of eukaryotes."* [4]. This is LO 2(s) reached through a stem about
  why mtDNA is useful for phylogeny. **Book 3 content harvested from inside a Book 2 and Book 4
  narrative.**
- **Q3**, twelve marks, opening: *"Lymphoid stem cells are a subset of blood stem cells that give rise
  to the B lymphocytes and T lymphocytes of the immune system."* Parts: (a)(i) **State** the level of
  potency of lymphoid stem cells [1]; (a)(ii) **Outline** two defining features of stem cells [2];
  (b)(i) **Calculate** the mean yearly rate of increase in blood stem cell transplants from a bar chart
  [2]; (b)(ii) **Outline** two types of genetic change that can result in cells becoming cancerous [4];
  (c)(i) to (iii) name three genetic processes in B lymphocyte development [3, Infectious Diseases].

Q3 is the most instructive question on the whole specimen for this Book. It uses the syllabus's own
vocabulary word for word ("lymphoid stem cells", "level of potency", "defining features"). It puts a
**calculation** inside a stem-cell question. It reaches from stem cells across to cancer in part
(b)(ii) without changing question. And it then leaves Book 3 entirely for part (c). **One stem, four
Books.**

**Paper 3 Section B.** The two essay options were Q4 on the roles of proteins and Q5 on the entry of
molecules into cells. **Both Book 1.** A candidate who had studied only Book 3 had no essay to write.
This is identical to the Book 2 finding and it cuts the same way. See §2 for the tension with the
school corpus, which files 44 essay-scale Book 3 stems.

**Paper 4.** Zero Book 3 content across all three questions, which were photosynthesis, stomatal
density microscopy, and a photosynthesis planning question. Note that root-tip squash preparation and
mitosis identification under a microscope is a classic practical, so its absence here is not evidence
that it cannot appear.

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in the four Book 3 topic files of the question bank at
`Study Agent/Bio/_question_bank/`, plus their overflow files. Every record is a real question off a
real paper, which is a JC prelim, an HCI topical bank, a timed practice paper or a November A-level
paper. Sources span 2011 to 2025 plus the 9477 specimen.

### Sample size

| Bank file | Main bank | Overflow | Total |
|---|---|---|---|
| Cell_Signalling | 250 | 434 | 684 |
| Cell_and_Nuclear_Division | 250 | 283 | 533 |
| Cancer | 250 | 144 | 394 |
| Stem_Cells | 250 | 94 | 344 |
| **Total** | **1000** | **955** | **1955** |

**n = 1955 real questions.** The main bank is a quota-limited curated selection capped at 250 per file,
so the combined main-plus-overflow figure is the truer frequency measure and is the one quoted below.
Where the two disagree materially it is flagged. `[SCHOOL]` corpus, measured counts.

### Format split

| Measure | Main bank (n=1000) | Full corpus (n=1955) |
|---|---|---|
| MCQ | 28.8% | **33.7%** |
| Structured | 71.2% | **66.3%** |
| Figure, table or micrograph led | 45.9% | **35.9%** |

Difficulty tiering as the bank labels it: base 26.1%, harder 45.9%, hardest 28.0%.

Paper of origin across the full corpus: **P2 45.3%, P1 33.4%, P3 19.7%, P4 0.3%**, with 1.3%
unattributed. Note the P1 share is substantially higher than Book 2's, which is consistent with Book 3
supplying three clear MCQ stems on the specimen.

**Figure-led at 35.9% is the headline format finding.** More than a third of Book 3 questions hand you
a diagram, a graph or a micrograph and make you work from it. In the main curated bank the figure share
rises to 45.9%. Any drill set for this Book that is more than about 60% text-only is not modelling the
exam.

### Command-word census (structured questions only, n = 1297)

| Command | Count | Share |
|---|---|---|
| (no command verb, usually a completion or a data-description stem) | 349 | 26.9% |
| **Explain** | 258 | **19.9%** |
| **With reference to [figure/table]** | 173 | **13.3%** |
| **Suggest** | 155 | **12.0%** |
| **Describe** | 142 | **10.9%** |
| State | 61 | 4.7% |
| Outline | 42 | 3.2% |
| Discuss | 20 | 1.5% |
| Name | 17 | 1.3% |
| Identify | 15 | 1.2% |
| Label | 13 | 1.0% |
| Compare | 9 | 0.7% |
| Complete | 8 | 0.6% |
| Predict | 7 | 0.5% |
| Distinguish | 7 | 0.5% |
| Calculate | 6 | 0.5% |
| Define / justify / evaluate / draw / account for / deduce | 15 | 1.2% |

**Explain, With reference to, Suggest and Describe together are 56% of every structured part in
Book 3.** Three points follow.

First, **"with reference to" at 13.3% is unusually high** and it is not really a command word, it is a
constraint. It means the answer must quote the figure. The corpus records the penalty in the examiner's
own words: *"students failed to quote the stimulus entirely and lost credit unnecessarily"* `[SCHOOL]`.

Second, **Suggest at 12.0% is higher than Book 2's.** Suggest signals there is no recall answer
available, which in Book 3 almost always means an unfamiliar hormone, an unfamiliar receptor, an
unfamiliar cancer gene or an unfamiliar tissue. The mechanism must be transferable, not memorised.

Third, **Calculate is almost absent at 0.5%**, which confirms the qualitative subject default. The two
quantitative overrides in the front matter cover genuinely narrow ground: reading DNA content and
ploidy off a cell-cycle graph, and rate arithmetic off a figure of the kind Specimen P3 Q3(b)(i) asked.

### Content archetypes

Each question classified into exactly one primary archetype by first matching rule.

| Archetype | Full corpus | Main bank | What it demands |
|---|---|---|---|
| **Data / figure interpretation** | **33.5%** | 40.6% | Describe the trend with figures quoted, then account for it. The single largest archetype by a wide margin. |
| **Mechanism explain-chain** | **25.8%** | 24.8% | Cause to effect, one mark per link, run forwards. |
| Unclassified | 19.7% | 13.6% | Mostly short completions, diagram labelling and one-line identifications. |
| **Recall / state / define / describe process** | **13.0%** | 11.3% | Genuinely present here, unlike Book 2. Definitions of potency, of second messengers, of stages. |
| **Compare / distinguish** | 2.8% | 3.3% | Both sides on one axis, point for point. |
| Evaluate / discuss | 2.0% | 3.0% | Concentrated in Stem_Cells. |
| Predict / apply to novel case | 1.7% | 2.0% | |
| Sequence / stage identification | 1.1% | 0.8% | Under-represented in the corpus relative to the specimen, which asked for it directly. |
| Calculation | 0.4% | 0.6% | |

**Data interpretation plus mechanism chain is 59% of the Book.** Those two archetypes should carry
about six of every ten drill questions.

### Archetype by chapter (full corpus)

| Chapter | n | Dominant archetype | Second | Third |
|---|---|---|---|---|
| 3.1 Cell Signalling | 684 | **Data/figure 38.3%** | Mechanism chain 26.9% | Unclassified 18.6% |
| 3.2 Cell and Nuclear Division | 533 | **Data/figure 44.1%** | Mechanism chain 18.6% | Unclassified 16.1% |
| 3.3 Cancer | 394 | **Mechanism chain 34.0%** | Unclassified 24.6% | Data/figure 22.3% |
| 3.4 Stem Cells | 344 | **Mechanism chain 25.6%** | Unclassified 21.8% | Data/figure 20.3% |

**Four chapter-level facts worth acting on.**

1. **3.2 is a data chapter, not a description chapter.** At 44.1% figure-led it is the most
   graph-driven chapter in Book 3. The typical stem is a DNA-content graph, a chromosome-number table,
   a micrograph of a stage, or a distance-against-time plot like Specimen P2 Q6. Reciting the stages of
   mitosis is not what gets tested; recognising them from data is.
2. **3.1 is close behind at 38.3% figure-led**, and its figures are almost always pathway diagrams
   with unfamiliar molecule names. The skill is applying the general GPLR or RTK logic to a pathway
   never seen before.
3. **3.3 is the mechanism chapter.** At 34.0% explain-chain it is the most causal-reasoning-heavy
   chapter in the Book. The stock stem is "explain how this mutation results in uncontrolled cell
   division", marked link by link.
4. **3.4 carries the highest recall share and the highest discuss share.** Stem cells is the one place
   in Book 3 where a definition can be asked cold, which Specimen P3 Q3(a) confirms, and it is also the
   only place where evaluate-level questions cluster, which is almost entirely the ethics and iPSC
   material that has no learning outcome. See §5.

### Essay presence, and the same tension Book 2 had

Counting distinct question parts worth 10 marks or more across the four Book 3 files:

- **44 essay-scale stems in the Book 3 corpus.**
- Split: Cell and Nuclear Division 14, Cell Signalling 12, Cancer 11, Stem Cells 7.
- Distributed across prelim years 2013 to 2025 with no quiet period. `[SCHOOL]`

Recurring stems, verbatim, that show the shapes the examiner likes:

- "Compare the behaviour of chromosomes during mitosis and meiosis and explain their significance." [15]
  HCI Prelim 2022 P3 Q4a (paraphrased opening, full stem in the bank)
- "Discuss how the processes of cell division allow DNA to be stably inherited and yet, capable of
  genetic variation in eukaryotes." [10] HCI Prelim 2024 P3 Q4(b)
- "Outline how eukaryotic somatic cells normally divide, and describe how this process could develop
  into one that results in cancerous cells instead." [14] CJC Prelim 2022 P3 Q5a
- "Explain how errors during various stages of the mitotic and meiotic cell cycles can lead to cancer."
  [14] ACJC Prelim 2023 P3 Q5a
- "Describe the mode of action of insulin in the regulation of blood glucose concentration." [15]
  ACJC Prelim 2024 P3 Q4(a)
- "With reference to named examples, describe the roles of proteins in bringing about cell signalling in
  living organisms." [13] CJC Prelim 2017 P3 Q5a
- "Compare the normal functions of totipotent, pluripotent and multipotent human stem cells." [13]
  TPE 2024 P3 Q4a
- "Explain the normal functions of blood stem cells and discuss how the cells they differentiated into
  work together to provide effective immune responses against pathogens." [15] VJC Prelim 2023 P3 Q5a
- "'All cells of a human body are genetically identical'. Discuss this statement." [13] NYJC Prelim 2023
  P3 Q5a

**The pattern is different from Book 2's and it matters.** Book 2 essays were property-led (stability,
specificity, complementarity). **Book 3 essays are bridge-led.** Almost every one of the 44 asks the
candidate to hold two things together and relate them: mitosis and meiosis, normal division and cancer,
stability and variation, stem cells and immunity, cell signalling and proteins. The preparation is
therefore not chapter revision but four rehearsed bridges:

1. **Mitosis to meiosis**, compared on chromosome behaviour and on significance.
2. **Normal cell cycle to cancer**, which is checkpoint dysregulation plus the two gene classes plus
   the multi-step model.
3. **Stability to variation**, which reaches across mitosis, semi-conservative replication, meiosis and
   random fertilisation and pulls in Book 2's DNA structure.
4. **Stem cells to their downstream function**, most often blood stem cells to the immune response,
   which reaches into the Infectious Diseases extension topic.

**The honest tension.** The corpus files 44 essay-scale Book 3 stems, and cell division alone supplies
14. The official specimen gave Book 3 no essay at all, offering two Book 1 options. Both are true. The
specimen is one paper. Do not conclude from it that Book 3 essays are dead, and do not conclude from
the corpus that one is guaranteed.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers
> in the corpus arrive without one. Every marking claim below is `[SCHOOL]`, distilled from JC prelim
> schemes reproduced verbatim in the question bank. They are expected to be broadly representative of
> Cambridge house style, not identical to it. Quoted reject and accept lines are verbatim from those
> schemes.

**1. The GTP-for-GDP step is an exchange, not a phosphorylation, and schemes reject the wrong verb
explicitly.** The Cell_Signalling bank carries the line *"Reject 'GDP phosphorylated to become GTP'"*
twice, from different schools. GTP **displaces** GDP; nothing phosphorylates anything at that step.
This is the single most-repeated reject in the chapter 3.1 corpus. `[SCHOOL]`

**2. A receptor is not an enzyme, and enzyme vocabulary applied to a receptor is rejected.** From an
examiner comment: *"A number of students referred to the NS protein binding to the receptor's **active
site**, which implied that they incorrectly thought of the receptor as an enzyme."* The same principle
generates a second reject elsewhere in the file, where a scheme *"rejects the term 'competitive
inhibitor' for Tamoxifen even though the mechanism is competition for a binding site, because a
receptor is not an enzyme."* Say **binding site**, never active site, for a receptor. `[SCHOOL]`

**3. Binding descriptions need two specific words and schemes say which.** From the same examiner
comment: *"A few students were not able to articulate the keywords '**3D conformation**' and
'**complementary**' when describing the binding of two molecules together."* The two-mark answer is
that the ligand has a specific 3D conformation complementary to the receptor's binding site, and that
non-covalent bonds form. `[SCHOOL]`

**4. Comparison marks need point-to-point pairing, and Book 3's schemes say so in a specific form.** A
receptor-comparison scheme *"rejects yes/no comparisons of receptor structure ('GPLR does not have
phosphorylated tyrosine residues while TKR has…') and wants a point-to-point structural difference."*
A second scheme in the cell-division file states *"Reject yes/no comparisons"* directly. Each mark is
one axis with both sides stated positively. `[SCHOOL]`

**5. Stage-specific answers must name the stage, and vagueness across stages is an explicit failure
mode.** An examiner report in the cell-division file: *"common errors include vague descriptions of the
various stages without identifying the exact stage at which each event occurs, and the use of vague
terms in describing the chromosomes."* Another: *"many students did not include both anaphase I and II,
seemingly forgetting that meiosis has two stages, and did not use proper terms such as 'homologous
chromosomes' and 'sister chromatids'."* `[SCHOOL]`

**6. Precision nouns are enforced hard in cell division.** From the reject lists in the corpus:
*homologous chromosomes* and *sister chromatids* not "duplicated chromosomes" and not "V-shaped
chromosomes"; *"Reject: same number of genes"* as a difference between homologues; *"reject any answer
stating that they have the same alleles"* for homologues; *"reject 'half amount of genetic material'"*
and *"reject 'full set of chromosomes'"* where chromosome number is meant; *"reject 'disintegrate
nucleolus'"* and *"reject 'disappears'"* where the scheme wants specific verbs for nuclear envelope and
nucleolus behaviour; *"reject 'reforms'"*; *"reject kinetochore or non-kinetochore microtubules only,
it must be both"*. `[SCHOOL]`

**7. The spindle wording is policed.** A scheme rejects *"the phrasing 'spindle fibres shorten,
separating sister chromatids'"*. The separation of sister chromatids is the centromere dividing;
shortening kinetochore microtubules then **pull the separated daughter chromosomes** to the poles.
Those are two events and collapsing them into one loses the mark. `[SCHOOL]`

**8. Cancer answers must be framed forwards, from the mutation to the consequence, and reverse framing
is penalised.** Two separate examiner comments say so: *"Many students made the mistake again by
explaining the function of BRCA2 protein, answering the question in reverse argument which should be
avoided"* and *"many students did not refer to the cell cycle in the context of dysregulation of the
checkpoints of cell division; students are advised to answer the question directly rather than
answering in the reverse argument."* A related reject is blunt: *"Reject: framing from wild-type."*
Start from the mutation and run forwards. `[SCHOOL]`

**9. Allele and gene are not interchangeable in a cancer context, and loss of function is not one
event.** From the Cancer schemes: *"R: referring to alleles as genes"* and *"R: referring to loss of
function mutation as a single mutation event"*. A loss of function mutation of a tumour suppressor
requires **both copies**, which means at least two events, and the scheme rejects answers that treat it
as one. `[SCHOOL]`

**10. Uncontrolled is not the same as excessive or rapid, and the scheme separates them.** *"Reject
excessive / uncontrolled cell growth"* where cell **division** is meant, and *"Reject: cell cycle is
irregular / inappropriate"*. The school's own IMPORTANT box on page 11 of chapter 3.3 makes the same
point: uncontrolled division does not mean the cells divide faster, it means the rate of division
exceeds the rate of cell loss. `[SCHOOL]`

**11. Metastasis is only metastasis if secondary tumours at distant sites are named.** A scheme marks
an answer *"rejected if there is no reference to secondary sites / tumours"*. Invasion of neighbouring
tissue on its own is invasion, not metastasis. `[SCHOOL]`

**12. Telomerase extends, it does not merely maintain, and this is a recorded misconception.** Twice in
the Cancer file: *"common misconception is that telomerase helps to maintain the telomere length and
not extend it"*. `[SCHOOL]` Low priority given the scope finding in §5, but the wording matters if the
node is touched at all.

**13. Stem cell answers must name the precise lineage.** A scheme *"rejects the vague 'blood stem cell'
or 'adult stem cell' and demands the precise lineage name"*, and another states *"Reject: adult stem
cell, as it is not specific enough"*. In the same file, *"Reject 'blood stem cell'"* appears again, and
*"Reject 'have the ability to differentiate into WBCs'"* where the specific cell types are wanted.
`[SCHOOL]`

**14. Self-renewal is the required phrase, and indefinite division is rejected.** A scheme rejects
*"infinite / divides indefinitely"* where **long-term self-renewal** is wanted. `[SCHOOL]` This lines
up with Specimen P3 Q3(a)(ii), which asked for the "defining features" of stem cells for two marks.
`[OFFICIAL]`

**15. Data questions must quote the data.** Beyond the examiner comment already cited, the schemes
carry instructions like *"relevant supporting data must be quoted"* and mark answers as
*"rejected without the quote"*. With 13.3% of structured parts opening "with reference to", this is a
large amount of mark surface. `[SCHOOL]`

**16. Command-word discipline, as it bites in this Book specifically.** *Describe* wants the ordered
events and nothing about why. *Explain* wants the causal chain with each link separate. *Outline*
implies brevity, and Specimen P2 Q6(b) used it for a three-mark answer about centromeres, so three
compact points is the target rather than a paragraph. *State* on Specimen P2 Q6(c) was worth four
marks for four differences, which means four one-line statements, not four developed comparisons.
*Identify* on Specimen P2 Q6(a)(i) was worth two marks for two stage names. `[OFFICIAL]` glossary
meanings, `[SCHOOL]` marking behaviour.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented
distractors. Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477
specimen, and the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Studying cyclins, Cdks and MPF** | Assumes checkpoint machinery is examinable because the school teaches a full page of it | Hours on content with **no 9477 outcome**. "Cyclin", "Cdk" and "MPF" appear **zero times** in the syllabus, and LO 2(o) says "details of the mechanism are not required" | 9477 syllabus grep verified `[OFFICIAL]` |
| **Studying telomerase as a cancer mechanism** | Follows the school's four-step multi-step model | LO 2(r) names exactly three components and telomerase is not one. "Telomerase" appears **zero times** in the syllabus | LO 2(r) `[OFFICIAL]` |
| **Studying iPSCs, SCNT and therapeutic cloning** | Treats the school's §1.4 as content because it is long and interesting | **Zero** syllabus hits for all three. The school marks the whole section (FYI). This is 35% of the Stem_Cells main bank | LO 1(t), 1(u) `[OFFICIAL]` |
| **Studying stem cell bioethics** | Assumes bioethics recurs across the syllabus | The only bioethics outcome in all of 9477 is **2(m)**, on maternal screening, which is Book 2. There is no bioethics outcome in Core Idea 1 | 9477 syllabus `[OFFICIAL]` |
| **Studying homeostasis and feedback loops** | Sees five pages of it in chapter 3.1 | "Homeostasis", "negative feedback" and "set point" all return **zero** syllabus hits, and the school labels the section BACKGROUND READING | 9477 syllabus `[OFFICIAL]` |
| **Studying diabetes mellitus** | Sees a whole section plus a Learning Experience on it | "Diabetes" returns **zero** syllabus hits and the school marks the section Supplementary. It is stimulus material only | 9477 syllabus `[OFFICIAL]` |
| **Studying intracellular and ion-channel receptors** | Works through Concept Check 1, which tests them | LO 3(m) states outright that intracellular receptors are not required, and the school flags ion-channel and integrin receptors as out of syllabus too | LO 3(m) `[OFFICIAL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **GDP said to be phosphorylated to GTP** | Treats every nucleotide change as phosphorylation | "the GDP is phosphorylated to become GTP" instead of GTP displacing GDP. Explicit reject in two schemes | GPLR schemes `[SCHOOL]` |
| **Receptor binding site called an active site** | Treats a receptor as an enzyme | Loses the mark and, in the Tamoxifen case, also produces "competitive inhibitor" for a receptor | examiner comment `[SCHOOL]` |
| **Amplification confused with activation** | Believes every step of a cascade amplifies | Marks all five stages of a pathway as amplification when only the steps where one molecule produces many qualify. This is **9477 Specimen P1 Q22** exactly | 9477 Specimen `[OFFICIAL]` |
| **Phosphorylation said always to activate** | Reads page 10 of chapter 3.1 and stops | "phosphorylation activates the protein" as a general rule. The school's own Fig. 37 shows PKA phosphorylating glycogen synthase to inhibit it | school notes 3.1 pp.10–12 `[SCHOOL]` |
| **Glucagon said to act on skeletal muscle** | Copies the school's own error on pages 36, 37 and 41 | "glucagon stimulates glycogenolysis in liver and muscle". Muscle has no glucagon receptor and no glucose-6-phosphatase, so it cannot release glucose to blood | school notes 3.1 error, digest §5.1 `[INFERRED]` |
| **Liver glucose uptake attributed to GLUT4** | Copies the school's page 36 text over its own page 38 figure | "insulin causes GLUT4 vesicles to fuse in liver cells". Liver uses GLUT2, which is insulin-independent | school notes 3.1 error, digest §5.2 `[INFERRED]` |
| **Second messenger described without its properties** | Names cAMP and stops | LO 3(n) asks for "roles **and nature**". The nature is small, non-protein, water-soluble and freely diffusible, and each property does work in the answer | LO 3(n) `[OFFICIAL]` |
| **Centromeres said to divide at anaphase I** | Generalises mitotic anaphase to meiosis | The defining difference between anaphase I and both mitotic anaphase and anaphase II. Schemes reject the wrong version | 3.2 p.26 and comparison schemes `[SCHOOL]` |
| **Crossing over said to occur between sister chromatids** | Loses the sister versus non-sister distinction | Exactly statement 3 of **9477 Specimen P1 Q17**, which is a deliberate distractor. Crossing over is between **non-sister** chromatids of homologous chromosomes | 9477 Specimen `[OFFICIAL]` |
| **Independent assortment placed at anaphase II** | Confuses which division segregates independently | Exactly statement 2 of **9477 Specimen P1 Q17**, another deliberate distractor | 9477 Specimen `[OFFICIAL]` |
| **Spindle fibres said to separate sister chromatids** | Collapses two events into one | Explicit reject: *"reject the phrasing 'spindle fibres shorten, separating sister chromatids'"*. Centromeres divide, then microtubules pull | anaphase scheme `[SCHOOL]` |
| **Centromere and kinetochore used interchangeably** | Treats them as one structure | The centromere is the DNA region; the kinetochore is the protein structure built on it to which microtubules attach. Specimen P2 Q6(b) asks for the roles of centromeres specifically | LO 2(h), 3.2 p.10 `[SCHOOL]` |
| **Only kinetochore microtubules named** | Forgets the other two types | A scheme *"rejects kinetochore or non-kinetochore microtubules only, it must be both"* | anaphase scheme `[SCHOOL]` |
| **Centrioles said to duplicate at the onset of mitosis** | Copies the school's page 11 error over its own pages 14 and 23 | Centriole duplication is an interphase event. LO 2(n) names centrioles explicitly, so this is directly examinable | school notes 3.2 error, digest §5.2 `[INFERRED]` |
| **DNA replication placed anywhere but S phase** | Copies the school's page 14 introductory sentence | "the cell replicates DNA during all three sub-phases of interphase", contradicting the table beneath it | school notes 3.2 error, digest §5.3 `[SCHOOL]` |
| **Mitosis versus meiosis answered by outcome rather than by chromosome behaviour** | Answers "meiosis makes four cells" for a behaviour question | Specimen P2 Q6(c) restricts the ask to **behaviour of chromosomes**. Number of daughter cells and site of occurrence score nothing | 9477 Specimen `[OFFICIAL]` |
| **Mosaic aneuploidy attributed to meiosis** | Assumes all aneuploidy is meiotic | Mosaic Down syndrome comes from **mitotic** non-disjunction during fetal development. This is **9477 Specimen P1 Q15** | 9477 Specimen `[OFFICIAL]` |
| **Cancer said to be inherited** | Confuses somatic mutation with germ-line, helped by the school's own page 1 | "cancer incidence rises because mutations accumulate from one generation to the next". It is the **predisposition**, not the cancer, that is inherited | school notes 3.3 error, digest §5.1 `[SCHOOL]` |
| **Loss of function treated as a single mutation** | Forgets the second copy | Explicit reject: *"R: referring to loss of function mutation as a single mutation event"* | Cancer scheme `[SCHOOL]` |
| **Tumour suppressor mutations called dominant, or BRCA called recessive, without the two-level explanation** | Reads only one of the school's two contradictory statements | Recessive **at the level of the cell**, dominant **at the level of family inheritance**. State the level | school notes 3.3 contradiction, digest §5.4 `[INFERRED]` |
| **Cancer answered in reverse, from wild type** | Describes what the normal protein does and stops | Two separate examiner comments name this, and one scheme states *"Reject: framing from wild-type"* | Cancer schemes `[SCHOOL]` |
| **Uncontrolled division equated with rapid division** | Assumes cancer cells divide faster | The school's own IMPORTANT box says otherwise. The crucial relationship is rate of division against rate of cell loss. *"Reject excessive / uncontrolled cell growth"* | 3.3 p.11 and schemes `[SCHOOL]` |
| **Metastasis described without secondary tumours** | Stops at invasion | *"rejected if there is no reference to secondary sites / tumours"* | metastasis scheme `[SCHOOL]` |
| **Allele written as gene in a cancer or inheritance context** | Uses the words interchangeably | Explicit reject: *"R: referring to alleles as genes"* | Cancer scheme `[SCHOOL]` |
| **ESCs called totipotent** | Copies the school's page 14 error | "each embryonic stem cell can develop into a healthy individual". ESCs are pluripotent and cannot form extra-embryonic membranes. This inverts the exact distinction LO 1(t) tests | school notes 3.4 error, digest §5.1 `[SCHOOL]` |
| **Pluripotency defined without the negative half** | Says "can become any cell type" | The mark-bearing half is that pluripotent cells **cannot** form the extra-embryonic membranes, which is why they cannot alone make an organism | LO 1(t) `[OFFICIAL]` |
| **Myeloid progenitor said to make all blood cells** | Copies the school's page 11 error | It cannot make lymphocytes. Specimen P3 Q3 opens on lymphoid stem cells specifically | school notes 3.4 error, digest §5.3 `[INFERRED]` |
| **"Blood stem cell" or "adult stem cell" given where the lineage is wanted** | Answers at the wrong level of precision | *"Reject: adult stem cell, as it is not specific enough"* and *"Reject 'blood stem cell'"* | Stem cell schemes `[SCHOOL]` |
| **"Divides indefinitely" offered for self-renewal** | Reaches for the nearest phrase | Explicit reject of *"infinite / divides indefinitely"*. The wanted phrase is **long-term self-renewal** | Stem cell scheme `[SCHOOL]` |
| **Stem cell therapy given as an answer to "normal functions"** | Answers the interesting question rather than the asked one | LO 1(u) says "**normal** functions of stem cells **in a living organism**". Transplantation is not a normal function | LO 1(u) `[OFFICIAL]` |
| **Data answer given without quoting the data** | Describes the trend in words only | *"relevant supporting data must be quoted"*, and 13.3% of structured parts open "with reference to" | multiple schemes `[SCHOOL]` |
| **Yes/no comparison instead of point-to-point** | Lists what one side has and the other lacks | *"rejects yes/no comparisons"*, twice, in two different files | comparison schemes `[SCHOOL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-syllabus, on the 28-page PDF at
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the
outcome that carries it is quoted.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **apoptosis** | **0** | Nowhere. Also zero for "programmed cell death". Taught in 3.1 p.6, 3.3 pp.12–14 and 3.4 p.12 |
| **checkpoint** | **1** | LO 2(o) only: *"knowledge that dysregulation of **checkpoints** of cell division can result in uncontrolled cell division and cancer is required, but details of the mechanism are not required"* |
| **cyclin** | **0** | Nowhere. Chapter 3.3 §2.3 teaches a full page plus three figures on it |
| **CDK / Cdk** | **0** | Nowhere |
| **p53** | **1** | LO 2(q): *"the loss of function mutation of tumour suppressor genes, **including p53**"* |
| **ras** (whole word) | **1** | LO 2(q): *"gain in function mutation of proto-oncogenes, **including ras**, results in uncontrolled cell division"* |
| **proto-oncogene** | **1** | LO 2(q), as above |
| **oncogene** | 1 | Only inside "proto-oncogenes" in LO 2(q). No standalone use |
| **tumour suppressor** | **1** | LO 2(q), as above. Zero hits for the American "tumor suppressor" |
| **metastasis** | **1** | LO 2(r): *"the development of cancer as a multi-step process that includes accumulation of mutations, angiogenesis and **metastasis**"* |
| **angiogenesis** | **1** | LO 2(r), as above |
| **telomerase** | **0** | Nowhere. Chapter 3.3 §3.2 teaches it as step 2 of the multi-step model |
| **telomere** | 1 | LO 2(h) only, Book 2's non-coding DNA outcome: *"including introns, centromeres, **telomeres**, promoters, enhancers and silencers"*. Not a cancer outcome |
| **meiosis** | **4** | Core Idea 2 content list; LO 2(s); LO 2(t) *"including how **meiosis** and random fertilisation can lead to variation"*; LO 4(a) on variation and natural selection |
| **mitosis** | **1** | LO 2(n): *"the events that occur during the mitotic cell cycle and the main stages of **mitosis**"* |
| **crossing-over** | **3** | Core Idea 2 content list, and LO 2(**z**) twice: *"explain the meaning of the terms linkage and **crossing-over** and explain the effect of linkage and crossing-over on the phenotypic ratios from dihybrid crosses"*. **Note: crossing over is NOT named in LO 2(s).** See the note below |
| **second messenger** | **1** | LO 3(n): *"explain the roles and nature of **second messengers** (including cyclic AMP)"* |
| **cAMP** (literal) | **0** | The abbreviation never appears. *"cyclic AMP"* appears once, in LO 3(n) |
| **G protein / G-protein** | **1** | LO 3(p): *"through the respective tyrosine kinase receptor and **G-protein linked receptor**"* |
| **tyrosine kinase** | **1** | LO 3(p), as above |
| **kinase** (any) | 3 | LO 3(o) *"the roles of **kinases** and phosphatases in signal amplification"*; LO 3(p) twice, once for the receptor and once in the exclusion *"specific **kinases** activated in the pathway are not required"* |
| **phosphatase** | **1** | LO 3(o), as above |
| **induced pluripotent** | **0** | Nowhere. Chapter 3.4 §1.4.2 |
| **therapeutic cloning** | **0** | Nowhere. Also zero for "somatic cell nuclear transfer" and "SCNT". Chapter 3.4 §1.4 |
| **karyotype** | **0** | Nowhere. Also zero for **karyogram**, which is the term chapter 3.2 p.6 uses |
| **kinetochore** | **0** | Nowhere, although centromere appears once in LO 2(h) |
| **cytokinesis** | **0** | Nowhere. But the **cell surface membrane** is named in both LO 2(n) and LO 2(s), which is how cytokinesis is examined |
| **bivalent** | **0** | Nowhere |
| **independent assortment** | **0** | Nowhere as a phrase. Covered by LO 2(t)'s "how meiosis ... can lead to variation" |
| **chiasma / synapsis** | **0** | Nowhere |
| **homeostasis / negative feedback / set point** | **0** | Nowhere. Chapter 3.1 §§2 and 4.3, five pages |
| **diabetes** | **0** | Nowhere. Chapter 3.1 §7 |
| **senescence** | **0** | Nowhere |
| **blastocyst / germ layer / bone marrow / haematopoietic** | **0** | None of the four appear, although LO 1(t) and 1(u) both name "blood stem cells (lymphoid and myeloid)" |
| **unipotent** | **0** | Nowhere. LO 1(t) names three levels of potency and this is not one |
| **totipotency / pluripotency / multipotency** | **1 each** | LO 1(t), listed as i, ii and iii with their named examples |
| **lymphoid / myeloid** | **3 each** | LO 1(t) twice and LO 1(u) once |
| **insulin / glucagon** | **1 each** | LO 3(p) |
| **carcinogen / ionising radiation** | **1 each** | LO 2(p): *"identify the causative factors, including genetic, chemical **carcinogens**, **ionising radiation** and loss of immunity"* |
| **random fertilisation** | **1** | LO 2(t) |
| **cell cycle** | **5** | The syllabus overview map, plus LOs 2(n), 2(o), 2(s), 2(t) |
| **stem cell** | **12** | The overview map, the Core Idea 1 content list, and LOs 1(t) and 1(u) |

**One nuance the raw counts hide, and it is important.** *Crossing-over* returns three hits but **none
of them is in a Book 3 outcome.** All three sit in the inheritance half of Core Idea 2, under LO 2(z),
which asks for its effect on phenotypic ratios in dihybrid crosses. Book 3's LO 2(s) asks for "the
events that occur during the meiotic cell cycle", which certainly includes crossing over, and LO 2(t)
asks how meiosis leads to variation, which certainly requires it. So crossing over is examinable under
Book 3 by implication and under Book 6 by name. It is not a low-yield node. Specimen P3 Q1(b)(i) asked
"Explain how meiosis leads to genetic recombination" for four marks, which is crossing over plus
independent assortment. `[OFFICIAL]` This is an example of why a bare hit count is not a scope verdict,
and every zero below has been checked the same way.

### How far the checkpoint exclusion actually reaches

The clause is: *"knowledge that dysregulation of checkpoints of cell division can result in
uncontrolled cell division and cancer is required, but **details of the mechanism are not required**."*
`[OFFICIAL]` LO 2(o).

**What it cuts, with high confidence:**

- **Chapter 3.3 §2.3 in full, page 10.** Cyclins, cyclin-dependent kinases, the cyclin-Cdk complex,
  MPF, the cyclin concentration cycle, and Figs. 7a, 7b and 8. Confirmed three ways: the words return
  zero syllabus hits; no other outcome mentions them; and no specimen question touches them. **This is
  the largest single cut available in Book 3.**
- **The detailed content of the three checkpoint boxes on page 9.** What the G1 checkpoint measures,
  what the G2 checkpoint measures, what the M checkpoint inspects, and which of them triggers apoptosis
  on failure. `[INFERRED]` This is a judgement rather than a quote, so here is the reasoning: a list of
  what each checkpoint inspects is a description of how the control system works, which is mechanism. A
  statement that checkpoints exist at G1, G2 and M and that their failure permits uncontrolled division
  is significance, which is what LO 2(o) is an outcome about. Keep the names and the consequence, drop
  the boxes.

**What it does NOT cut, and this is where candidates over-apply the exclusion:**

- **Everything in LO 2(q).** p53 and ras have their own outcome, which requires an explanation of how
  their mutation "results in uncontrolled cell division". The exclusion in 2(o) does not reach into
  2(q). The p53-to-p21-to-Cdk route survives, because it is p53's mechanism, not the checkpoint's.
- **Everything in LO 2(r).** Multi-step, accumulation of mutations, angiogenesis and metastasis are all
  named in their own outcome.
- **Everything in LO 2(p).** The four causative factors and their routes to mutation.
- **The significance half of LO 2(o) itself.** Growth, repair and asexual reproduction, and the general
  argument that division must be tightly regulated.

**Net effect on chapter 3.3.** Removing §2.3, most of §2.2, §3.2 on telomerase, and the two case
studies the school already marks (FYI) takes the chapter from 31 pages to roughly **18 pages of
examinable content**, a cut of about 40%. Nothing that the outcomes actually require is lost.

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **Reading cell division from data** (LOs 2n, 2s). Chapter 3.2 is 44.1% figure-led, the highest in
   the Book, and **9477 Specimen P2 Q6(a) tested stage identification off a distance-against-time
   graph** rather than off a micrograph. `[OFFICIAL]` The drillable skill set is: identify a stage from
   a DNA-content graph, from a chromosome-number-and-ploidy table, from a micrograph, and from a plot
   of distances between spindle components. The two image-only concept maps on pages 3 and 4 of chapter
   3.2 are the only place the school tabulates DNA content per stage; extract them.

2. **Mitosis versus meiosis, compared on chromosome behaviour** (LOs 2n, 2s). Specimen P2 Q6(c) was
   worth **four marks for four differences**, and it is the school's page 35 table almost verbatim.
   `[OFFICIAL]` The corpus adds 14 essay-scale stems on the same comparison, the most of any node in
   the Book. Drill it until it is reproducible cold, with the restriction to **behaviour** enforced.

3. **The mutation-to-uncontrolled-division chain for p53 and ras** (LO 2q). Specimen P2 Q3(a) was a
   3-mark version and Q3(b) was a 2-mark version, both on the same page. `[OFFICIAL]` Chapter 3.3 is
   34.0% mechanism-chain, the highest of any chapter. Both named genes must be available cold, in both
   directions: what the normal gene does, what the mutation changes, and why that gives uncontrolled
   division. Enforce forward framing, because two separate examiner comments penalise reverse framing.

4. **The three stages of cell signalling applied to an unfamiliar pathway** (LOs 3m, 3n, 3o). Chapter
   3.1 is the largest corpus file at 684 questions and 38.3% of them are figure-led, almost always a
   pathway diagram with molecule names the candidate has never seen. Specimen P1 Q22 is exactly this.
   `[OFFICIAL]` The skill is mapping an arbitrary diagram onto reception, transduction and response,
   and identifying which arrows amplify and which activate.

5. **GPLR versus RTK, point for point** (LOs 3m, 3p). LO 3(p) pairs them explicitly through glucagon
   and insulin, so a comparison question is close to guaranteed somewhere in the outcome's lifetime.
   The schemes reject yes/no comparisons, so every difference must be stated positively on both sides.
   Include the GTP-displaces-GDP step, because it is the most-rejected error in the file.

6. **Stem cell potency, with the negative half of each definition** (LO 1t). Specimen P3 Q3(a) opened
   with a one-mark potency identification and a two-mark defining-features question, both using the
   syllabus's own vocabulary. `[OFFICIAL]` The three levels must come with their boundaries: totipotent
   includes extra-embryonic membranes, pluripotent excludes them, multipotent is limited to one tissue
   type. And the answer must name the precise lineage where one is asked for.

7. **The normal functions of blood stem cells** (LO 1u). This is the half of the stem-cell outcome that
   revision skips, because the interesting material is therapy and the outcome asks for **normal**
   function **in a living organism**. Continuous replacement of short-lived blood cells, the lymphoid
   and myeloid split, and the demand-scaling examples.

8. **Data-quoting discipline across the whole Book.** With 13.3% of structured parts opening "with
   reference to" and multiple schemes rejecting answers that omit the quote, this is a cross-node skill
   worth its own drill set: describe the trend, quote two values with units, then account for it.

### Low yield, and the honest findings of this build

**Finding 1: roughly a third of the Stem_Cells bank tests content with no 9477 outcome.** Measured:

- **102 of the 344 Stem_Cells corpus records (29.7%)** touch iPSCs, SCNT, therapeutic cloning,
  reproductive cloning or stem-cell ethics.
- In the curated main bank the concentration is worse: **87 of 250 (34.8%)**.
- The main bank's second-largest concept heading is literally *"Induced pluripotent stem cells and
  therapeutic cloning"* with **67 of 250 records**, and the largest is *"Blood stem cells and
  transplantation therapy"* with 86, of which the transplantation half also has no outcome.
- Corpus-wide, **96 records mention iPSCs or reprogramming and 71 mention therapeutic cloning or SCNT.**
- All four 9477 specimen papers contain **zero** iPSC, cloning or bioethics questions.
- The syllabus returns **zero hits** for "induced pluripotent", "therapeutic cloning", "somatic cell
  nuclear transfer" and "SCNT", and the only bioethics outcome in the entire syllabus is 2(m), which is
  Book 2's maternal-screening outcome.

**Conclusion.** Filter the Stem_Cells bank before drilling it. Read chapter 3.4 §1.4 once, because a
question stem could use an iPSC as context in the same way Specimen P3 Q1 used mtDNA as context, and
then never drill it again. Do not build a cluster around it.

**Finding 2: roughly a quarter of the Cell_Signalling bank tests content with no 9477 outcome.**

- **156 of the 684 Cell_Signalling corpus records (22.8%)** touch homeostasis, feedback loops,
  diabetes, intracellular or steroid receptors, ligand-gated ion channels, or endocrine glands other
  than the pancreas.
- Breaking that down: 75 records on homeostasis and feedback, 45 on ligand-gated ion channel receptors,
  42 on diabetes, 23 on intracellular or steroid hormone receptors.
- The syllabus returns zero hits for homeostasis, negative feedback, set point and diabetes, and LO
  3(m) excludes intracellular receptors in writing.
- The school's own chapter labels the homeostasis and endocrine sections BACKGROUND READING and the
  diabetes section Supplementary.

**Conclusion.** The blood-glucose content that LO 3(p) requires sits in chapter 3.1 §6, pages 34 to 41.
Sections 4 and 5, pages 26 to 33, and section 7, pages 43 to 44, are ten pages with no outcome behind
them. Drill from §6 only.

**Finding 3: the cyclin and telomerase nodes are small in the corpus, which is a useful cross-check.**

- Cyclin, Cdk and MPF together appear in only **35 of 1955 records (1.8%)**, and of the 87 records that
  mention checkpoints at all, only **12 (13.8%)** require the cyclin or Cdk machinery. So even the
  9744-era prelims mostly tested checkpoints at the level LO 2(o) permits.
- Telomerase and telomeres appear in **140 records (7.2%)**, which is larger, but 58 of those are in
  the Stem_Cells file where telomerase is being used to explain stem cell self-renewal rather than
  cancer.

That is a genuinely encouraging finding. **Unlike Book 2, where a third of the raw corpus tested
dropped content, the Book 3 corpus is much better aligned with 9477 on the cell division and cancer
side.** The contamination is concentrated in two places, chapter 3.1's background sections and chapter
3.4's iPSC and ethics material, and both are easy to filter by keyword.

**Finding 4: nodes that are low frequency but should not be dropped.**

- **The cell surface membrane during division.** LO 2(n) and LO 2(s) both name it, yet the corpus files
  only 5 records touching cell plate or phragmoplast formation. Low frequency, explicitly required,
  cheap to learn. Cytokinesis in animals versus plants is a two-minute node.
- **Signal termination.** Three named enzymes, and only 11 of 250 main-bank Cell_Signalling records sit
  under the termination heading. But it is the natural three-mark follow-up to any amplification
  question and it flows directly from LO 3(o)'s phosphatase clause.
- **The normal functions of embryonic stem cells.** LO 1(u) names them, and the corpus files only 19 of
  250 main-bank Stem_Cells records under "Normal functions of stem cells in a living organism" against
  86 under transplantation therapy. The outcome asks for the one the corpus under-tests.
- **Signal amplification distinguished from activation.** Specimen P1 Q22 turns on exactly this and the
  school's notes never draw the distinction explicitly.

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with Core
  Idea 1 LOs (t) and (u), Core Idea 2 LOs (n) to (t), and Core Idea 3 LOs (m) to (p) read verbatim and
  reproduced in §0, plus a whole-document literal term search for §5. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477
  OFFICIAL)/`), read end to end and counted question by question and part by part. `[OFFICIAL]`
- The school's own **Book 3 chapter PDFs** (`Study Agent/Bio/Book 3 - Cell Signalling, Division, Cancer
  and Stem Cells/`), 4 chapters, 138 pages, full text plus visual reading of every image-only page.
  `[SCHOOL]`
- The **question bank** at `Study Agent/Bio/_question_bank/`, four Book 3 topic files plus their
  overflow, **1955 real questions** with mark schemes reproduced verbatim where a key existed.
  `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery
ratings and self-jotted confusions, not content. They were excluded deliberately, per the subject guide
§3.0 and rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | ~95% `[OFFICIAL]` | Nodes derive directly from 13 LOs read verbatim across three Core Ideas, and every letter was cross-checked against the school's chapter headers with no mismatches found. Stronger than Book 2, which had a real letter-offset error to resolve |
| Exam format | ~95% `[OFFICIAL]` | All four specimen papers counted directly, part by part. Book 3's presence on each paper is a count, not an estimate |
| Archetype frequency | ~84%, **measured** | n=1955 real questions parsed and classified. The residual uncertainty is not sampling error, it is that the corpus is 9744-era, so what it measures is what *prelims* asked. The contamination here is smaller and more localised than in Book 2, which raises confidence relative to that build |
| Mark scheme logic | ~80% `[SCHOOL]` **capped** | Every scheme is a JC prelim. SEAB publishes no 9477 mark scheme and the specimen papers arrive without one. This is the binding cap and it cannot be argued away |
| Trap model | ~90% `[SCHOOL]` | The strongest section of this build. Most entries quote a verbatim reject line or examiner comment from a real scheme, **five are corroborated directly by the 9477 specimen**, and a further nine are corroborated by errors found in the school's own notes, which is a source Book 2's trap model did not have |

**Honest ceiling: ~86% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Book 2:**

1. **No learning-outcome labelling error to work around.** All 13 letters match.
2. **The specimen gives more corroboration.** Book 3 supplied five Paper 1 stems, two complete Paper 2
   questions and two Paper 3 sub-questions, against Book 2's five MCQ stems and scattered parts. Five
   trap-model entries are traceable to specimen questions rather than to prelim schemes.
3. **The corpus is less contaminated by syllabus drift.** Book 2 had roughly a third of its corpus on
   dropped content. Book 3's contamination is about 23% of one file and about 30% of another, with the
   cell division and cancer files running close to clean.

**What is specifically weaker:**

1. **No measured student success rates**, the same gap Book 2 reported. The trap ranking in §4 is by
   scheme frequency, syllabus weight and specimen corroboration, not by observed failure rate.
2. **The school's notes are less reliable than Book 2's.** The digest flags 45 findings, of
   which roughly a dozen are genuine factual errors or hard internal contradictions. Three of them sit
   directly on examined distinctions: glucagon and skeletal muscle, ESC totipotency, and the myeloid
   progenitor's range. Any cluster built from the notes without the digest open beside it will
   propagate them.
3. **One genuine internal contradiction remains unresolved.** The corpus files 44 essay-scale Book 3
   stems, with cell division alone supplying 14. The official specimen gave Book 3 zero essay options.
   Both statements are verified. Only a second official paper resolves which is the better predictor.

**Genuinely thin evidence, stated plainly:**

- **Paper 4.** Book 3 had zero presence on the specimen practical. Root-tip squash preparation and
  identification of mitotic stages under a microscope is a standard practical and the syllabus's P4
  skill areas plainly permit it, but there is **no corpus evidence** about how 9477 would examine it.
  The bank holds only 6 records tagged to P4 across all four Book 3 files. Do not build a practical
  cluster from this evidence; flag it for the October practical block instead.
- **Sequence and stage identification as an archetype.** The corpus files it at only 1.1%, yet Specimen
  P2 Q6(a)(i) asked for it directly and Q6 as a whole is 11 of the paper's 90 marks. The corpus is
  probably under-representing this archetype because prelims asked for stage description in prose while
  the specimen asked for stage identification from data. This is the one place where I would trust the
  specimen over the corpus.
- **How the "details of the mechanism are not required" exclusion is applied in practice.** The cut of
  chapter 3.3 §2.2's checkpoint boxes is `[INFERRED]` reasoning about where significance ends and
  mechanism begins, not a quoted rule. No specimen question and no prelim scheme in the corpus settles
  it. If in doubt, hold the three checkpoint names and the failure consequence, which cost almost
  nothing, and skip the inspection lists.
- **The two-level explanation of tumour-suppressor recessiveness.** The school's notes contradict
  themselves and never bridge the gap, and no scheme in the corpus states the bridge explicitly. The
  bridge given in §4 and in the digest is `[INFERRED]` from standard cancer biology. It is almost
  certainly what a scheme would want, but it is not quoted from one.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the
most likely mispredicting dimension is **format weighting**, not archetype content. The corpus is 33.7%
MCQ and 35.9% figure-led, but the specimen put 15 of Book 3's clear marks into two long structured
questions built entirely on figures. Re-measure §2's format split against the §2.0 specimen counts
first, and push drill sets further towards figure-led structured questions before changing anything
else.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 2 Questions 3 and 6** sat
cold and back to back, which is 23 marks in about 30 minutes, followed by **Specimen Paper 3 Question
3** parts (a) and (b). Between them they cover LOs 1(t), 2(n), 2(p), 2(q), 2(r) and 2(s) in the
examiner's own words, which is six of the Book's thirteen Learning Outcomes, and they test all three of
the Book's dominant archetypes: data interpretation, mechanism chain and comparison.
