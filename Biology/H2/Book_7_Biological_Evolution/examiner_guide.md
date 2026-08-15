---
subject: Biology
level: H2
topic: Book_7_Biological_Evolution
syllabus_code: 9477
type: qualitative   # subject default, and it holds almost everywhere. OVERRIDE → quantitative for
                    # exactly one strand: the Hardy-Weinberg calculation under LO 4(n), which is a
                    # calculation outcome in its own right and appears in the syllabus's Mathematical
                    # Requirements. That strand closes by solving variants until mechanical.
                    # A second, softer override: counting sequence differences off an alignment and
                    # ranking species by relatedness is arithmetic, not recall, and closes the same way.
                    # Everything else closes by concept doc plus re-test at a new angle.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~84% MIXED. [OFFICIAL] ~97% on scope (all 14 LOs of Core Idea 4 read verbatim from syllabus p.19, cross-checked character by character against all five chapter headers, no offset error found); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part); [SCHOOL] ~78% on marking (JC prelim schemes only, no SEAB scheme exists for 9477); archetype frequencies are MEASURED by parsing 1650 real questions, not estimated. The binding weakness is that the corpus predates 9477 and contains almost no Hardy-Weinberg, which is the Book's newest and most examinable node"
last_updated: 2026-08-15
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 7: Biological Evolution

> Specialises the subject guide to Book 7. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in this
> folder before building any cluster. Book 7's notes are more reliable than Book 3's, but they carry two
> conceptual errors that sit directly on examined outcomes and one of them will cost marks on LO 4(e).

---

## 0. Scope boundary (get this right before anything else)

**Book 7 is Core Idea 4, and it is the only Book in the course that maps one-to-one onto a whole Core
Idea.** Book 3 straddled three Core Ideas. Book 2 sat inside one Core Idea but shared it with Book 6.
Book 7 owns Core Idea 4 outright: every one of the fourteen outcomes (a) to (n) is taught somewhere in
these five chapters, and nothing in these five chapters belongs to another Core Idea.

| School chapter | Printed pages | 9477 LO(s) it delivers | Note |
|---|---|---|---|
| 7.1 Syllabus and Definitions | 2 to 9 | **(f)**, plus the full outcome list | 8 pp. Reproduces the syllabus block correctly |
| 7.2 Theories of Evolution | 9 to 35 | **(c), (f), (g)** | 27 pp. Three of its five sub-sections are marked SDL or FYI |
| 7.3 Microevolution | 36 to 69 | **(a), (b), (c), (d), (e), (m), (n)** | 34 pp. **Seven outcomes. The densest chapter in the Book** |
| 7.4 Speciation and Macroevolution | 70 to 105 | **(f), (h), (i), (j)** | 36 pp. Longest chapter, and the one carrying the most out-of-scope material |
| 7.5 Phylogeny and its Reconstruction | 106 to 129 | **(i), (k), (l)** | 24 pp. Cleanest chapter in the Book and the tightest outcome fit |

That is **14 learning outcomes**, all from **syllabus page 19**. `[OFFICIAL]` `[SCHOOL]` chapter split and
page counts.

**There is no letter-offset error anywhere in Book 7.** Every letter the school prints matches the
published syllabus exactly, and so does every wording. Chapter 7.1 reproduces the official list
correctly. This is worth stating plainly because Book 2's chapters 2.4 and 2.6 each printed a letter one
place ahead, and that reflex does not need to be applied here.

Two labelling defects exist and both are cosmetic. **First**, chapters 7.2 to 7.5 all print outcome (d)
with a capital E, as `(d) Explain why the population...`; the syllabus uses lower case. `[OFFICIAL]`
**Second, and more consequentially, chapter 7.5 on page 106 drops the label (n) entirely**, running the
Hardy-Weinberg calculation outcome on as an unlabelled continuation of the model outcome (m). Chapters
7.2, 7.3 and 7.4 all print (n) correctly. A candidate who reads only chapter 7.5 could conclude the
calculation is a rider on the model. It is an outcome in its own right. `[SCHOOL]`

### Verbatim 9477 Learning Outcomes for Book 7

Reproduced word for word from `inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`, page 19.
Candidates should be able to: `[OFFICIAL]`

**Core Idea 4, Biological Evolution (syllabus p.19)**

**(a)** explain why variation (as a result of mutation, meiosis and sexual reproduction) is important in
natural selection

**(b)** explain, with examples, how environmental factors act as forces of natural selection

**(c)** explain the role of natural selection in evolution

**(d)** explain why the population is the smallest unit that can evolve

**(e)** explain how genetic variation (including harmful recessive alleles) may be preserved in a natural
population

**(f)** define biological evolution as descent with modification and explain the link between
micro-evolution and macro-evolution

**(g)** explain how evidence based on homologies identified in biochemical data (molecular homologies)
and the fossil record (anatomical homologies), together with biogeography (supported by Wallace's
findings), corroborate Darwin's theory of evolution

**(h)** explain the biological concept of the species and its limitations

**(i)** define biological classification as the organisation of species according to shared
characteristics and describe how evolutionary relationship is established

**(j)** explain how new species are formed with respect to geographical isolation (allopatric speciation)
and behavioural or physiological isolation within the same geographical location (sympatric speciation)

**(k)** define phylogeny as the organisation of species to show their evolutionary relationships

**(l)** explain the importance of the use of genome sequences in reconstructing phylogenetic
relationships and state the advantages of molecular methods, including multiple sequence alignment
(nucleotide and amino acid), in classifying organisms

**(m)** explain the Hardy–Weinberg model and the conditions/assumptions it operates in

**(n)** calculate the frequencies of alleles, genotypes and phenotypes in a population for a gene with
two alleles, using the Hardy–Weinberg equation.

The Core Idea closes with the standing instruction: *"Use the knowledge gained in this section in new
situations or to solve related problems."* `[OFFICIAL]`

The official **Content** list for Core Idea 4, also from page 19, is five lines: *"The concept of the
species / The neo-Darwinian revolution / Variation, natural selection and evolution / Evidence of
evolution / Classification."* `[OFFICIAL]` Note what is **not** on it: no line for phylogeny, no line for
population genetics, no line for speciation. All three are examined through the outcomes anyway. The
content list is a weaker guide than the outcomes here, and where the two disagree the outcomes win.

### One more official statement that decides how much arithmetic this Book needs

The syllabus's **Mathematical Requirements** section, page 25, states: `[OFFICIAL]`

> "Candidates should be aware of the problems of drawing conclusions from limited data and should
> appreciate levels of significance, standard deviation and probability, and the use of Ro value,
> **Hardy–Weinberg equation (p2 + 2pq + q2 = 1)**, t- and chi-squared tests."

The syllabus prints the equation itself, in the Mathematical Requirements, alongside the t-test and the
chi-squared test. That, plus LO 4(n), settles the first of the two questions this build had to answer.
See §5.

### The exclusions Core Idea 4 states outright

**There are none.** Unlike Core Idea 2, whose LO 2(o) says "details of the mechanism are not required"
and whose LO 3(m) says "knowledge of intracellular receptors is not required", **not one of Core Idea 4's
fourteen outcomes carries a bracketed exclusion.** `[OFFICIAL]` Every bracket in Core Idea 4 is an
inclusion: "(as a result of mutation, meiosis and sexual reproduction)", "(including harmful recessive
alleles)", "(molecular homologies)", "(anatomical homologies)", "(supported by Wallace's findings)",
"(allopatric speciation)", "(sympatric speciation)", "(nucleotide and amino acid)".

Two things follow. First, the scope audit in §5 has to work entirely by absence rather than by quoted
exclusion, which lowers its confidence relative to Book 3's. Second, and more usefully, **every bracket
in Core Idea 4 is a mark point.** The outcomes tell you what has to be in the answer. LO 4(a) will not
accept mutation alone, because it names three sources. LO 4(g) will not accept the fossil record alone,
because it names three lines of evidence and it names Wallace. LO 4(j) will not accept allopatric alone.
LO 4(l) will not accept "DNA sequences are compared", because it names multiple sequence alignment and
it names both nucleotide and amino acid.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 7, grouped by the cluster that should teach it. Convergence
requires no UNTOUCHED node. LO letters are `[OFFICIAL]`.

### Cluster 01, variation, natural selection and the evolving population (LOs a, b, c, d, e)

- [ ] **The five population-genetics definitions (all of Core Idea 4)**: population, gene pool, allele
      frequency, genotype frequency, population genetics. Chapter 7.3 p.37. These are the vocabulary in
      which every other outcome is written and the school's wording is short enough to memorise.
- [ ] **Why variation matters for selection (4a)**: without variation there is no differential survival,
      because all individuals respond identically to the selection pressure.
- [ ] **The three named sources of variation (4a)**: **mutation**, **meiosis** and **sexual
      reproduction**, in the outcome's own words. Mutation makes new alleles; crossing over and
      independent assortment recombine them; random fertilisation recombines them again.
- [ ] **Mutation is the only source of new alleles, not of all variation.** See the trap model. Chapter
      7.3 p.45 gets this wrong and the outcome settles it.
- [ ] **Natural selection defined (4c)**, with both riders: it acts on **pre-existing** alleles generated
      before the selection event, and it acts on the **phenotype**, only indirectly on the genotype.
- [ ] **Selection pressure and relative fitness (4b, 4c)**. Relative fitness as the contribution an
      individual makes to the next generation's gene pool relative to others.
- [ ] **The environment does not direct change (4c)**: variation arises spontaneously and the
      environment selects among it. This is the Lamarck correction and it is the single most penalised
      framing error in the topic.
- [ ] **Environmental factors as selection forces, with examples (4b)**: **industrial melanism in the
      peppered moth** with **bird predation** named as the selection pressure, and **antibiotic
      resistance in MRSA** with the antibiotic named as the selection pressure. The outcome says "with
      examples", so at least one must be reproducible cold.
- [ ] **Selection is editing, not creation.** A drug does not create resistant bacteria, it selects
      resistant ones that were already there. Chapter 7.3 p.52 states it in one line.
- [ ] **The three modes of selection (4b, 4c)**: directional, stabilising, disruptive, **read off a
      distribution curve**. See §5 on whether the names are examinable; the shapes are, regardless.
- [ ] **The population is the smallest evolving unit (4d)**, with the Grants' medium ground finch study
      as the worked case. The mark-bearing move is the contrast: the population's mean beak depth
      changed, no individual bird's beak changed.
- [ ] **Microevolution defined (4d, 4f)**: change in allele or genotype frequencies in a gene pool over
      generations.
- [ ] **Genetic drift (4d)**: definition, the four key points, and both named forms, **founder effect**
      and **bottleneck effect**, each with its named example.
- [ ] **Gene flow (4d)**: definition, and the two effects, constructive and constraining.
- [ ] **Only natural selection consistently produces adaptive evolution.** One sentence, and it answers
      any drift-against-selection comparison.
- [ ] **Preserving variation (4e)**: **diploidy**, with recessive alleles hidden in heterozygotes and
      the rarer the allele the greater the protection; **balanced polymorphism**; **heterozygote
      advantage** with the sickle cell case; **frequency-dependent selection**. The outcome's phrase
      "including harmful recessive alleles" points straight at diploidy.

### Cluster 02, the Hardy-Weinberg model (LOs m, n) `[type override → quantitative]`

- [ ] **The model stated (4m)**: allele and genotype frequencies stay constant from generation to
      generation in a population that is not evolving.
- [ ] **The five conditions, each with its reason (4m)**: large population, random mating, no gene flow,
      no mutation, no natural selection. The outcome says "the conditions/assumptions **it operates
      in**", so a bare list is half an answer.
- [ ] **The two equations (4n)**: **p + q = 1** and **p² + 2pq + q² = 1**, and the school's composite
      form **(p + q)² = p² + 2pq + q² = 1**.
- [ ] **The conventions (4n)**: p is the **dominant** allele, q the **recessive**; p² is homozygous
      dominant, 2pq heterozygous, q² homozygous recessive. Frequencies sum to 1.
- [ ] **The standard calculation route (4n)**: recessive phenotype frequency gives q², square-root gives
      q, p = 1 − q, then p² and 2pq. Practise entering from the recessive phenotype, because that is the
      only phenotype whose genotype can be read directly.
- [ ] **The significance of deviation (4m)**: observed frequencies differing from predicted means one or
      more of the five conditions is violated, which means the population is evolving. This is what makes
      the model a test rather than a formula, and it is what **9477 Specimen P1 Q25** tested.
- [ ] **Applications (4m)**: estimating carrier frequency for a recessive disease allele, assessing
      genetic health of a small or fragmented population, detecting selection favouring heterozygotes.
- [ ] **The bridge to Cluster 01**: each of the five conditions maps onto one microevolutionary process.
      Small population maps to drift, non-random mating to inbreeding, migration to gene flow, mutation
      to mutation, unequal fitness to selection. Learning the two lists as one list halves the load.

### Cluster 03, evidence for evolution (LOs f, g)

- [ ] **Biological evolution defined (4f)**: **descent with modification**. The outcome asks for those
      three words.
- [ ] **Micro-evolution and macro-evolution, and the link between them (4f)**. Macroevolution occurs as
      a result of microevolution and cannot take place without it. The same four mechanisms, selection,
      mutation, drift and gene flow, run at both scales; the difference is the zoom level and the time.
- [ ] **Anatomical homologies (4g)**: homology defined as similarity from shared ancestry, the
      **pentadactyl limb** as the named example, **divergent evolution** as what it demonstrates.
- [ ] **Analogy and convergent evolution (4g, 4i)**: similarity from similar selection pressures in
      different lineages, which does **not** indicate relationship. Homology against analogy is the
      comparison this Book asks for most often.
- [ ] **Molecular homologies (4g)**: the universal genetic code; the accumulation argument, that
      independently evolving descendants accumulate more differences so that more distantly related
      organisms differ more; cytochrome c and haemoglobin as named comparison molecules.
- [ ] **The fossil record (4g)**: what fossils are, why they are rare, what the record shows, and the
      inference drawn from it. The school's three boxed evidence-and-conclusion blocks on pp.27, 29 and
      31 are the answer shape.
- [ ] **Biogeography, and Wallace (4g)**: the outcome names both. **Island biogeography**, where island
      species resemble the nearest mainland rather than islands with similar climates elsewhere, and
      **continent biogeography** with the **Wallace Line** and the marsupial and placental split.
- [ ] **Darwin against Lamarck (content line: the neo-Darwinian revolution)**: Lamarck has the
      environment inducing a change in the individual which is then inherited; Darwin has variation
      arising first and the environment selecting among it.
- [ ] **The one difference between Darwinism and Neo-Darwinism**: Mendelian genetics and molecular
      biology, that is, mutation as the source of variation and allele frequency change as the measure.

### Cluster 04, species and speciation (LOs h, j)

- [ ] **The biological species concept (4h)**, both halves: members can interbreed **in nature** and
      produce **viable, fertile** offspring, and cannot do so with members of other populations.
- [ ] **The four limitations (4h)**: fossils cannot be tested for reproductive isolation; the concept
      does not apply to asexual or self-fertilising organisms; gene flow occurs between morphologically
      and ecologically distinct species, forming hybrids; some populations of one species do not
      interbreed. The outcome says "and its limitations", so this is half the outcome.
- [ ] **Reproductive isolation and RIMs (4h, 4j)**: the definition, and that a combination of barriers
      isolates a gene pool where one may not.
- [ ] **Prezygotic barriers (4j)**: habitat, temporal, behavioural, and physiological split into
      mechanical and gametic.
- [ ] **Postzygotic barriers (4j)**: physiological split into hybrid inviability and hybrid sterility,
      plus hybrid breakdown. The **mule** is the named sterility example.
- [ ] **The four-stage speciation model (4j)**: single population; barrier develops and gene flow is
      interrupted; differentiation under different selection pressures and drift; barrier disappears and
      reproductive isolation is tested. Note this model is written for the allopatric case only.
- [ ] **Allopatric speciation (4j)**, with **geographical isolation** named as the outcome names it, and
      the rider that small isolated populations diverge faster because drift is stronger in them.
- [ ] **One allopatric worked example, cold.** Darwin's finches, the Grand Canyon antelope squirrels or
      the Death Valley pupfishes.
- [ ] **Sympatric speciation (4j)**, with the outcome's own mechanisms: **behavioural or physiological
      isolation within the same geographical location**. The reproductive barrier arises at the
      **start** of the split, not at the end, which is the structural difference from allopatric.
- [ ] **Polyploidy**, at the three-line level only. See §5.
- [ ] **Biological classification defined (4i)**: the organisation of species according to shared
      characteristics, which **may not** take evolutionary relationship into account. That last clause is
      what separates it from phylogeny.

### Cluster 05, phylogeny and molecular methods (LOs i, k, l)

- [ ] **Phylogeny defined (4k)**: the organisation of species to show their evolutionary relationships.
      Plus the rider that a phylogeny is a **hypothesis**, testable and revisable.
- [ ] **Classification against phylogeny (4i, 4k)**, as a matched pair.
- [ ] **Reading a phylogenetic tree**: root, branch, node, tip, and what each represents.
- [ ] **Finding the most recent common ancestor**: trace back until the branches converge.
- [ ] **What a tree cannot tell you**: branching order is not absolute age, and a taxon does not evolve
      from the taxon next to it. Both are stated corrections to standard misreadings.
- [ ] **Rotation does not change a tree.** The classic distractor is the same tree redrawn.
- [ ] **How evolutionary relationship is established (4i)**: shared **ancestral** characters against
      shared **derived** characters, and the point that which one a character counts as depends on the
      level. A backbone is ancestral among vertebrates and derived among animals.
- [ ] **The outgroup method**: comparing an ingroup against a lineage known to have diverged earlier, to
      decide which characters are derived. The five-vertebrate character table is the worked case.
- [ ] **The core molecular inference (4l)**: greater sequence similarity means closer relationship, and
      more differences mean longer since divergence.
- [ ] **The molecular clock assumption (4l)**: mutations accumulate at a roughly constant rate. This is
      the assumption a "suggest a limitation" question attacks.
- [ ] **Multiple sequence alignment (4l)**: named in the outcome. What it is, why close relatives align
      easily, and why insertions and deletions shift everything downstream and break the alignment.
- [ ] **Both data types (4l)**: the outcome says "(nucleotide and amino acid)". Counting base differences
      and counting amino acid substitutions are both required.
- [ ] **The advantages of molecular methods (4l)**: named in the outcome as a "state" task. The school
      lists nine; four of them carry the argument. Genetic and unambiguous; usable in **all** organisms
      including those with no fossil record; **quantifiable**, so relatedness can be graded rather than
      judged; and it reaches relationships comparative anatomy cannot, because all organisms share
      ribosomal RNA and fundamental proteins.
- [ ] **The one stated limitation**: findings are often inconclusive where several taxa diverged at
      nearly the same time in the distant past.
- [ ] **Different genes evolve at different rates (4l)**: rRNA slowly, so it resolves deep divergences;
      **mtDNA rapidly, so it resolves recent ones**. This is the reasoning behind **9477 Specimen P3
      Q1(b)(ii)**.
- [ ] **Cytochrome c** as the named homologous protein, and the proportionality conclusion.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part from all four **9477 specimen papers**
(`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only genuinely
Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**, so everything
here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Book 7 landed on the specimen

| Paper | Book 7 questions | Book 7 marks (clear) | With crossovers | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | Q23, Q24, Q25 | 3 | 3 | 10% |
| **P2** Structured (90 marks) | Q8(a) only | 5 | 5 | 5.6% |
| **P3** Section A (55 marks) | Q1(b)(ii), (b)(iii), (c)(ii), (c)(iii), (c)(iv), (d)(i), (d)(ii) | 12 | 16 | 22% to 29% |
| **P3** Section B essay (20 marks) | **none. Both options were Book 1** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | none | 0 | 0 | 0% |

Applying the official paper weightings of **15%, 30%, 35% and 20%** `[OFFICIAL]` (syllabus p.9), **Book 7
was worth roughly 9% to 11% of the whole A-level on the specimen.** That puts it below Book 3, which the
Book 3 guide measured at 13% to 16%, and level with or slightly above Book 2 at 8% to 11%. It appeared on
three of the four papers.

### What the specimen actually asked (the useful detail)

**Paper 1, the three relevant stems.** `[OFFICIAL]`

| Q | Node tested | LO | Stem type |
|---|---|---|---|
| **23** | Three pieces of evidence listed (reptile and mammal ear bones sharing an origin with fish jaw bones; more recent sedimentary layers containing species absent from older ones; Archaeopteryx sharing features with dinosaurs and with birds). Which are based on **homologies**? | **4(g)** | Four combinations of the three numbered statements. Requires you to separate homology from stratigraphic sequence |
| **24** | An immunological-distance investigation. Human serum injected into a chicken, chicken antiserum mixed with sera from four species, percentage precipitate recorded as 0%, 29%, 64%, 100%. Which row identifies chicken, chimpanzee, human and mouse? | **4(g)/4(l)** | Two-column grid, all four cells must be right. **Molecular relatedness read off unfamiliar data** |
| **25** | A *Cepaea nemoralis* shell polymorphism stem. Which condition would **maintain** the polymorphism? Options are preferential mating with recessive phenotypes, a bottleneck, consistent selection against dominant characteristics, and **Hardy–Weinberg equilibrium** | **4(m)/4(e)** | Four conditions. Requires you to know what each of drift, non-random mating and directional selection would do to a polymorphism, and that equilibrium preserves it |

Four structural facts follow, and each changes how to drill.

1. **Not one of the three is plain recall.** Q23 requires you to classify evidence you have not seen
   classified. Q24 requires you to invert a precipitate scale into a relatedness ranking. Q25 requires
   you to reason about four different processes and pick the one that does nothing.
2. **Q24 is not a phylogenetic tree question and it is not about DNA.** It is immunological distance,
   which the school's notes never teach. The transferable skill is the accumulation argument from chapter
   7.2 p.24: more similarity means closer relationship. Applied to a precipitate percentage, more
   precipitate means more shared protein means closer relationship, so 100% is human itself and 0% is the
   chicken that made the antibodies. A candidate who has only memorised "compare DNA sequences" cannot do
   it.
3. **Q25 is the single most informative question on the specimen for this Book.** It puts Hardy-Weinberg
   in Paper 1, in a conceptual rather than computational form, and its three distractors are **genetic
   drift, non-random mating and directional selection**, which are three of the five conditions of the
   model, restated as processes. That is the model tested exactly as LO 4(m) writes it, "the
   conditions/assumptions it operates in". It also confirms that the Hardy-Weinberg node is live under
   9477 even though the pre-9477 corpus barely touches it.
4. **Nothing on Paper 1 tested speciation, phylogenetic tree reading, or the biological species
   concept.** One paper is not evidence those are dead, but it is worth noting which nodes the examiner
   chose for the cheapest marks.

**Paper 2, Question 8(a). Five marks, one part.** The stem is Figure 8.1, a diagram of two tropical
mountains showing the altitude band occupied by rain forest vegetation in a **warm phase** and a **cool
phase** of the Earth's climate, with temperature scales on the right of each panel. The ask:

> "Suggest how repeated changes in climate between the warm phase and cool phase shown in Figure 8.1 may
> lead to the evolution of new species and greater species diversity." [5] `[OFFICIAL]`

Four things to take from this, and it is the most instructive Book 7 question on the whole specimen.

- **It is LO 4(j) allopatric speciation, delivered inside a climate-change stem.** Questions 8(b) and
  8(c) are Extension Topic B, on carbon footprints and anthropogenic greenhouse gases. Book 7 was
  harvested from inside a climate question, exactly the way Book 3 was harvested from inside a
  mitochondrial-DNA question on P3.
- **The command word is Suggest, not Explain or Describe.** There is no recall answer. The candidate has
  to run the four-stage speciation model on a figure they have never seen, working out for themselves
  that in the warm phase the forest band sits high and is split into two isolated patches on two
  mountaintops, that in the cool phase the band descends and reconnects, and that repeated cycling
  isolates, differentiates, reunites and tests, again and again.
- **Five marks for one part with no scaffolding.** No (i) and (ii). The candidate has to supply the
  structure. That is the highest-mark undifferentiated Book 7 part on the specimen and it maps almost
  exactly onto the school's four-stage model on pages 80 to 82 plus the RIM accumulation point.
- **The word "geographical" never appears in the stem.** The candidate has to see that a mountaintop
  forest patch is a geographical isolate.

**Paper 3, Question 1. Thirty-two marks, one stem, and Book 7 supplies twelve to sixteen of them.** The
stem is the Mitochondrial Eve work of Cann, Stoneking and Wilson from 1987. The full part breakdown, with
Book allocation:

| Part | Ask | Marks | Book |
|---|---|---|---|
| (a)(i) | State one way a prokaryotic and a eukaryotic genome are similar | 1 | Book 2 |
| (a)(ii) | List three ways they differ | 3 | Book 2 |
| (a)(iii) | Two features of mitochondria supporting the endosymbiosis hypothesis | 2 | Book 1, evolution-adjacent |
| (a)(iv) | Name and outline two respiratory processes dependent on matrix proteins | 6 | Book 5 |
| (a)(v) | Why repeating others' work matters in science | 1 | Practices of Science |
| (b)(i) | **Explain how meiosis leads to genetic recombination in the nuclear DNA of eukaryotes** | 4 | Book 3, **crossover** |
| (b)(ii) | **Suggest one reason why a higher mutation rate is useful for this type of study** | 1 | **Book 7, LO 4(l)** |
| (b)(iii) | **Suggest one reason why maternal inheritance of mtDNA is useful** | 1 | **Book 7, LO 4(l)** |
| (c)(i) | Describe and explain how PCR increases DNA quantity | 3 | Book 6 |
| (c)(ii) | **Place five primates in order of closeness of evolutionary relationship to humans, from a 50-base aligned sequence** | 1 | **Book 7, LO 4(l)** |
| (c)(iii) | **Explain how you used Figure 1.1 to work out your answer** | 2 | **Book 7, LO 4(l)** |
| (c)(iv) | **Explain why orangutans and gorillas are considered to be different biological species** | 2 | **Book 7, LO 4(h)** |
| (d)(i) | **Name the pattern of genetic variation shown by all three distributions** | 1 | **Book 7 / Book 2** |
| (d)(ii) | **Describe and explain the results shown in Figure 1.2** | 4 | **Book 7, LO 4(g)/4(l)** |

Five things follow, and they are the strongest evidence in this build.

1. **Book 7's biggest single presence on the specimen is a multiple sequence alignment.** Figure 1.1 is a
   50-base aligned nucleotide sequence for six primates. Parts (c)(ii) and (c)(iii) together are three
   marks for counting differences and ranking by relatedness. **LO 4(l) names multiple sequence alignment
   explicitly and the specimen delivered it as the Book's highest-value block.** `[OFFICIAL]` If one thing
   in this Book is drilled to fluency, this is it.
2. **Part (c)(iii) asks the candidate to explain their own method.** Not to state the answer, to explain
   how they got it. That is a metacognitive ask and it is worth two marks. The answer is: count the
   number of base differences from the human sequence for each species, and rank by that count, on the
   principle that more differences means longer since divergence.
3. **Part (d)(ii) is Book 7 tested as data.** Three non-overlapping distributions on one histogram,
   human-human centred near 7 differences, human-Neanderthal near 25, human-chimpanzee near 55. Describe
   and explain, for four marks, with the figures quoted. This is the accumulation argument in graph form
   and it is the shape to expect for LO 4(g)'s molecular half.
4. **Part (c)(iv) is LO 4(h) reached from inside a molecular question**, worth two marks, and the answer
   is the biological species concept applied: they cannot interbreed in nature to produce viable, fertile
   offspring, so their gene pools are separate.
5. **One stem, five Books.** Book 1, Book 2, Book 3, Book 5, Book 6 and Book 7 all appear inside Question
   1. This is the same architecture as Book 3's Specimen P3 Q3 and it is the clearest signal in the
   specimen about how 9477 Paper 3 is built. **A Book 7 revision pass that never reaches into Book 2's
   mutation and variation outcomes and Book 3's meiosis outcome will lose marks inside a Book 7-flavoured
   question.**

**Paper 3 Section B.** The two essay options were Q4 on the roles of proteins and Q5 on the ways
molecules enter cells. **Both Book 1.** A candidate who had studied only Book 7 had no essay to write.
This is identical to the Book 2 and Book 3 findings and it cuts the same way. See §2 for the tension
with the school corpus, which files 37 essay-scale Book 7 stems.

**Paper 4.** Zero Book 7 content across all three questions, which were photosynthesis, stomatal density
microscopy and a photosynthesis planning question. Book 7 is the Book with the least plausible practical
route in the whole course, since there is no bench technique in Core Idea 4. **The realistic P4 exposure
is data-handling and statistics on evolutionary data**, and the syllabus's Mathematical Requirements
names the Hardy-Weinberg equation alongside the t-test and chi-squared test, which is exactly the kind of
thing a P4 analysis question would use. `[OFFICIAL]` No corpus evidence supports or refutes this; the
bank files 2 records tagged to P4 across the whole Book 7 corpus.

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in `Study Agent/Bio/_question_bank/Biological_Evolution.md` and its
overflow file. Every record is a real question off a real paper, which is a JC prelim, an HCI topical
bank, a timed practice paper or the 9477 specimen. Sources span 2011 to 2025.

### Sample size

| Bank file | Records |
|---|---|
| `Biological_Evolution.md` (main, curated, quota-capped at 1000) | 1000 |
| `_overflow/Biological_Evolution.OVERFLOW.md` | 650 |
| **Total** | **1650** |

**n = 1650 real questions.** `[SCHOOL]` corpus, measured counts. The main bank is organised under eight
concept headings; the overflow file is unsectioned. Frequencies below are for the combined 1650 unless
stated.

The main bank's own difficulty tiering: **base 22.2%, harder 43.0%, hardest 34.8%.**

### Format split

| Measure | Value |
|---|---|
| MCQ (Paper 1 origin, or a four-option stem with a single-letter answer) | **31.8%** |
| Structured | **68.2%** |
| Figure, table, graph, tree or sequence-led | **39.0%** |
| Involving a phylogenetic tree specifically | 10.9% |

Paper of origin: **P2 51.7%, P1 31.7%, P3 16.0%, P4 0.1%**, with 0.5% unattributed.

**The P2 share is the highest of any Book measured so far**, at 51.7% against Book 3's 45.3%. Combined
with the specimen, where Book 7's only P2 appearance was a single 5-mark part, this is the one place the
corpus and the specimen disagree most sharply about paper distribution. Treat P2 as the likeliest home
for a Book 7 structured question and do not over-weight it.

### Marks per part

| Marks | Share of parts |
|---|---|
| 1 | 32.7% |
| 2 | 32.3% |
| 3 | 14.0% |
| 4 | 11.3% |
| 5 | 3.6% |
| 6 to 8 | 3.0% |
| 10 or more | 3.2% |

**Seventy-nine per cent of Book 7 parts are worth three marks or fewer.** This is a short-answer Book.
The mark-per-part profile is flatter than Book 3's and it means the drilling unit should be a two-mark or
three-mark answer written precisely, not a paragraph. The exception is the essay tail, which §2 covers
below.

### Command-word census (structured questions only, n = 1127)

| Command | Count | Share |
|---|---|---|
| **Explain** | 458 | **40.6%** |
| **Suggest** | 208 | **18.5%** |
| **Describe** | 113 | **10.0%** |
| State | 72 | 6.4% |
| Discuss | 40 | 3.5% |
| Name | 39 | 3.5% |
| (no command verb) | 34 | 3.0% |
| Compare | 30 | 2.7% |
| Outline | 22 | 2.0% |
| Complete | 18 | 1.6% |
| Identify | 17 | 1.5% |
| Calculate | 13 | 1.2% |
| Label | 11 | 1.0% |
| Predict / Draw | 20 | 1.8% |
| Account for / Define / Justify / Distinguish / Deduce / Evaluate | 32 | 2.8% |

Separately, **"with reference to [figure/table]" constrains 13.2% of structured parts.**

**Explain plus Suggest is 59% of every structured part in Book 7.** Three points follow.

First, **Explain at 40.6% is the highest of any Book measured.** Book 3's was 19.9%. Evolution is a
causal-reasoning topic and the modal question is a chain: this environmental change, therefore this
selection pressure, therefore this differential survival, therefore this change in allele frequency.
Drill sets should be built around chains, not lists.

Second, **Suggest at 18.5% is also the highest of any Book measured**, against Book 3's 12.0%. Suggest
signals there is no recall answer available. In Book 7 that almost always means an unfamiliar organism,
an unfamiliar habitat, an unfamiliar dataset or an unfamiliar barrier. **The 9477 specimen's largest
single Book 7 part, P2 Q8(a) at five marks, is a Suggest.** `[OFFICIAL]` The mechanism has to be
transferable, not memorised, which means every drill question should use an organism the school notes
never mention.

Third, **Calculate is at 1.2%, and that number is misleading.** It is measuring a corpus that predates
9477. LO 4(n) is a calculation outcome. See §5, finding 2.

### Content archetypes

Each question classified into exactly one primary archetype by first matching rule.

| Archetype | Share | What it demands |
|---|---|---|
| **Data / figure interpretation** | **32.1%** | Describe the trend with figures quoted, then account for it. The single largest archetype |
| **Mechanism explain-chain** | **25.6%** | Cause to effect, one mark per link, run forwards |
| Unclassified | 17.0% | Mostly short completions, one-line identifications and MCQ stems with no verb |
| **Phylogenetic tree / relatedness reading** | **11.6%** | Read a tree or an alignment, rank by relatedness, find a common ancestor. **Book 7-specific and it has no analogue in any other Book** |
| **Recall / state / define / describe** | **8.0%** | Definitions of species, phylogeny, gene pool, drift, the five conditions |
| Compare / distinguish | 2.1% | Both sides on one axis, point for point |
| Evaluate / discuss | 1.8% | Concentrated in the essay tail |
| **Calculation** | 1.3% | Almost all Hardy-Weinberg. **Under-measured, see §5** |
| Predict / apply to novel case | 0.5% | |

**Data interpretation plus mechanism chain is 58% of the Book**, and adding tree reading takes it to
69%. Those three archetypes should carry roughly seven of every ten drill questions.

### Archetype by concept heading (main bank sections)

| Concept heading | n | Dominant archetype | Second |
|---|---|---|---|
| Classification, phylogeny and molecular methods | 311 | **Tree / relatedness reading 40%** | Data/figure 28% |
| Natural selection and environmental selection pressures | 302 | **Data/figure 51%** | Mechanism chain 26% |
| Speciation: allopatric, sympatric and isolating mechanisms | 150 | **Data/figure 53%** | Mechanism chain 24% |
| Evidence for evolution: homologies, fossil record, biogeography | 80 | **Data/figure 51%** | Mechanism chain 15% |
| Variation, its sources, and why it matters for selection | 78 | **Mechanism chain 37%** | Data/figure 28% |
| The biological species concept and its limitations | 42 | Mechanism chain 33% | **Recall 24%** |
| The population as the smallest evolving unit, drift, founder effect | 34 | Mechanism chain 32% | Data/figure 24% |
| **The Hardy-Weinberg model** | **3** | | |

**Five chapter-level facts worth acting on.**

1. **The phylogeny cluster is the largest in the corpus at 311 records and it is tested differently from
   everything else.** Forty per cent of its questions are tree or alignment reading, an archetype that
   appears nowhere else in the syllabus. It is also the cluster the specimen leaned on hardest, supplying
   Q24 on P1 and most of Q1's Book 7 marks on P3. **This is where the marks are.**
2. **Natural selection and speciation are both data chapters, at 51% and 53% figure-led.** The stock stem
   is a distribution curve, a frequency-against-time graph, a map of a species range or a table of
   phenotype frequencies. Reciting the definition of directional selection is not what gets tested;
   recognising it from a shifted curve is.
3. **The species concept is the one place a definition can be asked cold**, at 24% recall. Everything
   else in this Book arrives wrapped in data.
4. **The population and drift cluster is the smallest properly-populated one at 34 records**, which is
   badly out of proportion to its outcome weight. LO 4(d) is a whole outcome and drift underpins
   allopatric speciation. This is a node the corpus under-tests and the outcomes do not. Build questions
   for it rather than harvesting them.
5. **The Hardy-Weinberg heading holds three records.** Three, out of 1650. See §5, finding 2, because
   this is the single most important measurement in this build.

### Essay presence, and the same tension Books 2 and 3 had

Counting distinct question parts worth 10 marks or more: **37 essay-scale stems in the Book 7 corpus**,
distributed across prelim years 2011 to 2025 with no quiet period. `[SCHOOL]`

Recurring stems, verbatim, that show the shapes the examiner likes:

- "Explain how genetic variation can arise in nature." [15] DHS Prelim 2023 P3 Q5a
- "Explain why variation is important in natural selection and outline the sources of variation in
  eukaryotes." [15] JPJC Prelim 2023 P3 Q5a
- "Discuss what genetic variation is and how variation, including harmful recessive alleles, may be
  preserved in a natural population." [12] CJC Prelim 2023 P3 Q5b
- "Using a named example, discuss how genetic variation may be preserved in a natural population by
  heterozygote advantage." [12] SAJC Prelim 2017 P3 Q5b
- "Explain why genetic variation may be lost during natural selection, and describe the ways of
  preserving genetic variation." [15] MI Prelim 2021 P3 Q4a
- "Explain how anatomical and molecular homology support Darwin's theory of evolution on descent with
  modification." [10] EJC Prelim 2022 P3 Q5a
- "Describe how anatomical and molecular homology support Darwin's theory of descent with
  modification." [13] RI Prelim 2017 P3 Q4a
- "Explain the three modes of natural selection and discuss which mode(s) of selection might lead to the
  formation of new species, including circumstances under which this may take place." [12] TMJC Prelim
  2023 P3 Q4b
- "Explain the role of isolating mechanisms (e.g. geographical, physiological and behavioural) in the
  evolution of new species." [10] VJC Prelim 2011 P2 Q9a
- "Explain how species are formed with reference to physiological isolation." [10] DHS Prelim 2011 P2 Q10b
- "There are many methods to classify organisms. Describe some methods and explain their limitations."
  [15] DHS Prelim 2023 P3 Q4a
- "Describe the mechanism for descent with modification and explain how variation in genetic information
  enables scientists to reconstruct phylogenies." [10] HCI Prelim 2021 P3 Q5b
- "Discuss mechanisms that trigger adaptive radiation and mass extinctions, and explain how
  microevolution can be linked to these macroevolutionary events." [12] HCI Prelim 2017 P3 Q5b
- "There are many factors that contribute to evolution in eukaryotes. Explain the roles of chance and
  isolation in an evolution that leads to the emergence of a new species." [12] CJC Prelim 2021 P3 Q4b

**The pattern is different from Books 2 and 3, and it matters.** Book 2's essays were property-led. Book
3's were bridge-led, holding two things together. **Book 7's are outcome-led: the great majority of these
stems are a single learning outcome expanded to essay length, often quoting the outcome's own words.**
"Genetic variation, including harmful recessive alleles, may be preserved in a natural population" is LO
4(e) verbatim. "Anatomical and molecular homology support Darwin's theory of descent with modification"
is LO 4(g) compressed. "Explain how species are formed with reference to physiological isolation" is LO
4(j) with one clause selected.

The preparation is therefore not chapter revision but **five rehearsed outcome-essays**:

1. **Variation**: where it comes from, why selection needs it, and how it is preserved. Covers 4(a) and
   4(e) and it is by a distance the most-asked essay in this corpus.
2. **Homology as evidence**: anatomical plus molecular, run through descent with modification. Covers
   4(g) and 4(f).
3. **Speciation**: isolating mechanisms, allopatric and sympatric, the four stages. Covers 4(j) and 4(h).
4. **Classification and phylogeny**: methods, their limitations, and why molecular methods win. Covers
   4(i), 4(k) and 4(l).
5. **Microevolution to macroevolution**: the mechanisms at both scales and the link. Covers 4(f) and
   4(c).

**The honest tension.** The corpus files 37 essay-scale Book 7 stems, and variation alone supplies nine.
The official specimen gave Book 7 no essay at all, offering two Book 1 options. Both are true. The
specimen is one paper. Do not conclude from it that Book 7 essays are dead, and do not conclude from the
corpus that one is guaranteed.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers in
> the corpus arrive without one. Every marking claim below is `[SCHOOL]`, distilled from JC prelim
> schemes reproduced verbatim in the question bank. They are expected to be broadly representative of
> Cambridge house style, not identical to it. Quoted reject and accept lines are verbatim from those
> schemes.

**1. "More adapted to the environment" is explicitly rejected as an answer to why variation matters.**
From an ACJC scheme reproduced in the bank, on LO 4(a): the accepted points are that variation gives rise
to different phenotypes, and that variation allows differential reproductive success to occur, and the
scheme then adds *"(reject 'more adapted to environment')"*. The reason is that the phrase describes the
outcome of selection rather than the role of variation in it. Write **differential survival and
reproductive success**, and say that without variation all individuals respond identically to the
selection pressure. `[SCHOOL]`

**2. Selection acts on the phenotype, and answers that have the environment changing the genotype are
wrong.** This is the Lamarck error and it is the topic's defining failure mode. The school states the
correction three separate times: chapter 7.1 p.2, "the environment does not direct the changes in DNA,
but acts upon phenotypes"; chapter 7.2 p.14, "The environment merely selects those individuals that
happen by chance to be better adapted"; chapter 7.3 p.48, "It does not cause genetic changes in
individuals but acts on existing alleles in the population's gene pool, **which were generated by
mutations prior to the selection event**." Any answer in which an organism develops a trait because it
needs one, or in which a bacterium becomes resistant because of the antibiotic, is the Lamarck error
wearing modern clothes. `[SCHOOL]` on the school statements, `[INFERRED]` that schemes penalise it,
though the school's triple repetition is itself strong evidence that they do.

**3. Populations evolve, individuals do not, and the distinction is worth a mark on its own.** Chapter
7.3 pp.43 to 44 spends a page on it: "the individual finches did not evolve. Each bird had a beak of a
particular size, which did not grow larger during the drought." An answer that says the finches evolved
larger beaks, rather than that the population's mean beak depth increased, has answered LO 4(d) wrongly
while appearing to answer it. `[SCHOOL]`

**4. Comparison marks need point-to-point pairing.** The Book 3 guide records two separate schemes
rejecting yes/no comparisons, and the same principle applies here to every homology-against-analogy,
allopatric-against-sympatric and classification-against-phylogeny question. Each mark is one axis with
both sides stated positively. Saying "homologous structures show common ancestry while analogous
structures do not" is one mark; saying "homologous structures arise from a shared ancestor whereas
analogous structures arise independently in different lineages through similar selection pressures" is
the version that scores. `[SCHOOL]`

**5. Data answers must quote the data.** With 13.2% of structured parts opening "with reference to", and
with 39% of the corpus figure-led, this is a large amount of mark surface. Schemes in the bank carry
instructions of the form *"relevant supporting data must be quoted"*. On the specimen, **P3 Q1(d)(ii)
asks to "Describe and explain the results shown in Figure 1.2" for four marks**, which is two describe
marks that require quoted values and two explain marks. `[OFFICIAL]` for the question, `[SCHOOL]` for the
marking convention.

**6. "Viable, fertile offspring" is the required phrase for the species definition, and both adjectives
do work.** Chapter 7.4 p.72 uses it twice in one definition. "Fertile offspring" alone misses hybrid
inviability; "viable offspring" alone misses hybrid sterility, which is the mule case the same page
teaches. `[SCHOOL]`

**7. Speciation answers must reach reproductive isolation, not stop at geographic separation.** The
four-stage model exists because separation alone is Stage 2 of 4. Chapter 7.4 p.81 is explicit that if
the reunited populations still interbreed successfully "the process of speciation halts and a single
species remains". An answer that ends at "the populations are separated and adapt differently" has
described divergence, not speciation. `[SCHOOL]`

**8. The selection pressure has to be named, and for the peppered moth it is bird predation, not
pollution.** Chapter 7.3 p.50 prints the sentence on its own line, centred and bolded: "The bird predator
exerts the selection pressure." Page 51 repeats it in capitals: "BIRDS EXERTED THE MAIN SELECTION
PRESSURE by feeding on moths differentially, depending on the colour of the background environment."
Soot changed the background; birds did the selecting. `[SCHOOL]`

**9. Mutation is the source of new alleles, and answers that call it the only source of variation are
incomplete against the outcome.** LO 4(a) names three sources by name. `[OFFICIAL]` A two-mark or
three-mark answer needs mutation for new alleles plus meiosis and random fertilisation for new
combinations. The school's own chapter 7.3 p.45 says mutation is "the only source of genetic variation
that makes evolution possible", which is wrong and contradicts its own p.47. See the trap model.

**10. Relatedness answers must reference the number of differences, not the number of similarities.** On
Specimen P3 Q1(c)(iii), the ask is to explain the method. The scoring version counts base differences
from the reference sequence and ranks by count, on the principle that more differences means longer since
divergence. `[OFFICIAL]` for the question. Saying "they look similar" or "they share many bases" without
a count does not demonstrate the method.

**11. A phylogenetic tree does not show absolute age, and answers that read it as a timeline are
penalised.** Chapter 7.5 p.113 states the correction twice, once for age and once for ancestry: a taxon
does not evolve from the taxon next to it, and branching order does not indicate when a species evolved
unless the branch lengths are declared to be proportional to time. `[SCHOOL]` These are the two stock
distractors on any tree question.

**12. "Adaptation" and "adapted" must not be used as verbs describing an individual's response.** The
organism does not adapt to the environment during its lifetime; the population becomes adapted across
generations. This follows directly from marking point 2 and from LO 4(d). `[INFERRED]`

**13. Command-word discipline, as it bites in this Book specifically.** *Explain* wants the causal chain
with each link separate, and at 40.6% of structured parts it is the dominant instruction. *Suggest*, at
18.5%, means no recall answer exists and the mechanism must be transferred to unfamiliar material;
Specimen P2 Q8(a) used it for five marks with no scaffolding. *Describe* wants the observable pattern and
nothing about why, and on a data question it wants figures quoted. *State* wants one line, and Specimen
P3 Q1(d)(i) used it for one mark to name a pattern of variation. *Discuss*, at 3.5%, appears almost
entirely in the essay tail and wants both sides. `[OFFICIAL]` glossary meanings, `[SCHOOL]` marking
behaviour, `[OFFICIAL]` for the specimen usages.

**14. What is genuinely unknown here.** The Book 3 guide could quote a dozen verbatim reject lines
because its corpus files were dense with reproduced schemes. Book 7's corpus is thinner on verbatim
reject guidance, and points 2, 3, 7, 8, 11 and 12 above are `[INFERRED]` from the school's own emphasis
and from the outcome wording rather than quoted from a scheme. **Treat this section as weaker than Book
3's equivalent** and do not build a trap on a marking claim alone unless it is corroborated by the
syllabus or the specimen.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented distractors.
Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477 specimen, and
the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Studying polyploidy in depth** | Treats the school's five pages on autopolyploidy, allopolyploidy, colchicine and bread wheat as the sympatric mechanism, because it is the one the chapter leads with | **"Polyploid" returns zero syllabus hits.** LO 4(j) names behavioural and physiological isolation, not chromosome doubling. Five pages for a three-line node | 9477 syllabus grep verified `[OFFICIAL]` |
| **Studying adaptive radiation and mass extinction** | Sees five pages under a Macroevolution heading and assumes macroevolution means these | **"Adaptive radiation", "mass extinction" and "extinction" all return zero syllabus hits.** LO 4(f)'s macroevolution half is the **link** to microevolution, which is section 4.5.3, not sections 4.5.1 and 4.5.2 | LO 4(f) `[OFFICIAL]` |
| **Studying the four non-biological species concepts** | Reads all five concepts because the chapter presents five | LO 4(h) says "**the** biological concept of the species", singular, and the school marks 4.1.2 to 4.1.5 (FYI) itself | LO 4(h) `[OFFICIAL]` |
| **Studying binomial nomenclature and the taxonomic hierarchy as content** | Sees three pages on Linnaeus, capitalisation and the eight ranks | **"Binomial", "Linnaeus", "taxonomy", "taxa", "genus" and "kingdom" all return zero syllabus hits.** The ranks are vocabulary for reading a question, not a node | 9477 syllabus `[OFFICIAL]` |
| **Studying cladistics vocabulary** | Learns clade, synapomorphy, plesiomorphy, monophyletic and outgroup as terms to reproduce | All five return **zero** syllabus hits. The **biology** is required under LO 4(i)'s "describe how evolutionary relationship is established"; the Greek is not. Learn shared ancestral character and shared derived character in plain English | LO 4(i) `[OFFICIAL]` |
| **Studying vestigial structures and embryological homology** | Works through chapter 7.2's three-page whale section | **"Vestigial" returns zero syllabus hits.** LO 4(g) names biochemical data and the fossil record. The school marks both subsections (SDL) | LO 4(g) `[OFFICIAL]` |
| **Studying the fitness coefficient** | Reads the page 14 side box on fitness values between 0 and 1 and the selection coefficient s | **"Fitness" returns zero syllabus hits** and no outcome requires the arithmetic | 9477 syllabus `[OFFICIAL]` |
| **Studying coevolution, sexual selection and artificial selection as named nodes** | Sees them listed in chapter 7.1's framing prose and chapter 7.3 p.57 | All three return **zero** syllabus hits. Artificial selection survives only as a possible stem context under LO 4(b)'s "with examples" | 9477 syllabus `[OFFICIAL]` |
| **Skipping Hardy-Weinberg because the question bank barely contains it** | Infers scope from the corpus rather than from the syllabus | The corpus holds **5 of 1650 records** mentioning Hardy-Weinberg. The syllabus gives it **two of the fourteen outcomes** and prints the equation in the Mathematical Requirements. **The corpus is 9744-era and wrong about this Book** | LO 4(m), 4(n), syllabus p.25 `[OFFICIAL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **The species said to be the smallest evolving unit** | Copies chapter 7.4's opening sentence over chapter 7.3's whole section 3.2 | "A species is the smallest independently evolving unit", contradicting LO 4(d) word for word. The population is the answer | school notes 7.4 p.71 error, digest C1 `[OFFICIAL]` correction |
| **Sickle cell heterozygote advantage classed as stabilising selection** | Copies chapter 7.3's own section heading on p.53 | Files a variation-**maintaining** mechanism under a variation-**reducing** one. The chapter's own p.67 lists stabilising selection among the processes that reduce variation and heterozygote advantage among those that maintain it. It is **balancing selection** | school notes 7.3 contradiction, digest C2 `[INFERRED]` |
| **Mutation called the only source of genetic variation** | Copies chapter 7.3 p.45 over its own p.44 and p.47 | "Beneficial mutations are the only source of genetic variation that makes evolution possible." Mutation is the only source of **new alleles**. LO 4(a) names three sources | school notes 7.3 error, digest §5.2 `[OFFICIAL]` correction |
| **The environment said to cause the variation** | Lamarck, restated | "The bacteria mutated because of the antibiotic", "the moths turned black because of the soot". Variation is pre-existing and the environment selects among it. The school corrects this three separate times | 7.1 p.2, 7.2 p.14, 7.3 p.48 `[SCHOOL]` |
| **Individuals said to evolve** | Skips LO 4(d) | "The finches evolved larger beaks during the drought." The population's mean changed; no bird's beak grew | 7.3 pp.43 to 44 `[SCHOOL]` |
| **Pollution named as the selection pressure for the peppered moth** | Names the environmental change rather than the agent of selection | The school prints "The bird predator exerts the selection pressure" on its own line and repeats it in capitals on the next page | 7.3 pp.50 to 51 `[SCHOOL]` |
| **Speciation answered as geographic separation alone** | Stops at Stage 2 of 4 | Describes divergence, not speciation. Reproductive isolation is the test and it happens at Stage 4 | 7.4 p.81 `[SCHOOL]` |
| **Sympatric speciation answered with polyploidy only** | Follows the school's emphasis rather than the outcome's wording | LO 4(j) names **behavioural or physiological isolation within the same geographical location**. The answer comes from the RIM table on pp.73 to 74 | LO 4(j) `[OFFICIAL]` |
| **"Fertile offspring" given without "viable"** | Half-remembers the species definition | Misses hybrid inviability, which is one of the eight barriers the same chapter teaches | 7.4 p.72 `[SCHOOL]` |
| **Homologous and analogous structures reversed** | Confuses similarity of form with similarity of origin | Homology means shared ancestry and shows **divergent** evolution; analogy means independent acquisition and shows **convergent** evolution. **9477 Specimen P1 Q23 turns on separating homology from other evidence** | 9477 Specimen `[OFFICIAL]` |
| **Bat and bird wings called homologous** | Sees two forelimbs used for flight | The underlying skeletons **are** homologous; the wings are **not**. The bird wing is supported by digit 2, the bat wing by digits 2 to 5, and the two arose independently. This is the school's own worked correction | 7.5 p.116 `[SCHOOL]` |
| **A phylogenetic tree read as a timeline** | Assumes branch position indicates age | "The wolf evolved more recently than the otter." Branching order shows only which common ancestor is more recent, unless branch lengths are declared proportional to time | 7.5 p.113 `[SCHOOL]` |
| **A taxon said to have evolved from its neighbour on the tree** | Reads left-to-right adjacency as ancestry | "Wolves evolved from coyotes." Both evolved from the common ancestor at their shared node | 7.5 p.113 `[SCHOOL]` |
| **A rotated tree treated as a different phylogeny** | Assumes the drawing is the data | Any node can be rotated without changing the tree. The school devotes Figure 5.6 to this | 7.5 p.112 `[SCHOOL]` |
| **Similarity assumed to equal relatedness** | Ignores convergence | The school states the correction in one line: "Similarity of organisms alone does not necessarily correlate with their evolutionary relatedness." Convergent evolution is the reason | 7.5 p.109 `[SCHOOL]` |
| **Relatedness answered without counting differences** | Eyeballs an alignment | **9477 Specimen P3 Q1(c)(iii)** asks the candidate to explain the method used, for two marks. The method is: count base differences from the reference and rank by count | 9477 Specimen `[OFFICIAL]` |
| **Hardy-Weinberg equilibrium confused with a population that has stopped evolving in practice** | Treats the model as a description rather than a null hypothesis | It describes a **hypothetical** non-evolving population and provides a benchmark. Deviation from it is the evidence that evolution is occurring | 7.3 pp.39, 42 `[SCHOOL]` |
| **p and q assigned to the wrong alleles** | Guesses the convention | p is the **dominant** allele frequency, q the **recessive**. Every calculation enters through q², because the homozygous recessive is the only genotype readable directly from a phenotype | 7.3 p.40 `[SCHOOL]` |
| **A Hardy-Weinberg answer given as a genotype count without converting to a frequency, or vice versa** | Loses track of what the question asked for | LO 4(n) names three outputs: frequencies of **alleles**, **genotypes** and **phenotypes**. The prelim example in the bank asks for the **number** of heterozygous plants, which means 2pq multiplied by the population size | LO 4(n) `[OFFICIAL]`, HCI Prelim 2024 P3 Q3(a) `[SCHOOL]` |
| **Only four of the five Hardy-Weinberg conditions given** | Drops one, usually random mating or no mutation | LO 4(m) asks for "the conditions/assumptions it operates in". Five conditions, each with a reason | LO 4(m) `[OFFICIAL]` |
| **A bottleneck answered as "the population got smaller"** | Stops at the cause | The mark is that the survivors are a small **random** sample of the original gene pool, so allele frequencies change by chance and diversity is lost, and that the loss persists after the population recovers | 7.3 p.61 `[SCHOOL]` |
| **Founder effect and bottleneck effect used interchangeably** | Both involve small populations | A founder effect is a **few individuals colonising a new area**; a bottleneck is a **crash in an existing population**. Both are drift, and the distinction is what happened to the rest of the original population | 7.3 pp.60 to 61 `[SCHOOL]` |
| **Genetic drift said to be adaptive** | Assumes any allele frequency change improves fit | Drift changes frequencies **at random**, and alleles fixed by drift are as likely to be harmful as beneficial. Only natural selection consistently produces adaptive evolution | 7.3 pp.58, 66 `[SCHOOL]` |
| **Gene flow assumed always to help** | Treats migration as beneficial | It is constructive when it spreads a beneficial mutation and constraining when it imports unfit alleles. The copper-tolerance case is gene flow **opposing** selection | 7.3 pp.64 to 65 `[SCHOOL]` |
| **Classification and phylogeny treated as the same thing** | Both group organisms | Classification groups by shared characteristics and **may not** consider evolutionary relationship. Phylogeny does. LO 4(i) and LO 4(k) are separate outcomes for this reason | 7.5 p.108 `[OFFICIAL]` |
| **Molecular methods described without the constant-rate assumption** | Gives the conclusion without the premise | Converting a difference count into a divergence time assumes mutations accumulate at a roughly constant rate. That assumption is the thing a "suggest a limitation" question wants | 7.5 p.121 `[SCHOOL]` |
| **All genes assumed to evolve at the same rate** | Misses advantage 9 | rRNA changes slowly and resolves deep divergences; mtDNA changes fast and resolves recent ones. **9477 Specimen P3 Q1(b)(ii)** asked why a higher mutation rate is useful for a study of recent human ancestry | 9477 Specimen `[OFFICIAL]` |
| **Wallace omitted from the evidence answer** | Learns LO 4(g) as three lines of evidence and drops the attribution | The outcome says "biogeography (**supported by Wallace's findings**)". Wallace appears in only 6 of 1650 corpus records, so the corpus under-tests exactly what the outcome names | LO 4(g) `[OFFICIAL]` |
| **Adaptive radiation offered as the answer to macroevolution** | Follows the chapter's structure rather than the outcome's | LO 4(f) wants the **link**: macroevolution results from microevolution and cannot occur without it, through the same four mechanisms over longer time | LO 4(f) `[OFFICIAL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-document, on the 28-page PDF at
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the
outcome that carries it is quoted. **Every zero below was re-searched under spelling variants before
being reported as a zero**, and the variants that mattered are called out.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **Hardy-Weinberg** (hyphen) | **0** | **This zero is a false negative. See the next row.** |
| **Hardy Weinberg** (space) | **0** | Also a false negative |
| **Hardy–Weinberg** (**en dash**) | **3** | LO 4(m): *"explain the **Hardy–Weinberg model** and the conditions/assumptions it operates in"*; LO 4(n): *"using the **Hardy–Weinberg equation**"*; Mathematical Requirements p.25: *"the use of Ro value, **Hardy–Weinberg equation (p2 + 2pq + q2 = 1)**, t- and chi-squared tests"* |
| **allele frequency** | **0** | Nowhere as a phrase. But LO 4(n) says *"calculate the frequencies of **alleles**, genotypes and phenotypes in a population"*, which is the same thing split across two words. **Loses the phrase, keeps the biology** |
| **gene pool** | **0** | Nowhere. Carried by LO 4(d)'s *"the population is the smallest unit that can evolve"* and by LO 4(n)'s frequencies-in-a-population |
| **genetic drift** | **0** | Nowhere. See the ruling below. Carried by LO 4(d) |
| **bottleneck** | **0** | Nowhere. Carried by LO 4(d) and, on the specimen, tested as a distractor in P1 Q25 |
| **founder effect** | **0** | Nowhere. Same as bottleneck |
| **natural selection** | **4** | Core Idea 4 content list *"Variation, natural selection and evolution"*; the curriculum framework map *"Natural Selection & Adaptation"*; LO 4(b) *"how environmental factors act as forces of **natural selection**"*; LO 4(c) *"the role of **natural selection** in evolution"* |
| **directional selection** | **0** | Nowhere. See finding 3 |
| **stabilising selection** / **stabilizing selection** | **0** each | Nowhere under either spelling |
| **disruptive selection** | **0** | Nowhere |
| **sexual selection** | **0** | Nowhere |
| **allopatric** | **1** | LO 4(j): *"with respect to geographical isolation (**allopatric** speciation)"* |
| **sympatric** | **1** | LO 4(j): *"behavioural or physiological isolation within the same geographical location (**sympatric** speciation)"* |
| **polyploidy / polyploid** | **0** | Nowhere. Also zero for autopolyploid, allopolyploid, tetraploid |
| **reproductive isolation** | **0** | Nowhere as a phrase. **"isolation" returns 2 hits, both in LO 4(j)**: *"geographical **isolation**"* and *"behavioural or physiological **isolation**"*. Loses the phrase, keeps the biology, and the outcome names three of the school's own barrier categories |
| **prezygotic** / **postzygotic** | **0** each | Nowhere under any spelling, hyphenated or not. The barriers themselves are carried by LO 4(j)'s named isolation types |
| **phylogeny / phylogenetic** | **2** | LO 4(k): *"define **phylogeny** as the organisation of species to show their evolutionary relationships"*; LO 4(l): *"the use of genome sequences in reconstructing **phylogenetic** relationships"* |
| **phylogenetic tree** | **0** | Nowhere as a phrase, although "phylogenetic relationships" is in LO 4(l) and tree reading is how those relationships are presented. **Loses the phrase, keeps the biology, and the specimen tested it twice** |
| **cladistics / clade** | **0** each | Nowhere. Also zero for synapomorphy, plesiomorphy, monophyletic, outgroup |
| **molecular clock** | **0** | Nowhere. The **assumption** behind it is carried by LO 4(l)'s "reconstructing phylogenetic relationships", and Specimen P3 Q1(c) is built on it |
| **homologies / homologous / homology** | **3** | All in LO 4(g): *"evidence based on **homologies** identified in biochemical data (molecular **homologies**) and the fossil record (anatomical **homologies**)"* |
| **analogous / analogy** | **0** | Nowhere. See the ruling below |
| **convergent / divergent evolution** | **0** each | Nowhere |
| **Lamarck** | **0** | Nowhere. The Core Idea 4 content list says *"The neo-Darwinian revolution"*, which implies the pre-Darwinian contrast without naming it |
| **Darwin** | **2** | LO 4(g): *"corroborate **Darwin's** theory of evolution"*; and the content list's *"The neo-**Darwinian** revolution"* |
| **antibiotic resistance** | **0** | Nowhere in Core Idea 4. LO 4(b) says "with **examples**" without naming any. (Antibiotic resistance is named in Extension Topic A, Infectious Diseases) |
| **industrial melanism** | **0** | Nowhere. Also zero for "peppered moth". Same ruling as antibiotic resistance |
| **heterozygote advantage** | **0** | Nowhere as a phrase. **But LO 4(e) says "explain how genetic variation (including harmful recessive alleles) may be preserved in a natural population", which is the mechanism described without the name.** Loses the phrase, keeps the biology, and this is the most consequential such case in the Book |
| **sickle** | **1** | **LO 2(l), in Core Idea 2**: *"explain how gene mutations can result in diseases (including **sickle cell anaemia**)"*. **Zero hits in Core Idea 4.** See the cross-Book ruling below |
| **malaria** | **1** | Extension Topic B, LO (i) on global warming and mosquito-borne disease. Not an evolution outcome |
| **gene flow** | **0** | Nowhere. Carried by LO 4(d) and, implicitly, by LO 4(j), since blocking gene flow is what a barrier does |
| **speciation** | **3** | LO 4(j) twice, plus the curriculum framework map *"Species & Speciation"* |
| **species** | **6** | Core Idea 4 content list; LOs 4(h), 4(i), 4(j), 4(k) |
| **population** | **4** | LO 4(d), LO 4(e), LO 4(n), plus the Core Idea heading text |
| **variation** | **10** | Highest count of any Core Idea 4 term. LO 4(a), LO 4(e), the content list, plus seven hits in other Core Ideas |
| **mutation** | **11** | LO 4(a) in Core Idea 4; the rest in Core Idea 2 |
| **genome sequences** | **1** | LO 4(l): *"the importance of the use of **genome sequences** in reconstructing phylogenetic relationships"* |
| **multiple sequence alignment** | **1** | LO 4(l): *"including **multiple sequence alignment** (nucleotide and amino acid)"* |
| **classification** | **2** | LO 4(i): *"define biological **classification**"*; LO 4(l): *"in **classifying** organisms"* |
| **biogeography** | **1** | LO 4(g) |
| **Wallace** | **1** | LO 4(g): *"together with biogeography (supported by **Wallace's findings**)"* |
| **fossil** | **3** | LO 4(g) *"the **fossil** record (anatomical homologies)"*, plus the content list *"Evidence of evolution"* context |
| **descent with modification** | **1** | LO 4(f): *"define biological evolution as **descent with modification**"* |
| **micro-evolution / macro-evolution** (**hyphenated**) | **1 each** | LO 4(f): *"explain the link between **micro-evolution** and **macro-evolution**"*. **Unhyphenated "microevolution" and "macroevolution" both return zero. This is a false-negative pair of exactly the same kind as Hardy-Weinberg** |
| **adaptive radiation** | **0** | Nowhere, under any spelling |
| **extinction / mass extinction** | **0** each | Nowhere |
| **binomial / nomenclature (of species) / Linnaeus** | **0** each | Nowhere. "Nomenclature" returns 3 hits but all three are the syllabus's general note about scientific conventions on p.14, nothing to do with naming species |
| **taxonomy / taxa / genus / kingdom** | **0** each | Nowhere |
| **fitness** | **0** | Nowhere |
| **vestigial** | **0** | Nowhere |
| **coevolution** | **0** | Nowhere |
| **artificial selection / selective breeding** | **0** each | Nowhere |
| **diploidy** | **0** | Nowhere. Carried by LO 4(e)'s "including harmful recessive alleles", which is precisely the diploidy argument |
| **polymorphism / balanced polymorphism** | **0** each | Nowhere. Carried by LO 4(e). **Note: 9477 Specimen P1 Q25 is built entirely on the word "polymorphism"** and uses it four times in the stem, so a zero syllabus count does not mean a candidate will not meet the word |

### Three false negatives that would have cost you the Book, and how they were caught

**The single most important methodological point in this build.** Four of the terms above return zero on
their obvious spelling and are nonetheless central to the syllabus.

1. **`Hardy-Weinberg` with a hyphen returns 0. `Hardy–Weinberg` with an en dash returns 3.** The syllabus
   uses an en dash throughout. Had this build reported the hyphenated zero, it would have cut **two of
   the fourteen outcomes**, including the Book's only calculation outcome and the one node the specimen
   put on Paper 1. This is the Book 7 equivalent of Book 3's `crossing-over` finding, and it is worse,
   because the hyphen and the en dash are visually near-identical.
2. **`microevolution` and `macroevolution` unhyphenated both return 0. `micro-evolution` and
   `macro-evolution` each return 1**, in LO 4(f). The whole macroevolution strand hangs on that hyphen.
3. **`reproductive isolation` returns 0, but `isolation` returns 2**, both in LO 4(j), covering
   geographical, behavioural and physiological isolation. The concept is fully examined under three
   different names.
4. **`allele frequency` returns 0, but LO 4(n) says "the frequencies of alleles"**, which is the same
   thing with the words separated.

### Two lists, as required

**List A: genuinely gone. No outcome carries these, under any wording, and nothing in Core Idea 4 implies
them.**

- **Adaptive radiation** and **mass extinction** as nodes in their own right (chapter 7.4 §§4.5.1 and
  4.5.2, five pages). Nothing in LO 4(f) reaches them. They survive only as illustration.
- **Binomial nomenclature**, the eight-rank taxonomic hierarchy as content, and **Linnaeus** (chapter 7.4
  §4.4.2 and most of §4.4, three pages). Learn the ranks once as vocabulary and stop.
- **The four non-biological species concepts** (chapter 7.4 §§4.1.2 to 4.1.5, three pages). LO 4(h) says
  "the biological concept", singular, and the school marks all four (FYI).
- **Vestigial structures** and **early embryonic development** as evidence (chapter 7.2 §§2.4.1 B and C,
  three pages). LO 4(g) names biochemical data and the fossil record only. Both are marked (SDL).
- **The fitness coefficient and selection coefficient arithmetic** (chapter 7.2 p.14 side box).
- **Coevolution and predator-prey arms races** (chapter 7.3 p.57).
- **Sexual selection** and **artificial selection** as named mechanisms.
- **Autopolyploidy against allopolyploidy as a labelled distinction**, colchicine, and the bread wheat
  AABBDD lineage (chapter 7.4 pp.90 to 94, four of the five polyploidy pages).
- **The distance-matrix formalism** (chapter 7.5 pp.123 to 125). Counting differences is required;
  building a symmetric matrix with a zero diagonal is not.
- **PhyloCode**, which the school itself marks as not in the syllabus.
- **The geological time scale** (Table 4.1, chapter 7.4 p.103).

**Total: roughly 22 pages of the Book's 129, about 17%.** That is a much smaller cut than Book 2's third,
and smaller than Book 3's 40% cut of one chapter. **Book 7's notes are unusually well aligned with 9477.**

**List B: loses the word, keeps the biology. The term is absent from the syllabus but the content is
fully examinable under a broader clause. Do not cut these.**

| Term with zero syllabus hits | The outcome that carries it | Evidence it is live |
|---|---|---|
| **genetic drift**, **founder effect**, **bottleneck effect** | LO 4(d), "explain why the population is the smallest unit that can evolve". Drift is the mechanism that makes population size matter, and it is the reason a small population is the one that evolves fastest | 145 of 1650 corpus records mention drift. **9477 Specimen P1 Q25 uses a bottleneck as a distractor**, described but not named |
| **gene pool**, **allele frequency** | LO 4(n) names "the frequencies of alleles... in a population". LO 4(d) is about the unit whose gene pool changes | 169 and 165 corpus records respectively |
| **gene flow** | LO 4(d), and LO 4(j), since a geographical barrier is defined by what it blocks | 176 corpus records |
| **heterozygote advantage**, **balanced polymorphism**, **diploidy** | **LO 4(e)**, "explain how genetic variation (**including harmful recessive alleles**) may be preserved in a natural population". That clause is the diploidy and heterozygote-advantage argument written without its names | **9477 Specimen P1 Q25 is a polymorphism-maintenance question.** 30 corpus records name heterozygote advantage, and four essay-scale stems ask for it directly |
| **reproductive isolation**, **prezygotic**, **postzygotic**, **RIMs** | LO 4(j) names geographical, behavioural and physiological isolation. Those are three of the school's own barrier categories | 83 corpus records |
| **phylogenetic tree**, **cladistics**, **clade**, **synapomorphy**, **outgroup** | LO 4(k) defines phylogeny; LO 4(i) says "describe how evolutionary relationship **is established**", which is what shared derived characters do; LO 4(l) covers reconstruction | 180 corpus records involve a tree. **The specimen tested relatedness reading twice, on P1 Q24 and P3 Q1(c)(ii)** |
| **molecular clock** | LO 4(l). The constant-rate assumption is what makes genome sequences usable for reconstructing relationships | **9477 Specimen P3 Q1(c) opens by explaining the molecular clock in its own stem text** |
| **analogy**, **convergent evolution**, **divergent evolution** | LO 4(g)'s homologies clause, and LO 4(i)'s "how evolutionary relationship is established", which requires sorting homology from analogy first | 83 and 58 corpus records. The school devotes chapter 7.5 §5.5.2 to it |
| **micro-evolution and macro-evolution unhyphenated** | LO 4(f), hyphenated. Not a scope question at all, purely a search artefact | |
| **peppered moth**, **industrial melanism**, **antibiotic resistance**, **MRSA** | **LO 4(b), "explain, with examples, how environmental factors act as forces of natural selection".** The outcome demands examples and names none, so the school's two named examples are the ones to have | Chapter 7.3 pp.50 to 52 |
| **polymorphism** | LO 4(e) | **The word appears four times in the 9477 Specimen P1 Q25 stem** |
| **fitness** as a word | LO 4(b) and 4(c) are written about differential survival and reproduction, which is what fitness means | It is the vocabulary the questions are phrased in, even though no outcome names it |

### The two questions this build had to settle

**Finding 1: Hardy-Weinberg is examinable, and the calculation is explicitly required, not optional.**

The evidence is unambiguous and there are four independent strands of it.

- **LO 4(m)** requires the model and its conditions. **LO 4(n)** is a separate outcome and it begins with
  the word "calculate": *"calculate the frequencies of alleles, genotypes and phenotypes in a population
  for a gene with two alleles, using the Hardy–Weinberg equation."* `[OFFICIAL]` Two of the fourteen
  outcomes in Core Idea 4, that is 14% of the outcomes, are Hardy-Weinberg.
- The syllabus's **Mathematical Requirements** section on page 25 prints the equation itself,
  `p2 + 2pq + q2 = 1`, in a list alongside the Ro value, the t-test and the chi-squared test.
  `[OFFICIAL]` The syllabus does not print equations it does not expect candidates to use.
- **9477 Specimen Paper 1 Question 25** put Hardy-Weinberg equilibrium on the paper, as the correct
  answer, in a conceptual form. `[OFFICIAL]` That confirms LO 4(m) is live and that it can be tested
  without any arithmetic at all.
- The bank's own **HCI Prelim 2024 P3 Q3(a)** is a three-mark calculation on flower colour in *Ipomoea
  purpurea*, asking for the **number** of heterozygous plants from 660 purple and 440 red, and it
  supplies both equations in the stem. `[SCHOOL]` That is the shape a calculation question takes.

**So both halves are required, and they are tested differently.** LO 4(m) is tested conceptually, as on
the specimen: which condition maintains a polymorphism, why does this fragmented population violate the
model, what would you conclude if observed and predicted frequencies differ. LO 4(n) is tested as
arithmetic, and the standard route enters through q² because the homozygous recessive phenotype is the
only one whose genotype can be read directly.

**The measurement that makes this urgent: the corpus holds 5 Hardy-Weinberg records out of 1650, which is
0.3%.** The main bank's own concept heading for it holds **three**. The corpus is 9744-era and
Hardy-Weinberg was not examined under 9744 the way it is under 9477. **This is the single largest
mismatch between the corpus and the syllabus anywhere in the Biology build to date, and it runs in the
opposite direction from every previous finding.** Every prior scope audit found the corpus testing
*more* than the syllabus requires. Here the corpus tests *far less*. **Hardy-Weinberg questions have to be
built, not harvested.** Give it its own cluster, drill both equations to fluency, and drill the five
conditions with a reason attached to each.

**Finding 2: the named selection types are examinable as biology but not as vocabulary, and the safest
reading is to know both.**

`directional selection`, `stabilising selection`, `stabilizing selection` and `disruptive selection` all
return **zero** syllabus hits under every spelling tried. `[OFFICIAL]` No Core Idea 4 outcome names any
mode of selection. The outcomes that could carry them are LO 4(b), "explain, with examples, how
environmental factors act as forces of natural selection", and LO 4(c), "explain the role of natural
selection in evolution". Both are about the process.

**What that means in practice:**

- **The shapes are required.** A question can hand you a distribution curve before and after a selection
  event and ask you to describe and explain the change. LO 4(b) and 4(c) cover that entirely without ever
  using the word "directional". Fifty-one per cent of the natural selection cluster is figure-led, so
  this is the modal question in that cluster.
- **The names are not required as recall.** No outcome asks you to define directional selection or to
  state which mode a curve shows. You will not be asked "name this type of selection" and lose a mark for
  not knowing the term, because no outcome supports that question under 9477.
- **But the names may still appear in a stem**, and 77 of 1650 corpus records use them, which is 4.7%.
  Three of the 37 essay-scale stems are built on them outright, including "Explain the three modes of
  natural selection and discuss which mode(s) of selection might lead to the formation of new species"
  [12] and "Describe, with named examples, how the three forms of natural selection bring about
  evolution" [10]. `[SCHOOL]`
- **The verdict.** Learn the three names, the three graph shapes and one named example each. That is
  about fifteen minutes of work and it protects against a stem that uses the vocabulary. **Do not build a
  cluster around them, do not drill the definitions, and do not spend time on which mode the school's
  various examples belong to** (particularly not on sickle cell, which the school misfiles anyway, see
  the trap model). The examinable skill is reading the curve and explaining the change, and that is
  covered by LO 4(b) and 4(c) whatever the mode is called. `[INFERRED]`, and this is a judgement rather
  than a quoted rule, so treat it as the lower-confidence of the two findings.

### Where sickle cell heterozygote advantage is examinable, stated plainly

**Two Books, two outcomes, two different asks, and both are live.**

- **In Book 2, under LO 2(l)**, *"explain how gene mutations can result in diseases (**including sickle
  cell anaemia**)"*. `[OFFICIAL]` This is the **only** place the word "sickle" appears in the entire 9477
  syllabus. There, the ask is the mutation: a single base substitution in the beta-globin gene changes
  one codon, changes glutamic acid to valine, changes the bonding and conformation of haemoglobin, causes
  polymerisation and sickling. That is a Book 2 answer and it belongs in Book 2's clusters.
- **In Book 7, under LO 4(e)**, *"explain how genetic variation (**including harmful recessive alleles**)
  may be preserved in a natural population"*. `[OFFICIAL]` "Sickle" does not appear in Core Idea 4 and
  neither does "heterozygote advantage" or "malaria". But LO 4(e) is a whole outcome about preserving a
  harmful recessive allele, and the sickle-cell allele in malarial regions is the canonical worked
  example of exactly that. **The biology is examinable here; the name is not handed to you.**

**So the ruling is: the case study is shared, the answer is not.** A Book 2 question asks how the
mutation causes the disease. A Book 7 question asks why the allele persists at high frequency despite
being lethal in homozygotes, and the answer is the two opposing selection pressures, strong selection
against HbS HbS because of sickle-cell anaemia and strong selection against HbA HbA in malarial regions
because of malaria, leaving the heterozygote fitter than either homozygote and therefore maintaining both
alleles in the population. The school teaches it in chapter 7.3 pp.53 to 55 and again on p.68.

**Two cautions.** First, the school files the Book 7 treatment under **stabilising selection** on p.53 and
under **balancing selection** on pp.67 to 68, and only the second is right. See the trap model. Second,
the corpus files 26 sickle-cell records and 30 heterozygote-advantage records in the Book 7 bank, plus
four essay-scale stems, so it is well tested despite the syllabus never naming it. `[SCHOOL]`

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **Multiple sequence alignment and relatedness ranking** (LO 4l). **This is the highest-value node in
   the Book.** The specimen tested it twice, on P1 Q24 as immunological distance and on P3 Q1(c)(ii) and
   (c)(iii) as a nucleotide alignment worth three marks with the method itself asked for. `[OFFICIAL]` The
   phylogeny cluster is the largest in the corpus at 311 records and 40% of them are tree or alignment
   reading. The drillable skill set is: count base differences across an alignment; rank species by
   count; explain that ranking as evidence of time since divergence; handle an insertion or deletion that
   shifts the alignment; and do the same on an amino acid sequence, which LO 4(l) names separately.

2. **The Hardy-Weinberg model and calculation** (LOs 4m, 4n). Two of fourteen outcomes, the equation
   printed in the syllabus's Mathematical Requirements, a specimen Paper 1 question, and **five corpus
   records.** `[OFFICIAL]` Build the questions. Cover both directions: given the recessive phenotype
   frequency, find carrier frequency; given allele frequencies, predict genotype numbers in a stated
   population size; given observed against expected, say which condition is violated and therefore which
   evolutionary process is acting.

3. **Speciation run on unfamiliar geography** (LO 4j). **9477 Specimen P2 Q8(a) was five marks, one
   undifferentiated part, command word Suggest, on a climate figure the candidate had never seen.**
   `[OFFICIAL]` Speciation is 53% figure-led in the corpus, the highest of any cluster. The drill is: hand
   over a map, a mountain profile, a river, a lake level, an island chain or a habitat mosaic and require
   the four stages to be run on it, ending at reproductive isolation. Never use the school's own examples
   in a drill question.

4. **The mechanism chain from environmental change to allele frequency change** (LOs 4b, 4c). Explain is
   40.6% of structured parts in this Book, the highest of any Book measured. The chain has five fixed
   links and each is a mark: variation exists in the population; the environmental factor acts as a
   selection pressure; individuals with the favourable phenotype survive and reproduce more; they pass on
   the alleles; the frequency of those alleles increases in the gene pool over generations. Drill it
   until it is automatic, then drill it on unfamiliar organisms, because Suggest is 18.5%.

5. **Preserving variation, including harmful recessive alleles** (LO 4e). A whole outcome, tested on the
   specimen through P1 Q25, and the single most-asked essay in the corpus with nine of the 37
   essay-scale stems. Diploidy and heterozygote protection first, because the outcome's own bracket
   points at it, then balanced polymorphism, heterozygote advantage with sickle cell, and
   frequency-dependent selection.

6. **Reading a phylogenetic tree, including what it cannot tell you** (LOs 4i, 4k). Root, node, branch,
   tip; most recent common ancestor by tracing back; rotation invariance; branching order is not absolute
   age; a taxon does not evolve from its neighbour. The three distractor patterns are the rotated tree,
   the tree read as a timeline, and adjacency read as ancestry, and all three come straight out of
   chapter 7.5 pp.112 to 113.

7. **Homology against analogy, point for point** (LOs 4g, 4i). **9477 Specimen P1 Q23 asked which of
   three listed pieces of evidence are based on homologies** and required the candidate to classify
   evidence they had not seen classified. `[OFFICIAL]` The bat wing against the bird wing on chapter 7.5
   p.116 is the worked case with the subtlety a good answer needs: the skeletons are homologous, the wings
   are not.

8. **Data-quoting discipline across the whole Book.** With 13.2% of structured parts opening "with
   reference to", 39% of the corpus figure-led, and the specimen's four-mark "Describe and explain the
   results shown in Figure 1.2", this is a cross-node skill worth its own drill set: describe the trend,
   quote two values with units, then account for it.

### Low yield, and the honest findings of this build

**Finding 1: the corpus under-tests Hardy-Weinberg by an enormous margin, and this reverses every prior
scope finding.** Measured:

- **5 of 1650 records (0.3%)** mention Hardy-Weinberg under any spelling. The main bank's concept heading
  for it holds **three records**.
- The bank's own coverage note flags it: it records that the two records that actually test the model are
  filed under `Biostatistics.md` rather than here, being **HCI Prelim 2024 P3 Q3(a)**, the *Ipomoea*
  calculation, and **HCI Prelim 2023 P3 Q1h**, on which conditions are violated in fragmented forest
  populations. `[SCHOOL]`
- The syllabus gives Hardy-Weinberg **two of fourteen outcomes** and prints the equation in its
  Mathematical Requirements.
- **The 9477 specimen put it on Paper 1.**

**Conclusion.** This is corpus drift running the opposite way from Books 2 and 3, where the corpus tested
dropped content. Here the corpus is missing a node the syllabus has added. Every Hardy-Weinberg question
in Ethan's drill sets has to be written, not harvested, and the two HCI prelim records should be pulled
across from `Biostatistics.md` and drilled alongside Specimen P1 Q25.

**Finding 2: about 17% of the Book has no outcome, which is a much better ratio than Book 2 or Book 3.**
Measured against the corpus:

- **Polyploidy** in all forms appears in **25 of 1650 records (1.5%)**, against five pages of notes.
- **Adaptive radiation** appears in 39 records (2.4%); **extinction** in any form in 94 (5.7%), though
  most of those are incidental uses of "extinct" rather than the mass-extinction node.
- **Binomial nomenclature and the taxonomic hierarchy** in 52 records (3.2%).
- **Cladistics vocabulary** in 70 records (4.2%).
- **The four non-biological species concepts** in 27 records (1.6%).
- **Vestigial structures** in 16 (1.0%); **embryological homology** in 20 (1.2%).
- **Sexual selection** in 6 (0.4%); **coevolution** in 2 (0.1%).

Adding the non-overlapping ones gives roughly **13% of the corpus testing content with no 9477 outcome**,
against Book 3's 23% in one file and 30% in another, and Book 2's third. **Book 7 is the cleanest Book
measured so far on syllabus alignment**, and the contamination that exists is concentrated in chapter
7.4's second half, which is easy to skip wholesale.

**Finding 3: nodes that are low frequency but should not be dropped.**

- **Wallace.** Named in LO 4(g) in the phrase "supported by Wallace's findings", and mentioned in **6 of
  1650 records (0.4%)**. The outcome names him and the corpus almost never does. Know the Wallace Line and
  know that he is the father of biogeography, which is two sentences.
- **LO 4(d), the population as the smallest evolving unit.** A whole outcome, and its concept heading in
  the main bank holds **34 records**, the smallest of the eight. Build questions.
- **Multiple sequence alignment as a named process.** 17 records (1.0%), and it is named in LO 4(l) and
  was the substance of the specimen's biggest Book 7 block on Paper 3.
- **Genome sequences.** 5 records (0.3%), and LO 4(l) opens with "the importance of the use of **genome
  sequences**".
- **The link between micro-evolution and macro-evolution, LO 4(f).** Not separately counted in the corpus
  because it has no concept heading, and it is half of an outcome. Chapter 7.4 §4.5.3 is the source.
- **The four limitations of the biological species concept.** LO 4(h) says "and its limitations", and the
  species-concept heading holds only 42 records with 24% of them plain recall. Four discrete marks
  available for four memorised lines.

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with all
  fourteen Core Idea 4 outcomes read verbatim from page 19 and reproduced in §0, the Mathematical
  Requirements read from page 25, the Scheme of Assessment read from page 9, plus a whole-document
  literal term search under multiple spelling variants for §5. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477
  OFFICIAL)/`), read end to end and counted question by question and part by part. `[OFFICIAL]`
- The school's own **Book 7 chapter PDFs** (`Study Agent/Bio/Book 7 - Biological Evolution/`), 5
  chapters, 129 pages, full text plus visual reading of every image-only page. `[SCHOOL]`
- The **question bank** at `Study Agent/Bio/_question_bank/Biological_Evolution.md` plus its overflow,
  **1650 real questions** with mark schemes reproduced verbatim where a key existed. `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery
ratings and self-jotted confusions, not content. They were excluded deliberately, per the subject guide
§3.0 and rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | ~97% `[OFFICIAL]` | Nodes derive directly from fourteen LOs read verbatim from a single syllabus page, and every letter and wording was cross-checked against all five chapter headers with no offset error found. This is the strongest scope position of any Biology Book built so far, because Book 7 maps one-to-one onto one Core Idea |
| Exam format | ~95% `[OFFICIAL]` | All four specimen papers counted directly, part by part. Book 7's presence on each paper is a count, not an estimate |
| Archetype frequency | ~80%, **measured** | n=1650 real questions parsed and classified. The residual uncertainty is not sampling error, it is that the corpus is 9744-era, and here that matters more than usual because 9477 **added** the Hardy-Weinberg outcomes and the corpus predates them |
| Mark scheme logic | ~72% `[SCHOOL]` **capped** | Every scheme is a JC prelim. SEAB publishes no 9477 mark scheme and the specimen papers arrive without one. **This section is weaker than Book 3's**, because Book 7's corpus files fewer verbatim reject lines and six of the fourteen marking points are `[INFERRED]` from the school's emphasis rather than quoted |
| Trap model | ~85% `[SCHOOL]` | Nine entries are corroborated directly by the 9477 specimen or the syllabus, and a further four by internal contradictions in the school's own notes. Weaker than Book 3's ~90% because fewer entries quote a verbatim reject line |

**Honest ceiling: ~84% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Books 2 and 3:**

1. **No learning-outcome labelling error to work around.** All fourteen letters and all fourteen wordings
   match the syllabus.
2. **One Book, one Core Idea.** Neither Book 2 nor Book 3 had this. It removes an entire class of scope
   error, because there is no question about which Core Idea a node belongs to.
3. **The corpus is the least contaminated measured so far**, at roughly 13% out-of-scope against Book
   3's 23% to 30% in two files and Book 2's third.
4. **The school's notes are more reliable.** The digest flags 38 findings, of which **three are genuine
   conceptual errors on examined outcomes**, nine are factual errors or overreaches that touch no
   outcome, one is a labelling defect, and the remaining twenty-five are cross-references, captions,
   numbering and spelling. Book 3's digest flagged 45 findings including roughly a dozen genuine
   factual errors on a Book half this length.

**What is specifically weaker:**

1. **The corpus is missing a whole node.** Hardy-Weinberg is two of fourteen outcomes and 0.3% of the
   corpus. No previous Book had a syllabus addition this large going unrepresented, and it means the
   archetype distribution in §2 systematically understates calculation.
2. **The mark scheme section is thinner.** Book 3's guide could quote a dozen verbatim reject lines from
   reproduced schemes. Book 7's corpus carries fewer, and several marking points here are inferred from
   the school's typographic emphasis, which is weaker evidence.
3. **No stated exclusions to work with.** Core Idea 4 contains not one bracketed "not required" clause,
   unlike Core Ideas 2 and 3. Every scope cut in §5 is an argument from absence, which is inherently
   weaker than quoting an exclusion. The two-list format exists to make that weakness explicit.
4. **No measured student success rates**, the same gap Books 2 and 3 reported. The trap ranking in §4 is
   by scheme frequency, syllabus weight and specimen corroboration, not by observed failure rate.

**Genuinely thin evidence, stated plainly:**

- **Whether the named selection modes can be asked for by name.** §5 finding 2 concludes they cannot, on
  the ground that no outcome names them. That is an argument from absence and three prelim essay stems
  argue the other way. The recommendation to learn the names cheaply and not drill them is a hedge, not a
  verdict.
- **Paper 4.** Book 7 had zero presence on the specimen practical and the bank holds **2 records** tagged
  to P4 across the whole Book. There is no bench technique in Core Idea 4, so the only plausible route is
  data handling and statistics on evolutionary data, which the Mathematical Requirements section supports
  by naming the Hardy-Weinberg equation alongside the t-test and chi-squared test. `[OFFICIAL]` **No
  corpus evidence exists either way.** Do not build a practical cluster; flag it for the October practical
  block.
- **How much of chapter 7.4's macroevolution half survives.** The cut of §§4.5.1 and 4.5.2 rests on zero
  syllabus hits for adaptive radiation and mass extinction, and on the reading that LO 4(f)'s
  macroevolution clause is about the **link** rather than about the phenomena. That is `[INFERRED]`. One
  HCI prelim essay asks directly for "mechanisms that trigger adaptive radiation and mass extinctions",
  which is evidence the school thinks otherwise. If in doubt, hold the two definitions and the one-line
  link that mass extinction empties adaptive zones which surviving lineages then radiate into, which
  costs almost nothing.
- **Whether polyploidy counts as "physiological isolation" under LO 4(j).** It plausibly does, since a
  polyploid cannot form fertile hybrids with its diploid parent for a physiological reason, in the same
  place. The recommendation to keep a three-line version rather than cut it entirely reflects that
  uncertainty. No specimen question and no prelim scheme in the corpus settles it.
- **The corpus and the specimen disagree about paper distribution.** The corpus is 51.7% Paper 2, the
  highest of any Book, but the specimen gave Book 7 only a single 5-mark Paper 2 part and put most of its
  Book 7 marks in Paper 3. One paper against fourteen years of prelims. Trust neither alone.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the
most likely mispredicting dimension is **archetype weighting**, not scope. The corpus says 32% data
interpretation and 26% mechanism chain, but the specimen's Book 7 marks were dominated by **sequence
alignment and relatedness reading**, an archetype the corpus files at only 11.6%. Re-measure §2's
archetype split against §2.0's specimen counts first, and push drill sets further towards alignment and
tree work before changing anything else.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 3 Question 1 parts (b)(ii)
through (d)(ii)** sat cold, which is 12 marks in about 15 minutes, followed by **Specimen Paper 2
Question 8(a)** at 5 marks in about 7 minutes and **Specimen Paper 1 Questions 23, 24 and 25**. Between
them they cover LOs 4(g), 4(h), 4(l) and 4(m) in the examiner's own words, and they test all three of the
Book's dominant archetypes: sequence and relatedness reading, data interpretation, and a five-mark
Suggest run on unfamiliar geography.
