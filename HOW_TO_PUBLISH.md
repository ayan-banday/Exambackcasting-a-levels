# How to publish this folder to GitHub (manual)

This folder is **already a git repository** with everything committed. You just need to create an
empty repo on GitHub and push to it. Pick whichever method you prefer. *(You can delete this file
after publishing — it's only here as a guide.)*

---

## Option A — GitHub Desktop (easiest, no commands)

1. Install **GitHub Desktop** (https://desktop.github.com) and sign in.
2. **File → Add local repository…** → choose this folder:
   `D:\Singapore A-Level Exam Backcasting`
3. Click **Publish repository** (top bar).
4. **Keep "Keep this code private" ticked** (recommended — it holds personal study data and past
   papers). Click **Publish**.
5. Done. Future changes: type a summary in GitHub Desktop → **Commit to main** → **Push origin**.

---

## Option B — Command line

1. On https://github.com → **New repository**. Name it e.g. `Singapore-A-Level-Exam-Backcasting`,
   set **Private**, and **do NOT** add a README/.gitignore/license (this folder already has them).
   Click **Create repository**.
2. Copy the repo URL GitHub shows you, then in this folder run (replace the URL with yours):

   ```powershell
   git remote add origin https://github.com/<your-username>/Singapore-A-Level-Exam-Backcasting.git
   git push -u origin main
   ```

3. If prompted to sign in, a browser/credential window will appear — authorize it. Done.
4. Future changes:

   ```powershell
   git add -A
   git commit -m "describe what changed"
   git push
   ```

---

## Notes

- **Private vs public:** keep it **private**. It currently commits everything, including `inputs/`
  (which may hold copyrighted past papers) and your gap/progress data.
- **Making it public later / reusing as a clean template:** open `.gitignore` and uncomment the
  "privacy upgrade path" block to stop tracking personal materials and progress.
- **Collaborators (assistant + student):** on GitHub → repo **Settings → Collaborators** → invite
  them. They `git pull` before working and `git push` after.
- **Voice transcripts are never committed** — `.gitignore` already blocks them.
