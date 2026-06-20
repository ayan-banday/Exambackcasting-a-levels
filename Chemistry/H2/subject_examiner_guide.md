---
subject: Chemistry
level: H2
default_type: quantitative
status: BUILT
validation_source: MIXED   # [OFFICIAL] syllabus 9476/2026 scope, AOs, paper structure, LO wording, Data-Booklet/QA-Notes facts · [SCHOOL] ALL marking granularity + traps + archetype frequency (JC prelim schemes: HCI/AJC/MI/NYJC/ASRJC/CJC/PJC/RJC 2008–2023) · [INFERRED] paper-component splits + frequency weights
confidence_ceiling: "~85% (MIXED) — [OFFICIAL] scope ~95% · [SCHOOL] marking ~80% (no SEAB mark scheme exists) · [INFERRED] frequency ~60%"
last_updated: 2026-06-20
---

# Subject Examiner's Guide — Chemistry H2 (Syllabus 9476, Nov 2026)

> How this exam *thinks* across the whole subject. Built once (playbook 01); updated only on
> recalibration. Default gap-closure type is **`quantitative`** (spec.md §2) — reading never closes a
> gap; variants must be *solved* until mechanical. Many organic / explanation nodes legitimately
> **override to `qualitative`** at the topic level (see §6).
>
> **HONESTY STAMP.** SEAB does **not** publish 9476/9729 mark schemes or examiner reports. Every
> marked paper in `inputs/` is a **JC prelim** (school) scheme — and the only PDFs physically present
> are 2011–2012 **H1** prelims (wrong level). The per-topic marking DNA below was lifted by sub-agents
> from school prelim schemes (HCI, AJC, MI, NYJC, ASRJC, CJC, PJC, RJC across 2008–2023) cited inside
> each topic's chapter notes. Therefore **no marking claim here is `[OFFICIAL]`** — it is `[SCHOOL]`
> at best. The honest ceiling is **~85%**, and the single thing that raises it is **Ethan sitting a
> real official 9476 specimen / past paper under timed conditions and self-marking against it.**

---

## 1. Paper Structure & Format `[OFFICIAL]` (syllabus pp. 11–13)

| Paper | Type | Duration | Marks | Weight | What it is |
|---|---|---|---|---|---|
| **1** | Multiple Choice | 1 h | 30 | **15%** | 30 compulsory MCQ, all 4-option. **5–8 are "multiple completion" type** (1/2/3-correct combinations). |
| **2** | Structured | 2 h | 75 | **30%** | Variable # of structured Qs, all compulsory, answered on the paper. **Data-based Q(s) = 20–25 marks.** |
| **3** | Structured + free-response | 2 h | 75 | **35%** | **Section A** = 55 marks (3–4 structured Qs, 15–25 marks each, all compulsory). **Section B** = 20 marks (two 20-mark Qs, **answer ONE**). Both sections demand cross-topic integration. |
| **4** | Practical | 2 h 30 | 50 | **20%** | Planning (P, 4%) + MMO/PDO/ACE (16%). Titration, gravimetry, kinetics, QA (inorganic + organic), synthesis/purification. Data-analysis without apparatus allowed. |

**Assessment Objectives** `[OFFICIAL]`:
- **AO A — Knowledge with understanding (36% across P1–3):** *define, state, describe, explain, outline.*
- **AO B — Handling/applying/evaluating info (44% across P1–3):** *predict, suggest, construct, calculate, determine* — the higher-order verbs, novel-context application, cross-topic synthesis. **This is the dominant marks bucket — the exam rewards application over recall.**
- **AO C — Experimental (20%, Paper 4 only).**

**Standing rules that bite every paper** `[OFFICIAL]` (syllabus pp. 10, 23–24):
- **Units & significant figures are penalised** if misused — missing units, units on a ratio, or wrong sig figs lose marks. (An explicit, examinable penalty, not a courtesy.)
- **Data Booklet + Periodic Table provided** in theory papers; **Qualitative Analysis Notes provided** in Paper 4.
- Organic: quote **reagents + essential conditions + identity of major products**. Specific T/P values **not** required. `[O]`/`[H]` accepted in organic redox equations. **E/Z and R/S nomenclature NOT required; "diastereomers" not required.**
- Sulfur spelt with **f** in papers (either spelling accepted in answers).

---

## 2. Mark Scheme Logic — what is rewarded per band `[SCHOOL]` (JC-prelim-derived; NOT SEAB)

H2 Chemistry is not banded like an essay — it is **atomised, keyword/method-gated marking**. The
recurring patterns across the sampled school schemes:

**A. The reasoning CHAIN earns marks, not the conclusion.** The single most repeated pattern. A bald
correct answer ("smaller radius", "more acidic", "feasible", "coloured because transition metal")
scores ≈0–1 of N. Marks live in the explicit links:
- **Z_eff chain** (Atomic Structure / Periodicity): `# quantum shells / nuclear charge / shielding → Z_eff = Z−S → strength of electrostatic attraction nucleus↔outer e⁻ → radius/IE outcome`. "Z_eff increases" alone ≈ 1 mark; the chain to "stronger attraction → smaller radius / higher IE" earns the rest.
- **Structure→force→strength→energy chain** ("Engine A", Bonding/Periodicity mp/bp): name STRUCTURE → name the SPECIFIC force broken (id-id / pd-pd / H-bonding — **never** "van der Waals" or "intermolecular forces") → compare STRENGTH (quote the deciding factor) → **explicit "more energy is needed to overcome…" statement** (the energy phrase is itself a mark).
- **Conjugate-base-stability chain** (acidity, every organic-acid topic): name the e-effect (delocalisation / inductive donation / withdrawal) → effect on the **anion** → degree of dissociation → acid strength. Reasoning from the *acid molecule* instead of the *conjugate base* scores 0 even with the right ranking.
- **d-d transition chain** (Transition Elements colour): degenerate d split by ligands into ΔE → electron absorbs visible photon (d-d transition) → colour seen = complement of absorbed.
- **Le Chatelier reservoir chain** (buffers/equilibria): added H⁺/OH⁻ reacts with the large reservoir → ratio ~constant → Ka constant → pH ~constant.

**B. Exact mark-bearing phrasing.** Definitions/explanations are scored word-by-word: `'1 mole'`,
`'gaseous'` + state symbols (IE/lattice/bond-energy defs); `'experimentally determined'` (rate
eq/order); `'saturated solution' + 'at a given temperature'` (solubility); `'incomplete d subshell'`
(transition element); `'3d and 4s close in energy'` (variable O.N.); `'availability of the lone pair'`
(amine basicity); `'restricted rotation about the C=C'` (cis-trans). Drop the discriminator word →
drop the mark.

**C. Reagent **AND** condition are a unit.** "LiAlH4 **in dry ether**", "K2Cr2O7 **+ heat, distil**"
vs "**reflux**", "Br2 **in CCl4, dark**", "conc HNO3 **+ conc H2SO4, 50 °C**". Half the pair = lose
the mark. Conditions flip products (distil→aldehyde vs reflux→acid; aqueous→substitution vs
ethanolic→elimination), so they are load-bearing.

**D. Calculations are method-marked with ECF.** A typical chain pays: balanced equation → correct
mole-ratio reasoning → final answer **with correct units + sig figs**. Method marks usually survive a
downstream arithmetic slip (ECF applied in school schemes); the **final-answer mark is forfeited for
wrong/absent units or sig figs even when arithmetic is right.** Show working — a bare correct number
can still drop method marks.

**E. Observations must be specific and directional.** "orange → green" not "colour change"; "purple
decolourised AND brown ppt of MnO2"; "white ppt, soluble in dilute NH3"; "effervescence / CO2".
Distinguishing tests are scored as a triple: **reagent + condition + observation** (and often a
separate *negative* observation mark).

**F. Mechanisms are itemised arrow-by-arrow.** Separate marks for each correct curly arrow (tail at
the exact electron source — lone pair/bond, **not** the charge/atom; head at the new bond), the
intermediate (carbocation/bromonium/tetrahedral alkoxide with correct charge), the **slow/rds** and
**fast** labels, and the electrophile-generation equation (arenes — often a discrete ½ mark). A
beautiful product with no/under-specified arrows scores almost nothing.

**G. "Do NOT accept…" policing.** School schemes actively penalise plausible-but-wrong reagents
(e.g. rejecting acidified KMnO4 where dichromate selectivity matters; rejecting Na/NaOH to separate
acid from phenol). Near-miss answers are deducted, not ignored.

> **Variance flag** `[SCHOOL]`: prelim schemes demonstrably disagree (e.g. MI 2020 paid only **[1]** for
> an ionic-radius explanation and accepted a thinner "inter-electron repulsion" answer than the full
> Z_eff chain). Mark allocations here are **indicative**, not the SEAB standard.

---

## 3. Content Node Map (the syllabus as testable nodes) `[OFFICIAL]` scope

The master coverage checklist. 23 topics across the 3 Core Ideas + Extension Topics. Each becomes a
per-topic `examiner_guide.md` (built in Level 2) carrying the full node list, archetype distribution,
and trap model summarised in §4–§5. **`[Q]`** = quantitative default · **`[QL]`** = expect a
qualitative override for explanation/mechanism-heavy content (see §6).

**Core Idea 1 — Matter**
- [ ] **1. Atomic Structure** `[Q/QL]` — subatomic particles + deflection (θ∝q/m); isotopes & Ar; orbitals (s/p/d shapes, draw); electronic configs of atoms/ions (4s filled first, removed first; Cr/Cu exceptions); IE factors (Z_eff) + successive-IE → Group; Period-3 IE anomalies (Al<Mg, S<P).
- [ ] **4 (part). Reactions & Stoichiometry** `[Q]` — Ar/Mr, mole, EF/MF (combustion + composition), balanced eqns, mole toolkit (n=m/Mr, cV, V/Vm; Vm s.t.p.=22.7, r.t.p.=24), limiting reagent + % yield, gas-volume combustion, solution conc/dilution; **redox O.N. + half-equations** (taught here, LO'd under Electrochemistry); acid-base theories (Arrhenius/Brønsted/Lewis), titrations & indicators, redox/iodometric titrations.

**Core Idea 2 — Structure & Properties**
- [ ] **2. Chemical Bonding** `[Q/QL]` — ionic/covalent/metallic/dative defs (verbatim, "electrostatic"); dot-and-cross + octet exceptions (deficient/expanded/radical; Period 2 can't expand); VSEPR shapes & bond angles (lp repulsion vs electronegativity reasons); bond/molecular polarity (dipole cancellation); bond energy/length + F-F anomaly; 3 IMFs (id-id/pd-pd/H-bond); H-bonding anomalies (bp order, ice density); 5 lattice types; structure↔property deduction.
- [ ] **3. The Gaseous State** `[Q]` — kinetic-theory assumptions; pV=nRT incl. Mr determination (SI units!); Dalton's law / partial pressure via mole fraction; conditions for ideality (low P, high T) + limitations; pV/RT compressibility plot.  *(N.B. Boltzmann distribution is examined under Kinetics, NOT here.)*
- [ ] **5. Periodicity** `[Q/QL]` — Period-3 trends (radius/IE/EN/mp/conductivity); oxidation-number & bonding of oxides/chlorides (AlCl3 exception); oxide+water pH; acid/base/amphoteric behaviour ([Al(OH)4]⁻); chloride hydrolysis; Group 2 reducing / Group 17 oxidising (E values); Group 17 volatility (id-id); Group 2 carbonate vs Group 17 hydride thermal stability; deduce-the-unknown-element.

**Core Idea 3 — Transformation**
- [ ] **6. Mole Concept & Stoichiometry** `[Q]` — (the calculation backbone, listed as node 4 above; reused across all of CI3 + Electrochem + TM + Organic data Qs).
- [ ] **7. Chemical Energetics & Thermodynamics** `[Q]` — ΔH defs (word-perfect, "1 mole"+state+standard); energy profile vs level diagram; calorimetry q=mcΔT; Hess (ΔHc form vs ΔHf form — opposite order); bond-energy method (gaseous, average); LE ∝ q⁺q⁻/(r⁺+r⁻); **Born-Haber** (stoichiometry; EA2 always +); ΔHsol = −LE + ΣΔHhyd; entropy sign prediction (NO quantitative ΔS); ΔG=ΔH−TΔS (unit consistency J vs kJ), crossover T, limitations (feasibility≠rate); covalent character (exp vs theoretical LE).
- [ ] **8. Reaction Kinetics** `[Q]` — rate eq experimentally determined; order from initial rates / conc-time (zero & first only) / half-life (t½=ln2/k, conc-independent); k with **units derived from order**; mechanism↔order (intermediate absent; fast pre-equilibrium → fractional order); Boltzmann (Ea, T effect, catalyst); homogeneous (NOx/SO2, Fe²⁺ in I⁻/S2O8²⁻) vs heterogeneous (Haber, catalytic converter); enzymes; experimental techniques (sampling+quench, pseudo-order, clock).
- [ ] **9. Chemical Equilibria** `[Q]` — reversible/dynamic eq (equal rates); Le Chatelier (conc/P/T); what changes K (only T) vs POE; catalyst (neither); Kc/Kp expressions + units (Δn); **NO quadratics, NO Kp-Kc relationship**; ICE calcs; re-disturbance (reuse same K); Haber conditions (yield-vs-rate-vs-cost compromise).

**Extension Topics**
- [ ] **10.1 Acid-Base Equilibria** `[Q]` — strength≠concentration; pH/pOH/Kw (T-dependent); Ka/Kb/pKa, **Kw=KaKb**; strong/weak acid & base pH ([H⁺]=√(Ka·c), NO quadratic); salt hydrolysis (incl. Al³⁺/Fe³⁺ charge-density); buffers (Henderson-Hasselbalch, Le Chatelier mechanism, CO3²⁻/HCO3⁻ ocean buffer + acidification); titration curves + indicator choice; polyprotic / Na2CO3-HCl. **"Biggest calculation topic in the A-level."**
- [ ] **10.2 Solubility Equilibria** `[Q]` — Ksp expression + **units per stoichiometry**; Ksp↔s templates (MX=s², MX2=4s³, M3X2=108s⁵); ionic product IP vs Ksp (precipitation prediction, dilution-on-mixing); common-ion effect (s↓, Ksp unchanged); complex-ion (AgX + NH3 dissolution order); pH effect on basic-anion salts.
- [ ] **11.1 Intro Organic Chemistry** `[QL]` — functional-group ID (11 classes); IUPAC nomenclature (priority + locants); formula types; hybridisation/shapes (sp/sp²/sp³); 7 reaction types; fission/curly arrows; electrophile/nucleophile; inductive/delocalisation/steric; degree of substitution (amines on N).
- [ ] **11.2 Isomerism** `[QL/Q]` — constitutional (chain/positional/FG); cis-trans (two criteria; ring behaviour); chirality (chiral centre / plane of symmetry / meso); enantiomer properties; optical activity / racemic; **counting (2^(m+n), meso correction, DoU)** is the quantitative slice; E/Z & R/S excluded.
- [ ] **11.3 Organic Reactions & Mechanisms** `[QL]` — the named mechanisms (FRS, electrophilic addition, electrophilic substitution, SN1/SN2, nucleophilic addition) + reactivity explanations (alkane unreactivity, alkene vs benzene, chlorobenzene, carbonyl).
- [ ] **11.4 Hydrocarbons** `[QL]` — **Alkanes** (FRS mechanism, combustion, environmental: CO/NOx/catalytic converter/enhanced greenhouse); **Alkenes** (electrophilic addition mechanism + Markovnikov via carbocation stability, oxidation diol vs cleavage, Br2(aq)→bromohydrin, tests); **Arenes** (electrophilic substitution mechanism, halogenation/nitration/Friedel-Crafts, directing effects, side-chain FRS vs ring, side-chain oxidation, tert-butylbenzene no-rxn).
- [ ] **11.5 Halogen Derivatives** `[QL]` — SN1/SN2 (mechanism + stereochemistry inversion/racemisation), substitution vs elimination by solvent, reactivity vs C-X bond strength, halogenoarene unreactivity, AgNO3 distinguishing tests, CFC/ozone.
- [ ] **11.6 Hydroxy Compounds** `[QL]` — alcohol oxidation (1°/2°/3°, distil vs reflux), dehydration (H3PO4), iodoform; **phenol** acidity (vs water/ethanol via conjugate base), reaction with base vs Na (not carbonate!), ring nitration/bromination.
- [ ] **11.7 Carbonyl Compounds** `[QL]` — HCN nucleophilic addition mechanism (CN⁻ is the nucleophile), aldehyde>ketone reactivity (steric+electronic), reduction, 2,4-DNPH (carbonyl only, NOT ald/ket discriminator), Tollens'/Fehling's, iodoform, racemic mixture.
- [ ] **11.8 Carboxylic Acids & Derivatives** `[QL]` — acidity via conjugate base (carboxylate charge over TWO O); substituent (EWG) effects; salt/ester/acyl-chloride/reduction (LiAlH4→1° alcohol only); Na2CO3 effervescence (the acid-vs-phenol distinguisher); ease of hydrolysis acyl>alkyl>aryl; ester acid vs base hydrolysis; phenyl esters only via acyl chloride.
- [ ] **11.9 Nitrogen Compounds** `[QL]` — amine basicity (lone-pair availability; gas-phase 3°>2°>1° vs aqueous shift; ammonia/ethylamine/phenylamine); amine formation; phenylamine + Br2 (no catalyst); amide neutrality + hydrolysis + reduction; amino-acid zwitterion / pI / species-vs-pH.
- [ ] **11.10 Polymers** `[QL]` — addition vs condensation (empirical formula + atom loss); repeat unit drawing (continuation bonds!); deduce monomers (add back H2O); proteins/peptide bond + hydrolysis; biodegradability; recycling discursive (economic/environmental/social).
- [ ] **12. Electrochemistry** `[Q]` — E° / SHE / measurement; E°cell = E°(cathode)−E°(anode) + spontaneity; electron flow; limitations (feasibility≠rate); construct redox equations; **ΔG°=−nFE°** (combined-half-rxn E° via ΔG, can't add E° directly); conc/T effect on E; fuel cells/batteries; F=Le; electrolysis prediction + Faraday calcs; Al anodising / Cu purification.
- [ ] **13. Transition Elements** `[Q/QL]` — definition (incomplete d; Zn/Sc); configs (4s removed first); invariant radii/IE; mp/density vs Ca; variable O.N.; the 3 redox systems (Fe³⁺/Fe²⁺, MnO4⁻/Mn²⁺ 8H⁺5e⁻, Cr2O7²⁻/Cr³⁺ 14H⁺6e⁻); E-value feasibility; ligand/complex defs; ligand exchange (Cu-NH3→only 4 substitute; Fe³⁺/SCN⁻; haemoglobin CO/O2); d-orbital splitting + d-d colour; homogeneous (2-step, both E_cell>0) vs heterogeneous (partially-filled 3d) catalysis; CrO4²⁻/Cr2O7²⁻ is acid-base NOT redox.

> **Coverage check:** all 23 syllabus topics have input chapter notes + an extractor intelligence
> block. **No syllabus topic required web-research gap-fill** (see §7). The Qualitative Analysis Notes
> (Paper 4) and Data Booklet are referenced as `[OFFICIAL]` facts where topics cite them.

---

## 4. Question Archetypes & Distribution

The cross-subject archetype family. Frequencies are `[INFERRED]` from chapter-note emphasis + the
thin school-prelim sample (saturated patterns, **not** a counted census) — directional only. **Mirror
the topic guide's exact distribution when generating, not this subject-level one** (spec.md §7).

| # | Archetype | Approx. share of structured-Q marks | Where it appears |
|---|---|---|---|
| 1 | **Multi-step quantitative chain** (mole/EF-MF → stoichiometry → titration/Ksp/Kp/ΔG/Faraday, units+sig figs) | **~30%** | P2/P3 data Qs; the calculation backbone, often hung off one scenario |
| 2 | **"Explain the difference / trend" reasoning chain** (mp/bp, radius/IE, acidity/basicity, reactivity) | **~20%** | P2/P3; the signature AO-A/B explain item; Z_eff & Engine-A & conjugate-base chains |
| 3 | **Draw/complete a named mechanism** (FRS, electrophilic addn/subst, SN1/SN2, nucleophilic addn) + curly arrows + stereochem | **~12%** | P3 organic block; high-tariff (3–5 marks) |
| 4 | **Reagents + conditions + observation / product prediction** in a synthesis or distinguishing-test | **~12%** | P2/P3 synthesis routes & QA; reagent-AND-condition gated |
| 5 | **Structure-elucidation / deduction table** (observation → reaction type → functional group → structure) | **~8%** | P3 long organic deduction Q (Na2CO3/2,4-DNPH/iodoform/Br2/KMnO4 clue chains) |
| 6 | **E-value / ΔG feasibility & redox construction** (Electrochem + Transition Elements) | **~7%** | P2/P3; E°cell>0 conclusion + half-equation marks |
| 7 | **Boltzmann / Le Chatelier / equilibrium qualitative** (sketch + explain T/catalyst/POE) | **~6%** | P1 + P2/P3; diagram-mark gated |
| 8 | **MCQ single-concept discriminator** (P1: ranking, config, polarity, IP-vs-Ksp, indicator choice, units of k) | **all of P1 (15%)** | P1; one trap per item, often multiple-completion |
| 9 | **Applied/environmental + colour/complex** (ocean acidification, greenhouse, CFCs, recycling, d-d colour, haemoglobin) | **~5%** | P2/P3 riders; newer-syllabus STSE emphasis |

> **Synoptic reality** `[OFFICIAL]` (P2 data Q + P3 Sec A/B explicitly demand cross-topic integration):
> topics do **not** stand alone. High-leverage seams to drill: Stoichiometry/redox ↔ everything;
> Energetics ↔ Bonding (LE) ↔ Periodicity (Period 3); Electrochemistry ↔ Transition Elements ↔ Group
> 2/17; Equilibria ↔ Acid-Base ↔ Solubility; Atomic-Structure Z_eff template ↔ Bonding ↔ Periodicity ↔
> TM; the whole organic web (alcohol↔carbonyl↔acid↔ester/amide↔amine; arene↔phenol↔halogenoarene).

---

## 5. Trap Model (misconceptions the exam exploits) `[SCHOOL]`/`[INFERRED]`

The most valuable section. Every trap is **real and traceable** to a chapter note or a sampled school
scheme (the per-topic blocks carry the exact file/line). Drive distractors from these — **no invented
distractors** (spec.md §7). Grouped by where they bite hardest.

### 5a. Physical-chemistry & structure traps
| Trap | The wrong answer it produces | Anchor |
|---|---|---|
| **"Covalent bonds break" when a simple-molecular solid melts/boils** | bp tied to covalent-bond strength instead of IMF | Bonding notes (student's logged error) `[SCHOOL]` |
| **Strength without the energy statement** | "force is stronger" with no "more energy needed to overcome…" → loses the mark | Bonding "Engine A" `[SCHOOL]` |
| **"Z_eff decreases down a group"** | nuclear charge AND shielding both rise; operative reason is "more shells / distance" | Atomic Structure / Periodicity `[SCHOOL]` |
| **Swapping the two Period-3 IE anomalies** | Al<Mg explained by pairing (it's 3p-vs-3s); S<P explained by shielding (it's 3p pairing repulsion) | Atomic Structure `[SCHOOL]` |
| **HBr bp > HI from polarity** | ignores dispersion: HI's larger electron cloud wins → HI bp > HBr | Bonding `[SCHOOL]` |
| **mp (not bp) as metallic-bond-strength indicator** | bp is correct (melting only separates cations) | Bonding `[SCHOOL]` |
| **Period-2 octet expansion** (C/N/O expand) | only Period 3+ uses d orbitals; NO2/CO need a dative bond | Bonding `[SCHOOL]` |
| **pV=nRT with non-SI units** | P in atm/kPa, V in cm³, T in °C with R=8.31 → answer wrong by orders | Gaseous State `[SCHOOL]` |
| **Al2O3 mp > MgO / lattice-energy-only** | correct: Al³⁺ high charge density polarises O²⁻ → covalent character LOWERS mp below MgO | Periodicity `[SCHOOL]` |
| **Inverting Group-2 carbonate stability / using bond energy** | down-group: charge density↓ → polarises anion less → MORE stable | Periodicity `[SCHOOL]` |

### 5b. Energetics / kinetics / equilibrium traps
| Trap | Wrong answer | Anchor |
|---|---|---|
| **Hess direction swap** | ΔHc data = reactants−products, ΔHf data = products−reactants (opposite); applied to wrong dataset | Energetics `[SCHOOL]` |
| **ΔS unit not converted** | ΔS in J, ΔH/ΔG in kJ — forget ÷1000 → answer 1000× wrong | Energetics `[SCHOOL]` |
| **2nd electron affinity written negative** | EA2 always +ve (forcing e⁻ onto an anion); wrecks Born-Haber for oxides | Energetics `[SCHOOL]` |
| **"Spontaneous ⇒ fast"** | ΔG/E°cell give feasibility, not rate (rusting, diamond→graphite) | Energetics/Electrochem `[SCHOOL]` |
| **k without/with wrong units** | units must be DERIVED from overall order each time | Kinetics (NYJC P1/P2) `[SCHOOL]` |
| **Order read off stoichiometry** | order is experimentally determined; intermediate must not appear in rate eq | Kinetics `[SCHOOL]` |
| **"Constant half-life" asserted without showing two consecutive half-lives** | must show t½₁≈t½₂ on the graph | Kinetics `[SCHOOL]` |
| **Catalyst "lowers ΔH" / "increases yield"** | catalyst lowers Ea only (ΔH unchanged); changes neither POE nor K | Kinetics/Equilibria `[SCHOOL]` |
| **"K changes" for conc/P/inert-gas/catalyst** | only **temperature** changes K | Equilibria `[SCHOOL]` |
| **Counting all moles (incl. solids) for the pressure rule** | pressure shifts toward fewer moles of **gas** only | Equilibria `[SCHOOL]` |
| **Re-deriving K on re-disturbance** | same T → reuse the same K, re-solve ICE | Equilibria (CJC) `[SCHOOL]` |

### 5c. Aqueous-equilibria traps
| Trap | Wrong answer | Anchor |
|---|---|---|
| **Strength = concentration** | dilute strong acid vs conc weak acid can share a pH | Acid-Base `[SCHOOL]` |
| **[H⁺]=c for a weak acid / omitting "assume x≪c"** | must use √(Ka·c); the stated approximation is itself a mark | Acid-Base `[SCHOOL]` |
| **Kw=10⁻¹⁴ at all T / heated water "acidic"** | Kw is T-only; water >25 °C is pH<7 but still **neutral** | Acid-Base `[SCHOOL]` |
| **Equivalence pH = 7 for every titration** | only SA-SB; WA-SB >7, SA-WB <7 | Acid-Base `[SCHOOL]` |
| **Wrong indicator vs the vertical jump / any indicator for WA-WB** | working range must sit in the jump; WA-WB → pH meter | Acid-Base `[SCHOOL]` |
| **Buffer calc: concentrations not re-computed moles / new total volume** | recompute moles after adding acid/base, divide by NEW volume | Acid-Base `[SCHOOL]` |
| **Ksp units = mol²dm⁻⁶ for everything** | units change with stoichiometry (MX2 → mol³dm⁻⁹) — discrete mark | Solubility `[SCHOOL]` |
| **MX2: Ksp = s² (forgetting 2s then squared)** | Ksp = 4s³ | Solubility `[SCHOOL]` |
| **IP from undiluted conc on mixing** | dilute each ion into the combined volume first | Solubility `[SCHOOL]` |
| **Common ion "changes Ksp"** | only solubility ↓; Ksp T-only | Solubility `[SCHOOL]` |

### 5d. Organic traps (the densest cluster — drive most P3 distractors)
| Trap | Wrong answer | Anchor |
|---|---|---|
| **Same OH⁻, wrong solvent** | aqueous NaOH→substitution (alcohol); ethanolic NaOH→elimination (alkene) | Halogen Derivatives `[SCHOOL]` |
| **SN1/SN2 stereochemistry swapped** | SN2=inversion→single enantiomer; SN1=racemisation→racemic | Halogen Derivatives `[SCHOOL]` |
| **Initiation homolyses C-H / heterolytic** | UV breaks the weaker Cl-Cl (244<410), homolytically | Alkanes `[SCHOOL]` |
| **Markovnikov stated without carbocation-stability explanation** | LO 11.4c demands "explain via carbocation stability" — bald rule = 0 | Alkenes `[OFFICIAL LO]` |
| **Br2(aq) → 1,2-dibromide** | water in excess → bromohydrin is the major product | Alkenes `[SCHOOL]` |
| **Oxidant qualifier dropped** | cold/alkaline KMnO4→diol vs hot/acidified→cleavage; the qualifier flips the product | Alkenes `[SCHOOL]` |
| **Missing electrophile-generation equation (arenes)** | NO2⁺/Br⁺ generation is a discrete (often ½) mark | Arenes (PJC) `[SCHOOL]` |
| **Halogen mis-directed to meta** | halogens are deactivating BUT 2,4-directing (the exception) | Arenes `[SCHOOL]` |
| **Oxidising tert-butylbenzene** | side-chain C with no H → NO reaction with hot KMnO4 | Arenes `[SCHOOL]` |
| **2,4-DNPH "distinguishes aldehyde from ketone"** | only confirms a carbonyl; use Tollens'/Fehling's/dichromate | Carbonyl `[SCHOOL]`/`[OFFICIAL QA]` |
| **Benzaldehyde negative to Tollens'** | positive to Tollens' (silver mirror) but negative to Fehling's — Fehling's is the discriminator | Carbonyl `[SCHOOL]` |
| **HCN nucleophile = HCN (not CN⁻) / wrong rds** | CN⁻ attacks in the slow step; HCN protonates fast | Carbonyl `[SCHOOL]` |
| **LiAlH4 reduces acid → aldehyde** | carboxylic acid → 1° **alcohol** only; NaBH4 can't reduce -CO2H | Carboxylic Acids `[SCHOOL]`/`[OFFICIAL LO]` |
| **Na / NaOH to separate acid from phenol** | both react with both; only Na2CO3 effervescence (CO2) separates them | Carboxylic Acids (AJC) `[SCHOOL]` |
| **Phenol esterifies with a carboxylic acid** | phenyl esters need the acyl chloride | Carboxylic Acids/Hydroxy `[SCHOOL]` |
| **Phenol + carbonate → CO2** | phenol reacts with NaOH but NOT carbonate (only -CO2H does) | Hydroxy `[SCHOOL]` |
| **Amide is basic** | neutral: N lone pair delocalised into C=O | Nitrogen Compounds `[SCHOOL]`/`[OFFICIAL LO]` |
| **Gas-phase amine basicity order quoted for aqueous** | aqueous order shifts (bulky R3NH⁺ poorly solvated) | Nitrogen Compounds `[SCHOOL]` |
| **Acidity explained from the acid molecule** | must reason from conjugate-base stability | acids/phenols/amines `[SCHOOL]` |
| **Repeat unit drawn without continuation bonds / monomers without adding back H2O** | classic dropped marks | Polymers `[SCHOOL]` |
| **Naming "substitution" not "nucleophilic substitution" in elucidation** | examiner flags missing reaction-type | Halogen Derivatives (CJC) `[SCHOOL]` |

### 5e. Inorganic-redox / transition-element traps
| Trap | Wrong answer | Anchor |
|---|---|---|
| **Removing 3d before 4s** | Fe²⁺ = 3d⁶ (4s removed first), Cu²⁺ = 3d⁹ | Transition Elements / Atomic Structure `[SCHOOL]` |
| **Forgetting Cr/Cu config anomalies** | [Ar]3d⁵4s¹ / [Ar]3d¹⁰4s¹ | Transition Elements `[SCHOOL]` |
| **CrO4²⁻⇌Cr2O7²⁻ called redox** | acid-base; Cr stays +6 | Transition Elements `[SCHOOL]` |
| **"Coloured because transition metal"** | needs the full d-d split→ΔE→absorb visible→complement chain | Transition Elements `[SCHOOL]` |
| **One-step / negative-E_cell homogeneous catalysis** | two steps, both E_cell>0, catalyst regenerated | Transition Elements `[SCHOOL]` |
| **Heterogeneous reason = "variable O.N."** | heterogeneous = partially-filled 3d (adsorption); variable O.N. is the homogeneous reason | Transition Elements `[SCHOOL]` |
| **Adding E° of different-n half-reactions directly** | go via ΔG=−nFE° | Electrochemistry `[SCHOOL]` |
| **E°cell = anode−cathode / no sign+units** | cathode−anode, with sign + V | Electrochemistry `[SCHOOL]` |
| **Reducing reactive-metal cations / H⁺ instead of H2O in dilute aqueous electrolysis** | concluding "iron is produced" | Electrochemistry (ASRJC) `[SCHOOL]` |
| **[Cu(NH3)6]²⁺** | only 4 NH3 substitute → [Cu(NH3)4(H2O)2]²⁺ | Transition Elements `[SCHOOL]` |

---

## 6. The Examiner's Mental Model `[OFFICIAL]` intent + `[SCHOOL]` taste

- **It rewards application over recall (AO-B = 44%).** Marks live in "predict/suggest/construct/
  calculate/determine" on **novel** substrates and contexts. The exam transplants a named mechanism
  (Br2/CCl4 + ethene) onto an unfamiliar polycyclic/functionalised molecule and checks you can run
  the *reasoning*, not recite the example.
- **It is a reasoning-chain exam wearing a content costume.** Every "explain" is a fixed causal
  template (Z_eff / Engine-A / conjugate-base / d-d / Le Chatelier). The examiner tests whether you
  lay the chain out link-by-link with the mark-bearing connective words — not whether you know the
  answer.
- **It is relentlessly synoptic.** P2 carries a 20–25-mark data Q; P3 Section A/B are explicitly
  cross-topic. Readiness on isolated topics is necessary but not sufficient; the gaps that survive
  live in the *seams* (§4).
- **It polices precision as a discipline.** Units, sig figs, state symbols, reagent **and** condition,
  arrow tail/head, "do not accept" near-misses. The penalty for sloppiness is explicit syllabus policy.
- **Quantitative gap-closure is the default and correct.** Calculations (mole/EF-MF, Hess/Born-Haber,
  Kc/Kp/Ksp ICE, ΔG, E°cell, Faraday, pH/buffer) must be drilled as **solved variants until
  mechanical** (spec.md §2). But the heavy organic/explanation half of this subject closes gaps
  better as **`qualitative`** (concept doc that *names the misconception* + re-test at a new angle):
  every named-mechanism, reactivity-explanation, distinguishing-test, structure-elucidation, and
  basicity/acidity node should **override to `qualitative`** in its topic front-matter. **Read the
  default, then the topic override — the override wins** (CLAUDE.md §3, spec.md §2).

---

## 7. Confidence & Validation Notes

**90% check (spec.md §5) — status: PARTIAL / ceiling-capped.** The five dimensions cannot all be
honestly closed to threshold because the validation corpus is structurally school-grade:

| Dimension | Threshold | Honest position |
|---|---|---|
| Exam format & structure | ≥95% | **MET `[OFFICIAL]`** — paper structure, AOs, weightings, practical scope read verbatim from the 9476/2026 syllabus. |
| Mark scheme (reward per band) | ≥90% | **CAPPED ~80% `[SCHOOL]`** — marking DNA is JC-prelim-derived; schemes demonstrably vary; no SEAB scheme exists. |
| Content nodes | ≥90% | **MET `[OFFICIAL]`** — all 23 topics map 1:1 to syllabus LOs; full scope enumerated in §3. |
| Question type & method | ≥85% | **~80% `[INFERRED]`** — archetypes are right in kind; their *distribution* is inferred from a thin, saturated sample, not counted. |
| Trap model | ≥85% | **~85% `[SCHOOL]`** — traps are real and traceable, but provenance is school notes + prelim schemes, not examiner reports. |

**Validation source breakdown:**
- `[OFFICIAL]` (≈95% local): syllabus scope, all LO wording, paper structure, AO weightings, the
  syllabus-stated exclusions (no quadratics in equilibria/acid-base; no Kp-Kc; no quantitative ΔS; no
  E/Z–R/S; "relative ligand field strength not required"), Data-Booklet/QA-Notes facts, the units/
  sig-fig penalty.
- `[SCHOOL]` (cap ~80%): **all** marking granularity, mark-bearing phrasing, the trap catalogue, and
  the per-topic mechanism-marking detail — sourced from JC prelim schemes (HCI, AJC, MI, NYJC, ASRJC,
  CJC, PJC, RJC across 2008–2023, several on legacy codes 9746/9729) cited in the chapter notes.
- `[INFERRED]` (~60%): paper-component splits and all archetype-frequency weights — inferred from note
  emphasis + a small saturated sample, **not** a longitudinal census.

**Gaps filled from research:** **NONE.** Every one of the 23 syllabus topics had input chapter notes
and an extractor intelligence block; no topic was empty or stubbed, so **no web-research gap-fill was
required** and no `[RESEARCH]` claims appear in this guide. (Had a topic been missing, it would have
been researched from SEAB/textbook sources and tagged `[RESEARCH]` with a stated confidence hit.)

**Known evidence limitations (stated plainly, not hidden):**
1. **No SEAB mark scheme or examiner report exists** for 9476/9729 — SEAB does not publish them. The
   ceiling **cannot** exceed ~92%, and lands at **~85%** because marking + frequency rest on school
   proxies.
2. **The only past-paper PDFs physically in `inputs/` are 2011–2012 H1 prelims** — wrong level and
   legacy syllabus. They were not used for marking DNA (the H2 marking patterns came from H2 prelim
   schemes cited inside the per-topic chapter notes, not from these PDFs).
3. **Several sampled H2 prelims are legacy-code (9746/9729) vintage 2008–2016.** Reaction chemistry is
   stable across codes, but mark-scheme detail and conditions (e.g. nitration temperatures, 9476's
   newer STSE/ocean-acidification emphasis) may drift.
4. **Single-source risk:** most per-topic content-node maps rest on one HCI lecture-note set.
   Cross-checking a second school's notes would harden them.

**What would raise the ceiling (the only thing that does):** **Ethan sitting his first official 9476
specimen paper and a real past paper under timed conditions, then self-marking against them.** That is
the ground-truth honesty check (spec.md §9): it converts the `[SCHOOL]`/`[INFERRED]` marking-and-
frequency claims toward verified, and — if a real official scheme is loaded — lifts the mechanism/
marking dimensions from `[SCHOOL]` toward `[OFFICIAL]`. Until then, **treat this guide as a strong,
honestly-capped hypothesis, not ground truth**, and recalibrate (spec.md §12) if session/model
performance runs >70% but an official paper comes back <50%.
