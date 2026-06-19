# Chem Topic 17 — Carbonyl Compounds (Aldehydes & Ketones) (H2 9729)

**Source:** HCI lecture notes `Chem/17CarbonylCompoundsLecNotesWM.pdf` (full text → `workspace/chem/_t17_notes_clean.txt`, "for use from 2026"). Answer keys are image scans — self-mark.

**Why it matters:** Carbonyls sit at the **centre of the organic synthesis web** — made by oxidising alcohols (T16) and reduced back to them, lengthened by HCN (step-up), and the gateway to carboxylic acids (T18). The **nucleophilic addition with HCN mechanism** (with its kinetics + stereochemistry) is the marquee mechanism of the topic and a guaranteed exam draw. **Distinguishing tests** (2,4-DNPH, Tollens', Fehling's, iodoform) are exam staples for "identify the unknown / tell aldehyde from ketone." Builds on Topic 8 (nucleophile, curly arrows, electrophilic carbon), Topic 11/15 (planar-intermediate → racemic mixture), Topic 16 (alcohol oxidation/reduction, iodoform). Feeds Topic 18 (carboxylic acids).

**Mark-scheme-first核心:** examiners reward (1) the **two-arrow nucleophilic-addition mechanism** (CN⁻ attacks the δ+ C, π breaks → tetrahedral alkoxide intermediate in the **rds**; then protonation by HCN regenerating CN⁻), (2) the **aldehyde-vs-ketone reactivity argument** (steric + electronic, both ways favour aldehydes), (3) **why CN⁻/base speeds it up** (raises [CN⁻]), and (4) **matching the right diagnostic test to the right group** with the exact colour change.

---

## UNIT 1 — Introduction: aldehydes & ketones (naming, bp/solubility, prep)

### Definitions
- **Carbonyl group = C=O** (C double-bonded to O). **Aldehyde R–CHO** (carbonyl C bonded to ≥1 H; R = H/alkyl/aryl; 1st member **methanal HCHO**). **Ketone R–CO–R'** (carbonyl C between two C; smallest = **propanone**).
- **General formula CₙH₂ₙO** (saturated aliphatic). An aldehyde and ketone with the same n are **constitutional isomers** (e.g. propanal / propanone).

### Naming (LO 11.1a)
- **Aldehydes: parent chain must contain –CHO; the CHO carbon is C1; suffix -al** (methanal, ethanal, propanal…). –CHO on a ring → **-carbaldehyde** (cyclohexanecarbaldehyde; benzaldehyde = benzenecarbaldehyde).
- **Ketones: longest chain containing C=O; number from the end nearer the carbonyl; suffix -one** (propanone, butanone, pentan-2-one). Omit the locant if unambiguous.

### Physical properties (bp & solubility) — polar but no H-bonding between themselves
- **The C=O group is polar (δ+C=Oδ−) → permanent dipole–permanent dipole (pd–pd) interactions** between molecules (on top of dispersion).
- **bp: carbonyl > alkane** (pd–pd + dispersion vs dispersion only) **but carbonyl < alcohol/carboxylic acid** of similar electron count (those H-bond, which is stronger than pd–pd). *(e.g. butane −0.5 < propanal 49 < propanone 56 < propan-1-ol 97 < ethanoic acid 118, all ~32–34 e⁻.)*
- **Solubility:** small aldehydes/ketones **soluble in water** (the O lone pairs **H-bond with water**); they dissolve both polar and non-polar solutes (useful solvents). **Solubility falls as the chain lengthens** (>5 C or aromatic → virtually insoluble): the longer non-polar alkyl chain means the carbonyl–water H-bonding released can't overcome the rising dispersion forces + water's own H-bonding, and the chain disrupts water's H-bond network.

### Preparation (LO 11.7a)
- **Aldehyde:** oxidation of a **1° alcohol** (K₂Cr₂O₇/H⁺, heat with **immediate distillation** — T16).
- **Ketone:** oxidation of a **2° alcohol** (K₂Cr₂O₇ or KMnO₄/H⁺, heat); or **oxidative cleavage of a substituted alkene** (hot acidified KMnO₄ — T11).

---

## UNIT 2 — Nucleophilic addition with HCN (the marquee mechanism) ★★

### Why carbonyls react with nucleophiles (LO 11.3h)
- The **δ+C=Oδ− bond is polar**, so the **carbonyl carbon carries a δ+ charge → attracts nucleophiles** (CN⁻, H⁻ from LiAlH₄/NaBH₄, even H₂O/ROH lone pairs).
- *Contrast:* the **C=C of an alkene is non-polar with no δ+ carbon** — its electron-rich π bond *repels* nucleophiles (alkenes undergo *electrophilic* addition instead).

### Aldehyde vs ketone reactivity (LO) ★ — aldehydes more reactive, two reasons
1. **Steric:** ketones have **two bulky alkyl groups** flanking the carbonyl C vs **one** in aldehydes → nucleophile approaches the aldehyde carbon with **less steric hindrance.**
2. **Electronic:** an aldehyde C has **one** electron-donating alkyl group, a ketone has **two** → the aldehyde carbon has a **higher δ+ charge** → more susceptible to nucleophilic attack.

### Reaction with HCN → cyanohydrin (LO 11.7b, 11.3o) ★★
- **Reagents/conditions: HCN with a trace of KCN catalyst, cold (10–20 °C).** Product = a **cyanohydrin** (a 2-hydroxynitrile).
- *Practical:* HCN is a toxic gas (bp 25.6 °C), so generated **in situ** from `2KCN + H₂SO₄ → K₂SO₄ + 2HCN`, kept cold so HCN stays liquid.
- **Mechanism (2 steps):**
  - **Step 1 (slow, rds):** **CN⁻ attacks the electron-deficient carbonyl carbon, breaking the C=O π bond** → a stable **tetrahedral alkoxide intermediate (anion).** *(Curly arrows: CN⁻ lone pair → carbonyl C; C=O π → O.)*
  - **Step 2 (fast):** the **alkoxide is protonated by an undissociated HCN molecule** → cyanohydrin, **regenerating CN⁻.**

### Kinetics (LO) ★
- **Bimolecular:** the rds involves **both** the carbonyl compound and CN⁻ → **rate = k[carbonyl][CN⁻].**
- **Why pure HCN is slow / how to speed it up:** HCN is a weak acid (Ka ≈ 6.2×10⁻¹⁰), only slightly ionised → low [CN⁻].
  - **Add a trace of KCN** (fully dissociates → free CN⁻) → ↑[CN⁻] → faster. **KCN is a catalyst — CN⁻ is regenerated.**
  - **Add a little base (NaOH):** removes H₃O⁺ → shifts `HCN ⇌ H⁺ + CN⁻` right → ↑[CN⁻] → faster.

### Stereochemistry (LO) ★ — racemic mixture
- The carbonyl C is **trigonal planar**, so CN⁻ attacks the **top and bottom faces with equal probability.** If the new **sp³ carbon is chiral**, equal amounts of both enantiomers form → a **racemic mixture** (optically inactive). *(Same planar-intermediate logic as electrophilic addition to alkenes and SN1 — T11/T15.)*

### Why cyanohydrins matter (synthesis)
- **Step-up reaction: lengthens the chain by 1 C.** The –CN group then converts to:
  - **carboxylic acid** (acid hydrolysis, dilute H₂SO₄, heat),
  - **carboxylate salt** (alkaline hydrolysis, dilute NaOH, heat),
  - **amine** (reduction, LiAlH₄ in dry ether or H₂/Ni).

---

## UNIT 3 — Other reactions & distinguishing tests

### A. Condensation with 2,4-DNPH (LO 11.7c) ★ — test for ALL carbonyls
- **Nucleophiles with two H on N (like 2,4-dinitrophenylhydrazine) add then eliminate water → a C=N product** (addition–elimination = condensation).
- **Reagents/conditions: 2,4-DNPH, room temperature.** **Positive = ORANGE precipitate** (a 2,4-dinitrophenylhydrazone derivative) + H₂O eliminated.
- **This is the characteristic test for the carbonyl group of aldehydes AND ketones** — distinguishes them from **all other** functional groups (which give no orange ppt). The sharp melting point of the derivative can identify the specific carbonyl.

### B. Reduction → alcohols (LO 11.7a)
- **Aldehyde + 2[H] → 1° alcohol; ketone + 2[H] → 2° alcohol.**
- **Reagents: LiAlH₄ in dry ether** (then add H₂O to protonate the alkoxide), **or H₂(g)/Ni catalyst.**
- **LiAlH₄ vs NaBH₄ (FYI):** both are sources of the nucleophilic **hydride H⁻** (H more electronegative than Al/B → bears the −charge). **LiAlH₄ is stronger but hazardous** (violent with water, needs dry ether — explosive mixtures in air); **NaBH₄ is milder, handleable in air/water or alcohol** → usually preferred in practice. **Neither reduces the non-polar C=C of an alkene** (electron-rich, repels H⁻) — alkenes need H₂/Ni.

### C. Oxidation of aldehydes (LO 11.8a, 11.7d) ★ — the aldehyde/ketone divide
- **Aldehydes have an H on the carbonyl carbon → readily oxidised to carboxylic acids. Ketones have no such H → NOT oxidised** (no reaction). This is the basis of the distinguishing tests.
- **Reagents: K₂Cr₂O₇ or KMnO₄ / dilute H₂SO₄, heat (under reflux)** → carboxylic acid (`aldehyde + [O] → RCO₂H`). Observation: **orange Cr₂O₇²⁻ → green Cr³⁺**, or **purple MnO₄⁻ → colourless Mn²⁺.** (Ketone → stays orange / purple.)

### D. Tollens' reagent (silver mirror test) (LO 11.7d) ★
- **Tollens' = [Ag(NH₃)₂]⁺** (made fresh: AgNO₃ + 1 drop NaOH → brown Ag₂O ppt, then add dilute NH₃ dropwise until it just redissolves).
- **Aldehydes reduce Ag(I) → silver metal (a mirror on the vessel wall).** **Reagents: Tollens' reagent, warm. Positive = silver mirror.** **Ketones give no reaction.** `RCHO + 2[Ag(NH₃)₂]⁺ + 3OH⁻ → RCO₂⁻ + 2Ag + 4NH₃ + 2H₂O`. (Benzaldehyde DOES give a positive Tollens' test.)

### E. Fehling's reagent (LO 11.7d) ★ — separates aliphatic aldehyde from benzaldehyde
- **Fehling's = Cu²⁺ complexed with tartrate** in alkali (two solutions mixed fresh; tartrate complexes Cu²⁺ to stop Cu(OH)₂ precipitating → deep-blue solution).
- **Aliphatic aldehydes (ONLY) reduce Cu(II) → reddish-brown (brick-red) Cu₂O precipitate.** **Reagents: Fehling's, warm. Positive = brick-red ppt.** **Ketones AND benzaldehyde give NO reaction** (benzaldehyde disproportionates instead) → **Fehling's distinguishes an aliphatic aldehyde from benzaldehyde** (both give a silver mirror with Tollens', but only the aliphatic one gives the brick-red ppt).

### F. Tri-iodomethane (iodoform) test (LO 11.7e) ★ — test for CH₃CO–
- **Detects the CH₃CO– group** (methyl ketones) **and ethanal** (the only aldehyde positive — it's CH₃CHO). **Reagents: I₂(aq) + NaOH(aq), warm. Positive = yellow crystals/ppt of CHI₃ (iodoform).**
- **Step-down reaction** (breaks a C–C, removes the CH₃ as CHI₃ → shortens chain by 1 C). `CH₃CO–R + 3I₂ + 4OH⁻ → CHI₃ + RCO₂⁻ + 3I⁻ + 3H₂O`. **Also positive for alcohols with CH₃CH(OH)–** (T16 — oxidised in situ to the methyl ketone/ethanal first).

### Distinguishing-tests summary
| Reagent / conditions | Aldehyde (aliphatic) | Benzaldehyde | Ketone | Use |
|---|---|---|---|---|
| **2,4-DNPH, rt** | orange ppt | orange ppt | orange ppt | carbonyl vs ALL other groups |
| **K₂Cr₂O₇ / dil H₂SO₄, heat** | orange→green | orange→green | no change | aldehyde+benzaldehyde vs ketone |
| **Tollens', warm** | silver mirror | silver mirror | no reaction | aldehyde vs ketone |
| **Fehling's, warm** | brick-red ppt | **no reaction** | no reaction | **aliphatic aldehyde vs benzaldehyde** |
| **I₂(aq) + NaOH, warm** | only ethanal → yellow ppt | no | methyl ketones → yellow ppt | detects CH₃CO– (and CH₃CH(OH)–) |

---

## TOP EXAM TRAPS (Topic 17)
- **bp ordering: alkane < aldehyde/ketone (pd–pd) < alcohol/carboxylic acid (H-bonding).** Carbonyls have NO H-bonding *between their own molecules* (no H on O) but CAN H-bond *with water* (O lone pairs) → soluble when small.
- **HCN mechanism: CN⁻ (not HCN) is the nucleophile; rds is step 1; protonation by HCN in step 2 regenerates CN⁻.** rate = k[carbonyl][CN⁻].
- **Aldehydes > ketones in nucleophilic addition** — give BOTH the steric (fewer/smaller groups) AND electronic (higher δ+, fewer e⁻-donating alkyls) reasons.
- **Trace KCN / a little NaOH speeds the reaction by raising [CN⁻]** — KCN is a *catalyst* (regenerated).
- **Planar carbonyl C → racemic mixture** if the product carbon is chiral.
- **2,4-DNPH (orange ppt) = carbonyl present (aldehyde OR ketone), distinguishes from all other groups** — it does NOT distinguish aldehyde from ketone. Use **Tollens'/Fehling'/dichromate** for that.
- **Ketones are not oxidised** (no H on carbonyl C) — orange/purple unchanged.
- **Fehling's separates aliphatic aldehyde from benzaldehyde** (benzaldehyde negative); Tollens' does NOT (both positive).
- **Iodoform (yellow ppt) = CH₃CO– or CH₃CH(OH)–.** Only ethanal among aldehydes is positive. Step-*down* (−1 C). HCN is step-*up* (+1 C).
- **LiAlH₄/NaBH₄ reduce C=O but NOT C=C** (need H₂/Ni for the alkene). LiAlH₄ needs **dry ether**.

---

## ACTIVE RECALL — cold self-test
1. Name and classify: CH₃CH₂CHO, CH₃COCH₂CH₃, cyclohexanone, benzaldehyde. Give the general formula of a saturated carbonyl.
2. Why does propanal boil higher than butane but lower than propan-1-ol (all ~32–34 electrons)? Why are small carbonyls water-soluble but larger ones not?
3. Give reagents/conditions to make (a) an aldehyde and (b) a ketone from alcohols.
4. Draw the full HCN nucleophilic-addition mechanism for ethanal (curly arrows, both steps, label the rds). What is the product class called?
5. Write the rate equation. Why is pure HCN slow, and what two additions speed it up (with reasoning)?
6. Explain, with both a steric and an electronic argument, why aldehydes are more reactive than ketones toward nucleophiles.
7. Why does HCN addition to an unsymmetrical aldehyde give a racemic mixture?
8. Give three uses of the cyanohydrin/nitrile (reagents for each). Is HCN addition step-up or step-down?
9. Reagent, conditions and positive observation for: 2,4-DNPH; Tollens'; Fehling's; iodoform. What does each detect?
10. You have butanal, butanone and benzaldehyde. Give a test sequence that identifies all three.
11. Why are ketones not oxidised by acidified dichromate? Why do LiAlH₄/NaBH₄ reduce C=O but not C=C?

**Website minimum deliverables:** complete the **Unit 1, 2, 3 MCQ quizzes** + Class Ex 1 (after Units 1–2) & Class Ex 2 (after Unit 3); post queries in the MCQ quiz for tutors. Bring wrong answers here to re-encode.
**SIR:** Day-0 done 2026-06-13 → Day 1, Day 7, Day 30. The synthesis crossroads — made from / reduced to alcohols (T16), stepped up by HCN, oxidised to carboxylic acids (T18); shares iodoform with T16 and the planar-intermediate→racemate logic with T11/T15. See [[chem-topic1-encoded]].
