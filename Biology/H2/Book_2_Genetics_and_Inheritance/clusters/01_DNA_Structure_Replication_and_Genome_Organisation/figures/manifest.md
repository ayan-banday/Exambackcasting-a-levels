# Figures — Cluster 01, Book 2

Every image is the real figure lifted out of the school's own chapter PDF at 200 dpi and cropped.
Nothing here is redrawn or described. Source PDFs live in
`Study Agent/Bio/Book 2 - Genetics and Inheritance (Molecular Genetics)/`. Printed footer page = PDF
page (offset 0 for both chapters, verified).

| File | Source PDF | Page | Figure | Used in | Why this crop |
|---|---|---|---|---|---|
| `q2_antiparallel.png` | 2.1 DNA Structure and Replication | 34 | Fig. 35 — the two strands of DNA are antiparallel, 5' phosphate and 3' hydroxyl labelled at each end | Q2 | Caption trimmed off. Gives him the polarity without naming a single enzyme, so the enzyme roster still has to come from memory |
| `q3_models.png` | 2.1 DNA Structure and Replication | 21 | Fig. 22 — the three alternative models of replication, conservative / semi-conservative / dispersive | Q3 | The notes print a red star beside the semi-conservative row. **Painted out**, because it points straight at the answer |
| `q4_nucleosome.png` | 2.3 Organisation of the Eukaryotic Genome | 13 | Fig. 10 — structure of a nucleosome, histone octamer with H2A/H2B/H3/H4, linker DNA, 10 nm, 146 bp | Q4 | Deliberately the nucleosome only, not the full Fig. 9 hierarchy on p. 12 — the 30 nm fibre, looped domains and 700 nm chromatid have to be supplied from memory |
| `q5_end_problem.png` | 2.1 DNA Structure and Replication | 35 | Fig. 37 — the end replication problem, top two panels | Q5 | Cropped to stop **before** the "Gap remains unfilled, creating a 3' overhang" annotation and before the right-hand explanatory column. Poses the problem, does not answer it |
| `q6_chromosome.png` | 2.3 Organisation of the Eukaryotic Genome | 20 | Fig. 17 — electron micrograph of a fully condensed duplicated chromosome, centromere and (TTAGGG)ₙ telomeres indicated | Q6 | Naming is given; structure, function and the ranking are not |
| `q6_centromere.png` | 2.3 Organisation of the Eukaryotic Genome | 30 | Fig. 28 — segregation of chromosomes (A) with one centromere and (B) with no centromere | Q6 | The observation is shown; the kinetochore mechanism and the consequence over successive divisions are the answer |
| `q7_genome_size.png` | 2.3 Organisation of the Eukaryotic Genome | 8 | Fig. 5 — genome size on a log scale against taxonomic group, with the higher-animal exception boxed in red | Q7 | Caption cropped away. The caption explains the boxed exception, which is the point of the question |
| `q8_gene.png` | 2.3 Organisation of the Eukaryotic Genome | 16 | Fig. 15 — schematic eukaryotic protein-coding gene through to mature mRNA: enhancer, proximal control elements, promoter, exons, introns, poly-A signal, 5' and 3' UTR | Q8 | Labels are supplied on purpose. The question is not naming the parts, it is classifying each one as coding or non-coding and saying why |
| `q9_pentose.png` | 2.1 DNA Structure and Replication | 6 | Fig. 2 — deoxyribose and ribose, the 2' OH boxed in red on each | Q9 | The one structural difference is visible; every consequence of it is the answer |

## Commands used

```
pdftoppm -png -r 200 -f <page> -l <page> "<chapter>.pdf" <stem>
```

then cropped with PIL. Build script kept at
`scratchpad/bio2/run/extract.py` and `scratchpad/bio2/run/fix.py`.

## Deliberately not extracted

- **2.1 Fig. 25, p. 26** — the master replication summary. It is the single most important figure in
  Book 2 and it labels topoisomerase, helicase, ssb proteins, primase, DNA pol III, DNA pol I and
  ligase **with their exact jobs written on the diagram**. Using it in Q2 would hand over the whole
  mark scheme. It belongs in the study sheet, not the drill.
- **2.3 Fig. 9, p. 12** — the full condensation hierarchy with every level and dimension labelled.
  Same problem, for Q4.
- **2.1 Fig. 36, p. 34** — leading and lagging strand synthesis with Okazaki fragments, primers and
  ligase annotated in four numbered captions. Same problem, for Q2.
