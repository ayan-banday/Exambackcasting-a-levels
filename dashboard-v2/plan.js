window.PLAN = {
 "meta": {
  "student": "Ethan Lim",
  "title": "Study Plan — Prelim → A-Levels",
  "start": "2026-07-16",
  "end": "2026-08-22",
  "prelim": "2026-08-24",
  "prelimLabel": "Prelim begins (GP)",
  "studyDays": 33,
  "restDay": "Sunday",
  "totalMins": 7980,
  "perWeekHrs": 24.5,
  "target": "Prelim: a mid-B / C is fine — cover the priority topics, sacrifice the low-value ones. A-levels (2–27 Nov 2026): everything drilled to mastery, multiple passes.",
  "reality": "A cluster is typically ~2h. A 4-hour day is most commonly 2h + 2h (2 subjects) or 2h + 50 min + 50 min (3 subjects — a cluster + a shorter subject + GP). Closing a cluster's gaps adds ~30 min (cluster + gap ≈ 150 min), so it often spills — the next day continues on the gaps. GP = one phase per 50-min session, every 2–3 days (never 120). Test day = 4–6h; Sunday rest. These are common shapes, adjust freely — not fixed 2×2h. Every topic = main cluster + gap coverage.",
  "lastUpdated": "2026-07-18",
  "repo": "https://github.com/ayan-banday/Exambackcasting-a-levels",
  "alevel": "2026-11-02"
 },
 "subjects": {
  "maths": {
   "name": "Maths",
   "full": "Mathematics",
   "code": "9758 H2",
   "colour": "#6ea8fe",
   "drills": 6,
   "note": "most bankable — closes to mechanical"
  },
  "chem": {
   "name": "Chemistry",
   "full": "Chemistry",
   "code": "9729 H2",
   "colour": "#5fd3a8",
   "drills": 7,
   "note": "foundations + reasoning templates reused everywhere"
  },
  "csc": {
   "name": "CSC",
   "full": "China Studies 中国通识",
   "code": "9629 H2",
   "colour": "#e8845f",
   "drills": 4,
   "note": "Governance already built; secure the compulsory + the A-lever"
  },
  "bio": {
   "name": "Biology",
   "full": "Biology",
   "code": "9744 H2",
   "colour": "#e8c65f",
   "drills": 5,
   "note": "fast-closing quantitative + highest-frequency"
  },
  "gp": {
   "name": "GP",
   "full": "General Paper",
   "code": "8881 H1",
   "colour": "#c78ae8",
   "drills": 3,
   "note": "skills that transfer across every essay/paper"
  },
  "conv": {
   "name": "Convergence",
   "full": "Convergence",
   "code": "official papers",
   "colour": "#cfd3da",
   "drills": 0,
   "note": "the real readiness gate — timed papers, not cluster scores"
  }
 },
 "cycle": [
  {
   "mins": 120,
   "name": "Subject A — SIR block",
   "desc": "First subject. S(tudy): ~60 min encoding the cluster (pre-study the chapter, take the cluster, encode it). Then the test part — adversarial self-test + close the gaps."
  },
  {
   "mins": 120,
   "name": "Subject B — SIR block",
   "desc": "Second subject, same SIR cycle. Two subjects a day, 2h each — interleaving beats 4 hours on one subject."
  },
  {
   "mins": 240,
   "name": "Saturdays — cumulative test",
   "desc": "Every Saturday: a timed cumulative test across ALL subjects covered so far. Self-mark, hand the gap-list to Claude. Sunday is a rest day."
  }
 ],
 "clusters": [
  {
   "n": 1,
   "subject": "maths",
   "name": "Vectors — Basics, Products & Ratio Theorem",
   "flag": "⚑"
  },
  {
   "n": 2,
   "subject": "maths",
   "name": "Vectors — Lines & Planes",
   "flag": ""
  },
  {
   "n": 3,
   "subject": "maths",
   "name": "Vectors — Foot of Perpendicular, Distances & Angles",
   "flag": ""
  },
  {
   "n": 4,
   "subject": "maths",
   "name": "Normal Distribution",
   "flag": ""
  },
  {
   "n": 5,
   "subject": "maths",
   "name": "Hypothesis Testing",
   "flag": ""
  },
  {
   "n": 6,
   "subject": "maths",
   "name": "Discrete RV & Binomial",
   "flag": ""
  },
  {
   "n": 7,
   "subject": "chem",
   "name": "Stoichiometry & Redox",
   "flag": ""
  },
  {
   "n": 8,
   "subject": "chem",
   "name": "Bonding — VSEPR, Polarity & Intermolecular Forces",
   "flag": ""
  },
  {
   "n": 9,
   "subject": "chem",
   "name": "Energetics — Hess & Born-Haber",
   "flag": ""
  },
  {
   "n": 10,
   "subject": "chem",
   "name": "Equilibria — Kc/Kp & Le Chatelier",
   "flag": ""
  },
  {
   "n": 11,
   "subject": "chem",
   "name": "Aqueous Equilibria — Acid-Base & pH",
   "flag": "⚑"
  },
  {
   "n": 12,
   "subject": "chem",
   "name": "Organic — Foundations & the 5 Mechanisms",
   "flag": ""
  },
  {
   "n": 13,
   "subject": "chem",
   "name": "Organic — Reaction Map & Synthesis",
   "flag": "⚑"
  },
  {
   "n": 14,
   "subject": "csc",
   "name": "经济 Economy — Growth Engine & Transition",
   "flag": ""
  },
  {
   "n": 15,
   "subject": "csc",
   "name": "经济 Economy — Structural Challenges (SOE/Debt/Regional)",
   "flag": ""
  },
  {
   "n": 16,
   "subject": "csc",
   "name": "跨课题 Cross-Topic Bridge & Deployment",
   "flag": "⚑"
  },
  {
   "n": 17,
   "subject": "csc",
   "name": "社会 Society — Urbanisation, Migration & Stratification",
   "flag": ""
  },
  {
   "n": 18,
   "subject": "bio",
   "name": "Inheritance — Dihybrid, Codominance & Sex-Linkage",
   "flag": ""
  },
  {
   "n": 19,
   "subject": "bio",
   "name": "Inheritance — Chi-Squared Test",
   "flag": ""
  },
  {
   "n": 20,
   "subject": "bio",
   "name": "Biostatistics Toolkit",
   "flag": ""
  },
  {
   "n": 21,
   "subject": "bio",
   "name": "Evolution — Variation, Natural Selection & Hardy-Weinberg",
   "flag": ""
  },
  {
   "n": 22,
   "subject": "bio",
   "name": "Mutations & Cancer",
   "flag": ""
  },
  {
   "n": 23,
   "subject": "gp",
   "name": "Essay — slotting, expansion & body paragraphs",
   "flag": "⚑"
  },
  {
   "n": 24,
   "subject": "gp",
   "name": "Essay — intros, conclusions & timed writing",
   "flag": ""
  },
  {
   "n": 25,
   "subject": "gp",
   "name": "Paper 2 — comprehension, summary & AQ",
   "flag": ""
  }
 ],
 "map": {
  "maths": {
   "units": "16 chapters",
   "tag": "Prelim: Calculus ✓ + Vectors + all Statistics. Pure ch 1–4,10 → A-levels.",
   "sections": [
    {
     "name": "PURE",
     "topics": [
      {
       "n": "5,6,8,9 · Calculus",
       "b": "BUILT",
       "f": "done (main + gap)",
       "subs": [
        "Differentiation",
        "Integration",
        "Series Expansion / Maclaurin",
        "Differential Equations"
       ]
      },
      {
       "n": "7 · Vectors",
       "b": "DRILL",
       "f": "cluster 1 ✓ · finish Lines & Planes",
       "subs": [
        "Basics, products, ratio theorem ✓",
        "Lines & planes",
        "Foot of ⊥, distances, angles"
       ]
      },
      {
       "n": "1 · Sequences & Series",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      },
      {
       "n": "2 · Graphs & Transformations",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      },
      {
       "n": "3 · Equations & Inequalities",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      },
      {
       "n": "4 · Functions",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      },
      {
       "n": "10 · Complex Numbers",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      }
     ]
    },
    {
     "name": "STATISTICS",
     "topics": [
      {
       "n": "11 · Probability",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "12 · Discrete Random Variables",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "13 · Normal Distribution",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "14 · Sampling",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "15 · Hypothesis Testing",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "16 · Correlation & Regression",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      }
     ]
    }
   ]
  },
  "chem": {
   "units": "23 chapters",
   "tag": "Prelim: physical core + organic core. Gaseous State & Polymers → A-levels.",
   "sections": [
    {
     "name": "PHYSICAL & INORGANIC",
     "topics": [
      {
       "n": "4 · Reactions & Stoichiometry",
       "b": "BUILT",
       "f": "done (main + gap)",
       "subs": []
      },
      {
       "n": "1 · Atomic Structure",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "2 · Chemical Bonding",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "5 · Energetics & Thermodynamics",
       "b": "DRILL",
       "f": "next up",
       "subs": []
      },
      {
       "n": "6 · Reaction Kinetics",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "7 · Chemical Equilibria",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "14 · Acid-Base Equilibria",
       "b": "DRILL",
       "f": "biggest calc topic",
       "subs": []
      },
      {
       "n": "13 · Solubility Equilibria",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "22 · Periodicity",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "21 · Electrochemistry",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "23 · Transition Elements",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "3 · Gaseous State",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      }
     ]
    },
    {
     "name": "ORGANIC",
     "topics": [
      {
       "n": "8 · Intro to Organic",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "9 · Isomerism",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "10 · Alkanes",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "11 · Alkenes",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "12 · Arenes",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "15 · Halogen Derivatives",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "16 · Hydroxy Compounds",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "17 · Carbonyl Compounds",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "18 · Carboxylic Acids & Derivatives",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "19 · Nitrogen Compounds",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "20 · Polymers",
       "b": "LATER",
       "f": "A-levels",
       "subs": []
      }
     ]
    }
   ]
  },
  "csc": {
   "units": "4 topics (课题)",
   "tag": "The 4 课题. Governance ✓. TNT (2025 高二问答题集锦) is the answer standard.",
   "sections": [
    {
     "name": "课题",
     "topics": [
      {
       "n": "2 · 政治 Governance",
       "b": "BUILT",
       "f": "done",
       "subs": []
      },
      {
       "n": "1 · 经济 Economy",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "3 · 社会 Society",
       "b": "DRILL",
       "f": "",
       "subs": []
      },
      {
       "n": "4 · 外交 Diplomacy",
       "b": "DRILL",
       "f": "",
       "subs": []
      }
     ]
    }
   ]
  },
  "bio": {
   "units": "~26 sub-topics",
   "tag": "Prelim: Inheritance, Evolution, Mutations, Cancer ONLY. Biostats dropped. Rest → A-levels.",
   "sections": [
    {
     "name": "PRELIM PRIORITY",
     "topics": [
      {
       "n": "6 · Inheritance (I & II)",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "7 · Biological Evolution",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "2e · Gene & Chromosomal Mutations",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      },
      {
       "n": "3c · Cancer",
       "b": "DRILL",
       "f": "prelim",
       "subs": []
      }
     ]
    },
    {
     "name": "A-LEVELS (after prelim)",
     "topics": [
      {
       "n": "1 · Biomolecules",
       "b": "LATER",
       "f": "",
       "subs": [
        "1a Lipids",
        "1b Carbohydrates",
        "1c Proteins",
        "1d Enzymes",
        "1e Cell Structure",
        "1f Cell Membrane"
       ]
      },
      {
       "n": "2 · Molecular Biology",
       "b": "LATER",
       "f": "",
       "subs": [
        "2a DNA",
        "2b Gene Expression",
        "2c Genome",
        "2d Gene Control",
        "2f Molecular Techniques"
       ]
      },
      {
       "n": "3 · Cell Biology",
       "b": "LATER",
       "f": "",
       "subs": [
        "3a Signalling",
        "3b Cell & Nuclear Division",
        "3d Stem Cells"
       ]
      },
      {
       "n": "4 · Microbial Genetics",
       "b": "LATER",
       "f": "",
       "subs": [
        "4a Viruses",
        "4b Bacteria"
       ]
      },
      {
       "n": "5 · Energetics",
       "b": "LATER",
       "f": "",
       "subs": [
        "5a Photosynthesis",
        "5b Cellular Respiration"
       ]
      },
      {
       "n": "8 · Climate Change",
       "b": "LATER",
       "f": "",
       "subs": []
      },
      {
       "n": "9 · Infectious Diseases",
       "b": "LATER",
       "f": "",
       "subs": []
      }
     ]
    }
   ]
  },
  "gp": {
   "units": "skill-driven",
   "tag": "One phase per 50-min session, every 2–3 days. NEVER 120 min. Skill-driven, no clusters.",
   "sections": [
    {
     "name": "PAPER 1 — ESSAY (phases)",
     "topics": [
      {
       "n": "Essay build",
       "b": "DRILL",
       "f": "",
       "subs": [
        "Brainstorm ✓",
        "Paragraph slotting",
        "Line-by-line expansion",
        "Supporting paragraph",
        "Opposing paragraph",
        "Intros & conclusions",
        "Timed speed writing"
       ]
      }
     ]
    },
    {
     "name": "PAPER 2 — COMPREHENSION",
     "topics": [
      {
       "n": "Comprehension",
       "b": "DRILL",
       "f": "",
       "subs": [
        "Paraphrase & inference",
        "Summary technique",
        "Application Question",
        "3–4 timed papers"
       ]
      }
     ]
    }
   ]
  }
 },
 "drop": [
  "Chemistry Gaseous State + Polymers → coverage-only, don't drill.",
  "CSC Foreign Affairs → P1-case content only; skip full-essay drilling.",
  "Biology Stem Cells, fine Cell Cycle detail, insulin/glucagon specifics → learn the named traps only.",
  "GP Economics theme → keep as a lens, don't build a full evidence bank.",
  "Everything marked COVERAGE stays coverage-only until a timed paper proves you need it."
 ],
 "never": [
  "Maths Vectors / Stats",
  "Chem Aqueous Equilibria + Organic Map",
  "CSC Economy + Cross-Topic Bridge",
  "Bio Inheritance / Evolution / Biostatistics",
  "GP Application Question"
 ],
 "days": [
  {
   "n": 1,
   "date": "2026-07-16",
   "weekday": "Thu",
   "week": 1,
   "type": "standard",
   "subject": "chem",
   "label": "Chem (new) · finish Governance · GP slotting",
   "focus": "Day 1. Start Chemistry (Stoichiometry & Redox — the calc backbone), close the last CSC Governance gaps, and lock GP Phase 2 (paragraph slotting) while it is fresh.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Stoichiometry & Redox (new cluster, built at session start)",
     "desc": "Method → worked example → practice Q+A: mole / limiting-reagent / %-yield calcs, redox half-equations, oxidation numbers, titration. Then drilled.",
     "done": true,
     "doneDate": "16 Jul",
     "clusterRef": "Stoichiometry & Redox"
    },
    {
     "mins": 60,
     "subject": "csc",
     "name": "CSC — finish Governance gap clusters",
     "desc": "Close the remaining Governance gaps so it is fully test-ready for Sunday.",
     "done": true,
     "doneDate": "16 Jul"
    },
    {
     "mins": 60,
     "subject": "gp",
     "name": "GP — Phase 2: paragraph slotting",
     "desc": "Finish Phase 2 (50m ×2) in one focused block while it is fresh.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Essay — slotting, expansion & body paragraphs"
    }
   ]
  },
  {
   "n": 2,
   "date": "2026-07-17",
   "weekday": "Fri",
   "week": 1,
   "type": "standard",
   "subject": "maths",
   "label": "Maths (Vectors — new) + GP slotting",
   "focus": "Day 2. Start Maths Vectors — your biggest remaining Maths chunk now Calculus is done (2h study + 1h drill). Then a light 1h GP: one Phase-2 paragraph-slotting session. GP stays a ~1h drip every ~3 days from here.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 180,
     "subject": "maths",
     "name": "Maths — Vectors Cluster 1 (new): study (2h) + drill (1h)",
     "desc": "Basics, products & ratio theorem. Built the morning you study it.",
     "done": true,
     "doneDate": "17 Jul",
     "clusterRef": "Vectors — Basics, Products & Ratio Theorem"
    },
    {
     "mins": 60,
     "subject": "gp",
     "name": "GP — Phase 2 paragraph slotting (session 1 of 2, ~50 min)",
     "desc": "Just lock one slotting session. Next GP session is ~3 days out.",
     "done": true,
     "doneDate": "17 Jul",
     "clusterRef": "Essay — slotting, expansion & body paragraphs"
    }
   ]
  },
  {
   "n": 3,
   "date": "2026-07-18",
   "weekday": "Sat",
   "week": 1,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — Maths (Calculus + Vectors) + CSC (Governance)",
   "focus": "First Saturday test. Timed, everything consolidated so far. Click the links to open each paper; self-mark against the hidden key, then hand the gap-list to Claude.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "maths",
     "name": "Maths — Calculus + Vectors timed paper (2h)",
     "desc": "Calculus (all) + Vectors basics. <a href=\"tests/2026-07-18-maths.html\" target=\"_blank\" style=\"color:#6ea8fe;font-weight:600\">▶ Open the Maths test ↗</a>",
     "done": true,
     "doneDate": "18 Jul"
    },
    {
     "mins": 120,
     "subject": "csc",
     "name": "CSC — Governance essay/case (2h)",
     "desc": "Two Governance essays, self-marked against the TNT standard. <a href=\"tests/2026-07-18-csc-governance.html\" target=\"_blank\" style=\"color:#e8845f;font-weight:600\">▶ Open the CSC test ↗</a>",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 4,
   "date": "2026-07-20",
   "weekday": "Mon",
   "week": 2,
   "type": "standard",
   "subject": "chem",
   "label": "Chemistry + CSC",
   "focus": "2×2h SIR. Energetics; 经济 Economy.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Energetics — Hess & Born-Haber (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Energetics — Hess & Born-Haber"
    },
    {
     "mins": 120,
     "subject": "csc",
     "name": "CSC — 经济 Economy — Structural Challenges (SOE/Debt/Regional) (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "经济 Economy — Structural Challenges (SOE/Debt/Regional)"
    }
   ]
  },
  {
   "n": 5,
   "date": "2026-07-21",
   "weekday": "Tue",
   "week": 2,
   "type": "standard",
   "subject": "maths",
   "label": "Maths + Biology",
   "focus": "2×2h SIR. Normal Distribution; Biostatistics Toolkit.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "maths",
     "name": "Maths — Normal Distribution (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Normal Distribution"
    },
    {
     "mins": 120,
     "subject": "bio",
     "name": "Biology — Biostatistics Toolkit (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Biostatistics Toolkit"
    }
   ]
  },
  {
   "n": 6,
   "date": "2026-07-22",
   "weekday": "Wed",
   "week": 2,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — clear Week-1 gap clusters",
   "focus": "Close every shaky node this week's tests exposed before piling on new content.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — flex day (absorbs the late start)",
   "focus": "Not new content. Breathing room to clear urgent gap clusters or catch up if a day slipped. Built in because you started 15 Jul, not 12 Jul.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 180,
     "name": "Clear top-priority gap clusters",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 60,
     "name": "Re-encode the weakest node",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ],
   "n": 7,
   "date": "2026-07-23",
   "weekday": "Thu",
   "week": 2
  },
  {
   "n": 8,
   "date": "2026-07-24",
   "weekday": "Fri",
   "week": 2,
   "type": "standard",
   "subject": "chem",
   "label": "Chemistry + GP",
   "focus": "2×2h SIR. Equilibria; GP essay — slotting + line-by-line expansion ⚑.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Equilibria — Kc/Kp & Le Chatelier (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Equilibria — Kc/Kp & Le Chatelier"
    },
    {
     "mins": 120,
     "subject": "gp",
     "name": "GP — Essay: paragraph slotting + line-by-line expansion (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Essay — slotting, expansion & body paragraphs"
    }
   ]
  },
  {
   "n": 9,
   "date": "2026-07-25",
   "weekday": "Sat",
   "week": 2,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — all topics covered so far",
   "focus": "Weekly cumulative test: everything covered up to today, timed and mixed. Self-mark, hand the gap-list to Claude.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "subject": "conv",
     "name": "Cumulative test — all topics to date",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark vs schemes",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Gap-list → Claude",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 10,
   "date": "2026-07-27",
   "weekday": "Mon",
   "week": 3,
   "type": "standard",
   "subject": "chem",
   "label": "Chemistry + Biology",
   "focus": "2×2h SIR. Aqueous Equilibria ⚑; Evolution.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Aqueous Equilibria — Acid-Base & pH (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Aqueous Equilibria — Acid-Base & pH"
    },
    {
     "mins": 120,
     "subject": "bio",
     "name": "Biology — Evolution — Variation, Natural Selection & Hardy-Weinberg (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Evolution — Variation, Natural Selection & Hardy-Weinberg"
    }
   ]
  },
  {
   "n": 11,
   "date": "2026-07-28",
   "weekday": "Tue",
   "week": 3,
   "type": "standard",
   "subject": "maths",
   "label": "Maths + CSC",
   "focus": "2×2h SIR. Discrete RV & Binomial; 社会 Society.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "maths",
     "name": "Maths — Discrete RV & Binomial (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Discrete RV & Binomial"
    },
    {
     "mins": 120,
     "subject": "csc",
     "name": "CSC — 社会 Society — Urbanisation, Migration & Stratification (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "社会 Society — Urbanisation, Migration & Stratification"
    }
   ]
  },
  {
   "n": 12,
   "date": "2026-07-29",
   "weekday": "Wed",
   "week": 3,
   "type": "standard",
   "subject": "chem",
   "label": "Chemistry + Biology",
   "focus": "2×2h SIR. Organic; Mutations & Cancer.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Organic — Foundations & the 5 Mechanisms (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Organic — Foundations & the 5 Mechanisms"
    },
    {
     "mins": 120,
     "subject": "bio",
     "name": "Biology — Mutations & Cancer (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Mutations & Cancer"
    }
   ]
  },
  {
   "n": 13,
   "date": "2026-07-30",
   "weekday": "Thu",
   "week": 3,
   "type": "standard",
   "subject": "chem",
   "label": "Chemistry + GP",
   "focus": "2×2h SIR. Organic ⚑; GP essay — supporting + opposing view paragraphs.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Organic — Reaction Map & Synthesis (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Organic — Reaction Map & Synthesis"
    },
    {
     "mins": 120,
     "subject": "gp",
     "name": "GP — Essay: supporting + opposing view paragraphs (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Essay — slotting, expansion & body paragraphs"
    }
   ]
  },
  {
   "n": 14,
   "date": "2026-07-31",
   "weekday": "Fri",
   "week": 3,
   "type": "standard",
   "subject": "gp",
   "label": "GP + Chemistry (2nd)",
   "focus": "GP essay — intros, conclusions + speed writing + deepen the biggest calc topic (Aqueous Equilibria ⚑).",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "gp",
     "name": "GP — Essay: intros, conclusions + speed writing (SIR)",
     "desc": "SIR — Study/encode the cluster (~60 min), then the test part: adversarial self-test at Application level + close the gaps it exposes.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Essay — intros, conclusions & timed writing"
    },
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Aqueous Equilibria — Acid-Base & pH · 2nd pass",
     "desc": "Deepen this ⚑ high-value cluster. Re-test at a NEW angle; anything shaky becomes a gap cluster. FRAGILE→CLOSED only on a confident pass.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Aqueous Equilibria — Acid-Base & pH"
    }
   ]
  },
  {
   "n": 15,
   "date": "2026-08-01",
   "weekday": "Sat",
   "week": 3,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — all topics covered so far",
   "focus": "Weekly cumulative test: everything covered up to today, timed and mixed. Self-mark, hand the gap-list to Claude.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "subject": "conv",
     "name": "Cumulative test — all topics to date",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark vs schemes",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Gap-list → Claude",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 16,
   "date": "2026-08-03",
   "weekday": "Mon",
   "week": 4,
   "type": "standard",
   "subject": "csc",
   "label": "CSC (2nd) + Chemistry (2nd)",
   "focus": "2nd pass on the two highest-leverage synthesis units: CSC Cross-Topic Bridge ⚑; Organic Reaction Map ⚑.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "csc",
     "name": "CSC — 跨课题 Cross-Topic Bridge & Deployment · 2nd pass",
     "desc": "Deepen this ⚑ high-value cluster. Re-test at a NEW angle; anything shaky becomes a gap cluster. FRAGILE→CLOSED only on a confident pass.",
     "done": false,
     "doneDate": null,
     "clusterRef": "跨课题 Cross-Topic Bridge & Deployment"
    },
    {
     "mins": 120,
     "subject": "chem",
     "name": "Chemistry — Organic — Reaction Map & Synthesis · 2nd pass",
     "desc": "Deepen this ⚑ high-value cluster. Re-test at a NEW angle; anything shaky becomes a gap cluster. FRAGILE→CLOSED only on a confident pass.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Organic — Reaction Map & Synthesis"
    }
   ]
  },
  {
   "n": 17,
   "date": "2026-08-04",
   "weekday": "Tue",
   "week": 4,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — Maths stats + Bio genetics precision",
   "focus": "Target the two most error-prone quantitative areas.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 18,
   "date": "2026-08-05",
   "weekday": "Wed",
   "week": 4,
   "type": "standard",
   "subject": "bio",
   "label": "Biology (2nd) + GP (2nd)",
   "focus": "2nd pass: Evolution/Hardy-Weinberg ⚑; GP Paper 2 — summary + Application Question ⚑.",
   "flag": "⚑",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "subject": "bio",
     "name": "Biology — Evolution — Variation, Natural Selection & Hardy-Weinberg · 2nd pass",
     "desc": "Deepen this ⚑ high-value cluster. Re-test at a NEW angle; anything shaky becomes a gap cluster. FRAGILE→CLOSED only on a confident pass.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Evolution — Variation, Natural Selection & Hardy-Weinberg"
    },
    {
     "mins": 120,
     "subject": "gp",
     "name": "GP — Paper 2: summary technique + AQ + timed comprehension",
     "desc": "Deepen this ⚑ high-value cluster. Re-test at a NEW angle; anything shaky becomes a gap cluster. FRAGILE→CLOSED only on a confident pass.",
     "done": false,
     "doneDate": null,
     "clusterRef": "Paper 2 — comprehension, summary & AQ"
    }
   ]
  },
  {
   "n": 19,
   "date": "2026-08-06",
   "weekday": "Thu",
   "week": 4,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — clear ALL remaining gap clusters",
   "focus": "Content is in. Everything still ACTIVE gets one focused drill.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 20,
   "date": "2026-08-07",
   "weekday": "Fri",
   "week": 4,
   "type": "paper",
   "subject": "maths",
   "label": "Maths past paper (P1 + P2)",
   "focus": "",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "name": "Timed paper (P1 + P2)",
     "desc": "Full conditions. No notes, no pausing.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "Against the mark scheme + the trap model.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Write gap-list → Claude",
     "desc": "This drives the next drill.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 21,
   "date": "2026-08-08",
   "weekday": "Sat",
   "week": 4,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — Chemistry past paper (P1 + P2)",
   "focus": "This week the Saturday test is a full Chemistry past paper.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "subject": "chem",
     "name": "Timed paper (P1 + P2)",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Gap-list → Claude",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — flex / convergence",
   "focus": "Catch-up + re-encode the weakest ACTIVE nodes. Slack that keeps the plan honest.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 180,
     "name": "Clear top-priority gap clusters",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 60,
     "name": "Re-encode the weakest node",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ],
   "n": 22,
   "date": "2026-08-10",
   "weekday": "Mon",
   "week": 5
  },
  {
   "n": 23,
   "date": "2026-08-11",
   "weekday": "Tue",
   "week": 5,
   "type": "paper",
   "subject": "bio",
   "label": "Biology past paper (P1 + P2)",
   "focus": "",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "name": "Timed paper (P1 + P2)",
     "desc": "Full conditions. No notes, no pausing.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "Against the mark scheme + the trap model.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Write gap-list → Claude",
     "desc": "This drives the next drill.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 24,
   "date": "2026-08-12",
   "weekday": "Wed",
   "week": 5,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — close the gaps the 3 papers exposed",
   "focus": "Maths/Chem/Bio paper gap-lists → focused drills.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 25,
   "date": "2026-08-13",
   "weekday": "Thu",
   "week": 5,
   "type": "paper",
   "subject": "csc",
   "label": "CSC past paper (P1 + P2)",
   "focus": "",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "name": "Timed paper (P1 + P2)",
     "desc": "Full conditions. No notes, no pausing.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "Against the mark scheme + the trap model.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Write gap-list → Claude",
     "desc": "This drives the next drill.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 26,
   "date": "2026-08-14",
   "weekday": "Fri",
   "week": 5,
   "type": "paper",
   "subject": "gp",
   "label": "GP past paper (P1 + P2)",
   "focus": "",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "name": "Timed paper (P1 + P2)",
     "desc": "Full conditions. No notes, no pausing.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "Against the mark scheme + the trap model.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Write gap-list → Claude",
     "desc": "This drives the next drill.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 27,
   "date": "2026-08-15",
   "weekday": "Sat",
   "week": 5,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — all topics covered so far",
   "focus": "Weekly cumulative test: everything covered up to today, timed and mixed. Self-mark, hand the gap-list to Claude.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "subject": "conv",
     "name": "Cumulative test — all topics to date",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark vs schemes",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Gap-list → Claude",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 28,
   "date": "2026-08-17",
   "weekday": "Mon",
   "week": 6,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — most urgent ACTIVE nodes",
   "focus": "Whatever the cumulative mock + papers left open.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 29,
   "date": "2026-08-18",
   "weekday": "Tue",
   "week": 6,
   "type": "review",
   "subject": "conv",
   "label": "Second timed paper — weakest subject",
   "focus": "Chosen from your Week-4/5 results.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 150,
     "name": "Second timed paper — weakest subject",
     "desc": "Full conditions.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 50,
     "name": "Self-mark",
     "desc": "Against scheme + trap model.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Re-read synthesis clusters",
     "desc": "CSC Cross-Topic · Bio Evolution/Genetics.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 30,
   "date": "2026-08-19",
   "weekday": "Wed",
   "week": 6,
   "type": "buffer",
   "subject": "conv",
   "label": "Buffer — close gaps the weakest-subject paper exposed",
   "focus": "",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Clear gap clusters",
     "desc": "Every gap cluster this week's tests spawned. Priority-1 (confident + wrong) first.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Re-test at a new angle",
     "desc": "FRAGILE → CLOSED only on a second confident pass. What's still shaky stays ACTIVE.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 31,
   "date": "2026-08-20",
   "weekday": "Thu",
   "week": 6,
   "type": "review",
   "subject": "conv",
   "label": "Final review — trap models + excluded scope",
   "focus": "Across all five subjects. Don't over-answer — excluded scope is the biggest lever.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Trap-model pass — all 5 subjects",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 80,
     "name": "Excluded-scope lists",
     "desc": "Over-answering loses marks — know what NOT to write.",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 40,
     "name": "Recall check",
     "desc": "Name sub-clusters cold.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 32,
   "date": "2026-08-21",
   "weekday": "Fri",
   "week": 6,
   "type": "review",
   "subject": "conv",
   "label": "Recall check — name it all cold",
   "focus": "Every big topic's sub-clusters, from memory.",
   "flag": "",
   "mins": 240,
   "blocks": [
    {
     "mins": 120,
     "name": "Recall check — every topic's sub-clusters cold",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 120,
     "name": "Skim synthesis clusters",
     "desc": "CSC Cross-Topic · Bio Evolution/Genetics · Organic Map.",
     "done": false,
     "doneDate": null
    }
   ]
  },
  {
   "n": 33,
   "date": "2026-08-22",
   "weekday": "Sat",
   "week": 6,
   "type": "test",
   "subject": "conv",
   "label": "Saturday test — final full mock (all subjects)",
   "focus": "Final timed mock across everything before the prelim (GP P1 is Mon 24 Aug). Rest tomorrow.",
   "flag": "⚑",
   "mins": 300,
   "blocks": [
    {
     "mins": 240,
     "subject": "conv",
     "name": "Final mock — all subjects covered",
     "desc": "",
     "done": false,
     "doneDate": null
    },
    {
     "mins": 60,
     "name": "Trap-model + logistics review",
     "desc": "",
     "done": false,
     "doneDate": null
    }
   ]
  }
 ],
 "rest": [
  "2026-07-19",
  "2026-07-26",
  "2026-08-02",
  "2026-08-09",
  "2026-08-16",
  "2026-08-23"
 ],
 "weekTitles": {
  "1": "Launch — interleaved content, 2 subjects/day (short first week)",
  "2": "Content + weekly cumulative tests running",
  "3": "All content in — deepen the ⚑ high-value units",
  "4": "Timed papers week + cumulative test",
  "5": "Convergence — close paper gaps, retest weakest",
  "6": "Final review + full mock before prelim (GP 24 Aug)"
 },
 "bounds": [
  [
   1,
   1,
   3
  ],
  [
   2,
   4,
   9
  ],
  [
   3,
   10,
   15
  ],
  [
   4,
   16,
   21
  ],
  [
   5,
   22,
   27
  ],
  [
   6,
   28,
   33
  ]
 ],
 "log": [
  {
   "date": "2026-07-18",
   "weekday": "Sat",
   "items": [
    {
     "subject": "maths",
     "mins": 120,
     "what": "Saturday timed paper — Calculus + Vectors ✓ (awaiting results)",
     "done": true
    },
    {
     "subject": "csc",
     "mins": 0,
     "what": "CSC Governance paper — NOT done yet (pending)",
     "done": false
    },
    {
     "subject": "chem",
     "mins": 0,
     "what": "Gap cluster (Stoich & Redox weakspots) drilled ✓ — topic fully consolidated",
     "done": true
    },
    {
     "subject": "maths",
     "mins": 0,
     "what": "Vectors gap cluster drilled ✓ — content solid; flagged real gaps (collinearity, cevians, perpendicular). Rebuilding harder.",
     "done": true
    }
   ],
   "note": "Did the Maths paper, not the CSC one. Next: finish the Chemistry cluster (drilling) + the CSC Governance paper. Math + Chem gap clusters still outstanding."
  },
  {
   "date": "2026-07-17",
   "weekday": "Fri",
   "items": [
    {
     "subject": "maths",
     "mins": 165,
     "what": "Vectors Cluster 1 — basics, products & ratio theorem (2h45)",
     "done": true
    },
    {
     "subject": "gp",
     "mins": 60,
     "what": "Finished GP Phase-2 paragraph slotting; asked Ms Tammy for results",
     "done": true
    }
   ],
   "note": "3h45. Vectors basics done; awaiting Ms Tammy feedback on GP. Math gap cluster + Chem gap deferred to Monday."
  },
  {
   "date": "2026-07-16",
   "weekday": "Thu",
   "items": [
    {
     "subject": "csc",
     "mins": 60,
     "what": "Finished CSC Governance — all gap clusters closed",
     "done": true
    },
    {
     "subject": "chem",
     "mins": 150,
     "what": "Finished Cluster 1 — Stoichiometry & Redox (full cluster)",
     "done": true
    },
    {
     "subject": "gp",
     "mins": 0,
     "what": "GP Phase-2 slotting — NOT done (ran out of Claude credits)",
     "done": false
    }
   ],
   "note": "3h30 done. GP deferred to 17 Jul. Governance + Stoichiometry & Redox now enter the Saturday test pool."
  },
  {
   "date": "2026-07-15",
   "weekday": "Wed",
   "items": [
    {
     "subject": "maths",
     "mins": 120,
     "what": "Calculus — Cluster 6 (Differential Equations mastery) ✓ entire Calculus topic complete",
     "done": true
    },
    {
     "subject": "csc",
     "mins": 60,
     "what": "Governance gap clusters (in progress, ~1h left)",
     "done": false
    }
   ],
   "note": "Pre-plan catch-up before Day 1. Calculus fully done; the last Governance gaps carry into tomorrow."
  }
 ],
 "exams": [
  {
   "date": "2026-08-24",
   "weekday": "Mon",
   "subject": "gp",
   "paper": "Paper 1",
   "time": "08:15",
   "dur": "1h30"
  },
  {
   "date": "2026-08-25",
   "weekday": "Tue",
   "subject": "chem",
   "paper": "Paper 4 · Practical",
   "time": "AM/PM",
   "dur": "2h30"
  },
  {
   "date": "2026-08-26",
   "weekday": "Wed",
   "subject": "gp",
   "paper": "Paper 2",
   "time": "08:15",
   "dur": "1h30"
  },
  {
   "date": "2026-08-27",
   "weekday": "Thu",
   "subject": "bio",
   "paper": "Paper 2",
   "time": "08:15",
   "dur": "2h"
  },
  {
   "date": "2026-08-28",
   "weekday": "Fri",
   "subject": "maths",
   "paper": "Paper 1",
   "time": "08:15",
   "dur": "3h"
  },
  {
   "date": "2026-08-31",
   "weekday": "Mon",
   "subject": "bio",
   "paper": "Paper 4 · Practical",
   "time": "AM/PM",
   "dur": "2h30"
  },
  {
   "date": "2026-09-02",
   "weekday": "Wed",
   "subject": "chem",
   "paper": "Paper 2",
   "time": "08:15",
   "dur": "2h"
  },
  {
   "date": "2026-09-14",
   "weekday": "Mon",
   "subject": "csc",
   "paper": "Paper 1",
   "time": "14:00",
   "dur": "2h45"
  },
  {
   "date": "2026-09-15",
   "weekday": "Tue",
   "subject": "bio",
   "paper": "Paper 3",
   "time": "08:15",
   "dur": "2h"
  },
  {
   "date": "2026-09-16",
   "weekday": "Wed",
   "subject": "chem",
   "paper": "Paper 3",
   "time": "08:15",
   "dur": "2h"
  },
  {
   "date": "2026-09-17",
   "weekday": "Thu",
   "subject": "maths",
   "paper": "Paper 2",
   "time": "08:15",
   "dur": "3h"
  },
  {
   "date": "2026-09-18",
   "weekday": "Fri",
   "subject": "csc",
   "paper": "Paper 2",
   "time": "14:00",
   "dur": "2h30"
  },
  {
   "date": "2026-09-21",
   "weekday": "Mon",
   "subject": "chem",
   "paper": "Paper 1",
   "time": "14:00",
   "dur": "1h"
  },
  {
   "date": "2026-09-22",
   "weekday": "Tue",
   "subject": "bio",
   "paper": "Paper 1 · MCQ",
   "time": "14:00",
   "dur": "1h"
  }
 ],
 "testTopics": [
  {
   "subject": "maths",
   "topic": "Calculus",
   "status": "done · main + gap ✓",
   "date": "done",
   "subs": [
    "Differentiation & Maclaurin",
    "Integration",
    "Differential equations",
    "Applications & sketching"
   ]
  },
  {
   "subject": "maths",
   "topic": "Vectors — Basics, Products & Ratio Theorem",
   "status": "done · main + gap ✓",
   "date": "18 Jul",
   "subs": [
    "Unit vectors & magnitude",
    "Scalar & vector products",
    "Ratio theorem",
    "Collinearity via displacement",
    "Foot of perpendicular"
   ]
  },
  {
   "subject": "chem",
   "topic": "Stoichiometry & Redox",
   "status": "done · main + gap ✓",
   "date": "18 Jul",
   "subs": [
    "Mole toolkit & gas volumes",
    "Empirical→molecular",
    "Limiting reagent & % yield",
    "Titration & back-titration",
    "Oxidation numbers & half-equations"
   ]
  },
  {
   "subject": "csc",
   "topic": "Governance",
   "status": "done",
   "date": "16 Jul",
   "subs": [
    "Foundation & power structure",
    "Constraining power",
    "Managing society",
    "Gap clusters + synthesis"
   ]
  }
 ]
};
