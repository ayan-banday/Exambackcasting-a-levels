# Chem Topic 06 — Reaction Kinetics (H2 9729)

**Source:** HCI lecture notes `Chem/06ReactionKineticsLecNotes.pdf` (full text → `workspace/chem/_t6_notes_clean.txt`) + website Units 1–6. Answer keys are image scans — self-mark.

**Why it matters:** Large, high-frequency topic blending AO1 definitions, AO2 graph/data analysis, and AO3 experimental design. Order-of-reaction determination (graphs, initial rates, clock/sampling), mechanism↔rate-equation reasoning, and Boltzmann/catalysis explanations recur in **every** P1/P2/P3. Builds on Topic 3 (Boltzmann) and Topic 5 (Ea, energy profile, spontaneity ≠ rate). Revisited in Equilibria.

---

## UNIT 1 — Rate, rate equation, order, rate constant

- **Rate of reaction:** the change in concentration of a reactant or product **per unit time**. Units **mol dm⁻³ s⁻¹** (follow the x-axis time unit). Define rate via the species with **coefficient 1**: for aA + bB → products, rate = −(1/a)d[A]/dt = −(1/b)d[B]/dt = ... (negative sign on reactants makes rate positive).
- **Instantaneous rate** = gradient of tangent at time t. **Initial rate** = gradient of tangent at t = 0. **Average rate** = Δ[conc]/Δt over an interval (gradient of the chord).
- **Rate equation: rate = k[A]ᵐ[B]ⁿ** — **experimentally determined**, NOT from stoichiometry. **Order** w.r.t. a reactant = the power on its concentration; **overall order** = sum of orders (can be fractional/negative).
- **Rate constant k:** the proportionality constant; **constant at a given temperature**. **Arrhenius: k = Ae^(−Ea/RT)** → k **increases** with T, **increases** as Ea falls (catalyst), and is **unaffected by concentration**.
- **Units of k depend on overall order** (units of k = (mol dm⁻³)^(1−overall order) × s⁻¹):
  | Overall order | units of k |
  |---|---|
  | 0 | mol dm⁻³ s⁻¹ |
  | 1 | s⁻¹ |
  | 2 | mol⁻¹ dm³ s⁻¹ |
  | 3 | mol⁻² dm⁶ s⁻¹ |

---

## UNIT 2 — Order from graphs

### Concentration–time graph (shape + half-life)
- **Straight line (constant gradient) → zero order** (rate constant, independent of [R]).
- **Curve with constant half-life → first order**.
- **Curve with increasing half-lives → not first order** (plot a rate–concentration graph to confirm).
- **Half-life t½** = time for a reactant's concentration to fall to half its value. **First order: t½ is constant and independent of concentration**; **t½ = ln2 / k**. After n half-lives, [R] = [R]₀ × (½)ⁿ.
- To show t½ is constant: read the **first and second** half-lives and check they're equal. Works on either [reactant]–time (halving) or [product]–time (¼[P]f → ½[P]f → ¾[P]f intervals).

### Rate–concentration graph
- **Horizontal line → zero order**. **Straight line through origin → first order** (rate ∝ [R]). **Curve/parabola → not 1**; confirm by plotting rate vs [R]² (straight line → 2nd) or **lg(rate) vs lg[R]** (gradient = order).

### Rate–time graph (less useful)
- Zero: rate constant then drops to 0. First: exponential decay. Second: faster decay.

---

## UNIT 3 — Initial rates method
- Vary the **initial concentration of one reactant** (others constant); see how **initial rate** changes.
- **By inspection:** [A]×2 → rate×2 ⇒ **first** order; rate×4 ⇒ **second**; rate unchanged ⇒ **zero**.
- **By simultaneous equations:** rate = k[A]ˣ[B]ʸ...; take ratios of two experiments where only one [reactant] changes.
- Then: write the rate equation, **calculate k** from any one experiment (with units), and **calculate the initial rate** for a new set of concentrations.

---

## UNIT 4 — Experimental techniques

### Sampling method
- Withdraw small fixed **samples** at time intervals → **quench** (stop the reaction: add cold water to dilute+cool, or neutralise an acid catalyst/reactant) → **analyse** (titration or a physical property). Titre ∝ concentration → **titre–time graph ≡ concentration–time graph** → get order from its shape/half-life.
- **Keep all other rate factors constant:** temperature via a **thermostatically controlled water bath**; **isolate the studied reactant** by putting the others in **large excess (~10×)** so their concentration barely changes → **pseudo-order** (apparent zero order w.r.t. those). Add the last reactant **rapidly** (not by burette); only one titration per withdrawn sample.
- **Physical properties measurable:** gas **volume** (gas syringe/water displacement), **absorbance** (colorimeter — for a coloured species), **electrical conductivity** (change in ion concentration), **gas pressure** (manometer — change in moles of gas, fixed volume).

### Clock method
- Time **t** for a small, fixed prescribed change (colour/precipitate). **initial rate ∝ 1/t** (assumes the conc–time graph is **linear** over the small extent — valid because the reaction proceeds to a **small extent**).
- **Iodine clock** (S₂O₈²⁻ + 2I⁻ → 2SO₄²⁻ + I₂): add a small fixed amount of thiosulfate + starch; I₂ is mopped up until thiosulfate runs out, then **blue-black** appears. Same fixed thiosulfate → same I₂ at the endpoint → t ∝ 1/rate.
- **Sulfur clock** (Na₂S₂O₃ + 2HCl → S↓ + SO₂ + 2NaCl + H₂O): time for the S precipitate to **obscure a cross** under the beaker. No added reagent needed.

---

## UNIT 5 — Collision theory, activation energy, mechanism

- **Collision theory:** to react, particles must **collide with energy ≥ Ea AND with correct orientation** (an *effective* collision).
- **Activation energy (Ea):** the minimum energy / energy barrier reactants must overcome to form products. On the **Maxwell–Boltzmann** curve, the **shaded area beyond Ea** = fraction of molecules with KE ≥ Ea (usually small). **Low Ea → fast; high Ea → slow.**
- **Energy profile diagram:** Ea measured from **reactant level to the transition-state peak**; ΔH = products − reactants. **Ea is independent of ΔH; rate depends on Ea, not ΔH** (combustion of CH₄ is very exothermic but needs a spark).
  - **Transition state** = energy **maximum** (peak); hypothetical, cannot be isolated. **Intermediate** = energy **minimum** (valley); a real species, can be detected/isolated.
- **Reaction mechanism** = sequence of **elementary steps** that sum to the overall equation. **Molecularity** = number of particles in an elementary step (uni/bi/termolecular); does **not** apply to the overall reaction. Termolecular steps are rare; same-charge-ion collisions have high Ea.
- **Rate-determining step (rds)** = the **slowest** step = the one with the **highest Ea**. Its rate = the **overall** rate.

### Mechanism ↔ rate equation (the key skill)
- Reactants in the **rds and any step before it** appear in the rate equation; reactants only in steps **after the rds do not**.
- **Intermediates do NOT appear** in the rate equation (substitute using the equilibrium of a fast step before the rds). **A homogeneous catalyst DOES appear** in the rate equation but **not** in the overall stoichiometric equation.
- **If the rds is the first step**, the order w.r.t. a reactant = its **coefficient in the rds**.
- Always check the elementary steps **add up** to the overall equation.
- **Worked (Mechanism 5):** 2NO + O₂ → 2NO₂; Step1 NO+O₂ ⇌ NO₃ (fast eqm), Step2 NO₃+NO → 2NO₂ (slow). Sub [NO₃] = Kc[NO][O₂] into rate = k₂[NO₃][NO] → **rate = k[NO]²[O₂]**.

---

## UNIT 6 — Factors, catalysis, enzymes

Two molecular factors: **collision frequency** and the **proportion of particles with KE ≥ Ea**.

- **Concentration / pressure ↑** → more particles per unit volume → closer together → **collide more frequently** → frequency of effective collisions ↑ → **rate ↑**. (A zero-order reactant's concentration has no effect.)
- **Temperature ↑** → greater average KE → collide a little more frequently, **but the main reason** is a **greater proportion of particles with KE ≥ Ea** (Boltzmann curve flattens and shifts right; larger shaded area beyond Ea) → rate ↑ and **k ↑** (Arrhenius). The "~10 °C doubles the rate" answer = *more molecules with KE ≥ a minimum energy*.
- **Catalyst** → provides an **alternative pathway of lower Ea** → greater proportion with KE ≥ Ea' → rate ↑ and **k ↑** (Arrhenius). **ΔH is unchanged.** Boltzmann: Ea' < Ea, larger shaded area.
- Other factors: **surface area** of solids (more finely divided → larger boundary → more frequent collisions); **light** (photochemical reactions).

### Catalysis
- **Homogeneous catalyst:** **same phase** as reactants; forms an intermediate, is **regenerated**; **appears in the rate equation but not the overall equation** (it's in the rds).
  - **Fe²⁺ in I⁻/S₂O₈²⁻** (2I⁻ + S₂O₈²⁻ → I₂ + 2SO₄²⁻): uncatalysed is slow because **two negative ions repel → high Ea**. Step1: 2Fe²⁺ + S₂O₈²⁻ → 2Fe³⁺ + 2SO₄²⁻; Step2: 2Fe³⁺ + 2I⁻ → 2Fe²⁺ + I₂. The **positive** catalyst/intermediate attracts each negative ion → each step has **lower Ea**. (Fe³⁺ catalyses equally — just swap the step order.)
  - **NOₓ in atmospheric SO₂ oxidation:** Step1 SO₂ + NO₂ → SO₃ + NO; Step2 NO + ½O₂ → NO₂. Overall SO₂ + ½O₂ → SO₃; then SO₃ + H₂O → H₂SO₄ (**acid rain**).
- **Heterogeneous catalyst:** **different phase** (usually solid + gas/liquid); acts on the **surface (active sites)**; larger surface area → faster. **Three stages: Adsorption** (reactants adsorb onto active sites — brought closer, bonds weakened → **lower Ea**, correctly orientated) → **Reaction** → **Desorption** (products leave, freeing active sites). **Saturation** of active sites → no further rate increase with concentration/pressure.
  - **Haber process** N₂ + 3H₂ → 2NH₃: **finely divided Fe**.
  - **Catalytic converter (Pt/Pd/Rh):** reduce NO → N₂ (e.g. CO + NO → CO₂ + ½N₂), oxidise CO → CO₂, oxidise unburnt hydrocarbons → CO₂ + H₂O, via adsorb–react–desorb. Needs **unleaded** petrol (lead poisons the catalyst).
- **Autocatalysis:** catalysed by **one of its own products**. E.g. **Mn²⁺** in MnO₄⁻ + C₂O₄²⁻. Rate is **slow at first** (little catalyst), **speeds up** as autocatalyst forms, then **slows** as reactants deplete → rate–time curve rises to a maximum then falls; conc–time curve is S-shaped.
- **Enzymes:** **protein** biological catalysts with **high specificity** (lock-and-key model — substrate fits the **active site**), **temperature sensitivity** and **pH sensitivity**. Globular/water-soluble → **homogeneous** but the mechanism **resembles heterogeneous**. enzyme + substrate ⇌ ES complex → enzyme + products. **Very low Ea**; beyond optimum T/pH the enzyme **denatures** (active site changes shape → can't bind substrate).

---

## TOP EXAM TRAPS (Topic 6)
- **Order is experimental, not from stoichiometry.** State this when asked to define.
- **Units of k depend on overall order** — derive them each time.
- "Constant half-life ⇒ first order" — must **compare two consecutive half-lives**.
- Clock method: **initial rate ∝ 1/t**; the approximation needs a **small extent** of reaction.
- Mechanism: reactants **before/at the rds** appear in the rate equation; **after** the rds they don't. **Intermediates absent; homogeneous catalyst present (rate eqn) but absent (overall eqn).**
- Catalyst **does not change ΔH** — only lowers Ea (Boltzmann shaded area increases). Don't say it "lowers ΔH".
- Temperature's **main** effect is the **proportion of particles with KE ≥ Ea**, not just collision frequency or "doubling average energy".
- Heterogeneous catalysis = **adsorption → reaction → desorption**; mention **saturation** of active sites.
- Fe²⁺/Fe³⁺ catalysis: write **both** steps and explain via **attraction of opposite charges lowering Ea**.
- Enzymes are **homogeneous** catalysts (mechanism *resembles* heterogeneous) — both points score.

---

## ACTIVE RECALL — cold self-test
1. Define rate of reaction, rate equation, order, rate constant, half-life, rate-determining step, activation energy, catalysis.
2. A conc–time graph is a curve with t½ = 14 min throughout. What order, and what's k?
3. Give the units of k for overall order 0, 1, 2, 3.
4. Initial-rates data: [A]×3 → rate×3; [B]×2 → rate×4; [C]×½ → rate unchanged. Write the rate equation and find the overall order.
5. Describe the sampling-and-titration method for the acid-catalysed iodination of propanone — including quenching and why the other reactants are in large excess.
6. Explain how the iodine clock gives an approximate initial rate, and why it's only approximate.
7. On a Boltzmann diagram, explain (i) the effect of raising temperature and (ii) adding a catalyst, on the rate.
8. For 2NO + O₂ → 2NO₂ with rds = NO₃ + NO → 2NO₂ (Step1 NO+O₂⇌NO₃ fast), derive the rate equation.
9. Write the two steps for Fe²⁺ catalysing I⁻ + S₂O₈²⁻ and explain why it lowers Ea. Why is the uncatalysed reaction slow?
10. State the three stages of heterogeneous catalysis (Haber process) and what adsorption achieves.
11. Sketch and explain the rate–time curve for an autocatalytic reaction (MnO₄⁻ + C₂O₄²⁻).
12. Why are enzymes classed as homogeneous catalysts, and what happens to activity beyond the optimum temperature/pH?

**Website minimum deliverables:** complete the **Unit 1–6 MCQ quizzes** + the 3 Class Exercise reviews + the Overview blank handout/video. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Boltzmann links to Topic 3; Ea/energy-profile to Topic 5. See [[chem-topic1-encoded]].
