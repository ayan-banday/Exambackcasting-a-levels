# Chem Topic 05 — Chemical Energetics & Thermodynamics (H2 9729)

**Source:** HCI lecture notes `Chem/05ChemicalEnergeticsLecNotes.pdf` (full text → `workspace/chem/_t5_notes_clean.txt`) + website Units 1–5. Answer keys are image scans — self-mark.

**Why it matters:** Big, high-frequency topic spanning AO1 (definitions) + AO2 (Hess/Born-Haber/Gibbs calculations). Definitions must be **word-perfect** (each "1 mole", state, "standard conditions" carries a mark). The Born-Haber cycle and ΔG spontaneity are recurring P3 set-pieces. Builds on Topic 2 (lattice energy, covalent character, charge density) and Topic 3 (Boltzmann/entropy). Revisited in Equilibria (ΔG° ↔ K).

---

## CORE EQUATIONS (commit to memory)
- **q = mcΔT** (heat into the *solution*) ; **q = CΔT** (if heat capacity given). c(water) = **4.18 J g⁻¹ K⁻¹**.
- **ΔH = ± q / n** (n = moles *as the definition specifies*; sign +endo / −exo).
- **Hess (ΔHc data): ΔHr = Σm·ΔHc(reactants) − Σn·ΔHc(products).**
- **Hess (ΔHf data): ΔHr = Σm·ΔHf(products) − Σn·ΔHf(reactants).** ⚠️ opposite order to the ΔHc formula!
- **Bond energy: ΔHr = Σ B.E.(bonds broken) − Σ B.E.(bonds formed).** (gaseous species only)
- **Born-Haber: ΔHf = ΣΔHatom + ΣIE + ΣEA + LE.**
- **ΔHsol = −LE + ΣΔHhyd.**
- **ΔG = ΔH − TΔS** (T in K; ⚠️ convert ΔS from J→kJ first).

---

## UNIT 1 — Enthalpy, enthalpy changes & definitions

- **Enthalpy (H):** total chemical energy (heat content) of a substance. **Enthalpy change ΔH** (kJ mol⁻¹) = energy change in a reaction (bond breaking absorbs energy; bond forming releases it).
- **Exothermic (ΔH < 0):** releases heat → surroundings' T **rises**; products lower energy → more energetically stable. **Endothermic (ΔH > 0):** absorbs heat → surroundings' T **falls**; products higher energy.
- **Energy level diagram** = just reactant/product levels. **Energy profile (reaction pathway) diagram** = adds the **activation energy Eₐ** hump (Eₐ = minimum energy reacting particles must have to react). ΔH = product level − reactant level.
- **Thermochemical equation:** balanced eqn + ΔH; ΔH refers to the *whole reaction as written* (× coefficients scales ΔH; reversing flips sign). **State symbols essential** (state change carries energy, e.g. H₂O(l)→H₂O(g) is +44 kJ).
- **Standard conditions:** **298 K, 1 bar (10⁵ Pa), 1 mol dm⁻³** solutions. **Standard state** = pure form at 1 bar (C(s) = graphite). **Elements in standard states: ΔHf = 0.**

### Definitions to memorise word-for-word (all "1 mole", standard conditions)
| Term | Definition | Sign |
|---|---|---|
| **ΔHf** (formation) | enthalpy change when **1 mol of a compound is formed from its constituent elements in their standard states** | ± (0 for elements) |
| **ΔHc** (combustion) | heat evolved when **1 mol of a substance is completely burnt in excess oxygen** | always − |
| **ΔHneut** (neutralisation) | heat evolved when **1 mol of water is formed** in the neutralisation of an acid by a base | always − |
| **ΔHatom** (atomisation) | energy required to form **1 mol of gaseous atoms** from the element (or to convert 1 mol compound → gaseous atoms) | always + |
| **Bond energy (B.E.)** | energy required to **break 1 mol of a covalent bond in the gaseous state** | always + |
| **Lattice energy (LE)** | heat evolved when **1 mol of solid ionic compound is formed from its constituent gaseous ions** | always − |
| **1st ionisation energy (IE)** | energy to remove **1 mol of electrons from 1 mol of gaseous atoms → 1 mol of singly-charged gaseous cations** | always + |
| **1st electron affinity (EA)** | enthalpy change when **1 mol of electrons is added to 1 mol of gaseous atoms → 1 mol of singly-charged gaseous anions** | 1st usually −; 2nd+ always + |
| **ΔHhyd** (hydration) | heat evolved when **1 mol of free gaseous ions is dissolved in infinite water** | always − |
| **ΔHsol** (solution) | enthalpy change when **1 mol of solute is completely dissolved in infinite solvent** | ± |

- **ΔHneut detail:** strong acid + strong base ≈ **−57.0 kJ mol⁻¹** (both fully ionised → effectively just H⁺(aq) + OH⁻(aq) → H₂O(l)). **Weak acid/base is less exothermic** (energy absorbed to ionise the un-ionised weak acid/base).
- **2nd EA is positive** — energy needed to overcome repulsion forcing an electron onto a negative anion.

---

## UNIT 2 — Experimental determination + Hess's Law

### Calorimetry (q = mcΔT)
- ΔT in °C and K is numerically equal. ΔH = ±q/n (divide by moles per the definition; e.g. n(H₂O) for ΔHneut, n(substance burnt) for ΔHc). **State the sign.**
- **Assumptions:** (1) no heat loss to/gain from surroundings; (2) heat capacity of the calorimeter (polystyrene cup) is negligible/ignored; (3) **density of solution = water (1.00 g cm⁻³)** so mass = volume; (4) **c of solution = c of water (4.18)**.
- **Mixing two solutions:** use the **weighted-average** initial temperature; add the kick-starting solution **quickly** (don't pipette it); identify the **limiting reagent** for n.
- **Thermometric titration:** record T after each burette addition; **extrapolate the two lines on the T–volume graph** to the intersection → gives both the maximum T and the equivalence volume (used when a concentration is unknown). No indicator needed.
- **Temperature correction (slow reactions):** plot T–time, record before and after mixing, **extrapolate back to the mixing time** to get the true max/min T (corrects for heat loss).
- **ΔHc apparatus:** simple = spirit burner heating water in a **copper calorimeter** — ⚠️ **include the copper's heat capacity** (copper conducts). **Bomb calorimeter** = most accurate (excess O₂, minimal heat loss, allows for ignition wire).

### Hess's Law
- **ΔH depends only on initial and final states, independent of the reaction pathway.** Construct a fully-labelled **energy cycle** or **energy level diagram** (balanced eqns, state symbols, arrow direction = sign of ΔH; mark the zero level for elements).

---

## UNIT 3 — Hess applications (ΔHc, ΔHf, bond energy)
- **From ΔHc:** ΔHr = **Σ ΔHc(reactants) − Σ ΔHc(products)** (everything combusts *down* to CO₂ + H₂O). *Worked:* ΔHf(CO) = ΔHc(C) − ΔHc(CO) = −394 −(−283) = **−111**.
- **From ΔHf:** ΔHr = **Σ ΔHf(products) − Σ ΔHf(reactants)** (elements at the bottom; ΔHf arrows point *up*). *Worked:* CaCO₃→CaO+CO₂: ΔHr = [−635 + (−394)] − (−1207) = **+178**.
- **From bond energies:** ΔHr = **Σ B.E.(broken) − Σ B.E.(formed)**; **gaseous molecules only**. Draw full structural formulae to count bonds. Bond breaking endothermic, forming exothermic.
- **Discrepancy** between bond-energy answer and ΔHf/experimental answer: Data Booklet B.E. are **average** values over many molecules, not exact for this molecule.
- **ΔHatom ↔ B.E. for diatomics:** **ΔHatom(X₂) = ½ B.E.(X–X)** (atomisation makes ½ mol of molecule into 1 mol atoms).

---

## UNIT 4 — Born-Haber, lattice energy, hydration & solution

### Lattice energy
- Measure of ionic bond strength: **more exothermic LE → stronger ionic bonding → more stable compound.**
- **Magnitude factors (Topic 2 link):** **|LE| ∝ (q⁺ × q⁻) / (r⁺ + r⁻)** — **higher ionic charges and smaller ionic radii → more exothermic** (e.g. MgCl₂ ≫ NaCl; MgO ≫ NaCl).

### Born-Haber cycle (to find LE)
Elements (standard states, level 0) → **gaseous atoms** (ΣΔHatom) → **gaseous ions** (ΣIE for cation, ΣEA for anion) → **solid lattice** (LE); overall = **ΔHf**.
**ΔHf = ΣΔHatom + ΣIE + ΣEA + LE** → solve for LE.
- ⚠️ Watch stoichiometry (e.g. Na₂O needs 2×ΔHatom(Na), 2×IE₁(Na), ½×... O atomisation, EA1+EA2 of O).
- IE and EA drawn as **separate arrows**. Mark the zero level (elements).

### Experimental vs theoretical LE (covalent character)
- **Experimental LE** = from Born-Haber (real). **Theoretical LE** = from a **pure-ionic model**.
- A **small difference** → ionic model is good. A **large difference** → significant **covalent character** (a **high-charge-density cation polarises a large, polarisable anion**). MgCl₂ (>CsCl) and AgI (>AgF) show big discrepancies.

### Hydration & solution
- **ΔHhyd magnitude ∝ charge density (q/r):** higher charge density → stronger ion–dipole interaction → **more exothermic** (Mg²⁺ ≫ Na⁺; Cl⁻ more exo than I⁻ — smaller radius).
- **Dissolution cycle:** break lattice (+|LE|, endothermic) then hydrate ions (ΣΔHhyd, exothermic): **ΔHsol = −LE + ΣΔHhyd**.
  - |LE| > |ΣΔHhyd| → ΔHsol **> 0** (endothermic). |LE| < |ΣΔHhyd| → ΔHsol **< 0** (exothermic).
- ΔHsol can be + or −. Highly + → likely insoluble; − → likely soluble. **But some +ΔHsol salts (NaCl, KCl, NH₄NO₃) still dissolve — driven by positive ΔS** (link to Unit 5).

---

## UNIT 5 — Entropy & Gibbs free energy

### Entropy (S)
- **Entropy** = a measure of the **dispersal/distribution of energy** among the particles (number of ways energy can be distributed). Units **J mol⁻¹ K⁻¹**. **S(solid) < S(liquid) ≪ S(gas).**
- ΔS > 0 = more ways to disperse energy; ΔS < 0 = fewer.

### Predicting the sign of ΔS
- **↑ Temperature →** ΔS **+** (wider range of KE, more ways to disperse — Boltzmann broadens).
- **Phase change:** s→l→g increases S; **vaporisation (ΔS ≫ 0) ≫ fusion (ΔS > 0)**.
- **↑ number of gas particles →** large **+**; ↓ gas particles → **−**; no change in moles of gas → ΔS ≈ 0 (small).
- **Dissolving ionic solid:** usually **+** (ions freed) — but countered by water ordering around ions; net usually +.
- **Gas pressure ↓ (volume ↑) →** +; **gaseous ions → solid lattice →** − (more ordered).

### Gibbs free energy: ΔG = ΔH − TΔS
- **ΔG < 0 → spontaneous** (exergonic). **ΔG = 0 → equilibrium** (e.g. at the mp/bp, during melting/boiling). **ΔG > 0 → non-spontaneous** (endergonic; spontaneous in reverse).
- ΔG and ΔS are **state functions** → ΔGr = ΣΔGf(products) − ΣΔGf(reactants); ΔSr similarly from S° values.
- ⚠️ **Unit consistency:** ΔH, ΔG in kJ mol⁻¹; ΔS in J mol⁻¹ K⁻¹ → divide ΔS by 1000 before using ΔG = ΔH − TΔS.
- **ΔS of a phase change = ΔH(transition)/T** (e.g. ΔSvap = ΔHvap/Tbp).

### Effect of temperature on spontaneity (assume ΔH, ΔS ≈ constant with T)
| ΔH | ΔS | ΔG = ΔH − TΔS | Spontaneity |
|---|---|---|---|
| − | + | always − | **spontaneous at all T** |
| + | − | always + | **never spontaneous** |
| − | − | − if \|ΔH\| > \|TΔS\| | **spontaneous at low T** (enthalpy-driven) |
| + | + | − if TΔS > ΔH | **spontaneous at high T** (entropy-driven) |
- **Crossover temperature** (ΔG = 0): **T = ΔH / ΔS**. Above/below it (depending on case) the reaction becomes spontaneous.
- ⚠️ Assumption breaks down across a **phase change** of a reactant/product (ΔH and ΔS shift, e.g. H₂ + I₂(s vs g) → 2HI).

### Limitations of ΔG° (LO 7l)
1. **Standard conditions only** — under non-standard conditions you must use ΔG (not ΔG°).
2. **Says nothing about kinetics/rate** — a spontaneous (ΔG < 0) reaction can be immeasurably slow if Eₐ is large. **Thermodynamically unstable but kinetically stable**: rusting; **diamond → graphite** (ΔG < 0 but doesn't happen at observable rate).

---

## TOP EXAM TRAPS (Topic 5)
- **Definitions must be exact** — "1 mole", correct species/state, "standard conditions". Lattice energy = *gaseous ions → solid* (−); bond energy = *break, gaseous* (+); IE/EA = *gaseous, per mole of electrons*.
- ΔHc formula = reactants − products; ΔHf formula = products − reactants. **Don't swap them.**
- Bond-energy calcs are **gaseous-species only**; the discrepancy reason is "**average** bond energies."
- Calorimetry: **m is the mass of the solution/water, not the solid**; copper calorimeter's heat capacity is **included**, polystyrene cup's is **ignored**.
- Born-Haber: get the **stoichiometry of ΔHatom/IE/EA right**; 2nd EA is **+**.
- Big experimental–theoretical LE gap → **covalent character** (high-charge-density cation + large polarisable anion).
- **ΔS in J, ΔH/ΔG in kJ** — convert before ΔG = ΔH − TΔS.
- **Spontaneous ≠ fast.** ΔG only predicts feasibility, not rate.
- Don't claim a +ΔHsol salt is insoluble — entropy can drive dissolution.

---

## ACTIVE RECALL — cold self-test
1. Define ΔHf, ΔHc, lattice energy, 1st EA, and ΔHhyd (word-perfect, with signs).
2. 40 cm³ of 2.0 M HCl + 50 cm³ of 2.0 M NaOH; T rises 22.4→34.6 °C. Find ΔHneut (state assumptions).
3. Given ΔHc(C) = −394, ΔHc(H₂) = −286, ΔHc(propane) = −2220, find ΔHf(propane).
4. Use bond energies to find ΔHr for 2C₂H₂ + 5O₂ → 4CO₂ + 2H₂O(g). Why might it differ from the ΔHf value?
5. State the relationship between |LE| and ionic charge/radius. Why is LE(MgCl₂) more exothermic than LE(NaCl)?
6. Construct the Born-Haber expression for Na₂O and solve for LE given ΔHf, ΔHatom(Na), IE₁(Na), B.E.(O=O), EA₁ + EA₂(O).
7. Why does AgI show a larger experimental–theoretical LE discrepancy than AgF?
8. Write the ΔHsol = −LE + ΣΔHhyd cycle for NaCl; given LE and ΔHhyd(Na⁺), ΔHsol, find ΔHhyd(Cl⁻).
9. Predict the sign of ΔS: CaCO₃(s)→CaO(s)+CO₂(g); N₂+3H₂→2NH₃; H₂O(l)→H₂O(g); Ar 2 atm→1 atm.
10. State ΔG = ΔH − TΔS and the spontaneity rule. For C(s)+CO₂(g)→2CO(g) (ΔH = +172.5, ΔS = +0.176 kJ/K), find the minimum T for spontaneity.
11. Give the four ΔH/ΔS spontaneity cases. Which is "entropy-driven"?
12. State the two limitations of using ΔG° to predict spontaneity (give an example of each).

**Website minimum deliverables:** complete the **Unit 1–5 MCQ quizzes** + the 5 Class Exercise reviews. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Charge-density/covalent-character links to [[chem-topic1-encoded]] (Topic 2); ΔG° revisited in Equilibria.
