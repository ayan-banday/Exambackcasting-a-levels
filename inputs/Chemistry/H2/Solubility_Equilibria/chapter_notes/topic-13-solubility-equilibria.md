# Chem Topic 13 — Solubility Equilibria (H2 9729)

**Source:** HCI lecture notes `Chem/2023Topic13SolubilityEquilibriaLectureNotes.pdf` (full text → `workspace/chem/_t13_notes_clean.txt`). ✅ **Reconciled against HCI's actual notes (2023)** — worked values and examples below are now HCI's own. Answer keys (Lec Ex/Class Ex/Top Prac A/B) are image scans — self-mark. *(LO codes in the 2023 notes are 10.2(a)/(b)/(c); the 2026 syllabus renumbers these but the content is the same.)*

**Why it matters:** An **extension topic** — calculation-heavy with **high-certainty marks** because the methods are formulaic. Once the templates are drilled (Ksp↔solubility, IP-vs-Ksp precipitation, common-ion, complex-ion, pH) the marks are reliable. It is a **direct application of Topic 7 Chemical Equilibria** (Le Chatelier, K, the Q-vs-K idea) to the **heterogeneous dynamic equilibrium** between an undissolved sparingly-soluble salt and its dissolved ions; reuses **Topic 4** mole arithmetic and **Topic 14** acid–base pH (pH = −log[H⁺], Kw). Feeds **inorganic Qualitative Analysis** and **Topic 22 (Transition Elements)** — the precipitation/dissolution of metal salts. Tested as structured P2 calculations, "will a precipitate form?" MCQs, and **planning questions** (determining Ksp / the common-ion experiment).

**Mark-scheme-first核心:** examiners reward (1) the **correct Ksp expression with the right powers and the solid omitted**, (2) **correct units** (they change with stoichiometry — a free, easily-lost mark), (3) the **stoichiometry link between s and the ion concentrations** (the ×2/×3 factors), and (4) for qualitative parts, the **Le Chatelier sentence**: "adding/removing X changes [ion], so by Le Chatelier the dissolution equilibrium shifts, decreasing/increasing solubility" — and for complex-ion/pH, the **IP-falls-below-Ksp** logic.

---

## UNIT 1 — Solubility & Solubility Product (Ksp) (LO 10.2a)

### Solubility — definition (word-perfect)
- **Solubility of a salt = the number of moles (or mass) of solute that can be dissolved in 1 dm³ of a given solvent (e.g. water) to form a saturated solution at a given temperature.** Units: **mol dm⁻³** (molar solubility, symbol *s*) or **g dm⁻³**; convert with `g dm⁻³ = s × Mr`. *(e.g. solubility of NaCl in water at 25 °C = 357 g dm⁻³ = 6.102 mol dm⁻³.)*
- A **saturated solution** is in **dynamic equilibrium** with undissolved solute (rate of dissolution = rate of precipitation); **no more solute will dissolve.** Sparingly soluble salts reach this with relatively little dissolved.

### HCI solubility rules (memorise this table)
| Ion | Rule |
|---|---|
| **NO₃⁻** | all nitrates **soluble** |
| **Cl⁻, Br⁻, I⁻** | all halides soluble **except Ag⁺ and Pb²⁺** |
| **SO₄²⁻** | all sulfates soluble **except Pb²⁺, Ba²⁺ and Ca²⁺** |
| **CO₃²⁻** | all carbonates **insoluble** except Na⁺, K⁺, NH₄⁺ |
| **O²⁻** | all oxides insoluble except Na⁺, K⁺ |
| **OH⁻** | all hydroxides insoluble except Na⁺, K⁺ |
- **"Sparingly soluble"** = very low solubility → sets up the equilibrium Ksp describes.

### Solubility product Ksp — definition (LO 10.2a)
- For a sparingly soluble salt **AₓBᵧ(s) ⇌ xAʸ⁺(aq) + yBˣ⁻(aq)** in a **saturated solution**:
  **Ksp = [Aʸ⁺]ˣ [Bˣ⁻]ʸ** (equilibrium molar concentrations, each raised to its **stoichiometric coefficient** = "appropriate power").
- **Derivation (AgCl):** Kc = [Ag⁺][Cl⁻]/[AgCl]; [AgCl] (the solid) is essentially constant, so Kc·[AgCl] = **Ksp = [Ag⁺][Cl⁻]**.
- **Rules:** **only valid for sparingly soluble salts** (inappropriate for soluble salts like NaCl, CuSO₄, AgNO₃); **the solid is omitted**; **Ksp changes only with temperature.** Numerical values are always very small (rarely above 10⁻⁵, can be as low as 10⁻¹⁷ for AgI).
- **Units change with stoichiometry** — derive each time:
  - MX (AgCl): `[M⁺][X⁻]` → **mol² dm⁻⁶**
  - MX₂ / M₂X (PbI₂, Ag₂CO₃): `[M²⁺][X⁻]²` → **mol³ dm⁻⁹**
  - M₃X₂ (Ca₃(PO₄)₂): `[M²⁺]³[X³⁻]²` → **mol⁵ dm⁻¹⁵**
- **Experimental basis (AgBrO₃):** mixing varying volumes of 0.10 mol dm⁻³ AgNO₃ and KBrO₃ and measuring equilibrium [Ag⁺] and [BrO₃⁻] gives **[Ag⁺][BrO₃⁻] ≈ constant** (≈3.39×10⁻⁵ at 16 °C) regardless of the amounts added — *provided a saturated solution (excess undissolved solid) is present.*

### Ksp ↔ solubility calculation templates (LO 10.2b)
Let **s = molar solubility (mol dm⁻³)** in pure water:
- **MX:** [M⁺]=[X⁻]=s → **Ksp = s²** → `s = √Ksp`.
- **MX₂:** [M²⁺]=s, [X⁻]=2s → **Ksp = 4s³** → `s = ∛(Ksp/4)`.
- **M₂X:** [M⁺]=2s, [X²⁻]=s → **Ksp = 4s³**.
- **M₃X₂:** **Ksp = 108 s⁵**.
- **Watch the factor:** when stoichiometry ≠ 1:1 the ion concentration ≠ s — you need the ×2/×3 coefficient **and** the power. The single most common slip.

*HCI worked example (Ksp from solubility):* AgCl solubility = 1.46×10⁻³ g dm⁻³ at 18 °C (Mr 143.5) → s = 1.017×10⁻⁵ mol dm⁻³ → **Ksp = s² = 1.04×10⁻¹⁰ mol² dm⁻⁶.**
*HCI worked example (solubility from Ksp):* Mg(OH)₂, Ksp = 6.30×10⁻¹⁰ mol³ dm⁻⁹: 4s³ = 6.30×10⁻¹⁰ → **s ≈ 5.4×10⁻⁴ mol dm⁻³** (×Mr 58.3 → g dm⁻³).

---

## UNIT 2 — Ionic Product (IP) & predicting precipitation

### Definition & contrast with Ksp
- **Ionic product (IP) = the product of the molar concentrations of the constituent ions (each raised to its appropriate power), using the ACTUAL concentrations in solution** — saturated or not.
- **Same algebraic form as Ksp; the difference is the conditions:** Ksp uses **equilibrium (saturated)** values and is a **fixed constant** at given T; **IP uses whatever concentrations actually exist** and **varies**. IP equals Ksp **only** in a saturated solution. *(IP : Ksp is exactly analogous to Q : Kc from Topic 7.)*

### Predicting precipitation (LO — IP vs Ksp)
- **IP < Ksp** → unsaturated; forward reaction (dissolution); **no precipitate** (more solid could dissolve).
- **IP = Ksp** → saturated/at equilibrium; **first trace of precipitate just appears** (on the verge).
- **IP > Ksp** → supersaturated; backward reaction; **precipitate forms** until ions are removed and IP falls back to Ksp.

### Mixing two solutions — the dilution trap
- On mixing, **each ion is diluted into the combined volume** → recompute every concentration with `c = c_original × V_original / V_total` **before** calculating IP. Forgetting this is the classic error.

*HCI worked example:* 0.100 dm³ of 3.00×10⁻³ Pb(NO₃)₂ + 0.400 dm³ of 5.00×10⁻³ Na₂SO₄ [Ksp(PbSO₄)=1.60×10⁻⁸]: after mixing [Pb²⁺]=6.00×10⁻⁴, [SO₄²⁻]=4.00×10⁻³ → IP = 2.40×10⁻⁶ **> Ksp → white ppt of PbSO₄ forms.**

### Selective precipitation
- **Separating ions by exploiting different Ksp:** add a reagent that precipitates one ion (the one needing the *lower* [reagent ion] to reach IP = Ksp) before the other. e.g. adding Cl⁻ to a mix of Ag⁺ and Pb²⁺ → **AgCl precipitates first** (much lower Ksp); separation is "effective" if the first ion is almost entirely removed before the second starts.

### Experimental design — determining Ksp (HCI planning content)
- **Part 1 — prepare a saturated solution:** add excess solid (a **suspension**) to a fixed volume of solvent; **shake/stir, then leave to stand ~5–10 min** so excess solid settles; **keep T constant (water bath) and record it** (Ksp is T-dependent). To study the **common-ion effect**, prepare ~5 saturated solutions with **different starting concentrations of the common ion.**
- **Part 2 — find the dissolved amount (titration):** **filter the suspension first** to remove undissolved solid — using a **dry funnel, dry filter paper, dry flask** (no water, which would dilute the saturated filtrate); pipette an aliquot of the filtrate and titrate (e.g. against standard HCl if the anion is OH⁻).

---

## UNIT 3 — Factors Affecting Solubility (LO 10.2c)

### (a) Common-ion effect (LO 10.2c-i)
- **Adding a second soluble solute containing an ion already in the equilibrium shifts the dissolution equilibrium LEFT (Le Chatelier) → decreases solubility.**
  - e.g. CaF₂(s) ⇌ Ca²⁺ + 2F⁻; adding CaCl₂(aq) or NaF(aq) raises [Ca²⁺] or [F⁻] → shifts left → **less CaF₂ dissolves.**
- **Ksp is unchanged** (only T changes Ksp) — only the *solubility* drops.
- **Calculation:** with the common ion at concentration C, take its concentration as **≈ C** (salt solubility is tiny), then solve Ksp for the other ion = s.
  *HCI example:* AgCl [Ksp = 2.00×10⁻¹⁰]: in water s = √Ksp = 1.4×10⁻⁵; in 0.100 mol dm⁻³ NaCl, s = Ksp/0.100 = **2.0×10⁻⁹ mol dm⁻³** — far smaller, demonstrating the common-ion effect.

### (b) Complex-ion formation — increases solubility (LO 10.2c-ii) ★ the LO-named example
- **A reagent that forms a soluble complex ion with the cation removes that cation → lowers [cation] → IP falls below Ksp → dissolution shifts right → solubility increases** (often the solid dissolves completely).
- **★ LO-named example: halide ions + AgNO₃, then aqueous NH₃.** Add AgNO₃ to X⁻ → AgX precipitates (IP ≫ Ksp). Then add NH₃: `Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺` (diamminesilver(I)) lowers [Ag⁺], shifting `AgX(s) ⇌ Ag⁺ + X⁻` right.

  | Halide | F⁻ | Cl⁻ | Br⁻ | I⁻ |
  |---|---|---|---|---|
  | with AgNO₃(aq) | no ppt | **white** AgCl | **cream** AgBr | **yellow** AgI |
  | in **dilute** NH₃ | — | **dissolves** | insoluble | insoluble |
  | in **conc** NH₃ | — | dissolves | **dissolves** | **insoluble** |
  | Ksp / mol² dm⁻⁶ | — | 1.8×10⁻¹⁰ | 5.4×10⁻¹³ | 8.5×10⁻¹⁷ |

  - **Solubility in NH₃ depends on Ksp(AgX) (Ksp: AgCl > AgBr > AgI).** To dissolve completely, NH₃ must lower [Ag⁺] enough that **IP < Ksp.** Dilute NH₃ lowers [Ag⁺] enough for **AgCl** (highest Ksp); AgBr (lower Ksp) needs **conc** NH₃; **AgI's Ksp is so low that neither dilute nor conc NH₃ dissolves it.**
- **Other examples:** **amphoteric hydroxides in excess OH⁻** — Al(OH)₃(s) + OH⁻ → **[Al(OH)₄]⁻** (white ppt redissolves in excess NaOH); Zn(OH)₂ + 2OH⁻ → [Zn(OH)₄]²⁻. **PbCl₂ in concentrated HCl:** Pb²⁺ + 4Cl⁻ → **[PbCl₄]²⁻** → PbCl₂ dissolves. *(Note PbCl₂ in DILUTE HCl decreases solubility — common-ion effect — but in CONCENTRATED HCl increases it — complex-ion formation: a classic "explain both" question.)*
- **Mark-scheme pattern:** "The ligand reacts with [cation] to form the soluble complex [...], **lowering [cation] → IP < Ksp**; by Le Chatelier the dissolution equilibrium shifts right, so **more solid dissolves → solubility increases.**"

### (c) pH effect (salts containing basic anions) (notes §6.3)
- **Get ion concentrations from pH:** **[H⁺] = 10⁻ᵖᴴ**, **[OH⁻] = Kw/[H⁺]** (Kw = 1.0×10⁻¹⁴ at 25 °C; or pOH = 14 − pH).
- **Salts containing a basic anion (the conjugate base of a weak acid — hydroxides, carbonates, fluorides, sulfides) are MORE soluble as pH decreases (more acidic).** Added **H⁺ removes the anion** (`H⁺ + OH⁻ → H₂O`; `CO₃²⁻ + 2H⁺ → H₂O + CO₂`; `F⁻ + H⁺ → HF`) → lowers anion concentration → dissolution shifts right.
  - *HCI framing (Mg(OH)₂):* adding HCl removes OH⁻ → lowers [OH⁻] → equilibrium shifts right → more Mg(OH)₂ dissolves. **Solubility of a salt with basic anions increases as [H⁺] increases (pH decreases).**
  - Conversely, **raising pH (more OH⁻)** is a common ion for metal hydroxides → **decreases** their solubility.
- **Salts of strong acids** (AgCl, BaSO₄) are **unaffected by pH** (Cl⁻, SO₄²⁻ not protonated appreciably).
- **Solubility-at-given-pH (metal hydroxide):** [OH⁻] is fixed by the buffer/pH → for M(OH)₂, `s = Ksp/[OH⁻]²`.
  *HCI example:* saturated Mg(OH)₂ at pH 10.52 → s = 1.64×10⁻⁴; the same in a buffer at **pH 9.00** → s = **0.180 mol dm⁻³** (much higher — lower pH, more soluble).

### Real-life relevance (notes §7)
- **Hard water** (Ca²⁺/Mg²⁺): mineral deposits = precipitated salts; softened by adding **Na₂CO₃**. **Kidney stones** = sparingly soluble calcium **ethanedioate**/phosphate → limit ethanedioate-rich foods (spinach, peanuts) / drink lots of water. **Stalactites/stalagmites** = CaCO₃ precipitating from groundwater; **tooth decay** = enamel dissolving in acid.

---

## TOP EXAM TRAPS (Topic 13)
- **Ksp units change with stoichiometry** — derive every time (mol² dm⁻⁶ MX, mol³ dm⁻⁹ MX₂, mol⁵ dm⁻¹⁵ M₃X₂). Easy mark, easily dropped.
- **s-to-ion factor:** for MX₂, [X⁻] = **2s** and it's **squared** → Ksp = 4s³, never s².
- **Ksp vs IP:** identical expression; Ksp = saturated/constant, IP = actual/varies. Precipitate forms **only when IP > Ksp**; first trace appears at IP = Ksp.
- **On mixing, dilute every concentration into the total volume FIRST**, then compute IP.
- **Common ion → solubility ↓** (shift left); **Ksp unchanged** (only T changes Ksp).
- **Complex ion → solubility ↑** because it **removes the cation → IP < Ksp**, shifting dissolution right. **AgX in NH₃: AgCl (dilute & conc), AgBr (conc only), AgI (neither)** — ordered by Ksp. Write the complex-ion equation + the IP<Ksp/Le Chatelier sentence.
- **PbCl₂: dilute HCl ↓ solubility (common ion); conc HCl ↑ solubility (complex [PbCl₄]²⁻)** — know both directions.
- **pH:** salts with **basic anions (hydroxides/carbonates) dissolve more in acid** (H⁺ removes the anion); **strong-acid salts (AgCl, BaSO₄) unaffected by pH.**
- **[OH⁻] from pH:** [H⁺] = 10⁻ᵖᴴ then [OH⁻] = Kw/[H⁺] — not 10⁻ᵖᴴ.
- Solubility definition: include **"saturated solution"** + **"at a given temperature"** — both qualifiers marked.
- **Ksp concept is ONLY for sparingly soluble salts** (not NaCl/CuSO₄/AgNO₃).
- **Planning:** prepare a **suspension (excess solid)**, keep T constant, **filter with DRY apparatus** before titrating the saturated filtrate.

---

## ACTIVE RECALL — cold self-test
1. Define the solubility of a salt (both qualifiers) and the solubility product (with "appropriate powers"). Give units of each.
2. Write the Ksp expression **and its units** for: AgCl, PbI₂, Ag₂CO₃, Ca₃(PO₄)₂.
3. Derive the Ksp–s relationship for an MX₂ salt. Why isn't it just s²?
4. AgCl solubility is 1.46×10⁻³ g dm⁻³ (Mr 143.5). Find Ksp. Then find AgCl's solubility in 0.100 mol dm⁻³ NaCl [Ksp 2.0×10⁻¹⁰] and explain the difference.
5. What is the ionic product, and how does it differ from Ksp? State the three IP-vs-Ksp cases.
6. 0.100 dm³ of 3.0×10⁻³ Pb(NO₃)₂ + 0.400 dm³ of 5.0×10⁻³ Na₂SO₄ [Ksp(PbSO₄)=1.6×10⁻⁸]: does a precipitate form? (dilute on mixing first.)
7. Explain, with equations + the IP<Ksp/Le Chatelier logic, why AgCl dissolves in dilute NH₃, AgBr only in conc NH₃, and AgI in neither.
8. Why does PbCl₂'s solubility **decrease** in dilute HCl but **increase** in concentrated HCl?
9. From pH 4.0 find [H⁺] and [OH⁻]. Why is Mg(OH)₂ more soluble at this pH than at pH 10? (use the equilibrium)
10. Why is BaSO₄'s solubility independent of pH while CaCO₃'s is not?
11. Outline how you'd prepare a saturated solution and determine the Ksp of a hydroxide by titration. Why must the filtration apparatus be dry?

**Deliverables:** address every LO 10.2(a–c); complete all lecture-note Worked Examples + exercises (attempt first, then check) + the Unit 1–3 MCQ quizzes + Class Ex 1. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Application of [[chem-topic1-encoded]] Topic 7 equilibria + Topic 14 acid–base pH; feeds inorganic QA and Topic 22 (Transition Elements). See [[chem-topic1-encoded]].
