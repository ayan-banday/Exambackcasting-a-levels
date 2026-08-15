---
subject: Biology
level: H2
topic: Book_8_Climate_Change
syllabus_code: 9477
type: qualitative   # subject default, and it mostly holds. OVERRIDE → quantitative for THREE strands that are
                    # wider than in any other Bio Book: (1) CO2-equivalent and GWP arithmetic (specimen P1 Q26);
                    # (2) carbon-sequestration and offset percentage arithmetic (specimen P3 Q2b and Q2c(i),
                    # 5 of that question's 11 marks); (3) rate-of-change arithmetic off a climate time series.
                    # Calculation is 5.8% of this Book's corpus against 0.4% in Book 3, a fourteenfold
                    # difference. Those three close by solving variants until mechanical. Everything else
                    # closes by concept doc plus re-test at a new angle.
status: BUILT
validation_source: MIXED
confidence_ceiling: "~82% MIXED. [OFFICIAL] ~97% on scope (all 9 Extension Topic B LOs read verbatim from the syllabus PDF and cross-checked against all six chapter headers, zero discrepancies; scope audit re-run across space/hyphen/en-dash/em-dash/closed/line-wrap variants after a line-wrap false-negative class was found); [OFFICIAL] on paper shape (all four 9477 specimen papers counted question by question, part by part); [SCHOOL] ~75% on marking (JC prelim schemes only, no SEAB scheme exists for 9477, and 47.6% of the corpus predates the 9477 rollout); archetype frequencies are MEASURED by parsing 517 real questions, not estimated"
last_updated: 2026-08-15
---

# Topic Examiner's Guide, Biology H2 (9477) > Book 8: Impact of Climate Change on Animals and Plants (Extension Topic B)

> Specialises the subject guide to Book 8. Drives the cluster breakdown and question generation.
> **Read `../subject_examiner_guide.md` §3.0 first**, and read `_ground_truth_chapter_digest.md` in this
> folder before building any cluster, because Book 8's school notes contain around a dozen genuine
> factual errors and internal contradictions, several of them numerical, and one of them (the ocean
> acidification mechanism) sits on an examined chain where the mark scheme is demonstrably better than
> the notes.

---

## 0. Scope boundary (get this right before anything else)

**Book 8 is not a Core Idea. It is Extension Topic B, and that changes three things.** `[OFFICIAL]`

The syllabus says so in its own words on page 6:

> *"Besides the Core Ideas, the H2 Biology syllabus features two Extension Topics: (A) Infectious Diseases, and (B) Impact of Climate Change on Animals and Plants. The two Extension Topics are based on important emerging biological issues impacting both the local and global contexts. **They require students to demonstrate assimilation of the Core Ideas and extend their knowledge and understanding to real-world challenges.** Furthermore, Extension Topics will equip students with the necessary knowledge and process skills to make informed decisions about scientific issues. **Both Extension Topics take up about 15% of the total H2 Biology curriculum.**"*
>
> *"Students are expected to study all four Core Ideas and **both the Extension Topics**."*

1. **Nominal weight.** Both extension topics together are about 15%, so Book 8 alone is nominally around 7.5%. **The specimen gave it more than that. See §2.0.**
2. **Assimilation of the Core Ideas.** This is the sentence that determines how the clusters must be built. Book 8 has very little content that is not either a real-world context or a Core Idea concept applied to that context. **§0.4 works out exactly which Core Idea content the outcomes expect to be brought in, and it is not optional background. It is where the marks are.**
3. **No opt-out.** It is compulsory for every H2 candidate.

| School chapter | Section | Printed pages | LO(s) served | Note |
|---|---|---|---|---|
| 8.1 Climate Fundamentals: Biomes, Albedo, Greenhouse Effect | 1 | 1–26 | **none directly** | Framing only. ~3 of 26 pages examinable. See §5 |
| 8.2 Anthropogenic Climate Change and Carbon Footprint | 2 | 27–46 | **(a), (d)** | Densest chapter. Carries specimen P2 Q8 (13 marks) and P1 Q26 |
| 8.3 Effects on the Environment: Oceans, Ice, Feedback Loops | 3 | 47–72 | **(b), (c)** | Largest outcome in the Book. Carries specimen P1 Q27 and Q28 |
| 8.4 Effects on Habitats, Organisms and Insects | 4 | 73–95 | **(f), (h) part 1** | Best-sourced chapter. 10 named examples withheld to Google Classroom |
| 8.5 Biodiversity, Biomedicines, Sustainable Food Supply | 5 | 96–121 | **(e), (g)** | Worst outcome-to-page ratio after 8.1. Two discuss outcomes |
| 8.6 Global Warming and Mosquito-Borne Diseases | 6 | 122–133 | **(h) part 2, (i)** | Best ratio in the Book. School marks its own out-of-scope content |

That is **9 learning outcomes across 133 pages**. Book 3 carried 13 across 138. `[OFFICIAL]` on the LO letters, `[SCHOOL]` on the chapter split and page counts.

**There is no letter-offset error anywhere in Book 8, and no wording discrepancy either.** All six chapters reprint all nine outcomes and every one matches the syllabus character for character. The only anomaly is in the **official document**, not the school's: the syllabus PDF's text layer prints `nuclear power,solar power` with no space after the comma in LO (d). That is a typesetting artefact and it is the reason a naive literal search reports `solar power` as absent. See §5's audit note.

### 0.1 Verbatim 9477 Learning Outcomes for Extension Topic B

Reproduced word for word from `inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`, page 21. `[OFFICIAL]`

**Content** (syllabus's own four bullets, which are the four things the examiner thinks this topic is about):

> • Human activities that contribute to climate change
> • Effects of climate change on the environment, plants and animals
> • Impact on biodiversity, biomedicines and the global food supply
> • Viral dengue disease in humans and how global warming affects its spread

**Learning Outcomes. Candidates should be able to:**

**(a)** identify and explain the human activities over the last few centuries that have contributed to climate change through accumulation of greenhouse gases **(limited to CO2 and methane)**, including burning of fossil fuels linked to increasing energy usage, clearing of forests and food choices (increasing consumption of meat)

**(b)** explain the effects of climate change as a result of greenhouse gas emissions, including melting of polar ice caps, rising sea levels, increase in frequency of extreme weather events, stress on fresh water supplies, migration of fishes and insects, stress to coral reef, seagrass and mangrove ecosystems, and release of greenhouse gases from frozen organic matter

**(c)** explain how mangrove ecosystems help to mitigate the impacts of climate change

**(d)** explain the **relative differences** between the carbon footprints of a range of anthropogenic activities, including deforestation, energy production (including fossil fuels, hydroelectric power, nuclear power, solar power, wind power and bioethanol) and food production (animal- and plant-based)

**(e)** discuss the consequences to the sustainable food supply of increased environmental stress resulting from climate change, including the effects on plants and animals of increased temperature and more extreme weather events

**(f)** discuss the effects of increased environmental stress (including increased temperatures and more extreme weather events) as a result of global climate change, on **habitats, organisms, food chains and niche occupation**

**(g)** discuss how climate change affects the rich biodiversity of the **tropics**, including the potential loss of this rich reservoir for **biomedicines** and **genetic diversity for food**

**(h)** explain how temperature changes impact insects as a result of **increased temperature leading to increased metabolism** and the **narrow temperature tolerance of insects**, including how temperature affects the **life cycle of *Aedes aegypti*** as an example of a typical mosquito disease vector

**(i)** explain how global warming affects the spread of **mosquito-borne infectious diseases, including malaria and dengue, beyond the tropics.**

The topic closes with the standing instruction: *"Use the knowledge gained in this section in new situations or to solve related problems."* `[OFFICIAL]`

### 0.2 The exclusions and restrictions the syllabus states outright

These are written into the LO text and they are where the time savings sit. `[OFFICIAL]`

1. **"limited to CO2 and methane"** (LO a). This is the only bracketed exclusion in the whole of Extension Topic B and it is doing real work. **Nitrous oxide is not part of the accumulation outcome**, despite the school teaching it across four pages with a GWP of 298 and an agricultural mechanism. Keep one line on N2O because it is a legitimate **indirect** activity for an LO (a) answer and the specimen's own bank answer accepts fertiliser use, but do not build a node on it.
2. **"relative differences"** (LO d). The outcome does not ask for absolute carbon footprints. It asks candidates to **rank and compare**. This matters because the school's per-kWh figures and the specimen's per-MJ figures disagree on the ordering of oil against coal. See the trap model, §4.
3. **"as an example of a typical mosquito disease vector"** (LO h). *Aedes aegypti* is named as an **exemplar**, not as an endpoint. The examinable skill is transferring the life-cycle-and-temperature argument to any vector the examiner supplies, which is exactly what the bluetongue *Culicoides* case in chapter 8.5 rehearses.
4. **"beyond the tropics"** (LO i). Not "explain how warming increases dengue". The outcome is about **geographic expansion into regions where the disease was previously absent**. Every answer must end outside the tropics, in latitude or in altitude.
5. **"the tropics"** (LO g). LO (g) is not an outcome about biodiversity in general. It is about tropical biodiversity and two named consequences of losing it.

And one exclusion by omission that saves a lot of reading: **there is no outcome anywhere in Extension Topic B on the causes of natural climate variability.** Earth's orbital cycles, ENSO, El Niño, La Niña and volcanic aerosols occupy chapter 8.1 pages 25 to 26 and have no outcome behind them. LO (a) is explicitly about **anthropogenic** activities.

### 0.3 The practical consequence of being an extension topic

**Paper 1 sweeps the syllabus in syllabus order, and the Extension Topics come last.** On the 9477 Specimen Paper 1, Extension Topic B occupied **Q26, Q27 and Q28** consecutively, immediately after the Core Idea 4 evolution questions and immediately before the Extension Topic A immunology questions at Q29 and Q30. `[OFFICIAL]`

Three things follow.

First, **Book 8's MCQs cluster at the very end of Paper 1**, unlike Book 3's, which were scattered from Q8 to Q22. If Ethan runs out of time on Paper 1, these are the questions he loses.

Second, **Book 8 sits next to Extension Topic A in the examiner's ordering, and the two share a boundary at dengue.** Specimen P1 Q30 is a dengue question about the basic reproduction number R0, which is Extension Topic A's LO (j), but one of its four options is *"increased rainfall in an area where the disease is always present"*, which is Book 8's LO (i). **A candidate who has revised Book 8 without Extension Topic A, or the reverse, is exposed on that boundary.**

Third, and most usefully, **Book 8 questions are structurally different from Core Idea questions.** They are the examiner's designated place to put arithmetic on real data, to hand over an unfamiliar organism, and to ask for a judgement. §2 measures all three.

### 0.4 Which Core Idea content this Book expects to be brought in

**This is the most important section in this guide for cluster design.** The syllabus says extension topics *"require students to demonstrate assimilation of the Core Ideas"*. Working out which Core Ideas, from the outcomes and from the specimen, gives this:

| Core Idea content | Which Book 8 outcome needs it | Evidence it is actually tested |
|---|---|---|
| **Photosynthesis as carbon fixation** (CI 3, LOs c, d, e) | LO (a) and (c): forests and mangroves are carbon sinks **because photosynthesis fixes atmospheric CO2 into organic molecules**. LO (d): bioethanol is low-footprint because the feedstock crop fixed the carbon it later releases | **Specimen P3 Q2(a)** asks candidates to *"Identify **three biomolecules** in which carbon may be sequestered in a tree"* [3], which is a pure Book 1 biomolecules answer inside a Book 8 stem. `[OFFICIAL]` **Specimen P1 Q27** distractor B fails precisely because it says mangrove roots **absorb organic carbon from sediments** rather than fixing atmospheric CO2 by photosynthesis. `[OFFICIAL]` In the corpus, **6 of the 17 essay-scale Book 8 stems are photosynthesis crossovers** `[SCHOOL]` |
| **Aerobic and anaerobic respiration, and decomposition** (CI 3, LOs f–k) | LO (b): permafrost thaw releases CO2 and CH4 because **microbes decompose the previously frozen organic matter**, and which gas is released depends on whether conditions are aerobic or anaerobic. LO (c): mangrove sediments lock carbon away **because they are waterlogged and oxygen-poor, so decomposition is slow**. LO (a): rice paddies and landfill release methane by **anaerobic** methanogenesis | **Specimen P1 Q27**, the correct option, turns entirely on *"oxygen-poor sediments that **limit further decomposition**"*. `[OFFICIAL]` The corpus files an essay stem asking candidates to *"Explain how humans have changed the levels of **global respiration** via economic activities and how this has contributed to climate change"* [15] `[SCHOOL]` |
| **Effect of temperature on enzyme-catalysed reaction rate** (CI 1, LO q; and CI 3, LO k) | **LO (h) is this outcome in a climate costume.** *"increased temperature leading to increased metabolism and the **narrow temperature tolerance** of insects"*. The rise is enzyme kinetics; the fall past the optimum is denaturation. The school says so on page 86: *"the deleterious effects of extreme temperatures on the **enzymes that regulate metabolism**"* | A prelim scheme's model answer for *"Explain how temperature changes impact insects such as mosquitoes"* [2] gives, as its first mark, *"An increase in temperature results in **increased metabolic rate / increased rate of enzyme-catalysed reactions**"*. `[SCHOOL]` Another gives *"due to increase in **frequency of effective collision between enzyme and substrate / more enzyme-substrate complexes formed**"* `[SCHOOL]` |
| **Variation, natural selection and environmental factors as selection forces** (CI 4, LOs a, b, c) | LO (g): genetic diversity *"provides the raw material for adaptation"*, so losing it removes the capacity to adapt. LO (f): stress is defined as anything that **reduces fitness**. LO (e): wild crop relatives carry resistance genes **because only the fittest survived changing conditions** | **9477 LO 4(b) reads *"explain, with examples, how environmental factors act as forces of natural selection"***, and climate change is the environmental factor. `[OFFICIAL]` |
| **Speciation, allopatric and sympatric** (CI 4, LO j) | Not named by any Book 8 outcome, and **tested anyway** | **Specimen P2 Q8(a)** is worth **5 marks**, the largest single part of the Book 8 specimen question, and asks: *"Suggest how repeated changes in climate between the warm phase and cool phase shown in Figure 8.1 may lead to the **evolution of new species and greater species diversity**."* The figure shows tropical rainforest bands contracting up two mountains during a cool phase. That is **allopatric speciation by geographic isolation**, answered entirely from Core Idea 4. `[OFFICIAL]` **This is the single strongest piece of evidence for the assimilation clause in the whole corpus** |
| **Membrane transport and water movement** (CI 1, LO l) | LO (b): saltwater intrusion, soil salinisation in mangroves, and drought all act on plants through **water availability and osmotic stress**. A prelim scheme reasons that warming causes *"some plants undergoing water stress (**stomata close to reduce transpiration** and hence there is **less CO2 for the Calvin cycle**)"* `[SCHOOL]` | `water potential` returns **zero** syllabus hits in any spelling, so the term is not required. The **mechanism** is carried by CI 1 LO (l) on osmosis, and the corpus does reach for it |
| **Biomolecules: carbohydrates, lipids, proteins** (CI 1, LOs a–i) | LO (c) and the sequestration questions: carbon is stored **as cellulose, lignin, starch, protein and lipid** | **Specimen P3 Q2(a)**, 3 marks, is exactly this. `[OFFICIAL]` |
| **Viruses and R0** (Extension Topic A, LOs g, j, k) | LO (i): dengue is a **viral** disease and the vector-to-host transmission cycle is Extension Topic A's territory | **Specimen P1 Q30** is a dengue R0 question with a rainfall distractor. `[OFFICIAL]` The corpus tags **11 of the 69 mosquito-section records** as also belonging to Infectious Diseases `[SCHOOL]` |

**The consequence for cluster design, stated plainly. Do not build Book 8 clusters as standalone climate content.** Every cluster needs a Core Idea spine running through it:

- The **carbon** cluster (LOs a, c, d) is **photosynthesis, respiration and decomposition** wearing a carbon-cycle hat, plus arithmetic.
- The **effects** cluster (LOs b, f) is **enzymes, tolerance ranges and selection pressure** applied to unfamiliar organisms.
- The **insects and disease** cluster (LOs h, i) is **enzyme kinetics and the temperature optimum curve** applied to *Aedes aegypti*, plus Extension Topic A's transmission cycle.
- The **biodiversity and food** cluster (LOs e, g) is **variation, natural selection and genetic diversity** applied to crops and to the tropics.

A candidate who studies Book 8 as environmental science will be able to describe every effect and will fail to explain any of them.

---

## 1. Content Node Map (coverage checklist)

Every node the exam can test in Book 8, grouped by the cluster that should teach it. Convergence requires no UNTOUCHED node. LO letters are `[OFFICIAL]`.

### Cluster 01, the carbon cluster (LOs a, c, d)

- [ ] **The greenhouse mechanism as a causal chain**: shortwave solar in, absorbed by surface, re-emitted as longwave infrared, absorbed by greenhouse gases, **re-emitted downward**, near-surface temperature rises. Not "retained". A prelim scheme makes this a **compulsory point**.
- [ ] **The three named human activities of LO (a)**, each ending in a named gas: fossil fuel burning linked to increasing energy usage → CO2; clearing of forests → CO2 twice, by removing the sink and releasing the store; food choices, meaning increasing meat consumption → CH4 from enteric fermentation and manure.
- [ ] **Direct against indirect contribution.** The single highest-value distinction in the Book. Specimen P2 Q8(b) asks for an **indirect** activity plus mechanism; a prelim scheme rejects the same items when a **direct** cause was wanted.
- [ ] **Carbon sink against carbon source**, and why deforestation is both a source and a removed sink.
- [ ] **The carbon cycle at Core Idea 3 level**: photosynthesis fixes, respiration and combustion release, sinks store. **`[Core Idea bridge → CI 3 LOs c, d, f–h]`**
- [ ] **Methane's anaerobic origin**: ruminant enteric fermentation, manure management, rice paddies, landfill. All four are **oxygen-poor conditions**, and that is the unifying mechanism, not four separate facts.
- [ ] **The three factors determining a gas's warming influence**: concentration or abundance, atmospheric lifetime, global warming potential.
- [ ] **CO2 equivalent (CO2e) and why the unit exists.** **`[type override → quantitative]`** Mass released × 100-year GWP = equivalent mass of CO2. Specimen P1 Q26 is pure arithmetic on this.
- [ ] **Pre-industrial baselines**: CO2 280 ppm → over 400 ppm, a rise of about 41%; CH4 714 ppb → over 1850 ppb, a rise of about 150%. Note the digest's §5.4 warning that the school gives four different "current" CO2 values.
- [ ] **Life-cycle assessment**, and specifically why a zero-emission generator has a non-zero footprint: extraction, manufacturing, construction, transport.
- [ ] **The energy-source ranking as a ranking, not as numbers**, with all six sources LO (d) names: fossil fuels, hydroelectric, nuclear, solar, wind, bioethanol.
- [ ] **Bioethanol's carbon-neutrality argument, both halves**: the crop fixes CO2 as it grows, offsetting combustion; harvesting, processing and transport still emit, creating a carbon debt.
- [ ] **Food production footprints as a ranking**: lamb highest at 39.2 kg CO2e per kg, then beef, pork, chicken, then plant proteins at about one thirteenth of lamb. Mechanism: ruminants generate methane by enteric fermentation and need more land, fertiliser and feed.
- [ ] **The cradle-to-grave stage split**: production dominates for beef at 90%; processing 5% for beef and lamb against 24% for chicken; transport about 10% and roughly constant; waste at least 20%. The counter-intuitive conclusion is that **buying local does little for meat**.
- [ ] **Carbon sequestration in named biomolecules.** **`[Core Idea bridge → CI 1 biomolecules]`** Cellulose, lignin, starch, and also protein and lipid.
- [ ] **Mangrove blue-carbon mitigation, four steps** (LO c): canopy and woody biomass capture carbon above ground; roots slow tidal water and trap carbon-rich sediment; leaf litter and decaying roots accumulate in those layers; **waterlogged, oxygen-poor soils slow decomposition** so carbon stays locked away for centuries. Up to four times the storage of other tropical forests.
- [ ] **Mangrove climate resilience** (LO c, second half): wave height cut by more than 66%; interlocking roots interrupt storm surge; roots stabilise shorelines and trap sediment so shorelines rebuild; roughly 15 million people shielded and over $65 billion in damage prevented annually. **Distinguish mitigation of the cause from adaptation to the consequence.**
- [ ] **Sequestration and offset arithmetic.** **`[type override → quantitative]`** Specimen P3 Q2 is 5 of its 11 marks in two calculations.

### Cluster 02, the effects cluster (LOs b, c, f)

- [ ] **All eight of LO (b)'s named effects as two- or three-link chains.** Melting polar ice caps; rising sea levels; increased frequency of extreme weather events; stress on fresh water supplies; migration of fishes and insects; stress to coral reef ecosystems; stress to seagrass and mangrove ecosystems; release of greenhouse gases from frozen organic matter. The examinable unit is the chain, not the section.
- [ ] **Thermal expansion as the main cause of sea-level rise**, with meltwater from **continental** ice as the second cause.
- [ ] **Why melting sea ice does not raise sea level**: floating ice already displaces a volume of water equal to its own mass. A one-sentence distractor-killer.
- [ ] **The ice-albedo positive feedback loop** as a loop: melting exposes dark water, albedo falls, absorption rises, warming rises, more melts.
- [ ] **The permafrost positive feedback loop** as a loop, with **microbial decomposition** as the release mechanism and **CO2 and CH4** as the products.
- [ ] **Identifying a negative feedback in a supplied web.** Specimen P1 Q28 asks which arrow **reduces** warming; the answer is increased evaporation giving more summer cloud. Positive-feedback identification is a recurring MCQ shape, with one stem reprinted across four schools.
- [ ] **The coral–zooxanthellae symbiosis, both directions.** Algae supply glucose, glycerol and amino acids from photosynthesis, providing most of the coral's nutrition; coral supplies inorganic nitrogen and phosphorus from metabolic waste, plus shelter and UV protection.
- [ ] **Coral bleaching in the correct order**: high temperature disrupts photosynthesis in the zooxanthellae → they stop supplying food → coral metabolism affected → coral **expels the zooxanthellae alive** → white skeleton shows through → starvation and, if prolonged, death. **Recovery is possible if the water cools.**
- [ ] **Ocean acidification in the mark scheme's version, not the school's.** CO2 dissolves → carbonic acid → dissociates releasing H⁺ → H⁺ reacts with **carbonate ions** forming hydrogencarbonate → free **carbonate concentration falls** → corals cannot deposit CaCO3 → calcification slows and skeletons dissolve. See §3 rule 4.
- [ ] **The 1 °C to 2 °C thermal margin** for reef corals, which explains why a small warming has a large biological effect. Transferable to every narrow-tolerance organism in the Book.
- [ ] **Mangrove and seagrass stressors, separately.** Mangroves: flooding duration and salinity beyond a species-specific physiological threshold; extreme-weather uprooting and defoliation; soil salinisation from reduced precipitation; higher temperature at latitudinal limits. Seagrass: thermal limits; **acidification impairing photosynthesis**; changing depth, light availability and substrate.
- [ ] **Fish and insect migration as ectotherm consequences**: distribution is set by ambient temperature, so both shift poleward, to higher altitude, or in fish also to deeper cooler water, to stay within tolerance.
- [ ] **The definition of stress** (LO f): *"any environmental change that acts to reduce the **fitness** of organisms"*, with abiotic and biotic causes. **`[Core Idea bridge → CI 4]`**
- [ ] **The four asymmetries of observed warming**: rate roughly doubled over the century; **polar amplification, Arctic warming twice as fast**; greatest in **winter**; **diurnal range narrowing because minimum temperatures rise about twice as fast as maxima**. The last one is load-bearing for rice yields and for overwintering.
- [ ] **Habitat, organism, food chain and niche occupation as LO (f)'s four targets**, each with a mechanism and at least one named precedent.
- [ ] **Endotherm against ectotherm as a mechanism**, and the **body-size argument**: larger size lowers surface area to volume, lowers heat loss, lowers mass-specific metabolic rate; hence body size rises with latitude and has **decreased measurably as climate warmed**. **The syllabus's own recommended reading names Sheridan and Bickford 2011 on shrinking body size.** `[OFFICIAL]`
- [ ] **Phenology and phenological mismatch.** The mechanism is that two interacting species use **different cues**, one tracking temperature and one not.
- [ ] **The caribou trophic-mismatch case with its numbers**: reproduction cued by day length (invariant), plant growth cued by spring temperature (rose 4.6 °C); plant emergence advanced **14.8 days**, caribou reproduction advanced **1.28 days**; calf mortality rose and calf production varied **fourfold**.
- [ ] **The Arctic fox niche case**: tundra replaced by boreal forest; lemming and vole cycles weakening; **red fox, a superior hunter, encroaching northward**. Competition **and** a changed predator-prey relationship in one example.
- [ ] **Range shift as a rule**: temperature falls with latitude and altitude; **minimum temperatures set the poleward and upper boundaries**; warming moves those isotherms; species track them **to the extent dispersal allows**. Santa Rosa Mountains: 0.4 °C over 30 years, **dominant species rose 65 m**. Northern Alaska: alder, willow and dwarf birch expanding into tundra, 1948 to 2001.

### Cluster 03, insects and mosquito-borne disease (LOs h, i)

- [ ] **LO (h)'s two named mechanisms, separately.** **Increased metabolism**: insects are poikilothermic and ectothermic, so body temperature follows ambient; within limits, higher temperature means faster metabolic reactions because **enzyme-catalysed reaction rate rises**. **Narrow temperature tolerance**: there is an optimum, outside which development rate falls **because extreme temperatures damage the enzymes that regulate metabolism**, and beyond the upper and lower **lethal limits**, death. **`[Core Idea bridge → CI 1 LO q]`**
- [ ] **How metabolic rate is measured**: oxygen consumption or carbon dioxide production.
- [ ] **The optimum-curve shape, not a monotonic rise.** Pea weevil: development time minimum at about 30 °C, rising again above; a pupa takes **5 days at 30 °C and almost 15 days at 40 °C**. Pine false webworm eggs **fail to hatch below 5.8 °C and above 30.3 °C**. Lesser grain-borer CO2 production rises roughly linearly to 30 °C.
- [ ] **The five effects of warming on insects** (A–E): extended geographical ranges, bounded by the upper lethal limit and by dryness; increased overwintering success, because warming raises **winter** temperatures more and **shortens winter by up to 3 weeks**; increased population growth rate, more annual generations and longer development seasons; changed synchrony in pest-host relations, because heat-stressed hosts are more vulnerable; increased poleward migration.
- [ ] **Three quantified insect results.** Svalbard aphid: **2.8 °C** elevation gave an **11-fold increase in overwintering eggs**. Migratory Lepidoptera: **14 extra species per 1 °C** in southwest Europe. Southern pine beetle: two models predicting **396% and 508%** increases in outbreak risk.
- [ ] **The four life-cycle stages of *Aedes aegypti* with phases**: egg, larva, pupa, adult; **aquatic = larva and pupa, terrestrial = egg and adult**; whole cycle roughly **8 to 10 days at room temperature**.
- [ ] **Stage-specific detail**: eggs laid **above the waterline** on container walls and **surviving desiccation for months**; larvae hatch **when water inundates the eggs**, feed, and pass through **four instars**; the fourth instar triggers metamorphosis; pupae are aquatic and **do not feed**; adults emerge after about two days.
- [ ] **Fig. 6.8's three-panel temperature result.** Hatching optimum **25 °C**, significantly higher at 15–30 °C than at 35 and 40 °C. Larval survival highest at **25 °C**, lowest at **40 °C where larvae fail past the first instar**; development time **7 days at 35 °C against 39 days at 15 °C**. Pupal survival highest at **25 °C**, lowest at **35 °C**.
- [ ] **The two-step reading the chapter leaves implicit**: at 40 °C eggs still hatch but larvae die, so the **life cycle** does not complete even though the first stage succeeds.
- [ ] **The four temperature effects on vectors** (LO i): increased activity; **increased biting frequency**, so greater capacity to produce offspring; improved egg and adult survival within the range, with **warmer water shortening larval maturation**; **expanded geographic range in latitude and altitude**.
- [ ] **The three thresholds**: dengue transmission above **10 °C**, malaria transmission above **16 °C**, mosquito death generally above **34 °C**.
- [ ] **The pathogen-side mechanism, which most answers omit.** Warming shortens the time the virus or parasite needs **inside the mosquito** to become infective, so a larger fraction of the vector's life is spent infective. This is the extrinsic incubation period and it is a separate mark from the vector effects.
- [ ] **The distribution limits warming pushes outward**: **35°N to 35°S**, winter temperature no colder than **10 °C**, altitude not above **1000 m**.
- [ ] **The three climate drivers and their directions**: temperature, precipitation, humidity, with **humidity proportionate to vector survival**; wind and daylight duration secondary.
- [ ] **The non-monotonic rainfall argument.** Torrential rainfall and flooding can **reduce** populations by washing out eggs and larvae; **lower** rainfall can **raise** transmission by leaving river pools and by forcing household water storage. Both extremes can raise transmission by different routes. This is the Book's clearest evaluate-level point.
- [ ] **The non-climate driver**: *Ae. aegypti* spends its life around the house where it emerged, so **people, not mosquitoes, move the virus between communities**.
- [ ] **Vector, vector-borne disease and the blood-meal mechanism**, with the one line that justifies the whole outcome: **arthropod vectors are ectotherms and are therefore especially sensitive to climatic factors**.

### Cluster 04, biodiversity, biomedicines and food supply (LOs e, g)

- [ ] **The three levels of biodiversity with one climate impact each.** Genetic: reduced by **directional selection and rapid range shifts shrinking populations and gene pools**. Species: reduced by **phenological mismatch between plants and pollinators** and by **habitat reduction**. Ecosystem: altered by **biome shifts**, Amazon to savannah, boreal and alpine forest into tundra.
- [ ] **Species richness against species evenness** as the two components of species diversity.
- [ ] **Why genetic diversity matters.** **`[Core Idea bridge → CI 4 LOs a, b, e]`** It is *"the raw material for adaptation to local conditions"*; low diversity means a population may lack the variants it needs; low diversity also raises disease vulnerability and inbreeding depression.
- [ ] **Why the tropics specifically** (LO g): most biodiversity concentrations are near the equator; only 10% to 15% of species live in North America and Europe; tropical rainforests hold at least 50% of terrestrial species.
- [ ] **The tropical-ectotherm vulnerability mechanism**: tropical species are **living very close to their optimal temperature**, so a small warming pushes them past it, while temperate species have wider margins. The corpus records this as poorly answered.
- [ ] **Loss of biomedicines with named examples**: rosy periwinkle → **vinblastine and vincristine** for Hodgkin's disease and leukaemia; **AZT** for HIV-AIDS, patterned after compounds from the marine sponge *Cryptotethya crypta*; **gastric brooding frogs** *Rheobatrachus vitellinus* and *R. silus*, extinct in the 1980s, taking a possible ulcer treatment with them. Plus the scale: **about 25% of prescription drugs originally derived from tropical plants**, and undiscovered tropical drugs valued at around **US$150 billion**.
- [ ] **The four-step wild-relative argument** (LO e and g together, and the best-constructed chain in the Book): **90% of food comes from 15 crop species and 8 livestock species**; monocultures are pest-susceptible; **wild relatives carry natural genetic resistance because they faced changing conditions and only the fittest survived, while modern varieties were selected for productivity and lost those genes**; wild relatives are therefore **biological insurance**, transferable by crossbreeding or genetic engineering. Closing link: **most wild crop relatives live in the tropics**, which are most threatened.
- [ ] **Food security's four dimensions**: availability, accessibility, utilisation, stability. Plus **sustainability** defined as using resources no faster than they are renewed.
- [ ] **Direct against indirect impacts on agro-ecosystems.** Direct = modification of **abiotic** factors: mean, maximum and minimum temperature; dry spells and droughts; timing, duration, intensity and location of rain and snowfall; storms and floods; seasonal variability and shifted growing seasons. Indirect = **through other species**: pollinators, pests, disease vectors, invasive species. **Same distinction as LO (a)'s, reapplied.**
- [ ] **The rice heat-stress result with its numbers**: susceptible during the **reproductive and ripening stages**; high temperature during flowering for **even a few hours can cause complete sterility**; **higher night-time minimum temperatures cut yield by up to 5% per 0.5 °C, while maximum daytime temperatures have little effect**. 2003 Yangtze Valley loss: **5.18 million tons over about 3 million hectares**.
- [ ] **The join the notes never make**: minimum temperatures are rising about twice as fast as maxima (chapter 8.4), and it is **minimum** night-time temperature that cuts rice yield (chapter 8.5).
- [ ] **The three indirect crop impacts**: pests, with **reduced winter mortality of aphids enabling earlier and larger dispersion**; weeds, competing for light, water and nutrients and thriving under higher CO2; pathogens, with the *Aspergillus* aflatoxin case and 125 deaths in Kenya in 2004.
- [ ] **Three livestock mechanisms**: heat stress altering heat exchange and **cutting feed intake and therefore productivity** (comfort zone 5–15 °C, milk loss up to 5.5 kg per cow per day, 60% mortality rise in Italy 2010); **increased lignification reducing forage digestibility** even where biomass rises; **rising winter survival of vectors and pathogens**.
- [ ] **The bluetongue mechanism as a transferable precedent**: *Culicoides* midges sensitive to temperature and water; range extended northward; **longer seasonal vector activity increased winter virus persistence**; BTV-8 spread across northern and western Europe. **This is LO (i)'s argument on a non-mosquito vector.**
- [ ] **Fisheries**: aquatic ectotherms; temperature affects **reproductive cycles, growth rate, maturity and spawning timing**; **reduced oxygen availability decreases maximum body weight**, cutting catch potential, with hypoxia-intolerant species such as tuna losing habitat; and the redistribution, **30% to 70% increase in high-latitude catch potential against a drop of up to 40% in the tropics**.

---

## 2.0 MEASURED from the 9477 specimen papers `[OFFICIAL]`, this section outranks §2

Counted question by question and part by part from all four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`). These are the only genuinely Cambridge and SEAB assessment artefacts in the corpus. **They ship without a mark scheme**, so everything here is authoritative about *what was asked* and says nothing about *how it is marked*.

### Where Book 8 landed on the specimen

| Paper | Book 8 questions | Book 8 marks (clear) | With crossovers | Share of that paper |
|---|---|---|---|---|
| **P1** MCQ (30 marks) | **Q26, Q27, Q28** clear; Q30 crossover | 3 | 4 | 10% to 13% |
| **P2** Structured (90 marks) | **Q8 entire (13)** | 13 | 13 | 14.4% |
| **P3** Section A (55 marks) | **Q2 entire (11)** | 11 | 11 | 20% |
| **P3** Section B essay (20 marks) | **none. Both options were Book 1** | 0 | 0 | 0% |
| **P4** Practical (50 marks) | none. All three questions photosynthesis or microscopy | 0 | 0 | 0% |

Applying the official paper weightings of **15%, 30%, 35% and 20%** `[OFFICIAL]` (syllabus p.9):

- clear marks only: 0.15 × (3/30) + 0.30 × (13/90) + 0.35 × (11/75) = **10.97%**
- with the Q30 crossover: **11.47%**

**Book 8 was worth roughly 11% to 11.5% of the whole A-level on the specimen.** `[OFFICIAL]`

**That is the headline finding of this guide and it should change the time budget.** The syllabus says both extension topics together are about **15%** of the curriculum, which implies roughly **7.5%** each if split evenly. **Book 8 measured at about 11%, which is around one and a half times its nominal curriculum share.** For comparison, the Book 3 guide measured that Book at 13% to 16% across a Book with thirteen outcomes and four chapters; Book 8 reached 11% with **nine outcomes and no essay presence at all.** On a per-outcome and per-page basis, **Book 8 is the highest-return Book measured so far.**

Two caveats stated plainly. One specimen is one paper, and a single essay option in Section B would have moved Book 3's figure by twenty marks and Book 8's by the same. And the 11% depends on Book 8 getting a whole 13-mark Paper 2 question and a whole 11-mark Paper 3 question, which is a strong showing that may not repeat.

### What the specimen actually asked (the useful detail)

**Paper 1, the four relevant stems.** `[OFFICIAL]`

| Q | Node tested | LO | Stem type |
|---|---|---|---|
| **26** | Compute CO2-equivalent mass from mass released × 100-year GWP for five gases, then judge four comparative statements | **(a), (d)** | **Data table with five gases. Pure arithmetic, four long-prose options, each a separate calculation.** Note the table gives methane GWP = **28** and N2O = **265**, which are AR5 values; the school teaches AR4's 25 and 298 |
| **27** | Which statement explains the role of mangrove forests in mitigating climate change | **(c)** | Four long-prose mechanisms, one correct. Correct answer turns on **oxygen-poor sediments limiting decomposition**. Distractor B fails on **organic carbon absorbed through roots** rather than CO2 fixed by photosynthesis; C fails on litter being swept to the deep ocean; D fails on mangroves slowing **the rate of sea level rise** |
| **28** | Given a feedback web of warming effects, which effect in the polar regions could **reduce** global warming | **(b)** | **Supplied diagram with two positive feedbacks labelled and one negative feedback labelled.** The candidate must read a feedback network, not recall one |
| **30** | Which conditions increase R0 for viral dengue disease | Ext. A **(j)** stem, **(i)** crossover | One of four options is *"increased rainfall in an area where the disease is always present but occurs at a low frequency"*. **Crossover: an Infectious Diseases concept with a climate option** |

Four structural facts follow, and each changes how to drill.

1. **Not one of the four is plain recall.** Q26 is arithmetic, Q27 is mechanism discrimination across four full paragraphs, Q28 is network reading, Q30 is applying R0 to a climate condition.
2. **Q26 puts a calculation into Paper 1.** Book 3's guide measured Calculation at 0.4% of its corpus and called the subject qualitative. **Book 8 is different: 5.8% of its corpus is calculation, and the specimen put one in the MCQ paper.** The type override in the front matter exists for this.
3. **Q27's three wrong options are each a well-formed, plausible mechanism.** This is a harder discrimination task than a typical MCQ, and it is only answerable by someone who knows **why** mangrove sediment stores carbon, not that it does.
4. **Q28 supplies the feedback loops and asks the candidate to classify them.** Positive against negative feedback is the skill; memorising the ice-albedo loop is not sufficient because the loop is printed on the paper.

**Paper 2 Question 8, the Book 8 anchor. Thirteen marks, five parts**, opening on a diagram of two tropical mountains showing rain-forest vegetation bands at different altitudes during a warm phase and a cool phase.

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | **Suggest** how repeated changes in climate between the warm and cool phases may lead to the **evolution of new species and greater species diversity** | **5** | **Core Idea 4 (j)**, allopatric speciation, reached through a Book 8 stem |
| (b) | **State one** anthropogenic activity that **indirectly** contributes to increases in greenhouse gases **and explain how** | 2 | **(a)** |
| (c)(i) | **Suggest why** the carbon footprint is measured in terms of an **equivalent mass of carbon dioxide** | 2 | **(d)** |
| (c)(ii) | **Explain why bioethanol** has a much lower carbon footprint than oil, coal and gas | 2 | **(d)** |
| (c)(iii) | **State two reasons** why wind power and hydroelectric power have carbon footprints **greater than zero** | 2 | **(d)** |

Four things to take from this, and they are the most useful four facts in this guide.

1. **The largest part of the Book 8 specimen question, at 5 of 13 marks, is not Book 8 content at all.** Part (a) is answered with Core Idea 4 speciation: repeated warm and cool phases fragment the rainforest into isolated mountain-top populations, gene flow between them stops, each population experiences different selection pressures and accumulates different mutations, and over time reproductive isolation produces new species; repeated cycles repeat the process. **A candidate who revised Book 8 as environmental science had nothing to write for 38% of the question.** This is the assimilation clause made concrete.
2. **Part (b) is the direct-against-indirect distinction, worth 2 marks, and it is stated in the stem.** The stem itself says *"Some of these activities, such as generating electricity, act directly... Others act indirectly."* The candidate must supply an indirect one **and** the mechanism. Deforestation works because removing trees removes a **sink**, so less CO2 is taken out by photosynthesis, even though the clearing released nothing.
3. **All three parts of (c) are on LO (d), and none asks for a number.** They ask why the unit exists, why one source is low, and why "zero-emission" sources are not zero. **LO (d) says "relative differences" and the specimen took it literally.**
4. **Part (c)(iii) is a life-cycle question in disguise.** Wind and hydro emit nothing at generation, so the two marks come entirely from **upstream construction, manufacturing, materials and transport**. A candidate who only knows the bar chart cannot answer it.

**Paper 3 Question 2, eleven marks, four parts**, opening: *"Trees remove carbon dioxide from the atmosphere and store this carbon in their biomass in the long term. This long-term storage of carbon is called **carbon sequestration**."*

| Part | Ask | Marks | Primary LO |
|---|---|---|---|
| (a) | **Identify three biomolecules** in which carbon may be sequestered in a tree | 3 | **Core Idea 1 biomolecules**, in a Book 8 stem |
| (b) | **Calculate** the mean mass of carbon sequestered by a single rain tree in one year, from a two-row table, in kg to 3 s.f. | **2** | **(c)/(d)**, arithmetic |
| (c)(i) | **Calculate** the percentage of car-released carbon offset by urban trees, from four supplied figures | **3** | arithmetic |
| (c)(ii) | With reference to your answer to (c)(i) and any other relevant aspects, **comment on** the benefits to the environment of planting urban trees in Singapore | 3 | **(c)**, evaluate |

**Three things this question establishes.**

1. **Five of eleven marks are arithmetic**, and both calculations are multi-step with unit conversions (tonnes to kg, percentage of a percentage). The answer to (c)(i) is about **0.59%**, which is deliberately small.
2. **The stem defines "carbon sequestration" for the candidate.** The term returns **zero** hits in the syllabus in any spelling. The examiner knew that and supplied it. See §5's "loses the word, keeps the biology" list.
3. **Part (c)(ii) is an evaluate question whose expected answer is sceptical.** The calculated offset is under 1%, so the honest comment is that urban trees cannot by themselves offset Singapore's emissions and that **reducing emissions at source matters far more**, qualified by the fact that the calculation counts only one year of fixation while the carbon stays in the wood for the tree's life, and by the other benefits (evaporative cooling and the urban heat island, particulate trapping, habitat, soil binding and run-off). **A candidate who says "trees are good for the environment" has not answered it.** This is the clearest signal in the whole specimen that Book 8's discuss and comment questions expect a **judgement against the data**, not enthusiasm.

**Paper 3 Section B.** The two essay options were Q4 on the roles of proteins and Q5 on the entry of molecules into cells. **Both Book 1.** A candidate who had studied only Book 8 had no essay to write. This is identical to the Book 2 and Book 3 findings and it cuts the same way. See §2 for the tension with the school corpus, which files 17 essay-scale Book 8 stems.

**Paper 4.** Zero Book 8 content across all three questions, which were light intensity and the rate of photosynthesis, stomatal density under a microscope, and a photosynthesis planning question. **All three are Core Idea 3 photosynthesis, which is the Core Idea Book 8 leans on hardest.** No Book 8 practical exists, and none is likely: the topic has no practical technique of its own.

---

## 2. Question Archetypes and Distribution (MEASURED, not estimated)

Measured by parsing every record in `Study Agent/Bio/_question_bank/Climate_Change.md` plus its overflow file. Every record is a real question off a real paper, which is a JC prelim, an HCI topical bank, a timed practice paper or the 9477 specimen. Sources span 2013 to 2025 plus the specimen.

### Sample size, and an honest warning about it

| Bank file | Main bank | Overflow | Total |
|---|---|---|---|
| Climate_Change | **517** | 0 usable (4 tagged off-9477) | **517** |

**n = 517 real questions.** `[SCHOOL]` corpus, measured counts.

**Two things about this sample that Ethan needs to know before trusting anything below.**

First, **it is roughly a quarter the size of Book 3's corpus** (517 against 1955). Book 8 has one topic file where Book 3 had four. Percentages below are stable to about ±2 points at this n for the large categories and are unreliable below about 3%.

Second, and more consequentially: **the overflow file is empty.** It reads *"0 real questions not selected, plus 4 tagged off-9477."* Every Book 3 topic file had hundreds of records in overflow, meaning the main bank was a curated selection from a much larger pool. **Book 8's main bank is not a selection; it is everything that was found.** That is the finding, and it means the corpus is not quota-limited but supply-limited. **There are fewer real Book 8 questions in existence than for any Core Idea topic, and that itself is information: prelim setters have historically under-tested this topic relative to its specimen weight.**

Third, on corpus age: **246 of the 517 records (47.6%) come from 2017 and 2018 prelims**, which predate the 9477 rollout. That is the highest pre-9477 concentration of any Book measured. It matters less here than it would elsewhere, because the extension topic's content changed less between syllabuses than the Core Ideas did, but it is why the mark-scheme confidence in the front matter is capped at ~75% rather than Book 3's ~80%.

### Format split

| Measure | Full corpus (n=517) | Book 3, for comparison |
|---|---|---|
| MCQ | **20.3%** | 33.7% |
| Structured | **79.7%** | 66.3% |
| **Figure, table or data-led** | **52.6%** | 35.9% |

Difficulty tiering as the bank labels it: base 23.4%, harder 47.0%, hardest 29.6%.

Paper of origin: **P3 40.0%, P2 39.0%, P1 20.3%, P4 0.2%**, with 0.6% unattributed.

**Figure-led at 52.6% is the headline format finding and it is the highest of any Book measured.** More than half of every Book 8 question hands you a graph, a map, a table or a data set and makes you work from it. The bank's own preamble says so: *"almost every question is data-response"*. **Any drill set for this Book that is more than about 40% text-only is not modelling the exam.** The specimen agrees: three of its four Book 8 items (P1 Q26's gas table, P1 Q28's feedback web, P2 Q8's mountain diagram and footprint table, P3 Q2's sequestration table) are built on supplied data.

**The P3 share at 40.0% is also the highest of any Book measured**, and it is consistent with the specimen putting an 11-mark Book 8 question into Paper 3 Section A. Book 8 is a **long-structured-question** topic more than an MCQ topic.

### Command-word census (structured questions only, n = 412)

| Command | Count | Share |
|---|---|---|
| **Explain** | 105 | **25.5%** |
| **Suggest** | 92 | **22.3%** |
| **Describe** | 89 | **21.6%** |
| **Discuss** | 28 | **6.8%** |
| State | 21 | 5.1% |
| **Calculate** | 16 | **3.9%** |
| Predict | 8 | 1.9% |
| Outline | 7 | 1.7% |
| Comment (on) | 7 | 1.7% |
| Account for | 6 | 1.5% |
| Define | 5 | 1.2% |
| Complete | 5 | 1.2% |
| (no command verb) | 5 | 1.2% |
| Identify / Compare | 8 | 1.9% |
| Name / deduce / evaluate / draw / distinguish / justify | 10 | 2.4% |
| **[constraint] "with reference to" or "use the data"** | **103** | **25.0%** |

**Explain, Suggest and Describe together are 69.4% of every structured part in Book 8.** Four points follow.

First, **"with reference to" and "use the data" at 25.0% is nearly double Book 3's 13.3%**, and it is not a command word, it is a constraint: the answer must quote the figure. The corpus records the penalty repeatedly. One scheme says the answer is *"rejected without the quote"*; another instructs that *"relevant supporting data must be quoted"*; a third specifies the granularity: **"Each point must include duration, coral coverage % and temperature in °C. No mark is awarded for any point where the wrong graph or axis is read from."** `[SCHOOL]` **A quarter of the structured marks in this Book are gated on quoting data correctly.**

Second, **Suggest at 22.3% is the highest of any Book measured** (Book 3's was 12.0%). Suggest signals there is no recall answer available. In Book 8 it almost always means an unfamiliar organism, an unfamiliar ecosystem, an unfamiliar crop or an unfamiliar data set, and the mechanism has to be transferable. The specimen agrees: two of P2 Q8's five parts open **Suggest**, including the 5-mark speciation part.

Third, **Discuss at 6.8% is more than four times Book 3's 1.5%**, and it reflects that **three of the nine outcomes (e, f, g) use the command word "discuss" in their own wording**. Add the seven "comment on" parts and the two "evaluate" parts and roughly **9% of structured parts want a judgement**. That is a genuinely different demand from the Core Ideas.

Fourth, **Calculate at 3.9% is nearly eight times Book 3's 0.5%**, and the specimen put calculations into both P1 and P3. This is why the front matter carries three quantitative overrides.

### Content archetypes

Each question classified into exactly one primary archetype by first matching rule.

| Archetype | Full corpus | What it demands |
|---|---|---|
| **Data / figure interpretation** | **49.7%** | Describe the trend with figures and units quoted, then account for it. **Half the Book.** |
| **Mechanism explain-chain** | **14.9%** | Cause to effect, one mark per link, run forwards |
| **Recall / state / define / describe** | **13.0%** | Definitions of carbon footprint, food security, biodiversity levels, life-cycle stages |
| Unclassified | 9.3% | Short completions and one-line identifications |
| **Calculation** | **5.8%** | Rate of change, percentage change, CO2e, offsets |
| **Evaluate / discuss** | **4.1%** | Take a stance, substantiate with the data, handle the counter-argument |
| Predict / apply to novel case | 2.7% | |
| Compare / distinguish | 0.6% | |

**Data interpretation alone is essentially half the Book, and it is a bigger single share than any archetype in any Book measured so far** (Book 3's largest was 33.5%). Data interpretation plus mechanism chain is **64.6%**. Those two archetypes should carry about two of every three drill questions, weighted heavily toward the first.

### Archetype by concept heading (full corpus)

| Concept heading | n | Dominant | Second | Third |
|---|---|---|---|---|
| Effects on the physical environment: sea level, ice, extreme weather, coral | **165** | **Data/figure 52%** | Mechanism chain 16% | Unclassified 10% |
| Habitats, niches, range shifts and food chains | **135** | **Data/figure 61%** | Unclassified 11% | Mechanism chain 10% |
| Temperature, insects and mosquito-borne disease | **69** | **Data/figure 55%** | Mechanism chain 16% | Recall 14% |
| Human activities and accumulation of greenhouse gases | **67** | Data/figure 33% | **Recall 31%** | Mechanism chain 16% |
| Environmental stress and the sustainable food supply | **44** | **Data/figure 48%** | Mechanism chain 25% | Evaluate/discuss 14% |
| Mangroves, blue carbon and carbon sequestration | **13** | **Calculation 54%** | Recall 23% | Data/figure 15% |
| Biodiversity of the tropics and reservoir for biomedicines | **13** | Unclassified 31% | Data/figure 23% | Calculation 15% |
| Carbon footprints of energy and food production | **11** | **Mechanism chain 36%** | Calculation 27% | Data/figure 27% |

**Five chapter-level facts worth acting on.**

1. **The habitats and niches heading is the most figure-led block in the entire Bio corpus at 61%.** The typical stem is a range-shift graph, a species-richness box plot, a food-web diagram or a phenology time series. Reciting the caribou case is not what gets tested; reading a new mismatch off a new graph is.
2. **The greenhouse-gases heading is the one place in Book 8 where recall is genuinely common at 31%.** Definitions of carbon footprint, carbon sink and carbon source, and naming activities and gases, can be asked cold. It is also the heading with the largest number of 1-mark parts.
3. **The three headings that map to LOs (c), (d) and (g) hold only 37 of 517 records between them, 7.2% of the corpus.** That is a real under-representation, and it is exactly where the specimen concentrated: **P1 Q27 is LO (c), all three parts of P2 Q8(c) are LO (d), and P3 Q2 is LO (c) arithmetic.** **The corpus under-tests precisely what the specimen tested most.** Trust the specimen here, not the corpus. This is the single most important disagreement between the two evidence sources in this Book.
4. **The mangroves and sequestration heading is 54% calculation.** Small n (13), so treat the percentage loosely, but the direction is corroborated by the specimen's P3 Q2 putting 5 of 11 marks into arithmetic on exactly this node.
5. **The food-supply heading carries the highest evaluate share at 14%**, consistent with LO (e) using the word "discuss".

### Essay presence, and the same tension the earlier Books had

Counting distinct question parts worth 10 marks or more:

- **17 essay-scale stems in the Book 8 corpus**, all Paper 3 Section B.
- Spread across 2017, 2018, 2022, 2023, 2024 and 2025 with no quiet period. `[SCHOOL]`

Recurring stems, verbatim, that show the shapes setters like:

- *"With reference to the life cycle of *Aedes aegypti*, describe the impact of temperature on the mosquito vector and dengue transmission."* [15] MI Prelim 2023 P3 Q4b
- *"Discuss the extent to which increased temperature leads to the increase in dengue transmission."* [15] MI Prelim 2018 P3 Q4b
- *"Describe the life cycle of *Aedes aegypti* and discuss the possible impacts of global warming on geographical patterns of dengue."* [12] ASRJC Prelim 2022 P3 Q5b
- *"Discuss the effects of climate change (as a result of greenhouse gas emissions)."* [13] SAJC Prelim 2017 P3 Sec B Q4b
- *"Greenhouse gases are key contributors to climate change affecting animals and plants in the environment they live in. Discuss the effects of climate change..."* [13] IJC Prelim 2017 P3 Q3a
- *"Discuss whether you agree or disagree that the impacts of human activity on climate change will lead to the greater..."* [15] RI Prelim 2023 P3 Q4a
- *"Discuss how photosynthesis plays a critical role in sustaining life on earth. You should consider both specific processes in photosynthesis that sustain life and **its role in reducing the impact of climate change**."* [15] SRJC Prelim 2018 P3 Q3b
- *"Explain how humans have changed the levels of global respiration via economic activities and this has contributed to climate change."* [15] SRJC Prelim 2018 P3 Q4b
- *"Climate change has been attributed to a rise in carbon dioxide levels, which may affect organisms directly or indirectly. Explain how an increase in..."* [15] MJC Prelim 2018 P3 Q4b
- *"Photosynthesis and respiration are two fundamental biological processes that involve transformation of energy. Explain how climate change might impact..."* [12] TMJC Prelim 2025 P3 Q5b
- *"The effects of global warming on the spread of malaria beyond the tropics is a debatable issue. Discuss the arguments/evidences that support your stand."* [12] SAJC Prelim 2017 P3 Sec B Q4a

**The pattern is unambiguous and it is different from Books 2 and 3.** Book 2's essays were property-led and Book 3's were bridge-led between two Book 3 topics. **Book 8's essays are Core-Idea-bridged.** Of the 17, **six are explicit photosynthesis or respiration crossovers**, five are *Aedes* and dengue, and three are open "discuss the effects of climate change" sweeps of LO (b). The preparation is therefore three rehearsed bridges, not chapter revision:

1. **Photosynthesis and respiration to the carbon cycle to climate change.** Carbon fixation, carbon sinks, decomposition, and how anthropogenic activity unbalanced the cycle. **Six of seventeen.**
2. ***Aedes aegypti*'s life cycle to dengue transmission to poleward and altitudinal spread.** Life cycle plus temperature plus vector effects plus the pathogen-side extrinsic incubation argument. **Five of seventeen.**
3. **A sweep of LO (b)'s eight effects**, each as a chain, with named ecosystems and data.

And one more that appears once but matters, because the specimen's own P2 Q8(a) is its short form: **climate change as a selection pressure driving speciation and extinction.**

**The honest tension.** The corpus files 17 essay-scale Book 8 stems, and the *Aedes* essay alone recurs in three different years at three different schools. The official specimen gave Book 8 no essay at all, offering two Book 1 options. Both are true. **The specimen is one paper. Do not conclude from it that a Book 8 essay is impossible, and do not conclude from the corpus that one is coming.** The cheapest insurance is that all three bridges above are worth building for their Core Idea value regardless.

---

## 3. Mark Scheme Logic (this topic specifically)

> **Hard cap on this whole section.** SEAB publishes no 9477 mark scheme, and the 9477 specimen papers in the corpus arrive without one. Every marking claim below is `[SCHOOL]`, distilled from JC prelim schemes reproduced verbatim in the question bank. They are expected to be broadly representative of Cambridge house style, not identical to it. Quoted reject and accept lines are verbatim from those schemes. This cap is tighter here than in Book 3 because **47.6% of the Book 8 corpus predates 9477**.

**1. Data answers must quote the data, and Book 8's schemes specify the granularity.** With 25.0% of structured parts opening "with reference to" or "use the data", this is the largest single block of mark surface in the Book. One coral scheme is explicit about what a quote must contain: *"**Each point must include duration, coral coverage % and temperature in °C. No mark is awarded for any point where the wrong graph or axis is read from.**"* The examiner's comment on the same question adds *"a common mistake was **reading off the wrong axes and graphs**"*. Another scheme instructs that *"Students are reminded that **merely lifting the values from the graph is insufficient for full credit**. Stronger responses made **comparisons across different temperatures**."* `[SCHOOL]` **Quote a value, its unit and its interval, then account for it.**

**2. Units must be copied exactly, including compound and per-unit denominators.** From a biodiversity examiner comment: *"Many students were not able to **accurately copy the units for the y-axis, often missing out 'per °C'**. While most cited data from the y-axis, **many did not clearly state if the data they quoted was the median or the 25th to 75th quartile**."* `[SCHOOL]` Book 8's figures carry unusual units (g CO2e kWh⁻¹, g CO2e MJ⁻¹, Tg C m⁻², µmol m⁻² h⁻¹, % richness change per °C) and the schemes police them.

**3. Statistical vocabulary is enforced where a figure uses it.** The same scheme rejects *"mean"* and *"average"* where the box plot showed a **median**, and separately rejects *"richness"* where the scheme wanted *"number of species"*. `[SCHOOL]`

**4. The ocean acidification chain must go through carbonate ions, and the school's own notes do not.** The schemes give the full chain: CO2 dissolves, forms carbonic acid, **dissociates releasing H⁺**, **H⁺ reacts with carbonate ions to form hydrogencarbonate**, **free carbonate concentration falls**, corals cannot deposit CaCO3, calcification slows and skeletons dissolve. The school's page 62 says only that *"corals cannot absorb the calcium carbonate they need"*, which is chemically wrong. `[SCHOOL]` **Learn the scheme's version. See digest §5.6 for chapter 8.3.**

**5. Zooxanthellae are expelled alive, and the opposite is a recorded misconception.** Verbatim examiner comment: *"**many students think zooxanthellae first die or have their enzymes denatured due to heat and are then expelled**"*, and that *"**is mainly not true, as they are expelled while still alive.** Death of corals does not lead to bleaching; rather, **prolonged coral bleaching can lead to corals dying**."* `[SCHOOL]` The school's notes get this right; most candidates do not.

**6. Corals cannot migrate, and answers that let them are rejected.** A scheme states *"**Reject 'corals migrate to cooler waters like marine fish', as corals are mainly sessile**"*. `[SCHOOL]` This is the one place where the fish-and-insect migration answer must **not** be transferred.

**7. Direct and indirect causes are distinguished and mis-assignment is rejected explicitly.** From a bird-decline scheme: *"**Reject: enlarging cities / choice of food, as these cause deforestation and so are indirect causes**"* when a **direct** anthropogenic cause was asked for. `[SCHOOL]` The same distinction runs the other way on **Specimen P2 Q8(b)**, which asks for an **indirect** activity. `[OFFICIAL]` **Read which one the question wants.**

**8. Naming a human activity is not enough; the activity must be tied to a gas or a mechanism.** A scheme states *"**Anthropogenic activities**, or give an **example of a human activity (i.e. burning of fossil fuels, deforestation, food choices) that releases CO2**. (**Reject "human activities" alone.**)"* `[SCHOOL]`

**9. The greenhouse mechanism has a compulsory point in some schemes.** One scheme lists three alternative human activities as "any one of the following" and then adds: *"**Compulsory point: greenhouse gases absorb long-wave / infrared radiation, trapping/holding heat within the atmosphere**."* `[SCHOOL]` **The mechanism sentence is required even in a question that appears to be about activities.**

**10. Biofuel carbon neutrality is protected in both directions.** Two rejects from one scheme: *"**Reject: biofuels make a large contribution to worsening global warming (they are supposed to be carbon neutral).**"* and *"**Reject: burning of biofuel releases large net amount of carbon dioxide into the atmosphere, since biofuel is supposed to be carbon neutral.**"* `[SCHOOL]` The permitted criticism is the **carbon debt from harvesting, processing and transport**, not the combustion itself.

**11. Evaluate questions require an explicit stance, and both-sides answers are penalised.** From a scheme's own commentary: *"Students are expected to **take an explicit stance** and substantiate with relevant data throughout the question as well as their own knowledge. **Weaker responses included contradictory data in an attempt to discuss both sides of the argument, but this would not satisfy the requirements of the question.**"* The same scheme rejects the absolute version, *"R: cannot help to reduce ocean acidification"*, in favour of the qualified *"to a limited extent"*. `[SCHOOL]` **Take a side, qualify it, and use the counter-evidence to bound your claim rather than to contradict it.**

**12. Name the specific process, not the umbrella process.** From the same scheme: *"Students are also reminded to **name specific processes such as 'carbon fixation' and 'light-dependent reactions' instead of leaving it broadly as 'photosynthesis'**."* And a reject line: *"ref. to **less carbon dioxide is absorbed from the ocean for carbon fixation**; **R: photosynthesis**."* `[SCHOOL]` **This is a Core Idea 3 precision requirement enforced inside a Book 8 question.**

**13. Insect answers must state a direction of change, not just an effect.** Verbatim: *"This question was poorly done where the majority **did not provide explanations but merely stated the impacts**. Students should note that **using the term 'affect' is vague, and they should specify the direction of change (e.g. increase/decrease) instead**."* `[SCHOOL]` The same scheme's model answer pairs every effect with its consequence: increased metabolic rate **→ increased activity, reproductive rate, shortened maturation, increased population size**.

**14. The dengue-spread answer has a specific rejected phrasing.** A scheme accepts *"warmer winter temperature in temperate region"* and states *"**Reject: 'temperate region is cooler'**"*. `[SCHOOL]` The mark is for the **change**, not for the baseline state.

**15. Calculations need headings, formulas, working and the stated significant figures.** From a sequestration scheme: *"**Max 1m if no headings at all.** I: no units for MP1. Common errors include (1) **not writing any headings and/or formulas**, (2) **giving the final answer to 2 s.f. instead of 3 s.f.** and (3) **multiplying 8.6 by 4 or 6 instead of 5**."* `[SCHOOL]` **Specimen P3 Q2(b)** likewise says *"Show your working and give your answer in kilograms (kg) to **three significant figures**."* `[OFFICIAL]`

**16. Tropical species vulnerability must be framed as proximity to the tolerance limit.** From an examiner comment on a poorly answered part: *"A handful of students mentioned that the **temperature tolerance range of species is narrower in tropical regions** (or wider in temperate regions). Some incorrect suggestions included **a milder increase in temperature of the temperate region, even though the richness change was already calculated per °C**."* `[SCHOOL]` The correct frame is that tropical species already sit **close to their optimum**, so a given warming pushes more of them past it.

**17. Command-word discipline, as it bites in this Book specifically.** *Describe* wants the trend with quoted data and nothing about why. *Explain* wants the causal chain with each link separate. *Suggest* signals that no recall answer exists and the mechanism must be transferred. *Discuss* and *comment on* want a stance plus substantiation plus a bounded counter-argument, per rule 11. *State* on Specimen P2 Q8(b) was worth 2 marks for an activity **and** its explanation, so "state" did not mean one word. `[OFFICIAL]` glossary meanings, `[SCHOOL]` marking behaviour.

---

## 4. Trap Model (this topic specifically)

Every generated distractor must encode one of these real, file-traceable traps. No invented distractors. Sources are the mark schemes reproduced in the question bank, the 9477 syllabus, the 9477 specimen, and the errors found in the school's own notes.

### Scope traps, which cost time rather than marks

| Trap | The misconception | What it produces | Source |
|---|---|---|---|
| **Studying the whole of chapter 8.1** | Assumes the first chapter is foundational because it comes first | 26 pages with **no outcome behind them** except three pages. *Albedo*, *biome*, *greenhouse effect*, *weather*, *climate system*, *endemic species*, *trophic level*, *El Niño*, *ENSO*, *food web* and *permafrost* return **zero** syllabus hits across every spelling variant | 9477 syllabus, audit §5 `[OFFICIAL]` |
| **Studying natural causes of climate change** | Sees four pages on orbital cycles, ENSO and volcanoes | LO (a) is explicit that the outcome is about **anthropogenic** activities, and the school's own page 25 says orbital change is *"not thought to play any significant role on the shorter timescales relevant to modern climate change"* | LO (a) `[OFFICIAL]` |
| **Studying nitrous oxide as an accumulation gas** | Sees four pages on N2O with a GWP of 298 | LO (a) says **"limited to CO2 and methane"**. Keep one line for indirect-activity answers; build no node | LO (a) `[OFFICIAL]` |
| **Studying DENV virology** | Treats the dengue virus genome, serotypes and gene counts as content | The school's own concept map marks the whole branch **"FYI: not in 9477 syllabus"** | school notes 8.6 p.124 `[SCHOOL]` |
| **Studying the dengue host immune response** | Treats viremia, antigen-presenting cell types and the acute/critical/recovery phases as Book 8 content | The school's own concept map marks the branch **"KIV: ETA (Infectious Diseases)"**. If examined, it is examined there | school notes 8.6 p.124 `[SCHOOL]` |
| **Studying epidemic, outbreak and epidemiology here** | Sees them in chapter 8.6's terminology block | These belong to **Extension Topic A LO (k)**, which also names **pandemic**, a term the school's list omits | Ext. A LO (k) `[OFFICIAL]` |
| **Studying bluetongue virology** | Sees a full page and a map on BTV serotypes | *Bluetongue* returns **zero** syllabus hits. Keep the **vector range expansion mechanism**; drop the 24 serotypes, the restriction-zone map and the reassortment discussion | 9477 syllabus `[OFFICIAL]` |
| **Studying environmental ethics and sustainability advocacy** | Sees chapter 8.1's active-citizenry framing and chapter 8.5's intrinsic-rights sentence | **There is no bioethics outcome anywhere in Extension Topic B**, and bioethics is dropped from all Bio material by standing instruction. Chapter 8.5's own next sentence supplies the examinable framing: biodiversity loss matters *"because of the many tangible, pragmatic ways that biodiversity benefits people"* | 9477 syllabus, standing rule `[OFFICIAL]` |
| **Hunting the ten Google-Classroom named examples** | Chapter 8.4's concept map names all of them as if taught | Ten named examples in chapter 8.4 and four in chapter 8.5 are **withheld and not in the notes**. The mechanism plus the printed examples covers the outcome | school notes, digest 8.4 §5.2 `[SCHOOL]` |

### Content traps

| Trap | The misconception | The wrong answer it produces | Source |
|---|---|---|---|
| **"Retain" used for what greenhouse gases do** | Copies the school's page 23 gloss *"absorb (i.e. retain)"* | Loses the re-emission step, which is the whole mechanism. The gases absorb longwave radiation and **re-emit** it, some of it downward. The school's own page 24 says so | school notes 8.1 p.23, digest §5.9 `[INFERRED]` |
| **Melting sea ice said to raise sea level** | Generalises "ice melts, sea rises" | Floating ice **already displaces its own mass of water**. Only **land** ice raises sea level | 8.3 p.51 `[SCHOOL]` |
| **Thermal expansion omitted from sea-level rise** | Names only meltwater | The school states **thermal expansion of seawater is the main cause**. An answer with only meltwater is missing the larger term | 8.3 p.53 `[SCHOOL]` |
| **Zooxanthellae said to die or denature before expulsion** | Assumes heat kills the algae | Explicit examiner comment: they are **expelled while still alive**, and bleaching precedes coral death rather than following it | coral scheme `[SCHOOL]` |
| **Corals said to migrate to cooler water** | Transfers the fish-migration answer | Explicit reject: *"corals are mainly sessile"* | coral scheme `[SCHOOL]` |
| **Ocean acidification described as corals "absorbing less calcium carbonate"** | Copies the school's page 62 wording | Chemically wrong. The chain runs through **H⁺ reacting with carbonate ions**, lowering **free carbonate**, so **calcification slows** | school notes 8.3 error, digest §5.6 `[SCHOOL]` |
| **"The pH fell by 30%"** | Copies the school's page 62 phrasing *"about 30% more acidic"* | pH is logarithmic. What rose 30% is the **hydrogen ion concentration**; the pH fell about **0.1 units** | school notes 8.3, digest §5.7 `[INFERRED]` |
| **Coal named as the highest carbon footprint regardless of the table given** | Copies the school's Fig. 2.12 ranking | **9477 Specimen P2 Q8(c) Table 8.1 ranks oil (1000) above coal (800) in g CO2e MJ⁻¹.** The school's claim is about **direct combustion per unit energy**; the specimen's table is **life-cycle**. LO (d) says "relative differences", so **rank from the table you are given** | 9477 Specimen `[OFFICIAL]`, school notes 8.2 §5.6 |
| **Memorised GWP substituted into a supplied table** | Learns methane GWP = 25 from the school | **Specimen P1 Q26 prints methane GWP = 28 and N2O = 265** (AR5). The school teaches 25 and 298 (AR4). Both are published; **use the paper's number** | 9477 Specimen `[OFFICIAL]`, school notes 8.2 §5.3 |
| **Wind and hydro said to have zero carbon footprint** | Reads "no CO2 at generation" as "no CO2" | **Specimen P2 Q8(c)(iii)** asks for two reasons the footprint exceeds zero. Emissions come from **construction, manufacturing, materials and transport**, upstream of generation | 9477 Specimen `[OFFICIAL]` |
| **Bioethanol attacked for its combustion emissions** | Misses the carbon-neutrality argument | Two explicit rejects. The permitted criticism is the **carbon debt from harvesting, processing and transport**, not combustion | biofuel scheme `[SCHOOL]` |
| **Trees said to absorb organic carbon through their roots** | Confuses uptake with fixation | This is **Specimen P1 Q27 distractor B** exactly. Trees fix **atmospheric CO2 by photosynthesis** | 9477 Specimen `[OFFICIAL]` |
| **Mangroves said to slow the rate of sea level rise** | Confuses buffering the consequence with mitigating the cause | This is **Specimen P1 Q27 distractor D** exactly. Mangroves buffer waves and surge; they do not slow sea level rise | 9477 Specimen `[OFFICIAL]` |
| **Mangrove carbon storage explained without the oxygen argument** | Says "roots trap sediment" and stops | The mark-bearing step is that the sediment is **waterlogged and oxygen-poor, so decomposition is slow** and carbon stays locked away. This is **Specimen P1 Q27's correct option** | 9477 Specimen `[OFFICIAL]` |
| **A human activity named without a gas or mechanism** | Answers "human activities" or names deforestation and stops | Explicit reject of *"human activities"* alone; the scheme requires an activity **plus** the gas it releases | activity scheme `[SCHOOL]` |
| **Indirect cause given where direct was asked, or the reverse** | Ignores which word the question used | Explicit reject: *"Reject: enlarging cities / choice of food, as these cause deforestation and so are **indirect** causes"*. **Specimen P2 Q8(b)** asks for indirect | prelim scheme + 9477 Specimen `[SCHOOL]`/`[OFFICIAL]` |
| **"Warmer means more insects", monotonically** | Reads LO (h)'s metabolism clause and stops | LO (h) also says **narrow temperature tolerance**. The pea weevil's development time **rises again above 30 °C**; webworm eggs **fail above 30.3 °C**; *Aedes* larvae **die past the first instar at 40 °C**. The curve has an optimum | LO (h) `[OFFICIAL]`, 8.4 pp.94–95, 8.6 p.130 |
| **Insect impacts stated without a direction** | Writes "temperature affects the mosquito" | Explicit examiner comment: *"using the term 'affect' is vague, and they should **specify the direction of change**"* | insect scheme `[SCHOOL]` |
| **The pathogen-side mechanism omitted from a dengue spread answer** | Names only vector effects | Warming also **shortens the extrinsic incubation period**, so the virus becomes infective inside the mosquito faster and a larger fraction of the vector's life is infective. Two separate mark points | 8.6 p.133 `[SCHOOL]` |
| **"Temperate region is cooler" given as the reason for poleward spread** | States the baseline rather than the change | Explicit reject. The mark is for **warmer winter temperatures in the temperate region** | dengue scheme `[SCHOOL]` |
| **10 °C given as the temperature that kills Aedes eggs** | Copies the school's page 133 sentence | The chapter's own study tested only down to 15 °C, and page 128 says eggs **survive desiccation for months**. Quote 10 °C as the limit for **transmission and adult survival** | school notes 8.6, digest §5.2 `[SCHOOL]` |
| **All dengue spread attributed to warming** | Forgets the human-movement driver | The school states that *Ae. aegypti* stays around the house where it emerged, so **people, not mosquitoes, move the virus between communities**. A scheme's model answer includes human movement | 8.6 p.132 `[SCHOOL]` |
| **More rain assumed always to mean more mosquitoes** | Reads the humidity and precipitation drivers monotonically | **Torrential rainfall washes out eggs and larvae**, and **lower rainfall can raise transmission** by leaving river pools and forcing water storage. Both extremes | 8.6 p.132 `[SCHOOL]` |
| **Malaria's four Plasmodium species** | Copies the school's page 133 | Five species infect humans; ***P. knowlesi*** has been recognised since 2004 and is dominant in parts of Malaysian Borneo | school notes 8.6, digest §5.1 `[INFERRED]` |
| **Data described without quoting values, units or intervals** | Writes "coral cover decreased as temperature increased" | Explicit scheme: **each point must include duration, coverage % and temperature in °C**, and no mark where the wrong axis was read | coral scheme `[SCHOOL]` |
| **Median reported as mean, or "richness" used where "number of species" was wanted** | Reads a box plot loosely | Explicit rejects of *"mean"*, *"average"* and *"richness"*, plus the *"per °C"* unit omission | biodiversity scheme `[SCHOOL]` |
| **"Photosynthesis" given where the specific stage was wanted** | Names the umbrella process | Explicit reject: *"R: photosynthesis"* where **carbon fixation** was wanted, plus the reminder to name **light-dependent reactions** specifically | seaweed scheme `[SCHOOL]` |
| **Both-sides answer given to an evaluate question** | Tries to be balanced | *"Weaker responses **included contradictory data in an attempt to discuss both sides**, but this would not satisfy the requirements."* Take a stance, then bound it | evaluate scheme `[SCHOOL]` |
| **Calculation shown without headings, formula or the stated s.f.** | Writes only the final number | *"Max 1m if no headings at all"*, plus recorded errors on 2 s.f. instead of 3 and on the wrong multiplier | sequestration scheme `[SCHOOL]` |
| **Tropical vulnerability explained by "the tropics warm more"** | Reaches for the wrong asymmetry | The tropics warm **less** than the poles. The mechanism is that tropical species already live **close to their optimum**, so a given warming pushes more of them past it. And the corpus's box plot already normalised per °C | biodiversity examiner comment `[SCHOOL]` |
| **Speciation question answered with climate content** | Treats a Book 8 stem as a Book 8 question | **Specimen P2 Q8(a), 5 marks**, wants **allopatric speciation**: isolation, no gene flow, different selection pressures, different mutations, reproductive isolation, repeated over cycles | 9477 Specimen `[OFFICIAL]` |
| **Carbon sequestration named without naming biomolecules** | Says "stored in biomass" | **Specimen P3 Q2(a), 3 marks**, wants **three named biomolecules**: cellulose, lignin, starch, or protein or lipid | 9477 Specimen `[OFFICIAL]` |

---

## 5. High-Yield and Low-Yield Flags

### The scope audit, done by literal search of the 9477 syllabus PDF

Hit counts are exact, case-insensitive, whole-syllabus, on the 28-page PDF at `inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`. `[OFFICIAL]` Where a term appears, the outcome that carries it is quoted.

**METHOD NOTE, and it changed six results.** A first pass using plain space-separated search produced six false negatives. Every multi-word term was re-run across **space, hyphen (U+002D), en dash (U+2013), em dash (U+2014), U+2010 hyphen, non-breaking hyphen, non-breaking space, closed form, and arbitrary whitespace including line breaks.** A character census of the syllabus PDF confirms it uses three dash characters: **U+002D hyphen (102 occurrences), U+2013 en dash (20), U+2212 minus (6).**

**The six flips were all caused by line-wrapping in the PDF text layer, not by dashes**, and three of them are terms named directly in outcomes:

| Term | Naive space search | True count | Cause of the false negative |
|---|---|---|---|
| **solar power** | 0 | **1** | LO (d) prints `nuclear power,solar` then wraps to `power`, which is a missing space after the comma **and** a line break inside the term |
| **polar ice** | 0 | **1** | LO (b) prints `melting of polar` then wraps to `ice caps` |
| **niche occupation** | 0 | **1** | LO (f) prints `food chains and niche` then wraps to `occupation` |
| **fresh water supplies** | 0 | **1** | LO (b) prints `stress on fresh water` then wraps to `supplies` |
| **extreme weather** | 1 | **3** | two of three wrapped |
| **natural selection** | 4 | **5** | one wrapped |

**Had the naive counts been trusted, LO (d)'s solar power, LO (b)'s polar ice caps and LO (f)'s niche occupation would each have been cut, and all three are named content in live outcomes.** One reverse error was also found: **`biome` appears to return 2 hits, and both are false positives inside the word "biomedicines". As a whole word, `biome` returns zero.**

Also confirmed: **the syllabus writes `mosquito-borne` with a hyphen** in LO (i), so a space-separated search for "mosquito borne" returns zero.

| Term searched | Hits | Where it appears, and the LO wording |
|---|---|---|
| **albedo** | **0** | Nowhere, in any spelling. Chapter 8.1 §1.3.1 teaches a full page plus Table 1.1 |
| **biome** (whole word) | **0** | Nowhere. The two apparent hits are inside *"biomedicines"*. Chapter 8.1 §1.2.1 teaches four biomes over four pages |
| **greenhouse effect** | **0** | Nowhere, in any spelling or joiner. Chapter 8.1 §1.3.2 teaches it. **But see the "loses the word" list below, because this is the most important zero in the audit** |
| **greenhouse gas** | **3** | LO (a) *"accumulation of **greenhouse gases** (limited to CO2 and methane)"*; LO (b) *"the effects of climate change as a result of **greenhouse gas** emissions"*; LO (b) again *"release of **greenhouse gases** from frozen organic matter"* |
| **carbon footprint** | **1** | LO (d) *"explain the relative differences between the **carbon footprints** of a range of anthropogenic activities"* |
| **anthropogenic** | **1** | LO (d), as above |
| **carbon dioxide** | **1** | Core Idea 3 LO (e) only, on limiting factors in photosynthesis. **Extension Topic B writes it as CO2** |
| **CO2** | **2** | LO (a) *"(limited to **CO2** and methane)"*, plus Core Idea 3 |
| **methane** | **1** | LO (a), as above. Zero for **CH4** |
| **ocean acidification** | **0** | Nowhere, and zero for **acidification** and **acidic**. Chapter 8.3 §3.1.5 teaches it. **See the "loses the word" list** |
| **coral** | **1** | LO (b) *"stress to **coral reef**, seagrass and mangrove ecosystems"* |
| **bleaching** | **0** | Nowhere, and zero for **bleach**. **See the "loses the word" list** |
| **permafrost** | **0** | Nowhere. LO (b) says *"release of greenhouse gases from **frozen organic matter**"*, which is permafrost by description |
| **feedback loop** | **0** | Nowhere, in any joiner |
| **positive feedback** | **0** | Nowhere. Also zero for **negative feedback**. **9477 Specimen P1 Q28 prints both terms on the diagram it supplies** |
| **sea level** | **1** | LO (b) *"melting of polar ice caps, **rising sea levels**, increase in frequency of extreme weather events"* |
| **biodiversity** | **4** | The syllabus overview map (*"Evolution & Biodiversity"*, Core Idea 4); the Extension Topic B content list *"Impact on **biodiversity**, biomedicines and the global food supply"*; LO (g) *"how climate change affects the rich **biodiversity** of the tropics"*; and the Climate Change reading list |
| **extinction** | **0** | Nowhere, and zero for **extinct**. Chapter 8.5 makes it the central concept of §5.1.2 |
| **migration** | **1** | LO (b) *"**migration** of fishes and insects"* |
| **phenology** | **0** | Nowhere, and zero for **phenological**. Chapter 8.4 §4.1.2 B teaches it. **See the "loses the word" list** |
| **pollinator** | **0** | Nowhere, and zero for **pollination**. Chapter 8.5 §5.1.2 B teaches plant-pollinator mismatch |
| **food security** | **0** | Nowhere, in any joiner. LO (e) says *"consequences to the **sustainable food supply**"*. **See the "loses the word" list** |
| **Aedes** | **1** | LO (h) *"how temperature affects the life cycle of ***Aedes aegypti*** as an example of a typical mosquito disease vector"*. **Aedes aegypti** as a two-word term: **1** |
| **malaria** | **1** | LO (i) *"mosquito-borne infectious diseases, including **malaria** and dengue, beyond the tropics"* |
| **dengue** | **2** | The content list *"Viral **dengue** disease in humans and how global warming affects its spread"*, and LO (i) as above |
| **vector** | **1** | LO (h) *"as an example of a typical mosquito disease **vector**"* |
| **mangrove** | **2** | LO (b) *"stress to coral reef, seagrass and **mangrove** ecosystems"*, and LO (c) *"explain how **mangrove** ecosystems help to mitigate the impacts of climate change"* |
| **seagrass** | **1** | LO (b), as above |
| **mitigation** | **0** | The noun never appears. The **verb** does: LO (c) *"help to **mitigate** the impacts of climate change"*. **1 hit for "mitigat"** |
| **carbon sequestration** | **0** | Nowhere, and zero for **sequestration** and **carbon sink** and **blue carbon**. **9477 Specimen P3 Q2 opens by defining it for the candidate.** The clearest "loses the word, keeps the biology" case in the Book |
| **IPCC** | **0** | Nowhere, and zero for **Intergovernmental**. Cited throughout all six chapters |

**Additional terms audited, all confirmed present and load-bearing:**

| Term | Hits | LO |
|---|---|---|
| **climate change** | 18 | The topic title, the content list, and LOs (a), (b), (c), (e), (f), (g) |
| **global warming** | 2 | The content list, and LO (i) *"explain how **global warming** affects the spread"* |
| **fossil fuel** | 2 | LO (a) *"burning of **fossil fuels** linked to increasing energy usage"*, LO (d) *"(including **fossil fuels**, hydroelectric power...)"* |
| **deforestation** | 1 | LO (d) *"including **deforestation**, energy production..."* |
| **clearing of forests** | 1 | LO (a) |
| **hydroelectric / nuclear power / solar power / wind power / bioethanol** | 1 each | LO (d), all five named in one bracket |
| **energy production / food production** | 1 each | LO (d) |
| **extreme weather** | **3** | LO (b), LO (e), LO (f) |
| **environmental stress** | 2 | LO (e), LO (f) |
| **habitat / food chain / niche occupation** | 1 each | LO (f) *"on **habitats**, organisms, **food chains** and **niche occupation**"* |
| **ecosystem** | 2 | LO (b), LO (c) |
| **frozen organic matter** | 1 | LO (b) |
| **insect** | 3 | LO (b), LO (h) twice |
| **metabolism** | 1 | LO (h) *"increased temperature leading to increased **metabolism**"* |
| **temperature tolerance** | 1 | LO (h) *"the narrow **temperature tolerance** of insects"* |
| **life cycle** | 1 | LO (h) |
| **mosquito** | 2 | LO (h), LO (i) (as **mosquito-borne**, hyphenated) |
| **tropics** | 2 | LO (g), LO (i) *"beyond the **tropics**"* |
| **biomedicine** | 2 | The content list, and LO (g) |
| **genetic diversity** | 1 | LO (g) *"and **genetic diversity** for food"* |
| **meat** | 1 | LO (a) *"food choices (increasing consumption of **meat**)"* |
| **fresh water** | 1 | LO (b) *"stress on **fresh water** supplies"*. Zero for the closed form **freshwater** |
| **sustainable** | 1 | LO (e) *"consequences to the **sustainable food supply**"* |
| **plants and animals** | 2 | The topic title and LO (e) |

### CRITICAL: two lists, because a zero hit kills the WORD, not the CONTENT

Extension topic outcomes are written as **broad application statements**, so the "a broader clause carries it" case is far more common here than in any Core Idea Book. Twelve of the twenty-two zero-hit terms below are carried by a clause elsewhere in the same outcome set.

#### List A: GENUINELY GONE, no outcome carries the content

Cut these. Every one was re-checked across all joiner variants and against every adjacent outcome.

1. **Albedo, as a quantity.** No outcome asks for reflectivity, and Table 1.1's per-surface values have no home. *(The ice-albedo **feedback loop** is a different matter and is in List B.)*
2. **Biomes as a classification.** Tropical rainforest, arctic tundra, polar ice region, mountain. No outcome names a biome, and LO (g) names only "the tropics", which chapter 8.1 covers in six bullets.
3. **Weather against climate as definitions**, the predictability argument, and the climate-system's five components. O-level geography.
4. **Natural causes of climate change**: Earth's orbital cycles, axial tilt, ENSO, El Niño, La Niña, volcanic eruptions and sulfate aerosols. LO (a) is explicitly anthropogenic, and the school's own text says orbital change is irrelevant on modern timescales.
5. **The electromagnetic spectrum**, beyond the one line that shortwave comes in and longwave goes out.
6. **Nitrous oxide as an accumulation gas**, per LO (a)'s bracketed limit. One line retained for indirect-activity answers only.
7. **The DENV genome, serotypes and structural and non-structural gene counts.** The school marks this itself.
8. **The dengue host immune response**, including viremia, antigen-presenting cell types and the acute, critical and recovery phases. The school marks this as Extension Topic A.
9. **Epidemic, outbreak, epidemiology, virulence.** These belong to Extension Topic A LO (k), which also names **pandemic**, a term the school's chapter 8.6 list omits.
10. **Bluetongue virology**: 24 serotypes, the restriction-zone map, reassortment. *(The vector-range mechanism is in List B.)*
11. **Environmental ethics, active citizenry and advocacy.** No bioethics outcome exists anywhere in Extension Topic B, and bioethics is dropped from all Bio material by standing rule. This covers chapter 8.1's page 1 closing paragraph and page 2 framing questions, chapter 8.5's intrinsic-rights sentence on page 106, and the social-injustice caption on chapter 8.3 page 57.
12. **Ecosystem structure as taxonomy**: organism, population, community, trophic level, producer, consumer, decomposer, energy lost as heat, food web. *(Habitat, food chain, organism and niche ARE named by LO (f) and are in List B.)*
13. **The carbon cycle's gigaton flux values, the 400,000-year ice-core record, and Fig. 2.11's 2008 primary-energy shares.**
14. **Endemic species, karst of geographic detail, biodiversity hot-spot maps, water-stress maps and regional precipitation-trend lists.**
15. **The crop-category taxonomy** (food, feed, fibre, oil, ornamental, industrial crops).
16. **Geothermal energy and biomass as separate energy sources.** LO (d) names six and neither is among them.

#### List B: LOSES THE WORD, KEEPS THE BIOLOGY, do not cut

Every one of these returns zero as a search term and is fully examinable through a broader clause. **This list is longer than List A, which is the defining feature of an extension topic.**

| Term with zero hits | The clause that carries it | Proof it is examined |
|---|---|---|
| **greenhouse effect** | LO (a) *"accumulation of **greenhouse gases**"* and LO (b) *"as a result of **greenhouse gas emissions**"*. Neither outcome is answerable without the absorb-and-re-emit mechanism | A prelim scheme makes it a **compulsory point** even in a question about activities: *"greenhouse gases absorb long-wave / infrared radiation, trapping/holding heat within the atmosphere"* `[SCHOOL]` |
| **carbon sequestration** and **carbon sink** | LO (c) *"how mangrove ecosystems help to **mitigate** the impacts of climate change"*; LO (a)'s clearing of forests | **9477 Specimen P3 Q2 is an 11-mark question that opens by defining carbon sequestration for the candidate**, then asks for three biomolecules and two calculations. `[OFFICIAL]` The examiner knew the word was absent and supplied it |
| **ocean acidification** | LO (b) *"stress to **coral reef**... ecosystems"* | The corpus files multiple acidification mechanisms with full mark schemes, and the schemes give the carbonate-ion chain in detail `[SCHOOL]` |
| **coral bleaching** | LO (b), same clause | Multiple prelim questions with examiner comments on the expulsion-alive misconception `[SCHOOL]` |
| **positive feedback** and **feedback loop** | LO (b)'s *"melting of polar ice caps"* and *"release of greenhouse gases from frozen organic matter"* are both feedback loops | **9477 Specimen P1 Q28 prints "positive feedback" and "negative feedback" on the diagram** and asks the candidate to classify. `[OFFICIAL]` Four separate prelim MCQs test positive-feedback identification, one reprinted across four schools `[SCHOOL]` |
| **permafrost** | LO (b) *"release of greenhouse gases from **frozen organic matter**"*. This is permafrost described rather than named | Multiple prelim MCQs, including one keyed on *"Greater decomposition of organic matter currently stored in permafrost"* `[SCHOOL]` |
| **food security** | LO (e) *"consequences to the **sustainable food supply**"*; LO (g) *"**genetic diversity for food**"* | The corpus's food-supply heading holds 44 records with the highest evaluate share in the Book `[SCHOOL]` |
| **extinction** | LO (g) *"the **potential loss** of this rich reservoir"* | The gastric brooding frog and golden toad cases are both extinction cases with mark schemes `[SCHOOL]` |
| **phenology** and **pollinator** | LO (f) *"on habitats, organisms, **food chains** and niche occupation"*. Trophic mismatch and plant-pollinator mismatch are food-chain effects | The caribou mismatch case and multiple plant-pollinator questions, with an examiner comment penalising *"a vague reference to the effect of rising global temperatures causing 'earlier' blooming"* `[SCHOOL]` |
| **ectotherm**, **endotherm**, **poikilotherm** | LO (b) *"**migration** of fishes and insects"*; LO (h) *"increased temperature leading to increased **metabolism**"* | Every fish and insect migration answer in the corpus runs through ectothermy `[SCHOOL]` |
| **species diversity**, **genetic diversity** as a level, **ecosystem diversity** | LO (g) names **biodiversity** and **genetic diversity for food** directly. The three levels are how the school and the corpus decompose it | *(genetic diversity is in fact a direct hit; the other two are carried)* |
| **zooxanthellae** and **symbiosis** | LO (b)'s coral clause. Bleaching is unexplainable without the symbiosis | Multiple schemes require both directions of the symbiosis `[SCHOOL]` |
| **enteric fermentation**, **methanogenesis**, **ruminant** | LO (a) *"food choices (increasing consumption of **meat**)"* and *"(limited to CO2 and **methane**)"*. The methane has to come from somewhere | Multiple schemes name ruminant digestion and rice paddies as the methane sources `[SCHOOL]` |
| **monoculture** and **biological insurance** | LO (g) *"**genetic diversity for food**"* | The four-step wild-relative argument is the school's answer to LO (g)'s second clause |
| **IPCC** | Not required as an institution, but its **data** is the substrate of nearly every figure in the Book and of most stems | Stems routinely cite IPCC projections; candidates read them, they do not recall them |
| **heat wave** and **drought** | LO (b) and LO (e) and LO (f) all say *"**extreme weather** events"* (3 hits) | Heat waves and droughts are what extreme weather events are |
| **blue carbon** | LO (c) | **Specimen P1 Q27's correct answer is the blue-carbon mechanism** `[OFFICIAL]` |
| **water potential** and **osmosis** | Not a Book 8 term, but carried by **Core Idea 1 LO (l)** for saltwater intrusion, soil salinisation and drought stress | A prelim scheme reasons through *"stomata close to reduce transpiration and hence there is less CO2 for the Calvin cycle"* `[SCHOOL]` |
| **selection pressure** | Carried by **Core Idea 4 LO (b)**, *"explain, with examples, how **environmental factors act as forces of natural selection**"* | **Specimen P2 Q8(a), 5 marks, is a speciation question inside a Book 8 stem** `[OFFICIAL]` |

### High yield: these get 15 to 20 drill questions, not the standard 10

1. **Reading a climate or ecology data set and quoting it correctly** (all LOs). At **52.6% figure-led and 25.0% "with reference to"**, this is the highest data-handling load of any Book measured, and the schemes specify the granularity down to *"duration, coverage % and temperature in °C"*. The drillable skill set is: describe a trend with quoted values, units and intervals; compare two series; read a box plot's median rather than its mean; copy a compound unit exactly; and account for the trend afterwards.

2. **The direct against indirect distinction, in both directions** (LOs a, e). **Specimen P2 Q8(b)** asks for indirect; a prelim scheme rejects the same items when direct was wanted; and LO (e)'s agro-ecosystem section uses the identical framework a second time. `[OFFICIAL]`/`[SCHOOL]` **This is the highest marks-per-line node in the Book and it appears in two different outcomes.**

3. **Carbon footprint comparison as a ranking, with life-cycle reasoning** (LO d). All three parts of **Specimen P2 Q8(c)** are LO (d) and none asks for a number: why CO2e exists, why bioethanol is low, why "zero-emission" sources are not zero. `[OFFICIAL]` The corpus files only 11 records under this heading, so **the specimen is the evidence here, not the corpus.**

4. **CO2-equivalent, sequestration and offset arithmetic** (LOs a, c, d). **`[type override → quantitative]`** **Specimen P1 Q26** is GWP arithmetic and **Specimen P3 Q2** puts 5 of 11 marks into two multi-step calculations with unit conversions and a stated significant-figure requirement. `[OFFICIAL]` Corpus calculation share is 5.8%, nearly eight times Book 3's. Drill until mechanical: mass × GWP; totals across two rows; tonnes to kg; percentage of a percentage; rate of change per decade.

5. **The mangrove blue-carbon mechanism, all four steps, with the oxygen argument** (LO c). **Specimen P1 Q27** turns on it, and its three distractors are each a well-formed plausible mechanism, which makes it a discrimination task rather than a recall one. `[OFFICIAL]` Drill the three wrong mechanisms as hard as the right one.

6. **LO (b)'s eight effects as eight causal chains.** The largest outcome in the Book by content span, the largest concept heading in the corpus at 165 records, and a checklist the examiner can sample from at will. Each chain must run forwards from greenhouse gas emission to a named biological consequence.

7. **The insect temperature-response curve, with its optimum** (LO h). Not a monotonic rise. The pea weevil, the pine false webworm and *Aedes*'s three-panel survival result all show a peak with fall-off. The corpus records the failure mode: candidates *"merely stated the impacts"* without direction of change. `[SCHOOL]` **`[Core Idea bridge → CI 1 LO q, enzymes and temperature]`**

8. **The *Aedes aegypti* life cycle plus the four vector effects plus the pathogen-side mechanism** (LOs h, i). Five of the corpus's 17 essay-scale stems are this. `[SCHOOL]` The pathogen-side extrinsic-incubation argument is the half most answers omit and it is a separate mark.

9. **Evaluate and comment discipline** (LOs e, f, g). Roughly 9% of structured parts want a judgement, three of the nine outcomes use "discuss" in their own wording, and **Specimen P3 Q2(c)(ii)** expects a **sceptical** answer against a calculated 0.59% offset. `[OFFICIAL]` The schemes require an explicit stance and penalise both-sides hedging. Drill: state a position, substantiate with quoted data, then bound it with the counter-evidence rather than contradicting yourself.

10. **The Core Idea bridges, drilled as Book 8 questions** (§0.4). Specifically: photosynthesis and respiration as the carbon cycle's engine; enzymes and temperature as LO (h)'s mechanism; environmental factors as selection pressures and allopatric speciation; and biomolecules as the form sequestered carbon takes. **Specimen P2 Q8(a) alone put 5 of 13 marks into Core Idea 4.** `[OFFICIAL]`

### Low yield, and the honest findings of this build

**Finding 1: chapter 8.1 is 26 pages carrying no outcome, and that is 20% of the Book.** Measured: every one of the chapter's distinctive terms returns zero syllabus hits across all joiner variants, meaning albedo, biome, weather, climate system, endemic species, trophic level, food web, El Niño, ENSO, permafrost, greenhouse effect. The load-bearing residue is about three pages: the greenhouse mechanism on pages 23 to 24, LO (f)'s four definitions on page 15, and the tropical-rainforest bullets on page 16. **Read it in twenty minutes and never return.**

**Finding 2: the corpus under-tests exactly what the specimen tested most.** Measured:

- The three concept headings covering LOs (c), (d) and (g) hold **37 of 517 records, 7.2%** of the corpus.
- The specimen put **1 of its 3 clear P1 marks (Q27) on LO (c)**, **6 of P2 Q8's 13 marks on LO (d)**, and **all 11 of P3 Q2's marks on LO (c) territory**.
- That is roughly **18 of the specimen's 27 clear Book 8 marks, or 67%, on outcomes the corpus gives 7.2% of its questions.**

**Conclusion. This is the single most consequential disagreement between the two evidence sources in this Book, and the specimen wins.** Prelim setters historically wrote Book 8 as "effects of climate change" data questions, which is LO (b) and LO (f) territory, and largely ignored carbon footprints and mangrove mitigation. Cambridge did the opposite. **Drill LOs (c) and (d) far more heavily than the corpus frequency suggests.**

**Finding 3: the corpus is supply-limited, not quota-limited, and that is itself the finding.** The overflow file reads *"0 real questions not selected"*. Every other Bio topic has hundreds of records in overflow. **517 records is everything that exists across 2013 to 2025 prelims from more than twenty JCs.** For comparison, Book 3's four topic files yielded 1955. Two consequences: percentages below about 3% in §2 are unreliable, and **there is no reserve pool to draw fresh questions from, so drill questions for this Book will have to be generated rather than mined.**

**Finding 4: 47.6% of the corpus predates the 9477 rollout, the highest share of any Book measured.** 246 of 517 records come from 2017 and 2018 prelims. This matters less than it would for a Core Idea, because Extension Topic B's content changed little between syllabuses, but it is why the mark-scheme confidence is capped at ~75% rather than Book 3's ~80%, and it is why every GWP value in the corpus should be checked against the paper rather than trusted.

**Finding 5: nodes that are low frequency but should not be dropped.**

- **LO (c), mangrove mitigation.** Only 13 corpus records, and **a whole specimen MCQ plus an 11-mark specimen structured question**. Cheap to learn, four steps, and it is the one outcome that is entirely self-contained.
- **The negative feedback in a supplied web.** Specimen P1 Q28 asks for it and the corpus's four positive-feedback MCQs never do. Increased evaporation giving more summer cloud is the answer.
- **The pathogen-side extrinsic incubation argument.** One paragraph in chapter 8.6, absent from most corpus answers, and a separate mark point in any dengue-spread question.
- **The non-monotonic rainfall argument.** One paragraph, and it is the Book's only genuine evaluate-level nuance: both extremes of rainfall can raise transmission by different routes.
- **The join between chapter 8.4's "minimum temperatures rise twice as fast as maxima" and chapter 8.5's "minimum night-time temperature cuts rice yield by 5% per 0.5 °C".** Neither chapter makes the join. Together they are a complete answer.
- **Bioethanol under that name.** LO (d) names it; the school's body text never uses the word, only "biofuels" and "ethanol"; and Specimen P2 Q8(c)(ii) asks about it directly.
- **Nuclear power.** LO (d) names it; the specimen's own table omits it; and it is examinable regardless.

**Finding 6: there is no Paper 4 exposure and there is unlikely ever to be.** Book 8 had zero presence on the specimen practical, and the corpus files **1 record out of 517 tagged to P4**. Extension Topic B has no practical technique of its own. **Do not build a practical cluster for this Book.** Note, though, that all three specimen P4 questions were **photosynthesis**, which is the Core Idea Book 8 leans on hardest, so time spent on the photosynthesis bridge pays into P4 indirectly.

---

## 6. Validation Notes

**Built from:**
- The **9477 syllabus** (`inputs/Biology/H2/official_docs/Biology_H2_syllabus_2026.pdf`), with all nine Extension Topic B outcomes and the four-bullet content list read verbatim from page 21 and reproduced in §0.1, plus the Extension Topic framing on page 6 and the paper weightings on page 9, plus a whole-document literal term search for §5 re-run across nine joiner variants. `[OFFICIAL]`
- All four **9477 specimen papers** (`Study Agent/Bio/Exam Papers/00 - A-Level Specimen 2026 (9477 OFFICIAL)/`), read end to end and counted question by question and part by part. `[OFFICIAL]`
- The school's own **Book 8 chapter PDFs** (`Study Agent/Bio/Book 8 - Climate Change (Extension Topic B)/`), 6 chapters, 133 pages, full text. `[SCHOOL]`
- The **question bank** at `Study Agent/Bio/_question_bank/Climate_Change.md` plus `_overflow/Climate_Change.OVERFLOW.md`, **517 real questions** with mark schemes reproduced verbatim where a key existed. `[SCHOOL]`
- The companion `_ground_truth_chapter_digest.md` in this folder, which carries the full error list.

**Not built from:** `inputs/Biology/H2/*/chapter_notes/*.md`. Those are Notion exports carrying mastery ratings and self-jotted confusions, not content. They were excluded deliberately, per the subject guide §3.0 and rules §5c.

**Per-dimension confidence:**

| Dimension | Result | Why |
|---|---|---|
| Content nodes | **~97%** `[OFFICIAL]` | Nodes derive directly from 9 LOs read verbatim, cross-checked against all six chapter headers with **zero mismatches**, the cleanest LO alignment of any Book so far. The scope audit was re-run across space, hyphen, en dash, em dash, closed and line-wrapped forms after a false-negative class was identified, which flipped six results including three terms named in live outcomes |
| Exam format | ~95% `[OFFICIAL]` | All four specimen papers counted directly, part by part. Book 8's presence on each paper is a count, not an estimate |
| Archetype frequency | **~76%, measured** | n=517 real questions parsed and classified. **Lower than Book 3's ~84% for three reasons: the sample is a quarter the size; the overflow is empty so there is no cross-check pool; and 47.6% of records predate 9477.** Percentages below about 3% should not be acted on |
| Mark scheme logic | **~75%** `[SCHOOL]` **capped** | Every scheme is a JC prelim. SEAB publishes no 9477 mark scheme and the specimen papers arrive without one. The cap is tighter than Book 3's ~80% because of the corpus age profile. This is the binding cap and it cannot be argued away |
| Trap model | **~88%** `[SCHOOL]` | Strong. Most entries quote a verbatim reject line or examiner comment from a real scheme, **eight are corroborated directly by the 9477 specimen**, and a further nine are corroborated by errors found in the school's own notes |

**Honest ceiling: ~82% MIXED.** Do not treat a strong score on this guide's questions as readiness.

**What is specifically stronger here than in Book 3:**

1. **No learning-outcome labelling error and no wording discrepancy at all.** All nine letters match across all six chapters. Book 3 had a one-letter wording difference; Book 8 has none.
2. **The specimen gives unusually concentrated corroboration.** Book 8 supplied three clear Paper 1 stems, one complete 13-mark Paper 2 question and one complete 11-mark Paper 3 question. **Two entire specimen questions belong to this Book**, which is a stronger signal per outcome than Book 3's.
3. **The school marks its own out-of-scope content in chapter 8.6.** No other Book's notes do this. The two labels ("FYI: not in 9477 syllabus" and "KIV: ETA") are both correct and both actionable.
4. **The measured specimen weight (about 11%) exceeds the nominal curriculum share (about 7.5%) by roughly half again.** That is a clear and actionable time-allocation finding.

**What is specifically weaker:**

1. **The corpus is a quarter the size and has no overflow reserve.** 517 records against Book 3's 1955, with nothing held back. Drill questions must be generated, not mined.
2. **Nearly half the corpus predates 9477**, the highest share measured, which is why the marking confidence is capped lower.
3. **The corpus and the specimen disagree about which outcomes matter**, and the disagreement is large: 67% of specimen marks fall on outcomes holding 7.2% of corpus questions. Only a second official paper resolves it. The guide resolves it in the specimen's favour, which is a judgement.
4. **Chapter 8.1 is 20% of the Book's page count and carries no outcome.** Anyone studying the Book front to back wastes a fifth of their time before reaching examinable content.
5. **Fourteen named examples are withheld to Google Classroom**, ten of them in chapter 8.4 alone, and two of those are directly outcome-relevant. The printed notes have a hole where LO (h)'s metabolism example should be.

**Genuinely thin evidence, stated plainly:**

- **Essay probability.** The corpus files 17 essay-scale Book 8 stems, five of them on *Aedes* and dengue and six on photosynthesis crossovers, spread across 2017 to 2025. The specimen gave Book 8 zero essay options. Both are verified. **There is no way to settle this from one paper.** The mitigation is that all three essay bridges (§2) are worth building for their Core Idea value anyway.
- **Whether the specimen's Book 8 weighting is typical.** Eleven per cent rests on Book 8 getting a whole Paper 2 question and a whole Paper 3 question. Had either gone to Extension Topic A instead, the figure would fall to roughly 5% to 7%. **One paper, two large questions, and no way to know the variance.**
- **How LO (d)'s "relative differences" is marked when the school's ranking and the paper's table disagree.** The guidance in §3 and §4 to rank from the supplied table is `[INFERRED]` reasoning from the outcome's own wording, not a quoted rule. No specimen mark scheme exists and no prelim scheme in the corpus settles it.
- **Whether GWP values will always be supplied.** Specimen P1 Q26 supplied them. If a future paper does not, the AR4-against-AR5 divergence between the school's notes (25, 298) and the specimen's table (28, 265) becomes a live risk. **The safe preparation is to know the shape (methane roughly 25 to 30 times CO2 over a century) and to use the paper's number whenever one is given.**
- **The three quantitative overrides in the front matter.** They rest on 5.8% corpus calculation share and on two specimen questions. That is thinner evidence than the qualitative default rests on, but the specimen evidence is direct and recent.

**Recalibration trigger:** if drill performance runs above 70% but a real paper scores below 50%, the most likely mispredicting dimension is **outcome weighting, not archetype content**. The corpus's own frequencies point at LOs (b) and (f); the specimen pointed at (a), (c) and (d). Re-measure §2's concept-heading distribution against §2.0's specimen counts first, and push drill sets further towards **carbon footprints, mangrove mitigation and sequestration arithmetic** before changing anything else.

**The nearest thing to a real test for this Book** is **9477 Specimen Paper 2 Question 8** and **Specimen Paper 3 Question 2** sat cold and back to back, which is 24 marks in about 30 minutes, followed by **Specimen Paper 1 Questions 26, 27 and 28**. Between them they cover LOs (a), (c) and (d) in the examiner's own words, reach into Core Idea 1 biomolecules and Core Idea 4 speciation, and test all three of the Book's dominant demands: data interpretation, multi-step arithmetic and mechanism discrimination. **They will also show immediately whether the Core Idea bridges are in place, because 8 of those 24 marks are not Book 8 content at all.**
