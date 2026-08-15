---
subject: Biology
level: H2
topic: Book_6_Inheritance
syllabus_code: 9477
type: quantitative   # OVERRIDE on the subject default of qualitative. This is the first Bio Book where
                     # the override runs the other way: most of the Book is a PROCEDURE executed to an
                     # answer (genetic diagram, ratio prediction, chi-squared test), and those close by
                     # solving variants until mechanical, not by writing a concept doc. Three sub-strands
                     # stay qualitative and close by re-test at a new angle: the LO(u) terminology block,
                     # LO(cc) continuous vs discontinuous variation, and LO(bb) environment and phenotype.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~85% MIXED. [OFFICIAL] ~96% on scope (all 10 LOs (u)-(dd) read verbatim from the syllabus PDF, cross-checked against both chapter headers, zero mismatches, plus a whole-document literal term search); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part) but the sample is thin, Book 6 supplied only 12 clear marks across four papers; [SCHOOL] ~80% on marking (JC prelim schemes only, no SEAB scheme exists for 9477); archetype frequencies MEASURED by parsing 1637 real questions, not estimated"
last_updated: 2026-08-15
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 6: Inheritance

> Specialises the subject guide to Book 6. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in
> this folder before building any cluster. Book 6's notes are more accurate than Book 3's but far
> more over-scoped, and §5 below is where that is quantified.

> **Read this line before anything else.** Book 6 is the first Biology Book that is **procedural**.
> Most of its marks are earned by executing a method to a fixed layout, not by explaining a mechanism.
> On the 9477 specimen, eight of the eleven Book 6 marks on Paper 2 were procedural. Study it the way
> you study H2 Maths.

---

## 0. Scope boundary (get this right before anything else)

**Book 6 sits entirely inside Core Idea 2 and carries its last ten learning outcomes, (u) to (dd).**
Both chapters print "Core Idea 2" in the footer and both are correct. `[OFFICIAL]` LO map,
`[SCHOOL]` chapter split.

| School chapter | Core Idea | 9477 LO(s) printed | Pages | Note |
|---|---|---|---|---|
| 6.0 Inheritance I Overview | 2 | none printed | 1 (A3) | A routing map, not a teaching chapter. The most useful single page in the Book |
| 6.1 Inheritance I | 2 | **(u), (v), (w), (x), (y), (z), (bb)** | 47 | Sections 9.4 and 10.1 are the over-scope |
| 6.2 Inheritance II | 2 | **(x), (aa), (cc), (dd)** | 27 | Shortest chapter in the Book and the densest in marks |

**There is no letter-offset error anywhere in Book 6.** Every letter the school prints matches the
published syllabus exactly. The only wording discrepancy in 74 pages is that the school prints LO
2(bb) as "the effect of diet on differentiation of **honey bees**" where the syllabus prints
"**honeybees**" as one word. `[OFFICIAL]`

**(x) is printed in both chapters and covered fully by neither.** 6.1 gives you codominance, multiple
alleles, sex linkage and autosomal linkage. 6.2 gives you epistasis. A candidate who reads 6.1 and
stops has covered six and a half outcomes out of ten.

### Verbatim 9477 Learning Outcomes for Book 6

Reproduced word for word from `inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`,
pages 15 and 16. Candidates should be able to: `[OFFICIAL]`

**Core Idea 2, Genetics and Inheritance**

**(u)** explain the terms: locus, allele, dominant, recessive, codominant, homozygous, heterozygous,
phenotype, genotype and linkage

**(v)** explain how genes are inherited from one generation to the next via the germ cells or gametes

**(w)** explain how genotype is linked to phenotype

**(x)** use genetic diagrams to solve problems in dihybrid crosses, including those involving
codominance, multiple alleles, sex linkage, autosomal linkage and epistasis

**(y)** use genetic diagrams to solve problems involving test crosses

**(z)** explain the meaning of the terms linkage and crossing-over and explain the effect of linkage
and crossing-over on the phenotypic ratios from dihybrid crosses

**(aa)** describe the interaction between loci (epistasis) and predict phenotypic ratios in problems
involving epistasis (knowledge of the expected ratio for various types of epistasis is not required;
focus of this section is on problem solving)

**(bb)** explain how the environment may affect the phenotype, using examples including the effect of
diet on differentiation of honeybees

**(cc)** explain the difference between genetic variation that is continuous (many, additive genes
control a characteristic) and genetic variation that is discontinuous (one or a few genes control a
characteristic)

**(dd)** use the chi-squared test to test the significance of differences between observed and
expected results.

Core Idea 2 then closes with the standing instruction: *"Use the knowledge gained in this section in
new situations or to solve related problems."* `[OFFICIAL]`

The Core Idea 2 **content list** on syllabus p.13 names the same ground in five bullets: *"The
passage of information from parents to offspring"*, *"Genotypes and phenotypes"*, *"Dihybrid
crosses"*, *"Linkage and crossing-over"*, *"Interaction between loci"*, *"The effect of genotype and
environment on the phenotype"*. `[OFFICIAL]`

### The second official home of the chi-squared test

LO 2(dd) is not the only place 9477 examines chi-squared. The **Mathematical Requirements** section
on syllabus p.25 carries it again, and this passage is more useful than the outcome because it tells
you what arrives with the paper. Quoted verbatim: `[OFFICIAL]`

> "Candidates should know how to apply a t-test and a chi-squared test. t-tests are of value in much
> of Biology, while the chi-squared test allows the evaluation of the results of breeding experiments
> and ecological sampling."
>
> "Candidates are **not** expected to remember the following equations or what the symbols stand for.
> They are expected to be able to use the equations to calculate standard deviations, to test for
> significant differences between the means of two small unpaired samples and to perform a chi-squared
> test on suitable data from genetics or ecology. **Candidates will be given access to the equations,
> the meaning of the symbols, a t-table and a chi-squared table.**"
>
> χ² test: **χ² = Σ (O − E)² / E**, **v = c − 1**
>
> Key to symbols: "**n** = sample size (number of observations)", "**v** = degrees of freedom",
> "**O** = observed 'value'", "**E** = expected 'value'", "**c** = number of classes"
>
> "**χ² tests will only be expected on one row of data.** Candidates should have a brief understanding
> of what is meant by the term normal distribution and appreciate levels of significance. (Tables will
> be provided.) **Questions involving the use of a t-test or χ² test may be set on Papers 1, 2 and 3.
> Questions involving an understanding of the use of the tests may be set on Paper 4, but detailed
> computation will not be required.**"

Four consequences, and each one changes what to drill:

1. **The formula and the table are given.** Nothing about χ² is a memory test. What is tested is
   whether you can identify the classes, compute the expected numbers from a ratio, and read the
   table on the right row.
2. **v = c − 1, and c is the number of classes.** The school's notes write "df = n − 1". See §4.
3. **χ² can appear on P1, P2 or P3, and in a reduced form on P4.** It is the only Book 6 content with
   an explicit licence to appear on all four papers.
4. **"Only one row of data"** rules out contingency tables. Every χ² you will ever be set is a
   single list of phenotypic classes against a single expected ratio.

### The one exclusion the syllabus states outright

There is only one, and it is worth more than all of Book 3's put together. `[OFFICIAL]` LO 2(aa):

> "(knowledge of the expected ratio for various types of epistasis is **not** required; focus of this
> section is on **problem solving**)"

The school's chapter 6.2 spends pages 15 and 16 on a table of seven modified F2 ratios. The outcome
says do not learn them. §5 works out exactly what that cuts and, more importantly, what it does not.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 6, grouped by the cluster that should teach it. Convergence
requires no UNTOUCHED node. LO letters are `[OFFICIAL]`. Each node is tagged **`[M]`** for method or
**`[C]`** for concept, because the two are studied differently: a method closes by solving variants
until the layout is automatic, a concept closes by explaining it at a new angle.

### Cluster 01, the language and the layout (LOs u, v, w, y)

- [ ] **`[C]` The ten named terms of LO 2(u)**: locus, allele, dominant, recessive, codominant,
      homozygous, heterozygous, phenotype, genotype, linkage. Ten terms, no more, in the school's own
      wording. The corpus punishes definitions given out of context and definitions that swap gene for
      allele.
- [ ] **`[C]` Genotype to phenotype (2w)**: allele, transcribed, translated, polypeptide with a
      specific 3D conformation, enzyme, metabolic step, trait. This chain is the spine of every
      epistasis answer in Cluster 04, so it is worth over-learning here.
- [ ] **`[C]` Inheritance via gametes (2v)**: alleles occur in pairs in a diploid cell, only one of
      each pair enters a gamete, segregation happens at anaphase I, fertilisation restores the pair.
      This outcome has no section of its own in the notes. See the digest.
- [ ] **`[M]` The seven-step genetic diagram**, with every row label and both notation conventions.
      Digest cross-chapter finding 3 has the full layout. **This is the highest-value node in the
      Book.**
- [ ] **`[M]` Gametes circled, phenotypes stated, genotype paired to phenotype.** Presentation rules,
      each of which is a separate mark in the corpus schemes.
- [ ] **`[M]` The test cross (2y)**: what it is for, who you cross with, and how to read the answer.
      Monohybrid: all dominant means homozygous, 1:1 means heterozygous. Dihybrid: all four cases.
- [ ] **`[C]` The three assumptions behind any predicted ratio**: random fertilisation, equal survival
      of offspring, large sample. This is the answer to "suggest why observed differs from expected"
      and it bridges straight into Cluster 05.

### Cluster 02, dihybrid crosses and the modified monohybrid ratios (LOs x, y)

- [ ] **`[M]` The unlinked dihybrid cross**: 4 × 4 Punnett square, 9:3:3:1 in F2, 1:1:1:1 in the test
      cross. These two numbers are the reference points every other ratio is a deviation from.
- [ ] **`[C]` Mendel's second law and why it fails for linked genes**: independent assortment moves
      whole chromosomes, so alleles on the same chromosome move as one entity.
- [ ] **`[C]` `[M]` Codominance (2x)**: both alleles equally expressed in the heterozygote, both gene
      products present, superscript notation, 1:2:1 in both genotype and phenotype. Distinguish from
      incomplete dominance, which produces a **blend** and no distinct classes.
- [ ] **`[C]` `[M]` Multiple alleles (2x)**: three or more alleles, only two per diploid individual,
      the ABO system with six genotypes and four phenotypes, I^A and I^B codominant and i recessive to
      both.
- [ ] **`[M]` Combining a modification with a second gene.** LO 2(x) frames every one of codominance,
      multiple alleles, sex linkage, autosomal linkage and epistasis as something a **dihybrid** cross
      may involve. Two-gene problems where one gene is codominant, or one is sex-linked and one
      autosomal, are the shape to expect, not one-gene problems.
- [ ] **`[C]` Lethal alleles.** Low priority. See §5, the word has no syllabus hit. Keep the
      *reasoning* (a missing genotypic class shrinks the denominator, giving 2:1 rather than 3:1),
      drop the term.

### Cluster 03, sex linkage and pedigree analysis (LOs u, v, x, y)

- [ ] **`[C]` Sex determination**: 22 autosome pairs plus one sex pair, homogametic female,
      heterogametic male, and the fact that the sperm determines sex.
- [ ] **`[C]` Sex linkage defined**: genes carried on the sex chromosomes, in practice the X, because
      the Y is short and carries few genes.
- [ ] **`[C]` Hemizygosity**, and why it makes X-linked recessive conditions far commoner in males.
      A male is neither homozygous nor heterozygous at an X locus.
- [ ] **`[M]` Superscript notation on X and Y**, and the rule that an X-linked phenotype row must state
      **sex as well as trait**.
- [ ] **`[C]` The transmission rules**: an affected father gives the allele to every daughter and no
      son; sons get their X only from the mother; a carrier mother gives 50% of sons the condition.
- [ ] **`[M]` The reciprocal cross as a test for X-linkage.** Reciprocal crosses give **non-identical**
      results for X-linked traits and **identical** results for autosomal ones. This is the only clean
      experimental-design node in Book 6.
- [ ] **`[M]` Reading a pedigree: the four criteria sets.** Autosomal recessive, autosomal dominant,
      X-linked recessive, X-linked dominant, each as its printed list of "recessive because" and
      "autosomal because" reasons. Note the scope caveat in §5.
- [ ] **`[M]` Assigning genotypes from a pedigree**, including deducing which individuals must be
      carriers and computing a probability for an unborn child.

### Cluster 04, linkage, crossing over and epistasis (LOs x, z, aa)

- [ ] **`[C]` Linked genes defined (2u, 2z)**: genes controlling different characters, on the same
      chromosome, at different loci. The corpus rejects "alleles on the same chromosome".
- [ ] **`[C]` Autosomal linkage specifically**: both halves needed, on the same chromosome **and** that
      chromosome not a sex chromosome. Explicit reject in the corpus for giving only one half.
- [ ] **`[M]` Linkage notation**, the two-line form with one chromosome's alleles above the other's.
      A corpus scheme penalises two separate marking points for not using it.
- [ ] **`[C]` `[M]` Complete linkage**: no crossing over, only parental gametes, F2 gives 3:1 and the
      test cross gives 1:1.
- [ ] **`[C]` `[M]` Incomplete linkage**: crossing over at a chiasma between **non-sister** chromatids
      during prophase I, four classes, parentals in the majority and recombinants in the minority, no
      fixed ratio.
- [ ] **`[C]` Why recombinants are the minority**: crossing over between two specific loci is rare, it
      happens in only some cells, and even then only two of the four chromatids are involved.
- [ ] **`[M]` The three-way detection rule.** Given test-cross data: 1:1:1:1 means unlinked; two
      classes at 1:1 means completely linked; four classes with a parental majority means incompletely
      linked. **This is 9477 Specimen P1 Q18 exactly.** `[OFFICIAL]`
- [ ] **`[C]` Distance and recombinant frequency**: the further apart two loci, the likelier a
      crossover between them, so the larger the recombinant fraction. Keep this; drop the centimorgan
      arithmetic. See §5.
- [ ] **`[C]` Gene interaction versus dihybrid inheritance (2aa)**: two genes to **one** character
      against one gene to one character each. The single idea that makes epistasis make sense.
- [ ] **`[C]` Epistasis, epistatic gene, hypostatic gene (2aa)**, and the contrast with complete
      dominance: epistasis is between **different** loci, dominance is within **one** locus.
- [ ] **`[M]` Solving an epistasis problem from first principles (2aa)**: identify which genotype at
      which locus does the suppressing, work out which phenotypic classes therefore merge, read off
      the ratio. **Not** recall of 9:3:4, 12:3:1 or 9:7.
- [ ] **`[C]` The biochemical basis of any epistatic interaction**: which allele encodes which
      functional enzyme, which step of the pathway is blocked, which product is therefore absent. A
      corpus scheme says "Penalise once if no reference to enzyme".
- [ ] **`[M]` Reverse inference from an observed ratio to a mechanism**, including ratios the notes
      never taught. The chapter concedes this by heading its last three rows "Other ratios not covered
      in lecture (potentially new scenarios)".

### Cluster 05, variation, environment and the chi-squared test (LOs bb, cc, dd)

- [ ] **`[C]` Continuous versus discontinuous variation (2cc)**, on all six axes the notes use:
      observable phenotype, number of genes, effect of environment, mode of measurement, type of
      analysis, examples. The outcome supplies the causes in its own words: "many, additive genes"
      against "one or a few genes".
- [ ] **`[C]` Polygenic inheritance**: multiple genes acting additively, each with an effect too small
      to detect alone. The word is not in the syllabus but the definition is. See §5.
- [ ] **`[C]` Which statistical test goes with which variation type**: discontinuous data are counts
      and ratios, analysed by χ²; continuous data give a mean and standard deviation, analysed by a
      t-test. The 6.2 front concept map states this and it is the cleanest bridge in the Book.
- [ ] **`[C]` Environment and phenotype (2bb)**: honeybee diet and royal jelly by name, plus elevation,
      soil acidity and light as alternates.
- [ ] **`[C]` Sources of genetic variation**: crossing over, independent assortment, random
      fertilisation, and that none of them makes a **new allele**. Only mutation does, and only a
      germline mutation is heritable.
- [ ] **`[M]` The five-step chi-squared procedure (2dd)**, in order and with the fixed conclusion
      sentence. **`[type: quantitative]`** Close this by solving variants until mechanical.
- [ ] **`[M]` Computing expected numbers from a stated ratio.** The step candidates skip. 9:3:3:1 on
      380 grains means 9/16 × 380, not "about 216".
- [ ] **`[M]` v = c − 1, with c read as the number of phenotypic classes.** Its own drill item because
      of the documented gap. See §4.
- [ ] **`[M]` Reading the probability table**: row by degrees of freedom, column by level of
      significance, default α = 0.05.
- [ ] **`[M]` The conclusion, in the accepted wording**, both branches.
- [ ] **`[M]` Testing two competing hypotheses against one data set**, which is what 6.2's Worked
      Example 6 does and the highest-order thing χ² is asked to do.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part from all four **9477 specimen papers**
(`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only
genuinely Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**,
so everything here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Book 6 landed on the specimen

| Paper | Book 6 questions | Book 6 marks (clear) | With statistics crossover | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | **Q18** clear. Q25 uses inheritance vocabulary, answer is Core Idea 4 | 1 | 1 | 3.3% |
| **P2** Structured (90 marks) | **Q4 entire (11)** | 11 | 11 | 12.2% |
| **P3** Section A (55) + Section B (20) | **none** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | none clear. **Q2(e)(i) and (ii) (5)** is a statistical-test question, t-test not χ² | 0 | 5 | 0% to 10% |

Applying the official paper weightings of 15%, 30%, 35% and 20% `[OFFICIAL]` (syllabus p.9),
**Book 6 was worth roughly 4.2% of the whole A-level on the specimen, rising to about 6.2% if the
Paper 4 statistics question is counted as adjacent.** Compare Book 3 at 13% to 16% and Book 2 at 8%
to 11% measured the same way.

**Say plainly what that means, because it is the most important number in this guide.** On the one
official paper set that exists, Book 6 was the smallest of the three Books measured so far, and it
was completely absent from Paper 3, which is the highest-weighted paper at 35%. The school corpus
tells a very different story: Inheritance is the second-largest topic file in the whole question bank
at 1,544 records. **Both statements are verified and they cannot both be a good guide to November.**
The honest reading is in §6.

### What the specimen actually asked (the useful detail)

**Paper 1, Question 18. `[OFFICIAL]`** Reproduced because it is the only clear Book 6 MCQ in
existence and it fixes the archetype:

> "A pure-breeding tomato plant with the dominant phenotype of the gene Q/q and recessive phenotype of
> the gene R/r was crossed with another pure-breeding tomato plant with the recessive phenotype of the
> gene Q/q and the dominant phenotype of the gene R/r.
>
> A test cross was carried out with the offspring of this cross. The results are shown.
>
> - 33 plants phenotypically dominant for Q/q and recessive for R/r
> - 8 plants phenotypically dominant for Q/q and R/r
> - 7 plants phenotypically recessive for Q/q and R/r
> - 35 plants phenotypically recessive for Q/q and dominant for R/r
>
> What explains these results?
>
> A autosomal linkage  B dihybrid inheritance  C epistasis  D incomplete dominance"

Five things follow and all five change how to drill.

1. **The answer is autosomal linkage, and the distractors are the other three named mechanisms in
   LO 2(x).** The examiner built the question by listing the outcome's own vocabulary and making you
   choose. That is the cleanest possible signal about what LO 2(x) means in practice.
2. **The candidate has to notice the parental arrangement is repulsion.** The P cross is QQrr × qqRR,
   so the F1 heterozygote carries Q with r on one chromosome and q with R on the other. The two large
   classes (33 and 35) are therefore Q r and q R, and the two small ones (8 and 7) are the
   recombinants. A candidate who assumes coupling reads the data backwards.
3. **No genetic diagram is drawn and no ratio is stated.** The whole question is the three-way
   detection rule applied to four numbers. 68 parental against 15 recombinant is not 1:1:1:1, and it
   is not two classes either, so it is incomplete autosomal linkage.
4. **Epistasis is a distractor here, not the answer.** Epistasis merges classes; it does not skew four
   classes while keeping all four present.
5. **Incomplete dominance is a distractor even though the word never appears in the syllabus.** You
   have to know what it is in order to rule it out. This is the clearest instance in the Book of
   scope that a hit-count search would wrongly delete.

**Paper 2, Question 4, the Book 6 anchor. Eleven marks, four parts**, opening on a self-pollinated
maize plant that produced 380 grains in four phenotypes. `[OFFICIAL]`

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | **Draw a genetic diagram** to show the genotype of the isolated plant and how self-pollination could produce the expected 9 : 3 : 3 : 1 ratio, using supplied symbols A/a and B/b | **4** | **2(x)** |
| (b) | **Calculate** the percentage of the purple, smooth grains expected to grow into true-breeding plants, using your own diagram | 1 | 2(x), 2(u) |
| (c) | **Complete** the χ² table: expected numbers from the ratio, two missing (O−E)²/E cells, and the χ² total | 3 | **2(dd)** |
| (d) | Use your χ² value and the printed probability table to **conclude** whether the observed numbers differ significantly, and **explain your conclusion** | 3 | **2(dd)** |

Six structural facts, each of which should change a drill set.

1. **Four of the eleven marks are for the genetic diagram itself.** Not for the ratio, which the stem
   already supplies. The candidate is told what the answer is and paid to lay out the working.
2. **The symbols are given.** "Use these symbols to represent the alleles: A purple, a yellow, B
   smooth, b shrunken." So the "Let ... represent ..." step was pre-empted, which means the four marks
   sit in the parental genotype, gametes, Punnett square and offspring rows.
3. **Part (b) is a one-mark trap that depends entirely on part (a).** Of the nine purple smooth grains
   in the F2, only AABB is true breeding, so the answer is 1/9, which is 11.1%. A candidate who reads
   "1/16 of all grains" gets it wrong. This is the specimen's version of "show correlation between
   genotype and phenotype", because you cannot answer it from a ratio alone, only from a completed
   square.
4. **The χ² equation is printed on the paper** as χ² = Σ (O − E)²/E, and **v = c – 1 is printed on the
   paper** with "v = degrees of freedom, c = number of classes". Neither is a memory test. The 4-class,
   3-degrees-of-freedom judgement is.
5. **Two of the five (O−E)²/E cells were pre-filled at 0.024 and 0.639.** So the marks in (c) are for
   the expected-number row, the two remaining cells, and the sum. Working with a partly filled table
   is itself a skill.
6. **Part (d) is worth 3 marks for a conclusion**, which fixes it at three separate points: the
   critical value at the right degrees of freedom, the comparison, and the verdict in terms of
   significance and chance. **The words "null hypothesis" appear nowhere in the question.**

**A printing discrepancy in the specimen itself, which you should know about before you sit it.**
`[OFFICIAL]`, verified by rendering page 12 as an image. Table 4.1 gives the observed counts as
purple smooth 216, purple shrunken 78, **yellow smooth 65, yellow shrunken 21**, total 380. Table 4.2,
the working table you are told to complete, gives the same first two but **yellow smooth 55, yellow
shrunken 31**, total 380. The two tables disagree on two of the four classes. Working from Table 4.2,
as the instruction directs, gives χ² ≈ 6.58; working from Table 4.1 gives χ² ≈ 1.53. Both are below
the 7.81 critical value at v = 3, so the conclusion is the same either way and no candidate is
sunk. **Complete the table you are told to complete.** `[INFERRED]` on the arithmetic.

**Paper 3.** Zero Book 6 content across Section A and Section B. The three Section A questions were
mitochondrial DNA and phylogeny, carbon sequestration in urban trees, and lymphoid stem cells. The two
Section B essay options were "the different roles of proteins in living organisms" and "different ways
in which molecules can enter cells", both Book 1. **A candidate who had studied only Book 6 had no
essay to write and no Section A part to answer.** `[OFFICIAL]`

**Paper 4.** No Book 6 content. The nearest thing is Q2(e), five marks, which shows a student's stomatal
density result for sun and shade leaves with a significance column reading p < 0.05, asks the candidate
to **state a statistical test** that could have been used (a t-test, comparing two means) and then to
**comment on what the results show and suggest an explanation**. That is the syllabus's "questions
involving an understanding of the use of the tests... but detailed computation will not be required"
clause, made concrete. `[OFFICIAL]` Read it as evidence that **interpreting p < 0.05** is a
cross-paper skill worth its own drill, separate from computing χ².

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in the Book 6 topic files of the question bank at
`Study Agent/Bio/_question_bank/`, plus their overflow files. Every record is a real question off a
real paper, which is a JC prelim, an HCI topical bank, a timed practice paper or a November A-level
paper. Sources span 2011 to 2025 plus the 9477 specimen.

### Sample size

| Bank file | Main bank | Overflow | Total | Counted as Book 6? |
|---|---|---|---|---|
| Inheritance | 1000 | 544 | **1544** | all |
| Biostatistics, **chi-squared concept only** | 65 | 28 | **93** | yes, LO 2(dd) |
| Biostatistics, other concepts (t-test, standard deviation, rates, microscopy, experimental design, reading p values, Hardy-Weinberg) | 235 | 53 | 288 | **no**, Mathematical Requirements and Paper 4 skills, not a Core Idea 2 outcome |
| **Book 6 corpus** | **1065** | **572** | **1637** | |

**n = 1637 real questions** for every frequency below. 1,925 records were read in total; 288 were
excluded as out of Book 6 scope with the reason stated. `[SCHOOL]` corpus, measured counts.

Note that the Inheritance main bank is a quota-limited curated selection capped at 1000, and the
overflow holds the remainder, so the combined figure is the truer frequency measure and is the one
quoted. Where the curated bank disagrees materially it is flagged.

### Format split

| Measure | Main banks (n=1065) | Full Book 6 corpus (n=1637) |
|---|---|---|
| MCQ | 28.4% | **26.8%** |
| Structured | 71.6% | **73.2%** |
| Figure, table, pedigree or data-set led | 52.5% | **51.1%** |

Difficulty tiering as the bank labels it: base 14.5%, harder 37.0%, hardest **48.4%**. That hardest
share is the highest of any Book measured and it is not an artefact: a genetics question is easy to
make hard by adding a second gene or an unexpected ratio, so the bank's compilers had a lot of
material to grade upward.

Paper of origin across the full corpus: **P2 51.2%, P1 36.3%, P3 12.2%, P4 0.2%.**

**Three format findings worth acting on.**

First, **51.1% of Book 6 questions are led by a figure, a table or a raw data set**, and this is a
different kind of "figure-led" from Book 3's. Book 3 handed you a pathway diagram or a micrograph.
Book 6 hands you **counts**: offspring numbers in a table, a pedigree chart, a Southern blot, a
frequency distribution. The skill is arithmetic and inference on those counts, not description.

Second, **P2 at 51.2% is where this Book lives**, and the specimen agrees: the only extended Book 6
question was P2 Q4. P3 at 12.2% in the corpus against 0% on the specimen is the largest single
disagreement between the two evidence sources.

Third, **26.8% MCQ is high in absolute terms**, and the reason is structural: a cross with four
offspring counts fits comfortably in an MCQ stem, which is exactly what Specimen P1 Q18 is. Expect one
to three Book 6 MCQs on Paper 1.

### Command-word census (structured questions only, n = 1198)

| Command | Count | Share |
|---|---|---|
| **Explain** | 452 | **37.7%** |
| (no command verb, usually a completion or a data-and-diagram stem) | 205 | 17.1% |
| **State** | 122 | **10.2%** |
| **Draw** | 88 | **7.3%** |
| **Suggest** | 83 | **6.9%** |
| Calculate | 47 | 3.9% |
| Determine | 39 | 3.3% |
| Complete | 28 | 2.3% |
| Describe | 27 | 2.3% |
| Identify | 16 | 1.3% |
| Define | 14 | 1.2% |
| Construct | 14 | 1.2% |
| Name | 13 | 1.1% |
| Deduce | 11 | 0.9% |
| Distinguish | 10 | 0.8% |
| Account for / with reference to / comment | 15 | 1.3% |
| Outline / justify / predict / discuss / compare / evaluate | 16 | 1.3% |

**Explain at 37.7% is the highest single-command share of any Book measured**, and it is nearly double
Book 3's 19.9%. That is not because Book 6 is more explanatory; it is because the stock Book 6 stem is
*"Explain why the offspring do not show the expected ratio"* or *"Explain the results of this cross"*.
The command is Explain but the task is **inference from data**, and the mark scheme is a chain of
deductions, not a mechanism.

**Draw plus Construct plus Complete is 10.8%**, and that is a category Book 3 did not have at all. One
structured part in nine asks you to **produce a diagram or fill a table**. There is no reading-based
substitute for practising this.

**"With reference to" is almost absent at 0.4%**, against 13.3% in Book 3. Book 6 does not ask you to
quote a figure; it asks you to compute from one. Do not import Book 3's data-quoting drill wholesale.

### Content archetypes

Each question classified into exactly one primary archetype by first-matching rule.

| Archetype | Full corpus (n=1637) | Main bank (n=1065) | What it demands |
|---|---|---|---|
| Unclassified | 23.1% | 24.4% | Almost all of these are short MCQ stems that present a cross and ask "which..." with no command verb. Functionally they belong to the two archetypes below them |
| **`[M]` Genetic diagram construction** | **14.1%** | 13.0% | Lay out the full seven rows to the school's format. Marks are per row |
| **`[M]` Ratio, genotype or probability prediction** | **13.0%** | 13.4% | Forward inference: given genotypes, produce the expected ratio, a genotype, or a probability |
| **`[M]` Pedigree analysis** | **12.8%** | 16.0% | Assign genotypes, name the mode of inheritance, compute a probability for an unborn child |
| **`[C]` Deduce inheritance pattern / explain deviation** | **12.6%** | 14.2% | Reverse inference: given an unexpected ratio, name the mechanism and justify it |
| **`[M]` Chi-squared execution** | **12.4%** | 6.0% | Five steps to a conclusion |
| Definition / recall | 2.9% | 4.1% | LO 2(u)'s ten terms, in context |
| **`[C]` Continuous vs discontinuous / environment** | 2.8% | 3.3% | LO 2(cc) and 2(bb) |
| `[M]` Recombination and mapping calculation | 2.5% | 1.5% | COV, map distance, gene order. See §5 |
| Data / figure interpretation | 2.1% | 2.1% | Describe a trend without a cross behind it |
| Compare / distinguish | 1.1% | 1.1% | |
| Other calculation | 0.4% | 0.3% | |
| Evaluate / discuss / essay | 0.2% | 0.2% | |

**Read the top five together, because the split matters more than the individual numbers.**
Genetic-diagram construction plus ratio prediction plus pedigree analysis plus chi-squared execution
is **52.3% of the Book, and every one of those four is a method.** Add the reverse-inference archetype
at 12.6% and you have 65% of Book 6 in five buckets, four of which are drilled by doing and one of
which is drilled by arguing.

**Forward and reverse inference are different skills and the corpus tests both.** Forward: here are
the genotypes, predict the ratio (13.0%). Reverse: here is the ratio, name the mechanism (12.6%).
Almost every candidate drills forward and neglects reverse, and **Specimen P1 Q18 is a reverse
question.** `[OFFICIAL]` Build them in a 1:1 ratio, not 4:1.

### Archetype by concept heading (Inheritance main bank, where headings exist)

The overflow files carry no concept headings, so this table covers the 1000 curated Inheritance
records only.

| Concept heading | n | Figure-led | MCQ | Dominant archetype |
|---|---|---|---|---|
| Sex linkage and pedigree analysis | 246 | **76%** | 35% | Pedigree analysis 57% |
| Epistasis and gene interaction | 220 | 38% | 25% | Ratio prediction 17%, reverse inference 17% |
| Test crosses, autosomal linkage and crossing over | 209 | 47% | 17% | **Genetic diagram construction 27%** |
| Environment, phenotype, continuous versus discontinuous | 172 | 49% | **43%** | Reverse inference 23%, variation 19% |
| Genetic terminology and inheritance through gametes | 95 | 34% | 22% | Ratio prediction 17%, definition 15% |
| Multiple alleles and codominance | 43 | 65% | 30% | Reverse inference 23%, diagram 21% |
| Dihybrid crosses and genetic diagrams | 15 | 20% | 33% | Ratio prediction 33% |

**Four things to act on.**

1. **Sex linkage and pedigrees is the largest concept in the Book at 246 of 1000, and it is 76%
   figure-led.** Three quarters of those questions put a pedigree chart or a data table in front of
   you. There is no way to prepare for this by reading.
2. **Epistasis is the second largest at 220**, which is out of proportion to its single learning
   outcome, and see §5 for how much of that 220 tests the excluded ratios.
3. **"Dihybrid crosses and genetic diagrams" holds only 15 records**, which looks like a gap until you
   notice that diagram construction is 27% of the linkage heading and 21% of the codominance heading.
   The diagram is not a topic; it is the vehicle every other topic arrives in.
4. **The environment and variation heading is 43% MCQ**, the highest of any concept. LO 2(bb) and
   2(cc) are cheap outcomes that get tested in one-mark bites.

### Essay presence: the sharpest contrast with Book 3

Counting distinct question parts worth 10 marks or more across the Book 6 corpus:

- **9 essay-scale stems in 1637 records, which is 0.55%.** Book 3's corpus had 44.
- Every one of the nine is on **variation**, not on crosses. The recurring stems, verbatim:
  - "Explain why the offspring produced by the same parents are different in appearance." [15] RI Prelim 2024 P3 Q4(a)
  - "With reference to examples, explain how phenotype is linked to genotype and the environment." [15] MI Prelim 2023 P3 Q5(b)
  - "Describe and explain the difference between continuous and discontinuous genetic variation." [10] RI Prelim 2021 P3 Q5(b)
  - "Despite selection pressures selecting for certain phenotypes, some phenotypes continue to persist in a population. Explain how both genetic and environmental factors bring about variation." [various] TJC Prelim 2023 P3 Q5(a), CJC Prelim 2022 P3 Q5(b)
  - "In the human population, different combinations of phenotypes are observed in each individual, except identical twins. Explain how variation arises." CJC Prelim 2021 P3 Q5(b)
  - "The genotype of an organism is not always directly expressed in the phenotype..." HCI Prelim 2017 P3 SecB Q4(b)
  `[SCHOOL]`

**The pattern is unmistakable and it is useful.** You cannot write an essay about a Punnett square.
The only essay-shaped material in Book 6 is **variation: where it comes from, and how genotype and
environment together produce a phenotype.** That is LOs 2(w), 2(bb) and 2(cc), and it reaches
backwards into Book 3's meiosis and forwards into Core Idea 4's natural selection. Prepare exactly one
bridge, not five: **sources of variation, from meiosis and fertilisation through mutation to
environmental modification, with examples at each step.**

**The honest tension, stated as plainly as in the Book 3 guide.** The corpus files nine essay-scale
Book 6 stems, all on variation. The official specimen gave Book 6 no essay and no Section A presence
at all. One essay bridge is proportionate preparation. Five is not.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers
> in the corpus arrive without one. Every marking claim below is `[SCHOOL]`, distilled from JC prelim
> schemes reproduced verbatim in the question bank. They are expected to be broadly representative of
> Cambridge house style, not identical to it. Quoted reject and accept lines are verbatim from those
> schemes.

### 3.1 The genetic diagram is marked by row, and the layout is the mark scheme

This is the single fact that distinguishes Book 6 from every other Book. Four schemes in the corpus
set out their marking points and all four allocate by **row of the diagram**, not by correctness of
the final ratio. One representative allocation, verbatim: `[SCHOOL]`

> "1. **Correct parental phenotypes**; 2. **Correct parental genotypes**; 3. **Correct offspring
> genotypes (for all 4)**; **penalise under MP2 & MP3 if linkage notation not used**; 4. **Correct
> offspring phenotypes (for all 4)**;"

Another prints the tolerance on the paper itself:

> "**Correct F2 genotypes: all = 1m, ≥2 mistakes: 0m. Correct F2 phenotype ratio: all = 1m,
> ≥2 mistakes: 0m.**"

And a third names the gamete condition explicitly:

> "Gametes: L^T and L^R from one parent, L^T and L^R from the other **[1 mark, awarded for correct
> gametes and circling of the gametes]**"

Read together, that is a marking model with four properties: **each labelled row is worth its own
mark**; **one error in a row is survivable and two is not**; **circling gametes is a condition of the
gamete mark, not decoration**; and **notation errors can strike two marking points at once**.

### 3.2 A ratio without phenotypes scores nothing

Two schemes state it in different words. One: *"**compulsory to see phenotypes, not just the
numbers**"*. Another rejects an answer written as *"1:1:1:1 with no phenotypes"*. This is the school's
own step-7 note enforced: "It is important to show correlation between genotype & phenotype."
`[SCHOOL]`

### 3.3 Allele symbols are policed, and wrong symbols cost the mark even when the biology is right

The reject lines in the corpus, verbatim: *"Reject: different symbols used"*; *"penalised if the
correct symbols are not used"*; *"Reject: d and l"*; *"**Reject: if symbols for blood groups are wrong
/ if colourblindness is not represented as sex-linkage**"*; *"[Reject: if symbol A, B and O is used to
represent gene for colour vision]"*. `[SCHOOL]` Note the last two are from the same two-gene question:
using the same letters for two different genes is an automatic loss. When a question supplies symbols,
as Specimen P2 Q4 does, use those and no others. `[OFFICIAL]`

### 3.4 Gene and allele are not interchangeable, and the schemes reject the swap in both directions

- Linkage is between **genes**, not alleles: *"Reject: alleles found on the same chromosome"*.
- Autosomal linkage needs **both** halves: *"R: reference must be made to the **genes being on the same
  chromosome**, and to that chromosome **not being a sex chromosome**"*, and separately
  *"Reject: just saying that the two loci are linked"*.
- The reciprocal error is recorded in an examiner comment on a definition question: many candidates
  *"incorrectly referred to '**homozygous alleles**' instead of genes/genotype"*. `[SCHOOL]`

### 3.5 A definition must be given in the context of the question

Two examiner comments make this a general rule for LO 2(u), and it is the commonest one-mark loss in
the Book.

> "This question was poorly done. Most students correctly mentioned 'homozygous' but **did not define
> it in the context of the question**."

> "students who failed to do so often lost marks for **using back the root word 'autosome' from the
> question stem** in their answers rather than using their own words to illustrate the meaning."
> `[SCHOOL]`

So "pure-breeding" is not "homozygous"; it is "homozygous at both gene loci coding for colour of
leaves and texture of fruit". And "autosomal" is not "on an autosome"; it is "the genes for body
colour and wing shape are not located on a sex chromosome".

### 3.6 Naming the mechanism is not enough; the mechanism has to be run

Three separate rejects make the same point at three different nodes. `[SCHOOL]`

- **Linkage**: *"**Reject if only describing crossing over or the exchange of non-sister
  chromatids**"*. The mark is for the consequence, that parental classes outnumber recombinant ones
  and the 1:1:1:1 fails, not for the event.
- **Epistasis**: *"[**Reject: recessive/dominant epistasis**]"* on a question whose answer was a
  duplicate interaction, and *"(Accept: dominant epistasis; **Reject: Recessive epistasis**)"* on a
  12:3:1. Naming the wrong subtype is worse than naming none. And the enzyme step is compulsory:
  *"**Penalise once if no reference to enzyme**"*.
- **Pedigree**: *"(**Reject: 'individual must be homozygous recessive'** because recessive is not
  explained)"*. The expected form is two clauses: "**Autosomal**, because males and females are equally
  affected", "**Recessive**, because it requires both alleles to be defective before the child is
  phenotypically affected".

### 3.7 Independent assortment has one accepted name and one rejected one

*"Ref. independent assortment occurs (**Reject: random assortment**)"*. The full-mark version names
the stage: *"random arrangement of the alleles of one gene pair at the metaphase plate during
metaphase I... independent of the alleles of the other gene pair"*. `[SCHOOL]`

### 3.8 Polygenic answers need "additive", and the phrasing is policed

*"Combined effect of multiple genes / polygenes. **Reject: multiple additive genes**"* followed by
*"They act on the phenotype in an **additive** manner"* as a separate marking point. The word additive
belongs to the **action**, not to the genes. A separate scheme rejects *"combinations of genes /
genetic combinations"* where **combinations of alleles** is wanted. `[SCHOOL]`

### 3.9 Naming a variation type has an accepted word and two common wrong ones

*"**Continuous.** Reject: normal distribution, stabilising selection."* Describing the shape of the
curve is not naming the type of variation. `[SCHOOL]`

### 3.10 Chi-squared conclusions have a fixed three-part shape, and every part is a mark

Reconstructed from the schemes, which agree closely with each other and with the school's own
chapter 6.2 page 24. The full-credit conclusion has three components. `[SCHOOL]`

1. **State the critical value at the right degrees of freedom**, in the form χ²crit, v = 3, α = 0.05
   = 7.81. One scheme prints the full form: *"χ²calc = 2097.836 is greater than χ²crit at p = 0.05,
   **v = 3, which is 7.815**"*.
2. **Make the comparison explicitly**, greater than or less than.
3. **Give the verdict in terms of probability and chance**, then the biological conclusion. The
   accepted wording, verbatim from two schemes:
   - Significant: *"The probability that chance alone is the reason for the difference between
     observed and expected results is **less than 5%**"*, *"The deviation is significant"*, *"**reject
     H0 in favour of HA**"*, and then the biology: *"the observed results do not fit the expected
     1:1:1:1 test cross phenotypic ratio / do not follow Mendelian inheritance"* or *"the genes are
     linked / not on different chromosomes"*.
   - Not significant: *"the probability that chance alone is the reason for the difference... is
     **more than 5%**"*, *"The deviation is not significant"*, *"**do not reject H0**"*.

**Three things this wording settles.** `[SCHOOL]`

- **Say "do not reject H0", never "accept H0".** Every scheme in the corpus that words the negative
  branch words it this way.
- **"Due to chance" on its own is rejected.** One scheme states it flatly: *"reject 'due to chance'
  alone"* and *"Reject: reject accuracy, and reject 'due to chance' on its own"*. The full phrase is
  "the probability that chance alone is the reason for the difference is greater than 5%".
- **The biological conclusion is a separate mark from the statistical one.** Finishing at "not
  significant" leaves the last mark on the table. The examiner wants "therefore the genes are
  linked", or "therefore the data are consistent with a single pair of segregating alleles".

An examiner comment names the exact failure mode Ethan has logged: candidates *"cited an incorrect
χ²crit value from the table **due to the wrong degrees of freedom**, or gave contradictory statements,
and lost credit"*. `[SCHOOL]`

### 3.11 Command-word discipline, as it bites in this Book specifically

*Explain*, at 37.7% of structured parts, almost always means **infer from the data and justify each
step**, not "describe a mechanism". *Draw a genetic diagram* means all seven rows with gametes circled.
*State* on a genotype question means the genotype in the question's own symbols. *Calculate* means show
the fraction, since Specimen P2 Q4(b) is one mark for a percentage derived from a 4 × 4 square.
*Complete* means fill the printed table and nothing else. *Suggest*, at 6.9%, signals there is no recall
answer, which in Book 6 almost always means an organism, a trait or a ratio you have never seen.
`[OFFICIAL]` glossary meanings, `[SCHOOL]` marking behaviour.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented
distractors. Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477
specimen, and the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Memorising the seven modified epistasis ratios** | Assumes 9:3:4, 12:3:1, 9:7, 9:6:1, 15:1 and 13:3 are recall items because the school tabulates them across two pages | Hours on a table the outcome excludes in writing, and a candidate who freezes on a ratio not in the table. **This is the largest single cut in Book 6** | LO 2(aa) `[OFFICIAL]` |
| **Studying chromosome mapping, cM and gene ordering** | Follows chapter 6.1 §9.4's five pages and three breeding experiments | "Linkage map", "chromosome map", "map unit", "centimorgan", "crossover value", "COV" and "recombination frequency" all return **zero** syllabus hits, and no outcome asks for a distance or an order | 9477 syllabus grep verified `[OFFICIAL]` |
| **Studying the phenotypic variance equation** | Sees V_P = V_G + V_E opening chapter 6.1 §10 | "Variance" returns **zero** syllabus hits. No outcome, and 0% of the corpus | 9477 syllabus `[OFFICIAL]` |
| **Learning coupling and repulsion as terms** | Sees them boxed on 6.1 p.38 | Zero syllabus hits for either. The **arrangement** is unavoidable and load-bearing; the two Latin names are not | 9477 syllabus `[OFFICIAL]` |
| **Learning to state Mendel's laws by name** | Sees both laws given their own numbered sections | "Mendel", "segregation" and "independent assortment" all return **zero** syllabus hits. The *biology* is required by LOs 2(v) and 2(z); the *attribution* is not | 9477 syllabus `[OFFICIAL]` |
| **Building a lethal-allele node** | Sees a whole section and a 2:1 ratio | "Lethal" returns zero syllabus hits and the node is 0.4% of the corpus. The **reasoning** (a missing class shrinks the denominator) transfers from any problem-solving question | 9477 syllabus `[OFFICIAL]` |
| **Preparing five variation essays** | Sees nine essay-scale stems in the corpus | The specimen gave Book 6 zero Section B options and zero Section A presence. One rehearsed bridge is proportionate | 9477 Specimen `[OFFICIAL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **v = n − 1 with n read as sample size** | Learns "df = n – 1" from 6.2 p.23, where n means classes, then meets a stem where n means observations | v = 379 instead of 3 on the specimen maize question, an unreadable critical value, and the conclusion mark lost with it. An examiner comment names this exact failure: candidates "cited an incorrect χ²crit value from the table due to the wrong degrees of freedom" | 9477 syllabus symbol key and Specimen P2 Q4(d) `[OFFICIAL]`, school notes 6.2 p.23 `[SCHOOL]` |
| **Assuming coupling when the parents were in repulsion** | Reads a linked heterozygote as AB/ab by habit | Reverses parental and recombinant classes and inverts the whole answer. **9477 Specimen P1 Q18** is built on repulsion: the P cross is QQrr × qqRR | 9477 Specimen `[OFFICIAL]` |
| **Calling a skewed four-class result epistasis** | Knows epistasis modifies ratios and stops there | Epistasis **merges** classes so one or more disappears; linkage keeps all four and skews them. Distractor C on Specimen P1 Q18 | 9477 Specimen `[OFFICIAL]` |
| **Confusing codominance with incomplete dominance** | Treats "not simple dominance" as one category | Codominance shows **both** phenotypes distinctly in the heterozygote, as separate red and white hairs in a roan coat; incomplete dominance blends to an intermediate. Explicit reject in the corpus: *"Reject incomplete dominance"* on a speckled-chicken cross. Incomplete dominance is also distractor D on Specimen P1 Q18 | schemes `[SCHOOL]`, Specimen `[OFFICIAL]` |
| **Fig. 6 of chapter 6.2 read as written** | Copies the caption's "genotype aa prevents any deposition of pigment and the mouse will be white" | Inverts the epistasis: in that Concept Check **bb** gives albino and **aa** with a dominant B gives **black**. The stem three lines above and the diagram directly above both say so | school notes 6.2 error, digest §5.1 `[SCHOOL]` |
| **The Case 1 map on chapter 6.1 p.42** | Copies the diagram's arrow placement | Labels the eyes-to-wings interval 18.5 cM when the text below predicts it as 12.5 cM. Only matters if mapping is studied at all, which §5 argues against | school notes 6.1 error, digest §5.1 `[SCHOOL]` |
| **Fig. 16 of chapter 6.1 read as introduced** | Copies "Fig. 16 illustrates... sex-linked recessive inheritance" on p.31 | Reads an X-linked **dominant** pedigree as recessive. The caption on the same page says dominant | school notes 6.1 error, digest §5.2 `[SCHOOL]` |
| **"A homozygous dominant mother produces carrier daughters"** | Reads chapter 6.1 p.25's second broad principle out of its context | Only true when the **father is affected**. The rule that carries the mark is that an affected father makes all daughters carriers and no sons anything | school notes 6.1 error, digest §5.3 `[INFERRED]` |
| **Linkage described as alleles on the same chromosome** | Uses gene and allele interchangeably | Explicit reject: *"Reject: alleles found on the same chromosome"*. Linkage is between **genes** at different loci | linkage scheme `[SCHOOL]` |
| **Autosomal linkage defined with only one half** | Says "the genes are linked" and stops | Explicit rejects: *"Reject: just saying that the two loci are linked"* and *"reference must be made to the genes being on the same chromosome, and to that chromosome not being a sex chromosome"* | linkage schemes `[SCHOOL]` |
| **Crossing over described without its consequence** | Answers a linkage question by narrating prophase I | Explicit reject: *"Reject if only describing crossing over or the exchange of non-sister chromatids"*. The mark is for parentals exceeding recombinants and the 1:1:1:1 failing | linkage scheme `[SCHOOL]` |
| **Epistasis explained without an enzyme** | Says one gene masks another and stops | *"Penalise once if no reference to enzyme"*. The full answer names which allele encodes which functional enzyme and which pathway step is blocked | epistasis scheme `[SCHOOL]` |
| **Epistasis subtype named wrongly** | Guesses recessive or dominant from the ratio | *"Accept: dominant epistasis; **Reject: Recessive epistasis**"* on a 12:3:1, and *"Reject: recessive/dominant epistasis"* on a duplicate interaction. Naming the wrong subtype scores below naming none | epistasis schemes `[SCHOOL]` |
| **A definition given without the question's context** | Answers "explain what is meant by pure-breeding" with "homozygous" | *"Most students correctly mentioned 'homozygous' but did not define it in the context of the question"*, and *"lost marks for using back the root word 'autosome' from the question stem"* | examiner comments `[SCHOOL]` |
| **"Homozygous alleles"** | Attaches zygosity to alleles rather than to the organism or locus | Recorded examiner error. An organism is homozygous; alleles are identical | examiner comment `[SCHOOL]` |
| **"Random assortment" for independent assortment** | Reaches for the nearest word | Explicit reject: *"Reject: random assortment"* | dihybrid scheme `[SCHOOL]` |
| **"Multiple additive genes"** | Compresses two marking points into one phrase | Explicit reject. The accepted split is "combined effect of multiple genes / polygenes" **plus** "they act on the phenotype in an additive manner" | polygenic scheme `[SCHOOL]` |
| **"Combinations of genes"** where combinations of alleles is meant | Same gene-for-allele swap in a variation context | Explicit reject: *"Reject: combinations of genes / genetic combinations"* | variation scheme `[SCHOOL]` |
| **"Normal distribution" offered as a type of variation** | Names the graph rather than the phenomenon | Explicit reject: *"Continuous. Reject: normal distribution, stabilising selection"* | variation scheme `[SCHOOL]` |
| **"Sex-linked" for autosomal linkage** | Sees the word linkage and reaches for the familiar case | Explicit reject: *"Autosomal linked genes / autosomal linkage. (**Reject: sex-linked**)"*. Note the specimen answer is autosomal linkage | linkage scheme `[SCHOOL]`, Specimen `[OFFICIAL]` |
| **A pedigree conclusion without the reason** | Writes "autosomal recessive" and stops | *"Reject: 'individual must be homozygous recessive' because recessive is not explained"*. Two clauses required: what it is, and the pedigree feature that proves it | pedigree scheme `[SCHOOL]` |
| **"Accept H0"** | Treats failure to reject as acceptance | Every corpus scheme words the negative branch "do not reject H0" | χ² schemes `[SCHOOL]` |
| **"Due to chance" as a whole conclusion** | Compresses the probability statement | *"reject 'due to chance' alone"* and *"Reject: reject accuracy, and reject 'due to chance' on its own"* | χ² schemes `[SCHOOL]` |
| **Stopping at the statistical verdict** | Answers "not significant" and puts the pen down | The biological conclusion is a separate mark: therefore the genes are linked, or therefore the data fit a single pair of segregating alleles | χ² schemes `[SCHOOL]` |
| **A ratio given without phenotypes** | Writes 9:3:3:1 and moves on | *"compulsory to see phenotypes, not just the numbers"*, and *"Reject: 1:1:1:1 with no phenotypes"* | diagram schemes `[SCHOOL]` |
| **Uncircled gametes** | Treats circling as decoration | The gamete mark is awarded "for correct gametes **and** circling of the gametes" | diagram scheme `[SCHOOL]` |
| **Plain-pair notation used for linked genes** | Writes LlGg instead of the two-line form | *"penalise under MP2 & MP3 if linkage notation not used"*, so one habit costs two marks | linkage scheme `[SCHOOL]` |
| **Reusing the same letters for two genes** | Invents symbols instead of using the supplied ones | *"Reject: if symbol A, B and O is used to represent gene for colour vision"*, and *"Reject: different symbols used"* | two-gene schemes `[SCHOOL]` |
| **True-breeding fraction read off the ratio** | Answers "1/16 of the F2" for the true-breeding share of one phenotypic class | **Specimen P2 Q4(b)** asks for the percentage **of the purple smooth grains**, so the denominator is 9, not 16, and the answer is 1/9. You cannot get it from a ratio, only from the completed square | 9477 Specimen `[OFFICIAL]` |
| **Expected numbers estimated rather than computed** | Eyeballs "about 216" instead of 9/16 × 380 | Every downstream χ² cell is then wrong and the whole calculation collapses | Specimen P2 Q4(c) `[OFFICIAL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-document, on the 28-page PDF at
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the
outcome that carries it is quoted. **Every zero was re-searched in hyphenated, en-dashed, spaced and
closed form before being reported, and every zero was then checked against the surrounding outcomes to
see whether a broader clause carries the biology anyway.** The two verdict lists that follow the table
are the part that matters.

#### Separator re-audit, run after Book 7 caught an en-dash false negative

Book 7's build found that `Hardy-Weinberg` with a hyphen returns zero while `Hardy–Weinberg` with an
en dash returns three, which would have deleted two Core Idea 4 outcomes. Every multi-word and
eponymous Book 6 term was therefore re-run across **all eight dash-class characters present or
possible** (hyphen-minus, U+2010, U+2011, U+2012, en dash, em dash, horizontal bar, minus sign) plus
the spaced and closed forms, for 71 terms. `[OFFICIAL]`

**Result: nothing flipped. Not one Book 6 zero was an en-dash false negative.** The reason is
structural and worth recording so the check does not have to be repeated by guesswork: the 9477
syllabus text layer contains exactly **three** dash-class characters, and every en dash in the whole
document is accounted for. They appear in the exam board name (Singapore–Cambridge), in page ranges
and citation ranges, in three Core Idea content-list bullets used as sentence dashes, in
**enzyme–substrate complex** (Core Idea 1), in **ligand–receptor interaction** (Core Idea 3 LO m), in
**Hardy–Weinberg** three times (Core Idea 4 LOs m and n, and Mathematical Requirements), in the
standard-deviation note **sn–1**, and in a temperature range. **None of them is in a Core Idea 2
inheritance term.**

Book 6's separators turn out to be uniform and predictable: **chi-squared** and **crossing-over** are
always hyphenated and never spaced; **sex linkage**, **test cross**, **multiple alleles**, **autosomal
linkage**, **genetic diagram**, **germ cells** and **degrees of freedom** are always spaced and never
hyphenated; **codominant**, **codominance**, **discontinuous** and **honeybees** are always closed.
Searching only one form of any of those four groups deletes a live outcome component.

**One false positive caught in the same pass, worth noting because substring matching cuts both ways.**
A spaced search for `t test` returns one hit, which comes from the Paper 4 apparatus list phrase "corks
or rubber bungs to fit **t**est-tubes". The real count for the t-test is **4**, all hyphenated, all in
Mathematical Requirements, none in a Core Idea 2 outcome.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **chi-squared** | **6** | LO 2(dd): *"use the **chi-squared** test to test the significance of differences between observed and expected results"*; plus five hits in Mathematical Requirements, including *"the **chi-squared** test allows the evaluation of the results of breeding experiments and ecological sampling"* |
| **chi squared** (spaced), **chi–squared** (en dash), **chisquared** (closed) | **0** each | Always hyphenated, never anything else. **The hyphen matters.** |
| **χ2** | 4 | The equation block and the notes beneath it, including *"**χ2** tests will only be expected on one row of data"* |
| **degrees of freedom** | **1** | The symbol key: *"v = **degrees of freedom**"*, attached to *"v = c − 1"* and *"c = number of classes"*. Also printed three times on 9477 Specimen P2 Q4(d) |
| **null hypothesis** | **0** | Nowhere, in spaced, hyphenated, en-dashed or closed form. Also zero for "H0". See list B |
| **test cross** | **1** | LO 2(y): *"use genetic diagrams to solve problems involving **test crosses**"* |
| **testcross / test-cross** | **0** | Only the two-word form is used |
| **back cross / backcross / back-cross / back–cross** | **0** | Nowhere, in any spelling or separator |
| **dihybrid** | **3** | Core Idea 2 content list *"**Dihybrid** crosses"*; LO 2(x) *"solve problems in **dihybrid** crosses"*; LO 2(z) *"the phenotypic ratios from **dihybrid** crosses"* |
| **monohybrid** | **0** | Nowhere. See list B, this is the most important zero in the table |
| **codominant** | **1** | LO 2(u): *"explain the terms: locus, allele, dominant, recessive, **codominant**, homozygous..."* |
| **codominance** | **1** | LO 2(x): *"including those involving **codominance**, multiple alleles, sex linkage..."* |
| **multiple alleles** | **1** | LO 2(x), as above |
| **sex linkage** (spaced) | **1** | LO 2(x), as above |
| **sex-linkage** (hyphenated), **sex–linkage** (en dash), **sexlinkage** (closed) | **0** each | The syllabus never hyphenates it. **A hyphenated search deletes a named outcome component.** |
| **sex-linked / sex linked** | **0** | The adjective is never used, only the noun "sex linkage" |
| **autosomal** | **1** | LO 2(x): *"codominance, multiple alleles, sex linkage, **autosomal** linkage and epistasis"* |
| **autosome** | **0** | The noun never appears, only the adjective |
| **epistasis** | **4** | LO 2(x) once; LO 2(aa) twice, *"describe the interaction between loci (**epistasis**) and predict phenotypic ratios in problems involving **epistasis**"*; Core Idea 2 content list once as *"Interaction between loci"* |
| **epistatic / hypostatic** | **0** | The adjectives never appear. See list B |
| **linkage** | **6** | Core Idea 2 content list *"**Linkage** and crossing-over"*; LO 2(u) *"phenotype, genotype and **linkage**"*; LO 2(x) twice, for sex linkage and autosomal linkage; LO 2(z) twice, *"explain the meaning of the terms **linkage** and crossing-over and explain the effect of **linkage** and crossing-over on the phenotypic ratios"* |
| **crossing-over** (hyphenated) | **3** | Content list, and LO 2(z) twice |
| **crossing over** (spaced), **crossing–over** (en dash), **crossingover** (closed) | **0** each | **The syllabus only ever hyphenates it.** This is the same trap the Book 3 guide flagged and it is still live |
| **recombination frequency** | **0** | Nowhere, in any separator form. Also zero for "crossover value", "cross-over value", "cross–over value", "COV", "recombination fraction", "recombination frequencies" |
| **recombination** (alone) | 2 | Both outside Book 6: Extension Topic A's content list *"Genetic recombination"*, and LO A(d) *"explain how **somatic recombination**, hyper-mutation and class switching result in millions of different antibody molecules"* |
| **recombinant** | **0** | Nowhere. See list B |
| **linkage map / chromosome map / chromosome mapping / map unit / map units / gene map** | **0** | None of the six appears in any separator form |
| **centimorgan / centi-morgan / centi–morgan / cM** | **0** | Nowhere |
| **pedigree / pedigrees** | **0** | Nowhere. Also zero for "family tree" in every separator form. See list B |
| **lethal allele / lethal gene / lethal** | **0** | Nowhere, in any form or separator |
| **continuous variation** (as a phrase, in every separator form) | **0** | **But see LO 2(cc), which splits the phrase.** *"explain the difference between genetic variation that is **continuous** (many, additive genes control a characteristic)"* |
| **discontinuous variation** (as a phrase, in every separator form) | **0** | Same: *"and genetic variation that is **discontinuous** (one or a few genes control a characteristic)"*. Note the syllabus writes discontinuous **closed**, never as "dis-continuous" |
| **continuous** (alone) | 3 | LO 2(cc), plus two unrelated uses in the Paper 4 drawing conventions |
| **discontinuous** (alone) | **1** | LO 2(cc) only |
| **polygenic** | **0** | Nowhere. **But LO 2(cc) supplies the definition without the word:** *"many, additive genes control a characteristic"* |
| **additive** | **1** | LO 2(cc), as above |
| **locus** | **1** | LO 2(u) |
| **loci** | **2** | LO 2(aa) *"describe the interaction between **loci** (epistasis)"*, and the Core Idea 2 content list *"Interaction between **loci**"* |
| **allele** (any form) | **5** | LO 2(u), LO 2(x) "multiple alleles", LO 2(cc) is allele-free, plus two in Core Idea 4 |
| **dominant / recessive** | **2 each** | LO 2(u) only, in the list of ten terms |
| **homozygous / heterozygous** | **1 each** | LO 2(u) only |
| **phenotype** | **6** | LO 2(u), 2(w), 2(x) via ratios, 2(z), 2(aa), 2(bb) |
| **genotype** | **5** | LO 2(u), 2(w), 2(bb), plus the content list *"Genotypes and phenotypes"* and *"The effect of genotype and environment on the phenotype"* |
| **genetic diagram** | **2** | LO 2(x) and LO 2(y). **The only two places the syllabus names a method** |
| **Punnett square** | **0** | Never named. The method is "genetic diagram" |
| **gamete** | **1** | LO 2(v): *"explain how genes are inherited from one generation to the next via the germ cells or **gametes**"* |
| **germ cell** | **1** | LO 2(v), as above |
| **honeybee** | **1** | LO 2(bb): *"the effect of diet on differentiation of **honeybees**"*. Zero for the two-word "honey bee" that the school prints |
| **haemophilia / colour blind / Duchenne / blood group / ABO / MN** | **0** | None of the six appears. All are vehicles, not content |
| **Mendel / segregation / independent assortment** | **0** | None appears in any form |
| **incomplete dominance / partial dominance** | **0** | Nowhere, in any separator form. **But incomplete dominance is distractor D on 9477 Specimen P1 Q18.** See list B |
| **hemizygous / carrier / wild-type / true-breeding / pure-breeding** | **0** | None appears |
| **variance / standard error** | **0** | Nowhere. "Standard deviation" appears 4 times but only in Mathematical Requirements |
| **t-test** | **4** | Mathematical Requirements only, never in a Core Idea 2 outcome |
| **coupling / repulsion** | **0** | Neither appears |
| **penetrance / reciprocal cross / self-pollination** | **0** | None appears |

### List A: genuinely gone. No word, and no outcome carries the biology either

Cut these and do not look back. `[OFFICIAL]` in each case: zero hits in every spelling tried, and no
surrounding clause that requires the content.

1. **Chromosome mapping in full.** Linkage maps, map units, centimorgans, crossover value as a computed
   quantity, and the ordering of three genes from three pairwise values. Chapter 6.1 §9.4, five pages
   and three breeding experiments. **LO 2(z) asks for "the effect of linkage and crossing-over on the
   phenotypic ratios", and a phenotypic ratio is not a map distance.** This is the largest page-count
   cut in Book 6.
2. **The phenotypic variance equation, V_P = V_G + V_E.** Chapter 6.1 §10 opening. Zero hits for
   "variance" anywhere in 9477.
3. **Coupling and repulsion as named terms.** The arrangement itself stays, see list B.
4. **Lethal alleles as a named node.** Chapter 6.1 §5.3, and the recessive-lethal and dominant-lethal
   distinction. 0.4% of the corpus.
5. **Back crosses.** Zero in every spelling. LO 2(y) says test crosses.
6. **Stating Mendel's laws by attribution.** The syllabus never names Mendel, segregation or
   independent assortment. What the laws *say* is required; whose they are is not.
7. **The Latin and Greek apparatus of epistasis**: "epistatic", "hypostatic", "duplicate interaction",
   "duplicate dominant epistasis", "dominant and recessive epistasis". Zero hits for all six. The
   *relationship* between the loci is required by LO 2(aa); the vocabulary for grading its subtypes is
   not, and the corpus rejects wrong subtype names anyway, which makes offering one a net risk.
8. **The seven modified F2 ratios as memorisation targets.** Not a zero-hit finding but a stated
   exclusion, which is stronger: LO 2(aa), "knowledge of the expected ratio for various types of
   epistasis is **not** required".

### List B: loses the word, keeps the biology

A zero here means the word is gone. It does not mean the content is. Each entry names the outcome that
carries it.

1. **Monohybrid. Zero hits, and this is the most important zero in the audit.** The syllabus only ever
   says "dihybrid crosses". But you cannot solve a dihybrid problem without monohybrid logic, LO 2(y)'s
   test crosses are unqualified, and LO 2(dd)'s worked examples in every corpus paper include 3:1
   monohybrid data. **What actually follows is a warning, not a cut: expect two genes.** LO 2(x) frames
   codominance, multiple alleles, sex linkage, autosomal linkage and epistasis as things a **dihybrid**
   cross may involve. A candidate who has only ever practised one-gene versions of codominance and sex
   linkage will meet them combined with a second locus and stall.
2. **Pedigree. Zero hits, and zero appearances on all four specimen papers, yet 12.8% of the corpus.**
   A pedigree chart is a **presentation format** for the inheritance content of LOs 2(u), (v), (x) and
   (y), in the same way a graph is a presentation format for enzyme kinetics. Deducing genotypes and a
   mode of inheritance from family data is squarely inside those outcomes. **Keep it, but weight it to
   the outcomes rather than to the corpus**: the corpus's 246-record concept heading is a prelim habit,
   not a syllabus requirement, and the specimen chose a data table and an MCQ instead.
3. **Recombinant, recombination frequency. Zero hits.** But LO 2(z) requires the **effect** of crossing
   over on phenotypic ratios, which is precisely that some offspring carry new allele combinations and
   that they are the minority. Keep: recombinant versus parental classes, why recombinants are fewer,
   and that a bigger recombinant fraction implies a bigger separation. Drop: converting that fraction
   into a distance.
4. **Continuous variation and discontinuous variation as phrases. Zero hits each, and both are fully
   examined.** LO 2(cc) splits the phrase across a clause: "genetic variation that is **continuous**
   (many, additive genes control a characteristic)". A phrase search returns nothing; a single-word
   search finds the outcome. This is the clearest illustration in the audit of why a hit count is not a
   verdict.
5. **Polygenic. Zero hits, definition present.** LO 2(cc)'s "many, additive genes control a
   characteristic" **is** polygenic inheritance. Learn the mechanism, expect the stem to spell it out
   rather than name it, and use "polygenes" plus "act in an additive manner" in the answer because the
   corpus schemes reward both separately.
6. **Null hypothesis, H0, level of significance, critical value. All zero.** But LO 2(dd) requires you
   to "test the significance of differences", and you cannot do that without them. Note what the
   specimen did: P2 Q4(d) asks you to "conclude whether the observed number... is significantly
   different" and "explain your conclusion", **without ever using the words null hypothesis**. So H0
   language is a safe scaffold, not a requirement. The mark-bearing content is the critical value at the
   right v, the comparison, and the verdict in terms of probability and chance.
7. **Incomplete dominance. Zero hits, and it is a distractor on the official specimen.** 9477 Specimen
   P1 Q18 offers it as option D. You must be able to recognise it and rule it out, which means knowing
   it produces a blended intermediate rather than both parental phenotypes. Do not build a node; do
   build the one-line contrast against codominance.
8. **Hemizygous, carrier, wild-type, true-breeding, pure-breeding. All zero.** Every one appears
   constantly in question stems and in mark schemes, and two of them are the answers to definition
   questions in the corpus. They are the working vocabulary of LOs 2(u) to 2(y). Know what they mean;
   do not expect to be asked to define them cold.
9. **Punnett square. Zero hits.** The syllabus names the method "genetic diagram", twice. The square is
   one row of that diagram. Answer the instruction that is given.
10. **Haemophilia, colour blindness, Duchenne, ABO, MN. All zero.** These are the **vehicles** the
    school uses to teach sex linkage, multiple alleles and codominance, and the exam will supply its own
    vehicle, usually an unfamiliar organism. Learn the mechanism; the ABO genotype table is worth
    keeping only because it saves time under pressure.
11. **Coupling and repulsion as arrangements**, as distinct from the names in list A. Specimen P1 Q18
    turns on noticing that the parents were in repulsion. The concept is required by LO 2(x)'s autosomal
    linkage clause; only the labels are cut.
12. **Mendel's two laws as content.** Segregation is required by LO 2(v) ("how genes are inherited...
    via the germ cells or gametes") and independent assortment is required by LO 2(z) (as the thing
    linkage breaks). Only the attribution is cut.

### The two questions this build was asked to settle

**Question 1: is epistasis examinable?**

**Yes, unambiguously, and it is one of only two topics in Book 6 with an outcome to itself.**
`[OFFICIAL]`

- "Epistasis" returns **four** syllabus hits.
- LO 2(x) names it as one of five things a dihybrid problem may involve.
- LO 2(aa) is entirely about it: *"describe the interaction between loci (epistasis) and predict
  phenotypic ratios in problems involving epistasis"*.
- The Core Idea 2 content list carries it as *"Interaction between loci"*.
- It is distractor C on 9477 Specimen P1 Q18, which means the examiner expects candidates to know it
  well enough to reject it.
- It is the second-largest concept in the school corpus at 220 of 1000 curated records.

**But the parenthesis changes what to study, and it is the single biggest time saving in Book 6.**
*"(knowledge of the expected ratio for various types of epistasis is not required; focus of this
section is on problem solving)"*. Chapter 6.2 devotes pages 15 and 16 to a table of seven ratios and
tells you to learn them. The outcome says do not.

Measured: **39 of 1637 corpus records (2.4%) turn on the exotic ratios 9:6:1, 15:1 or 13:3**, and a
further **45 (2.7%) turn on 9:3:4, 12:3:1 or 9:7 being recalled rather than derived.** The school's own
table concedes the point by heading its last three rows "Other ratios not covered in lecture
(potentially new scenarios)", which is an admission that the list can never be complete.

**So the verdict is: teach epistasis hard, and teach the ratios not at all.** What earns the marks is
the three-move procedure. Identify which genotype at which locus suppresses. Work out which phenotypic
classes therefore merge. Read off the ratio from the merged square. That procedure produces 9:3:4,
12:3:1, 9:7, 9:6:1, 15:1 and 13:3 alike, and it produces the ratio you have never seen. Pair it with
the biochemical account, because a corpus scheme states *"Penalise once if no reference to enzyme"*.

**Question 2: is autosomal linkage and recombination frequency examinable, or only sex linkage?**

**Autosomal linkage is examinable and is the more heavily signposted of the two. Recombination
frequency as a computed quantity is not.** `[OFFICIAL]`

The evidence on autosomal linkage:

- LO 2(x) names **"sex linkage, autosomal linkage"** side by side, as two separate items in the same
  list. Neither has priority in the outcome text.
- LO 2(z) is an entire outcome on linkage and crossing-over and their effect on dihybrid phenotypic
  ratios, and it is not restricted to either type.
- The Core Idea 2 content list carries *"Linkage and crossing-over"* as its own bullet.
- **The answer to 9477 Specimen P1 Q18 is "autosomal linkage".** `[OFFICIAL]` It is the only clear
  Book 6 MCQ on the paper, and its correct option is this node.
- A corpus scheme rejects "sex-linked" as an answer where autosomal linkage was wanted, which confirms
  the two are examined as a distinction, not as a hierarchy.

The evidence on recombination frequency:

- "Recombination frequency" returns **zero** hits, as do "crossover value", "COV", "recombination
  fraction", "map unit", "linkage map", "chromosome map", "centimorgan" and "cM".
- No outcome asks for a distance, a map or a gene order. LO 2(z) asks for the effect on **phenotypic
  ratios**, and stops.
- The corpus files mapping and COV work at only **2.5%** of records, one of the lowest shares in the
  Book, and only **0.4%** involve ordering three genes.
- Chapter 6.1 §9.4 is five of the Book's 74 pages.

**The workload difference is large and it runs the way you would want.** Autosomal linkage in the form
the syllabus asks for is a recognition and inference skill: given four offspring counts, decide
between unlinked, completely linked and incompletely linked, and lay out the diagram with the two-line
notation. That is one afternoon. The full mapping method, with pairwise COVs, cM conversion, gene
ordering and consistency checking across three breeding experiments, is a week and it has no outcome.

**One honest caveat, and it is worth stating because it is the weakest inference in this guide.** The
corpus does contain 40 records using COV or recombination frequency, and one of them, MJC Prelim
2017 P2 Q7(c)(ii), uses "10 map units apart" **inside the stem** and requires the candidate to convert
that to a 10% recombination frequency to reach the answer. `[SCHOOL]` That is a stem supplying the
information, not a candidate recalling a method, and LO 2(z)'s "effect on phenotypic ratios" covers
it. But the safe position is this: **know that recombinant frequency rises with distance, and be able
to compute a percentage of recombinants from a table of counts, which is one line of arithmetic.**
That single line closes the entire gap between what is cut and what a stem might spring on you, and it
costs ten minutes. Do not go further.

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **Drawing the genetic diagram to the school's seven-row layout** (LOs 2x, 2y). **Specimen P2 Q4(a)
   was worth four marks for the diagram alone**, with the ratio already given in the stem. `[OFFICIAL]`
   Diagram construction is 14.1% of the corpus, the largest single archetype. Drill all three notation
   variants: plain letters, superscripts for codominance and multiple alleles, and the two-line form
   for linkage. Enforce circled gametes, labelled male and female axes, and phenotypes stated under
   genotypes every single time, because the schemes mark by row.

2. **Reverse inference from an anomalous ratio to a mechanism** (LOs 2x, 2z, 2aa). This is 12.6% of
   the corpus and it is **9477 Specimen P1 Q18** in its entirety. `[OFFICIAL]` The decision set is
   fixed and short: unlinked dihybrid, autosomal linkage complete, autosomal linkage incomplete, sex
   linkage, codominance, multiple alleles, epistasis of some kind, incomplete dominance, a lethal
   class, or environmental modification. Build a drill that hands over four numbers and asks which one
   it is and why. Chapter 6.0's routing map is the answer key.

3. **The chi-squared test end to end** (LO 2dd). 12.4% of the corpus, and half of Specimen P2 Q4.
   `[OFFICIAL]` Five steps, and the two that lose marks are computing expected numbers from a ratio
   and getting v = c − 1 right. Drill with 2, 3 and 4 classes so that v changes between questions, and
   drill with the table printed in different formats, because the specimen's table and the school's
   table give different values in the last digit.

4. **Sex linkage in a two-gene problem** (LO 2x). 246 of 1000 curated records, the largest concept in
   the Book, and 76% figure-led. Hemizygosity, superscript notation, phenotype rows that state sex,
   the transmission rules, and the reciprocal cross as the test. Build these as **dihybrid** problems
   with one sex-linked gene and one autosomal one, because that is how LO 2(x) frames it.

5. **Epistasis solved from the pathway, never from the ratio table** (LO 2aa). Second-largest concept
   at 220 records. Every drill question should hand over a metabolic pathway or a table of genotypes
   and phenotypes and require the merge to be worked out. Include at least two questions whose answer
   is a ratio the school never taught, because the chapter itself concedes "potentially new scenarios".

6. **Pedigree reading and genotype assignment** (LOs 2u, 2v, 2x, 2y). 12.8% of the corpus. The four
   criteria sets, assigning genotypes including forced carriers, and computing a probability for an
   unborn child. Weight this to about the corpus level rather than above it, given the specimen's
   silence, but do not cut it: the underlying inference is exactly what LOs 2(v) and 2(x) ask for.

7. **The LO 2(u) terminology block answered in context** (LO 2u). Ten terms. Two examiner comments in
   the corpus penalise context-free definitions, and one penalises reusing the stem's own root word.
   Drill by giving a stem and asking for the term defined **in that stem's terms**, never in the
   abstract.

8. **Continuous versus discontinuous variation on all six axes, plus the sources of variation**
   (LOs 2cc, 2bb, and Book 3's 2t). This is the only essay-shaped material in Book 6, all nine
   essay-scale corpus stems sit here, and it is also 43% MCQ, so it pays at both ends. One rehearsed
   bridge: meiosis and fertilisation shuffle existing alleles, mutation makes new ones, the environment
   modifies the expression, and honeybee diet is the named example.

### Low yield, and the honest findings of this build

**Finding 1: the epistasis ratio table is the largest avoidable time sink in the Book, and the syllabus
says so in writing.** Pages 15 and 16 of chapter 6.2, seven ratios, presented as a memorisation target,
excluded by LO 2(aa)'s own parenthesis. Measured, 84 of 1637 corpus records (5.1%) turn on recalling
rather than deriving a modified ratio. The replacement is one procedure that generates all of them.

**Finding 2: chromosome mapping is five pages with no outcome.** Zero syllabus hits across nine
different search terms, 2.5% of the corpus, and 0.4% for gene ordering specifically. The single line
worth keeping is that recombinant percentage rises with distance. See the caveat above.

**Finding 3: the corpus and the specimen disagree about how big this Book is, and the disagreement is
the largest in the project so far.** Measured both ways:

- The **corpus** files 1,544 Inheritance records, second only to Biological Evolution among all 27
  topic files, plus 93 chi-squared records. On corpus weight alone Book 6 looks like a major Book.
- The **specimen** gave Book 6 **one MCQ and one 11-mark structured question**, nothing at all on
  Paper 3, and nothing on Paper 4. That is 4.2% of the A-level, against Book 3's 13% to 16%.

Both figures are verified. The corpus is 9744-era prelim material, and Singapore prelims have
historically loved genetics problems because they mark cleanly and discriminate well. The specimen is
one paper and one paper is a small sample. **The defensible reading is that Book 6 is a
high-density, low-volume Book**: few questions, but the ones that come are worth a lot of marks each
and are all-or-nothing, because a genetic diagram or a chi-squared calculation either works or does
not. That argues for **drilling it to reliability and then stopping**, rather than either skipping it
or treating it as a third of the syllabus.

**Finding 4: 288 records in the Biostatistics bank are not Book 6 at all.** The t-test (61), standard
deviation and error bars (21), rates and area estimation (56), experimental design and dilution series
(32), microscopy calibration (19), reading p values from published data (16) and Hardy-Weinberg (2)
belong to Mathematical Requirements and to Paper 4 skill areas, not to a Core Idea 2 outcome. Filter
the Biostatistics file to the chi-squared concept heading before drilling it for this Book. The
exception worth keeping is **reading p values**, 16 records, because 9477 Specimen P4 Q2(e) does
exactly that. `[OFFICIAL]`

**Finding 5: nodes that are low frequency but should not be dropped.**

- **The three assumptions behind a predicted ratio** (random fertilisation, equal survival, large
  sample). One page in the notes, a handful of corpus records, and it is the answer to "suggest why
  observed differs from expected", which is the natural companion to every chi-squared question.
- **The reciprocal cross as a test for X-linkage.** 13 corpus records, 0.8%. It is the only clean
  experimental-design node in Book 6, and P3 Section A questions routinely ask how you would find
  something out.
- **LO 2(v), inheritance via gametes.** No section of its own anywhere in the Book, easy to skip
  entirely, and it is a whole learning outcome.
- **Computing expected numbers from a ratio.** Trivial-looking and it is one of the three marks in
  Specimen P2 Q4(c). `[OFFICIAL]`
- **Recognising incomplete dominance in order to rule it out.** Zero syllabus hits and it is a
  distractor on the official paper.

---

## 5.5 The chi-squared conventions, extracted in full

Pulled together here because Ethan has a documented gap on degrees of freedom and because the three
sources use three different symbol sets. Every line is quoted.

### The formula, as each source writes it

| Source | As written | Tag |
|---|---|---|
| **9477 syllabus**, Mathematical Requirements p.25 | χ² = Σ (O − E)² / E | `[OFFICIAL]` |
| **9477 Specimen P2 Q4**, printed on the question paper | χ² = Σ (O − E)² / E | `[OFFICIAL]` |
| **School notes 6.2 p.22** | χ²calc = Σ d²/E = Σ (O − E)²/E, where "Σ is sum of" and "d is the difference between observed (O) and expected (E) results (i.e. the deviation)" | `[SCHOOL]` |

All three are the same equation. The school adds the intermediate symbol d, which the official
sources do not use. Use the official form and drop d.

### Degrees of freedom, where the three sources diverge

| Source | Statement | Symbol for classes |
|---|---|---|
| **9477 syllabus** p.25 | "**v = c − 1**", with "v = degrees of freedom" and "**c = number of classes**", and separately "**n = sample size (number of observations)**" | **c** |
| **9477 Specimen P2 Q4(d)** | "The number of degrees of freedom is calculated using this equation. **v = c – 1** where v = degrees of freedom, **c = number of classes**" | **c** |
| **School notes 6.2 p.23** | "**df = n – 1** where **n** is the number of phenotypic classes" | **n** |
| **Prelim scheme, TJC 2018 P2 Q3(d)(i)** | "**The degrees of freedom is the total number of categories/phenotypes (i.e. 4)**; **minus one**" | (words, no symbol) |

**The resolution.** The biology is identical in all four. Write **v = c − 1**. Read c as **the number
of phenotypic classes**, which is the number of rows in the results table, not the number of
offspring. In Specimen P2 Q4 there are four phenotypes and 380 grains, so **c = 4, v = 3, and n would
be 380 if the question used n at all.** The school's n means classes; the syllabus's n means
observations. That is the entire gap, and it is a letter, not a concept.

**Two facts that make this cheaper than it looks.** `[OFFICIAL]` The syllabus states that
"candidates are **not** expected to remember the following equations or what the symbols stand for"
and that "candidates **will be given access to the equations, the meaning of the symbols, a t-table
and a chi-squared table**". The specimen paper duly printed both the formula and v = c − 1 on the
paper. So the risk is not forgetting; it is reading the given definition too fast and substituting the
habit.

### Critical values at p = 0.05, from the tables that actually appear

Two tables are in circulation and they disagree in the last digit. Both are reproduced because a real
paper prints its own and you must read the one in front of you.

| v (degrees of freedom) | 9477 Specimen P2 Table 4.3 `[OFFICIAL]` | School notes 6.2 p.23 `[SCHOOL]` | Concept Check 3 table, adapted from N02 `[SCHOOL]` |
|---|---|---|---|
| 1 | **3.84** | 3.84 | 3.84 |
| 2 | **5.99** | 5.99 | 5.99 |
| 3 | **7.81** | 7.81 | **7.82** |
| 4 | **9.49** | 9.49 | 9.49 |

The specimen table runs across seven probability columns (0.50, 0.20, 0.10, **0.05**, 0.02, 0.01,
0.001); the school's runs across five (0.9, 0.5, 0.1, **0.05**, 0.01). The 0.05 column is present in
every version. `[OFFICIAL]` and `[SCHOOL]`

### Level of significance

The school states the default and it matches practice: "There are two critical theoretical values
(cut-off points) of **α = 0.05** and α = 0.01... **For Biology, unless stated otherwise, we take the
level of significance to be 0.05.**" `[SCHOOL]` The syllabus asks only that candidates "appreciate
levels of significance". `[OFFICIAL]` The specimen's table foregrounds 0.05 by column position and its
question asks simply whether the difference is significant, which means 0.05.

### The exact wording accepted for the conclusion

Both branches, verbatim from the school notes, which match the prelim schemes word for word.
`[SCHOOL]`

**When χ²calc is greater than χ²crit:**

> "the probability that chance alone is the reason for the difference between observed and expected
> results / ratio is **less than 5%**."
> "The deviation is **significant**."
> "Hence, **reject H0 in favour of HA**."

**When χ²calc is less than χ²crit:**

> "the probability that chance alone is the reason for the difference between observed and expected
> results / ratio is **more than 5%**."
> "The deviation is **not significant**."
> "Hence, **do not reject H0**."

**And the biological conclusion, which is a separate mark**, from a prelim scheme: `[SCHOOL]`

> "Therefore the **observed results do not fit the expected 1:1:1:1 test cross phenotypic ratio / do
> not follow Mendelian inheritance**", or "the **genes are linked / not on different chromosomes**."

**Four rules that fall out of this, each traceable to a reject line.** `[SCHOOL]`

1. **"Do not reject H0", never "accept H0".** Every scheme in the corpus words it this way.
2. **"Due to chance" alone is rejected.** The accepted form is the full probability sentence. Two
   schemes say so: *"reject 'due to chance' alone"* and *"Reject: reject accuracy, and reject 'due to
   chance' on its own"*.
3. **Quote the critical value with its degrees of freedom attached**, in the form χ²crit, v = 3,
   α = 0.05 = 7.81. A scheme prints exactly that shape.
4. **Finish with the biology.** "Not significant" is the statistical verdict; the mark scheme also
   wants what that means about the genes.

**Two more things the syllabus settles that the school notes never mention.** `[OFFICIAL]`
"χ² tests will only be expected on **one row of data**", which rules out contingency tables entirely.
And "questions involving the use of a t-test or χ² test may be set on **Papers 1, 2 and 3**", while on
Paper 4 only "an understanding of the use of the tests" is examinable and "detailed computation will
not be required", which is precisely what Specimen P4 Q2(e) asked.

### Which test goes with which data

The 6.2 front concept map states this cleanly and it is worth carrying as a one-liner, because P4 Q2(e)
on the specimen asked for a test name for a difference between two means. `[SCHOOL]` for the pairing,
`[OFFICIAL]` for the specimen question.

| Data type | Variation type | Analysis | Test |
|---|---|---|---|
| Counts in discrete classes | **Discontinuous** | "counts and ratios" | **chi-squared** |
| Measurements on a continuous scale | **Continuous** | "population mean and standard deviation" | **t-test** |

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with Core
  Idea 2 LOs (u) to (dd) read verbatim and reproduced in §0, the Core Idea 2 content list, the Scheme
  of Assessment and paper weightings, and the full Mathematical Requirements section including the
  statistics equations and symbol key. Plus a whole-document literal term search for §5 across **71
  multi-word terms in every separator form** (eight dash-class characters, plus spaced and closed) and
  **41 single words**, re-run in full after Book 7's en-dash finding. The re-audit confirmed that **no
  Book 6 zero was a separator false negative**, and it caught one false positive in the other
  direction. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477
  OFFICIAL)/`), read end to end and counted question by question and part by part. Specimen P2 page 12
  was additionally rendered as an image to verify the Table 4.1 versus Table 4.2 discrepancy.
  `[OFFICIAL]`
- The school's own **Book 6 chapter PDFs** (`Study Agent/Bio/Book 6 - Inheritance/`), 3 chapters,
  75 pages, full text plus visual reading of four layout-sensitive pages. `[SCHOOL]`
- The **question bank** at `Study Agent/Bio/_question_bank/`, the Inheritance and Biostatistics files
  plus their overflow, **1,925 records read and 1,637 counted as Book 6**, with mark schemes reproduced
  verbatim where a key existed. `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery
ratings and self-jotted confusions, not content. They were excluded deliberately, per the subject guide
§3.0 and rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | ~96% `[OFFICIAL]` | Nodes derive directly from 10 LOs read verbatim, all inside one Core Idea, every letter cross-checked against both chapter headers with zero mismatches. The single wording difference in 74 pages is "honey bees" against "honeybees". The scope audit was re-run across all separator forms after Book 7's en-dash finding and nothing flipped. This is the cleanest scope picture of any Book so far |
| Exam format | ~90% `[OFFICIAL]` **but thin** | All four specimen papers counted part by part. The counting is exact; the **sample is the problem**. Book 6 supplied 12 clear marks in total across 245 marks of specimen. One question set is a small basis for a weighting claim |
| Archetype frequency | ~85%, **measured** | n = 1637 real questions parsed and classified. The residual uncertainty is not sampling error, it is that the corpus is 9744-era prelim material, and prelims over-select genetics problems because they mark cleanly. The direction of that bias is knowable but not its size |
| Mark scheme logic | ~80% `[SCHOOL]` **capped** | Every scheme is a JC prelim. SEAB publishes no 9477 mark scheme and the specimen papers arrive without one. This is the binding cap and it cannot be argued away. It bites harder in Book 6 than in Book 3, because the layout conventions in §3.1 come **entirely** from prelim schemes and the specimen shows only that a genetic diagram is worth four marks, not how those four are split |
| Trap model | ~88% `[SCHOOL]` | Most entries quote a verbatim reject line or examiner comment. **Five are corroborated directly by the 9477 specimen** (autosomal linkage as the answer, epistasis and incomplete dominance as distractors, repulsion arrangement, the true-breeding fraction, v = c − 1 printed on the paper), and a further four by errors found in the school's own notes |

**Honest ceiling: ~85% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Books 2 and 3:**

1. **The cleanest scope picture in the project.** One Core Idea, ten consecutive letters, no offset
   error, and one stated exclusion that is unusually specific about what to cut.
2. **The syllabus itself hands over the chi-squared method.** Formula, symbol meanings, and both
   tables are supplied in the exam. That is a rare case where the official document removes risk
   rather than adding it.
3. **The school's notes are more accurate than Book 3's.** Fifteen findings, of which four are hard
   internal contradictions and only one sits on an examined distinction. Book 3's digest logged around
   a dozen genuine factual errors, three of them on examined distinctions.
4. **The trap model is unusually concrete because the marks are procedural.** "Circle the gametes" and
   "use the linkage notation" are checkable in a way that "explain the mechanism fully" is not.

**What is specifically weaker:**

1. **The specimen sample for this Book is very small.** Twelve clear marks. Book 3 had five Paper 1
   stems, two complete Paper 2 questions and two Paper 3 sub-questions. Book 6 has one MCQ and one
   Paper 2 question. Every claim in §2.0 rests on those two items, and a second official paper could
   move the weighting materially in either direction.
2. **The corpus-versus-specimen gap is the widest in the project.** 1,544 corpus records against 4.2%
   of the specimen. §5 Finding 3 gives the reading I think is defensible, but it is a judgement, not a
   measurement.
3. **No measured student success rates**, the same gap Books 2 and 3 reported. The trap ranking in §4
   is by scheme frequency, syllabus weight and specimen corroboration, not by observed failure rate.
   The one exception is the degrees-of-freedom trap, which is corroborated by a logged gap of Ethan's
   own and by an examiner comment naming the same failure.
4. **The genetic-diagram layout conventions are entirely `[SCHOOL]`.** Section 3.1 is the most
   actionable part of this guide and it is built from four prelim schemes. The specimen confirms that a
   genetic diagram is worth four marks and that symbols may be supplied; it does not confirm that
   circling gametes is a marking condition. That is a prelim convention that is probably, but not
   provably, Cambridge practice.

**Genuinely thin evidence, stated plainly:**

- **Pedigrees.** Zero syllabus hits, zero appearances across all four specimen papers, and 12.8% of
  the corpus, rising to 16% of the curated bank. I have kept them on the reasoning that a pedigree is
  a presentation format for LOs 2(u), (v), (x) and (y) rather than a topic. That reasoning is
  `[INFERRED]` and it is the least evidenced call in this build. If a second official paper contains no
  pedigree either, this node should be down-weighted hard.
- **Paper 3 presence.** Book 6 had **zero** presence on the specimen's highest-weighted paper, in both
  Section A and Section B. The corpus files 200 Book 6 records tagged P3, which is 12.2%. I do not know
  which is right, and it matters more than any other open question here because P3 is 35% of the
  A-level.
- **How far "problem solving" reaches in LO 2(aa).** The exclusion of expected ratios is quoted and
  unambiguous. What it leaves is less so. My reading, that you must be able to derive any ratio from a
  pathway including ones never taught, is `[INFERRED]` from the outcome's own words plus the school's
  admission that new scenarios exist. No specimen question and no prelim scheme settles the boundary.
- **Whether monohybrid crosses can be set alone.** "Monohybrid" returns zero syllabus hits and LO 2(x)
  says "dihybrid crosses", but LO 2(y) on test crosses is unqualified and LO 2(dd)'s natural data set
  is a 3:1. I have treated monohybrid logic as a required sub-skill rather than a testable topic. If
  that is wrong the cost is nil, because the sub-skill is drilled either way.
- **Paper 4.** Book 6 had zero clear presence on the specimen practical, and the corpus files only 4
  records tagged P4 across 1,637. The one adjacent question, Specimen P4 Q2(e), is a t-test
  interpretation. Flag statistics interpretation for the October practical block; do not build a Book 6
  practical cluster from this evidence.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the
most likely mispredicting dimension for this Book is **not** archetype content but **execution under
time**. Book 6's marks are all-or-nothing in a way no other Book's are: a genetic diagram with two
errors in one row scores zero for that row, and a chi-squared test with the wrong degrees of freedom
loses the conclusion as well as the comparison. Before changing anything in §2, re-time the diagram and
the chi-squared procedure separately and check whether the losses are knowledge losses or speed and
accuracy losses.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 2 Question 4** sat cold and
untimed first, then re-sat to eight minutes, followed by **Specimen Paper 1 Question 18** with a
two-minute limit. Between them they cover LOs 2(u), 2(x), 2(y), 2(z) and 2(dd), which is five of the
Book's ten Learning Outcomes, and they test both directions of inference: Q4 is forward, from genotypes
to a predicted ratio to a statistical verdict, and Q18 is reverse, from four counts back to a
mechanism. There is no third item, because those two questions are the entire official evidence base
for this Book.
