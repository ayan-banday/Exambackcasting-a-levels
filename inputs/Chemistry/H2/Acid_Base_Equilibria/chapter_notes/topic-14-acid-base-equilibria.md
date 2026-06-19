# Chem Topic 14 — Acid-Base Equilibria (H2 9729)

**Source:** HCI lecture notes `Chem/14Acid-BaseEqmLecNotesWM.pdf` (full text → `workspace/chem/_t14_notes_clean.txt`, "for use from 2026"). Answer keys are image scans — self-mark.

**Why it matters:** The **biggest calculation topic in the whole A-level**, and the one that ties everything together — it's an application of Topic 7 (equilibria) + Topic 4 (Brønsted-Lowry, stoichiometry) to aqueous acid-base systems. Unit 4 (titration curves) is the **synthesis unit**: it requires you to compute pH using *every* method from Units 1–3 (strong, weak, salt, buffer) at different points on one curve. Examined heavily in P2/P3 as multi-part structured calculations and in P1 MCQ. **Syllabus mercy: weak-acid/base calculations never require solving a quadratic** — the `x << initial` approximation is always valid.

**Mark-scheme-first核心:** examiners reward (1) **correct ICE-table setup with the right approximation stated** ("assume x << [acid]₀"), (2) **distinguishing strength from concentration** in qualitative answers (a recurring discriminator), (3) for buffers, the **Le Chatelier "added H⁺/OH⁻ reacts with the large reservoir → ratio stays ~constant → Ka constant → pH ~constant"** chain, and (4) for titrations, **matching the indicator's working range to the vertical (rapid pH change) region at the equivalence point**.

---

## UNIT 1 — Acid-Base Concepts (Brønsted-Lowry, strength, pH, Kw, Ka/Kb)

### Conjugate acid-base pairs (LO 4b)
- **Brønsted-Lowry: acid = proton (H⁺) donor; base = proton acceptor.** Reaction = proton transfer.
- A **conjugate acid-base pair differs by ONE proton.** An acid donates H⁺ → forms its conjugate **base**; a base accepts H⁺ → forms its conjugate **acid**. **Every acid-base reaction has TWO conjugate pairs.** (e.g. CH₃CO₂H/CH₃CO₂⁻ and H₃O⁺/H₂O.)

### Strong vs weak (LO 10.1a) ★ the qualitative discriminator
- **Strong acid/base = dissociates/ionises COMPLETELY** in water (single arrow →). e.g. acids HCl, HNO₃, HBr, HI, HClO₃, HClO₄, H₂SO₄; bases NaOH, KOH, Ba(OH)₂.
- **Weak acid/base = dissociates PARTIALLY** (reversible ⇌; a mixture of mostly undissociated molecules + some ions). e.g. acids CH₃CO₂H, H₂SO₃, HNO₂, H₂CO₃, H₂S, HF, HCN, most organic acids; bases NH₃, amines (CH₃NH₂, C₆H₅NH₂), N₂H₄, and conjugate bases of weak acids.
- **STRENGTH ≠ CONCENTRATION.** Strength = *extent of dissociation* at equilibrium (intrinsic, set by Ka/Kb). Concentration = mol of acid/base dissolved per dm³. You can have a **dilute strong acid** (0.001 M HNO₃) or a **concentrated weak acid** (4 M CH₃CO₂H). **This is a frequent exam trap.**
- Conjugate-base strength is inverse to acid strength: **strong acid → very weak (negligible) conjugate base**; weak acid → conjugate base strong enough to hydrolyse.

### pH, pOH, Kw (LO 10.1b)
- **pH = −lg[H⁺(aq)]** → [H⁺] = 10⁻ᵖᴴ. **pOH = −lg[OH⁻]** → [OH⁻] = 10⁻ᵖᴼᴴ.
- pH measures **total [H⁺]**, NOT strength (unless comparing acids of *equal* concentration).
- **Self-ionisation of water:** H₂O ⇌ H⁺ + OH⁻; **Kw = [H⁺][OH⁻]**, and **pKw = pH + pOH**.
- **At 25 °C: Kw = 1.0×10⁻¹⁴ mol² dm⁻⁶ (Data Booklet), so pH + pOH = 14.** Neutral [H⁺]=[OH⁻]=10⁻⁷, pH 7; acidic [H⁺]>[OH⁻], pH<7; alkaline pH>7.
- **Kw depends only on temperature.** Self-ionisation is **endothermic**, so heating water raises Kw → [H⁺] and [OH⁻] both rise → **pH of pure water falls below 7 above 25 °C, but it stays neutral** ([H⁺] still = [OH⁻]).

### pH of strong acids/bases (LO 10.1c)
- Fully dissociated: **[H⁺] = [strong monobasic acid]**; **[H⁺] = 2 × [strong dibasic acid]** (e.g. H₂SO₄). Likewise [OH⁻] = (1 or 2) × [strong base].
- **Caveat:** if conc ≤ 10⁻⁷ mol dm⁻³, the H⁺/OH⁻ from **water autoionisation becomes significant** — add it in (e.g. 10⁻⁸ M HNO₃ → [H⁺] ≈ 10⁻⁸ + 10⁻⁷ = 1.1×10⁻⁷ → pH 6.96, NOT 8).

### Ka, Kb (LO 10.1b) ★
- **Weak acid HA ⇌ H⁺ + A⁻:  Ka = [H⁺][A⁻]/[HA]** (mol dm⁻³). **pKa = −lg Ka.**
- **Weak base B + H₂O ⇌ BH⁺ + OH⁻:  Kb = [BH⁺][OH⁻]/[B]** (mol dm⁻³). **pKb = −lg Kb.**
- **Larger Ka (smaller pKa) → stronger acid;** larger Kb (smaller pKb) → stronger base. Ka/Kb depend **only on temperature**. (Strong acids: Ka huge, not used.)
- **Conjugate-pair relationship: Ka × Kb = Kw, so pKa + pKb = pKw (= 14 at 25 °C).** Use to get Ka of a cation from Kb of its base (e.g. Ka(NH₄⁺) = Kw/Kb(NH₃)).

### pH of weak acids/bases (LO 10.1c) — the ICE method
- Weak species dissociate partially, so [H⁺] (or [OH⁻]) is **much lower** than the initial concentration.
- **Method (weak acid HA, initial c):** Ka = x²/(c − x); **assume x << c** (valid — weak acid barely dissociates) → **x = [H⁺] = √(Ka·c)** → pH. (Mirror for base: [OH⁻] = √(Kb·c), then pH = 14 − pOH.)
- **CRITICAL caveat: [H⁺] = [A⁻] holds ONLY for a pure weak-acid solution** (all H⁺ and A⁻ come from HA alone). **This does NOT apply to buffers** (where extra A⁻ is added separately).
- **If [H⁺] at equilibrium is already given, do NOT make the x << c approximation** — use the actual value.
- **Degree of dissociation α = (amount ionised)/(initial amount)** = [acid]_dissociated/[acid]_initial. α ≈ 1 for strong; α << 1 for weak. **On dilution: α increases** (and pH → 7), but **Ka is unchanged** — so Ka, not α or pH, is the true measure of acid strength.

---

## UNIT 2 — pH of Salts (salt hydrolysis) (LO 4b, 10.1b/c)

**Salt hydrolysis = ions of a salt react with water to produce H₃O⁺ or OH⁻.** Whether a salt is neutral/acidic/alkaline depends on the **strength of the parent acid and base.**

| Salt from | Cation | Anion | Solution | pH (25 °C) |
|---|---|---|---|---|
| **strong acid + strong base** (NaCl, KNO₃) | no hydrolysis | no hydrolysis | **neutral** | **= 7** |
| **weak acid + strong base** (CH₃CO₂Na) | no hydrolysis | hydrolyses → OH⁻ | **alkaline** | **> 7** |
| **strong acid + weak base** (NH₄Cl) | hydrolyses → H₃O⁺ | no hydrolysis | **acidic** | **< 7** |
| **weak acid + weak base** (CH₃CO₂NH₄) | both hydrolyse | both hydrolyse | depends on Ka(cation) vs Kb(anion) | Ka>Kb acidic; Ka=Kb neutral; Ka<Kb basic |

- **Mechanism (weak-acid salt):** CH₃CO₂⁻ is the conjugate base of a weak acid → **a stronger base than water** → accepts a proton: `CH₃CO₂⁻ + H₂O ⇌ CH₃CO₂H + OH⁻` → [OH⁻] > [H₃O⁺] → alkaline. (Reversible arrow — still a weak base.) The spectator ion (Na⁺, low charge density) doesn't hydrolyse.
- **Mechanism (weak-base salt):** NH₄⁺ is the conjugate acid of a weak base → **stronger acid than water** → `NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺` → acidic. Cl⁻ (from strong acid) is a weaker base than water → no hydrolysis.

### Metal cations with high charge density (LO 5e-iv) ★
- Small, highly-charged cations (**Al³⁺, Fe³⁺, Cr³⁺**) form hydrated complex ions [M(H₂O)₆]³⁺ that act as **weak Brønsted acids → acidic solution (pH < 7):**
  `[Al(H₂O)₆]³⁺ + H₂O ⇌ [Al(H₂O)₅(OH)]²⁺ + H₃O⁺`
- **Explanation:** the **high charge density cation withdraws electron density from the O–H bonds** of coordinated water, **weakening them**, so an O–H breaks and releases H⁺. (Acidity order matches Ka: Fe³⁺ ~6×10⁻³ > Cr³⁺ ~1×10⁻⁴ > Al³⁺ ~1×10⁻⁵.) Links to AlCl₃ hydrolysis (Topic 21 Periodicity).

### Calculating pH of a salt solution (general strategy)
1. Decide which ion(s) hydrolyse (from parent acid/base strength).
2. Write the hydrolysis equation producing H₃O⁺ or OH⁻.
3. Get **Ka or Kb of the hydrolysing ion** via **Ka × Kb = Kw** (e.g. Kb(CH₃CO₂⁻) = Kw/Ka(CH₃CO₂H)), then ICE-table it like a weak acid/base.

---

## UNIT 3 — Buffer Action (LO 10.1f, 10.1g) ★★

### Definition & composition
- **A buffer resists pH change on adding a small amount of acid or base.** It contains a **conjugate acid-base pair of a weak acid or weak base** in significant amounts — one species is a weak Brønsted acid, the other a weak Brønsted base.
  - **Acidic buffer:** weak acid + its salt (CH₃CO₂H / CH₃CO₂⁻Na⁺), pH < 7.
  - **Basic buffer:** weak base + its salt (NH₃ / NH₄⁺Cl⁻), pH > 7.
- **NOT a buffer:** strong acid + its salt (HNO₃/NaNO₃); a mixture left after one component is fully consumed by excess strong acid/base. **Made by** mixing the pair directly, OR **partial neutralisation** of the weak acid/base (add *less* strong base/acid than needed for complete neutralisation — same chemistry as a titration before equivalence).

### How a buffer works (LO 10.1f-i) — the marked explanation
For a CH₃CO₂H / CH₃CO₂⁻ buffer (large reservoirs of both):
- **Add small H⁺:** it **reacts with the large reservoir of conjugate base**: `CH₃CO₂⁻ + H⁺ → CH₃CO₂H`. Added H⁺ removed.
- **Add small OH⁻:** it **reacts with the large reservoir of weak acid**: `CH₃CO₂H + OH⁻ → CH₃CO₂⁻ + H₂O`. Added OH⁻ removed.
- **Because the original amounts of both are large compared with the H⁺/OH⁻ added, the ratio [CH₃CO₂⁻]/[CH₃CO₂H] stays almost constant. Since Ka = [H⁺]·ratio is constant, [H⁺] and pH stay almost constant.** (Buffer-action equations use **single arrows**.)

### Calculating buffer pH (LO 10.1g) — Henderson-Hasselbalch
- Because excess A⁻ suppresses HA dissociation, **[HA]eqm ≈ [HA]initial and [A⁻]eqm ≈ [A⁻]initial:**
  **[H⁺] = Ka × [acid]/[conjugate base]**  →  **pH = pKa + lg([conjugate base]/[acid]).**
- For basic buffer: **[OH⁻] = Kb × [base]/[conjugate acid]**, pOH = pKb + lg([conj acid]/[base]).
- **Volume cancels** if both components are in the same solution → can use mole ratio directly. **When acid/base is added, work in moles:** decide which component neutralises it, recompute the new moles of each, then divide by the **new total volume** (it cancels in Ka, but include it when concentrations are needed).
- **When [acid] = [conjugate base], pH = pKa** (this is the half-equivalence point / point of maximum buffer capacity).
- **Buffer capacity** = amount of H⁺/OH⁻ removable before pH shifts sharply; **higher with more concentrated components**, maximum when ratio = 1 (pH = pKa). **Effective range ≈ pKa ± 1** (ratio between 1:10 and 10:1).

### Blood & ocean buffers (LO 10.1f-ii)
- **Blood:** H₂CO₃ / HCO₃⁻ buffer keeps blood pH ≈ **7.4** (enzymes only work in a narrow range; death below ~6.8 or above ~7.8). Add H⁺: `HCO₃⁻ + H⁺ → H₂CO₃`; add OH⁻: `H₂CO₃ + OH⁻ → HCO₃⁻ + H₂O`.
- **Ocean:** CO₃²⁻ / HCO₃⁻ buffer keeps seawater ≈ pH 8.2 (HCO₃⁻ most prevalent). Equilibria: CO₂(g)⇌CO₂(aq); CO₂(aq)+H₂O⇌H₂CO₃; H₂CO₃⇌H⁺+HCO₃⁻ (Ka1); HCO₃⁻⇌H⁺+CO₃²⁻ (Ka2); CaCO₃(s)⇌Ca²⁺+CO₃²⁻. Add H⁺: `CO₃²⁻ + H⁺ → HCO₃⁻`.
- **Ocean acidification (LO 10.1f-ii):** ~30% of human-emitted CO₂ is absorbed by oceans. More atmospheric CO₂ → equilibria **shift right → [H⁺] rises → pH falls** (8.19 → ~8.05 over ~200 yrs ≈ +30% acidity; still alkaline). The extra H⁺ consumes CO₃²⁻ (`CO₃²⁻ + H⁺ → HCO₃⁻`) → **less CO₃²⁻ for marine organisms (coral, shellfish) to build CaCO₃ shells/skeletons (calcification)** → weakens them → threatens marine food chains.

---

## UNIT 4 — Titration Curves & Indicators (LO 10.1d, 10.1e) ★★

A **titration curve = pH vs volume of titrant added.** Compute pH at each region using the right Unit 1–3 method. (Convention in these notes: **acid in the flask, base added from burette.**)

### The four titration types — key features & indicators

| Titration | Initial pH | Buffer region? | Equivalence pH | Vertical range | Suitable indicator |
|---|---|---|---|---|---|
| **Strong acid–strong base** | low (strong-acid calc) | none | **7** (salt no hydrolysis) | large (~3–11) | methyl orange OR phenolphthalein OR thymol blue |
| **Weak acid–strong base** | higher (weak-acid calc) | **yes** (half-eqv: pH = pKa) | **> 7** (anion hydrolyses) | smaller, on alkaline side | **phenolphthalein** (or thymol blue / thymolphthalein) |
| **Strong acid–weak base** | low | **yes** after eqv (excess weak base) | **< 7** (cation hydrolyses) | smaller, on acidic side | **methyl orange** (or screened methyl orange) |
| **Weak acid–weak base** | higher | yes (both sides) | ~depends | **no sharp change** | **none suitable — use a pH meter** |

- **Region-by-region pH method:**
  - *Before adding any base:* pH of the pure acid (strong → −lg c; weak → √(Ka·c)).
  - *Before equivalence (excess acid):* strong acid → moles remaining / total volume; **weak acid + strong base → BUFFER** (use Henderson-Hasselbalch; **half-equivalence: pH = pKa**).
  - *Equivalence point:* only the salt present → pH from salt hydrolysis (=7, >7, or <7 per table).
  - *After equivalence (excess base):* pH from excess strong base (hydrolysis OH⁻ is negligible vs excess strong base); or another **buffer** if the titrant is a weak base.

### Polyprotic acids/bases (LO 10.1d apply)
- Polyprotic acids lose protons in **successive steps with Ka1 >> Ka2 >> …** (first H⁺ lost most easily — removing H⁺ from a neutral molecule is easier than from an already-negative ion). So **all of step 1 happens before step 2 begins.**
- Curve has **two steep portions = two equivalence points** (e.g. H₂SO₃ → HSO₃⁻ → SO₃²⁻; or Na₂CO₃ + HCl). Same shape for a mixture of two acids with very different Ka.
- **Na₂CO₃ + HCl example:** stage 1 `CO₃²⁻ + H⁺ → HCO₃⁻` (first rapid change ~pH 8.5 → **phenolphthalein**); stage 2 `HCO₃⁻ + H⁺ → H₂O + CO₂` (second rapid change ~pH 3.5 → **methyl orange**). Add phenolphthalein first; add methyl orange only after the first equivalence point. (Using methyl orange from the start gives only one end-point, at **twice** the phenolphthalein titre.)

### How indicators work & their range (background, but supports LO 10.1e)
- An indicator is a **weak acid HIn whose acid form (HIn) and conjugate-base form (In⁻) are different colours:** `HIn ⇌ H⁺ + In⁻` (colour 1 ⇌ colour 2). Position of this equilibrium (and thus colour) depends on [H⁺].
- A colour is distinguishable when one form is **≥10× the other** → **working range ≈ pKIn ± 1** (since pH = pKIn + lg([In⁻]/[HIn])).
- Common: **methyl orange** 3.1–4.4 (red→yellow); **bromothymol blue** 6.0–7.6 (yellow→blue); **phenolphthalein** 8.0–9.6 (colourless→pink); **thymol blue** 8.0–9.6; **thymolphthalein** 9.3–10.5.

### Choice of indicator (LO 10.1e) — the marked logic
- **End-point** = where the indicator changes colour (1 drop excess titrant). **Equivalence point** = where exact stoichiometric amounts have reacted. The end-point indicates the equivalence point **only if a suitable indicator is chosen.**
- **Rule: the indicator's working pH range must coincide with (fall within) the rapid/vertical pH change at the equivalence point**, and the indicator must give a sharp, distinct colour change. **Weak acid–weak base has no vertical region → no indicator works → use a pH meter.**

---

## TOP EXAM TRAPS (Topic 14)
- **Strength ≠ concentration.** "Strong" = fully dissociated; says nothing about how concentrated. A dilute strong acid and a concentrated weak acid can have the same pH.
- **pH of weak acid = √(Ka·c)** only — always state "assume x << c". **Never** use [H⁺] = c for a weak acid (that's the strong-acid formula).
- **[H⁺] = [A⁻] only for a PURE weak acid, never for a buffer** (the buffer's A⁻ is added separately).
- **Kw, Ka, Kb depend only on temperature.** Adding water/acid/common ion does NOT change them.
- **Kw = 1×10⁻¹⁴ only at 25 °C.** Self-ionisation is endothermic → above 25 °C, pure water has pH < 7 but is still neutral.
- **Get [OH⁻] from pH via [H⁺] = 10⁻ᵖᴴ then [OH⁻] = Kw/[H⁺]** — not 10⁻ᵖᴴ.
- **Salt pH:** weak-acid salt (CH₃CO₂Na) is **alkaline**; weak-base salt (NH₄Cl) is **acidic**. Al³⁺/Fe³⁺/Cr³⁺ salts are **acidic** (high charge density weakens O–H of hydrating water).
- **Half-equivalence point of a weak acid–strong base titration: pH = pKa** — a free way to read pKa off a curve.
- **Equivalence pH ≠ 7** except for strong–strong. Weak acid–strong base → >7; strong acid–weak base → <7.
- **Indicator choice: working range must sit inside the vertical jump.** Weak–weak → no suitable indicator (pH meter). Strong–weak base → methyl orange; weak acid–strong base → phenolphthalein.
- **Buffer calcs: always recompute moles after adding acid/base, then divide by NEW total volume** (cancels in Ka but matters for [ ]).
- **Buffer-action equations use single arrows;** salt-hydrolysis and weak-dissociation equations use reversible arrows.

---

## ACTIVE RECALL — cold self-test
1. Define a Brønsted acid and base. Identify the two conjugate pairs in `NH₃ + H₂O ⇌ NH₄⁺ + OH⁻`.
2. Explain the difference between the *strength* and the *concentration* of an acid, with an example of a dilute strong acid and a concentrated weak acid.
3. State Kw at 25 °C and explain why the pH of pure water falls below 7 when heated, yet the water stays neutral.
4. Calculate the pH of 0.10 mol dm⁻³ CH₃CO₂H (Ka = 1.8×10⁻⁵). State the approximation you make and why it's valid.
5. Write Ka × Kb = Kw and use it to get Ka of NH₄⁺ from Kb(NH₃) = 1.8×10⁻⁵.
6. Predict acidic/neutral/alkaline and write the hydrolysis equation: (a) Na₂CO₃, (b) NH₄Cl, (c) AlCl₃. For (c) explain *why* in terms of charge density.
7. What two components make a buffer? Explain, with equations and the Le Chatelier reasoning, how a CH₃CO₂H/CH₃CO₂⁻ buffer resists pH change when small H⁺ and small OH⁻ are added.
8. Calculate the pH of a buffer that is 0.10 mol of CH₃CO₂H and 0.20 mol of CH₃CO₂Na in 1 dm³ (Ka = 1.8×10⁻⁵). At what ratio does pH = pKa?
9. Sketch the titration curve for weak acid + strong base. Mark: initial pH, buffer region, half-equivalence (pH = pKa), equivalence point (>7). Name a suitable indicator and justify.
10. Why is there no suitable indicator for a weak acid–weak base titration? What is used instead?
11. For Na₂CO₃ titrated with HCl: write the two stages, the two equivalence-point pHs, and the indicator for each. Why does using methyl orange alone give twice the phenolphthalein titre?
12. Explain how the carbonate/hydrogencarbonate buffer maintains ocean pH, and how rising atmospheric CO₂ causes ocean acidification and threatens shellfish.

**Website minimum deliverables:** complete **all Worked Examples + exercises in the lecture notes** (attempt first, then check) + the **Unit 1, 2, 3, 4 MCQ quizzes** + Class Ex 1 (after Units 1–2), Class Ex 2 (after Unit 3), Class Ex 3 (after Unit 4). Post queries in the MCQ quiz for tutors. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Application of [[chem-topic1-encoded]] Topic 7 (equilibria) + Topic 4 (Brønsted-Lowry); links forward to Topic 13 [[chem-topic1-encoded]] (solubility, common-ion + pH effects), and organic acid/base strength (carboxylic acids, phenols, amines). See [[chem-topic1-encoded]].
