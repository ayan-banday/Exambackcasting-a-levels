# Cluster 02 figures — Gene Expression and Its Control

Every image is the real page from the source document, rendered with `pdftoppm -png` and cropped. No
redrawings, no reconstructions. Format below: file | used at | source | what is in the crop | status.

---

q2a_codon_table.png | Q2(a), printed as Fig. 2.1 | HCI (School) H2 Biology lecture notes, Core Idea 2, Book 2 chapter "2.2 Eukaryotic Gene Expression", printed p. 21 (PDF p. 21), Fig. 19 | The full 64-codon genetic code as mRNA base triplets: first mRNA base (5' end of codon) down the left edge, second mRNA base across the top, third mRNA base (3' end of codon) down the right edge; the three stop codons UAA, UAG and UGA highlighted in orange and AUG "Met or start" highlighted in green; the Pearson copyright line and the original caption "Fig. 19: The genetic code – 64 codons (displayed as mRNA base triplets)" both kept inside the crop. Rendered at 300 dpi, cropped to 1390x1631 px. **This page yields nothing to `pdftotext` — it is a pure image, so it can only be recovered this way.** | CONFIRMED

q3a_splice_variants.png | Q3(a), printed as Fig. 3.1 | HCI (School) 2025 JC2 H2 Biology 9744 Preliminary Examination Paper 1 Multiple Choice QP, printed p. 8 (PDF p. 8), Q9 | The pre-mRNA drawn as one bar of alternating blocks P, T, Q, U, R, V, S with the key (shaded = exon, unshaded = intron) at the right, and below it the five mature mRNA variants numbered 1 to 5, drawn to scale so the relative lengths are readable. Both sub-headings "pre-mRNA" and "five possible mature mRNA variants" kept in the crop. The four answer rows sit below the figure in the paper and are typed into the drill instead, so nothing is lost. Rendered at 300 dpi, cropped to 2040x1129 px. | CONFIRMED

q5b_methylation_lollipop.png | Q5(b), printed as Fig. 5.1 | RI 2025 JC2 H2 Biology 9744 Preliminary Examination Paper 2 QP, printed p. 12 (PDF p. 12), Fig. 5.1 | Four blocks of bisulfite-sequencing "lollipop" data labelled T1, T2, N1 and N2 down the left, each with ten sample rows A to J, and the marker positions 32, 81, 96, 104, 122, 136, 138, 145, 152, 154, 210, 258, 269 printed vertically along the top. Key at the right: open circle = no methylation, filled circle = methylation. Block labels, row letters, all marker numbers, the key and the "Fig. 5.1" caption are all inside the crop. Rendered at 300 dpi, cropped to 1829x2168 px. | CONFIRMED

2_4_p03_master_control_table.png | **NOT used in the drill.** Referenced by `cluster_02_study_sheet.md` §N | HCI (School) H2 Biology lecture notes, Core Idea 2, Book 2 chapter "2.4 Control of Eukaryotic Gene Expression", printed p. 3 (PDF p. 3) | The whole landscape page: on the left, the labelled cell diagram tracing Signal → Chromatin modification: DNA unpacking → Gene available for transcription → Transcription → RNA processing → Transport to cytoplasm → Translation → Protein processing → Active protein → Transport to cellular destination → Cellular function, with Degradation of mRNA and Degradation of protein as side branches; on the right, the four-column master table Level of Control / Process / Description of Process / Possible Outcomes covering all five levels. Full page at 200 dpi, 2339x1654 px. **This page also yields nothing to `pdftotext` and is the single highest-value page in the chapter.** Deliberately held out of the drill because it is a complete answer key to LO 2(i) and would spoil Questions 5, 6, 7, 8 and 9. | CONFIRMED

---

## Figures considered and rejected

- **2.4 p. 6, Fig. 4 "Acetylation promotes diffused chromatin"** and **2.4 p. 12, Fig. 9 "Steps leading to formation of the transcription initiation complex"** — both are the answers to Q5(a) and Q6 respectively, drawn out step by step. Excluded for the same reason as the master table.
- **2.4 p. 17, Fig. 14 alternative splicing of a 3-exon pre-mRNA** — superseded by the real prelim figure at q3a_splice_variants.png, which makes the candidate apply the splicing rules rather than read them off.
- **The four enhancer-position constructs** used by Topical 2018/MCQ/Q26, reset as NJC Prelim 2023 P1 Q13 and MI Prelim 2023 P1 Q16 — the concept it tests (an enhancer acts at any distance and in any orientation) is carried instead by Q6, which reaches the same point from a deletion series and a real intronic enhancer, and does so open-ended rather than as a third MCQ.
