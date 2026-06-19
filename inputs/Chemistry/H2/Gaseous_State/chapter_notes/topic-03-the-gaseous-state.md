# Chem Topic 03 — The Gaseous State (H2 9729)

**Source:** HCI lecture notes `Chem/03TheGaseousStateLecNotes.pdf` (full text → `workspace/chem/_t3_notes_clean.txt`) + website Units 1–4 objectives. Answer keys are image scans — self-mark.

**Why it matters:** Short, calculation-heavy, high-scoring topic. `PV = nRT` and partial pressures feed **Stoichiometry (Topic 4)** and **Equilibria (Kp, Topic 7)**. The real-gas deviation + Boltzmann curve are recurring "explain/sketch" marks; the explanations reuse **intermolecular forces** straight from Topic 2. Mostly AO1/AO2 — fast marks if the unit conversions are clean.

---

## UNIT 1 — Ideal Gas Law

### Definitions (memorise)
- **Mole:** the amount of substance that contains exactly **6.02 × 10²³ (Avogadro constant, L)** elementary entities. Unit: mol.
- **Avogadro's Law:** equal volumes of all gases, at the **same temperature and pressure**, contain the **same number of particles**.
- **Relative molecular mass (Mr):** sum of the Ar of all atoms in the molecular formula (a ratio of masses, **no units**).
- **Ideal gas:** a gas that obeys **PV = nRT exactly under all conditions** of P, V, T.

### The general (ideal) gas equation: **PV = nRT**, R = 8.31 J K⁻¹ mol⁻¹
⚠️ **All variables MUST be in SI units when using R = 8.31:**
| Quantity | SI unit | Conversions |
|---|---|---|
| P | **Pa** (N m⁻²) | 1 atm = 101 325 Pa; 1 bar = 100 000 Pa |
| V | **m³** | 1 dm³ = 1×10⁻³ m³; 1 cm³ = 1×10⁻⁶ m³ |
| T | **K** (always) | T(K) = T(°C) + 273 |
| n | mol | n = m/Mr |

- **Determining Mr:** PV = nRT and n = m/Mr → **Mr = mRT / (PV)**. (Vaporise a known mass in a gas syringe, measure V, T, P.)
- **Molar volume Vm** (in Data Booklet — don't memorise): **s.t.p.** = 1 bar, 273 K → **22.7 dm³ mol⁻¹**; **r.t.p.** = 1 atm, 293 K → **24 dm³ mol⁻¹**.

### Simple gas laws (fixed mass of gas)
- **Boyle:** const T → P ∝ 1/V (PV = const).
- **Charles:** const P → V ∝ T (absolute, K).
- **Avogadro:** const T,P → V ∝ n. (Also const T,V → P ∝ n.)

### Combined gas equation (n constant): **P₁V₁/T₁ = P₂V₂/T₂**
- ✅ **Any consistent units of P and V** (they cancel), **but T must be in K**. No R needed.
- Reduces to P₁V₁ = P₂V₂ (const T), P₁/T₁ = P₂/T₂ (const V), V₁/T₁ = V₂/T₂ (const P).

### Predicting graphs (manipulate PV = nRT)
- Identify which 2 variables are constant, rearrange to y = (const)·x form, read off shape/gradient.
- const n,T → **PV = const** → horizontal line (PV vs P or vs V).
- P = (nRT)(1/V) → **P vs 1/V** straight line through origin, gradient = nRT (steeper → higher T).
- V = (nR/P)·T → **V vs T** straight line through origin, gradient = nR/P (steeper → lower P).
- **Reading "which is higher":** draw a vertical line at one x-value and compare y; or compare gradients of rearranged straight lines.

---

## UNIT 2 — Gaseous mixtures & partial pressures (Dalton's Law)
- **Partial pressure:** the pressure a gas in a mixture would exert **if it alone occupied the whole container** (at the same T, V).
- **Dalton's Law:** P_total = P_a + P_b + P_c + … (non-reacting gases).
- **Mole fraction** x_a = n_a / n_total, and **P_a = x_a × P_total** (partial pressure ∝ mole fraction). Σx = 1.
- Method: get P_total from n_total via PV=nRT (or sum given partials), then P_i = x_i·P_total. Connecting two flasks: each gas keeps its n; new P_i = (old P_i·V_old)/V_new (Boyle), then sum.

---

## UNIT 3 — Kinetic theory assumptions & real-gas deviation

### Kinetic theory assumptions for an ideal gas (LO 3a)
1. **Gas particles have negligible volume** compared to the container volume.
2. **Intermolecular forces of attraction between particles are negligible.**
3. Collisions (with each other and the walls) are **perfectly elastic** (no net KE loss).
> ⚠️ Assumptions **1 and 2 are the key ones** for explaining deviations. (Quote 3 only if asked for "more than 2".)

### Conditions for a real gas to APPROACH ideal behaviour (LO 3b-i)
- **Low pressure:** particles far apart → their own volume negligible vs container, and IMF negligible.
- **High temperature:** particles have enough KE to overcome IMF → IMF insignificant.

### Why real gases DEVIATE (LO 3b-ii) — assumptions 1 & 2 break
- **At high pressure:** container volume small → (i) molecules occupy a **significant fraction of the volume** (assumption 1 fails); (ii) molecules close together → **IMF significant** (assumption 2 fails).
- **At low temperature:** low KE → **IMF become significant**; collisions become inelastic (assumption 3 also fails); eventually the gas **liquefies** below its boiling point. (Ideal gases never condense — the model has no IMF.)

### The PV/RT vs P graph (per mole) — must be able to explain
- **Ideal gas: PV/RT = 1 at all pressures** (flat line).
- **Real gas:** **dips below 1** at moderate pressure — **IMF pull molecules inward → real gas exerts LOWER pressure than ideal** (P_real < P_ideal → ratio < 1). Then **rises above 1** at very high pressure — **molecular volume is significant**, so using the container volume as V overestimates the space available (V too large → ratio > 1).
- **Greater deviation = stronger intermolecular forces.** Compare by electron-cloud size first (dispersion): **CO₂ deviates more than N₂** (larger electron cloud). For similar sizes, compare other IMF: **NH₃ (H-bonding) deviates more than CH₄**. Deviation is greatest at **high P and/or low T**.

---

## UNIT 4 — Distribution of molecular speeds (Maxwell–Boltzmann)
- **Average KE ∝ absolute temperature (K).** At a given T, **all gases have the same average KE** — but individual molecules move at a range of speeds.
- KE = ½mv² → at the same T, **heavier molecules move slower** (lower most-probable speed); lighter move faster.
- **Effect of temperature** (sketch): as T increases, the curve's **peak lowers and shifts right**, and the distribution **broadens** (spreads to higher speeds).

**Curve features (sketch checklist):**
1. Same shape whether x-axis is **speed or kinetic energy**.
2. y-axis = fraction / number / proportion of molecules.
3. **Area under curve = total number of particles** → for a fixed sample at two temperatures, **areas are equal** (the higher-T curve is flatter and shifted right).
4. **Peak = most probable speed** (or KE).
5. Curve **starts at the origin (0,0)** — no particles have zero speed.
6. **No maximum** — runs **asymptotically** toward the x-axis (never touches again); no upper limit on speed/energy.

---

## PRACTICAL NOTES (planning sections at end of notes — flagged for P4 prep)
> H2 Chem P4 is being prepped separately in October, but this topic's planning content is examinable in P2/P3 "suggest an experiment" questions:
- **Gas collection:** gas syringe (graduated, all gases) or downward displacement of water (only **sparingly soluble** gases, e.g. H₂, O₂; burette = precise for small V). Closed system, reactants separated then mixed.
- **Error in collection over water:** water vapour adds its own partial pressure (P_atm = P_gas + P_water vapour + P_water column); changing water level changes gas pressure → affects volume accuracy. Subtract any air displaced by added liquid.
- **Heating to constant mass (gravimetry):** dry crucible; heat gently then strongly; cool on gauze; reweigh; repeat until no further mass change. Dry crucible (else water adds to mass loss); cool before weighing (hot object → convection currents → fluctuating balance reading).

---

## TOP EXAM TRAPS (Topic 3)
- **Unit conversions** are the #1 lost marks: for PV=nRT use **Pa, m³, mol, K**. Temperature **always in Kelvin** (both equations).
- Combined gas equation tolerates any consistent P/V units **but never °C** — convert to K.
- Real-gas PV/RT: the **< 1 region is due to IMF**, the **> 1 region is due to molecular volume** — two distinct reasons; state which dominates at which pressure.
- "Which deviates more" → **stronger IMF deviates more** (electron-cloud/dispersion first, then H-bonding etc.) — NOT simply "bigger Mr."
- Boltzmann: as T rises the **peak gets lower** (not higher) and shifts right; **area stays constant** for the same sample.
- Curve must **start at origin** and be **asymptotic** (never touches x-axis at high speed).
- Partial pressure uses **mole fraction**, not mass fraction.

---

## ACTIVE RECALL — cold self-test
1. Define the mole, relative molecular mass, and an ideal gas.
2. 0.10 g of a gas occupies 83.1 cm³ at s.t.p. Find Mr. (set up Mr = mRT/PV with SI units)
3. State the three kinetic-theory assumptions. Which two matter most for deviation, and why?
4. Explain, in terms of molecular size and IMF, why a real gas approaches ideal behaviour at **low pressure and high temperature**.
5. On a PV/RT vs P plot, explain why a real gas dips **below** 1 then rises **above** 1.
6. Why does CO₂ deviate from ideality more than N₂? Why does NH₃ deviate more than CH₄?
7. Sketch the Boltzmann speed distribution for one gas at 300 K and 500 K — label both, and state what stays constant.
8. Why do all Boltzmann curves start at the origin and never re-touch the x-axis?
9. A bubble rises from 8.4 atm/6 °C to 1.0 atm/24 °C; V₁ = 0.030 cm³. Find V₂ (combined gas equation).
10. Two flasks (He 1.0 dm³ at 2.0 kPa; Ne 2.0 dm³ at 3.0 kPa) are connected at constant T. Find the final total pressure.

**Website minimum deliverables:** complete the **Unit 1, 2, 3, 4 MCQ quizzes**. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Links back to [[chem-topic1-encoded]] (IMF reasoning from Topic 2 powers the deviation explanations).
