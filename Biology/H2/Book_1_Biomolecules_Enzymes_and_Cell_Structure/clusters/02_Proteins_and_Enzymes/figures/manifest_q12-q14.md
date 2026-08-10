# Cluster 02 figure manifest — Q11 to Q14 (kinetics and inhibition block)

Nine figures. All nine located in the actual source papers, cropped, and read back to confirm that
axis labels, units, numeric scales, curve labels and legends survived the crop.

| file | question part | source paper + page | what it shows | status |
|---|---|---|---|---|
| `q11a.png` | Q11(a) — Fig. 11.1 | ACJC 2023 H2 Bio Prelim P1 (compiled QP), page 5, Q6 | Sketch saturation curve, rate of oxygen production / cm³ min⁻¹ against substrate concentration, with P (plateau rate), Q (lower rate), R (substrate conc. at Q) and S (substrate conc. on the plateau) marked by dashed construction lines. No numeric scale in the original. | CONFIRMED |
| `q11b.png` | Q11(b) — Fig. 11.2 | MI 2023 J2 H2 Bio Prelim P2 QP, page 4, Q2, Fig. 2.1 | Gridded plot, activity of catalase / arbitrary units (0–140) against concentration of hydrogen peroxide / mM (0–300). Two labelled curves, catalase P (plateau ≈130) and catalase Q (plateau ≈85), plotted points marked. Fig. 2.1 caption included. | CONFIRMED |
| `q12a.png` | Q12(a) — Fig. 12.1 | 2019 Collated Biomolecules and Enzymes STQ.docx, entry "2020 / H2 / NYJC PRELIM / P2 Q2" (image11.png). The teacher's screenshot inside that entry shows the true origin: CIE 9700/21 Biology June 2017 QP, page 3, Fig. 2.1. | Gridded hyperbolic curve, rate of reaction / µmol dm⁻³ min⁻¹ (0–16) against concentration of substrate / mmol dm⁻³ (0–3.5), plateauing at Vmax = 14. Half-Vmax of 7 falls at about 0.3 mmol dm⁻³, which is the Km the question asks him to derive. | CONFIRMED |
| `q12c.png` | Q12(c) — Fig. 12.2 | 2025 DHS H2 Biology Prelims Paper 4 QP, page 14, Q2, Fig. 2.2 | Gridded curve, initial rate of reaction / au (0–10) against concentration of lactose / mmol dm⁻³ (0–140), flat at 9.0 from about 60 onwards. Fig. 2.2 caption included. | CONFIRMED |
| `q13a.png` | Q13(a) — Fig. 13.1 | 2025 VJC H2 Biology Prelim P1, page 5, Q7 | Sketch graph, rate of breakdown of hydrogen peroxide against substrate concentration, four traces numbered 1 (solid, highest plateau), 2 (dashed, converging on 1), 3 (dotted, lower plateau) and 4 (dot-dash, near-flat). No numeric scale in the original. | CONFIRMED |
| `q13b.png` | Q13(b) — Fig. 13.2 | 2025 JPJC H2 Bio PE P2 QP, page 7, Q3, Fig. 3.2 | Gridded plot, rate of maltose production / mol min⁻¹ (0–3) against starch concentration / mmol (0–4). Upper curve labelled "without tendamistat" (plateau ≈2.6), lower curve labelled "with tendamistat" (plateau ≈1.4). Fig. 3.2 caption included. | CONFIRMED |
| `q14a.png` | Q14(a) and Q14(b) — Fig. 14.1 | 2025 RI Prelim P2 QP, page 4, Q2, Fig. 2.2 | Sigmoidal sketch curve, PFK activity / arbitrary units against substrate concentration / arbitrary units. Both axis titles and the Fig. 2.2 caption included. No numeric scale in the original, so part (b) can be drawn on it freely. | CONFIRMED |
| `q14d.png` | Q14(d) — Fig. 14.2 | 2024 RI H2 Bio P1 QP, page 3, Q2 | Vertical flow chart in boxes: substrate → enzyme W → intermediate 1 → enzyme X → intermediate 2 → enzyme Y → intermediate 3 → enzyme Z → end-product, with the feedback loop on the left labelled "inhibition" running from the end-product back to the enzyme W step. | CONFIRMED |
| `q14e.png` | Q14(e) — Fig. 14.3 | DHS 2023 H2 Prelim Paper 3, page 5, Q1, Fig 1.3 | Boxed diagram of the intestinal brush border: α-glucosidase enzymes on a microvillus, with a key distinguishing grey Oligosaccharides from black Acarbose, showing acarbose occupying active sites while oligosaccharides are blocked, plus Glucose, Microvillus, Microvilli and Enterocyte labels. | CONFIRMED |

## Notes

**q12a is the only one worth flagging.** The NYJC 2020 Prelim P2 paper itself is not on disk (the
`Prelims/2020/` folder is empty). The figure came from the school's 2019 Topical STQ collated
document, where the NYJC question is reproduced as a screenshot of the original Cambridge paper. The
graph is therefore lower resolution than the rest (660 × 344 native) because it is a screen capture,
not a PDF render. Everything load-bearing is still legible: both axis titles with units, the 0–16 and
0.0–3.5 scales, the gridlines needed to read half-Vmax, and the plateau at 14. I cropped away the
browser chrome, the file list and the ad banner. No upscaling was applied, so what is there is real
pixels rather than interpolated blur.

**q11a footer discrepancy.** The ACJC 2023 P1 file carries a footer reading "Paper 2", but the
content is MCQ (numbered stems with A–D options) and the drill's own source line cites
ACJC Prelim/2023/P1/Q6. The stem, the P/Q/R/S labels and all four options match the drill verbatim,
so the figure is right regardless of ACJC's footer.

**Crops that ran wider than 1200 px.** `q11b` (1416), `q12c` (1285), `q13b` (1335) and `q14a` (1371)
exceed the 1200 px guide. In each case the extra width is a legend or axis title sitting far from the
plot area ("catalase P" / "catalase Q", "without tendamistat" / "with tendamistat", "Substrate
concentration / arbitrary units"), and several parts turn on reading Vmax off those labelled curves,
so I kept the labels rather than trimming to width.

## Dimensions

```
q11a.png   1162 x 648
q11b.png   1416 x 745
q12a.png    660 x 344
q12c.png   1285 x 950
q13a.png   1203 x 617
q13b.png   1335 x 761
q14a.png   1371 x 593
q14d.png    924 x 1285
q14e.png   1222 x 1070
```
