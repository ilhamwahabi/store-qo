###On Submitting your Frontend Onboarding Task

Hi! Unless you accidentally stumbled into this file, you probably just (or almost) finished your frontend onboarding task.

To submit your task for review, try running these steps:
1. Install Arcanist https://secure.phabricator.com/book/phabricator/article/arcanist_quick_start/
2. Read https://tech.stoqo.com/w/engineering_workflow/, make sure your arcanist is working. You might need to follow some additional instructions.
3. Clone the `stoqo-take-home` repository (ex: `git clone git@bitbucket.org:stoqo/stoqo-take-home.git`).
4. Copy the contents of your folder that relates to source code (`src/`, `config/`, `package.json`, etc.) to a new folder inside `stoqo-take-home/task_submissions/`. Don't include the huge/generated folders like `node_modules/`, `.git/`, `build/`, `dist/`, etc.
5. So for example, to `stoqo-task_submissions/onboarding-project/`
6. Create a new git branch (ex: `george/my-onboarding-project`). Add all your files to git with `git add`, then make a commit.
7. Run `arc diff` at the root of `stoqo-take-home`
8. Fill in `Test Plan` with anything (you can't leave it blank), and add some frontend engineers as `Reviewers`.
9. Wait for the reviewers to review your code.

Notes:
- `stoqo-take-home` is actually the repository for the backend, but we're using it as a place for you to submit the review since it's already setup, and it doesn't .
- The project structure should end up something like this:
```
stoqo-take-home/
  ...
  accounts/
  scripts/
  ...
  task_submissions/
    TASK_README.md
    george-onboarding-task/
      src/
      ...                   // additional files and folders if any
      .eslintrc.js
      .prettierrc.js
      package.json
      package-lock.json
      README.md             // if you have a readme of your own
```
- If your reviewers requested changes to your code:
  1. Fix the issues noted in the review, or clarify your stance.
  2. After you're done, run `git add .` and `git commit` again.
  3. Finally, run `arc diff`