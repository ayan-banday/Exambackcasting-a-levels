# Chem Topic 21 — Electrochemistry (H2 9729)

**Source:** HCI lecture notes `Chem/21ElectrochemistryLecNotesupdated.pdf` (full text → `workspace/chem/_t21_notes_clean.txt`, "for use from 2026"; LO 12a–o). Answer keys are image scans — self-mark.

**Why it matters:** A **big, high-weight topic** spanning the spontaneity half (E°/E°cell/ΔG — the redox payoff of Topic 4 + Topic 5 thermodynamics) and the electrolysis half (predicting products + Faraday calculations + industrial processes). It feeds **Group 2/17 reactivity, Transition Elements (catalyst selection), and QA** (all use E° to rank redox strength). Examined as: E°cell + spontaneity prediction, electron-flow/polarity, constructing half-equations in acidic/alkaline media, predicting electrolysis products, Q = It = nF calculations, and the two named industrial processes.

**Mark-scheme-first核心:** examiners reward (1) **E°cell = E°(reduction) − E°(oxidation) = E°(cathode) − E°(anode)**, with sign + units, and the "reactants on opposite sides → reaction may occur" logic; (2) the **electron-flow/polarity reasoning** (electrons from anode→cathode; the two cell types have *reversed polarities*); (3) **selective discharge** at electrodes (most positive E° reduced at cathode, most negative E° oxidised at anode, modified by concentration); (4) **Q = It = nF** chained to a half-equation for mass/volume; (5) for combining half-reactions, **going through ΔG = −nFE°** (NOT adding E° directly).

---

## UNIT 1 — Half-cells & standard electrode potential (LO 12a–d)

### Two cell types (the framing)
- **Electrochemical (galvanic/voltaic) cell:** redox reaction is **spontaneous**; **chemical → electrical** energy (batteries, fuel cells).
- **Electrolytic cell:** redox is **non-spontaneous**; **electrical → chemical** energy (electrolysis, Cu purification, Al extraction, electroplating).
- Redox = electron transfer; **electrons lost (by reducing agent) = electrons gained (by oxidising agent)** — the basis for combining half-equations (T4). Reducing agent: oxidised, loses e⁻, ON ↑. Oxidising agent: reduced, gains e⁻, ON ↓.

### Half-cell & electrode potential
- A **half-cell** = an oxidised form in equilibrium with its reduced form: `oxidised + ne⁻ ⇌ reduced`. Three types: **metal/metal-ion** (Zn²⁺/Zn), **non-metal/ion** (Cl₂/Cl⁻, Pt electrode), **same element, different oxidation states** (Fe³⁺/Fe²⁺, Pt electrode).
- **Pt is the inert electrode** when no metal is present — transfers electrons without reacting.
- A potential difference (the **electrode potential E**) develops between metal and solution; more reactive metal → equilibrium lies further left → more negative. **Absolute E can't be measured** → measure against a reference.

### Standard Hydrogen Electrode (SHE) (LO 12c)
- Reference half-cell, **E° = 0.00 V**. Comprises: **platinised platinum** (finely-divided Pt, inert surface) in **1 mol dm⁻³ H⁺(aq)**, with **H₂ gas at 1 bar, 298 K** bubbled over it. Equilibrium: `H⁺ + e⁻ ⇌ ½H₂`.

### Standard electrode potential E° & measuring it (LO 12b-i, 12d)
- **Standard conditions: 298 K, 1 bar (gases), 1 mol dm⁻³ (aqueous species).**
- **Standard electrode potential = the potential difference between the half-cell and a SHE under standard conditions.** Measure with a **high-resistance voltmeter** (draws negligible current → reads the maximum pd = e.m.f.). Connect the half-cell (metal/non-metal/Pt + salt bridge) to the SHE; the reading IS the half-cell's E° (since SHE = 0).

---

## UNIT 1b — Using E° to rank oxidising/reducing strength

- **By convention, half-equations are written as reductions** (electrons on the left) → E° = **standard reduction potential**. Reversing a half-equation **flips the sign** (same magnitude). E° is an **intensive property** — multiplying a half-equation by a factor does **NOT change E°**.
- **The species on the LEFT is the oxidising agent; on the RIGHT is the reducing agent.**
- **More positive E° → oxidised form more easily reduced → stronger oxidising agent** (e.g. Cl₂ +1.36 > Br₂ +1.07 → Cl₂ stronger oxidant). **More negative E° → reduced form more easily oxidised → stronger reducing agent** (e.g. Ca −2.87 stronger reductant than Mg −2.38). Strongest oxidant in the Data Booklet = **F₂ (+2.87)**; strongest reductant = **Li (−3.04)**.

---

## UNIT 2 — Electrochemical cell & E°cell (LO 12b-ii, 12e, 12f-i)

### Components
- Two half-cells + **wires** (connect electrodes) + **salt bridge** (inverted U-tube of non-reacting ions, e.g. KNO₃ in gel) + **high-resistance voltmeter**. The salt bridge **completes the circuit and maintains charge neutrality** (anions migrate to the anode compartment, cations to the cathode, to offset the charge built up as ions form/are consumed).

### Anode/cathode, polarity, electron flow ★
- **Oxidation occurs at the ANODE; reduction at the CATHODE** (always, in both cell types).
- In an **electrochemical cell**: the anode produces electrons → **anode is NEGATIVE**, cathode consumes them → **cathode is POSITIVE**. **Electrons flow anode → cathode** in the external circuit (i.e. from the less-positive-E° electrode to the more-positive-E° electrode).
- **The half-cell with the more positive E° undergoes reduction (cathode); the less positive undergoes oxidation (anode).**
- *Cell notation (FYI):* `anode | anode ion || cathode ion | cathode` — oxidation on left, reduction on right, `|` = phase boundary, `||` = salt bridge.

### Standard cell potential E°cell (LO 12e) ★
- **E°cell = potential difference between the two half-cells at standard conditions** =
  **E°cell = E°(reduction) − E°(oxidation) = E°(cathode) − E°(anode)** = the more-positive E° minus the less-positive E°.
- Always **include sign and units (V)**. e.g. Zn|Cu cell: +0.34 − (−0.76) = **+1.10 V**.
- **Constructing the redox equation:** reverse the oxidation half-equation, balance electrons (lost = gained), combine with **single forward arrows** (the reaction that actually occurs).

---

## UNIT 3 — Cell potential & redox reactions (LO 12f-ii, g, i, j)

### E°cell ↔ spontaneity (LO 12f-ii) ★
- **E°cell > 0 → spontaneous** (under standard conditions); **E°cell < 0 → non-spontaneous**; **E°cell = 0 → at equilibrium**.
- **Procedure:** find the two half-equations containing the given reactants; decide which is reduced/oxidised **based on the reactants given**.
  - **Both reactants on the SAME side** of their half-equations → both oxidants or both reductants → **reaction cannot occur** (can't calculate E°cell).
  - **Reactants on OPPOSITE sides** → reaction may occur → compute E°cell. If multiple pairs possible, the **most positive E°cell is the most spontaneous**.
  - When a species (e.g. Cr³⁺, MnO₄⁻) appears in several half-equations, **pick the one where the given reactant is on the correct side** (oxidant on left if it's being reduced, etc.).

### E°cell ↔ ΔG (LO 12i) ★
- **ΔG° = −nFE°cell** (n = mol electrons transferred per mole of cell reaction; F = 96 500 C mol⁻¹; ΔG° in J mol⁻¹). **Spontaneous (ΔG < 0) ⟺ E°cell > 0.**

### Effect of non-standard conditions on E (LO 12j) ★ — Le Chatelier on the half-cell
For `oxidised + ne⁻ ⇌ reduced`:
- **↓ [oxidised ion]** → equilibrium shifts left → less tendency to be reduced → **E becomes less positive (more negative)**. (↑ [oxidised ion] → more positive.)
- **↑ pressure of a gaseous oxidant** (e.g. Cl₂) → shifts right → **E more positive.**
- **↑ temperature** (for an endothermic forward reduction, e.g. Na⁺) → shifts left → **E more negative.**
- *(Nernst equation `E = E° − (RT/nF)lnQ` is background only.)*

### Limitations of E°cell for predicting spontaneity (LO 12g) ★
1. **Non-standard conditions:** E° applies only at 298 K/1 bar/1 mol dm⁻³; changes in concentration/pressure/T change the actual cell potential and so the prediction.
2. **Kinetics (energetic vs kinetic feasibility):** E° (like ΔG) predicts only **thermodynamic feasibility, NOT rate.** A reaction with E°cell > 0 may not occur at observable rate due to **high activation energy** (e.g. Cu²⁺ "should" oxidise H₂, E°cell +0.34 V, but no reaction at rtp).

### Combining half-reactions to find E° (LO 12i) ★ — go via ΔG, not E°
- **E° values CANNOT be added directly** (different n). Use a Hess/energy cycle on **ΔG = −nFE°**:
  - convert each E° to ΔG (ΔG = −nFE°), **add the ΔG values**, then convert back: **E°(combined) = −ΔG(total)/(n_combined × F)**.
  - e.g. Fe²⁺/Fe (−0.44, n=2) + Fe³⁺/Fe²⁺ (+0.77, n=1) → Fe³⁺/Fe: ΔG = +84920 + (−74305) = +10615 J → E° = −10615/(3×96500) = **−0.04 V** (not the naive +0.33).

---

## UNIT 4 — Practical applications of electrochemical cells (LO 12k) — fuel cells

### Fuel cells (LO 12k)
- **Reactants supplied continuously** (operate without theoretical limit); the fuel **does not burn** (half-reactions separated, electrons via external circuit) → **directly converts chemical → electrical energy** at higher efficiency.
- **H₂–O₂ fuel cell (alkaline, KOH electrolyte, porous graphite + catalyst electrodes), E°cell = +1.23 V:**
  - Anode (oxidation): `H₂ + 2OH⁻ → 2H₂O + 2e⁻`
  - Cathode (reduction): `O₂ + 2H₂O + 4e⁻ → 4OH⁻`
  - Overall: `2H₂ + O₂ → 2H₂O`
- **Advantages:** no pollution (product is water); high efficiency (~75% chemical→useful energy vs ~40% coal / ~20–25% petrol engine).
- **Disadvantages:** expensive; high operating temperature (slow electrode reactions even with Pt catalyst); alkali can absorb CO₂ → carbonates clog porous electrodes; **bulky H₂ storage** (heavy cylinders / cryogenic liquid / costly metal hydrides).
- **Advantages of developing improved cells/batteries** (e.g. for EVs): **smaller size, lower mass, higher voltage**, longer shelf-life, lower cost.

### Constructing cathode/anode half-equations (LO — featured throughout) ★
- Given medium (acidic/alkaline), reactants/products: write the half-equation balancing **(1) atoms other than O,H, (2) O with H₂O, (3) H with H⁺ (acidic) or with OH⁻/H₂O (alkaline), (4) charge with e⁻.** (Same method as T4.) Examples: hydrazine cell anode `N₂H₄ + 4OH⁻ → N₂ + 4H₂O + 4e⁻`; alkaline battery, lead-acid, Li-ion (all in the notes as application examples — diagrams not examined).

---

## UNIT 5 — Electrolytic cell & products of electrolysis (LO 12m)

### Electrolytic cell vs electrochemical cell ★ — polarities reversed
| | Electrochemical cell | Electrolytic cell |
|---|---|---|
| energy | chemical → electrical | electrical → chemical |
| reaction | spontaneous | non-spontaneous (driven by external power) |
| **anode** | oxidation, **NEGATIVE** | oxidation, **POSITIVE** |
| **cathode** | reduction, **POSITIVE** | reduction, **NEGATIVE** |
- **Both: oxidation at anode, reduction at cathode, electrons flow anode→cathode** — but **polarities are reversed** (in the electrolytic cell the battery pushes electrons *to* the cathode → cathode negative; *removes* them from the anode → anode positive).
- **Electrolyte** = molten salt or aqueous solution (conducts via mobile ions). Cathode (−) attracts **cations → reduced**; anode (+) attracts **anions → oxidised**.

### Selective discharge (LO 12m) ★ — which species is liberated
When more than one species could react, the one needing **least energy** discharges:
- **At the cathode:** the species with the **MORE POSITIVE E°** is reduced.
- **At the anode:** the species with the **MORE NEGATIVE (less positive) E°** is oxidised.
- Modified by **(1) concentration** (changes E), and **(2) nature of the electrode** (active vs inert).

### (a) Pure molten salts
- Only the salt's ions present → discharge them directly. **Molten PbBr₂:** cathode `Pb²⁺ + 2e⁻ → Pb(l)` (molten Pb beads); anode `2Br⁻ → Br₂(g) + 2e⁻` (brown fumes).

### (b) Dilute aqueous solutions — water competes ★
- Water is present in large excess; **consider reduction of H₂O (not H⁺) at the cathode and oxidation of H₂O (not OH⁻) at the anode** (H⁺/OH⁻ discharged only if the electrolyte is aqueous acid/alkali).
- **Dilute NaCl(aq):** cathode — E°(H₂O/H₂) −0.83 is more positive than E°(Na⁺/Na) −2.71 → **H₂O reduced** → `2H₂O + 2e⁻ → H₂ + 2OH⁻`. Anode — E°(O₂/H₂O) +1.23 less positive than E°(Cl₂/Cl⁻) +1.36 → **H₂O oxidised** → `2H₂O → O₂ + 4H⁺ + 4e⁻`. Net = **electrolysis of water** (pure water not used — too few ions to conduct). **Cations of reactive metals (Na⁺, K⁺, Ca²⁺) are NEVER reduced in aqueous solution — H₂O is reduced instead.**

### (c) Concentrated aqueous solutions — high concentration overrides ★
- A high ion concentration can make it **preferentially discharged despite E°**, because concentration shifts E.
- **Concentrated NaCl (brine):** the high [Cl⁻] shifts `Cl₂ + 2e⁻ ⇌ 2Cl⁻` left → **E(Cl₂/Cl⁻) decreases below E°(O₂/H₂O)** → **Cl⁻ preferentially oxidised** → anode `2Cl⁻ → Cl₂ + 2e⁻`. Cathode still reduces H₂O (the Na⁺/H₂O gap is too large for concentration to bridge). **Overall: `2Cl⁻ + 2H₂O → Cl₂ + H₂ + 2OH⁻`** → industrial chlorine + NaOH by-product. *(Overvoltage of O₂ also favours Cl₂ — background.)*

### (d) Active/reactive electrodes ★
- Pt and graphite are **inert**. **Active electrodes oxidise themselves at the anode.**
- **CuSO₄(aq) with a copper anode:** at the anode, E°(Cu²⁺/Cu) +0.34 is **least positive** among Cu/H₂O/SO₄²⁻ options → **Cu preferentially oxidised**: `Cu(s) → Cu²⁺ + 2e⁻` (anode dissolves). At cathode `Cu²⁺ + 2e⁻ → Cu`. (With Pt anode, H₂O would be oxidised instead.)

---

## UNIT 6 — Calculations in electrolysis (LO 12l, n)

- **Q = nF** (n = mol electrons, F = **96 500 C mol⁻¹**) and **Q = It** (I in A, t in s). Combine: **n(e⁻) = It/F.**
- **Faraday's law:** amount of substance discharged ∝ quantity of charge. Method: **Q = It → n(e⁻) = Q/F → use the half-equation's electron ratio → mol of substance → mass (×Mr) or volume (×24 dm³ at rtp / ×22.4 at stp).**
- **Mass/volume depends ONLY on current and time, NOT on the concentration of ions.**
- **F = Le** (Faraday = Avogadro constant L × elementary charge e = 6.02×10²³ × 1.60×10⁻¹⁹ ≈ 96 500). → an electrolysis experiment measuring F lets you find L or e.
- **Planning (HCI):** set up cell with d.c. supply + ammeter; **clean electrodes** (sandpaper to remove oxide), **wash with water then ethanol, dry, weigh the ANODE accurately** (cathode deposit can flake off); record initial & final current (use average) and time; reweigh anode → mass loss → mol metal → relate to Q = It and Q = n(e⁻)F. **Get polarities correct.** Reduce % error by running longer (more mass change) / fixing current with a variable resistor.

---

## UNIT 7 — Industrial applications of electrolysis (LO 12o)

### (a) Electrolytic purification of copper (LO 12o-ii) ★
- **Electrolyte CuSO₄(aq); anode = impure copper; cathode = pure copper.**
- **Anode:** `Cu(s) → Cu²⁺(aq) + 2e⁻` (impure Cu dissolves). **Cathode:** `Cu²⁺(aq) + 2e⁻ → Cu(s)` (pure Cu deposits).
- **Impurities sort by E°:** metals **more reactive than Cu** (E° less positive than Cu²⁺/Cu — e.g. Zn, Fe) are **also oxidised → enter the electrolyte as ions but are NOT re-reduced** at the cathode (Cu²⁺ preferentially reduced, more positive E°) → stay in solution. Metals **less reactive than Cu** (E° more positive — e.g. Ag, Au) are **NOT oxidised → drop off as anode sludge.** Net: copper transfers anode → cathode; anode loses mass, cathode gains.

### (b) Anodising of aluminium (LO 12o-i) ★
- Al naturally forms a thin protective Al₂O₃ layer. **Anodising = using electrolysis to INCREASE the thickness of the corrosion-resistant Al₂O₃ layer** on an Al object.
- **Electrolyte dilute H₂SO₄; anode = the aluminium object; cathode = Pt or graphite.**
- **Anode:** `2Al(s) + 3H₂O(l) → Al₂O₃(s) + 6H⁺(aq) + 6e⁻`. **Cathode:** `2H⁺(aq) + 2e⁻ → H₂(g)`.
- The porous Al₂O₃ layer is sealed by hot water; being porous it **accepts dyes** → decorative (window frames, drink cans). Thicker layer (longer electrolysis) → more dye, deeper colour.

---

## TOP EXAM TRAPS (Topic 21)
- **E°cell = E°(cathode/reduction) − E°(anode/oxidation)** — the more-positive minus the less-positive. Include **sign + units**.
- **Reactants on the same side of their half-equations → no reaction** (both oxidants or both reductants).
- **Both cells: oxidation@anode, reduction@cathode, e⁻ flow anode→cathode — but POLARITIES REVERSED** (electrochemical: anode −; electrolytic: anode +).
- **Electrode potential is intensive** — multiplying a half-equation doesn't change E°. But **combining different half-reactions must go via ΔG = −nFE°** (you can add ΔG, not E°).
- **Selective discharge: cathode = most positive E° reduced; anode = most negative E° oxidised** — but **concentration can override** (brine → Cl₂, not O₂).
- **In dilute aqueous: H₂O is reduced/oxidised** (not H⁺/OH⁻ unless acid/alkali); **reactive-metal cations never reduced in water.**
- **E° predicts feasibility, NOT rate** (kinetic limitation = high Ea); and only at standard conditions.
- **Mass/volume in electrolysis depends only on I and t, not concentration.** Q = It = nF.
- **Cu purification: reactive impurities → electrolyte; unreactive (Ag, Au) → anode sludge.** Anodising INCREASES the Al₂O₃ layer (Al is the **anode**).
- **E ↔ Le Chatelier:** ↓[oxidised ion] → E less positive; ↑gas pressure of oxidant → E more positive.

---

## ACTIVE RECALL — cold self-test
1. Describe the SHE (all components + conditions). Define standard electrode potential and how you'd measure E° of a Fe³⁺/Fe²⁺ half-cell.
2. From E° values, which is the stronger oxidising agent, Cl₂ or Br₂? Stronger reducing agent, Ca or Mg? Explain.
3. For the Zn|Cu cell: which is anode/cathode, their polarity, the electron-flow direction, E°cell, and the overall equation.
4. Will I₂ react with Cr³⁺ in acidified solution? Show the working (E°cell) and state why/why not.
5. Why can't you add E° values to get E° of a combined half-reaction? Find E°(Fe³⁺/Fe) from Fe²⁺/Fe (−0.44) and Fe³⁺/Fe²⁺ (+0.77).
6. State two limitations of using E°cell to predict spontaneity, with an example of each.
7. How does E°(Cu²⁺/Cu) change if [Cu²⁺] is decreased? Explain via Le Chatelier.
8. Write the anode, cathode and overall equations for the H₂–O₂ alkaline fuel cell. Give two advantages and two disadvantages.
9. Predict the products at each electrode (with equations + reasoning) for electrolysis of: (a) molten MgCl₂, (b) dilute NaCl(aq), (c) concentrated NaCl(aq), (d) CuSO₄(aq) with a Cu anode.
10. State Q = It = nF and F = Le. Calculate the charge to liberate 44.8 dm³ Cl₂ at stp from molten NaCl.
11. Explain the copper-purification electrode reactions and how Zn and Ag impurities are removed. What is anodising, the electrolyte, and the two electrode equations?

**Website minimum deliverables:** complete each Unit's MCQ quiz + Class Ex 1–5 (after the indicated units); post queries in the MCQ quizzes. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. The redox/spontaneity capstone — applies T4 (half-equations) + T5 (ΔG); feeds Group 2/17 reactivity, Transition Elements (catalyst selection), and QA. See [[chem-topic1-encoded]].
