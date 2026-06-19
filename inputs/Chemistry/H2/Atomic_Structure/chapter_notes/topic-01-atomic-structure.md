# Chem Topic 01 — Atomic Structure & Physical Periodicity (H2 9729)

**Source:** HCI lecture notes `Chem/01AtomicStructurePhyPeriodicityLecNotes_updated020626.pdf` (full text extracted to `workspace/chem/_notes_clean.txt`) + website Units 1–3 learning objectives. Answer keys (`Lec Ex Ans`, `Top Prac A/B Ans`) are **image scans** — no text layer, use them visually for self-marking.

**Why this matters in the exam:** This is the foundation topic. The *effective nuclear charge (Z_eff)* reasoning template built here is reused in Bonding, Periodicity, Transition Elements, and every "explain the trend" question across the whole syllabus. Mastering the explanation *structure* here pays off everywhere.

---

## THE MARK-SCHEME ENGINE — learn this first

Almost every "explain" mark in this topic is scored on one reasoning chain. Memorise it as a template and slot in the variables:

> **[number of quantum shells] + [nuclear charge] + [shielding effect]** → **effective nuclear charge (Z_eff = Z − S)** → **strength of electrostatic force of attraction between the nucleus and the outermost electron** → **outcome (atomic/ionic radius, or ionisation energy)**

Two recurring patterns within it:
- **Across a Period:** nuclear charge ↑, shielding ≈ constant (electrons added to *same* shell) ⇒ **Z_eff ↑** ⇒ stronger attraction.
- **Down a Group:** number of shells ↑; nuclear charge ↑ *and* shielding ↑ together ⇒ **Z_eff differs little** ⇒ **number of quantum shells is the dominant factor.**

The examiner wants the *full chain*, not just the conclusion. "Z_eff increases" alone ≈ 1 mark; the chain to "stronger attraction → smaller radius / higher IE" earns the rest.

---

## UNIT 1 — The Structure of an Atom

### Subatomic particles (LO 1a, 1c)
| Property | Proton | Electron | Neutron |
|---|---|---|---|
| Relative charge | +1 | −1 | 0 |
| Relative mass | 1 | 1/1836 (≈ negligible) | 1 |

- Nucleus = protons + neutrons (**nucleons**), holds **>99.99% of atomic mass**. Electrons surround it.
- Atom diameter ≈ 10⁻¹⁰ m; nucleus ≈ 10⁻¹³–10⁻¹⁵ m (nucleus < 10⁻⁵ of the atom).

### Definitions to memorise verbatim
- **Atom:** the smallest component of an element having the chemical properties of the element.
- **Proton number (Z):** the number of protons in the nucleus of each atom of an element. (Defines chemical identity; = number of electrons in a neutral atom.)
- **Nucleon number (A) / mass number:** the total number of protons and neutrons in the nucleus of an atom of an element.
- **Isotopes:** atoms of an element that have the **same proton number but different nucleon numbers** (same protons, different neutrons). → **Same** electronic configuration & chemical properties; **different** relative isotopic masses & physical properties.

### Deducing particles in ions (LO 1d)
- Cation (positive): electrons = Z − charge. Anion (negative): electrons = Z + charge. Neutrons = A − Z (unchanged by charge).

### Deflection in an electric field (LO 1b) — angle ∝ q/m
- **Protons → deflected to the negative plate. Electrons → to the positive plate. Neutrons → pass straight through.**
- Cations → negative plate; anions → positive plate.
- Electron deflects **far more** than a proton (same charge magnitude, far smaller mass).
- **Angle of deflection θ ∝ q/m** (∝ charge, ∝ 1/mass).
- **Method (worked-example pattern):** tabulate q/m for each species *relative to a given reference*, then scale the reference angle. Watch the **sign** (charge direction = which plate).
  - Ref: ¹H⁺ given as +15°. ²H⁻ (D⁻): q/m halved **and** opposite charge → **−7.5°**. ³H⁺ (T⁺): q/m = 1/3 → **+5.0°**. ⁴He²⁺: q/m = 2/4 = ½ → **+7.5°**.

---

## UNIT 2 — Masses of Atoms & Arrangement of Electrons

### Relative masses (LO 6a) — measured against ¹²C = 12
- **Relative isotopic mass:** mass of one atom of an isotope on a scale where one atom of ¹²C = 12 (i.e. mass of one atom of the isotope ÷ [1/12 × mass of one ¹²C atom]).
- **Relative atomic mass (A_r):** the *weighted average* mass of one atom of the element on the ¹²C = 12 scale, taking into account the relative abundances of all its isotopes.

### A_r from abundances (LO 6c)
- **A_r = Σ(relative isotopic mass × fractional abundance).**
  - Cl (75% ³⁵Cl, 25% ³⁷Cl): 0.75×35 + 0.25×37 = **35.5**.
- **Reverse problem** (given A_r, find abundance): let *a* = abundance of one isotope; set Σ = A_r; solve.
  - Boron A_r = 10.8: a(11) + (1−a)(10) = 10.8 → a = 0.8 → **80% ¹¹B**.

### Quantum shells, subshells, orbitals (LO 1f)
- **Principal quantum number n:** main energy level; larger n → higher energy, further from nucleus. Max electrons per shell = **2n²** (2, 8, 18, 32).
- Number of subshells in shell = n. Subshell energy order: **s < p < d < f**.
- **Atomic orbital:** a region of space with a **90% (or more) probability of finding an electron.** Each orbital holds **max 2 electrons of opposite spin**. Orbitals in a subshell are **degenerate** (same energy, different orientation).

| Subshell | Orbitals | Max electrons |
|---|---|---|
| s | 1 | 2 |
| p | 3 | 6 |
| d | 5 | 10 |
| f | 7 | 14 |

⚠️ **Energy-ordering trap:** 4s fills **before** 3d (4s < 3d in energy when filling). But on ionisation, **4s electrons are removed first** (from Sc onward).

### Orbital shapes (LO 1g) — must be able to draw
- **s:** spherical (one orbital). **p:** dumb-bell, two lobes with a **node** (zero electron density) at the nucleus; three orientations p_x, p_y, p_z. **d:** five orbitals (four cloverleaf-shaped + d_z²). Size increases with n (2p<3p<4p). [Wave functions NOT required.]

### Electronic configuration (LO 1h) — three rules
1. **Aufbau:** fill lowest-energy orbital first.
2. **Hund's rule:** within a subshell, singly occupy each orbital before pairing.
3. **Pauli exclusion:** max 2 e⁻ per orbital, **opposite spins**.
- **Exceptions (state, don't explain — explanation not required):** Cr = [Ar] 3d⁵ 4s¹, Cu = [Ar] 3d¹⁰ 4s¹.
- **Ions:** Cations — write the atom's config, then **remove from the highest principal quantum shell first** (4s before 3d from Sc onward). Anions — **add to the lowest available** orbital.
  - Fe (3d⁶4s²) → Fe²⁺ = [Ar] 3d⁶ (4s removed, not 3d). Cu (3d¹⁰4s¹) → Cu²⁺ = [Ar] 3d⁹.
- ⚠️ In exams, **write the full config** (1s² 2s² ...), not the [Ar] shorthand, when asked to "state the electronic configuration."

### Transition elements (LO 13a/b)
- **Transition element:** a d-block element whose **atom has an incomplete d subshell, OR which can give rise to cations with an incomplete d subshell.**
- **Zn is NOT a transition element:** Zn is 3d¹⁰ and forms only Zn²⁺ (also 3d¹⁰) — d subshell always complete. (Sc forms Sc³⁺ = 3d⁰ but is still counted as a transition element by convention; the discriminator the notes stress is Zn.)

---

## UNIT 3 — Periodic Trends (radii, ionic radii, ionisation energies)

### Effective nuclear charge (the core concept)
- **Z_eff = Z − S** = net nuclear charge experienced by an outer electron.
- Shielding by **inner-shell** electrons is large; electrons in the **same shell** shield each other only slightly (order of shielding s > p > d > f).

### Atomic radius (LO 5b)
- **Down a group → increases.** More quantum shells; nuclear charge & shielding both rise so Z_eff differs little ⇒ **number of shells dominant.**
- **Across a period → decreases.** Nuclear charge ↑, shielding ≈ constant ⇒ Z_eff ↑ ⇒ stronger attraction ⇒ outermost electrons pulled closer.
- **Across transition elements → relatively invariant.** Added electrons go to the **inner 3d** subshell → shielding ↑, nullifying each extra proton ⇒ Z_eff ≈ constant.
- ⚠️ **Noble gases (He, Ne, Ar) plotted anomalously large** because their quoted radius is a *van der Waals radius*, not a covalent radius (they don't form covalent bonds).

### Ionic radius (LO 5b)
- **Isoelectronic species** = same number of electrons. Na⁺, Mg²⁺, Al³⁺, Si⁴⁺ (10 e⁻); P³⁻, S²⁻, Cl⁻ (18 e⁻).
- Across an isoelectronic series, nuclear charge ↑ with shielding constant ⇒ Z_eff ↑ ⇒ **radius decreases**: Na⁺ > Mg²⁺ > Al³⁺ > Si⁴⁺ and P³⁻ > S²⁻ > Cl⁻.
- **Sharp jump up** from the cation series to the anion series — anions have **one more quantum shell** than the cations.

### Ionisation energy — definitions (memorise the full wording)
- **First IE:** the energy needed to remove **1 mole of electrons from 1 mole of gaseous atoms** to form **1 mole of unipositively charged gaseous ions.** X(g) → X⁺(g) + e⁻.
- **Second IE:** energy to remove 1 mol e⁻ from 1 mol unipositive gaseous ions → 1 mol doubly-positive gaseous ions. X⁺(g) → X²⁺(g) + e⁻.
- **nth IE:** X^(n−1)+(g) → X^n+(g) + e⁻.
- ⚠️ State symbols **(g)** are mark-bearing. Equation must show 1 electron and gaseous states.

### Successive IE of the *same* element (LO 1j, 1k)
- Always **IE₁ < IE₂ < IE₃ < …** Reason: as each electron is removed, protons stay constant but shielding/repulsion among remaining electrons drops ⇒ **Z_eff ↑** ⇒ harder to remove the next.
- **Big jumps reveal shell structure → group number.** Count electrons removed *before the first large jump* = number of valence (outermost-shell) electrons.
  - Mg (1s²2s²2p⁶3s²): big jump 2→3 (3s exhausted, into inner shell) ⇒ Group 2. Second big jump 10→11 (into 1s).
  - Worked: jump after 7th electron ⇒ 7 valence e⁻ ⇒ Group 17. Jump after 5th ⇒ Group 15. After 4th ⇒ Group 14.
- Smaller sub-jumps within a shell (e.g. 2s harder than 2p) are *secondary* evidence.

### First IE across different elements (LO 1i)
- **Down a group → decreases:** more shells, outer e⁻ further; Z_eff differs little ⇒ shells dominant ⇒ easier to remove.
- **Across a period → increases:** Z_eff ↑ (nuclear charge ↑, shielding ≈ constant) ⇒ harder to remove.
- **Across transition elements → relatively invariant:** 1st IE removes a **4s electron**; added 3d electrons shield, so Z_eff ≈ constant (LO 13c).

### The TWO anomalies across a Period (high-frequency exam mark)
1. **Group 2 → 13 dip (e.g. Al < Mg):** Al's outermost electron is in **3p**, which is **higher in energy / further from the nucleus** than the 3s electron removed from Mg ⇒ weaker attraction ⇒ less energy to remove ⇒ lower IE.
2. **Group 15 → 16 dip (e.g. S < P):** In S, two of the 3p electrons are **paired** in one orbital → **inter-electronic repulsion** between the paired electrons ⇒ easier to remove one ⇒ lower IE than expected. In P all three 3p electrons are unpaired (half-filled, more stable arrangement).
- ⚠️ Don't mis-explain: the S<P dip is about **paired-electron repulsion**, NOT shells/shielding. The Al<Mg dip is about the **3p vs 3s subshell**, NOT pairing.

---

## COMMON EXAM TRAPS (Topic 1)
- IE definitions: omitting **(g)** or "1 mole" loses marks. It's per *mole of electrons*, *gaseous*, forming *gaseous ions*.
- "Nuclear charge" ≠ "effective nuclear charge." Across a period it's Z_eff that increases meaningfully; saying only "more protons" is incomplete because you must address shielding.
- Down a group, do **not** say "Z_eff decreases" — it differs *little*; the operative reason is **more quantum shells**.
- 4s fills before 3d, but **4s is removed first** on ionisation — students routinely write Fe²⁺ as 3d⁴4s² (wrong) instead of 3d⁶.
- Isoelectronic radius order: smaller for higher Z (more protons pulling the same electron count).
- The two period anomalies have **different** explanations — never swap them.
- Drawing orbitals: p orbital must show the **node**; label axes for p_x/p_y/p_z.

---

## ACTIVE RECALL — test yourself cold (cover the answers)
1. Define first ionisation energy *with* the equation and state symbols.
2. Explain, using the full chain, why atomic radius **decreases** across Period 3.
3. Why is the 1st IE of S **lower** than P? Why is Al **lower** than Mg? (Two different reasons.)
4. Write the electronic configurations of Fe, Fe²⁺, Fe³⁺, and Cu²⁺.
5. A species has successive IEs (kJ mol⁻¹): 738, 1451, 7733, 10543… Which group? Why?
6. Why is the atomic radius **almost invariant** across the first-row transition elements?
7. Rank ionic radii: Na⁺, Mg²⁺, Al³⁺, P³⁻, S²⁻, Cl⁻ — and explain the sharp jump.
8. A proton is deflected +12°. By what angle (with sign) is an O²⁻ ion deflected under identical conditions? (set up the q/m table)
9. State the definition of an atomic orbital. How many electrons in a d subshell, and why?
10. Why is Zn not classed as a transition element?

**Next step (website minimum deliverable):** complete the **Unit 1, Unit 2, Unit 3 MCQ quizzes** to consolidate. Bring any wrong answers here and we'll re-encode the specific gap.

**SIR schedule:** this is Day-0 encoding (today, 2026-06-13). Next retrieval Day 1, then Day 7, then Day 30 — interleave with whatever else is running.
