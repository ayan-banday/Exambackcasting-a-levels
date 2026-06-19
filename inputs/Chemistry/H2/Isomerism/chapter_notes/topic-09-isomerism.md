# Chem Topic 09 — Isomerism (H2 9729)

**Source:** HCI lecture notes `Chem/09IsomerismLectureNotes.pdf` (full text → `workspace/chem/_t9_notes_clean.txt`) + website Units 1–3. Answer keys are image scans — self-mark. **Erratum p.09-05:** "For every halogen atom present, there will be one less H atom compared to the general saturated formula, e.g. C₄H₉Br has 0° unsaturation, like C₄H₁₀."

**Why it matters:** The second organic-foundation topic (after Topic 8). "Identify chiral centres / cis-trans", "deduce all isomers of a molecular formula", and "count stereoisomers" are reliable AO1/AO2 marks and recur throughout organic chemistry. Builds on Topic 8 (formulae, hybridisation, wedge notation).

---

## OVERVIEW
**Isomers = same molecular formula, different arrangement of atoms.** ⚠️ A molecule **rotated** or in a different **conformation** (free rotation about C–C single bonds) is **NOT** an isomer — it's the same molecule. Isomers have **different IUPAC names**.

```
Isomerism
├── Constitutional (structural) — same molecular formula, DIFFERENT structural formula
│     ├── chain (different carbon skeleton)
│     ├── positional (same group, different position)
│     └── functional group (different group, same atoms)
└── Stereoisomerism — same molecular AND structural formula, different 3-D arrangement
      ├── cis–trans
      └── enantiomerism
```

---

## UNIT 1 — Constitutional & cis-trans isomerism

### Constitutional (structural) isomers — same molecular formula, different structural formula
- **Chain isomers** — different carbon skeleton (branching), e.g. pentane / 2-methylbutane / 2,2-dimethylpropane (C₅H₁₂).
- **Positional isomers** — same functional group at a different position, e.g. pent-1-ene / pent-2-ene.
- **Functional group isomers** — different functional groups built from the same atoms/bonds, e.g. propanal / propanone (C₃H₆O); ester vs carboxylic acid; alcohol vs ether (C–O–C).
- (The three category names are guides only — no need to memorise.)
- **Property differences:** different carbon chain (same group) → **different physical, similar chemical**; same group different position → **similar, similar**; different functional group → **different, different**.

### Deducing all isomers of a molecular formula
1. From the formula, identify likely functional group(s) and the **degree of unsaturation**.
2. Draw **all carbon chains** (straight first, then increasingly branched).
3. Place the functional group at **all possible positions** on each chain.
4. Repeat for other likely functional groups until exhausted.

### Degrees of unsaturation (DoU)
- Compare to the saturated alkane **CₙH₂ₙ₊₂** (0° unsaturation). **Each loss of 2 H = 1° of unsaturation.**
- **1° = one double bond OR one ring.** **2° = two double bonds, or two rings, or one double + one ring, or one triple bond.** (Double = C=C, C=O, C=N; triple = C≡C, C≡N.)
- **Heteroatom rules:** **halogens count as H** (each halogen = one less H ⇒ C₄H₉Br is like C₄H₁₀, 0°). **O and S: no effect.** **Each N adds one H** to the saturated formula (C₄H₁₁N is like C₄H₁₀, 0°).
- **Formula: DoU = [2n + 2 + (N) − (H) − (halogens)] / 2.** (e.g. C₅H₇OF: 2·5+2 = 12; subtract H(7)+F(1) → 12−8 = 4 → DoU = 2.)

### Cis–trans isomerism — **TWO criteria (both needed)**
1. a bond with **restricted rotation** — a **C=C (π bond) or a ring**, AND
2. **two non-identical groups on each end** of that bond.
- **Alkenes:** can't rotate about C=C without breaking the π bond → restricted. **cis = identical groups on the same side; trans = on opposite sides.** No cis-trans if either end has two identical groups (e.g. methylpropene). With **four different groups** it's still cis-trans isomerism but named by **E/Z (NOT in the H2 syllabus)**.
- **n** such C=C bonds → **max 2ⁿ** cis-trans isomers.
- **Cycloalkenes:** **small rings (cyclopentene, cyclohexene) exist only as cis** (trans too strained). **Large rings (≥8 atoms, e.g. cyclodecene) have both cis and trans.**
- **Rings (single bonds in a ring have restricted rotation):** non-identical groups on ≥2 ring atoms → cis-trans, e.g. 1,2-dichlorocyclopentane. **cis = identical groups same side of the ring plane; trans = opposite sides.**

---

## UNIT 2 — Enantiomerism

- **Enantiomerism (chiral):** a molecule whose **mirror image is non-superimposable** on itself. The two non-superimposable mirror images are **enantiomers**.
- **A molecule is chiral if:** it **often has ≥1 chiral centre** AND has **no internal plane (or centre) of symmetry**.
- **Chiral centre:** an atom with **tetrahedral geometry bonded to four DIFFERENT groups** — mark with an **asterisk (*)**.
- **One chiral centre → 2 enantiomers.** To draw: keep two bonds in the plane, put the 3rd on a solid wedge and the 4th on a dashed wedge; the other enantiomer is the mirror image.

### More than one chiral centre
- **m chiral centres → maximum 2ᵐ stereoisomers.**
- Two stereoisomers are **enantiomers only if the arrangement around ALL chiral centres is different.** If some (not all) centres match, they're stereoisomers but **not** enantiomers (= *diastereomers*; term not required for H2).
- **Meso compound:** a stereoisomer with **≥2 chiral centres but achiral** (not optically active) because it has an **internal plane of symmetry** → its mirror image is superimposable on itself. A meso form **reduces the actual count** (e.g. 2 centres → max 4 → actual **3**: one enantiomer pair + one meso).
- **Chirality without a chiral centre:** the **allene** group C=C=C, e.g. 1,3-dichloropropa-1,2-diene — the perpendicular π systems put the end groups in perpendicular planes, no plane of symmetry → chiral.

---

## UNIT 3 — Optical activity & counting

### Optical activity
- An **optically active** sample **rotates plane-polarised light (PPL)** and **contains chiral molecules**. (Plane-polarised light oscillates in one plane; measured with a **polarimeter**.)
- Each enantiomer rotates PPL by the **same angle but in opposite directions**: clockwise = **dextrorotatory (+)**; anticlockwise = **laevorotatory (−)**. ⚠️ **Direction cannot be predicted from structure** — only measured.
- **Racemic mixture = 50:50 (equal) mix of the two enantiomers → no net rotation (they cancel) → optically inactive.** Achiral molecules are also optically inactive.
- **R/S convention is NOT in the H2 syllabus.**

### Properties of enantiomers
- **Physical:** **identical EXCEPT the direction in which they rotate PPL.**
- **Chemical:** **identical EXCEPT in their interactions with another chiral molecule.**
- **Biological:** **different** — the human body is a chiral environment → important in **drug action** ((−)-carvone spearmint vs (+)-carvone; (−)-epinephrine active vs (+) doesn't fit; **thalidomide**: (+) safe sedative, (−) teratogenic — but the body **racemises** it, so even pure (+) is unsafe).
- **Separation is hard** (near-identical properties); must use a chiral compound. **Kinetic resolution:** react the racemic mixture with a chiral reagent that reacts **fast with one** enantiomer, **slow with the other**; the new product (e.g. an ester) is separable; then hydrolyse to recover the pure enantiomer.

### Counting total stereoisomers
- Stereoisomers = **cis-trans isomers + enantiomers**.
- **Maximum = 2^(m + n)** where **m = chiral centres** and **n = C=C bonds that can show cis-trans**.
- **Actual** number = maximum minus any removed by an **internal plane of symmetry (meso forms)**. (e.g. methoprene: 1 chiral centre + 2 cis-trans C=C → 2³ = 8, no symmetry → **8** actual.)

---

## TOP EXAM TRAPS (Topic 9)
- **Conformations / rotated drawings are NOT isomers** (free rotation about single bonds). Isomers have different IUPAC names.
- DoU heteroatoms: **halogen = like an H (less H); N = adds an H; O/S = no effect.**
- **cis-trans needs BOTH** a restricted-rotation bond (C=C or ring) **AND** two non-identical groups on **each** end.
- **Small cycloalkenes are cis-only**; large rings (≥8) have both.
- **Chiral centre = 4 different groups, tetrahedral.** A C with two identical groups is not chiral.
- **Meso compound: has chiral centres but is achiral / optically inactive** (internal plane of symmetry).
- **Enantiomers: identical physical & chemical properties EXCEPT** PPL-rotation direction (physical) / interaction with a chiral molecule (chemical).
- **Racemic mixture is optically inactive.** Direction of rotation can't be deduced from structure.
- **Max stereoisomers = 2^(m+n); actual is reduced by meso/symmetry.**
- **E/Z and R/S are NOT in the H2 syllabus.**

---

## ACTIVE RECALL — cold self-test
1. Define isomers, constitutional isomers, and stereoisomers. Why are different conformations not isomers?
2. Give a chain, a positional, and a functional-group isomer of an appropriate formula.
3. Calculate the degrees of unsaturation for C₅H₇OF and for C₄H₉Br. List what each could contain.
4. State the two criteria for cis-trans isomerism. Does ClCH=CHCl show it? Does methylpropene? Does cyclohexene?
5. How many cis-trans isomers can a molecule with two qualifying C=C bonds have?
6. Define a chiral centre and the condition for a molecule to be chiral. Draw the two enantiomers of butan-2-ol with the chiral centre marked.
7. A molecule has 2 chiral centres bonded to the same four groups. Why might it have only 3 stereoisomers, not 4? What is the achiral one called?
8. State the physical, chemical, and biological property differences between enantiomers.
9. What is a racemic mixture, and is it optically active? Can you predict the rotation direction from structure?
10. Outline how kinetic resolution separates enantiomers.
11. A molecule has 1 chiral centre and 2 cis-trans-capable C=C bonds. What's the maximum number of stereoisomers? How is the actual number found?

**Website minimum deliverables:** complete the **Unit 1–3 MCQ quizzes** + the 2 Class Exercises. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. Builds on Topic 8 (formulae, wedges, hybridisation); chirality recurs throughout organic. See [[chem-topic1-encoded]].
