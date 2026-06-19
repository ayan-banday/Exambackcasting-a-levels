# Chem Topic 15 — Halogen Derivatives (H2 9729)

**Source:** HCI lecture notes `Chem/15HalogenDerivativesLecNotesWM.pdf` (pasted in full by Ethan — PowerShell extraction was permission-blocked this session; text captured directly, "for use from 2026"). Answer keys are image scans — self-mark.

**Why it matters:** The **central "hub" of organic synthesis** — halogenoalkanes convert into alcohols, nitriles, amines, carboxylic acids and alkenes, so this topic is the bridge that links almost every functional-group route together (the summary reaction maps are pure exam fuel). The **SN1/SN2 mechanisms** are among the most-examined mechanisms at A-level (draw with curly arrows; explain inversion vs racemisation; justify why 1° → SN2 and 3° → SN1). Builds on Topic 8 (nucleophile/electrophile, curly arrows), Topic 9 (enantiomers/optical activity), Topic 11 (electrophilic addition prep), Topic 12 (electrophilic substitution + the chlorobenzene contrast), Topic 13 (AgX solubility in NH₃). Feeds Topic 16 (alcohols), 18 (carboxylic acids), 19 (amines).

**Mark-scheme-first核心:** examiners reward (1) **all three reagents+conditions stated** for each reaction (the *solvent* is the discriminator — aqueous OH⁻ vs ethanolic OH⁻ flips substitution↔elimination), (2) **correct curly arrows** (SN2: Nu attacks the δ+ carbon *from the opposite side* to X, C–X breaks simultaneously; SN1: C–X breaks first → carbocation → Nu attacks), (3) the **stereochemistry statement** (SN2 → inversion → single enantiomer/optically active; SN1 → planar carbocation attacked both faces → racemic mixture), and (4) reactivity arguments anchored to **C–X bond strength** (C–I weakest → fastest hydrolysis; C–F strongest → inert).

---

## UNIT 1 — Introduction: naming, classification, preparation

### Halogenoalkanes (alkyl halides) & halogenoarenes (aryl halides)
- **Halogenoalkane** = alkane with ≥1 H replaced by **F, Cl, Br, I**. Named with prefixes **fluoro-/chloro-/bromo-/iodo-** + locant (e.g. bromoethane, 1,2-dibromoethane, 3-chloropentane). Show **constitutional isomerism + enantiomerism** (C₄H₉Br has 5 isomers — 4 constitutional, and 2-bromobutane is a pair of enantiomers).
- **Halogenoarene** = halogen attached **directly to a benzene ring** (chlorobenzene, 1-bromo-3-methylbenzene).

### Classification 1°/2°/3° (LO) ★ — determines SN1 vs SN2
Classify by **how many alkyl groups (other C atoms) are attached to the halogenated carbon** (the C bearing X):
- **Primary (1°):** halogenated C attached to **one** alkyl group (CH₃CH₂Br, CH₃CH₂CH₂Cl).
- **Secondary (2°):** attached to **two** alkyl groups (e.g. chlorocyclopentane).
- **Tertiary (3°):** attached to **three** alkyl groups (e.g. 1-bromo-1-methylcyclohexane).
- *(Watch: 3-chloropropene CH₂=CHCH₂Cl is **primary** — the C–Cl carbon has only one C neighbour.)*

### Physical properties
- Colourless liquids, sweetish smell, **immiscible with and denser than water.** Main IMF = **dispersion forces** (the pd–pd difference is too small to explain the bp trend).
- **bp higher than the corresponding alkane**; for the same alkyl group **bp: chloro < bromo < iodo** (more electrons → larger electron cloud → stronger dispersion forces → more energy to overcome). *Mark-scheme phrasing: cite "more electrons/larger electron cloud → stronger dispersion forces," NOT polarity.*

### Preparation (LO)
- **Halogenoalkanes from:** free-radical substitution of alkanes (Topic 10 — but gives a mixture, uncontrolled); **electrophilic addition to alkenes** (Topic 11, e.g. HBr/Br₂); nucleophilic substitution of alcohols (Topic 16, e.g. **PCl₅**, SOCl₂, PI₃, HX).
- **Halogenoarenes from:** **electrophilic substitution of arenes** (Topic 12, X₂ + AlX₃ Lewis-acid catalyst).

---

## UNIT 2 — Reactions of halogenoalkanes (the core unit)

Halogenoalkanes undergo **(A) nucleophilic substitution** and **(B) elimination**. Both stem from the **polar C–X bond** (X more electronegative → δ+ carbon attracts nucleophiles/is attacked by base).

### A. Nucleophilic substitution — the two mechanisms (LO 11.3n) ★★

**SN2 (bimolecular nucleophilic substitution) — favoured by 1°**
- **One step.** The nucleophile **attacks the δ+ carbon from the side OPPOSITE to X**, donating its lone pair; **as the Nu–C bond forms, the C–X bond simultaneously breaks** (both bonding electrons go to X → X⁻).
- Passes through a single **transition state** (Nu and X both partially bonded to the same C). One energy barrier (one hump on the profile).
- **Rate = k[RX][Nu⁻]** — *two* species in the rate-determining step → "bimolecular."
- **Stereochemistry (LO 11.5b-i): INVERSION OF CONFIGURATION** (umbrella flips). If RX is chiral, the product is a **single enantiomer → optically active** (NOT a racemic mixture).

**SN1 (unimolecular nucleophilic substitution) — favoured by 3°**
- **Two steps.** Step 1 (slow, rds): **heterolytic fission of C–X → carbocation + X⁻** (alkyl groups stabilise the carbocation). Step 2 (fast): the **carbocation is attacked by the nucleophile** → product.
- Two transition states / two humps; **the first peak (carbocation formation) is the rds.**
- **Rate = k[RX]** — only *one* species in the rds → "unimolecular."
- **Stereochemistry (LO 11.5b-ii): RACEMISATION.** The carbocation is **trigonal planar**, so the nucleophile attacks **top and bottom faces with equal probability** → if a chiral product forms, it's a **racemic mixture** (equal enantiomers, optically inactive).

**Why 1° → SN2 and 3° → SN1 (the two competing factors):**
- **SN1 depends on carbocation stability:** alkyl groups donate electron density → stabilise the carbocation → lower Ea. Stability **1° < 2° < 3°**, so **rate of SN1 increases 1° < 2° < 3°.**
- **SN2 depends on steric hindrance:** the three alkyl groups of a 3° halogenoalkane **block the nucleophile's back-side attack**. So **rate of SN2 increases 3° < 2° < 1°.**
- **Net:** 1° → predominantly **SN2**, 3° → predominantly **SN1**, 2° → **either**.
- **Exceptions (data would be given):** (CH₃)₃CCH₂Cl is 1° but **inert to SN2** (too sterically hindered); **(chloromethyl)benzene C₆H₅CH₂Cl is 1° but favours SN1** because its carbocation is stabilised by **delocalisation into the benzene ring (seven overlapping p orbitals).**

### A′. The three named nucleophilic substitutions of bromoethane (LO 11.5a-i) ★
| Nucleophile | Product | Reagents & conditions |
|---|---|---|
| **OH⁻** | alcohol R–OH | **dilute NaOH(aq), heat** (= alkaline hydrolysis) |
| **CN⁻** | nitrile R–CN | **KCN in ethanol (ethanolic KCN), heat** — lone pair donated by the **C** of CN⁻; **"step-up" reaction (adds 1 C to the chain)** |
| **NH₃** | primary amine R–NH₂ | **NH₃ in ethanol, heated under high pressure** |

### A″. Reactions of the nitrile (R–CN) — why CN⁻ substitution is so useful
- **Acidic hydrolysis → carboxylic acid:** `R–CN + H⁺ + 2H₂O → RCO₂H + NH₄⁺` (dilute H₂SO₄, heat). *(or alkaline: R–CN + OH⁻ + H₂O → RCO₂⁻ + NH₃, dilute NaOH heat, then acidify.)*
- **Reduction → primary amine:** `R–CN + 4[H] → RCH₂NH₂` (**LiAlH₄ in dry ether**, or **H₂(g)/Ni catalyst**). Note: this amine has **one more carbon** than the R–NH₂ from direct NH₃ substitution.

### A‴. NH₃ substitution gives a mixture (over-alkylation)
- The 1° amine's N lone pair + **electron-donating alkyl group makes it MORE nucleophilic than NH₃**, so with **excess halogenoalkane** it keeps reacting: RX → 1° amine → 2° amine → 3° amine → **quaternary ammonium salt R₄N⁺X⁻**.
- **To maximise the primary amine, use EXCESS NH₃** (so RX preferentially meets NH₃, not the amine).

### B. Elimination → alkene (LO 11.5a-ii) ★
- **Reagents/conditions: NaOH in ETHANOL (ethanolic NaOH), heat.** In ethanol, **OH⁻ behaves as a BASE, not a nucleophile** — it removes an **H⁺ from the carbon adjacent to C–X**, the C–X breaks, forming a **C=C (alkene)** + H₂O + X⁻.
- **The solvent is the whole game:** same OH⁻ gives **substitution in aqueous solution** (→ alcohol) but **elimination in ethanolic solution** (→ alkene). Both happen simultaneously; the balance depends on solvent, nucleophile/base, and the halogenoalkane. (Mechanism is E2 — not required.)
- **More than one alkene** forms if the C–X carbon has >1 adjacent CH; constitutional AND cis-trans isomers possible. **Saytzeff's rule (FYI): major product = the alkene with the most alkyl groups on the C=C** (e.g. 2-bromobutane → major but-2-ene).

### Reactivity between different halogenoalkanes (LO 11.3f) ★ — C–X bond strength
- Substitution requires the **C–X bond to break**; as the halogen gets bigger, **C–X length ↑, bond strength ↓**, so substitution is **easier/faster.** **C–F is very strong → fluoroalkanes essentially inert.**
- Bond energies (kJ mol⁻¹): **C–F 485 > C–Cl 340 > C–Br 280 > C–I 240.**
- **Ease/rate of hydrolysis: iodoalkane > bromoalkane > chloroalkane** (weakest bond breaks most readily).

---

## UNIT 3 — Halogenoarenes, distinguishing tests, CFCs

### Why halogenoarenes resist nucleophilic substitution (LO 11.3g) ★
Chlorobenzene is **far less reactive than a chloroalkane** towards nucleophilic substitution because:
1. **The halogen's lone pair delocalises into the benzene ring** → **partial double-bond character** in C–X → C–X is **shorter and stronger** → very hard to break.
2. **Steric + electronic blocking:** the benzene ring **blocks the rear side** of the C–X bond, and the ring's **π-electron cloud repels the incoming nucleophile's lone pair.**
- → Nucleophilic substitution of halogenoarenes needs **very vigorous conditions** (not the conditions used for halogenoalkanes).

### Halogenoarene electrophilic substitution (recap Topic 12)
- Halogenoarenes still undergo **electrophilic substitution on the ring**, but **less readily than benzene** because the halogen is **deactivating**; it is **2,4-directing** (the Topic 12 exception — deactivating yet o/p-directing).

**Summary contrast (Ex 4.1):**
| | CH₃CH₂Cl (chloroalkane) | chlorobenzene | benzene |
|---|---|---|---|
| Lone-pair delocalisation | No | Into ring + onto Cl | Within ring only |
| Nucleophilic substitution | **Yes** | **No** | — |
| Elimination | Yes | No | No |
| Electrophilic substitution | No | Yes (less readily than benzene) | Yes |

### Distinguishing tests (LO 11.5c) ★

**Test A — identify the halogen (colour + NH₃ solubility of AgX):**
1. Add **NaOH(aq), heat** → `RX + OH⁻ → ROH + X⁻` (hydrolysis releases the halide).
2. Add **excess dilute HNO₃** → removes unreacted OH⁻ (else brown Ag₂O ppt would form).
3. Add **AgNO₃(aq)** → `Ag⁺ + X⁻ → AgX(s)`; note the colour.
4. Add **NH₃(aq)** to test solubility (AgCl/AgBr colours are hard to tell apart).

| | chloroalkane | bromoalkane | iodoalkane |
|---|---|---|---|
| AgX colour | **white** (AgCl) | **cream** (AgBr) | **yellow** (AgI) |
| Solubility in NH₃ | dissolves in **dilute** NH₃ | dissolves only in **concentrated** NH₃ | **insoluble even in conc** NH₃ |

(Dissolving forms colourless `[Ag(NH₃)₂]⁺ + X⁻` — the Topic 13 complex-ion/solubility link.)

**Test B — distinguish by RATE (ethanolic AgNO₃):** add ethanolic AgNO₃ to RX in a hot water bath. **Rate of AgX formation: RI (almost immediate) > RBr > RCl (slowest).** *Explanation:* C–X breaks in the rds; weaker C–X (C–I) → lower Ea → faster ppt. **This rate test also distinguishes halogenoalkanes (give ppt) from halogenoarenes (no ppt — C–X won't break).**

### Uses & environment (LO 11.5d, 11.5e)
- **Fluoroalkanes / fluorohalogenoalkanes** are used where **chemical inertness** matters (refrigerants, propellants, fire extinguishers, **PTFE/Teflon® non-stick coatings**, lab taps/stoppers) — **because the C–F bond is very strong** → unreactive.
- **CFCs (Freons; C–Cl + C–F only)** — inert, non-flammable, non-toxic, odourless, liquefy under pressure. **Examples:** CCl₃F, CCl₂F₂, CCl₂FCClF₂.
- **Ozone depletion (LO 11.5e — mechanism NOT required):** O₃ layer screens UV. CFCs' inertness gives them a >100-year lifespan → they diffuse to the stratosphere where **UV cleaves the weaker C–Cl bond homolytically → Cl• radicals**, which **catalyse ozone decomposition** (Cl• regenerated). More UV at the surface → skin cancer, crop failure. **C–Cl (340) breaks, not C–F (485).**
- **Replacements & their trade-offs:**
  - **HFCs** (C–H + C–F only, no Cl): **don't deplete ozone**, but **still greenhouse gases** — some have *higher* GWP than CFCs.
  - **HCFCs** (C–H, C–Cl, C–F): **still deplete ozone but much less** than CFCs (the C–H lets OH• radicals break them down low in the atmosphere, so less Cl reaches the stratosphere); **lower GWP** than CFCs/many HFCs.
  - **Hydrocarbons** (propane/butane propellants): no Cl, **very low GWP.**
  - **All of CFCs/HFCs/HCFCs absorb IR → contribute to global warming.** **Relative GWP: CFC > HFC > HCFC > hydrocarbon.** (Montreal Protocol 1987 phased out CFCs.)

---

## TOP EXAM TRAPS (Topic 15)
- **Solvent decides substitution vs elimination:** **aqueous** NaOH + heat → substitution (alcohol); **ethanolic** NaOH + heat → elimination (alkene). Always state the solvent.
- **SN2 = inversion → single enantiomer (optically active); SN1 = racemisation → racemic mixture (optically inactive).** Don't swap these. SN2 attack is **from the opposite side to X**.
- **Rate laws:** SN2 = k[RX][Nu⁻] (bimolecular); SN1 = k[RX] (unimolecular).
- **1° → SN2 (carbocation too unstable / least steric hindrance); 3° → SN1 (carbocation most stable / too much steric hindrance for SN2).** Quote *both* the carbocation-stability and steric-hindrance arguments.
- **CN⁻ substitution donates the lone pair on C** (not N) and is a **step-up reaction** (+1 carbon). The nitrile then → carboxylic acid (hydrolysis) or amine (reduction, +1 C vs direct NH₃ route).
- **NH₃ route over-alkylates** → use **excess NH₃** for the 1° amine.
- **Reactivity order = C–X bond strength:** iodo > bromo > chloro for ease of substitution; **fluoroalkanes inert** (C–F strongest). Always cite Data-Booklet bond energies.
- **Halogenoarenes barely undergo nucleophilic substitution** — lone-pair delocalisation into ring (partial double-bond character, stronger C–X) + steric/π-repulsion blocking. They DO undergo ring electrophilic substitution (deactivated, 2,4-directing).
- **AgX test sequence:** NaOH/heat → **excess HNO₃** (must, to remove OH⁻) → AgNO₃ → NH₃ for solubility. White/cream/yellow = AgCl/AgBr/AgI; NH₃ solubility dilute/conc/insoluble.
- **Ozone:** UV breaks **C–Cl (not C–F)**; mechanism not examinable, but the **GWP order CFC > HFC > HCFC > hydrocarbon** and "HFCs don't deplete ozone but are still greenhouse gases" are.

---

## ACTIVE RECALL — cold self-test
1. Classify as 1°/2°/3°: CH₃CH₂CH₂Cl, chlorocyclopentane, 1-bromo-1-methylcyclohexane, CH₂=CHCH₂Cl.
2. Why does bp increase chloro < bromo < iodo for the same alkyl group? (give the mark-scheme reasoning)
3. Draw the **SN2** mechanism for OH⁻ + bromoethane (curly arrows, transition state). State the rate law and the stereochemical outcome for a chiral substrate.
4. Draw the **SN1** mechanism for hydrolysis of 2-bromo-2-methylpropane. State the rate law, label the rds, and give the stereochemical outcome.
5. Explain — using **both** carbocation stability **and** steric hindrance — why 1° halogenoalkanes favour SN2 and 3° favour SN1.
6. Give reagents/conditions and product for bromoethane with: (a) OH⁻, (b) CN⁻, (c) NH₃. Which is the "step-up" reaction and why?
7. From the nitrile CH₃CH₂CN, give reagents/conditions to make (a) the carboxylic acid, (b) the amine. How many carbons does each product have?
8. Why does NH₃ + halogenoalkane give a mixture, and how do you maximise the primary amine?
9. Same halogenoalkane, same OH⁻ — what two different products, and what single change of conditions switches between them?
10. Order ease of hydrolysis for chloro/bromo/iodoethane and explain via bond energies. Why are fluoroalkanes inert?
11. Give two reasons chlorobenzene resists nucleophilic substitution far more than chloroethane.
12. Describe the full AgX distinguishing test (all 4 steps + why excess HNO₃). State the colours and NH₃ solubilities for AgCl/AgBr/AgI.
13. How do CFCs deplete ozone (no mechanism needed — which bond breaks and why)? Rank the GWP of CFC/HFC/HCFC/hydrocarbon and state which replacements still harm the ozone layer.

**Website minimum deliverables:** complete the **Unit 1, 2, 3 MCQ quizzes** + Class Ex 1 & 2 (after Units 1–3); post queries in the MCQ quiz for tutors. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. The synthesis hub — links alkenes (T11), arenes (T12), solubility (T13), and forward to alcohols (T16), carboxylic acids (T18), amines (T19). See [[chem-topic1-encoded]].
