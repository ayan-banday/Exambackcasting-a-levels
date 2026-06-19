# Chem Topic 07 — Chemical Equilibria (H2 9729)

**Source:** HCI lecture notes `Chem/07ChemEquilibriaLecNotes.pdf` (full text → `workspace/chem/_t7_notes_clean.txt`) + website Units 1–3. Answer keys are image scans — self-mark. (Erratum p.21 Ex 7.3: show the V in the Kc working.)

**Why it matters:** Core "Transformation" topic. Le Chatelier predictions, Kc/Kp expressions, and ICE-table calculations are reliable AO1/AO2 marks in every paper. Builds on Topic 5 (ΔH → temperature effect) and Topic 6 (rates of forward/back, catalyst, Haber kinetics). Extended in **Solubility Equilibria (Ksp)** and **Acid–Base Equilibria (Ka, buffers, titration curves)**.

---

## THE ONE RULE THAT CARRIES THE TOPIC
> **K changes ONLY with temperature.** Concentration, total pressure, a catalyst, and inert gas **never change K** — they may shift the *position of equilibrium*, but K is reattained at the same value. (Position of equilibrium ≠ K.)

---

## UNIT 1 — Dynamic equilibrium; concentration–time graphs

- **Reversible reaction:** can occur in both directions (⇌). E.g. Haber (N₂+3H₂⇌2NH₃), Contact (2SO₂+O₂⇌2SO₃), esterification.
- **Dynamic equilibrium:** a reversible reaction **in a closed system** where the **forward and reverse reactions occur at the same (non-zero) rate**, so there is **no overall change in concentrations**. Reactions are still happening (dynamic, not static — escalator analogy).
- **Characteristics:** closed system; constant macroscopic properties (colour, concentration, pressure); rate_f = rate_b ≠ 0; reachable from **either** reactants or products side.
- **Why a closed system:** open systems lose/gain substance so equilibrium can't establish. E.g. CaCO₃(s) ⇌ CaO(s) + CO₂(g): open → CO₂ escapes → forward goes to **completion**; closed → CO₂ reacts back → **equilibrium**.
- **Concentration–time graph (reversible):** reactant and product levels **plateau**, but the limiting reactant **does not fall to zero** (vs a completion reaction, which does). **Rate–time:** rate_f falls and rate_b rises until they meet.
- Changes follow **stoichiometry**: e.g. 2NO₂ ⇌ 2NO + O₂, if P(O₂) rises by x then P(NO₂) falls by 2x and P(NO) rises by 2x; all reach the new equilibrium at the **same t_eqm**.

---

## UNIT 2 — Equilibrium constant; Le Chatelier; what changes K

### Equilibrium Law & expressions
- For aA + bB ⇌ cC + dD: **K = [C]^c[D]^d / [A]^a[B]^b** (constant at constant T).
- **Kc** uses concentrations (mol dm⁻³); **Kp** uses partial pressures (Pa or atm). **Partial pressure pₐ = mole fraction xₐ × P_total.**
- **Units = (mol dm⁻³ or Pa)^Δn** where **Δn = (c+d) − (a+b)**. If Δn = 0 → no units, and Kc = Kp.
- **Heterogeneous** equilibrium = components in **different phases**; **homogeneous** = **same phase**.
- **Omit pure solids and pure liquids (and the solvent) from K** — their concentration (= density/Mr) is constant. E.g. CaCO₃(s) ⇌ CaO(s) + CO₂(g): **Kc = [CO₂]**, Kp = p(CO₂). [H₂O(l)] ≈ 55.5 mol dm⁻³ constant.

### Position of equilibrium (POE) vs K
- **POE** = the relative proportion of products to reactants in the mixture. **K > 1 → POE lies right** (products dominant); **K < 1 → POE lies left** (reactants dominant).
- **K tells you the extent, NOT the rate** (a large K can still be slow).

### Le Chatelier's Principle
> If the conditions of a system at equilibrium are changed, the **position of equilibrium shifts so as to reduce/oppose that change**.

| Change | POE shift | Effect on K |
|---|---|---|
| **Add a reactant / its partial pressure** | shifts to **consume** it (toward the other side) | **unchanged** |
| **Add a product** | shifts toward reactants | **unchanged** |
| **↓ volume → ↑ total pressure** | shifts to the side with **fewer moles of gas** (no shift if equal moles of gas) | **unchanged** |
| **Catalyst** | **none** (speeds forward & back equally → equilibrium reached faster) | **unchanged** |
| **Change temperature** | shifts in the **endo/exothermic direction that opposes the change** | **CHANGES** |

- **Temperature is the only factor that changes K.** For an **exothermic** forward reaction: **↓T → POE right and K increases**; ↑T → POE left and K decreases. (Mechanistic reason: both k_f and k_b fall on cooling, but the backward step has the larger Ea so k_b falls more → K = k_f/k_b rises.)
- Pure solids/liquids: adding more has **no effect** on POE.
- ⚠️ A catalyst changes **neither** POE nor K — only the **time** to reach equilibrium.

---

## UNIT 3 — Reaction quotient; calculations; Haber process

### Reaction quotient Q
- Same expression as K but with **instantaneous (any-time) concentrations/pressures**. Q can take any value; K is fixed at a given T.
- **Q < K → reaction goes forward** (toward products). **Q > K → goes backward** (toward reactants). **Q = K → at equilibrium.**
- **Inert gas added:**
  - **At constant volume → NO effect** (partial pressures of the reacting gases unchanged → Q = K).
  - **At constant total pressure → POE shifts toward the side with MORE moles of gas** (adding inert gas raises total moles; Qp changes so it ≠ Kp). E.g. 2NO₂ ⇌ N₂O₄ shifts **left**.

### Calculations (ICE table — no quadratics required)
- Build an **Initial–Change–Equilibrium** table; use **stoichiometry** for the "Change" row.
- **Kc:** convert equilibrium amounts to concentrations (**conc = mol / V** — always show the V).
- **Kp:** equilibrium amounts → **mole fractions** → **partial pressures (pᵢ = xᵢ·P_total)**.
- **Degree of dissociation α = (amount dissociated) / (initial amount)**. For a %-change, set the initial amount = 1 mol for convenience.
- **Experimental Kc determination:** allow time to reach equilibrium; **maintain & record temperature** (water bath); measure **all initial amounts + one equilibrium amount** (rest via ICE); use **5 different starting mixtures** to verify K is unchanged by concentration.
  - **Esterification** (CH₃CO₂H + C₂H₅OH ⇌ ester + H₂O): HCl catalyst speeds equilibrium without changing Kc; titrate equilibrium mixture with standard NaOH for **total acid**, subtract the HCl to get the ethanoic acid.
  - **Fe³⁺/SCN⁻ complex** (deep red): use a **colorimeter + calibration curve** (absorbance vs concentration) to get the complex's equilibrium concentration.

### Haber process (LO 9g) — equilibrium ↔ kinetics compromise
**N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH = −92 kJ mol⁻¹ (exothermic).** Conditions: **~450 °C, ~250 atm, finely divided Fe catalyst.**
- **Low temperature** favours the exothermic forward reaction → **higher yield**, BUT the reaction becomes **too slow** → compromise at a **moderate ~450 °C**.
- **High pressure** favours the forward reaction (4 mol gas → 2 mol gas) → **higher yield**, BUT high cost/maintenance of equipment → **~250 atm**.
- **Catalyst (Fe)** increases the **rate** (reach equilibrium faster) **without affecting yield**.
- **Removing NH₃ as it forms** continuously shifts the POE to the right → higher conversion.
- Industrial conditions balance **yield (equilibrium)** against **rate (kinetics)** and **cost**.

---

## TOP EXAM TRAPS (Topic 7)
- **Only temperature changes K.** Don't claim adding reactant/pressure/catalyst changes K — they shift POE (catalyst doesn't even do that).
- A **catalyst** has **no effect on POE or K** — only speeds up reaching equilibrium.
- **Omit pure solids/liquids/solvent** from Kc/Kp.
- Pressure shifts toward **fewer moles of GAS** — count gases only (no effect if equal moles of gas).
- **Inert gas: constant V → no effect; constant total P → shift toward more moles of gas.**
- **Q < K → forward; Q > K → backward.**
- Kp uses **partial pressures** (mole fraction × total P); **units depend on Δn(gas)** (Δn = 0 → no units).
- For an **exothermic** forward reaction, **decreasing T raises K** and shifts right.
- Haber: low T gives a **higher yield** but is too slow → the 450 °C is a **compromise**, not the yield optimum. State the yield-vs-rate trade-off.
- Always **show conc = mol/V** in Kc working (erratum).

---

## ACTIVE RECALL — cold self-test
1. Define a reversible reaction and dynamic equilibrium (in terms of rates). Why must the system be closed?
2. Write Kc and Kp (with units) for N₂ + 3H₂ ⇌ 2NH₃ and for CaCO₃(s) ⇌ CaO(s) + CO₂(g).
3. State whether each changes the POE and/or K: adding N₂; halving the volume; adding a catalyst; raising T (forward exothermic).
4. For 2NO₂(g) ⇌ N₂O₄(g), what happens to the brown colour when total pressure is increased? Explain.
5. A system has Qc = 0.61 and Kc = 1.20 at this T. Is it at equilibrium? Which way does it go?
6. Why does adding an inert gas at constant volume have no effect, but at constant total pressure shift 2NO₂ ⇌ N₂O₄ left?
7. ICE: 0.500 mol H₂ + 0.500 mol I₂, Kc = 54.3 for H₂ + I₂ ⇌ 2HI. Find equilibrium moles of each.
8. PCl₅ is 30% dissociated at 1.01×10⁵ Pa. Find Kp (via mole fractions → partial pressures).
9. State the three Haber conditions and explain why 450 °C (not lower) is used.
10. For an exothermic forward reaction, explain (via k_f and k_b) why K increases when T is lowered.
11. Outline how you'd determine Kc for the esterification reaction experimentally.

**Website minimum deliverables:** complete the **Unit 1–3 MCQ quizzes** + the 2 Class Exercise reviews + the cobalt-complex/Haber-history resources. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. ΔH→temperature link to Topic 5; rates/catalyst/Haber to Topic 6. Extended in Ksp & Acid–Base Equilibria. See [[chem-topic1-encoded]].
