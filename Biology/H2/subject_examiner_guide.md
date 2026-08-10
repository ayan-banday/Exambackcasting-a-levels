---
subject: Biology
level: H2
default_type: qualitative
status: BUILT
validation_source: MIXED  # [OFFICIAL] syllabus 9477 (scope/AOs/paper structure/exclusions) + [OFFICIAL] 9477 specimen papers P1-P4 (question papers only, no published mark scheme) + [SCHOOL] JC-prelim mark schemes 2011-2025 (marking DNA, traps, archetype frequencies) + [INFERRED] frequency estimates; NO official SEAB 9477/9744 mark scheme or examiner report exists
confidence_ceiling: "~87% MIXED  ([OFFICIAL] ~92% on WHAT is examinable, now corroborated by the 9477 specimen papers; [SCHOOL] ~80% cap on HOW it is marked — unchanged, no official mark scheme exists; [INFERRED] frequencies directional only)"
last_updated: 2026-08-10
last_change: "2026-08-10 — audit against the 9477 syllabus, the four 9477 specimen papers and the rebuilt 9,067-question bank. Corrected: P2 part census (36 parts, [2]x16) and command-word census; P3 Q1 part count (14, not 19); P3 Section B is a SINGLE undivided 20-mark prompt, the 9744 (a)+(b) split did NOT survive; P4 risk assessment is NOT syllabus-excluded; the 'detailed computation not required on P4' rule applies only to t-test/chi-squared; Hardy-Weinberg and R0 are NOT on the given-equations list; question order follows syllabus LO order, not school Book order; Book 1 covers LOs a-d,g-s (not a-s); §3 node count; P1 stem-type and essay-theme frequencies re-based on the question bank"
---

# Subject Examiner's Guide — Biology H2 (Syllabus 9477)

> How the H2 Biology exam *thinks* across the whole subject. Built once (playbook 01); updated only on
> recalibration. Default gap-closure type = **qualitative** (spec.md §2): close a gap with a concept
> doc that **names the misconception explicitly**, then **re-test at a new angle** — a different stem
> or a different example of the same concept. Reading does not close a Biology gap; a fresh correct +
> confident answer does. Quantitative sub-strands (chi-squared / t-test / SD / Hardy-Weinberg / COV /
> magnification) **override to `quantitative`** in their topic guides — those close by solving variants
> until mechanical.
>
> **Honesty stamp.** Every claim below is tagged `[OFFICIAL]`, `[SCHOOL]`, `[INFERRED]` or
> `[RESEARCH]`. SEAB does **not** publish 9477/9744-family mark schemes or examiner reports — so every
> mark scheme / marked paper in `inputs/` is a **JC prelim** and is tagged `[SCHOOL]`, never
> `[OFFICIAL]`. Only the syllabus PDF and the four 9477 specimen question papers are `[OFFICIAL]`. The
> honest ceiling is therefore ~87% and **cannot exceed ~92%** until an official past paper is sat under
> timed conditions. **High scores on this system's questions are not readiness.**

---

## 0. The single most important caveat — syllabus code (read first)

**Ethan sits 9477** (Higher 2 Biology, *first year of examination 2026*) — confirmed verbatim from
`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf` (cover: "Syllabus 9477 … First year of
examination in 2026"). `[OFFICIAL]`

**But the entire input corpus pre-dates 9477:**
- Past papers / mark schemes are **2011–2016 (code 9648)** and **2017–2025 (code 9744)** JC prelims. `[SCHOOL]`
- The big cross-corpus digest (`_General/school_resources/bio-examiner-patterns-reference.md`) is built
  on **9744** and even uses 9744 topic groupings and AO weights. `[SCHOOL]`
- The summary doc `bio-9744-syllabus-summary.md` **self-flags** "new syllabus 9477 begins from 2026"
  and carries the **old** figures (AO 32/48/20; P2 = 100; P4 = 55). **Those are wrong for 9477.** `[SCHOOL]`

**Where 9744 and 9477 DISAGREE, the OFFICIAL 9477 figures win.** The differences that matter for
generation and marking:

| Item | 9744 (corpus, [SCHOOL]) | **9477 (OFFICIAL, use this)** |
|---|---|---|
| AO-A Knowledge | 32% | **36%** `[OFFICIAL]` |
| AO-B Handling/applying/evaluating | 48% | **44%** `[OFFICIAL]` |
| AO-C Experimental (P4) | 20% | **20%** `[OFFICIAL]` |
| Paper 2 marks | 100 | **90** `[OFFICIAL]` |
| Paper 4 marks | 55 | **50** `[OFFICIAL]` |
| Paper 3 internal split | not fixed in corpus | **Section A 55 / Section B 20** `[OFFICIAL]` |

Content is ~90% stable across the lineage, so the corpus's **traps, marking style and archetype
patterns transfer well** — but treat all archetype frequencies as `[INFERRED]` for the live 9477 paper,
and never quote a 9744 paper-structure number when the 9477 syllabus states otherwise.

---

## 1. Paper Structure & Format

All four papers are compulsory. `[OFFICIAL]` (syllabus pp.9–10).

| Paper | Type | Duration | Marks | Weight | What it is |
|---|---|---|---|---|---|
| **1** | Multiple Choice | 1 h | **30** | **15%** | 30 compulsory MCQs, **4 options each (A–D)**, no negative marking |
| **2** | Structured Questions | 2 h | **90** | **30%** | Variable number of compulsory structured Qs, incl. data-based / comprehension; integrates ≥2 areas |
| **3** | Long Structured + Free Response | 2 h | **75** | **35%** | **Section A 55 marks** (≥2 long structured, stimulus-driven, journal-style) + **Section B 20 marks** (choose **1 of 2** free-response questions; QWC carries a % of marks) |
| **4** | Practical | 2 h 30 min | **50** | **20%** | Skills P (4%) + MMO/PDO/ACE (16%); may include no-apparatus data-handling |

`[OFFICIAL]` all of the above.

**Paper 3 free-response = one 20-mark question** (syllabus: "one free-response question of 20 marks").
`[OFFICIAL]` The corpus shows JCs running a **25-mark Section B essay split into (a)+(b)** under 9744.
**That split did NOT survive into 9477.** Both Section B options in the 9477 specimen (Q4 roles of
proteins, Q5 how molecules enter cells) are printed as a **single undivided prompt carrying one `[20]`
tag** — no (a), no (b), no internal mark split, answered in continuous prose. Plan and drill the essay
as one 20-mark piece, not as a descriptive half plus an evaluative half. `[OFFICIAL]` (9477 specimen
P3, both options).

**Practical (P4)** assesses **Planning (P, 4%)**, **Manipulation/Measurement/Observation (MMO)**,
**Presentation of Data & Observations (PDO)**, **Analysis/Conclusions/Evaluation (ACE)** — last three
share 16%. Named apparatus includes a **light microscope + eyepiece graticule + stage micrometer** and
an **agarose gel electrophoresis cell** — so microscopy/magnification and gel work are live practical
contexts. `[OFFICIAL]` (syllabus pp.22–24). *Ethan plans October-only P4 prep — flag practical content
separately, don't drill it in routine topic sessions.* `[SCHOOL]` (his stated plan in the corpus).

**The "detailed computation not required on P4" rule is narrower than it looks.** The syllabus says it
only of the **statistical tests**: "Questions involving the use of a t-test or χ² test may be set on
Papers 1, 2 and 3. Questions involving an understanding of the use of the tests may be set on Paper 4,
but detailed computation will not be required." **Ordinary calculation is fully examinable on P4** —
the 9477 specimen P4 makes candidates measure a field-of-view radius, calculate its area, calculate a
mean stomatal count and calculate a stomatal density. **What is given:** the standard-deviation, t-test
and χ² equations, the meaning of their symbols, a t-table and a chi-squared table. **What is NOT given:**
the **Hardy–Weinberg equation (p²+2pq+q²=1)** and **R₀** — both sit in Mathematical Requirements as
things candidates "should appreciate" and neither appears on the provided-equations list, so both are
memorised. **χ² will only ever be set on one row of data.** `[OFFICIAL]` (syllabus p.25; specimen P4 Q2).

---

## 2. Mark Scheme Logic (what is rewarded per band)

> **Caveat:** all marking-behaviour detail here is `[SCHOOL]` — distilled from sampled H2 JC prelim
> schemes: HCI 2013 P2/P3, ACJC 2012/2013 P2, NJC 2013 P2, RVHS 2011 P2, SAJC 2011 P3, plus the
> cross-corpus digest. SEAB publishes no 9477 scheme, so these are house conventions, expected to be
> *broadly* representative of Cambridge but not identical.

**1. Point-based positive marking.** Each discrete correct idea = 1 mark, semicolon-delimited, awarded
against a fixed checklist up to a **`[max N]`** cap. Listing beyond the cap wins nothing — **coverage +
precision beats volume.** (Verbatim: HCI/ACJC schemes number points 1., 2., 3.… and cap with "[max N]"
/ "Max".) `[SCHOOL]`

**2. Notation is enforced and load-bearing:** `;` ends a marking point · `A`/`Accept` lists valid
variants · `R`/`Reject` forbids specific wrong answers · `Ignore` = neutral · `ORA` (or reverse
argument) · `AW` (alternative wording) · `OWTTE` (or words to that effect) · `ref. to` = brief
acknowledgement suffices · `*` marks a **gateway point** ("point essential to get full mark", e.g. ACJC
non-disjunction). `[SCHOOL]`

**3. Precise technical vocabulary is decisive.** Markers **reject approximate phrasing**: "tight triple
helix" scores, "compact" does **not**; "glycine is the smallest" scores, "one of the smallest" does
**not**; "bud off" not "pinch off"; "procollagen" not "collagen"; "hydrophobic interactions" not
"hydrophobic bonds"; euchromatin/chromatin **accepted** but heterochromatin/chromosome **rejected** for
a transcriptionally active region. Named molecules must be exact (p53, ras, VEGF, MMPs, hTERT, rubisco,
RuBP, Taq) — generic "gene X" / "a protein" loses the mark. `[SCHOOL]`

**4. "Explain" demands a causal chain; each link is a separate mark.** A partial chain scores partially.
Canonical example (mutation → disease, NJC 2013 P2): altered base sequence → altered amino-acid sequence
→ altered tertiary/3-D conformation → altered active/binding site → non-functional. Stopping at "the
protein changes" caps the mark. `[SCHOOL]`

**5. "Describe" = observable features / data trend only — no causation.** Answering "describe" with
mechanism, or "explain" with only a description, forfeits marks. Data questions award a **describe mark
(quote figures + units)** *before* the explain marks. `[SCHOOL]/[OFFICIAL]` (command-word meanings are
in the syllabus Glossary, pp.27–28 `[OFFICIAL]`).

**6. "Compare/Distinguish" needs BOTH sides, paired on the same axis.** Two unrelated facts ≠ a
comparison; missing one side caps (YIJC 2025: caps at 1 mark). Paired tables (e.g. HCI globular vs
fibrous protein 1a/1b, 2a/2b…) are the marking shape. `[SCHOOL]`

**7. Structure→function items are marked as paired S/F points.** A structural fact scores only when its
functional consequence is stated, and vice versa (HCI 2013 haemoglobin & glycogen S1–S5 / F1–F5). 8-mark
structure-function essays additionally require **breadth** across all named molecules. `[SCHOOL]`

**8. Suggest = AO-B application** (plausible reason consistent with biology, applied to a novel context);
**Discuss/Evaluate = balanced both-sides + judgement** — a one-sided answer caps the band. `[OFFICIAL]`
command meaning; `[SCHOOL]` marking behaviour.

**9. Quantitative sub-parts** require correct method **and** correct df, correct critical-value
comparison, correct accept/reject of H₀, **plus** a biological conclusion; correct **n−1** divisor for
SD; brackets for linked genes; X-superscripts for sex linkage; COV as a **% not a fraction**; correct
sig figs and **units on quantities, none on ratios** (independently penalised — syllabus p.10). `[OFFICIAL]`
penalty rule; `[SCHOOL]` per-step shape.

**10. Essays — Levels of Response.** L1 1–7 (basic recall, limited structure) · L2 8–11 (good structure,
some integration) · L3 12–15 (strong synthesis, **named examples, breadth across sub-topics**) — banding
quoted for a 15-mark item; scale the 9477 20-mark Section B accordingly. **+1 QWC** needs all of
scientific language / logical structure / clarity. Examiners **punish over-depth on one molecule** when
breadth is asked, and reward spread. `[SCHOOL]`

---

## 3. Content Node Map (the syllabus as testable nodes)

The exhaustive testable scope is the **9477 Learning Outcomes**, organised below as **20 content nodes**
(the cross-topic intelligence backbone). Each is the master coverage checklist a topic guide draws from.
*(Recounted 2026-08-10. Earlier headers claimed 18, then 19; the list below actually holds 20 bullets.
**Eighteen** of them have a folder of their own under `inputs/Biology/H2/`; the two that do not are the
cross-folder clusters — viral & bacterial genetics, and cell cycle / mitosis / meiosis — flagged in place
below and in §7. Separately, the rebuilt question bank at `Study Agent/Bio/_question_bank/` files the
same LOs under **27** finer topic names cut along the school's Book chapters; that is a different slicing
of the same scope, not a disagreement.)* **Core Idea + LO references are `[OFFICIAL]`** (syllabus
pp.12–21); the per-topic trap/marking detail is `[SCHOOL]/[INFERRED]` (see §5).

### 3.0 School teaching structure ↔ official syllabus (read before any topic session)

Ethan's school teaches from **nine printed Books**. The Books do **not** line up with the four Core
Ideas — three of the nine straddle Core Idea boundaries. Study is organised by Book (that is what he
is taught and tested on in prelims), but coverage must be checked against the Core Idea LOs, because
the A-level paper is built from the LOs, not from the Books. `[SCHOOL]` structure, `[OFFICIAL]` LO map.

Source notes live at `Study Agent/Bio/Book <N> - <name>/` (7–46 pp per chapter, text-layer PDFs).

| Book | Chapters | Maps to | LOs |
|---|---|---|---|
| **1 — Biomolecules, Enzymes and Cell Structure** | Water & Macromolecules · Lipids · Carbohydrates · Proteins · Enzymes · Eukaryotic Cell Structure & Function · Cell Membrane & Transport | Core Idea 1 | **a–d, g–s** (Core Idea 1 minus viruses and stem cells) |
| **2 — Genetics and Inheritance (Molecular)** | DNA Structure & Replication · Eukaryotic Gene Expression · Genome Organisation · Control of Gene Expression · Gene & Chromosomal Mutations · Molecular Techniques · Bioethics | Core Idea 2 | a–d, h–m |
| **3 — Cell Signalling, Division, Cancer, Stem Cells** | Cell Signalling · Cell & Nuclear Division · Molecular Basis of Cancer · Stem Cells | **spans 3 Core Ideas** | CI-3 m–p (signalling); CI-2 **(n),(o),(s),(t)** division and **(p)–(r)** cancer; **CI-1 t–u (stem cells)** |
| **4 — Genetics of Viruses and Bacteria** | Genetics of Viruses · Genetics of Bacteria | Core Idea 2 (+ CI-1) | CI-2 e–g; **also CI-1 (e),(f)** — 4.1 prints "1(e) describe the structural components of viruses…" and "1(f) discuss how viruses challenge the cell theory" on its own learning-outcomes page |
| **5 — Energetics** | Photosynthesis · Cellular Respiration | Core Idea 3 | a–l |
| **6 — Inheritance** | Inheritance I · Inheritance II | Core Idea 2 | u–dd |
| **7 — Biological Evolution** | Syllabus & Definitions · Theories · Microevolution · Speciation & Macroevolution · Phylogeny | Core Idea 4 | a–n |
| **8 — Climate Change** | 6 sections | Extension Topic B | a–i |
| **9 — Infectious Diseases** | 7 sections | Extension Topic A | a–k |

**Three consequences that change how sessions run:**

1. **Book 1 ≠ Core Idea 1 — it is short by four LOs.** Stem cells (LO t–u) sit in Core Idea 1 on the
   syllabus but are taught in **Book 3**; virus structure and the cell-theory challenge (LO e–f) sit in
   Core Idea 1 but are taught in **Book 4** (chapter 4.1 reprints LOs 1(e) and 1(f) verbatim on its
   learning-outcomes page). A Book-1 session that claims Core Idea 1 coverage is over-claiming by
   **e, f, t, u**. What Book 1 *does* carry that is easy to miss: chapter 1.5 prints LO 1(a) cell theory
   and LO 1(d) the typical bacterial cell, so prokaryotic cell structure is Book 1, not Book 4.
2. **Book 3 is the synthesis book.** It pulls from three Core Ideas at once, which is exactly the
   shape of the P3 Section A Q1 multi-topic anchor (§4). Treat it as the highest-leverage Book for
   cross-topic questions, not as four unrelated chapters.
3. **The `inputs/Biology/H2/*/chapter_notes/*.md` files are NOT the taught notes.** They are Notion
   exports carrying only mastery ratings, session dates and Ethan's own confusion jottings (26 files,
   **5–107 lines** each against 10–46-page source chapters; several are nothing but a mastery star and
   a Drive link). They must never be used as content ground truth for a guide, cluster or question.
   The taught material is the Book PDFs above. `[SCHOOL]`

### Core Idea 1 — The Cell and Biomolecules of Life  (LOs a–u) `[OFFICIAL]`
- [ ] **Cell_Structure** — cell theory (a); organelle/EM/photomicrograph ID + functions (b,c); typical bacterial cell — peptidoglycan, circular DNA, 70S, no membrane-bound organelles (d); virus structure incl. enveloped + bacteriophage (e); **discuss how viruses challenge cell theory** (f, the distinctive H2 AO3 hook); microscopy + graticule/stage-micrometer + magnification.
- [ ] **Biomolecules** — α/β-glucose, glycerol+fatty acids, amino acids (g; R-group formulae NOT required); glycosidic/ester/peptide bond formation & breakage by condensation/hydrolysis (h); starch/cellulose/glycogen/triglyceride/phospholipid structure→function (i); protein 1°–4° + the four bond types (m); temp/pH denaturation (n); **haemoglobin (globular) & collagen (fibrous)** structure→function (o; amino-acid counts / 2° counts NOT required).
- [ ] **Cell_Membranes** — fluid mosaic model + roles of phospholipids/proteins/glycolipids/glycoproteins/cholesterol (j); surface vs intracellular membrane functions (k); transport: simple diffusion, osmosis, facilitated diffusion, active transport, endo/exocytosis (l).
- [ ] **Enzymes** — mode of action: active site, ES complex, lowering Ea, specificity, lock-and-key vs induced-fit (p); investigate temp/pH/[E]/[S] on rate (q); competitive vs non-competitive (incl. allosteric) inhibitor structure (r) and effect (s).
- [ ] **Stem_Cells** — totipotency/pluripotency/multipotency with zygotic/embryonic/blood(lymphoid+myeloid) examples (t); normal functions of ESCs and blood stem cells (u).

### Core Idea 2 — Genetics and Inheritance  (LOs a–dd) `[OFFICIAL]`
- [ ] **DNA_Structure_and_Replication** — structure & roles of DNA + RNA (tRNA/rRNA/mRNA) (a); replication + end-replication problem (b); DNA→polypeptide incl. pre-mRNA→mRNA (c); gene mutation (substitution/addition/deletion, frameshift) + chromosomal aberration (numerical/aneuploidy/trisomy-21; structural) (k); mutation→disease incl. **sickle cell** (l); bioethics of maternal screening incl. trisomy-21 (m).
- [ ] **Genome_Organisation** — viral/prokaryotic/eukaryotic genome comparison axes (d); non-coding DNA: introns, centromeres, telomeres, promoters, enhancers, silencers (h) (transposons/satellite/pseudogenes/duplication NOT required).
- [ ] **Viral & bacterial genetics** *(cross-folder: DNA_Structure notes + Infectious_Diseases)* — viral genome inheritance: lytic/lysogenic incl. **λ phage**, enveloped incl. **influenza**, retrovirus incl. **HIV** (e); viral variation incl. **antigenic shift vs drift** (f); prokaryote binary fission + transformation/transduction/conjugation incl. **F plasmid (not Hfr)** (g). *Give this an explicit topic-guide home — see §7.*
- [ ] **Gene_Expression_Control** — five-level differential regulation: chromatin (histone mod + DNA methylation), transcriptional (control elements + TFs), post-transcriptional (splicing/polyadenylation/5'-capping), translational (RNA half-life + initiation), post-translational (modification + degradation) (i).
- [ ] **Molecular_Techniques** — PCR (+ advantages & limitations), gel electrophoresis, Southern blotting + nucleic-acid hybridisation (j).
- [ ] **Inheritance** — locus/allele/dominant/recessive/codominant/homo-/heterozygous/phenotype/genotype/linkage (u); inheritance via gametes (v); genotype→phenotype (w); dihybrid + codominance/multiple alleles/sex linkage/autosomal linkage/epistasis (x); test crosses (y); linkage & crossing-over effect on ratios (z); epistasis problem-solving (aa; specific ratios NOT required); environment×phenotype incl. honeybee diet (bb); continuous vs discontinuous variation (cc); **chi-squared test** (dd). `[type override → quantitative for chi-squared/COV]`
- [ ] **Cell cycle / mitosis / meiosis** *(cross-folder: Inheritance notes `3b_Cell_&_Nuclear_Division`)* — mitotic cycle + stages (n); significance + tight regulation, dysregulation→cancer (o; mechanism detail NOT required); meiosis stages (s) + significance/variation (t). *Give this an explicit topic-guide home — see §7.*
- [ ] **Cancer** — causative factors: genetic, chemical carcinogens, ionising radiation, loss of immunity (p); loss-of-function tumour suppressors (**p53**) + gain-of-function proto-oncogenes (**ras**) → uncontrolled division (q); multi-step: mutation accumulation + angiogenesis + metastasis (r).

### Core Idea 3 — Energy and Equilibrium  (LOs a–p) `[OFFICIAL]`
- [ ] **Photosynthesis** — chloroplast component ID (a); absorption vs action spectra (b); light-dependent reactions + chemiosmosis (c; ETC complex names & ATP synthase detail NOT required); Calvin cycle three phases + rubisco/ATP/reduced NADP (d; intermediate structures & other enzyme names NOT required); limiting factors (e).
- [ ] **Respiration** — glycolysis (f), link + Krebs by decarboxylation/dehydrogenation (g), oxidative phosphorylation + O₂ + ETC (h; complex names, ATP synthase detail, total-ATP-yield calc NOT required); anaerobic in yeast/muscle (i); ethanol/lactate → NAD regeneration (j); investigate rate factors (k); chemiosmosis in both photosynthesis & respiration (l).
- [ ] **Cell_Signalling** — stages: ligand–receptor, transduction (phosphorylation cascade + amplification), response (change in gene expression) (m; intracellular receptors NOT required); second messengers incl. cAMP (n); kinases & phosphatases in amplification (o); insulin (RTK) & glucagon (GPCR) blood-glucose outline (p; specific second messengers/kinases NOT required).

### Core Idea 4 — Biological Evolution  (LOs a–n) `[OFFICIAL]`
- [ ] **Evolution** — variation (mutation/meiosis/sexual reproduction) (a); environmental factors as selection forces (b); natural selection in evolution (c); population as smallest evolving unit (d); preservation of variation incl. harmful recessives (e); descent with modification + micro↔macro link (f); evidence (molecular + anatomical homologies + biogeography/Wallace) (g); species concept + limitations (h); classification + establishing evolutionary relationship (i); allopatric vs sympatric speciation (j); phylogeny (k); genome sequences + molecular methods + multiple sequence alignment (l); **Hardy-Weinberg** model + conditions (m) and calculation (n). `[type override → quantitative for Hardy-Weinberg]`
- [ ] **Biostatistics** *(cross-cutting toolkit, not a standalone LO topic)* — SD (n−1 divisor), t-test (v=n₁+n₂−2), chi-squared (v=c−1), levels of significance (p=0.05), normal distribution, R₀, Hardy-Weinberg, rates/graphs. **Standard error & sₙ vs sₙ₋₁ EXPLICITLY EXCLUDED.** `[OFFICIAL]` (syllabus p.25). `[type override → quantitative]`

### Extension Topic A — Infectious Diseases  (LOs a–k) `[OFFICIAL]`
- [ ] **Infectious_Diseases** — adaptive vs innate immunity + active/passive × natural/artificial 2×2 (a); B/T cells, APCs, memory cells in 1°/2° responses (b); **IgG** structure→function (c); antibody diversity: somatic recombination + hypermutation + class switching (d); vaccination breaks transmission cycle + smallpox eradication (e); benefits/risks of vaccination (f); HIV→helper-T cells, influenza→respiratory epithelium (g); **M. tuberculosis** transmission (h); antibiotics incl. **penicillin** on bacteria, selective toxicity (i); **R₀** as transmissibility + outbreak prediction (j); outbreak/epidemic/pandemic (k).

### Extension Topic B — Impact of Climate Change on Animals and Plants  (LOs a–i) `[OFFICIAL]`
- [ ] **Climate_Change** — human drivers via GHG accumulation **limited to CO₂ + methane** (a); effects of emissions (ice caps, sea level, extreme weather, freshwater stress, fish/insect migration, coral/seagrass/mangrove stress, permafrost release) (b); mangrove mitigation/blue carbon (c); carbon footprints across activities (d); food-supply consequences of stress (e); stress on habitats/food chains/niches (f); tropical biodiversity loss incl. biomedicines/food genetic diversity (g); temperature×insects (↑metabolism + narrow tolerance, **Aedes aegypti** life cycle) (h); global warming × spread of **malaria & dengue** beyond tropics (i).

> **Two Extension Topics together = ~15% of the H2 curriculum**, both compulsory, both deliberately
> **application/discuss-heavy**. `[OFFICIAL]` (syllabus p.6).

---

## 4.0 MEASURED from the 9477 specimen papers `[OFFICIAL]` — this section outranks §4

Added 2026-08-06 after reading all four **9477 specimen papers** end to end. These are counts from the
actual papers, not estimates from the 9744 corpus. **Where §4.0 and §4 disagree, §4.0 wins.**

**Caveat that does not go away: the specimen papers ship WITHOUT a mark scheme.** So §4.0 raises
confidence about the *shape* of the paper to `[OFFICIAL]`, and changes nothing about *how answers are
marked*, which stays `[SCHOOL]`.

**One structural fact spans P1 and P2: questions run in syllabus Learning-Outcome order, not in school
Book order.** Corrected 2026-08-10 — an earlier version of this line said "Book 1 → Book 9", which the
specimens do not support. P1 sweeps **Core Idea 1 → 2 → 3 → 4 → Extension Topics** once: Q1–8 Core Idea 1,
Q9–18 Core Idea 2 *in LO order* (a–c, d, e–f, g, h–i, j, k, q, s, z), Q19–22 Core Idea 3 (photosynthesis →
respiration → signalling), Q23–25 Core Idea 4, Q26–28 climate, Q29–30 infectious disease. That is
**not** Book order — Book 4 material (viral and bacterial genetics) sits inside the Core-Idea-2 run at
Q11–12, and Book 3 material is scattered across Q15–17 and Q22. P2 follows the same Core Idea ramp with
**one genuine break: Q6 (mitosis, Core Idea 2) sits between Q5 and Q7, both Core Idea 3.** Both papers
also put **climate before infectious disease**, which reverses the syllabus's own A-then-B ordering of
the Extension Topics. Position predicts topic, but predict from the LO list, not from the Book spines.

### Paper 1 — 30 MCQ, 1 h, 30 marks

| Archetype | Count /30 | What it demands |
|---|---|---|
| **Plain single-fact recall** | **4** | the *only* 4 questions answerable from memory alone |
| "Which row" grid/table | **7** | every cell of the row right — a 4-way simultaneous decision |
| Numbered-statement combination ("1, 2 and 3") | **5** | every statement judged independently |
| Unfamiliar-context stimulus (novel passage, apply theory) | **8** | pure AO3 |
| Diagram / graph / flow-chart interpretation | **9** | (overlaps the rows above) |
| Genuine calculation | **1** | standard-form arithmetic |
| Negative stem ("does NOT") | **1** | |

*Counting note (added 2026-08-10): the row-grid, numbered-statement, calculation and negative-stem counts
are exact reads of the printed paper and re-verified. Sorting a question into "plain recall" versus
"unfamiliar-context stimulus" is a judgement applied to official material — those two rows are
`[INFERRED]` buckets over an `[OFFICIAL]` paper. Q21 (locations of the link reaction and oxidative
phosphorylation) is recall wearing a row grid, so "plain recall" could defensibly read 5.*

**26 of 30 are applied, not recall.** Four questions carry **long-prose distractors** where each of
A–D is 2–4 full sentences; one is roughly 200 words of options on its own. **At 2 minutes a question,
reading load is a real constraint** — that is a timing risk, not a knowledge risk, and it is trainable.

### Paper 2 — 9 questions, 2 h, 90 marks

- **Exactly 9 compulsory questions, no sections.** Marks per question: **9, 8, 12, 11, 7, 11, 12, 13, 7**.
  Range 7–13, mean 10. **There is no short opener and no 20-mark monster** — it is a flat run.
- **36 answerable parts** (recounted 2026-08-10; this bullet previously said 34). Part sizes:
  **[1]×5, [2]×16, [3]×9, [4]×4, [5]×2** — which sums to exactly 90, the arithmetic check the old
  figures failed. **Two marks is the modal part, and nothing exceeds [5].** Long single-part answers do
  not appear on this paper.
- **Every question is stimulus-led** — all nine carry at least one named Figure or Table. But only
  **five of nine actually open on one** (Q1, Q2, Q3, Q6, Q8). Q4, Q5, Q7 and Q9 open on prose or a
  bulleted method and bring the figure in later, so do not assume the stimulus is the first thing on the
  page. *(Corrected 2026-08-10; previously read "eight of nine open on a named Figure or Table".)*
- **Command-word census (recounted 2026-08-10 off the instruction lines):** ***Explain* ×12 — the house
  verb**, exactly a third of the 36 parts. Then *State* ×7, *Describe* ×5 (three standalone plus two
  riding a "With reference to Figure…" lead-in), *Outline* ×2, *Suggest* ×2, *Complete* ×1 (a single
  instruction covering three [1] sub-parts — the old "×3" counted the sub-parts), *Calculate* ×1,
  *Draw* ×1, *Identify* ×1.
- **Statistics is ~12% of the paper in one block** — Q4 is 11 of 90 marks: a genetic diagram [4], a
  percentage [1], **three separate [1] table-completion parts** (expected numbers, two missing values,
  the χ² value) and a conclusion-plus-explanation [3]. *(Corrected 2026-08-10 — the completion work is
  three [1] parts, not one [3], and the conclusion is [3], not [3]+[3].)*
- **Cross-topic bridging inside a single question is normal**, e.g. gene mutation → chromosome mutation
  → cancer → graph analysis. Expect to be moved between Books mid-question.
- **The standard 3-mark shape is data-lift-plus-explain:** quote the figures *and* account for them.
  Quoting without explaining, or explaining without quoting, halves the mark.

### Paper 3 — 2 h, 75 marks (Section A 55 + Section B 20)

- **Section A: 3 compulsory questions worth 32, 11 and 12** — the paper prints `[Total: n]` at the foot
  of each, so these are stated, not derived. Part counts: Q1 = 14, Q2 = 4, Q3 = 7.
- **The headline finding: Q1 is a single 32-mark question, 43% of the paper**, built on one extended
  research narrative with **14 separately-marked parts** ([1]×6, [2]×3, [3]×2, [4]×2, [6]×1 = 32;
  recounted 2026-08-10, this previously read 19), walking across genome organisation →
  endosymbiosis → respiration → nature of science → meiosis → PCR → molecular phylogeny → species
  concept → continuous variation. **Every Book in the syllabus is reachable from one stem.** A
  single-topic answer to Q1 is a structural failure, not a knowledge gap.
- **Real published science is the stimulus**, with named researchers, dates and sample sizes (Cann,
  Stoneking and Wilson 1987, n = 147; Ingman 2000, n = 53) — and **nature of science is directly
  examinable**. Verbatim stem: *"State one reason why repeating the work of others is an important part
  of scientific research."* [1] *(The earlier paraphrase "why do scientists replicate work?" was printed
  here in quotation marks and was not the paper's wording.)*
- **The signature Paper 3 move is calculate-then-evaluate:** a multi-step calculation followed
  immediately by a **"comment on…"** part. The calculation exists to be *judged*, not just produced.
- **"Name precisely…" 1-mark parts** demand exact technical vocabulary (somatic recombination, class
  switching, somatic hypermutation) — three in a row in one question. This is where lexical strictness
  bites hardest.
- **Section B: choose 1 of 2, 20 marks, continuous prose, "illustrated by large, clearly labelled
  diagrams".** Each option is a **single undivided prompt carrying one `[20]` tag** — no (a)/(b) split,
  no internal mark allocation. The two options were *"With reference to named examples, describe the
  different roles of proteins in living organisms"* and *"With reference to a wide range of examples
  relevant to prokaryotes, eukaryotes and viruses, outline different ways in which molecules can enter
  cells"* — both anchored in Book 1, though the second explicitly reaches into viral and prokaryotic
  material. **Essays are breadth-first**: the reward is spread across the syllabus plus diagrams, and
  the wording of both options makes breadth the load-bearing instruction.

### Paper 4 — 3 questions, 2 h 30 min, 50 marks

Q1 = 20 (quantitative wet practical), Q2 = 20 (microscopy + measurement), Q3 = 10 (free planning
question, single unbroken award).

> **This changes the "skip practicals" decision.** Roughly **40% of Paper 4 (about 20 of 50 marks) needs
> no apparatus at all** — sketch-and-explain, designing a results table, plotting, limiting-factor
> reasoning, validity, improvements, choosing a statistical test, interpreting p < 0.05, and the
> entire 10-mark planning question. Paper 4 is 20% of the grade, so **that apparatus-free portion is
> about 8% of the total A-level** and is reachable from a desk. `[INFERRED]` — the mark totals are
> official but deciding which parts truly need the bench is a judgement; a strict count gives ~19 marks
> (Q3's 10, Q1(a)'s 4, Q1(d)'s 1, Q2(e)'s 4) and a loose one gives ~26. The bullet list of plan
> requirements printed in Q3 *is* the mark-scheme skeleton. `[INFERRED]`
>
> **Risk assessment is NOT excluded from 9477** *(corrected 2026-08-10 — this bullet previously said it
> was).* The specimen waived it **for that one question**: "You can assume that a risk assessment for
> this investigation has already been carried out so there is no need to include reference to safety
> measures." That is a per-question rubric, not a syllabus rule. Syllabus p.22, skill area **P
> (Planning)**, still lists "assess the risks of the experiment and describe precautions that should be
> taken to keep risks to a minimum" as an assessable outcome. `[OFFICIAL]` A live paper may require it.

---

## 4. Question Archetypes & Distribution

> **Superseded in part by §4.0.** Frequencies below are `[INFERRED]` — estimated from the 9744/9648 JC
> prelim corpus. Retained because the prelim corpus is where the *marking* evidence lives and because
> it covers per-topic detail the single specimen cannot. Where a number here contradicts a measured
> count in §4.0, **§4.0 wins**. Format weights are `[OFFICIAL]` from §1.
>
> **Re-based 2026-08-10 against the rebuilt question bank** at `Study Agent/Bio/_question_bank/` —
> 27 topic files, **9,067 records** (2,187 base / 3,953 harder / 2,927 hardest), tagged by source paper:
> 3,699 from P2, 2,337 from P1, 1,946 from P3, 428 from P4, 675 untagged. That is now the largest
> frequency evidence available and it beats the old digest estimates wherever the two disagree. It is
> still **prelim evidence, still `[INFERRED]` for the live 9477 paper** — a bank built from school
> papers can only tell you what schools set.

**Subject-wide question archetypes (cross-topic):**

| Archetype | Approx. share of marks | Where it appears | Tag |
|---|---|---|---|
| **Data/figure interpretation** ("With reference to Fig… describe the trend, then explain") | ~30–35% | P1, P2 (**≥53%** of banked P2 sub-parts name a Figure/Table — floor, not ceiling; the old "80–90%" was a 9744 digest estimate and the bank does not reach it), P3 Sec A | `[SCHOOL]/[INFERRED]` |
| **Mechanism "Explain" causal chain** (cause→effect, each link a mark) | ~25% | P2, P3 | `[OFFICIAL]` AO-A/B; `[SCHOOL]` shape |
| **Structure→function** (paired S/F; haemoglobin, glycogen, cellulose, membranes, DNA) | ~10–12% | P2, P3 essay | `[SCHOOL]` |
| **Compare / distinguish** (both sides, same axis) | ~8% | P1 row-match, P2, P3 essay | `[SCHOOL]` |
| **Apply-to-novel-context "Suggest"** (AO3; appears in *every* paper) | ~12–15% | P1, P2, P3 | `[OFFICIAL]` AO-B; `[SCHOOL]` freq |
| **Quantitative** — chi-squared dihybrid (every P2), Hardy-Weinberg, SD/t-test, COV, magnification | ~6–8% | P1, P2, P3 (computation); P4 (understanding) | `[OFFICIAL]` toolkit; `[INFERRED]` freq |
| **Genetic-diagram drawing** (P→F1→F2, gametes circled, ratios; brackets for linkage) | ~3–5% | P2 (≈1 per paper) | `[SCHOOL]` |
| **Discuss / Evaluate** (balanced both-sides + judgement) | ~5% | P3 essay, Extension topics, LO(f) virus-vs-cell-theory, bioethics | `[OFFICIAL]` command; `[SCHOOL]` freq |
| **Recall-into-application** (define/state lifted into a use) | ~10% | P1, P2 openers | `[SCHOOL]` |
| **Multi-topic synthesis** (P3 Section A Q1 integrates **≥3 topics** in one stimulus) | the P3 Q1 anchor (~28–32m under 9744) | P3 Section A | `[SCHOOL]/[INFERRED]` |

**The cross-topic synthesis rule is the single most exam-shaping pattern.** `[OFFICIAL]` (syllabus
explicitly: P2 and P3 "require candidates to integrate knowledge and understanding from different areas
of the syllabus"; P3 assesses "analysing, making conclusions and evaluating"). `[SCHOOL]` evidence:
P3 Q1 in recent prelims fuses Cancer+Signalling+Cell Cycle+DNA, or Climate+Evolution+Energy, in a single
clinical/ecological narrative. **A single-topic answer to a P3 Q1 misses the synthesis marks.**

**P1 MCQ stem types** — *rewritten 2026-08-10. The old line copied the 9744 digest's estimates
(row-matching ~10/30, multi-statement ~8/30, diagram ~6/30, data-conclusion ~4/30, reverse-logic ~2/30,
calculation ~2/30). Those sum to 32 of 30, and both the specimen and the bank contradict several of
them.* Measured against the **2,337 P1 records in the bank**, cross-checked against the specimen's 30:

| Stem type | Bank share of P1 records | ≈ per 30-Q paper | Specimen count | Tag |
|---|---|---|---|---|
| Multi-statement combination ("1, 2 and 3") | 16.9% | ~5 | **5** | `[INFERRED]` + `[OFFICIAL]` check |
| Reverse-logic ("which is NOT / EXCEPT") | 2.6% | ~1 | **1** | `[INFERRED]` + `[OFFICIAL]` check |
| Carries a figure, micrograph, graph or data block | ≥50.9% | ~15 | 9 counted as *interpretation* items | `[INFERRED]` |
| Row-matching grid | 6.8% *by the literal phrase "Which row"* | ~2 literal | **7** once non-literal grids count (e.g. "Which organelle is found in each of the sediments?") | `[INFERRED]` floor |

The row-matching row is the one to distrust: the bank search only catches the literal phrase, so 6.8%
is a hard floor and the specimen's 7-in-30 is the better planning number. Multi-statement and
reverse-logic agree between bank and specimen to within one question, which is the strongest frequency
signal in this guide. `~80% application/data-interpretation` survives; `~60% figure-stimulus` is
consistent with the bank's ≥51% floor.

**P3 Section B essay** (`[OFFICIAL]` 20-mark free-response — see §4.0 for the shape). *Corrected
2026-08-10: the (a)+(b) split described here previously is a **9744 / JC-prelim convention**, not a 9477
one. The specimen prints each option as one undivided 20-mark prompt.* The part-(a) descriptive-breadth
and part-(b) evaluative moves are still worth drilling as **two things one 20-mark answer must now do
inside a single piece of prose** — describe with named examples across a wide range, and reach a
judgement — rather than as two separately-marked halves.

**Recurring essay themes** `[SCHOOL]`, and the ceiling on them is low. The ranking below comes from a
**single source**: the cross-corpus digest's sample of "30+ essay options across 2017–2025", all 9744.
**The rebuilt question bank cannot corroborate it** — it holds only two essay-sized records ([20]×2),
both of them the 9477 specimen's own options, and zero at [25]. Treat this as one analyst's tally of one
sample, not a measured distribution. Reordered 2026-08-10 to match that source's actual counts, which
the old line ranked wrongly (it placed cancer 8th when cancer is last):

variation/genetics/evolution **9/30** · enzymes/biomolecules structure-function **8/30** ·
photosynthesis/respiration/energy/ATP **8/30** · DNA/gene regulation/mutations **7/30** ·
cell signalling/hormonal regulation **6/30** · virus/immunity/vaccines **6/30** · membranes/transport
**6/30** · climate/ecology/biodiversity **5/30** · mitosis vs meiosis **5/30** · cancer **4/30**.

One live data point against that ranking: the 9477 specimen's two options were **proteins** (rank 2) and
**membranes/transport** (rank 7). Do not treat the tail of this list as safe to skip.

---

## 5. Trap Model (misconceptions the exam exploits) — THE most valuable section

Every distractor in a generated question must encode one of these **real, file-traceable** traps
(spec.md §7) — no invented distractors. Tags show authority. Sources are the per-topic intelligence
blocks + sampled mark schemes + the examiner-patterns digest.

### Cross-topic / examiner-wide traps `[SCHOOL]`
| Trap | The wrong answer it produces | Source |
|---|---|---|
| **Approximate phrasing** accepted as if exact | "compact" for "tight"; "one of the smallest" for "smallest"; "pinch off" for "bud off" — marker rejects | examiner-patterns-reference L305 `[SCHOOL]` |
| **Describe vs Explain command slip** | answering "describe" with mechanism, or "explain" with only a trend | examiner-patterns L151–154 `[SCHOOL]` |
| **Compare gives only one side** | listing differences but no similarity (or vice versa) — caps at 1 mark | examiner-patterns L156; YIJC 2025 `[SCHOOL]` |
| **Discuss answered one-sidedly** | "climate is bad" / "vaccination is good" with no counter-side or judgement | examiner-patterns L157 `[SCHOOL]` |
| **Essay breadth failure** | over-depth on one molecule; a "polymers" essay covers only carbs | examiner-patterns L250, L515 `[SCHOOL]` |
| **Generic naming** | "gene X"/"a protein" where p53/ras/VEGF/rubisco/Taq is required | examiner-patterns L525 `[SCHOOL]` |
| **Reversed direction** (the universal MCQ distractor) | water enters vs leaves; ↑ vs ↓ gradient; gain vs loss of membrane | examiner-patterns L127, L321 `[SCHOOL]` |
| **Prokaryote↔eukaryote / virus-generalisation** | true for one, wrongly generalised | examiner-patterns L130–131 `[SCHOOL]` |

### Topic-anchored traps (drive distractors for each topic's questions)
| Topic | Trap | The wrong answer it produces | Source |
|---|---|---|---|
| Biomolecules | Structure stated without paired function (or vice versa) | bare "1,4 glycosidic coils" with no "compact → storage" | HCI 2013 P2 S/F table `[SCHOOL]` |
| Biomolecules | Cellulose ↔ amylose monomer / H-bond direction swap | "cellulose = α-glucose / OH inward" | NJC 2013 P2 `[SCHOOL]` |
| Biomolecules | Collagen called a single-chain α-helix | conflating triple helix with 2° α-helix / amylose helix | 1c_Proteins.md SIR gaps `[INFERRED]` |
| Biomolecules | Denaturation = "stops working" with no bond/conformation mechanism | omits H-/ionic-bond disruption → active-site shape change; over-claims peptide bonds break | LO(n); NJC enzyme scheme `[OFFICIAL]+[SCHOOL]` |
| Cell_Structure | Heterochromatin/chromosome written for an active region | scheme rejects; accepts euchromatin/chromatin | NJC/HCI 2013 P2 `[SCHOOL]` |
| Cell_Structure | 70S = 80S ("ribosomes are the same") | breaks antibiotic-selectivity answers | NJC 2013 P2 `[SCHOOL]` |
| Cell_Structure | Virus "is non-living" as a flat assertion | LO(f) "discuss" needs both sides + judgement | LO(f) `[OFFICIAL]` |
| Cell_Membranes | Endocytosis ↔ exocytosis: which **gains vs loses** membrane | reversed (YIJC 2025 MCQ: 45% correct) | prelims-2023-2025; chapter L27 `[SCHOOL]` |
| Cell_Membranes | Cholesterol one-directional | gives only "↓ fluidity at high temp", omits "prevents freezing at low temp" | chapter_notes L49–55 `[INFERRED]` |
| Cell_Membranes | Active transport vs facilitated diffusion conflated | calls aquaporin osmosis "facilitated", omits "ATP + against gradient" | chapter L23–26; RI 2023 Q4 `[SCHOOL]` |
| Enzymes | Competitive inhibitor "permanent/irreversible" | omits "binds reversibly / overcome by high [S]" | MI 2011 Q1c `[SCHOOL]` |
| Enzymes | Non-competitive said to "block the active site" | must be allosteric site + conformational change; Vmax not restored | RVHS 2011 Q2e `[SCHOOL]` |
| Enzymes | Wrong bond named for the wrong factor | "pH breaks H-bonds" / "temp changes R-group charge" | RVHS 2011 Q6c `[SCHOOL]` |
| Enzymes | Saturation plateau = "denatured / no substrate" | should be "all active sites occupied → [E] now limiting" | MI 2011 Q1b `[SCHOOL]` |
| Stem_Cells | ESC "can form all cell types / whole organism" | only **totipotent zygotic** form extra-embryonic/placenta | HCI/IJC/MJC 2013 P2 `[SCHOOL]` |
| Stem_Cells | Blood stem cells called pluripotent | HSCs are **multipotent** (myeloid+lymphoid only) | HCI 2013 P2 `[SCHOOL]` |
| DNA_Replication | DNA pol synthesises "any direction" | omits adds only to free **3′-OH** → needs primer | NJC 2013 P2 `[SCHOOL]` |
| DNA_Replication | Each H-bond treated as strong | stability is **cumulative** weak H-bonds + base-stacking | chapter 2a L52–55 `[INFERRED]` |
| DNA_Replication | Any indel = frameshift | indels in multiples of 3 do **not** shift frame | chapter 2e L23 `[INFERRED]` |
| Gene_Expression | Methylation "activates"; "RNA pol binds TATA directly" | methylation silences; **GTFs** bind promoter first | LO(i)i; SAJC P2 `[OFFICIAL]+[SCHOOL]` |
| Gene_Expression | Control treated as transcription-only | LO(i) demands **all five levels** | LO(i) `[OFFICIAL]` |
| Gene_Expression | Eukaryotic gene in bacteria fails → "mutation" | bacteria lack **splicing machinery** → introns translated | NJC 2013 / SAJC 2011 P2 `[SCHOOL]` |
| Genome_Organisation | Silencer/repressor & enhancer/activator swapped (DNA vs protein) | scheme: "AP1 = activator (R! repressor), binds enhancer (R! silencer)" | ACJC 2013 P2 `[SCHOOL]` |
| Genome_Organisation | Packing stops at nucleosome | omits 30-nm solenoid coil (separate mark) | HCI/RVHS P2 `[SCHOOL]` |
| Genome_Organisation | Prokaryotes "have telomeres" | circular genome → no free ends → none | chapter 2c L44 `[INFERRED]` |
| Molecular_Techniques | "bromothymol" for the loading dye | it is **bromophenol** blue | chapter 2f SIR gap `[INFERRED]` |
| Molecular_Techniques | DNA fragment size "inversely **proportional**" to migration | relationship is **logarithmic/inverse**, not proportional | chapter 2f SIR gap `[INFERRED]` |
| Molecular_Techniques | Procedure without purpose | omits "glycerol → density → sinks"; "stain → UV visualisation" | RVHS 2011 P2 `[SCHOOL]` |
| Inheritance | Linked genes not bracketed | "A T / a t" — "R: Linkage not indicated by brackets" | ACJC 2012/2013 P2 `[SCHOOL]` |
| Inheritance | COV quoted as a fraction | "R: fraction" — must be % | ACJC P2 `[SCHOOL]` |
| Inheritance | Somatic change treated as heritable | only germ-line alleles inherited | HCI 2013 P3 (CFTR) `[SCHOOL]` |
| Inheritance | Non-disjunction: only one aneuploid product named | must give **(n+1) AND (n−1)**; gateway `*` point | ACJC P2 `[SCHOOL]` |
| Cancer | p53 called an oncogene | p53 is a **tumour suppressor** (loss-of-function) | examiner-patterns L329; LO(q) `[SCHOOL]+[OFFICIAL]` |
| Cancer | Tumour-suppressor/oncogene allele logic inverted | TS = both alleles (recessive); proto-oncogene = one (dominant) | 3c_Cancer.md; LO(q) `[OFFICIAL]` |
| Cancer | One mutation treated as sufficient | LO(r) = multi-step (mutations + angiogenesis + metastasis) | syl LO(r) `[OFFICIAL]` |
| Cancer | Angiogenesis ↔ metastasis confused | wrong causal order; metastasis "without blood supply" | 3c_Cancer.md `[INFERRED]` |
| Photosynthesis | ATP made "in the thylakoid space"; H⁺ pumped "into stroma" | ATP in **stroma**; H⁺ pumped stroma→lumen | HCI/NJC 2013 P2 `[SCHOOL]` |
| Photosynthesis | NADP-reductase failure → "RuBP rises" | RuBP is **depleted** (fixation continues, regeneration stops) | NJC 2013 P2 Q6b `[SCHOOL]` |
| Photosynthesis | Absorption/action mismatch with no accessory-pigment cause | must credit carotenoids passing energy by resonance | RI 2013 P2 Q4 `[SCHOOL]` |
| Respiration | ATP-production mode mislabelled (substrate-level vs oxidative) | glycolysis = substrate-level; ETC = oxidative | RVHS 2011 P2 `[SCHOOL]` |
| Respiration | Anaerobic "significance" omitted | must close loop to **NAD⁺ regeneration** so glycolysis continues | LO(i),(j) `[OFFICIAL]` |
| Respiration | Over-detailing excluded content | naming ETC complexes / "38 ATP" / glycolysis enzymes (NOT required) | LO(f)–(h) `[OFFICIAL]` |
| Cell_Signalling | Cascade proteins called "second messengers" | only small diffusibles (cAMP/Ca²⁺) are | HCI 2011 P1 `[SCHOOL]` |
| Cell_Signalling | Hormone–receptor–effect triad swapped | glucagon→GPCR→glycogenolysis; insulin→RTK→glycogenesis | IJC 2011 P1 `[SCHOOL]` |
| Cell_Signalling | Kinase vs phosphatase / phosphatase omitted | kinase adds-P to activate; phosphatase removes-P to switch off | SRJC 2011 P2 `[SCHOOL]` |
| Cell_Signalling | Syllabus over-reach | intracellular receptors / named kinases in insulin-glucagon (NOT required) | LO(m),(p) `[OFFICIAL]` |
| Evolution | "traits/characteristics passed on" (Lamarckian) | scheme auto-rejects; must be **alleles** | SAJC 2021 P2/P3 `[SCHOOL]` |
| Evolution | Omitting "survive to reproductive age" + "allele frequency change over time" | the marks that address the word "evolution" | SAJC 2021 P2 `[SCHOOL]` |
| Evolution | Same-location temporal isolation called "sympatric/behavioural" | scheme rejects | SAJC 2021 P3 `[SCHOOL]` |
| Evolution | Analogous mistaken for homologous | superficial similarity ≠ common ancestry | DHS 2023 P3 `[SCHOOL]` |
| Biostatistics | Wrong df: v=n−1 for chi-squared instead of **v=c−1** | t/SD habit imported | syllabus p.25 `[OFFICIAL]` |
| Biostatistics | Calculated < critical called "significant" | rule inverted | syllabus p.25 `[OFFICIAL]` |
| Biostatistics | Importing **standard error** / sₙ vs sₙ₋₁ | explicitly excluded; wrong divisor | syllabus p.25 `[OFFICIAL]` |
| Biostatistics | Statistical verdict without biological conclusion (or vice versa) | both required | LO(dd); AO-B `[OFFICIAL]` |
| Infectious_Diseases | **Antigenic shift ↔ drift** swapped | shift = reassortment→pandemic; drift = point mutation→seasonal | LO Core-2(f) `[OFFICIAL]` |
| Infectious_Diseases | Antibiotics "kill viruses" / penicillin on viruses | penicillin targets bacterial peptidoglycan; viruses have no wall | LO(i) `[OFFICIAL]` |
| Infectious_Diseases | Vaccination called "passive"; passive said to give memory | vaccination = artificial **active**; passive has no memory cells | LO(a) `[OFFICIAL]` |
| Infectious_Diseases | HIV "attacks immune system" generically | must name **helper-T (CD4)** cell destruction | LO(g) `[OFFICIAL]` |
| Infectious_Diseases | R₀ misread (R₀<1 "epidemic"; conflated with severity) | R₀>1 spreads, <1 declines; herd threshold = 1−1/R₀ | LO(j) `[OFFICIAL]` |
| Infectious_Diseases | Antibody diversity = "mutations" only | needs all three: recombination + hypermutation + class switching | LO(d) `[OFFICIAL]` |
| Climate_Change | GHGs over-scoped (N₂O / water vapour / CFCs) | syllabus LO(a) restricts to **CO₂ + methane only** | LO(a) `[OFFICIAL]` |
| Climate_Change | Insect-temperature mechanism vague ("mosquitoes like warmth") | must be ↑metabolism + narrow tolerance → faster Aedes cycle | LO(h) `[OFFICIAL]` |
| Climate_Change | Factorial CO₂×temp graph: factors conflated | attribute effects to correct factor + interaction | prelims-2020-2022 `[SCHOOL]` |
| Climate_Change | Climate answered as standalone | must synthesise Evolution + Energy in P3 Q1 | examiner-patterns L180–185 `[SCHOOL]` |

---

## 6. The Examiner's Mental Model

Beneath the surface, 9477 H2 Biology tests **whether the candidate can run a correct causal mechanism
across unfamiliar contexts and integrate it with the rest of the subject** — not whether they can recall
facts. `[OFFICIAL]` reading of the AO weighting: **AO-B (handling/applying/evaluating) = 44% > AO-A
(knowledge) = 36%**, and every Core Idea ends with the instruction *"Use the knowledge gained in this
section in new situations or to solve related problems."*

What the exam actually rewards:
1. **Causal chains, link by link.** "Explain" marks are awarded per causal step. The examiner is checking
   the *mechanism is intact*, not just that the endpoint is right. `[OFFICIAL]+[SCHOOL]`
2. **Precision as proxy for understanding.** Because gap-closure here is **qualitative**, the failure
   mode to hunt is **shallow recall dressed as understanding** — naming a level/bond/structure without
   the structure→property→function logic. Markers police this with exact-wording reject lists. `[SCHOOL]`
3. **Breadth on demand, depth on demand — read the command word.** "Describe roles of X" = breadth across
   named examples; "Explain how X enables Y" = one deep chain. Mismatching scope is the top essay failure
   mode. `[SCHOOL]`
4. **Data first, biology second.** Most marks hang off a figure/table: quote the data (with units/figures)
   *then* explain. AO-B is the largest objective. `[OFFICIAL]`
5. **Synthesis across Core Ideas.** P2/P3 deliberately fuse topics; the examiner wants the candidate to
   move between Cell↔Genetics↔Energy↔Evolution↔Disease↔Climate in one answer. `[OFFICIAL]`
6. **Stay inside the named scope.** The syllabus is studded with explicit **exclusions** (R-group
   formulae, ETC complex names, ATP-synthase mechanism, total-ATP-yield calc, intracellular receptors,
   specific second messengers/kinases, epistasis ratios, standard error, transposons/satellite DNA,
   GHGs beyond CO₂+methane). Over-answering wastes time and **introduces errors that cost marks**. `[OFFICIAL]`
7. **AO3 honesty (Practices of Science).** Discuss/evaluate items expect balance + judgement + awareness
   of risk/benefit and the limits of drawing conclusions from limited data. `[OFFICIAL]`

**For this system:** because the default type is **qualitative**, a concept doc must *name the exact
misconception* (from §5), then the re-test uses a **new stem or new example** of the same concept. The
quantitative sub-strands (chi-squared, Hardy-Weinberg, SD/t-test, COV, magnification) are the only places
to drill **variants until mechanical** — declare that override in those topic guides.

---

## 7. Confidence & Validation Notes

### Honest ceiling: ~87% (MIXED). It cannot exceed ~92% without an official paper.
*(Aligned 2026-08-10 to the front-matter figure. This heading and the §7 closing paragraph still read
"~85%" after the specimen papers lifted the front matter to ~87% on 2026-08-06; the three figures now
agree. The number moves only because paper **format** is now `[OFFICIAL]` — nothing about marking has
improved.)*
- **`[OFFICIAL]` ~92% confident on WHAT is examinable.** Scope, AOs, paper structure, command-word
  meanings, mathematical requirements and every **exclusion** are read verbatim from the 9477 syllabus
  (`Biology_H2_syllabus_2026.pdf` / `syl.txt`). This is authoritative.
- **`[SCHOOL]` ~80% cap on HOW it is marked.** All marking DNA, traps, mark allocations and archetype
  shapes come from **JC prelim mark schemes (2011–2025, codes 9648/9744)** — never SEAB. SEAB publishes
  no 9477/9744 mark scheme or examiner report. The most authoritative single school source (YIJC 2025
  examiner reports) is still a school document.
- **`[INFERRED]` — directional only.** Archetype *frequencies* are estimated from the corpus, and the
  corpus is a different syllabus code (9744). Treat percentages as priors, not measurements. As of
  2026-08-10 the strongest available prior is the **9,067-record question bank** (§4), which is far
  larger than the old digest sample but is still school papers — a bigger sample of the wrong exam is
  still the wrong exam. Where the bank and the specimen agree (multi-statement MCQ share, negative-stem
  share) confidence is genuinely higher; where the bank alone speaks (essay themes — where it in fact
  holds only two essay records and cannot speak at all), it is not.
- **Corrected 2026-08-06 — the taught notes were never missing.** An earlier build recorded several
  chapter-notes folders as "empty Notion stubs". The truth is worse and better at once: **every**
  `inputs/Biology/H2/*/chapter_notes/*.md` file is a Notion export (mastery stars, session dates,
  self-jotted confusions), so none of them was ever a content source — while the **actual taught
  material for all nine Books has been present all along** as text-layer PDFs at
  `Study Agent/Bio/Book <N> - .../`. Content nodes should be rebuilt against those PDFs, Book by
  Book, as each topic session runs. See §3.0. `[SCHOOL]`

### 90% check (spec.md §5) — held-out result
Predicted the five dimensions against held-out **H2 prelim** items not used to build §2/§5 (HCI 2013 P2
Q2 euchromatin/heterochromatin; ACJC 2012 P2 Q5 linkage+COV; NJC 2013 P2 Q6 photosynthesis chemiosmosis;
HCI 2013 P3 cloning/intron application; SAJC 2011 P3 gel/genetics), then checked against the schemes:

| Dimension | Threshold | Result | Note |
|---|---|---|---|
| Exam format & structure | ≥95% | **PASS** (~96%) | 9477 figures `[OFFICIAL]`. The P3 Section-B uncertainty is **resolved as of 2026-08-10**: 20 marks, and the 9744 (a)+(b) split is gone — the specimen prints one undivided prompt. Residual uncertainty is now whether the specimen's *number* of P2 questions (9) and P3 Section A questions (3) is fixed; the syllabus says "a variable number" and "two or more", so it is not |
| Mark scheme (reward/band) | ≥90% | **PASS at the [SCHOOL] ceiling** (~88%) | Point-based, reject-lists, paired S/F, banding all predicted; capped because schemes are school not SEAB |
| Content nodes | ≥90% | **PASS** (~92%) | Held-out items mapped cleanly to LO-derived nodes |
| Question type & method | ≥85% | **PASS** (~88%) | Data→describe→explain, genetic-diagram and chi-squared predicted |
| Trap model | ≥85% | **PASS** (~87%) | Bracket-linkage, COV-fraction, RuBP-depletion, 3′-OH, S/F-pairing all matched |

All five clear their thresholds *for school-grade evidence*; the binding cap is the **absence of any
official 9477 mark scheme**, which holds the overall ceiling at ~87% and the marking dimension at the
`[SCHOOL]` level. **Not a LOW-confidence guide** (well above the <70% warning line), but **do not declare
any topic exam-ready on this guide's questions alone** (spec.md §9).

### Gaps filled from research
**None — no web research was performed.** Every Core Idea and both Extension Topics already have full
`[OFFICIAL]` LO coverage in the loaded syllabus and at least one `[SCHOOL]` chapter-notes or mark-scheme
source, so no syllabus-required topic was left missing or stubbed at the *node* level. Two LO clusters —
**viral & bacterial genetics** (LO 2(e)–(g)) and **cell cycle / mitosis / meiosis** (LO 2(n)–(o),(s)–(t))
— are real examinable scope folded into the DNA_Structure / Infectious_Diseases / Inheritance folders
rather than named as standalone study topics. Flagged in §3 so the topic-guide pass gives each an explicit
home; this is an organisation note, not a content gap.

### What would raise the ceiling (priority order)
1. **Ethan sits his first official 9477 specimen/past paper under timed conditions** — the only true
   readiness signal and the only thing that converts `[SCHOOL]`/`[INFERRED]` marking and frequency
   claims into verified data (spec.md §9 final gate).
2. ~~Any official SEAB 9477 specimen paper loaded into the corpus~~ — **DONE 2026-08-06.** All four
   **9477 specimen papers** (P1 MCQ, P2 Structured, P3 Long Structured + Free Response, P4 Practical,
   "For examination from 2026") are now at
   `Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`. These are the only
   genuinely Cambridge/SEAB assessment artefacts in the whole corpus and they define the live paper's
   shape. **Caveat: the specimen question papers are present without a published mark scheme**, so
   they lift the *format* dimension to `[OFFICIAL]` but leave the *marking* dimension at `[SCHOOL]`.
   The overall ceiling therefore moves only modestly. The follow-on task this item set — re-checking
   every §4 archetype frequency against the specimen instead of against 9744 prelims — **was completed
   2026-08-10**, alongside a line-by-line audit of §§0–7 against the syllabus, the four specimen papers
   and the question bank. Corrections are logged in the front-matter `last_change`.
   - ~~A question bank large enough to test frequency claims~~ — **DONE 2026-08-10.**
     `Study Agent/Bio/_question_bank/` now holds **9,067 records across 27 topic files** drawn from
     prelims 2011–2025 plus the specimens. It settles the P1 stem-type mix and the P2 figure-density
     question. It does **not** settle essay themes — it contains only two essay-sized records, both from
     the specimen. Sourcing real Section B essay stems (unsplit 20-mark, or the 25-mark prelim form) is
     the next highest-value bank gap.
3. ~~Populating the empty chapter-notes stubs~~ — **superseded.** The stubs were never the notes; see
   the correction above and §3.0. The real work is rebuilding each topic's content nodes against the
   Book PDFs, which happens naturally as each Book's topic session runs.
4. **9744/9477-era (not 9648) marked scripts** for the quantitative sub-strands → confirms per-step
   chi-squared / Hardy-Weinberg / COV marking.

### Recalibration trigger
Per spec.md §9/§12: if Ethan's session/model performance runs **>70%** but an **official past paper
scores <50%**, the guide is misaligned — find the mispredicting dimension and fix only that. As of
2026-08-10 the most likely culprits are, in order: **(1) essay themes** (single-source, 9744-only,
uncorroborated by the bank), **(2) the `[SCHOOL]` marking model in §2** (no SEAB scheme exists to check
it against), **(3) per-topic archetype frequencies**. The P3 Section-B shape is no longer a candidate —
the specimen settled it.
