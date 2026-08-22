# Cluster 02: Gene Expression and Its Control
### Biology H2 (9477) · Book 2 · Study sheet (teach): study this BEFORE the question drill

> **Depth:** Layer 1 + Layer 2 with reasoning. No worked examples. **Target after studying: ~30%.**
> The other 70% comes from `cluster_02_questions.md`.
>
> **Why these two chapters are one cluster.** Chapter 2.2 is the pipeline that turns a gene into a
> working protein. Chapter 2.4 is the list of places you can tap that pipeline, and each of its five
> control levels is named after a stage of 2.2.
>
> Bolded text is the notes' exact wording. Reproduce it as written.
>
> Source: HCI Core Idea 2 chapters 2.2 and 2.4. Syllabus: 9477 LOs 2(a), 2(c), 2(i).

---

# PART 1: FROM GENE TO PROTEIN (2.2)

## A. The gene, the dogma, and which strand gets read

**A1. Gene expression** is the process by which the information within a gene is used, first to
**synthesise RNA (transcription)** and then to **synthesise a polypeptide (translation)**, eventually to
**affect the phenotype of an organism**. The **Central Dogma of Molecular Biology** is the
**unidirectional** flow of information from DNA to RNA to polypeptide. That word, and **polypeptide**
rather than protein, are the two marked words.

**A2. A eukaryotic transcription unit has three parts.**

| Part | What it is | Transcribed? |
|---|---|---|
| **Promoter** | the **TATA box**, **typically 25 bp upstream**, plus the **transcription start site (+1)**. The TATA box **binds TFIID**, which facilitates binding of RNA polymerase. It **determines which of the two strands of DNA is used as the template**. | **not transcribed except for the transcription start site** |
| **Coding region** | bounded by the transcription start site and termination site; **only 1 of the 2 strands serves as the template**, **read 3' to 5'** so that RNA is synthesised **5' to 3'** | yes, giving the **pre-mRNA / primary transcript** |
| **Termination sequence** | codes for a **polyadenylation signal sequence (AAUAAA)** in the pre-mRNA | **transcribed in its entirety** |

**A3. Template versus non-template is the most-swapped pair in Book 2.** The **template strand** is
transcribed and is **complementary** to the RNA. The **non-template strand** has a sequence **exactly the
same as that of the RNA**, except that **thymine in DNA is replaced by uracil in RNA**. The promoter picks the
template, so neighbouring genes can be read in opposite directions.

**A4. The RNAs.** **mRNA** carries information, which **codes for amino acid sequences, from DNA to
ribosomes**; **tRNA** serves as an **adaptor molecule in protein synthesis**; **rRNA** plays **catalytic
and structural roles in ribosomes**; **snRNA** plays catalytic and structural roles **in spliceosomes**,
which you need in order to say what a spliceosome is made of. siRNA and miRNA carry no learning outcome
(§P).

---

## B. Transcription

Location **nucleus**; enzyme **RNA polymerase (pol II for mRNA)**, several protein subunits in the
**nucleoplasm**; substrate **ribonucleoside triphosphate (NTP)**; **template read 3' to 5'**, **RNA made 5'
to 3'**. A **general (basal) transcription factor** is a protein **required for RNA polymerase to bind its
promoter and initiate transcription**: it **positions RNA polymerase correctly at the promoter**, the main
job, and **releases it to begin elongating the RNA**.

**B1. Initiation.** **General transcription factors** assemble along the promoter, **TFIID binds the TATA
box**, and they **mediate the binding of RNA polymerase to the promoter**, forming the **transcription
initiation complex** → binding **unwinds the helix and separates the two strands**, **disrupting hydrogen
bonds between complementary base pairs**, creating a **transcription bubble** → the exposed template
directs assembly of incoming ribonucleotides **supplied as nucleoside triphosphates**, and the polymerase
**catalyses the first phosphodiester bond**.

**B2. Elongation.** The polymerase **moves along the template 3' to 5'**, the helix **transiently
unwinding** → ribonucleotides **base-pair with the template**, each NTP losing **its two terminal
phosphates**, its **free 5'-phosphate joined to the free 3'-hydroxyl of the growing chain by a
phosphodiester bond** → the polymerase **re-anneals the unwound DNA behind it**, **dissociating the growing
RNA chain from the template**, and **proofreads and removes incorrectly inserted ribonucleotides**.

**B3. Termination.** The polymerase **transcribes a termination sequence**, releasing the RNA chain and
dissociating → that terminator **codes for the polyadenylation signal sequence AAUAAA** → **about 10 to 35
nucleotides downstream**, proteins bind to **cut and free the pre-mRNA** → that cleavage site is **also the
site of poly(A) tail addition**, so a change to the poly(A) signal changes transcript length.

**B4. The transcript is continuous, the lagging strand is not.** Both polymerases build **5' to 3' only**,
but in replication the template is **double-stranded and antiparallel** and the fork **unwinds opposite to
lagging-strand synthesis**. In transcription **only one strand is the template**, so nothing forces a
break.

---

## C. RNA processing is three modifications, all in the nucleus

**C1. The 5' cap** is added **as soon as a length of pre-mRNA has been transcribed**, and is a **methylated
guanine nucleotide / methylguanosine triphosphate** (2.4: **7-methylguanosine triphosphate**). It

- **protects the mRNA from degradation by hydrolytic enzymes such as nucleases**
- **defines the 5' end**, which **recruits the small subunit of the ribosome for translation initiation**
- **distinguishes mRNAs from the other types of RNA molecules**

**C2. Exons** are **protein-coding sequences in the gene**; **introns** are long stretches of nucleotides
inserted between exons that **do not code for any portion of the polypeptide**. **Both are transcribed into
pre-mRNA.**

**C3. RNA splicing** occurs after release of the pre-mRNA from RNA polymerase: **introns are removed** while
**the remaining exons are spliced / joined together to form mature mRNA**, requiring **hydrolysis of ATP**.
It is carried out by the **spliceosome**, a large complex of **small nuclear ribonucleoproteins (snRNPs)**,
each containing **small nuclear RNAs (snRNAs)** and a set of proteins. There is **cleavage at the 5' splice
site**, then **cleavage at the 3' splice site with simultaneous ligation of the exons**. The sequences at
the **5' and 3' ends of an intron are the recognition sites for spliceosome binding**, by **complementary
base pairing between snRNA and the splice site**, so a mutation inside a non-coding intron can still destroy
a protein.

**C4. The 3' poly(A) tail.** An **endonuclease** cleaves the pre-mRNA **10 to 35 nucleotides after the AAUAAA
polyadenylation sequence**, then **poly (A) - polymerase** adds **approximately 200 adenine nucleotides**.
The tail **protects the mRNA from degradation by nucleases**, makes it a **more stable template for
translation in the cytoplasm**, and **facilitates export of mRNA out of the nucleus via nuclear pores**.

**C5. Alternative splicing** is the **use of different splice sites**, allowing exons to be **joined in
different combinations**, which **produces different mature mRNAs from the same pre-mRNA that generate
different proteins**. The **order of the exons never changes**, and the **first exon cannot be spliced out**.

---

## D. The genetic code

**D1. Twenty amino acids need three bases**: a doublet gives only **4² = 16**, a triplet **4³ = 64**. Of the
64 possible codons, **61 code for amino acids** and include a start signal, while **3 serve as termination
signals**.

**D2. Four features, grouped by the notes under TUND.**

| Feature | What it means | What it explains |
|---|---|---|
| **T**riplet | each mRNA codon that specifies an amino acid **consists of three nucleotide bases** | an indel of 3 does not shift the frame |
| **U**niversal | **(almost) universal**: the same code is used by almost all organisms | mitochondrial exceptions are fair novel-data material |
| **N**on-overlapping | **read as a triplet in the 5' to 3' direction, continuously**, as successive groups of 3 nucleotides, **without skipping any nucleotides**; **3 possible reading frames** for every mRNA | a frameshift corrupts every codon downstream |
| **D**egenerate but unambiguous | **a single amino acid can be coded by more than one different codon**, yet **every codon codes for just one amino acid**; only **methionine (AUG) and tryptophan (UGG)** have one codon each; degenerate codons **differ in the 3rd position** | silent mutations exist |

**D3. Punctuation.** **AUG** defines the **first amino acid of the polypeptide chain**, and the **reading
frame used from that point on**. **UAA, UAG and UGA** are stop signals: they **do not code for any amino
acid**, and there is **no tRNA with an anticodon complementary to these 3 codons**. That last clause is the
mark, not the statement that translation stops.

---

## E. The machinery of translation

**Translation** is the process in which a **polypeptide chain is synthesised by ribosomes** using genetic
information **encoded in a mature mRNA template**. Two directions, two marks: the ribosome **travels along
the mRNA 5' to 3'**, and the polypeptide is assembled by sequential addition of amino acids **from the
N-terminal to the C-terminal**.

**E1. Mature mRNA, in order:** **5' cap** → **5' UTR** (leader sequence, precedes the start codon) →
**protein-coding region** (AUG to a stop codon) → **3' UTR** (trailer sequence, follows the stop codon) →
**poly(A) tail**. Only the coding region is translated; both UTRs return as control sites in §L.

**E2. tRNA, about 80 nucleotides.** Secondary structure: a **2D cloverleaf** held by **complementary base
pairing within the single-stranded molecule**, **3 loops**, the anticodon loop carrying **3 unpaired
bases**. Tertiary: a **compact 3D L-shape maintained by hydrogen bonds**. The **3' end (CCA stem)** is the
**attachment site for a specific amino acid**. Its adaptor ability rests on two things: the anticodon
**determines the specific amino acid attached to the CCA stem**, and the anticodon **forms complementary
base pairs with the mRNA codon**.

**E3. Aminoacyl-tRNA synthetases: 20 enzymes, one per amino acid.** Each **covalently attaches** its amino
acid to the **3' CCA stem** by an **ester linkage**, forming **aminoacyl-tRNA**, with **hydrolysis of ATP**.
Its active site must be **complementary to the 3D conformation of the specific amino acid** and to the
**specific anticodon sequence of the tRNA**. It is the only proofreader of the codon-to-amino-acid rule; the ribosome
checks codon and anticodon only.

**E4. The ribosome:** a **large ribonucleoprotein complex** of ribosomal proteins and rRNA; **bacterial
~70S, eukaryotic ~80S**; **small subunit (40S) contains the mRNA binding site**. rRNA **forms the core of
the ribosome**, is the main constituent of the A and P sites and of the **interface between the subunits**,
and in the large subunit has **peptidyl transferase activity, catalysing formation of peptide bonds**.
Large-subunit sites: **A site (aminoacyl-tRNA site)**, holds the **incoming tRNA carrying the next amino
acid**; **P site (peptidyl-tRNA site)**, holds the **tRNA carrying the growing polypeptide chain**; **E site
(exit site)**, **site of release of the deacylated tRNA**.

**E5. Translation factors.** **Initiation factors** for **assembly of mRNA, the first tRNA and ribosomal
subunits**; **elongation factors** for **synthesis of polypeptide chains**; **release factors** for
**recognition of the stop codon and disassembly of the translation machinery**. **Several use GTP as an
energy source.** ATP is spent once, at amino acid activation.

---

## F. Translation

**F1. Initiation.** **eIFs bind the small subunit** and position the initiator **tRNAi^Met** at its **P
site**, **GTP required** → the small subunit **binds the mRNA by recognition of its 5' cap** and **moves
downstream 5' to 3' in search of the start codon AUG** → the **initiator anticodon base-pairs with AUG**,
eIFs **dissociate with hydrolysis of GTP**, the **large subunit binds**, completing the **80S translation
initiation complex**, with the initiator tRNA **in the P site**, methionine as the **N-terminus**, and **the
A site vacant**.

**F2. Elongation and translocation**, repeated **until a stop codon reaches the A site**.

- **2A, codon recognition.** An aminoacyl-tRNA carrying amino acid 2 **binds the A site by complementary
  base pairing between anticodon and codon**, **held by hydrogen bonds**, brought by **elongation factors**,
  with **hydrolysis of GTP**.
- **2B, peptide bond formation.** **Peptidyl transferase in the large subunit** catalyses a **peptide bond
  between the carboxyl end of methionine and the amino group of the 2nd amino acid**; the **ester bond
  between methionine and its tRNA is broken**, leaving a **deacylated tRNA** in the P site and a **new
  peptidyl-tRNA** in the A site.
- **2C, translocation.** The ribosome moves **one codon (3 nucleotides) 5' to 3'**, guided by elongation
  factors with **GTP**: deacylated tRNA **P → E** and out, peptidyl-tRNA **A → P**, next codon exposed at
  **A**.

**F3. Termination.** A **stop codon (UAG, UAA, UGA) reaches the A site** → a **release factor binds directly
to the stop codon in the A site** → it causes **addition of a water molecule instead of an amino acid**,
freeing the **carboxyl end** of the polypeptide from the P-site tRNA **by hydrolysis** → the polypeptide
leaves **through the exit tunnel of the large subunit** → the ribosome **releases the mRNA and separates
into subunits**, and tRNAs are recycled.

**F4. Polysomes** are clusters of ribosomes **simultaneously translating polypeptides from the same mRNA
strand**, so **many more polypeptide molecules can be made in a given time** than if each had to be
completed before the next could start.

---

## G. Post-translational modification

**The immediate product of translation is a polypeptide, not a protein.** It must **coil and fold into its
specific 3D conformation**, in the cytoplasm or the **lumen of the rough ER**, and transport to the **Golgi
apparatus** allows modification. Four routes:

1. **Attaching biochemical functional groups**: **glycosylation** adds an **oligosaccharide**, common in
   membrane proteins, giving **glycoproteins important in signal recognition and immune activation**;
   **reversible phosphorylation** of **threonine, serine or tyrosine** residues, added by **kinases** and
   removed by **phosphatases**.
2. **Making structural changes**, namely **formation of disulfide linkages**.
3. **Proteolytic cleavage**: **removing a sequence of amino acids or cutting the chain in the middle**. In
   insulin a **connecting peptide is removed from the middle** after the disulfide bonds have formed,
   leaving **two chains held together by disulfide bonds**.
4. **Attaching ubiquitin**, which **marks proteins for proteolysis by the proteasome**. **At least four
   ubiquitins** are required before a proteasome can bind, and the polyubiquitin chain is **recognised by a
   specific receptor in the proteasome**. This **selective degradation controls the length of time in which
   a protein can function**.

---

# PART 2: CONTROL OF EUKARYOTIC GENE EXPRESSION (2.4)

## H. What is controlled, and why eukaryotes need extra layers

**H1. Differential gene expression** is the **expression of different sets of genes by cells with the same
genome**. The genes in the nuclei of all somatic cells are **exactly the same**, but cell types **differ
morphologically and functionally**, and only a fraction of the genes are expressed **at any one place
(tissue specificity)** and **at any one time (temporal specificity)**. Spatial and temporal are the two
words the LO uses, and both need naming.

**H2. Three structural reasons eukaryotic control is not prokaryotic control.** **DNA is organised into
nucleosomes**, so a gene must be in an active structure before anything reaches it. **Eukaryotic genes are
not organised into operons**, so **each gene needs its own promoters, silencers and enhancers**.
**Transcription and translation are separated by the nuclear envelope**, so pre-mRNA **must be processed
and exported before translation**.

**H3. The five levels, as the syllabus names them:** **chromatin** (histone modification and DNA
methylation); **transcriptional** (control elements, such as promoters, silencers and enhancers, and
proteins, such as transcription factors, including activators and repressors); **post-transcriptional**
(processing of pre-mRNA in terms of splicing, polyadenylation and 5' capping); **translational** (half-life
of RNA and initiation of translation); **post-translational** (biochemical modification and protein
degradation).

---

## I. Level 1, chromatin

**I1. Chromatin is either euchromatin, which is diffused, or heterochromatin, which is highly condensed.**
Genes in euchromatin are **available for transcription**, whereas those in heterochromatin are
**transcriptionally inactive**, because **condensation prevents transcription factors and RNA polymerases
from gaining access to the promoter**.

**I2. Histone modification works through charge.** From Cluster 1: the nucleosome is DNA wound round a
**histone octamer**, and **eight histone N-termini protrude outwards as histone tails**. Those tails are
**rich in lysine residues, which are positively-charged**, and they **interact strongly with the
negatively-charged phosphate groups of the DNA backbone**, which **increases the affinity of DNA for the
nucleosome surface**.

Acetylation up-regulates: **histone acetyltransferases (HATs) acetylate the lysine residues → the positive
charges are neutralised → the affinity of the histone complex for DNA is reduced → the chromatin becomes
more diffused / less compact → control regions of genes are exposed to transcription factors and RNA
polymerase → transcription rate increases, hence quantity of RNA increases.**

Deacetylation down-regulates: **histone deacetylases (HDACs) deacetylate → lysine residues regain their
positive charges → affinity of the histone complex for DNA increases → chromatin becomes more compact →
access of transcription factors and RNA polymerase to control regions is prevented → transcription rate
decreases.**

Charge, affinity, compaction, access, rate. A scheme pays for each of those five links.

**I3. DNA methylation** is the **covalent addition of methyl groups to specific nucleotides after DNA
replication**, catalysed by **DNA methyltransferases**. In vertebrate DNA it is **restricted to cytosine (C)
nucleotides in the sequence 5'-CG-3'**, known as **CpG dinucleotides**, which are clustered to form **CpG
islands, usually found in the promoter regions of many genes**. Two mechanisms, and the LO expects both.
Methylation **changes the 3D conformation of DNA** and thus **prevents binding of transcription factors to
the promoter**, so **transcription initiation is prevented**. And methylated DNA serves as **recognition
signals for methyl-CpG-binding proteins (MeCPs)** that in turn **recruit histone deacetylases (HDACs)**,
which **condense chromatin in the region of the CpG island**.

The outcome differs from acetylation in kind, not degree: **transcription is prevented, hence no RNA is
formed.** Acetylation moves a dial, methylation closes a switch, which is why methylation is used for
**long-term inactivation during differentiation**.

**I4. Methylation adds no base and removes none**, so the **nucleotide sequence, the codons and therefore
the type of protein encoded are unchanged**. It changes how much, never which.

---

## J. Level 2, transcriptional

The notes label initiation of transcription **the most important** level.

**J1. Control elements** are **non-coding DNA sequences that regulate transcription by binding transcription
factors.** Three classes by position:

| Class | Position | What binds, and what it does |
|---|---|---|
| **Promoter** | **TATA box 25 to 30 bp upstream** of the start site | **determines the start-point**; general transcription factors and RNA polymerase assemble here to **form a transcription initiation complex** |
| **Proximal control elements** | **100 to 200 bp upstream** | also bind general transcription factors; **essential for efficient transcription** |
| **Distal control elements: enhancers and silencers** | **hundreds or even thousands of bp upstream or downstream**, and **may be located within an intron** | **function in an orientation-independent fashion**; **enhancers greatly increase and silencers greatly decrease the transcription rate** |

The distal row earns two marks on its own: an enhancer **need not be adjacent to the promoter** and **need
not sit outside the gene**. That is how a mutation inside a non-coding intron changes how much protein a
cell makes.

**J2. A transcription factor** is a **regulatory protein that binds to DNA and affects transcription of
genes.** **Activators (proteins) bind to enhancers (DNA sequence)**, giving an **increased rate of
transcription**; **repressors (proteins) bind to silencers (DNA sequence)**, giving a **decreased rate of
transcription**. Both contain **two binding domains**, a **DNA binding domain** and one or more **protein
binding (activation) domains**. Protein binds DNA, and papers set that pair as a trap in almost every
sitting.

**J3. How an enhancer thousands of base pairs away acts.** **Activators bind their respective enhancers**
→ general transcription factors bind the promoter and **mediate the binding of RNA polymerase**, forming a
transcription initiation complex, at which point the rate is **basal** → a **DNA-bending protein causes
looping of the DNA**, bringing activators bound to distant enhancers **close to the promoter** → activators
interact with **mediator proteins**, adaptor molecules that **facilitate interaction of the activator with
general transcription factors and RNA polymerase**, giving **improved recruitment**, a **stable
transcription initiation complex** and **proper positioning** → **rate of transcription is increased**.

Repressors run the mirror image: bind silencers, destabilise the complex, rate falls. Basal versus
increased is the discriminating point, because an enhancer does not switch transcription on, it raises a
rate that already exists.

**J4. Two cells with the same genome make different proteins because the activators differ.** The
**particular combinations of control elements and transcription factors are specific to each gene** and
result in **different transcription rates in different cell types (i.e. spatial specificity)** or **at
different stages of development (i.e. temporal specificity)**. **Albumin** is made only in liver cells and
**crystallin** only in lens cells because each enhancer's **unique combination of control elements** is
matched only by the **activators present in that cell type**.

---

## K. Level 3, post-transcriptional

The three processing events of §C become control points, with the outcomes listed in §N. Alternative
splicing is the only level that changes **which** protein is made rather than **how much**, which is why
gene number and protein number do not match.

---

## L. Level 4, translational

The LO names exactly two things here, **half-life of RNA** and **initiation of translation**.

**L1. Half-life of mRNA.** **Stability of mRNA determines the duration for which translation can occur**:
the faster it is degraded, the less time there is to translate it. The half-life is the **time required for
50% of the initial amount of RNA to be degraded**, and it varies among eukaryotic mRNAs, which are **more
stable than prokaryotic ones and have longer half-lives**. Two things set it: **mRNAs with longer poly(A)
tails tend to be more stable**, and **stabilising / destabilising sequences in the 3' UTR** contain binding
sites for proteins that **increase or decrease the rate of poly-A tail shortening**.

Decay is a timer. **Shortening of the poly(A) tail by an exonuclease** begins as soon as the mRNA reaches
the cytosol, and below a critical length, **about 25 nucleotides in humans**, the paths split into
**decapping followed by rapid 5' to 3' degradation** or **continued 3' to 5' degradation through the tail
into the coding sequence**. Some mRNAs are instead **cut internally by an endonuclease recognising 3' UTR
sequences**. Longer tail → longer half-life → more rounds of translation → more polypeptide, so a cell
raises output without transcribing the gene again.

**L2. Initiation of translation.** **eIFs** scan the mRNA for the **start codon AUG**, locate the **binding
site of initiator tRNA to the AUG codon**, and form the **translation initiation complex at the 5' mRNA
region**. Varying their abundance and activity changes the rate, but this has a **global effect on overall
translational activity**, rather than on the rate of translation of specific mRNAs. **Translational
repressors** bind to various regions of the mRNA, **usually the 5' or 3' UTRs**, and interfere with
initiation of translation by **blocking attachment of ribosomes or other translation initiation factors**;
these are **gene-specific**. Global versus specific is the discriminator.

---

## M. Level 5, post-translational

The LO names exactly two things, **biochemical modification** and **protein degradation**.

**M1. Biochemical modification, or protein activation.** Some polypeptides **need alteration before becoming
functional**, so **controlling the timing of such modification** controls the rate of functional protein
formation. The chemistry is the §G list. This is the only level acting on a protein already in the
cytoplasm, so the only one that responds in seconds; everything upstream waits for transcription,
processing, export and translation.

**M2. Protein degradation.** Many proteins have **limited lifespans**, and **proteasomes break them down**,
letting a cell **adjust the kinds and amounts of its proteins** in response to environmental change and
**maintain its proteins in working order**. **Ubiquitin marks target proteins for proteolysis by the
proteasome**, with **at least four ubiquitins** needed before it binds. Degradation lowers a protein level
without touching the gene, and stops one response before the next stimulus arrives.

---

## N. The whole outcome on one page

The tightest statement of LO 2(i) is the master overview table on **2.4 p.3**, extracted at
`figures/2_4_p03_master_control_table.png`. Its right-hand column forces every level to end in a stated
outcome, and that is the hard part to reconstruct.

| Level | Process | Outcome |
|---|---|---|
| **Chromatin** | histone modification | **↑ or ↓ transcription rate, hence ↑ or ↓ quantity of RNA** |
| | DNA methylation | **transcription prevented, hence no RNA formed** |
| **Transcription** | initiation of transcription (most important) | **basal quantity of RNA**; **↑ or ↓ transcription rate, hence ↑ or ↓ quantity of RNA** |
| **Post-transcription** | 5' capping | **small subunit recruited, hence polypeptide formed**; **mRNA protected, hence ↑ quantity of RNA** |
| | polyadenylation | **export facilitated, hence polypeptide formed in cytoplasm**; **↑ quantity of RNA** |
| | alternative splicing | **different mature mRNAs, hence different proteins** |
| **Translation** | stability of mRNA | **↑ translation rate, hence ↑ quantity of polypeptide** |
| | initiation of translation | **↑ or ↓ translation rate, hence ↑ or ↓ quantity of polypeptide** |
| **Post-translation** | chemical modification | **different proteins, e.g. activation of proteins** |
| | selective degradation | **↓ quantity and type of proteins** |

Read that column downwards: **the earlier the level, the more economical the control, and the slower it
acts.** Silencing chromatin costs nothing thereafter but takes a whole pipeline to reverse, while degrading
a finished protein is instant and wastes everything already spent on it.

---

## O. Open recall prompts (answer cold, then self-check)

1. Define gene expression and state the central dogma, using the two words schemes reject substitutes for.
2. Which strand is transcribed, what decides that, and how does each strand relate to the mRNA?
3. Give the three steps of transcription initiation, naming what binds the TATA box.
4. State what happens to an incoming ribonucleotide's two terminal phosphates, and to the DNA behind RNA polymerase.
5. State where transcription termination and poly(A) addition happen relative to each other.
6. Name the structure that carries out splicing, what it is made of, and what recognises the splice sites.
7. Give two functions of the 5' cap and two of the poly(A) tail.
8. State the four features of the genetic code, and the mutation consequence each explains.
9. Explain why there is no tRNA for UAA, UAG or UGA, and what binds them instead.
10. State the two things the anticodon does, and name the bond joining an amino acid to its tRNA.
11. Give the elongation cycle 2A, 2B, 2C in order, naming the energy source at each step.
12. Give the acetylation chain from lysine charge to transcription rate, in five links.
13. Give the two mechanisms of DNA methylation, and why its outcome differs in kind from deacetylation.
14. Distinguish enhancer from activator and silencer from repressor, saying which is DNA and which is protein.
15. Explain how an enhancer 2000 bp downstream raises transcription, and what basal means in that chain.
16. Name the two things at the translational level, and state the global versus specific contrast.
17. Name the one level that changes which protein is made rather than how much, and say why.
18. Rank the five levels by economy and by speed of response, and justify the ranking.

---

## P. Not examinable, do not spend time here

**RNA interference is cut. Do not study miRNA, siRNA, Dicer or RISC.** Chapter 2.4 §7 teaches the whole
mechanism, but no learning outcome in Core Idea 2 mentions RNA interference, miRNA or siRNA, and LO 2(i)
iv names only **half-life of RNA and initiation of translation**. If an exam supplies an RNAi mechanism in
a stem as novel data, reason from the data given, but never carry it in as assumed knowledge.

Also cut:

- **Wobble.** The word appears nowhere in the syllabus and no outcome sits behind it.
- **The lariat intermediate and branch-point chemistry.** Splicing itself is required by LO (c); the intermediate's chemistry is not.
- **RNA polymerase I, II and III as a set.** Know that **pol II makes mRNA**; that is all that is used.
- **Alternative translation initiation sites, leaky scanning and IRES.** No LO, and the Kozak rules are not in the syllabus.
- **The six-way taxonomy of eukaryotic repressor action.** LO 2(i) ii names repressors, not the list.
- **The iron / aconitase / ferritin / transferrin receptor case study.** No LO, though good novel-context stem material.
- **The signal peptide and SRP route to the ER** (2.2 §8). Core Idea 1 organelle territory.
- **45S precursor rRNA processing into 18S / 5.8S / 28S.** Beyond the syllabus.
