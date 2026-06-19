# H2 Biology (9744/9477) — HCI Source-Material Topic Map

Catalog of Ethan's **own HCI teaching material** (149 files in `workspace/bio/source-material/`, top level).
Built 2026-06-13. For the **other-school past-paper archive** (1,832 files under `Biology/`) use the
exam-pattern KB instead: `source-material/knowledge-base/_index.md`.

## How this corpus is structured

Three layers:
1. **HCI teaching content** (this file) — the notes, learning roadmaps, additional practice + mark schemes,
   concept-check answers, practicals, and school past papers Ethan is actually taught from. **Encode from here.**
2. **Exam-pattern KB** (`knowledge-base/`) — what the exam rewards, distilled from 14 years of other-school prelims.
   Read `knowledge-base/_index.md` → `bio-examiner-patterns-reference.md` before generating any paper.
3. **Distilled syllabus** — `context/syllabuses/bio-9744.md` (AO weightings, paper structure, content outline, command words).

**Extraction:** all HCI notes/roadmaps are born-digital → use `workspace/chem/_extract.ps1 -Path <pdf> -Out <txt>`.
Notes extract to 50–90 KB, roadmaps ~5 KB. **Exception:** `3.H2Biology9477Syllabus.pdf` is image-only (0 streams) — use the distilled syllabus ref instead. (See [[pdf-extraction-workaround]].)

## File-naming key
`0./1./2.…` = HCI's lesson-sequence prefix. Suffixes: **Roadmap** = study guide; **Notes** = full content;
**ConceptCheck** = self-test answers; **AdditionalQn/ExtraPrQs/STQ + _MS** = practice + mark scheme (mark-scheme-first gold);
**TBL** = team-based-learning worksheet; **GST** = guided self-study; **PLN** = practical pre-lab notes.
Abbrev: **CND** = Cell & Nuclear Division · **MMT** = Molecular Techniques · **EuGeneExp** = Eukaryotic Gene Expression ·
**GoV** = Genetics of Viruses · **ETA** = Extension Topic A (Infectious Diseases) · **ETB** = Extension Topic B (Climate Change) ·
**MMO** = Manipulation/Measurement/Observation · **TPE/UWA** = Timed Practice / Unweighted Assessment.

---

## Core Idea 1 — The Cell & Biomolecules of Life

| Topic | Notes | Roadmap | Practice (+MS) | Concept check |
|---|---|---|---|---|
| Water & Macromolecules | `0.2025WaterandMacromoleculeNotes_FinalPrintVer` | — | — | — |
| Carbohydrates | `2.2025CarbohydratesNotes_FinalPrintVer` | `0.2025Carbohydrates_LearningRoadmap…17Feb` | `CoreIdea1_Carbohydrates_WarmUpQuestions`, `CoreIdea1_CarbohydratesAdditionalSTQ QP`+`MS` | — |
| Lipids | `1.2025LipidsNotes_FinalPrintVer` | — | — | — |
| Proteins | `3.2025ProteinsNotes_FinalPrintVer` | `0.Proteins_LearningRoadmap…Final` | `0.ProteinsExtraPrQs QP_Final`+`MS_Final`, `1b.ProteinsGSTtAPP_Part1-3_QP` | `3.2025ProteinsNotes_ConceptCheckAnswers` |
| Enzymes | `4.2025EnzymesNotes_FinalPrintVer` | — | `3.2025EnzymesAdditionalQuestionMS` (MS only) | — |
| Eukaryotic Cell Structure & Function | `5.2025EukCellStruct_FunctNotes_FinalPrintVer` | — | `1a.…WarmupquestionsOnline`, `3.2025EukaryoticCellStructureandFunctionAdditionalQn`+`…MS` | — |
| Cell Membrane & Transport | `6.2025CellMembraneTransportNotes_FinalPrintVer` | `0.2025CellMembrane_Transport_LearningRoadmap` | `4a.2025CellMembTransportTBLAdditionalQn_QP` | — |
| Cell Signalling | `1.CellSignallingNotes` | `2025CellSignalling_LearningRoadmap` | `CellSignalling_AdditionalPrQ QP`+`MS_Students` | `CellSignallingConceptCheckAnswers` |

---

## Core Idea 2 — Genetics & Inheritance
*(cover: `0.GeneticsandInheritanceCoverPage`)*

| Topic | Notes | Roadmap | Practice (+MS) | Concept check |
|---|---|---|---|---|
| DNA Structure & Replication | `1.DNAStructureandReplication` | `0.2025DNAStructureReplication_LearningRoadmap2Apr` | — | `1.DNAStructureandReplication_ConceptCheckAnswers` |
| Cell & Nuclear Division (CND) | `2.CellandNuclearDivisionNotes` | `0.CNDLearningRoadmap…Final` | `0.CNDExtraPrQs2025`+`_MS` | — |
| Organisation of Eukaryotic Genome | `3.OrganisationofEukaryoticGenome` | `0.OrgandControl_LearningRoadmap` | `3.OrgandControl_AdditionalQn_QP`+`_MS` | — |
| Eukaryotic Gene Expression | `2.EukaryoticGeneExpression` | `0.EuGeneExp_LearningRoadmap…Final` | `0.EuGeneExpExtraPrQs2025`+`_MS` | `2.2025EukaryoticGeneExpression_ConceptCheckAnswers` |
| Control of Eukaryotic Gene Expression | `4.ControlofEukaryoticGeneExpression` | (shares `OrgandControl` roadmap) | — | — |
| Gene & Chromosomal Mutation | `5.GeneandChromosomalMutation` | — | — | — |
| Molecular Basis of Cancer | `3.MolecularBasisofCancerNotes` | `MolBasisofCancerLearningRoadmap` | — | — |
| Stem Cells | `4.StemCellsNotes` | `1.StemCellsLearningRoadmap` | — | `StemCellsConceptCheckAns` |
| Molecular Techniques (MMT) | `6.MolecularTechniques` | `0.MMT_LearningRoadmap` | — | — |
| Genetics of Bacteria | `GeneticsofBacteria` | `0.GeneticsofBacteriaLearningRoadmap…Final` | `0.GeneticsofBacteriaExtraPrQ2025`+`_MS` | — |
| Genetics of Viruses (GoV) | `TheGeneticsofViruses` | `2025GoVLearningRoadmap` | — | — |
| **Inheritance I** (Mendelian) | `2026InheritanceINotes_Student_Final`, overview: `2026InheritanceI_Overview` | `0.2026Inheritance_LearningRoadmap…Final` | `6.InheritanceITBLAdditionalPrQs_QP`+`_MS_Student` | `2026InheritanceIConceptCheckSolutions` |
| **Inheritance II** (linkage/epistasis/χ²) | `2026InheritanceIINotes_Student_Final` | (shares Inheritance roadmap) | `10.InheritanceIITBLAdditionalPrQs_QP`+`_MS_Student_updated` | `2026InheritanceIIConceptCheckSolutions` |

---

## Core Idea 3 — Energy & Equilibrium

| Topic | Notes | Roadmap | Practice (+MS) | Concept check |
|---|---|---|---|---|
| Photosynthesis | `1.PhotosynthesisNotes` | `0.2025Photosynthesis_LearningRoadmap` | — | `1.PhotosynthesisConceptCheckAnswers` |
| Cellular Respiration | `2.CellularRespirationNotes` | `0.2025_2026CellularRespiration_LearningRoadmap` | `3. 2025_2026 Cellular Respiration_Additional Questions_Student` | `Respirationconceptcheckanswers` |

---

## Core Idea 4 — Biological Evolution
Main notes split into 5 sections (`2025Section1–5`):

- `2025Section1SyllabusandDefinitions` — species concept, definitions
- `2025Section2TheoriesofEvolution` — natural selection, Lamarck vs Darwin
- `2025Section3Microevolution` — Hardy-Weinberg, allele frequencies
- `2025Section4SpeciationandMacroevolution` — allopatric/sympatric, polyploidy
- `2025Section5Phylogeny` — cladistics, molecular phylogeny

Concept check: `Conceptcheckanswers` (evidence for evolution; homologous vs analogous).
**GST enrichment reader** (Scientific American, *Human evolution* feature):
`1.Part1Wherewecamefrom`, `2.Part2WhatMakesUsSpecial`, `3.Part3WhereWeareGoing`, plus excerpts
`1.WelcometotheFamilyp42`, `1.IfIHadaHammerp54`, `2.PowersofTwop62`, `2.OneforAllp68`, `2.TheItFactorp72`.

---

## Extension Topic A — Infectious Diseases & Immunity (ETA)
Notes in 8 sections + cover:
- `2026_IDCoverPages`
- `2026_IDSect1DefnandOverview` · `Sect2InnateImmunity` · `Sect3AdaptiveImmunity` · `Sect4AdaptImmAgRec` (antigen recognition) · `Sect5ViralInfectionsinHumans` · `Sect6BactInfectionsandTreatment` · `Sect7Vaccines_Vaccination` · `Sect8Spreadofdiseases`

Roadmap: `0.2026ETA_LearningRoadmap` · Mind maps: `ETAmindmapsSection1to7` ·
TBL: `6.2026ETATBLCaseStudy_QP`, `7.2026ETATBL_AdditionalQn_QP`

---

## Extension Topic B — Impact of Climate Change on Animals & Plants (ETB)
Main notes split into 6 sections (`N.SectionN`):
- `1.Section1` — intro / overview
- `2.Section2` — LO(a): human activities → greenhouse gases (CO₂, methane)
- `3.Section3` — effects on environment, animals & plants
- `4.Section4` · `5.Section5` · `6.Section6` — (later LOs: range shifts, phenology, mitigation)

Roadmap: `0.ETBClimateChangeLearningRoadmap` · Practice: `2026ETBClimateChangeAdditionalPrQQP`

---

## Bioethics (standalone)
`7.Bioethics` — values/morals/ethics frameworks. Applies to stem cells, gene tech, SIP.

---

## Practical (Paper 4) — skill strands
**Was skipped entirely — needs a dedicated October 2026 prep pass (PRACTICAL RULE).**

| Skill | Pre-lab / resource |
|---|---|
| Lab intro + MMO | `1.Practical1IntroductiontoLabMMO_Pre-LabNotes` |
| Food tests | `0.Practical3_FoodTestPLN` |
| Planning | `3.Practical5IntroductiontoPlanningPLNStudent2025` |
| Microscopy | `Practical7SkillsinMicroscopyPLN_Final`, `Prac7Imagesofeyepiecegraticuleimposedonstagemicrometer` |
| (Prac 22) | `Practical22PLN` |
| Investigative Project (SIP) | `2025StudentInvestigativeProject_Briefing`, `…_PresentationRubric` |

Schedule-embedded practical strands: Microscopy 5–12, Food Test 6–8, Enzymes 6–9, Transport 4–5,
Biostatistics 1–3, Photosynthesis 1–3, Cellular Respiration 1–4.

---

## School past papers (mark-scheme-first practice)
- **JC1 Promos:** `2022/2023/2024 JC1H2BioPromo` — `P1QP`, `P2andP3QP`, `P1P2P3MS` each
- **JC1 Pre-Promo Revision Package (2025):** `QPPt1`, `QPPt2`, `MSPt1`, `MSPt2`
- **JC2 Timed Practice P3:** `2023JC2…Paper3TimedPractice QP`+`MS`, `2024JC2…TPEP3 QP`+`MS Print`, `2025JC2…TPEP3 QP`+`MS`

## Format / assessment / admin docs
- `1.2025-2026H2BiologyInformationBookletUpdatedfor2026` — official info booklet
- `2.2026JC2H2BiologyTeachingSchedule` — JC2 delivery sequence (see below)
- `3.H2Biology9477Syllabus` — **image-only**, use `context/syllabuses/bio-9744.md`
- `2025JC1…PromotionalExaminationsFormatandTopics`, `…Term2WA1…`, `…Term3WA2…`
- `2026JC2…Term1TimedPracticeFormatandTopics4Feb`, `…Term2…`, `…TimedPracticeExerciseFormatandTopics`
- `H2BioSeatingPlanAuditorium`

---

## 2026 JC2 delivery sequence (from the teaching schedule)
Lessons start **12 Jan 2026** (T1W2). Promos = 100% weighting; UWA1 (P2, T1W6), UWA2 (P3, T2W4),
TPE (T3W1–2) are unweighted.

- **Term 1:** Cellular Respiration → Inheritance (TBL 1–6) → Biological Evolution (TBL 1–4)
- **Term 2:** Biological Evolution (TBL 5–8) → Climate Change (ETB, TBL 1–6) → Infectious Diseases (ETA, GST/TBL)
- JC1 foundation (Core Ideas 1–2 biomolecules, cell, DNA, gene expression, cancer, stem cells, MMT,
  bacteria/virus genetics) is assumed complete — revisit as weak nodes surface.

**A-level Nov 2026 tests all of the above.** Highest-probability exam topics (from KB): HIV, HPV+cervical cancer,
lac/gal operons, glycoprotein 9-point synthesis, ATP/respiration, mutations/cancer, membrane structure-function,
dihybrid χ² genetics, multi-topic P3 Q1 synthesis (must integrate ≥3 topics).
