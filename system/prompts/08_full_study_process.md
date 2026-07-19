# Prompt 08 — The full step-by-step study process (Ethan's SOP)

**What this is:** Ethan's end-to-end process for studying a declarative topic in its own subject chat —
written for CSC/Governance but it is the **exact method for Biology and Chemistry declarative topics too**
(see the Bio/Chem note at the bottom). Save every prompt verbatim. Pairs with the declarative method
([06_declarative_method.md](06_declarative_method.md)) and the difficulty rules
([07_procedural_difficulty.md](07_procedural_difficulty.md)).

---

## 1. Understand the system (paste into Claude Code, xhigh Opus 4.8)

```
Hey, my friend created this agent for me to study. I have no idea how this works. I want you to give me a brief overview of going through this entire folder and understanding it enough so that you can give me a summary of it. Second, I want to study governance today. Walk me through the methodology for studying that, and give me just a big-picture overview. I tell you to do stuff when I want you to.
```

## 2. Load the materials

Put the model papers, teacher recommendations, and school resources for that topic into the same chat
(e.g. Governance / the relevant CSC 课题).

## 3. Create the clusters (paste verbatim)

```
Okay, today I want to study [TOPIC]. I would like you to take a look at the subject-level guide and topic-level guide for [TOPIC] [SUBJECT]. I would like you to take a look at all the input files I have given you and make sure the subject level and topic level guides are correct. If they are not, automatically update them to reflect the ground truth of the material I'm presenting to you then and generate me a pre-study sheet. After I study it, it should make complete sense to me, and then we can go and create detailed three clusters that cover the entire subject so that after I study it, I'll be able to solve any questions.
```

## 4. Pre-study the whole topic

- Open the pre-study sheet it generates. Collect the keywords, then work out the **big 3 ideas**.
- Teach those back to Claude — your best understanding of the chapter — and ask it to confirm whether you
  understood it, and to give you a better picture of what the chapter is.

## 5. Study cluster 1 (understand it)

- Pick a subtopic and ask "what is this subtopic?" — **red-light questions**.
- Try to answer yourself first, then read the material to understand.
- If you don't understand, ask ChatGPT.
- Keep going until you'd get ~**30%** if tested right now.

## 6. Get the questions after cluster 1 (paste verbatim)

```
Hey Claude, I've studied cluster one of governance. Please do the following:
1. Store the cluster in its appropriate place if it's not already.
2. Give me a list of questions. After I answer them I can be sure I can do really well in my exams and I will never lose any marks. The questions should cover the important gaps for my exam but no more. You are not going to ask me similar questions that test some other concepts twice so we maximize efficiency.
```

## 7. Solve with the extended method + Loom

- Turn Loom / transcription **on**. Pick one question ("what is a tomato?").
- Ask more red-light questions around it (why is a tomato, what happens if we eat it, etc.).
- Try to answer in your head for ~3 minutes — you should feel the cognitive load.
- If you can answer with some confidence, answer all questions aloud (transcription running) to save time.
- When you hit a gap, **say it explicitly**: "I found a gap, it's X" / "I don't understand X, Y, Z" /
  "I'm answering this but my confidence is low."

## 8. Hand the transcript back (paste verbatim)

```
Hey, I've given you the transcript of me solving questions and using one question to solve multiple questions. I want you to automatically go through this and use our protocols to flag knowledge gaps. Give me a summary of how I'm doing and what patterns you're noticing that I'm getting wrong.
At the same time I would like you to see the questions I couldn't answer that I think I was curious about and then generate an entirely new cluster that covers all of those knowledge gaps. Without necessarily directly referencing the question types, after I understand the entire cluster (inspired mostly because of my questions that I couldn't answer and the confusions I had), it allows me to do really well in the exam and get basically 100%.
```

## 9. Keep a working doc + Loom (deliverable)

While doing all this, keep a doc open:
- What you're doing — the list of actions ("I opened Claude, then I asked this question").
- What was difficult, what went well ("it was difficult to answer X because of B, and this looked like X").
- Record a **>5-minute Loom** walking through the doc: what was difficult and what would make the next
  study session easier. **Deliverable = that Loom asking for feedback.**

---

## Biology & Chemistry — same method

For **Bio and Chemistry declarative topics**, run this exact process, not a one-off cluster. Always start
from the exam list, then use the subject-level and topic-level guides to **split the topic into three
clusters**; each cluster gets its own knowledge-gap cluster, so a big topic lands at **~6 clusters**
(cluster 1 + gap, cluster 2 + gap, cluster 3 + gap). A small J1-foundation topic (e.g. Chemical Bonding)
can be a single bare-bones cluster instead. Depth per cluster stays bare-bones (Layer 2); the three
clusters give breadth. The real learning is still the extended-question drill in steps 6–8.
