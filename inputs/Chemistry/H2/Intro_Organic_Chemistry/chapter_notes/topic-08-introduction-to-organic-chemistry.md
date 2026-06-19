# Chem Topic 08 — Introduction to Organic Chemistry (H2 9729)

**Source:** HCI lecture notes `Chem/08IntroductiontoOrganicChemistryLecNotes.pdf` (full text → `workspace/chem/_t8_notes_clean.txt`) + website Units 1–3. Answer keys are image scans — self-mark.

**Why it matters:** The **foundation and vocabulary for ALL of organic chemistry** (Topics 9–21). Naming, formula types, reaction-type recognition, curly-arrow mechanisms, and the electronic/steric reasoning here are reused in every organic question. Not heavily examined alone, but everything downstream assumes it cold. Builds on Topic 2 (hybridisation, electronegativity, IMF) and Topic 6 (transition states, mechanisms).

---

## UNIT 1 — Classes, nomenclature, formulae

### What is organic; classification
- **Organic = contains carbon** (usually + H and/or halogens; may have O, N, S, P). ⚠️ **CO₂, carbonates, and cyanides are NOT organic.**
- **By carbon chain:** **aliphatic** (open chains, e.g. propane), **alicyclic** (carbon rings, e.g. cyclohexane), **aromatic** (≥1 benzene ring). **Saturated** = only single bonds; **unsaturated** = ≥1 double/triple bond or aromatic ring.

### Functional groups (the classes)
| Class | Group | Functional group name |
|---|---|---|
| Hydrocarbons | C–C/C–H; **C=C**; benzene | alkane; alkene; arene |
| Halogen derivatives | **C–X** | halogenoalkane / halogenoarene |
| Hydroxy | **C–OH** | alcohol (1°/2°/3°); **phenol** (OH on benzene) |
| Carbonyl | **–CHO**; **C=O** | aldehyde; ketone |
| Carboxylic acid | **–CO₂H** | carboxylic acid |
| Acid derivatives | **–COX**; **–CO₂R** | acyl halide; ester |
| Nitrogen | **C–NR₂**; **–CONR₂**; **–CN**; **–NO₂** | amine; amide; nitrile; nitro (+ amino acid) |

- **Homologous series:** family with the **same functional group**, successive members differing by **–CH₂–**; a general formula, a regular physical-property trend, similar preparation and chemistry. Alkanes: **CₙH₂ₙ₊₂**.

### Degree of substitution (1°/2°/3°/4°)
- Number of **alkyl/aryl groups** attached to the carbon bearing the functional group: **primary (1°) = 1, secondary (2°) = 2, tertiary (3°) = 3** — applies to **alcohols, halogenoalkanes, radicals, carbocations**.
- **Amines: count groups on the N atom** (primary/secondary/tertiary); a **quaternary (4°) ammonium cation** forms when N uses its lone pair for a 4th bond.
- **Substituent** = atom/group replacing an H. **Alkyl** = alkane − H (methyl, ethyl, propyl…). **Aryl** = aromatic − H (e.g. **phenyl, C₆H₅–**).

### Six types of formula (illustrated by lactic acid CH₃CH(OH)CO₂H)
1. **Empirical** — simplest atom ratio (CH₂O). 2. **Molecular** — actual numbers (C₃H₆O₃). 3. **Structural** — unambiguous, minimal detail (CH₃CH(OH)CO₂H). 4. **Displayed / full structural** — every atom and **every bond** drawn. 5. **Skeletal** — lines = C–C bonds (each end = a C), H on C omitted, functional groups shown; double/triple lines for multiple bonds. 6. **Stereochemical** — 3-D: **solid wedge = out of page toward you, dashed wedge = into page, line = in plane**.
- ⚠️ When writing alkyl groups, **don't invert H and C** (write –CH₃ or H₃C–, not –CH₃ reversed as "₃CH").

### IUPAC nomenclature: **stem + suffix + prefix + locant + stereo-identifier**
- **Stem** = longest C chain (meth/eth/prop/but/pent/hex/hept/oct/non/dec) + bond type: **-an-** (all single), **-en-** (one C=C), **-dien-** (two C=C), **-yn-** (one C≡C).
- **Suffix** = the **highest-priority** functional group. **Priority (high→low): carboxylic acid (-oic acid) > ester (-oate) > acyl halide (-oyl halide) > amide (-amide) > nitrile (-nitrile) > aldehyde (-al) > ketone (-one) > alcohol (-ol) > amine (-amine) > alkene (-ene) > arene (benzene).**
- **Prefixes** = all other groups, listed **alphabetically**, with di/tri for repeats: **cyano** (CN), **oxo** (ketone), **hydroxy** (OH), **amino** (NR₂), **nitro**, **chloro/bromo**, **phenyl**, alkyl.
- **Locants** = number the chain so the **suffix gets the smallest number**, then the **smallest set** for prefixes. Commas between numbers; hyphens between numbers and words. (Alphabetical order ignores multiplying prefixes like "di".) E.g. **3,4-dichloro-3-methylpentan-1-ol**.
- **Stereo-identifier** (cis-/trans- etc.) goes in front.

> Hybridisation/shapes of ethane (sp³, 109.5°), ethene/benzene (sp², 120°), ethyne (sp, 180°) — LO 11.1(b–d), already covered in [[chem-topic1-encoded]] (Topic 2 note).

---

## UNIT 2 — Reaction types & mechanisms

### Seven organic reaction types (recognise the change)
- **Substitution** — one atom/group replaces another.
- **Addition** — a molecule (usually with C=C) reacts to give **one** product; the **π bond breaks → two new σ bonds**. *Opposite of elimination.*
- **Elimination** — a double bond forms with **removal of a small molecule** (H₂O from an alcohol, HX from a halogenoalkane) from **adjacent** carbons. *Opposite of addition.*
- **Condensation** — two molecules join into a **bigger** molecule **with loss of a small molecule** (H₂O, HCl). ⚠️ Not the same as elimination (which requires a new double bond).
- **Hydrolysis** — a molecule is **split by water** (often acid/alkali catalysed).
- **Oxidation** — **add O atoms OR remove H atoms**; the **oxidation number of the functional-group atom increases**. (Balance: add H₂O for O, then H⁺ and e⁻.)
- **Reduction** — **remove O OR add H atoms**; oxidation number **decreases**.

### Curly-arrow mechanisms
- A mechanism shows which bonds break/form and in what order. **Curly arrow: tail = source of electron(s), head = destination.** **Half-head (fish-hook) arrow = one electron; full-head arrow = a pair.**
- **Homolytic fission:** bonding pair splits **equally** (one e⁻ to each atom) → **free radicals** (unpaired electrons, highly reactive). Fish-hook arrows.
- **Heterolytic fission:** **both** electrons go to **one** atom (usually the more electronegative) → **ions**; full-head arrow. Forms a **carbocation** (positive C, only **6 outer electrons**) or a **carbanion** (negative C, **full octet**) depending on electronegativity.
- **Electrophile (Lewis acid)** = **accepts** an electron pair to form a bond; **electron-deficient** — a positive centre (H⁺, NO₂⁺, carbocations) or a δ+ atom in a polar molecule (Br₂, HBr).
- **Nucleophile (Lewis base)** = **donates** an electron pair to form a bond; **electron-rich** — has lone pairs (H₂O, NH₃, OH⁻, CN⁻, carbanions) or a **π bond** (ethene, benzene).
- **Polar reactions:** heterolytic fission; **electron pairs flow from electron-rich (nucleophilic) to electron-poor (electrophilic) sites.** ⚠️ Place each arrow **precisely** — tail at the exact source (the lone pair itself, **not** the charge or atom symbol), head exactly where the new bond forms.
- **Non-polar reactions:** homolytic, radicals, single electrons. **Only one in the syllabus: free-radical substitution** (alkanes, Topic 10).

---

## UNIT 3 — Electronic & steric effects (in-class taught)

### Electronic effects (alter electron distribution → reactivity)
- **Inductive effect** — polarisation of electron density in a **σ bond** due to the **electronegativity** of nearby atoms; **acts through σ bonds and weakens with distance**.
  - **–Cl, –OH, –NH₂ are inductively electron-WITHDRAWING** (pull density off the adjacent C → δ+).
  - **Alkyl groups are inductively electron-DONATING.**
- **Delocalisation** — when **p orbitals on 3 or more adjacent atoms overlap**, forming a **π electron cloud** in which electrons spread over all the atoms → **resonance stabilisation**. Acts via the π cloud and is **distance-independent**. Examples: **benzene, carboxylic acids, amides, buta-1,3-diene**.
  - ⚠️ Needs **conjugation** (alternating double–single bonds): two C=C **separated by an sp³ carbon** → **no delocalisation** (the p orbitals can't overlap). Only two adjacent p orbitals (an isolated double bond) → no delocalisation.

| Inductive effect | Delocalisation |
|---|---|
| from **electronegativity** difference in a bond | from **≥3 p orbitals** overlapping |
| acts via **σ bonds** | acts via a **π electron cloud** |
| **weakens with distance** | **independent of distance** |

### Steric effect
- Repulsion between the **electron clouds of groups/substituents** (depends on their **size and number**). **Bulky groups crowding the reactive site hinder the approach** of the other reactant → fewer effective collisions → slower reaction = **steric hindrance**. The **larger** the groups and the **more** of them around the reactive site, the greater the hindrance (e.g. nucleophilic attack on a 3° vs 1° halogenoalkane carbon).

---

## PRACTICAL ASPECTS (Section 6 — flagged for P2/P3 + October P4 prep)
- **Distinguishing test:** a quick test-tube test giving an **observable change** (colour / precipitate / gas) to confirm a functional group — **no reflux/distillation**. ~1 cm³ solution; add reagents dropwise until no further change; heat with a water bath. State **positive AND negative** observations and explain the chemistry.
- **Synthesis stages:** carry out reaction (**reflux**) → **separate & purify** → **check purity** → determine structure (IR/MS/NMR — H3).
- **Reflux:** heat so the solvent **boils continually**; a **vertical condenser** returns the vapour → keeps the mixture at the solvent's bp and **minimises loss** of volatile solvent/reactants/product. Heat with a **water/oil/sand bath or heating mantle** (organics are volatile/flammable — no naked flame). **Anti-bumping granules / magnetic stirrer** for even boiling. **Never stopper the condenser** (pressure build-up → glassware breaks).
- **Separation/purification:**
  - **Filtration** (vacuum/Büchner) — solid from solid–liquid mix.
  - **Extraction** — two **immiscible** solvents in a separating funnel; product is more soluble in the 2nd solvent; dry the organic layer (**anhydrous CaCl₂ / Na₂SO₄ / MgSO₄**); **release pressure** when shaking (esp. if CO₂ forms from NaHCO₃). Don't assume the aqueous layer is the denser one.
  - **Distillation** — simple (bp differ by **≥10 °C**, or volatile from non-volatile); **fractional** (bp **<10 °C** apart).
  - **Recrystallisation** — dissolve crude in **minimal hot solvent** (saturated) → **filter hot** (remove insoluble impurities) → **cool in ice** to crystallise → filter → **wash with cold solvent** → dry. Solvent must dissolve the product when hot but not when cold; **minimal** solvent and **cold** wash both **maximise yield**.
- **Purity check:** pure solid melts at a **sharp temperature**; pure liquid distils over a **narrow range (±2 °C)**. Wide range → impurities/moisture. Also **TLC** and **IR**.

---

## TOP EXAM TRAPS (Topic 8)
- CO₂/carbonates/cyanides are **not** organic.
- Degree of substitution counts groups on the **functional-group carbon** — except **amines (count on N)**.
- IUPAC: **suffix = highest-priority group and gets the lowest locant**; prefixes alphabetical; commas/hyphens.
- **Carbocation = 6 outer electrons (positive C); carbanion = full octet (negative C).**
- **Electrophile accepts** an electron pair (Lewis acid, electron-poor); **nucleophile donates** (Lewis base, electron-rich) — don't swap.
- Curly arrows: tail at the **exact electron source** (lone pair/bond), not at the charge symbol; head where the **new bond forms**.
- Delocalisation needs **≥3 adjacent overlapping p orbitals (conjugation)** — an sp³ carbon **breaks** it.
- Inductive = σ-bond, weakens with distance; delocalisation = π-cloud, distance-independent. Alkyl = e-donating; –Cl/–OH/–NH₂ = e-withdrawing.
- Condensation (loses a small molecule, joins two molecules) ≠ elimination (forms a new double bond within one molecule).
- Don't stopper a reflux condenser; recrystallisation uses **minimal hot** solvent + **cold** wash.

---

## ACTIVE RECALL — cold self-test
1. Name the functional group and class for: C=C, C–OH, –CHO, –CO₂H, –COCl, –CO₂R, –CONR₂, –CN, –NO₂.
2. Is propan-2-ol 1°, 2° or 3°? What about (CH₃)₃CBr and a tertiary amine? (state the rule each time)
3. Give all six formula types for lactic acid. What do solid/dashed wedges mean?
4. Name 3,4-dichloro-3-methylpentan-1-ol's features (stem, suffix, prefixes, locant rule). Then name CH₃CH(OH)CH₂CHO.
5. Classify each: alcohol → alkene + H₂O; alkene + Br₂ → dibromide; ester + H₂O → acid + alcohol; aldehyde → carboxylic acid.
6. Define homolytic vs heterolytic fission and the arrow used for each. What's a carbocation vs carbanion?
7. Define electrophile and nucleophile (with the Lewis terms) and give two examples of each.
8. In OH⁻ + CH₃Br, identify nucleophile/electrophile, the bonds broken/formed, and where each curly arrow's tail and head go.
9. Why is –Cl electron-withdrawing but an alkyl group electron-donating (inductively)? How does the effect change with distance?
10. State whether each shows delocalisation: an isolated C=C; buta-1,3-diene; penta-1,4-diene (two C=C separated by CH₂). Explain.
11. Why does a bulky 3° halogenoalkane react more slowly with a nucleophile than a 1° one?
12. Why use minimal hot solvent and a cold wash in recrystallisation? Why never stopper a reflux condenser?

**Website minimum deliverables:** complete the **Unit 1–3 MCQ quizzes** + the single Class Exercise + the Bridging-Module-to-Organic video. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. This is the framework for all organic topics; hybridisation/shapes link to Topic 2. See [[chem-topic1-encoded]].
