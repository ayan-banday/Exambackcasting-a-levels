# Cluster 01 figure manifest — Questions 11 to 14

Format: `file | question part | source tag | what the figure shows | status`

## Figures recovered

```
q11b.png | Question 11(b) — also serves 11(c) | Topical 2018/STQ/Q8b · RVHS Prelim 2018 P2 Q2(b) | Fig. 2.1 — cutaway of a lipoprotein particle: a core of fats enclosed by a SINGLE layer of phospholipid, with a membrane protein embedded in the surface. Three leader labels: "Phospholipid", "Membrane protein", "Fats". | CONFIRMED
q12.png  | Question 12                        | Topical 2018/MCQ/Q30 · PJC Prelim 2018 P1 Q6 (identical figure repeated as Topical 2017/MCQ/Q5 · AJC Prelim 2017 P1 Q4) | The "biomolecule extracted from a cell": a protein shown as a ribbon model (red + blue alpha helices, blue random-coil loops) with four branched oligosaccharide chains drawn as full skeletal formulae (HO / COOH / NHAc / AcHN groups) attached to it through two thioether/amide linkers. It is a GLYCOPROTEIN, not a glycolipid. | CONFIRMED
q13b.png | Question 13(b)                      | Topical 2007/MCQ/Q16 · NYJC Prelim 2007 P1 Q1 | The carbohydrate-test decision flow chart: "Benedict's Test: Positive?" → yes to "Barfoed's Test (A test for monosaccharides): Positive?", no to "Iodine Test: Positive?"; Barfoed's yes → "Clinisitx Test (A test for diabetics): Positive?" (spelled "Clinisitx" in the original), no → Substance 3; Clinistix yes → Substance 1, no → Substance 2; Iodine yes → Substance 4, no → Substance 5. Scanned line art. | CONFIRMED
```

## Parts that need NO image

```
Q11(a)  | Topical 2018/STQ/Q4b(i) · JJC Prelim 2018 P2 Q2(b)(i) | Pure text question ("Describe how a phospholipid molecule differs from a triglyceride molecule"). It sits under its own new stem about the cell surface membrane and does not refer to the Fig. 2.1 triglyceride diagram earlier in that JJC question. No figure.
Q11(c)  | extension question                                     | Uses the SAME Fig. 2.1 as Q11(b) → reuse q11b.png.
Q13(a)  | Topical 2017/MCQ/Q27 · RI Prelim 2017 P1 Q4            | The X / Y / Z Benedict's results grid is a real Word TABLE in the source docx (verified: 0 images in that region, 2 nested w:tbl elements with the cells as text). Renders fine as HTML text. The drill has already flattened the two-tier header (concentration → no acid / with acid) into six columns, which is faithful.
Q14(a)  | NJC Prelim 2024 P1 Q3                                  | The "enzyme used / products" table for raffinose is plain text in the PDF — pdftotext -layout extracts it cleanly with no image object. Renders fine as HTML text.
Q14(b)  | ACJC Prelim 2024 P3 Q1(a)(i)                           | Table 1.1 (glycaemic index of lactose 46 / sucrose 65 / maltose 105 / glucose 100) is plain text in the PDF. Renders fine as HTML text.
Q14(c)  | ACJC Prelim 2024 P3 Q1(a)(ii)                          | Same Table 1.1 as 14(b). No image.
```

## Nothing missing

Every figure-dependent part in Q11–Q14 was recovered. No BEST-GUESS entries; no unrecoverable figures.

## Two things the drill text gets wrong

1. **Q12's figure description in the drill is wrong.** The drill says
   `[FIGURE: an amphipathic membrane molecule carrying an oligosaccharide chain — a glycolipid.]`
   and the mark scheme then argues the molecule is a **glycolipid** with "two hydrophobic hydrocarbon
   tails". The actual figure — verified against the original PJC 2018 H2 Bio P1 QP page 5, not just the
   collated bank — is a **glycoprotein**: a ribbon-model protein with branched oligosaccharide chains.
   There are no hydrocarbon tails anywhere in it.

   The official key is still **C (1, 2 and 4 only)**, confirmed from the 2018 collated MCQ answer table
   (Q30 = C). C is in fact cleaner for a glycoprotein than for a glycolipid: statement 4 ("all the
   monomers are soluble in water") is straightforwardly true for amino acids plus monosaccharides,
   whereas long-chain fatty acids from a glycolipid are not really water-soluble. Statement 1 holds
   because a membrane glycoprotein has hydrophobic transmembrane regions and a hydrophilic
   carbohydrate/exterior; statement 2 holds because ABO antigens sit on both glycoproteins and
   glycolipids. Once the real image is dropped in, the Q12 mark-scheme wording needs rewriting from
   glycolipid to glycoprotein, and the "carbohydrate joined by a glycosidic bond" line should become
   a glycosidic linkage to an asparagine/serine residue rather than to a lipid.

2. **The RVHS section of the 2018 collated STQ file is corrupted.** Under the header
   `2018 / H2 / RVHS PRELIM / P2 Q2` that file contains a telophase / cell-theory question, not the
   lipoprotein question. The correct RVHS P2 Q2 content (fatty acids → Fig. 2.1 lipoprotein → Fig. 2.2
   protein in bilayer) is present in `2018 Collated Biomolecules and Enzymes MS.docx`, and matches the
   original `RVHS_H2_BIO_P2_QP.pdf` page 4 exactly. The source tag on Q11(b) is correct; only the STQ
   collation is bad.

## Extraction notes (for anyone redoing this)

- `q11b.png` came from `word/media/image16.png` inside
  `2018 Collated Biomolecules and Enzymes MS.docx` (the MS file, not the STQ file). Verified against
  RVHS_H2_BIO_P2_QP.pdf page 4 — same diagram, same three labels. Kept at the docx's native raster
  size (623x502 after whitespace trim) because that is the original resolution; re-rendering the PDF
  page just upscales the same bitmap.
- `q12.png` was cropped from `PJC_H2_BIO_P1_QP.pdf` page 5 rendered at 220 dpi, then downscaled to
  1100 px wide. That is noticeably sharper than the docx copy (`word/media/image20.png`, 520x284).
  The docx copies in the 2017 and 2018 banks are pixel-identical to each other (ImageChops diff bbox
  = None), which is what confirms the two papers reused one figure.
- `q13b.png` came from `word/media/image7.png` inside `2007 Biomolecules MCQ.docx`. No 2007 prelim
  PDFs exist in the archive (the Prelims tree starts at 2011), so the docx raster is the only source.
  It is a scan but fully legible.
