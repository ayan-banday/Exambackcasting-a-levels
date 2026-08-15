---
subject: Biology
level: H2
topic: Book_9_Infectious_Diseases
syllabus_code: 9477
type: qualitative   # subject default, and it holds almost completely here. OVERRIDE → quantitative for
                    # exactly two narrow sub-strands: (1) R0 and the herd immunity threshold, where the
                    # arithmetic of R0 > 1 versus R0 < 1 and the 1 - 1/R0 relationship is the outcome, and
                    # (2) rate and percentage-change arithmetic off an epidemiological or antibody-titre
                    # figure. Those two close by solving variants until mechanical. Everything else closes
                    # by concept doc plus re-test at a new angle.
                    # NOTE the override on (1) is [OFFICIAL], not inferred: the syllabus MATHEMATICAL
                    # REQUIREMENTS section (p.25) lists "the use of Ro value" alongside standard deviation,
                    # the Hardy-Weinberg equation, t-tests and chi-squared tests. R0 is a named
                    # mathematical tool candidates are expected to USE, not only to define. See §5.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~82% MIXED. [OFFICIAL] ~98% on scope (all 11 Extension Topic A LOs read verbatim off the syllabus PDF, plus a literal search of 60+ terms re-run across en dash, hyphen, space and closed forms on whitespace-normalised text); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part, marks tallied); [SCHOOL] ~78% on marking (JC prelim schemes only, no SEAB scheme exists for 9477, and the specimen ships without one); archetype frequencies MEASURED by parsing 901 real questions, not estimated. Lower than Book 3's ceiling for one reason: two of the eleven outcomes are taught nowhere in the school notes, so the ground truth for LO (j) and LO (k) is the syllabus sentence and nothing else."
last_updated: 2026-08-15
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 9: Infectious Diseases (Extension Topic A)

> Specialises the subject guide to Book 9. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in this
> folder before building any cluster. Book 9's notes carry 39 numbered findings, six of which sit
> directly on an examined distinction, and in every one of those six the correct version exists
> elsewhere in the same Book while the wrong version sits in the memorable place.

---

## 0. Scope boundary (get this right before anything else)

**Book 9 is not a Core Idea.** It is Extension Topic A, one of two extension topics, and its outcomes
are lettered (a) to (k) with no Core Idea prefix. Every reflex built on Books 1 to 3, where an outcome
was cited as "2(n)" or "3(m)", has to be dropped here. `[OFFICIAL]`

**The syllabus states the weighting for the pair, not for each topic:** *"Both Extension Topics take up
about 15% of the total H2 Biology curriculum"* and *"Students are expected to study all four Core Ideas
and both the Extension Topics."* `[OFFICIAL]` (syllabus p.4). Split evenly that is roughly 7.5% each,
but the syllabus never says the split is even, and §2.0 below measures what the specimen actually did.

| School chapter | Extension Topic A LO(s) | Printed pages | Note |
|---|---|---|---|
| 9.0 Cover Pages and Contents | all | cover, 1–2 | Prints the outcome block, plus a second, outdated block |
| 9.1 Definitions and Overview | (a) framing | 3–10 | The definition block on pp.4–5 is the most reliable page in the Book |
| 9.2 Innate Immunity | **(a)** | 11–25 | Non-specific half of (a) |
| 9.3 Adaptive Immunity | **(a), (b)** | 25–49 | Densest chapter. Carries three of the six mark-costing errors |
| 9.4 Antigen Recognition | **(a), (c), (d)** | 49–78 | Most technically careful chapter. Owns LO (d) outright |
| 9.5 Viral Infections in Humans | **(g)** | 78–88 | Shortest content chapter, almost entirely examinable |
| 9.6 Bacterial Infections and Treatment | **(h), (i)** | 89–115 | Longest chapter. §6.7 has no outcome |
| 9.7 Vaccination | **(e), (f)** | 115–131 | §7.1.1 marked (FYI) by the school and contains a real factual error |
| **nowhere** | **(j), (k)** | **none** | **Not taught. See §5.** |

That is **11 learning outcomes**, of which **9 are taught by the school notes and 2 are not**.
`[OFFICIAL]` on the outcomes, `[SCHOOL]` on the chapter split and page counts.

### Verbatim 9477 Learning Outcomes for Extension Topic A

Reproduced word for word from
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`, pp.19–20. `[OFFICIAL]`

**Content**

> • The immune system – adaptive and innate
> • Genetic recombination
> • Modes of viral and bacterial infections
> • Vaccination and modes of action of antibiotics

**Learning Outcomes.** Candidates should be able to:

**(a)** describe the specific (adaptive) immune system, including active, passive, naturally acquired and
artificially acquired immunity, and the non-specific (innate) immune system

**(b)** outline the roles of B lymphocytes, T lymphocytes, antigen-presenting cells and memory cells in
specific primary and secondary immune responses

**(c)** explain the relationship of the molecular structure of antibodies to their functions, using
immunoglobulin G, IgG, as an example

**(d)** explain how somatic recombination, hyper-mutation and class switching result in millions of
different antibody molecules

**(e)** discuss how vaccination can control disease (including the eradication of smallpox), limited to
vaccination stimulates immunity without causing the disease and vaccination of a high enough proportion
of the population can break the disease transmission cycle

**(f)** discuss the benefits and risks of vaccination

**(g)** explain how viruses, including influenza virus and HIV, cause diseases in humans through the
disruption of host tissue and functions (including HIV and helper T cells, influenza virus and epithelial
cells of the respiratory tract)

**(h)** explain the modes of transmission and infection of bacterial pathogens, using Mycobacterium
tuberculosis as an example

**(i)** describe the modes of action of antibiotics, including penicillin, on bacteria

**(j)** explain the meaning of the basic reproduction number, R0, as an indicator of the transmissibility
(contagiousness) of infectious agents, and how R0 can be used to predict the progress of a disease
outbreak

**(k)** outline the terms (i) outbreak, (ii) epidemic, and (iii) pandemic, that are used to describe the
spread of an infectious disease such as influenza.

Closing with the standing instruction: *"Use the knowledge gained in this section in new situations or
to solve related problems."* `[OFFICIAL]`

### The one exclusion the syllabus states outright, and it is worth real time

LO (e) is the only outcome in Extension Topic A that carries an internal scope limit, and it is tight:

> discuss how vaccination can control disease (including the eradication of smallpox), **limited to**
> vaccination stimulates immunity without causing the disease **and** vaccination of a high enough
> proportion of the population can break the disease transmission cycle

`[OFFICIAL]` Two clauses, and the outcome says the discussion is **limited to** them. `[INFERRED]` on
where the limit bites: it protects the mechanism by which a vaccine primes memory without causing the
disease, and it protects herd immunity as a transmission-cycle argument. It does not protect a survey of
six vaccine types, a dated history of immunisation, or the operational detail of the WHO eradication
programme. The smallpox parenthesis keeps the eradication **case** in scope as the worked example, which
is why the three properties that made smallpox eradicable survive the cut and the 1966 to 1980 programme
timeline does not.

### The three wording drifts between the school's block and the syllabus

All four of the school's printings carry the same three. `[OFFICIAL]` on the syllabus side.

1. School prints "the eradication of **small pox**"; syllabus prints "**smallpox**".
2. School prints LO (h) as "explain the **mode** of transmission and infection"; syllabus prints
   "**modes**". The plural matters, because chapter 9.6 teaches three transmission modes and four
   virulence-factor classes, and a singular reading invites a one-mode answer.
3. School's Content bullet reads "**Mode** of viral and bacterial infections"; syllabus reads "**Modes**".

### The one documentation error that changes what to study

Chapter 9.0 printed page 1 carries a second outcome block headed **"LEARNING OUTCOMES FOR SECTION 1 TO
SECTION 4"** whose (a) and (d) are the **old 9744-era wordings**. `[SCHOOL]` Full text and analysis are
in the digest, 9.0 §5.1. The two differences that matter:

- That block's (a) says "active and passive, natural and **acquired** immunity", which reads as if
  natural and acquired were the opposed pair. The current (a) says "active, passive, **naturally
  acquired and artificially acquired**", which is a two-by-two grid. `[OFFICIAL]`
- That block's (d) says "explain how **genetic recombination during development** results in millions of
  different antibody molecules", with the three mechanisms in a bracket. The current (d) puts
  **somatic recombination, hyper-mutation and class switching in the outcome itself**, and Specimen
  Paper 3 Q3(c) asked for all three by name, one mark each. `[OFFICIAL]`

Cross out the Section 1 to 4 block. Use the cover block.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 9, grouped by the cluster that should teach it. Convergence
requires no UNTOUCHED node. LO letters are `[OFFICIAL]`.

### Cluster 01, innate immunity and the four types of immunity (LO a)

- [ ] **The three lines of defence (a)**, named and ordered, with the "operates regardless of the nature
      of the invader" clause that carries the non-specificity mark.
- [ ] **First line, external barriers (a)**: skin and keratinocytes, mucous membranes, mucus, ciliated
      epithelium and the sweeping action, acidic pH, lysozyme, commensal microbes. Note this is also the
      opening of most TB questions, which makes it double-duty for LO (h).
- [ ] **Innate immunity as a set of properties (a)**: present from birth, immediate, non-specific, no
      memory, same magnitude on re-exposure, and it instructs the adaptive system.
- [ ] **The phagocytes (a)**: neutrophil (first recruited, most numerous), macrophage (tissue-resident,
      long-lived, an APC), dendritic cell (at portals of entry, the bridge to adaptive). One
      distinguishing fact each.
- [ ] **Natural killer cells (a)**: kill infected and abnormal host cells without an antigen-specific
      receptor. **Not** the school's MHC-display mechanism, which is inverted. See digest 9.2 §5.2.
- [ ] **Defensive proteins (a)**: interferons as the named antiviral cytokine; complement with its three
      effects (lysis by membrane attack complex, opsonisation, stimulation of inflammation).
- [ ] **Inflammation (a)**: histamine from mast cells, vasodilation and increased permeability, the four
      signs, neutrophil accumulation, pus.
- [ ] **Phagocytosis, stage by stage (a, h)**: recognition and attachment, engulfment into a phagosome,
      fusion with lysosome to form a phagolysosome, digestion by hydrolytic enzymes. This is the setup
      for the *M. tuberculosis* answer.
- [ ] **Fever (a)**: raises phagocyte activity, slows bacterial reproduction, accelerates adaptive
      proliferation, stimulates interferon.
- [ ] **The four-way immunity grid (a)**: naturally acquired active, artificially acquired active,
      naturally acquired passive, artificially acquired passive, each with an example and each with the
      reason it is or is not long-lasting.
- [ ] **Innate against adaptive, compared point for point (a)**: specificity, speed, memory, cells
      involved, magnitude on re-exposure. This is a recurring three-mark table in the corpus.

### Cluster 02, adaptive immunity, cells and the two responses (LOs a, b)

- [ ] **Humoral against cell-mediated (a)**: what mediates each, what each defends against, and the hard
      limit that antibodies cannot reach a microbe inside a host cell.
- [ ] **B lymphocyte (b)**: membrane antibody as receptor, one specificity per cell, differentiates into
      plasma cell and memory B cell, and only B cells and plasma cells make antibody.
- [ ] **Helper T lymphocyte (b)**: recognises antigen presented on MHC class II by an APC, releases
      cytokines that activate B cells, cytotoxic T cells and macrophages. It is the switch for both arms,
      which is why LO (g) makes it HIV's target.
- [ ] **Cytotoxic T lymphocyte (b)**: recognises antigen on MHC class I on any infected body cell,
      releases **perforin and granzymes**, target dies by **apoptosis**. Not hydrogen peroxide. See
      digest 9.3 §5.2.
- [ ] **Antigen-presenting cells (b)**: dendritic cell, macrophage and B cell, all three named, with
      capture, processing and display on MHC.
- [ ] **Memory cells (b)**: long-lived, functionally inactive until re-stimulated, and they must
      differentiate into plasma cells before antibody is secreted. The corpus records "memory B cells
      secrete antibody directly" as a named misconception.
- [ ] **Clonal selection against clonal expansion (b)**: selection is the antigen binding the one
      **pre-existing** clone whose receptor fits; expansion is the proliferation that follows. The
      school's chapter 9.3 p.34 defines selection as the mitosis, which is wrong. See digest 9.3 §5.1.
- [ ] **MHC class I against class II (b)**: class I on all nucleated cells presenting to cytotoxic T
      cells; class II on APCs presenting to helper T cells. The school never states this except in one
      figure caption. See digest 9.3 §5.6.
- [ ] **Primary against secondary response (b)**: slower onset, lower peak, shorter duration against
      faster, higher, longer, **and the reason**, which is the pre-existing memory pool. Comparative
      language is required; the corpus rejects "rapid" without the comparison.
- [ ] **The full adaptive sequence (b)**: pathogen entry, phagocytosis and processing by an APC, display
      on MHC, helper T activation, cytokine release, clonal selection and expansion of the matching B and
      T clones, differentiation into plasma, memory and effector cells, then the two effector arms.

### Cluster 03, antibody structure, function and diversity (LOs c, d)

- [ ] **Antibody structure (c)**: quaternary structure of four polypeptides, two heavy and two light,
      Y shape, disulfide bonds, hinge region, variable and constant regions, two identical
      **antigen-binding sites**, hypervariable regions. Every feature paired with what it enables.
- [ ] **Antibody function (c)**: neutralisation, agglutination, opsonisation via Fc receptors on
      phagocytes, complement activation. Four named functions.
- [ ] **The structure-to-function pairings (c)**, which is the outcome itself: variable regions give
      specificity; two binding sites allow cross-linking and agglutination; the hinge allows the arms to
      vary their separation so cross-linking works; the Fc region binds Fc receptors so the antibody acts
      as an opsonin and activates complement; the whole molecule is too large to cross a membrane, so it
      acts only outside cells.
- [ ] **IgG specifically (c)**: named in the outcome. Most abundant, longest half-life, crosses the
      placenta, dominant in secondary responses, four subclasses.
- [ ] **The other four classes**, at the level of Table 4.1: IgM as the pentamer released first in a
      primary response and a powerful agglutinator; IgA in secretions and colostrum; IgE on mast cells;
      IgD on naive B cells.
- [ ] **Epitope (c)**: the accessible portion of an antigen that binds a receptor; one antigen carries
      several; each lymphocyte has one specificity.
- [ ] **Somatic recombination (d)**: named in the outcome. Random selection of one V, one D and one J
      segment, joining by V(D)J recombinase, intervening DNA deleted, before antigen, in developing
      B cells. Plus combinatorial, junctional and heavy-light pairing diversity as the four sources.
- [ ] **Somatic hypermutation (d)**: named in the outcome. Point mutations at very high rate in the V
      regions of **activated B cells** after antigen, giving affinity maturation by selection of higher-
      affinity clones. Not in plasma cells. See digest 9.4 §5.1.
- [ ] **Class switching (d)**: named in the outcome. Same V region joined to a different heavy-chain C
      region, DNA between switch regions deleted so it is irreversible, triggered by helper T cytokines,
      **changes effector function but not antigen specificity**.
- [ ] **The what-changes-and-what-stays table (d)**, which is how the outcome is actually tested: three
      mechanisms against three columns, timing relative to antigen, what part of the gene changes, and
      what stays constant.

### Cluster 04, viral disease (LO g)

- [ ] **Influenza transmission and entry (g)**: respiratory droplets, entry via nose or mouth, primary
      target the **epithelial cells lining the respiratory tract**, named in the outcome.
- [ ] **Neuraminidase and the mucus barrier (g)**: NA cleaves sialic acid so the virus is not trapped,
      which is the point at which the first line of defence fails.
- [ ] **How influenza damages tissue (g)**: budding depletes the epithelial cell membrane, epithelial
      lining is lost, plus immune-mediated killing of infected cells by cytotoxic T cells; then the
      functional consequence, which is loss of the mucociliary escalator and therefore loss of the first
      line of defence.
- [ ] **Influenza symptoms as consequences (g)**: each symptom traced to a mechanism.
- [ ] **HIV as a retrovirus targeting helper T cells (g)**: named in the outcome. CD4 as receptor plus a
      co-receptor, reverse transcriptase, integration as provirus, latency and invisibility to cytotoxic
      T cells, budding release.
- [ ] **How HIV disrupts function (g)**: progressive destruction of helper T cells collapses **both**
      arms of adaptive immunity, because the helper T cell activates B cells and cytotoxic T cells,
      leading to opportunistic infection. This is the answer and it must be linked back to Cluster 02.
- [ ] **The three clinical phases (g)**, read off Fig. 5.8: acute with high viraemia, chronic latency
      with slowly falling CD4, crisis below 200 cells mm⁻³ classified as AIDS.
- [ ] **AIDS defined (g)**: not a disease but a collection of opportunistic diseases arising from
      HIV-caused immunodeficiency.

### Cluster 05, bacterial disease and antibiotics (LOs h, i)

- [ ] **Three modes of transmission (h)**: contact (direct, indirect via fomites, droplet), vehicle
      (waterborne, foodborne, airborne, bodily fluid), vector (mechanical, biological). Outcome says
      **modes**, plural.
- [ ] **Four classes of virulence factor (h)**: adherence, invasion, toxicity, evasion of host defences.
      One mechanism and one named example each.
- [ ] **Exotoxin against endotoxin (h)**: chemical nature, secreted or not, which bacteria, mode of
      action, effect. Five axes.
- [ ] **Evasion of host defences (h)**: capsules against complement and against phagocytosis, survival
      inside phagocytes, antigenic variation, IgA proteases, Fc binding.
- [ ] **Mycobacterium tuberculosis, transmission (h)**: named in the outcome. Droplet and airborne,
      inhalation of droplet nuclei into alveoli, overcrowding and low immunity as risk factors.
- [ ] **Mycobacterium tuberculosis, infection (h)**: engulfed by alveolar macrophages, **prevents fusion
      of the phagosome with lysosomes**, survives and replicates inside the macrophage, tubercle forms,
      latency, then rupture and active disease. The lysosome-fusion block is the single most-examined
      fact in the chapter.
- [ ] **Latent against active TB (h)**: symptoms, contagiousness, tubercle intact or ruptured.
- [ ] **Selective toxicity (i)**: the concept that makes every antibiotic answer work, and the reason
      given for each mode of action.
- [ ] **Four modes of action of antibiotics (i)**: cell wall synthesis, nucleic acid synthesis, protein
      synthesis, membrane integrity, one named example each. Outcome says **modes**, plural.
- [ ] **Penicillin in detail (i)**: named in the outcome. Peptidoglycan of alternating NAG and NAM
      cross-linked by peptide bridges; **transpeptidase** forms the cross-links; penicillin binds and
      blocks it; autolysins keep cutting; wall weakens; water enters by osmosis down a water potential
      gradient; the wall cannot resist the pressure; the cell lyses. Bacteriolytic.
- [ ] **β-lactamase (i)**: hydrolyses the β-lactam ring, which is why some bacteria resist penicillin.
- [ ] **Why antibiotics do not act on viruses (i)**: viruses are not cells and lack all four targets;
      they use host transcription and translation machinery.

### Cluster 06, vaccination and epidemiology (LOs e, f, j, k)

- [ ] **Vaccine and vaccination defined (e)**: a preparation containing antigens used to stimulate an
      immune response artificially; vaccination confers artificial active immunity.
- [ ] **Clause one of LO (e)**: the vaccine presents antigens that imitate an infection, triggers clonal
      selection and expansion of specific B and T cells, leaves memory cells, so the next encounter is a
      fast secondary response, **without causing the disease**.
- [ ] **Clause two of LO (e), herd immunity**: vaccinating a high enough proportion leaves too few
      susceptible people for the pathogen to reach, which **breaks the transmission cycle** and protects
      those who cannot be vaccinated.
- [ ] **Smallpox eradication (e)**: named in the outcome. **Variola** causes smallpox; **vaccinia** is
      the cowpox vaccine virus; the school gets these backwards on p.118 and right on p.126. Ring
      vaccination plus surveillance; the three properties that made smallpox eradicable.
- [ ] **Vaccine types (e, f)**: live attenuated, inactivated, toxoid, each with advantage and
      disadvantage. These three carry the risk argument.
- [ ] **Benefits and risks (f)**: four benefits and three risks, weighed, with a judgement. The corpus
      rejects inequitable access as a **risk**, because it is a challenge to a programme rather than a
      risk of taking a vaccine.
- [ ] **R0 defined (j)**: **not taught by the school.** The mean number of secondary cases produced by
      one infected individual introduced into a **wholly susceptible** population.
- [ ] **R0 used to predict an outbreak (j)**: R0 > 1 the infection spreads and case numbers grow;
      R0 = 1 endemic and stable; R0 < 1 the outbreak dies out. What raises and lowers R0: contact rate,
      transmission probability per contact, infectious period, vector abundance, and the proportion of
      the population already immune.
- [ ] **R0 and the herd immunity threshold (j, e)**: the higher R0, the greater the proportion that must
      be immune before transmission breaks. This is the bridge that makes LOs (e) and (j) one cluster.
      **`[type override → quantitative]`**
- [ ] **Outbreak, epidemic, pandemic (k)**: **not taught by the school.** Three definitions, scaled by
      geographic extent, with influenza as the syllabus's own named example.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part, with marks tallied, from all four **9477 specimen
papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only
genuinely Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**, so
everything here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Extension Topic A landed on the specimen

| Paper | Extension Topic A | Marks (clear) | Marks (with crossovers) | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | **Q29, Q30** clear; Q11 and Q24 crossover | 2 | 4 | 6.7% to 13.3% |
| **P2** Structured (90 marks) | **Q9 entire** (7) | 7 | 7 | 7.8% |
| **P3** Section A (55 marks) | **Q3(c)(i)–(iii)** (3) | 3 | 3 | 5.5% |
| **P3** Section B essay (20 marks) | **none. Both options were Book 1** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | **none** | 0 | 0 | 0% |

Applying the official paper weightings of 15%, 30%, 35% and 20% `[OFFICIAL]` (syllabus p.9),
**Extension Topic A was worth roughly 4.7% to 5.7% of the whole A-level on the specimen.**

**That is materially below the nominal share and it is the single most important calibration fact in
this guide.** The syllabus says both Extension Topics together take about 15% of the curriculum, which
splits to roughly 7.5% each. The specimen delivered about 5%. Two honest readings, and both matter:

1. **Extension Topic B outscored Extension Topic A on the same paper.** On P1, climate change took
   Q26, Q27 and Q28 while Infectious Diseases took Q29 and Q30. On P2, the climate change question Q8
   was worth **13 marks** and the Infectious Diseases question Q9 was worth **7**. Counting both
   extension topics together gives 5/30 on P1 and 20/90 on P2, which lands the pair at about 10.6% of
   the whole paper, still under the stated 15%. `[OFFICIAL]`
2. **One specimen paper is one sample.** Curriculum time is not the same quantity as exam marks, and a
   later paper could reverse the split. Do not conclude that Book 9 is a 5% topic; conclude that on the
   only official evidence available, it was not the 7.5% the arithmetic suggests, and that its most
   likely landing zones are narrow and predictable.

### The structural fact that changes exam technique

**On Paper 1 the questions run in syllabus order, and the Extension Topics come last.** The specimen
P1 sequence is Core Idea 1 (Q1 to Q8), Core Idea 2 (Q9 to Q18), Core Idea 3 (Q19 to Q22), Core Idea 4
(Q23 to Q25), Extension Topic B (Q26 to Q28), **Extension Topic A (Q29, Q30)**. `[OFFICIAL]`

**On Paper 2, Q9 was the last question on the paper**, and Q8, the other extension topic, was second to
last. `[OFFICIAL]`

So **Infectious Diseases is the last thing a candidate meets on both Paper 1 and Paper 2.** That is not
a content point, it is a timing point, and it is worth more than most content points: this is precisely
the material that gets rushed or skipped when the clock runs out. Two consequences for drilling. First,
practise Book 9 questions **under time pressure at the end of a session**, not fresh. Second, on a real
paper, if time is tight, scan to the end first, because a 7-mark structured question on antibodies is
faster marks than the middle of a 12-mark data question.

### What the specimen actually asked (the useful detail)

**Paper 1, the two clear stems and two crossovers.** `[OFFICIAL]`

| Q | Node tested | LO | Stem type |
|---|---|---|---|
| 11 | Five features of the HIV reproductive cycle; how many also occur in influenza | **2(e) answer**, Book 9 context | Count-the-features MCQ. **Crossover: Infectious Diseases framing, Book 4 answer** |
| 24 | Precipitin reaction across four species, ranked by percentage precipitate | 4-series evolution stem, **antibody specificity answer** | Applied. **Crossover: uses antibody-antigen complementarity as a tool** |
| 29 | A primary-response diagram: P activates Q, Q undergoes mitosis, giving R (few receptors, small) and S (no receptors, surrounded by free antibody). Identify all four | **(b)** | "Which row" four-column grid. All four must be right |
| 30 | Which conditions increase the R0 of viral dengue disease | **(j)**, crossed with Extension B (i) | Four applied scenarios, one correct |

Four structural facts follow, and each changes how to drill.

1. **Neither clear question is plain recall.** Q29 requires reading a cell-lineage diagram and mapping
   morphology to identity. Q30 requires applying the definition of R0 to four unfamiliar scenarios.
2. **Q29's distractors are built from near-miss cell identities**, not from unrelated content. Option A
   makes Q a T lymphocyte, option C makes Q a T lymphocyte and S a B lymphocyte, option D makes R a
   T lymphocyte arising from B cell mitosis. Every wrong option is one cell type out of place. This is
   the clearest signal on the specimen about what Book 9 punishes: **the cells must be told apart by
   what they carry and what they do, not by name recognition.**
3. **Q30 is an R0 question and the school notes contain no R0 content whatsoever.** `[OFFICIAL]` A
   candidate revising only from Book 9 could not have answered it. It is also a **double crossover**,
   because dengue and its mosquito vector are Extension Topic B LO (i), so the question requires the
   R0 definition from Extension A applied to a vector-borne disease from Extension B.
4. **Q11 is Book 9 framing over a Book 4 answer.** The stem names HIV and influenza, which are Extension
   Topic A LO (g)'s two named viruses, but the five listed features are reproductive-cycle steps owned
   by Core Idea 2 LO (e). Revision that never crosses into Book 4 loses it.

**Paper 2 Question 9, the whole of Book 9's presence, and it is the last question on the paper.**
Seven marks, two parts. `[OFFICIAL]`

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | **State a named example of each** (antibody, antibiotic) | 2 | (c) and (i) |
| (b) | Figure 9.1 shows an antibody and an antibiotic drawn to the same scale. **Explain how the size and shape of antibody molecules and antibiotic molecules relate to their modes of action and functions** | 5 | **(c) and (i) together** |

This question deserves close reading, because it is the only official structured Book 9 question in
existence and it does something the school notes never do.

- **It fuses two outcomes into one stem.** LO (c) is about antibody structure and function; LO (i) is
  about antibiotic modes of action. Q9(b) asks for both, compared, on one axis (size and shape). A
  candidate who has revised the two chapters separately has the content and not the comparison.
- **The figure is the question.** The two molecules are drawn to the same scale, so the entire prompt is
  a size contrast: a large four-chain glycoprotein against a small molecule about one-hundredth of its
  diameter. The answer runs from that observation outwards.
- **Part (a) is worth two marks for two words.** "State a named example" of an antibody and of an
  antibiotic. The corpus records the examiner comment *"Vaccines ≠ Antibodies ≠ Antibiotics"*
  `[SCHOOL]`, which is exactly the confusion this part tests. IgG and penicillin are the safe answers,
  and both are named in the syllabus.
- **The command word on the 5-mark part is Explain**, which means causal linkage, not description, and
  the phrase "**relate to** their modes of action and functions" is the structure-function pairing that
  LO (c) demands in its own words.

**Paper 3 Question 3(c), three marks, and it is LO (d) tested verbatim.** `[OFFICIAL]` Q3 as a whole is
a 12-mark stem-cell question (Book 3), and part (c) leaves Book 3 entirely. Figure 3.2 shows lymphoid
stem cell to T and B lymphocyte progenitors, to naive B lymphocytes able to bind antigen X and antigen Y,
to an activated B lymphocyte bound to antigen X, to three plasma cells secreting antibody variants X1,
X2 and X3. The ask: *"Name precisely the genetic process occurring in:"*

| Part | The described process | Answer | Marks |
|---|---|---|---|
| (c)(i) | "B lymphocyte progenitors, to give naive B lymphocytes capable of recognising **different antigens**" | somatic recombination / V(D)J recombination | 1 |
| (c)(ii) | "**activated B lymphocytes**, to give plasma cells that secrete **IgG** antibodies instead of membrane-bound **IgM** antibodies" | class switching / isotype switching | 1 |
| (c)(iii) | "**activated B lymphocytes**, to give sub-clones of plasma cells that **vary slightly in the ability of their antibodies to bind antigen X**" | somatic hypermutation | 1 |

Four things follow, and they are the highest-value inferences in this guide.

1. **The command is "Name precisely."** One mark, one term, no partial credit for the neighbouring
   mechanism. The corpus records the matching trap in a school examiner's words: *"recombination and
   hypermutation earn nothing in a class-switching question."* `[SCHOOL]`
2. **The examiner distinguishes the three by their effect, not by their name.** Different antigens
   recognised, class changed with specificity kept, affinity varied within one specificity. Drill from
   the effect back to the term, because that is the direction the question runs.
3. **The specimen puts hypermutation and class switching in "activated B lymphocytes."** `[OFFICIAL]`
   The school's chapter 9.4 says twice that hypermutation happens after "the plasma cell has encountered
   antigen". The specimen's own wording settles it against the notes.
4. **This is a Book 9 outcome harvested from inside a Book 3 question.** One stem, two Books. Same shape
   as Specimen P1 Q11 and Q24, and the same shape the Book 3 guide recorded for Specimen P3 Q3 as a
   whole. Cross-Book harvesting is the house style of this paper.

**Paper 3 Section B.** The two essay options were Q4 on the roles of proteins and Q5 on how molecules
enter cells. **Both Book 1.** `[OFFICIAL]` No Extension Topic A essay. See §2 for the tension with the
school corpus, which files 21 essay-scale Book 9 stems.

**Paper 4.** Zero Extension Topic A content across all three questions, which were photosynthesis rate,
stomatal density microscopy, and a photosynthesis planning question. `[OFFICIAL]` Note that this does not
rule out a microbiology practical; see §5 and §6.

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in the Infectious Diseases file of the question bank at
`Study Agent/Bio/_question_bank/`, plus its overflow file. Every record is a real question off a real
paper, which is a JC prelim, a timed practice paper, a school prelim or the 9477 specimen. Sources span
2011 to 2025 plus the 9477 specimen.

### Sample size

| Bank file | Main bank | Overflow | Total |
|---|---|---|---|
| Infectious_Diseases | 901 | 1 (tagged OFF-9477) | 902 |

**n = 901 real in-scope questions.** `[SCHOOL]` corpus, measured counts. Unlike the Book 3 files, this
bank was not quota-capped at 250, so the main bank **is** the full corpus and there is no main-versus-
overflow divergence to reconcile. The single overflow record is an HCI 2017 penicillin question tagged
off-syllabus. Difficulty tiering as the bank labels it: **base 27.5%, harder 49.1%, hardest 23.4%**.

### Format split

| Measure | Full corpus (n=901) |
|---|---|
| MCQ (P1-sourced) | **18.0%** |
| Structured | **82.0%** |
| Figure, table or micrograph led | **29.2%** |

Paper of origin: **P2 40.8%, P3 39.4%, P1 18.0%, P4 1.0%**, with 0.8% unattributed or multi-sourced.

**Two format findings worth acting on.**

First, **the P3 share at 39.4% is the highest of any Book measured so far** (Book 3's was 19.7%). Book 9
is a Paper 3 topic in the corpus. That is consistent with the essay evidence below and with the fact
that immunology is a natural fit for the long-structured, stimulus-led Section A format. It is
**inconsistent** with the specimen, where Book 9 got 3 marks on P3 against 7 on P2. Flagged as an open
tension in §6.

Second, **figure-led at 29.2% is lower than Book 3's 35.9%**, but the distribution inside the topic is
uneven and that is the useful part:

| Concept | n | Figure-led |
|---|---|---|
| R₀, transmission and outbreak epidemiology | 106 | **37.7%** |
| Vaccination: control of disease, herd immunity, benefits and risks | 174 | **33.9%** |
| B lymphocytes, T lymphocytes, APCs and the primary and secondary response | 143 | 32.2% |
| Antibody structure, function and diversity | 128 | 32.0% |
| Bacterial disease: *M. tuberculosis* and antibiotics | 255 | 25.1% |
| Innate and adaptive immunity, and the four types of immunity | 48 | 18.8% |
| Viral disease: influenza, HIV and dengue | 47 | 8.5% |

**The epidemiology and vaccination halves of the topic are the figure-heavy ones**, which makes sense:
antibody titre curves, incidence-against-time plots, vaccination coverage graphs and R0 comparisons are
all data. The immunology halves are more prose-driven.

### Command-word census (structured questions only, n = 739)

| Command | Count | Share |
|---|---|---|
| **Explain** | 225 | **30.4%** |
| **Suggest** | 176 | **23.8%** |
| **Describe** | 119 | **16.1%** |
| State | 49 | 6.6% |
| Outline | 41 | 5.5% |
| Discuss | 24 | 3.2% |
| Name | 15 | 2.0% |
| Identify | 10 | 1.4% |
| Comment on | 10 | 1.4% |
| Complete / Compare / Calculate | 7 each | 0.9% each |
| Predict | 6 | 0.8% |
| Evaluate | 5 | 0.7% |
| Label / Account for | 4 each | 0.5% each |
| Draw / Justify / Define | 3 each | 0.4% each |
| Deduce | 2 | 0.3% |
| Distinguish | 1 | 0.1% |
| (no command verb) | 18 | 2.4% |
| **"With reference to" constraint** | **117** | **15.8%** |

**Explain, Suggest and Describe together are 70.3% of every structured part in Book 9.** Four points
follow.

First, **Explain at 30.4% is the highest of any Book measured** (Book 3's was 19.9%). Book 9 is a
causal-chain topic. The stock stem is "explain how X leads to Y", marked link by link, and it fits the
biology: every outcome here is a mechanism that runs forwards from a pathogen to a consequence.

Second, **Suggest at 23.8% is nearly double Book 3's 12.0%, and it is the defining format finding of
this Book.** Suggest signals there is no recall answer available. In Book 9 that means an unfamiliar
pathogen, an unfamiliar antibody, an unfamiliar vaccine, an unfamiliar antibiotic or an unfamiliar
epidemiological scenario. **Nearly a quarter of the structured parts in this topic cannot be answered
from memory of the notes.** The mechanism has to be transferable. Any drill set built from the school's
named examples alone will train the wrong skill.

Third, **"with reference to" at 15.8% is higher than Book 3's 13.3%**, and it is a constraint rather
than a command word: the answer must quote the figure. The corpus records the instruction in a school
examiner's own words: *"Students should make it a point to quote data in their answers as long as
graphs/figures/tables with numerical data are presented to them, **even if the question did not
explicitly direct them to do so**."* `[SCHOOL]`

Fourth, **Calculate is almost absent at 0.9%**, which confirms the qualitative subject default. The two
quantitative overrides in the front matter are narrow: R0 threshold arithmetic, and rate or percentage-
change arithmetic off an epidemiological figure. The corpus does carry the second kind, including an
MDR-TB question asking for "the mean percentage decrease per year in the number of cases".

### Content archetypes

Each question classified into exactly one primary archetype by first matching rule.

| Archetype | Full corpus (n=901) | What it demands |
|---|---|---|
| **Mechanism explain-chain** | **35.0%** | Cause to effect, one mark per link, run forwards. The largest archetype by a wide margin. |
| Unclassified | 23.6% | Mostly short completions, one-line identifications and table-fills. |
| **Data / figure interpretation** | **22.3%** | Describe the trend with figures quoted, then account for it. |
| Recall / state / define / describe | 7.0% | Genuinely present. Definitions of R0, of herd immunity, of the immunity types. |
| **Compare / distinguish** | **5.4%** | Both sides on one axis, point for point. Twice Book 3's share. |
| Evaluate / discuss | 4.4% | Concentrated in vaccination. Twice Book 3's share. |
| Calculation | 1.4% | |
| Predict / apply to novel case | 0.8% | |

**Mechanism chain plus data interpretation is 57% of the Book.** Those two archetypes should carry
about six of every ten drill questions, with compare and evaluate together taking about one in ten,
which is roughly double their weight in Book 3.

### Archetype by concept (full corpus)

| Concept | n | Dominant | Second | Third |
|---|---|---|---|---|
| Bacterial disease: TB and antibiotics | 255 | **Mechanism chain 43.1%** | Unclassified 22.7% | Data/figure 18.0% |
| Vaccination, herd immunity, benefits and risks | 174 | **Mechanism chain 30.5%** | Data/figure 27.0% | Unclassified 22.4% |
| B and T lymphocytes, APCs, primary and secondary | 143 | **Mechanism chain 35.7%** | Data/figure 27.3% | Unclassified 23.1% |
| Antibody structure, function and diversity | 128 | **Mechanism chain 32.8%** | Unclassified 25.8% | Data/figure 22.7% |
| R₀, transmission and outbreak epidemiology | 106 | **Data/figure 26.4%** | Unclassified 22.6% | Mechanism chain 17.0% |
| Innate and adaptive immunity, four types | 48 | **Mechanism chain 33.3%** | Unclassified 29.2% | Data/figure 16.7% |
| Viral disease: influenza, HIV and dengue | 47 | **Mechanism chain 53.2%** | Unclassified 25.5% | Recall 10.6% |

**Five concept-level facts worth acting on.**

1. **The bacterial half is the biggest by a distance.** 255 records, 28.3% of the whole topic, against
   47 for viral disease. That is a five-to-one imbalance between LO (h) plus (i) and LO (g), and it is
   not what the outcome count suggests. TB and antibiotics carry more corpus weight than the entire
   viral disease outcome.
2. **Viral disease is the most mechanism-dominated concept anywhere in Book 9**, at 53.2%. Over half of
   every influenza and HIV question is a forward causal chain, and only 8.5% are figure-led. Prose
   mechanisms, drilled to reproduce cold.
3. **Epidemiology is the one data-first concept**, at 26.4% data-led against 17.0% mechanism, and the
   highest figure-led share in the Book. This is where R0 lives, and it means the R0 gap in the notes is
   not just a definition gap, it is a data-reading gap.
4. **Vaccination carries the highest evaluate share**, which is LO (f) doing what its command word
   says. "Discuss the benefits and risks" is an outcome, not an add-on.
5. **Innate immunity is the smallest concept at 48 records**, 5.3% of the corpus. It is load-bearing as
   scaffolding for TB and for the innate-versus-adaptive comparison, and it is thin as a question source
   in its own right.

### Essay presence, and the same tension every Book has had

Counting distinct question parts worth 10 marks or more:

- **21 essay-scale stems in the Book 9 corpus.**
- Split: antibody structure and diversity 7, bacterial disease and antibiotics 5, lymphocytes and the
  responses 4, vaccination 4, epidemiology 1.
- Distributed across prelim years 2014 to 2025 with no quiet period. `[SCHOOL]`

Recurring stems, verbatim, that show the shapes the examiner likes:

- "Describe the structure of an antibody and explain how the vast diversity of antibodies is generated
  in B lymphocytes." [12] ASRJC Prelim 2022 P3 Q4b
- "Among all nucleated body cells, only B and T lymphocytes lose DNA during their development and
  maturation. Describe the processes where DNA is lost during the development of B lymphocytes before
  and after exposure to antigens and discuss the significance..." [15] HCI Prelim 2021 P3 Q5a
- "Explain how antibiotics and vaccines work in managing diseases." [15] ASRJC Prelim 2023 P3 Q5a, with
  its paired part "Discuss, with examples, why antibiotics and vaccines may have limited effect in
  managing diseases." [10]
- "Outline how antibody diversity is achieved and the ways viruses avoid detection from the hosts'
  immune system." [10] RVHS Prelim 2023 P3 Q5b
- "Describe how the structure of an antibody is related to its function and explain the significance of
  cell signalling in the immune response." [10] RVHS Prelim 2022 P3 Q5b
- "Using a named example, describe how a bacterium can cause human disease and discuss how penicillin
  can eliminate gram-negative bacteria." [15] RVHS Prelim 2021 P3 Q6a
- "Explain how features of biological membranes facilitate immune response in humans." [10] RVHS Prelim
  2021 P3 Q6b
- "Using a named disease, discuss how vaccination is an effective measure to control the disease." [11]
  TJC Prelim 2017 P3 Q4b
- "Discuss the effectiveness of a live, attenuated vaccine against an RNA virus." [13] VJC Prelim 2017
  P3 Q4a
- "'Without genetic variations, antibody is completely useless in the immune system.' Discuss the
  validity of this statement." [15] MI Prelim 2018 P3 Q3b
- "Describe the roles of named proteins in the activation of the humoral..." [15] VJC Prelim 2024 P3 Q5a

**The pattern, and it is different again from Books 2 and 3.** Book 2 essays were property-led; Book 3
essays were bridge-led between two of its own chapters. **Book 9 essays are bridge-led out of the Book
entirely.** Look at what the eleven stems above pair Infectious Diseases with: cell signalling,
biological membranes, transport processes, DNA and gene expression, viruses, genetic variation, protein
structure, disease causation generally. Almost none is a within-Book comparison. The preparation is
therefore five rehearsed bridges:

1. **Antibody structure to protein structure**, which reaches back to Book 1's proteins outcome.
   Quaternary structure, specificity through 3D shape, complementarity. The specimen's own P2 Q9(b) is
   filed in the bank as "(also: Proteins)".
2. **Antibody diversity to DNA and gene expression**, which reaches back to Book 2. Somatic
   recombination as a DNA-level change, and the reason it is not alternative splicing.
3. **Immune cell communication to cell signalling**, which reaches back to Book 3's LOs 3(m) to 3(o).
   Cytokines as ligands, receptors, transduction.
4. **Pathogen to host response**, within the Book: how a named virus or bacterium causes disease and
   how each arm of immunity answers it.
5. **Treatment and prevention weighed**, which is antibiotics plus vaccines plus their limits, and it
   is the shape ASRJC used twice in one paper.

**The honest tension.** The corpus files 21 essay-scale Book 9 stems and 39.4% of its records come from
Paper 3. The official specimen gave Extension Topic A no essay at all and only 3 marks on Paper 3.
Both are true. The specimen is one paper. Do not conclude Book 9 essays are dead, and do not conclude
one is guaranteed.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers
> in the corpus arrive without one. Every marking claim below is `[SCHOOL]`, distilled from JC prelim
> schemes reproduced verbatim in the question bank. They are expected to be broadly representative of
> Cambridge house style, not identical to it. Quoted reject and accept lines are verbatim from those
> schemes.

**1. It is the B cell that undergoes class switching, not the antibody, and schemes say so explicitly.**
From a marker's note: *"it is the cell that undergoes class switching, not the antibody; the gene coding
for the constant region in B lymphocytes is excised / modified. 'Alternate splicing' is wrong since that
occurs in mRNA."* A second examiner note flags the same error in a different question: *"the variation
is not due to alternative splicing but somatic recombination"*. And a third records the failure at
scale: *"A few described class switching as the process that the antibody/immunoglobulin undergoes,
instead of the B cell."* `[SCHOOL]` Write the **cell** as the subject of every diversity verb.

**2. Naming the wrong diversity mechanism scores zero, and the scheme is blunt about it.** From an
examiner's report reproduced in the bank: *"Many discussed somatic recombination and/or somatic
hypermutation, which were irrelevant"* in a class-switching question, and the bank's own summary of the
trap: *"recombination and hypermutation earn nothing in a class-switching question."* A separate reject
line reads *"R: somatic recombination / hypermutation"*. `[SCHOOL]` This is the same discipline
Specimen P3 Q3(c) demands with "Name precisely". `[OFFICIAL]`

**3. Class switching does not change the variable region, and answers that say it does are rejected.**
Explicit reject: *"Reject: class switching as it does not affect the variable regions"*. `[SCHOOL]` The
paired positive is that class switching changes effector function while antigen specificity is retained.

**4. An antibody has an antigen-binding site, never an active site, and a receptor is not an enzyme.**
From a marker's note: *"'antigen-binding site' is the key terminology; generic references to binding
site were not acceptable, and 'active site' in the antibody is wrong."* Two separate schemes carry the
bare line *"R: active site"*, and one adds *"Reject: if the antibody is described as an enzyme"*.
`[SCHOOL]` This is the same reject the Book 3 corpus carries for signalling receptors, so it is a
cross-Book discipline: **binding site for a receptor or antibody, active site only for an enzyme.**

**5. Antibody-antigen binding is non-covalent, and naming disulfide bonds is rejected.** *"R: formation
of disulfide bonds as covalent bonds never occur between antigens and naturally produced antibodies."*
`[SCHOOL]` Disulfide bonds hold the four chains of the antibody together; they do not hold antigen to
antibody. The forces there are hydrogen bonds, ionic interactions, hydrophobic interactions and van der
Waals forces, which chapter 9.4 printed page 73 lists correctly.

**6. Structure-function questions need both halves stated, and structure alone is rejected.** From an
examiner's comment: *"students are reminded to write both structure and function. [Reject: different
combinations of heavy and light chains allow binding to different antigens on pathogens — this addresses
why a huge variety of pathogens can be recognised.]"* `[SCHOOL]` That reject is instructive: the
rejected answer is a true statement, but it answers a diversity question when a structure-function
question was asked. Also *"Reject: variable region / heavy chain only"*, where both chains are needed.
This is LO (c)'s own wording, "the **relationship of** the molecular structure ... **to** their
functions".

**7. Memory B cells do not secrete antibody, and this is a named misconception.** From an examiner's
report: *"A common misconception was that memory B cells could directly secrete antibodies, highlighting
that students were not aware that memory B cells first needed to undergo differentiation to give plasma
B cells, which in turn would secrete antibodies."* `[SCHOOL]` The chain is memory B cell to activation
to plasma cell to antibody, and skipping the middle step loses a mark.

**8. Secondary-response answers must state the comparison and must name the same antigen.** Two rejects:
*"reject 'rapid' alone because it lacks the idea of comparison with the primary immune response"* and
*"R: subsequent / secondary infection / secondary immune response without specifying 'same antigen'."*
`[SCHOOL]` So the mark-bearing form is: on a **subsequent exposure to the same antigen**, the response
is **faster and larger than the primary response**.

**9. Vaccines do not produce antibodies, and vaccines, antibodies and antibiotics are three different
things.** Explicit reject: *"Reject: vaccines produce antibodies"*. And an examiner's comment reduced to
five characters: *"Vaccines ≠ Antibodies ≠ Antibiotics."* `[SCHOOL]` A vaccine contains **antigens**
that stimulate the body to produce its own antibodies and memory cells. Specimen P2 Q9(a) tests exactly
this boundary, asking for a named example of an antibody and of an antibiotic. `[OFFICIAL]`

**10. Herd immunity must be defined by the mechanism, not asserted, and it does not apply below a
threshold.** One scheme gives the required form: *"herd immunity is conferred as the vaccination of a
significant portion of a population provides a measure of protection for individuals..."*, and rejects
answers that merely cite antibodies from the preamble. Another rejects herd immunity as the explanation
in a dengue question *"since the proportion of the population who get dengue is less than 1%"*.
`[SCHOOL]` The second reject is the sharper one: herd immunity is a claim about the **proportion
immune**, and it cannot be invoked where that proportion is low.

**11. Inequitable access is not a risk of vaccination.** *"R: Ref. to inequality / lack of access to
vaccines since these are not risks of taking vaccines, rather, challenges to vaccinating."* A second
scheme *"rejects lack of access to vaccines as a risk, on the grounds that inequitable access is a
challenge to a vaccination programme rather than a risk of taking one."* And a third records the error
list for an LO (f) question: *"Common errors included (MP1) vague 'protection against the pathogen'
without explanation or impact; (MP4) citing production costs as a risk; (MP7) mentioning 'side effects'
without specifying them."* `[SCHOOL]` **A risk is something that can happen to the vaccinated
individual.** Cost, access and logistics are programme constraints.

**12. Penicillin is a competitive inhibitor of transpeptidase, and the enzyme must be named correctly.**
A scheme's positive line: *"Penicillin is an (irreversible) competitive inhibitor of the bacterial enzyme
transpeptidase; cross-links between peptid[oglycan chains fail to form]"*, with *"Reject: peptidyl
transferase"*. `[SCHOOL]` Peptidyl transferase is the ribosomal activity chloramphenicol blocks, which
is a different mode of action in the same outcome. Note also that the school's own Fig. 6.26 caption
names "glycoprotein peptidases", which is a third wrong name. Write **transpeptidase**.

**13. Antibiotic selectivity answers must name the specific target, and vague mechanism claims are
rejected.** *"Reject: hijacks host enzymes due to bacteria being alive with its own enzymes / host
eukaryotic ribosomes due to host using 80S ribosomes"*, *"Reject: antibiotics prevent infection"*,
*"Reject: vague mention of cell machinery or virus is non-cellular"* with *"Note: must state specific
organelles."* `[SCHOOL]` The 70S against 80S ribosome distinction has to be **stated**, not implied.

**14. TB answers must be rigorous about the phagosome, and MTB is a bacterium.** From an examiner
comment: *"many responses lack rigour (e.g. 'prevent fusion of lysosomes', 'hide in host cells',
'macrophages rupture'). Some candidates erroneously referred to MTB as a virus and described the
integration of its genome into the host cell genome."* `[SCHOOL]` The rigorous form names the
compartment: *M. tuberculosis* prevents fusion of the **phagosome** with **lysosomes**, so no
**phagolysosome** forms, so the hydrolytic enzymes never reach the bacterium, which then survives and
replicates inside the macrophage.

**15. Innate-barrier questions do not accept adaptive answers, and the scheme polices the boundary.**
Marker's note: *"this question is on external non-specific barriers that prevent the bacteria entering
cells in the first place; adaptive immune responses were not accepted."* `[SCHOOL]` Read which line of
defence the stem is asking about before writing.

**16. Species names follow binomial convention and spelling is enforced.** *"Reject abbreviation;
spelling MUST be correct"* and *"[Reject: bacteria] [Accept: italics]"*. `[SCHOOL]` Write
*Mycobacterium tuberculosis* in full and correctly the first time.

**17. Data must be quoted even when the question does not ask.** *"Students should make it a point to
quote data in their answers as long as graphs/figures/tables with numerical data are presented to them,
even if the question did not explicitly direct them to do so."* One scheme adds *"Note: must include
years, number of cases and number of prescriptions per 1000"*, and another rejects *"descriptions that
break down by months"* and *"calculated comparison"* where a trend description was wanted. `[SCHOOL]`
With 15.8% of structured parts opening "with reference to", this is a large amount of mark surface.

**18. Discuss questions need a stand, and an unsupported stand scores nothing.** *"note: students will
only get 2 full marks if they comment that it is NOT supported"*, *"note: if no stand taken = 0m; if
both given = max 1m"*, and *"the question requires justifying the claim, not arguing against it."*
`[SCHOOL]` LO (e) and LO (f) both use the command word **discuss**, so this bites on two of the eleven
outcomes.

**19. Command-word discipline, as it bites in this Book specifically.** *Describe* wants the ordered
events. *Explain* wants the causal chain with each link separate, and it is 30.4% of structured parts
here. *Outline* implies brevity. *Suggest* signals no recall answer exists and the mechanism must be
transferred, and it is 23.8% of structured parts, the highest measured in any Book. *State* on Specimen
P2 Q9(a) was worth two marks for two named examples, so two words. *Name precisely* on Specimen P3
Q3(c) was worth one mark each for one term with no partial credit. `[OFFICIAL]` glossary meanings,
`[SCHOOL]` marking behaviour.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented distractors.
Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477 specimen, and
the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Studying the bacterial growth curve, MIC and disk diffusion as recall** | Sees four pages of it in chapter 9.6 §6.7 | Hours on lag, exponential, stationary and death phases with **no Extension Topic A outcome**. LO (i) asks only for modes of action. It survives as Paper 4 method, not as content | 9477 syllabus, LO (i) `[OFFICIAL]` |
| **Studying the history of immunisation** | Reads chapter 9.7 §7.1.1 as content | Variolation, Jenner's dates, Pasteur, the 3000BC to 1920s timeline. The school marks the whole section **(FYI)**, and the section also contains a real factual error about which virus causes smallpox | school notes 9.7, digest 9.7 §5.1 `[SCHOOL]` |
| **Studying all six vaccine types** | Treats chapter 9.7 §7.2.1 as a list to learn | Extract, recombinant and DNA vaccines get three lines each, no advantages or disadvantages, no corpus presence and no outcome. Live attenuated, inactivated and toxoid carry the entire LO (f) risk argument | LO (e), (f) `[OFFICIAL]` |
| **Studying the WHO eradication programme operationally** | Reads §7.4 as a case study to memorise | LO (e) is "**limited to**" two clauses. The eradicability properties survive; the 1966 to 1980 programme timeline, the Somalia date and the Birmingham laboratory accident do not | LO (e) `[OFFICIAL]` |
| **Studying antibiotic resistance mechanisms** | Sees the WHO resistance links in chapter 9.6's front matter | Extension Topic A has **no resistance outcome** and chapter 9.6 correspondingly has no resistance section. Resistance arises and spreads under Core Idea 2 LO (g), which is Book 4. β-lactamase stays, because it is part of penicillin's mode of action | 9477 syllabus `[OFFICIAL]` |
| **Studying immune pathology** | Reads chapter 9.1 §1.3 and chapter 9.3 §3.5 | Autoimmunity, allergy, hypersensitivity, immunodeficiency classification. **Zero** outcome coverage. Type 1 diabetes appears as the autoimmunity example and "diabetes" returns zero syllabus hits | 9477 syllabus `[OFFICIAL]` |
| **Studying lymphatic anatomy** | Reads chapter 9.3 §3.3 as content | Adenoids, tonsils, Peyer's patches, the thoracic duct, the subclavian vein. One line matters: B cells mature in bone marrow, T cells in the thymus | 9477 syllabus `[OFFICIAL]` |
| **Studying vaccine ethics and hesitancy** | Assumes "benefits and risks" opens an ethical debate | LO (f) asks for a scientific and public-health weighing. The corpus rejects access and cost as risks. **There is no bioethics outcome in Extension Topic A**, and bioethics is dropped from all Bio material by instruction | LO (f) `[OFFICIAL]` |
| **Studying the V(D)J segment counts and TdT** | Works through chapter 9.4 §4.5.1's arithmetic | LO (d) names three mechanisms and none of them is junctional diversity. RAG-1, RAG-2, TdT and the segment counts have no outcome. Know that joining is imprecise and adds diversity | LO (d) `[OFFICIAL]` |
| **Skipping R0 and the epidemiology terms because the notes have none** | Assumes the Book is the syllabus | **Specimen Paper 1 Q30 is an R0 question.** LOs (j) and (k) are 2 of 11 outcomes and cost about 30 minutes to learn | 9477 Specimen `[OFFICIAL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **Antibody said to have an active site** | Treats an antibody as an enzyme | *"R: active site"* twice, plus *"Reject: if the antibody is described as an enzyme"*. The required phrase is **antigen-binding site**, and even "binding site" alone was not accepted | antibody schemes `[SCHOOL]` |
| **Class switching said to happen to the antibody** | Makes the molecule the subject | *"it is the cell that undergoes class switching, not the antibody"*. The B cell's constant-region gene is excised | marker's note `[SCHOOL]` |
| **Antibody diversity attributed to alternative splicing** | Reaches for the Book 2 mechanism | *"'Alternate splicing' is wrong since that occurs in mRNA"* and *"the variation is not due to alternative splicing but somatic recombination"*. Somatic recombination is a **DNA** rearrangement | two examiner notes `[SCHOOL]` |
| **The wrong one of the three diversity mechanisms named** | Treats them as interchangeable | *"recombination and hypermutation earn nothing in a class-switching question"*. **Specimen P3 Q3(c) says "Name precisely"** and awards one mark each with no partial credit | 9477 Specimen `[OFFICIAL]`, schemes `[SCHOOL]` |
| **Somatic hypermutation attributed to the plasma cell** | Copies chapter 9.4 pp.71 and 73 | The school says it twice and contradicts itself in its own definition box. **Specimen P3 Q3(c)(iii) says "activated B lymphocytes"** | school notes 9.4 error, digest 9.4 §5.1 `[OFFICIAL]` |
| **Class switching said to change specificity** | Confuses the two secondary mechanisms | *"Reject: class switching as it does not affect the variable regions"*. Switching changes effector function; hypermutation changes affinity within one specificity | class switching scheme `[SCHOOL]` |
| **Memory B cells said to secrete antibody** | Skips the differentiation step | Named misconception in an examiner's report. Memory B cell activates, differentiates into a plasma cell, and the plasma cell secretes | examiner report `[SCHOOL]` |
| **Clonal selection described as the mitosis** | Copies chapter 9.3 p.34 over pp.38 and 40 | Selection is the antigen picking the **pre-existing** clone; expansion is the proliferation. The school defines selection two incompatible ways six pages apart | school notes 9.3 error, digest 9.3 §5.1 `[INFERRED]` |
| **Cytotoxic T cells said to kill with hydrogen peroxide** | Copies chapter 9.3 p.35 over p.49 | Hydrogen peroxide is a phagocyte lysosomal agent. Cytotoxic T cells release **perforin and granzymes** and the target dies by **apoptosis** | school notes 9.3 error, digest 9.3 §5.2 `[INFERRED]` |
| **"Rapid" given for the secondary response without the comparison** | Answers the adjective, not the question | *"reject 'rapid' alone because it lacks the idea of comparison with the primary immune response"* | secondary response scheme `[SCHOOL]` |
| **Secondary response described without "the same antigen"** | Omits the specificity clause | *"R: subsequent / secondary infection / secondary immune response without specifying 'same antigen'"* | scheme `[SCHOOL]` |
| **A cell in a lineage diagram misidentified by name recognition** | Reads the label, not the features | **9477 Specimen P1 Q29** builds every distractor from one cell type out of place. Q must be the B lymphocyte because it carries membrane antibody and divides; S must be the plasma cell because free antibody surrounds it | 9477 Specimen `[OFFICIAL]` |
| **Vaccines said to produce or contain antibodies** | Confuses vaccine with antiserum | *"Reject: vaccines produce antibodies"*, and *"Vaccines ≠ Antibodies ≠ Antibiotics"*. A vaccine contains **antigens** | vaccination schemes `[SCHOOL]` |
| **Natural active immunity described as vaccination** | Copies chapter 9.7 p.119's mis-filled table | The natural column's cell reads "Receive vaccination to stimulate memory cells production", which is the artificial column's content. Natural active immunity comes from **infection** | school notes 9.7 error, digest 9.7 §5.4 `[SCHOOL]` |
| **Smallpox attributed to vaccinia and cowpox to variola** | Copies chapter 9.7 p.118 over p.126 | **Variola causes smallpox; vaccinia is the cowpox and vaccine virus.** LO (e) names smallpox eradication explicitly | school notes 9.7 error, digest 9.7 §5.1 `[INFERRED]` |
| **Access, cost or logistics offered as a risk of vaccination** | Answers the programme, not the individual | *"these are not risks of taking vaccines, rather, challenges to vaccinating"* and *"citing production costs as a risk"* listed as a common error | LO (f) schemes `[SCHOOL]` |
| **Herd immunity invoked where few are immune** | Uses the phrase as a general explanation | *"reject herd immunity, since the proportion of the population who get dengue is less than 1%"* | dengue scheme `[SCHOOL]` |
| **Penicillin said to block peptidyl transferase, or "glycoprotein peptidases"** | Reaches for the nearest enzyme name, or copies Fig. 6.26 | *"Reject: peptidyl transferase"*. The target is **transpeptidase**. Peptidyl transferase is chloramphenicol's target | scheme `[SCHOOL]`, school notes 9.6 error |
| **Antibiotic selectivity asserted without naming the target** | Says bacteria have different machinery and stops | *"Reject: hijacks host enzymes"*, *"Reject: vague mention of cell machinery"*, *"must state specific organelles"*. Name 70S against 80S, or peptidoglycan, which eukaryotes lack | schemes `[SCHOOL]` |
| **TB evasion described vaguely** | Writes "prevents fusion of lysosomes" or "hides in host cells" | Named as lacking rigour in an examiner comment, alongside candidates calling MTB a virus with genome integration | examiner comment `[SCHOOL]` |
| **Adaptive answers given to an innate-barrier question** | Answers the topic, not the stem | *"adaptive immune responses were not accepted"* on a first-line-of-defence question | marker's note `[SCHOOL]` |
| **Disulfide bonds named for antigen-antibody binding** | Confuses inter-chain bonding with antigen binding | *"R: formation of disulfide bonds as covalent bonds never occur between antigens and naturally produced antibodies"* | scheme `[SCHOOL]` |
| **R0 raised by more travel between already-endemic countries** | Treats any movement as raising transmission | **9477 Specimen P1 Q30** distractor B. Where the disease is already established the population is already exposed, so extra travel does not raise R0 | 9477 Specimen `[OFFICIAL]` |
| **R0 raised by higher incidence in a population with frequent outbreaks** | Confuses incidence with transmissibility | **Specimen P1 Q30** distractor D. A population with frequent outbreaks already has high immunity, which lowers the effective reproduction number | 9477 Specimen `[OFFICIAL]` |
| **Structure given without function, or one chain only** | Answers half of LO (c) | *"students are reminded to write both structure and function"*, and *"Reject: variable region / heavy chain only"* | examiner comment `[SCHOOL]` |
| **Data answer given without quoting the data** | Describes the trend in words only | *"quote data ... even if the question did not explicitly direct them to do so"*, and 15.8% of structured parts open "with reference to" | multiple schemes `[SCHOOL]` |
| **Discuss answered without a stand** | Lists both sides and stops | *"if no stand taken = 0m; if both given = max 1m"*. LOs (e) and (f) both use **discuss** | scheme `[SCHOOL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-syllabus, on the 28-page PDF at
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the
outcome that carries it is quoted. Where it does not, the ruling is given.

**Immunology is the easiest area in the syllabus to over-teach, and this audit is the reason why.**
Thirty-two of the forty-four terms searched return **zero hits**, and the school teaches every one of
them. But a zero hit count kills the **word**, not the **content**, and Extension Topic A's outcomes are
written as broad application statements, so the "broader clause carries it" case is the majority case
here, not the exception. Every zero below was re-checked against spelling variants and against the
surrounding outcome text before a verdict was written.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **innate** | **2** | Content list *"The immune system – adaptive and innate"*; LO (a) *"and the **non-specific (innate)** immune system"* |
| **adaptive** | **2** | Content list; LO (a) *"describe the specific (**adaptive**) immune system"* |
| **immunity** | **3** | LO (a), three times: *"active, passive, naturally acquired and artificially acquired **immunity**"* |
| **antigen-presenting** | **1** | LO (b) *"the roles of B lymphocytes, T lymphocytes, **antigen-presenting cells** and memory cells"*. Zero for the unhyphenated "antigen presenting" |
| **B lymphocyte** | **1** | LO (b), as above. Zero for "B cell" |
| **T lymphocyte** | **1** | LO (b), as above. Zero for "T cell" as a standalone; "helper T cells" appears once in LO (g) |
| **memory cell** | **1** | LO (b), as above |
| **secondary immune** | **1** | LO (b) *"in specific **primary and secondary immune responses**"*. Zero for "primary response" or "secondary response" as standalone phrases |
| **antibodies** | **1** | LO (c) *"the molecular structure of **antibodies** to their functions"*. Zero for the singular "antibody" alone; "antibody molecules" appears once in LO (d) |
| **immunoglobulin** | **1** | LO (c) *"using **immunoglobulin G**, IgG, as an example"* |
| **IgG** | **2** | LO (c), in both the spelled-out and abbreviated forms |
| **somatic recombination** | **1** | LO (d) *"explain how **somatic recombination**, hyper-mutation and class switching result in millions of different antibody molecules"* |
| **hyper-mutation** | **1** | LO (d), as above. **Zero for the unhyphenated "hypermutation", which is the spelling the school and every textbook use.** See the note below |
| **class switching** | **1** | LO (d), as above. Zero for "isotype" or "isotype switching" |
| **vaccination** | **5** | Content list; LO (e) three times; LO (f) *"discuss the benefits and risks of **vaccination**"*. **Zero for "vaccine" as a standalone word** |
| **smallpox** | **1** | LO (e) *"(including the eradication of **smallpox**)"*. Zero for the school's two-word "small pox" |
| **influenza** | **4** | Core Idea 2 LO (e)ii *"enveloped viruses, including **influenza**"*; LO (g) twice; LO (k) *"such as **influenza**"* |
| **HIV** | **3** | Core Idea 2 LO (e)iii *"retroviruses, including **HIV**"*; LO (g) twice, including *"(including **HIV** and helper T cells...)"* |
| **helper T** | **1** | LO (g) *"(including HIV and **helper T cells**, influenza virus and epithelial cells of the respiratory tract)"* |
| **tuberculosis** | **1** | LO (h) *"using **Mycobacterium tuberculosis** as an example"* |
| **antibiotic** | **2** | Content list *"Vaccination and modes of action of **antibiotics**"*; LO (i) *"describe the modes of action of **antibiotics**, including penicillin, on bacteria"* |
| **penicillin** | **1** | LO (i), as above |
| **peptidoglycan** | **1** | Not in Extension Topic A. Core Idea 1's prokaryotic cell structure outcome |
| **cell wall** | **2** | Core Idea 1 only. Not in Extension Topic A |
| **R0** | **3** | LO (j) twice, in the definition and the application clause. **Plus a third hit outside Extension Topic A, in MATHEMATICAL REQUIREMENTS (p.25), where the syllabus spells it "Ro" with a letter o and lists it as a mathematical tool.** See the en-dash note below |
| **basic reproduction number** | **1** | LO (j) *"explain the meaning of the **basic reproduction number**, R0, as an indicator of the transmissibility (contagiousness) of infectious agents"* |
| **Ro** (letter o) | **1** | MATHEMATICAL REQUIREMENTS, p.25: *"Candidates should be aware of the problems of drawing conclusions from limited data and should appreciate levels of significance, standard deviation and probability, and **the use of Ro value**, Hardy–Weinberg equation (p2 + 2pq + q2 = 1), t- and chi-squared tests."* |
| **outbreak** | **2** | LO (j) *"predict the progress of a disease **outbreak**"*; LO (k) *"outline the terms (i) **outbreak**..."* |
| **epidemic** | **1** | LO (k) *"(ii) **epidemic**"* |
| **pandemic** | **1** | LO (k) *"(iii) **pandemic**"* |
| **phagocytosis** | **0** | Nowhere. Also zero for "phagocyte" |
| **macrophage** | **0** | Nowhere |
| **neutrophil** | **0** | Nowhere |
| **inflammation** | **0** | Nowhere. Also zero for "inflammatory" |
| **interferon** | **0** | Nowhere |
| **complement** | **0** | Nowhere |
| **natural killer** | **0** | Nowhere. Also zero for "NK cell" |
| **antigen** (standalone) | **0** | Only inside "antigen-presenting cells" (LO b) and "antigenic shift/drift" (Core Idea 2 LO f) |
| **epitope** | **0** | Nowhere |
| **plasma cell** | **0** | Nowhere |
| **cytotoxic T** | **0** | Nowhere. "Helper T" appears once, in LO (g) |
| **clonal selection** | **0** | Nowhere. Also zero for "clonal expansion" |
| **MHC** | **0** | Nowhere. **Also zero for "major histocompatibility", "major histocompatibility complex" and "histocompatibility"** |
| **herd immunity** | **0** | Nowhere as a phrase. Also zero for "herd" alone and for the hyphenated form |
| **attenuated** | **0** | Nowhere. Also zero for "live attenuated", "toxoid" and "inactivated" |
| **resistance** | **0** | Nowhere in any immunological or microbiological sense. The stem *resistan-* returns **one** hit in the whole document, in the Paper 4 apparatus list: *"test-tubes (some of which should be heat **resistant**)"*. Also zero for "antibiotic resistance" and "drug resistance" in every dash and space variant |
| **cholera** | **0** | Nowhere |
| **AIDS** | **0** | Nowhere. HIV appears three times, AIDS never |
| **toxin** | **0** | Nowhere. Also zero for "exotoxin" and "endotoxin" |
| **opsonisation / opsonization** | **0** | Nowhere, in either spelling |
| **agglutination** | **0** | Nowhere |
| **cytokine** | **0** | Nowhere |
| **lysosome** | **0** | 1 hit, in Core Idea 1's organelle outcome. Not in Extension Topic A |
| **monoclonal** | **0** | Nowhere |
| **self / non-self** | **0** | Nowhere |

### The variant sweep, and the two things it flipped

**Every zero above was re-run across four forms before a verdict was written: en dash (–, U+2013),
hyphen, space and closed.** The syllabus genuinely uses en dashes in compound and eponymous terms, which
is verified: *Hardy–Weinberg*, *Singapore–Cambridge*, *ligand–receptor*, *enzyme–substrate* and the
Content bullet *"The immune system – adaptive and innate"* all carry en dashes, and a hyphen-only search
returns zero for every one of them. The search was also run on whitespace-normalised text, because
PDF line wrapping splits phrases: **"artificially acquired" returns zero on the raw extraction and one
hit once the line break is closed up**, since the wrap falls between the two words inside LO (a).

**Two findings flipped. One is substantive.**

**1. R0 appears three times, not twice, and the third hit changes its classification.** `[OFFICIAL]`
Searching the numeral form **R0** returns two hits, both in LO (j). Searching the letter form **Ro**
returns a third, in the syllabus's **MATHEMATICAL REQUIREMENTS** section on p.25:

> Candidates should be aware of the problems of drawing conclusions from limited data and should
> appreciate levels of significance, standard deviation and probability, and **the use of Ro value**,
> Hardy–Weinberg equation (p2 + 2pq + q2 = 1), t- and chi-squared tests.

**This puts R0 in the same sentence as standard deviation, the Hardy–Weinberg equation, the t-test and
the chi-squared test.** Three consequences, and all three raise the priority of the LO (j) gap.

- **The quantitative type override on the R0 sub-strand is `[OFFICIAL]`, not inferred.** The syllabus
  lists R0 among the mathematical tools candidates are expected to **use**, not merely to define. The
  front matter has been corrected accordingly.
- **A numerical or threshold-reasoning question on R0 is more plausible than LO (j)'s wording alone
  suggests.** LO (j) says "explain the meaning" and "predict the progress", which reads qualitative. The
  mathematical requirements entry says "the use of Ro value", which does not.
- **This is the only Extension Topic A term that appears anywhere outside its own outcome block.** Every
  other Book 9 term sits inside LOs (a) to (k) and nowhere else. R0 has a second home in the assessment
  requirements, which is the strongest available signal that it is not a throwaway definition.

**2. "resistance" is not a clean zero, but the verdict stands.** The stem *resistan-* returns one hit in
the whole document, in the Paper 4 apparatus list: *"test-tubes (some of which should be heat
**resistant**)"*. There is no antibiotic-resistance or drug-resistance hit in any dash or space variant.
The List 1 ruling is unchanged, and the wording has been tightened.

**Nothing else flipped.** Specifically checked and confirmed genuinely absent in all four forms: natural
killer, cytotoxic T, plasma cell, clonal selection, clonal expansion, herd immunity, MHC and major
histocompatibility, phagocytosis, macrophage, neutrophil, dendritic, inflammation, interferon,
complement, cytokine, epitope, antigenic determinant, isotype, self and non-self, attenuated, toxoid,
opsonisation, agglutination, neutralisation, exotoxin, endotoxin, toxin, AIDS, immunodeficiency,
beta-lactam in both Latin and Greek forms, transpeptidase, phagosome, phagolysosome, monoclonal,
affinity maturation, germinal centre, cholera, mast cell, leukocyte in both spellings, active immunity
and passive immunity as phrases, and IgM, IgA, IgD and IgE as whole words. **IgG is the only
immunoglobulin class the syllabus names**, which strengthens LO (c)'s "using immunoglobulin G, IgG, as
an example" rather than weakening it.

**One nuance the raw counts hide, and it is the trap of this whole audit.** *hyper-mutation* returns one
hit **only because the syllabus hyphenates it.** Search "hypermutation" unhyphenated, which is how the
school notes, every textbook and every mark scheme in the corpus spell it, and you get **zero**. The
spaced form "hyper mutation" and the en-dash form "hyper–mutation" also return zero. That zero would
kill a named outcome. This is the same class of catch as *crossing-over* in Book 3 and *Hardy–Weinberg*
in Book 7.

**The same discipline applied to MHC changes nothing and confirms the finding.** MHC, major
histocompatibility, major histocompatibility complex and histocompatibility all return zero in every
dash and space variant. The word is genuinely absent from the syllabus. But LO (b) requires "the roles
of ... antigen-presenting cells", and an antigen-presenting cell is defined by the fact that it displays
antigen **on MHC**. The biology survives; the acronym is not guaranteed to be handed to you.

### The two lists

**LIST 1: GENUINELY GONE.** No outcome carries this, in any wording, and no broader clause reaches it.
Cut it.

1. **Antibiotic resistance mechanisms.** "Antibiotic resistance" and "drug resistance" return zero in
   every dash and space variant, and the only *resistan-* hit in the whole document is "heat resistant"
   in the Paper 4 apparatus list. Nothing in Extension Topic A reaches it. It belongs to Core Idea 2 LO (g) as a consequence of transformation,
   transduction and conjugation, which is Book 4. β-lactamase survives here only as part of penicillin's
   mode of action under LO (i).
2. **Autoimmunity, allergy, hypersensitivity and immunodeficiency classification.** No outcome. The
   pathology framework in chapter 9.1 §1.3 and chapter 9.3 §3.5 has no anchor. HIV-caused
   immunodeficiency survives, but only through LO (g), which is about HIV specifically.
3. **The bacterial growth curve, MIC and the disk-diffusion test as recall content.** LO (i) asks for
   modes of action. Nothing names growth phases, MIC or zones of inhibition. **Survives as Paper 4
   method only.** See "the practical caveat" below.
4. **Lymphatic system anatomy.** Spleen, tonsils, adenoids, Peyer's patches, thoracic duct. No outcome.
   Bone marrow and thymus survive as the sites where B and T cells mature, which LO (b) needs by
   implication.
5. **The history of immunisation.** Variolation, Jenner's dates, Pasteur, the 3000BC timeline. The
   school marks it (FYI) and no outcome reaches it. The smallpox **eradication** survives, because LO (e)
   names it.
6. **Extract, recombinant and DNA vaccines.** LO (e) is limited to two clauses and LO (f) asks for
   benefits and risks. Three vaccine types with no stated advantages, no disadvantages and no corpus
   presence have nothing to attach to. Live attenuated, inactivated and toxoid survive because they
   carry the LO (f) argument.
7. **RAG-1, RAG-2, TdT, V(D)J segment counts and junctional diversity by name.** LO (d) names three
   mechanisms and junctional diversity is not one. Combinatorial and junctional diversity survive as
   *reasons why* somatic recombination generates millions, which is LO (d)'s own clause, but not as
   named mechanisms in their own right.
8. **Blood counts, normal ranges and the formed elements table.** Chapter 9.1 Tables 1.1 and 1.2. No
   outcome. Stem material only.
9. **Vaccine ethics, hesitancy and mandate debates.** No outcome, and the corpus explicitly rejects
   access and cost as risks. Dropped under the standing instruction as well.
10. **Immunological tolerance, contraction and homeostasis, specialisation.** Chapter 9.3 §3.6
    characteristics 4, 5 and 6. No outcome reaches them. Specificity, diversity, clonal expansion and
    memory all survive under LOs (a) and (b).

**LIST 2: LOSES THE WORD, KEEPS THE BIOLOGY.** Zero hits as a term, but a broader outcome clause carries
the content. Learn the biology and expect not to be handed the word.

| Term with zero hits | The clause that carries it | What this means in practice |
|---|---|---|
| **phagocytosis, phagocyte, macrophage, neutrophil** | LO (a) *"the non-specific (innate) immune system"*, and LO (b) *"antigen-presenting cells"*, and LO (h) *"modes of ... infection of bacterial pathogens, using Mycobacterium tuberculosis"* | Fully examinable, three times over. The TB outcome is unanswerable without the phagosome-lysosome sequence. Learn the cell names, because the corpus mark schemes demand them even though the syllabus does not print them |
| **inflammation, complement, interferon, natural killer cell, cytokine** | LO (a) *"the non-specific (innate) immune system"* | The whole innate inventory is carried by five words in LO (a). Every one of these is examinable. This is the single clearest "broader clause" case in the audit |
| **antigen, epitope** | LO (b) *"antigen-presenting cells"*, LO (c) *"the molecular structure of antibodies to their functions"* | An antibody's function is antigen binding, so antigen is unavoidable. Epitope is the word for the part bound. The corpus demands **antigen-binding site** as the phrase |
| **plasma cell** | LO (b) *"the roles of B lymphocytes ... in specific primary and secondary immune responses"* | The role of a B lymphocyte **is** to differentiate into a plasma cell. The corpus names "memory B cells secrete antibody directly" as a misconception, which only exists because plasma cells are examinable |
| **cytotoxic T cell** | LO (b) *"the roles of ... T lymphocytes"*, and LO (g) *"disruption of host tissue and functions"* | LO (g) names helper T cells but not cytotoxic T cells. Both are required: chapter 9.5 attributes influenza epithelial damage to cytotoxic T cell killing, and HIV's evasion of cytotoxic T cells is part of its pathogenesis |
| **MHC, major histocompatibility complex** | LO (b) *"antigen-presenting cells"* | An APC is defined by displaying antigen on MHC. The mechanism survives; assume the acronym may need expanding in a stem |
| **clonal selection, clonal expansion** | LO (b) *"in specific primary and secondary immune responses"* | The reason a secondary response is faster is that expansion has already happened once. The mechanism is the outcome; the terms are the corpus's vocabulary and mark schemes use them |
| **herd immunity** | LO (e) *"vaccination of a high enough proportion of the population can break the disease transmission cycle"* | **This is herd immunity, written out longhand in the outcome.** The clause is the definition. The word is worth knowing because the corpus uses it, but the outcome's own phrasing is the safer answer |
| **attenuated** | LO (e) *"vaccination stimulates immunity without causing the disease"*, and LO (f) *"benefits and risks"* | Attenuation is *how* a live vaccine stimulates immunity without causing disease, and reversion to virulence is the named risk. Both halves of two outcomes |
| **opsonisation, agglutination** | LO (c) *"the relationship of the molecular structure of antibodies to their **functions**"* | These are two of the four antibody functions. LO (c) says functions, plural. Fully examinable |
| **toxin, exotoxin, endotoxin** | LO (h) *"modes of ... infection of bacterial pathogens"* | Toxicity is one of the four virulence factor classes and is how many bacteria actually cause disease. Examinable through the infection clause |
| **AIDS** | LO (g) *"explain how viruses, including ... HIV, cause diseases in humans"* | The disease HIV causes is AIDS. The syllabus names the virus and asks for the disease |
| **self and non-self** | LO (a) *"the specific (adaptive) immune system"* | The whole basis of specificity. Corpus questions ask "state what is meant by a non-self antigen" |
| **lysosome** | LO (h), through the *M. tuberculosis* infection mechanism | Zero hits in Extension Topic A, one hit in Core Idea 1. The TB answer requires it by name |
| **cholera** | LO (h) *"bacterial pathogens"* generally | Zero hits. Cholera is a legitimate stem context for a transmission or toxin question but is never a required example. Only *M. tuberculosis* is named |
| **monoclonal antibody** | LO (c), marginally | Zero hits and no clause names it. **Closer to List 1 than List 2**, but Specimen P2 Q9(a) asked for "a named example" of an antibody, and a monoclonal antibody is a defensible answer. Know one; do not build a cluster |

**The practical caveat on the growth curve, MIC and disk diffusion.** These sit in List 1 as **content**
and outside both lists as **method**. Paper 4 assesses Planning (4% of the A-level on its own) and
Analysis, Conclusions and Evaluation. `[OFFICIAL]` The corpus files a DHS 2014 P3 SPA planning task built
entirely on penicillin against *Staphylococcus* and an RVHS 2018 P4 question on combining isoniazid and
rifampicin against drug-resistant TB. `[SCHOOL]` **9477 Specimen Paper 4 contained no microbiology**, so
there is no official evidence either way. Treat this material as October practical-block preparation:
read it once for method, do not drill it as recall, and do not build a content cluster on it.

### The two overlaps, resolved

**Overlap 1: Book 4 owns virus and bacterial genetics; Book 9 owns what the pathogen does to the host.**
`[OFFICIAL]`

| Content | Owning outcome | Book |
|---|---|---|
| Bacteriophage lytic and lysogenic cycles | Core Idea 2 LO (e)i | **Book 4** |
| Reproductive cycle of enveloped viruses, **including influenza** | Core Idea 2 LO (e)ii | **Book 4** |
| Reproductive cycle of retroviruses, **including HIV** | Core Idea 2 LO (e)iii | **Book 4** |
| **Antigenic shift and antigenic drift** | Core Idea 2 LO (f) | **Book 4** |
| Binary fission; transformation, transduction, conjugation | Core Idea 2 LO (g) | **Book 4** |
| Viral and prokaryotic genome structure | Core Idea 2 LO (d) | **Book 4** |
| How influenza and HIV **cause disease through disruption of host tissue and functions** | Extension A LO (g) | **Book 9** |
| **Modes of transmission and infection** of bacterial pathogens | Extension A LO (h) | **Book 9** |
| Modes of action of antibiotics | Extension A LO (i) | **Book 9** |

**The rule in one line: Book 4 owns what the pathogen does to its own genome; Book 9 owns what the
pathogen does to the host.** Replication, genome structure and genetic variation are Book 4. Tissue
damage, loss of function, transmission between hosts and treatment are Book 9.

Three consequences for cluster design. First, **do not re-teach the replication cycles in Cluster 04.**
Chapter 9.5 gives six lines on the generic cycle precisely because Book 4 has done that work; a Book 9
cluster that repeats it duplicates a Book 4 cluster and wastes the session. Assume the cycle and ask
what the cycle **does** to the respiratory epithelium or to the helper T cell population. Second,
**antigenic shift and drift are correctly absent from chapter 9.5** and must not be added back; if
influenza vaccine reformulation comes up, it comes up as a Book 4 answer wearing a Book 9 stem. Third,
**expect crossover questions and drill for them**: Specimen P1 Q11 is a Book 9 stem with a Book 4 answer,
and it is the shape to rehearse.

**Overlap 2: antibody gene rearrangement belongs to Extension Topic A, not to Control of Gene
Expression.** `[OFFICIAL]`

Book 2's question bank files antibody gene rearrangement under Control of Gene Expression. The syllabus
does not. A literal search returns **somatic recombination** once, **hyper-mutation** once and **class
switching** once, and all three hits are in **Extension Topic A LO (d)**. Core Idea 2 LO (i), the control
of gene expression outcome, lists five regulation levels (chromatin, transcriptional,
post-transcriptional, translational, post-translational) and names none of the three. There is no other
outcome in the syllabus that carries them.

**So LO (d) owns antibody diversity outright.** The corpus filing is an artefact of how the bank was
built. The confusion is understandable, because class switching alters which protein a cell makes, which
sounds like regulated expression. It is not: it is irreversible deletion of DNA between switch regions,
and the corpus mark schemes make this exact point when they reject "alternative splicing" and insist
*"'Alternate splicing' is wrong since that occurs in mRNA"*. `[SCHOOL]`

Two actions follow. **Filter Book 2's Control of Gene Expression bank for antibody records and drill them
in Cluster 03 instead.** And treat the confusion itself as a trap, because a scheme reject exists for it.
**Specimen P3 Q3(c) is the proof of ownership**: three marks, one each, for naming the three processes.
`[OFFICIAL]`

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **The three antibody diversity mechanisms, told apart by effect** (LO d). **Specimen P3 Q3(c) tested
   all three, one mark each, with the command "Name precisely".** `[OFFICIAL]` The corpus adds 7
   essay-scale stems on antibody diversity, the most of any node in the Book, plus a documented examiner
   trap that neighbouring mechanisms score nothing. Drill in the direction the specimen ran it: from a
   described effect back to the term. Different antigens recognised, class changed with specificity kept,
   affinity varied within one specificity.

2. **Antibody structure paired to function, with IgG as the example** (LO c). Specimen P2 Q9(b) was five
   marks for exactly this, fused with antibiotics. `[OFFICIAL]` The corpus records the examiner
   instruction *"students are reminded to write both structure and function"* and rejects structure-only
   answers. `[SCHOOL]` Every feature must be paired: variable regions to specificity, two binding sites
   to agglutination, hinge to cross-linking efficiency, Fc to opsonisation and complement, size to
   extracellular action only.

3. **The *M. tuberculosis* infection chain** (LO h). 255 corpus records, 28.3% of the topic, and 43.1%
   of them are mechanism chains, the highest of any concept. `[SCHOOL]` The chain must be reproducible
   cold and rigorously: droplet nuclei inhaled to alveoli, engulfed by alveolar macrophages into a
   phagosome, **fusion with lysosomes prevented so no phagolysosome forms**, hydrolytic enzymes never
   reach the bacterium, survival and replication inside the macrophage, tubercle formation, latency,
   rupture, active and contagious disease. The examiner comment naming vague answers is directly about
   this chain.

4. **Penicillin's mode of action, end to end** (LO i). Named in the outcome, and the corpus carries an
   explicit scheme with the required enzyme name and an explicit reject for the wrong one. `[SCHOOL]`
   Peptidoglycan of alternating NAG and NAM cross-linked by peptide bridges, transpeptidase forms the
   cross-links, penicillin competitively inhibits it, autolysins keep cutting, wall weakens, water enters
   by osmosis down a water potential gradient, the wall cannot resist the pressure, cell lyses.
   Bacteriolytic. Then β-lactamase.

5. **Primary against secondary response, with the reason** (LO b). Specimen P1 Q29 tested the cell
   lineage of a primary response and every distractor was one cell out of place. `[OFFICIAL]` The corpus
   rejects "rapid" without the comparison and rejects "secondary response" without "the same antigen".
   `[SCHOOL]` Drill it as a curve to read as well as a mechanism to state, because the vaccination
   concept is 33.9% figure-led.

6. **Herd immunity as a transmission-cycle argument** (LO e). This is half of LO (e), written out
   longhand in the outcome itself. The corpus rejects it where the immune proportion is low, which means
   the answer has to be quantitative in reasoning even when no number is given. Drill it together with
   R0, because the threshold depends on R0 and that link is the natural exam bridge.

7. **R0 defined and applied** (LO j). **Not taught by the school, and Specimen P1 Q30 asked it.**
   `[OFFICIAL]` This is the highest ratio of exam presence to note coverage anywhere in the corpus. The
   definition, the three regimes (R0 > 1, = 1, < 1), the factors that raise and lower it, and its link to
   the herd immunity threshold. The specimen's own distractors give the two traps to drill: movement into
   a region with no vector does not raise R0, and neither does travel between populations already
   exposed. **Drill the arithmetic as well as the definition**, because the syllabus lists *"the use of
   Ro value"* in MATHEMATICAL REQUIREMENTS alongside the Hardy–Weinberg equation and the statistical
   tests, which is an instruction to compute with it and not only to explain it. `[OFFICIAL]` This is
   the one place in Book 9 where the `quantitative` type override applies with official backing.

8. **Benefits and risks of vaccination, weighed with a stand** (LO f). A whole outcome, and the command
   word is **discuss**. The corpus supplies the reject list: access and cost are not risks, "side effects"
   without specifics scores nothing, and no stand means no marks. `[SCHOOL]` Drill it as a structured
   argument, not a list.

9. **The four types of immunity as a two-by-two grid** (LO a). The most reliably tested part of LO (a) in
   the corpus, usually as a scenario to place. The school's own chapter 9.7 p.119 table gets the natural
   active cell wrong, so drill from chapter 9.4 p.75 instead.

10. **Suggest-format transfer** (all outcomes). At 23.8% of structured parts, this is a skill rather than
    a node, and it needs its own drill set: an unfamiliar pathogen, an unfamiliar antibody, an
    unfamiliar antibiotic, an unfamiliar vaccine, an unfamiliar epidemiological scenario, each requiring
    a known mechanism transferred rather than recalled.

### Low yield, and the honest findings of this build

**Finding 1: two of the eleven outcomes have zero coverage in the school notes.** This is the defining
finding of Book 9 and it inverts the usual problem.

- LOs **(j)** and **(k)** are taught nowhere in the 139 pages. Verified by literal search across en dash,
  hyphen, space and closed forms: **R0**, **Ro**, **R₀**, **basic reproduction number**,
  **transmissibility** and **contagiousness** return zero hits in the Book; **outbreak**, **epidemic**
  and **pandemic** appear five times in passing and are never defined. `[SCHOOL]`
- The Book's own cover page promises the content: *"students are introduced to concepts in epidemiology
  ... By further unpacking the significance of the basic reproduction number (R0) in predicting the
  progress of a disease outbreak..."*. The sections were never written.
- **The corpus has 106 records under the R₀ and epidemiology concept**, 11.8% of the topic, so JC
  prelims do test it. `[SCHOOL]`
- **9477 Specimen Paper 1 Q30 is an R0 question.** `[OFFICIAL]`
- **The syllabus names R0 a second time, outside Extension Topic A entirely**, in MATHEMATICAL
  REQUIREMENTS p.25, as *"the use of Ro value"* alongside standard deviation, the Hardy–Weinberg
  equation, the t-test and the chi-squared test. `[OFFICIAL]` **No other Extension Topic A term appears
  anywhere outside its own outcome block.** R0 is the only one with a second home in the assessment
  requirements, and that home is the mathematics section.

**Conclusion.** This is the first gap to close in Book 9, not the last. It is roughly 30 minutes of
definition-level content, it is 2 of 11 outcomes, it has confirmed official exam presence, and the
syllabus separately lists it as a quantity to **use**. Build it from the syllabus wording plus external
sources, build it with the threshold arithmetic rather than the definition alone, and mark every claim
`[INFERRED]` until a real mark scheme exists.

**Finding 2: the corpus over-weights bacterial disease relative to viral disease by five to one.**

- **Bacterial disease and antibiotics: 255 records (28.3%).**
- **Viral disease, influenza, HIV and dengue: 47 records (5.2%).**
- Yet LO (g) and LO (h) plus (i) are comparable in outcome weight, and LO (g) names two viruses with
  their target tissues written into the outcome text.

**Conclusion.** Do not let corpus volume set the drill split. Viral disease is under-represented in the
bank and is 53.2% mechanism-chain, the highest of any concept, which means it is cheap to drill and
returns full-mark answers. Weight it up. Note also that some of the 47 records are dengue, which is
Extension Topic B territory reached through a shared R0 stem.

**Finding 3: about a fifth of the corpus tests content with no Extension Topic A outcome.** `[SCHOOL]`
This is smaller than Book 2's contamination and comparable to Book 3's, and it is concentrated:

- The 106 epidemiology records are **in scope** under LOs (j) and (k), even though the notes do not
  teach them. They are not contamination; they are the gap.
- The genuine contamination sits in the bacterial file, where growth-curve, MIC and disk-diffusion
  questions have no content outcome, and in vaccination, where a minority of records test iPSC-style
  ethics framing.
- Records tagged to P4 are only 1.0% of the bank, which is consistent with the specimen's zero.

**Conclusion.** Filter by keyword before drilling: growth phase, lag phase, optical density, turbidity,
minimum inhibitory concentration, zone of inhibition. Keep them in a separate practical-skills pile for
October.

**Finding 4: nodes that are low frequency but should not be dropped.**

- **The four antibody functions.** Neutralisation, agglutination, opsonisation, complement activation.
  LO (c) says "functions", plural, and the corpus rejects incomplete structure-function pairings, yet
  the functions are usually taught as a single acronym and not drilled individually.
- **Innate immunity in its own right.** Only 48 corpus records, 5.3% of the topic, the smallest concept.
  But LO (a) names it explicitly, the innate-versus-adaptive comparison is a stock three-mark table, and
  the barrier defences open most TB questions. Low frequency, explicitly required, cheap to learn.
- **AIDS as distinct from HIV.** The syllabus names HIV three times and AIDS never, yet LO (g) asks how
  the virus "causes diseases in humans", and the disease is AIDS. The distinction between the infection
  and the syndrome is a one-line answer that the notes state and the corpus rarely tests.
- **The exotoxin against endotoxin comparison.** Five clean axes, laid out ready to use in chapter 9.6,
  carried by LO (h)'s infection clause, and under-drilled because the TB example dominates.
- **Why antibiotics do not act on viruses.** Two lines, carried by LO (i), and the corpus records three
  separate rejects for vague versions of it.

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with all
  eleven Extension Topic A learning outcomes and the Content list read verbatim and reproduced in §0,
  plus a whole-document literal search for §5 on more than 60 terms, each re-run across **en dash
  (U+2013), hyphen, space and closed forms** on **whitespace-normalised text** so that PDF line wrapping
  cannot hide a phrase. That sweep flipped two verdicts, one of them substantive. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477
  OFFICIAL)/`), read end to end and counted question by question, part by part, with marks tallied.
  `[OFFICIAL]`
- The school's own **Book 9 chapter PDFs** (`Study Agent/Bio/Book 9 - Infectious Diseases (Extension
  Topic A)/`), 8 files, 139 pages, full text plus visual reading of the load-bearing image-only pages.
  `[SCHOOL]`
- The **question bank** at `Study Agent/Bio/_question_bank/Infectious_Diseases.md` plus
  `_overflow/Infectious_Diseases.OVERFLOW.md`, **901 real in-scope questions** with mark schemes
  reproduced verbatim where a key existed. `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery
ratings and self-jotted confusions, not content. Excluded deliberately, per the subject guide §3.0 and
rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | ~98% `[OFFICIAL]` | Nodes derive directly from 11 outcomes read verbatim off the syllabus PDF. Extension Topic A has no Core Idea letter to mis-map and no letter-offset error is possible. This is the highest scope confidence of any Book so far, and it is offset by the fact that two outcomes have no teaching material behind them |
| Exam format | ~95% `[OFFICIAL]` | All four specimen papers counted directly, part by part, with marks tallied. Book 9's presence on each paper is a count, not an estimate. The 4.7% to 5.7% figure is arithmetic on official weightings |
| Archetype frequency | ~80%, **measured** | n=901 real questions parsed and classified. Residual uncertainty is not sampling error, it is that the corpus is largely 9744-era, so what it measures is what *prelims* asked. Lower than Book 3's 84% because the corpus is half the size and because 106 of its records test outcomes the notes do not cover, so their difficulty calibration is unanchored |
| Mark scheme logic | ~78% `[SCHOOL]` **capped** | Every scheme is a JC prelim. SEAB publishes no 9477 mark scheme and the specimen ships without one. This is the binding cap. Slightly below Book 3's 80% because immunology reject lines are more numerous but more school-specific, and because several of the strongest lines come from a single school's examiner reports |
| Trap model | ~88% `[SCHOOL]` | Strong section. Most entries quote a verbatim reject line, marker's note or examiner comment from a real scheme; **four are corroborated directly by the 9477 specimen**; and a further six are corroborated by errors found in the school's own notes |

**Honest ceiling: ~82% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Book 3:**

1. **No learning-outcome mapping ambiguity at all.** Extension Topic A is a flat list of eleven letters
   with no Core Idea prefix. There is nothing to cross-check and nothing to get wrong.
2. **The scope limit inside LO (e) is stated by the syllabus itself**, in the outcome text, using the
   words "limited to". That is a stronger authority than the inference-based exclusions in Book 3.
3. **The corpus is a single unified file with no quota cap**, so the main bank is the full corpus and
   there is no main-versus-overflow reconciliation to do.

**What is specifically weaker:**

1. **Two outcomes have no teaching material.** LOs (j) and (k) are 18% of the outcome count and the
   school notes contain nothing on either. Every claim built for them is `[INFERRED]` from the syllabus
   sentence plus general epidemiology, with no school wording and no mark scheme to calibrate against.
   No previous Book has had this problem.
2. **The corpus is less than half the size of Book 3's**, 901 records against 1955, so every frequency
   figure carries wider error bars.
3. **The school's notes are the least internally consistent of any Book so far.** The digest flags 39
   findings, six of which sit directly on examined distinctions, and in every one of the six the correct
   version exists elsewhere in the same Book while the wrong version sits in a figure caption, a summary
   box or a bolded table cell.
4. **No measured student success rates**, the same gap every previous Book reported. The trap ranking in
   §4 is by scheme frequency, syllabus weight and specimen corroboration, not by observed failure rate.
   The one exception is a single examiner's report recording that only 30% answered a class-switching
   MCQ correctly with 47% choosing the same distractor.

**Genuinely thin evidence, stated plainly:**

- **How LOs (j) and (k) will actually be marked.** One official MCQ exists (Specimen P1 Q30) and it
  ships without a key. The corpus's 106 epidemiology records are prelim-generated against a syllabus the
  prelims were writing towards, not from. The R0 definition given in §1 is standard epidemiology and is
  almost certainly what a scheme would want, but it is not quoted from one. **`[INFERRED]`**
- **How far the "use of Ro value" instruction reaches.** That the syllabus lists R0 among the
  mathematical requirements is `[OFFICIAL]` and settles that computation is in scope. What it does not
  settle is which computation. The obvious candidate is the herd immunity threshold as 1 minus 1 over
  R0, because it is the only standard formula that links LO (j) to LO (e), but **the syllabus never
  prints that formula and no specimen question uses it.** The threshold relationship given in §1 is
  therefore `[INFERRED]`, and it should be taught as reasoning (higher R0 means a higher proportion must
  be immune) before it is taught as an equation.
- **Whether the specimen's ~5% share is representative.** One paper. The syllabus's stated 15% for both
  extension topics together does not resolve it, because curriculum time is not exam marks, and the
  specimen put 13 marks on Extension Topic B against 7 on Extension Topic A within the same paper.
- **The Paper 3 tension.** The corpus draws 39.4% of its records from Paper 3 and files 21 essay-scale
  stems. The specimen gave Extension Topic A 3 marks on Paper 3 and no essay option. Both are verified.
  Only a second official paper resolves which is the better predictor. If forced to choose, weight the
  corpus for **content breadth** and the specimen for **format**, because the corpus is 15 years of
  prelims and the specimen is one paper written to the new syllabus.
- **Paper 4.** Zero Extension Topic A presence on the specimen practical, and only 1.0% of corpus
  records tagged to P4. A zone-of-inhibition or antibiotic-susceptibility practical is a standard
  microbiology exercise and the P4 skill areas plainly permit it, and the corpus holds one DHS SPA
  planning task built on exactly that. But there is **no official evidence** about how 9477 would examine
  it. Do not build a practical cluster from this; flag it for the October practical block.
- **Whether "hyper-mutation" being hyphenated in the syllabus signals anything.** It is almost certainly
  a typesetting choice, and every other source uses the unhyphenated form. Recorded here only because
  the hyphen is the difference between one hit and zero on a named outcome term.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the
most likely mispredicting dimension is **command-word handling**, not archetype content. The corpus is
30.4% Explain and 23.8% Suggest, and Suggest at that level means a quarter of the paper cannot be
answered from the notes at all. Re-measure how many drill questions are genuinely transfer questions
rather than recall dressed as application, and push the drill set further towards unfamiliar pathogens,
unfamiliar drugs and unfamiliar epidemiological scenarios before changing anything else.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 2 Question 9** sat cold
under timed conditions as the last question of a long session, followed by **Specimen Paper 3 Question
3 part (c)** and **Specimen Paper 1 Questions 29 and 30**. That is 12 marks in about 15 minutes. Between
them they cover LOs (b), (c), (d), (i) and (j) in the examiner's own words, which is five of the eleven
outcomes, and they test all three of the Book's dominant archetypes: mechanism chain, cell
identification from a diagram, and applied reasoning from a definition. **Q30 will be unanswerable until
the LO (j) gap is closed**, which is itself a useful diagnostic.
