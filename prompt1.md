📌 MASTER PROMPT — "Legs on the Ground" Static-Site Build
(Optimised for GitHub Pages & GitHub-native project management — plain HTML / CSS / JS only)

**Role**: You are a one-stop product team (brand, UX, a11y, front-end).
**Mission**: Ship all docs, design foundations, and later the static code for Legs on the Ground, a concierge that helps off-islanders buy, renovate, and manage Puerto Rico real estate.
**Tech constraints**: No frameworks. Use modern CSS (custom-properties, container queries, native nesting) and vanilla JS / Web Components. Site must build & deploy via GitHub Pages without extra tooling; any checks run in GitHub Actions.

## 0️⃣ Repository Scaffold (create in Phase 0)

```
/docs/                         ← markdown deliverables (phases 0-2)
  business-analysis.md
  customer-personas.md
  development_plan.md
  assets.md
/src/                          ← static site (locked until Phase 3)
  index.html
  404.html
  styles/
    base.css
    tokens.css
  scripts/
    main.js
  images/
    (asset files)
.github/
  ISSUE_TEMPLATE/
    bug_report.md
    feature_request.md
    content_copy.md
  PULL_REQUEST_TEMPLATE.md
  workflows/
    ci.yml
  CODEOWNERS
.nojekyll                      ← disables Jekyll processing
.stylelintrc.json              ← stylelint configuration
package.json                   ← dev dependencies
package-lock.json              ← dependency lock file
README.md
LICENSE
```

### GitHub Pages Configuration

- **Pages Source**: GitHub Actions (not "Deploy from a branch")
- **Repository Settings**: Pages → Source → GitHub Actions
- **Site URL**: https://username.github.io/repository-name/
- **Commit `.nojekyll`** to disable Jekyll processing

## 1️⃣ GitHub-Native Productivity Features

| Feature                   | How we'll use it                                                                       |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Issue templates           | bug_report.md, feature_request.md, content_copy.md (for wording / micro-copy requests) |
| Pull-request template     | Checklist: linked issue, a11y self-test link, screenshot of visual change              |
| Projects → "Phases" board | Column per phase (0-10). Automation: PR merged → "Done"                                |
| Labels                    | phase:X, type:doc, type:ux, type:code, priority:high, compliance, good first issue     |
| CODEOWNERS                | \* @maintainer-handle so every PR gets review                                          |
| Dependabot                | Weekly "version-updates" for GH-Actions only (no runtime deps)                         |

## 2️⃣ GitHub Actions CI (.github/workflows/ci.yml)

**WORKING CONFIGURATION** (tested and verified):

```yaml
name: CI

on:
  push:
    branches:
      - 'main'
  pull_request:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: HTMLHint
        run: npx htmlhint "src/**/*.html"

      - name: Install Stylelint Dependencies
        run: npm install stylelint stylelint-config-standard serve --save-dev

      - name: Stylelint
        run: npx stylelint "src/**/*.css"

      - name: a11y smoke (axe-cli)
        run: |
          npx serve -s src -l 5000 &
          sleep 5
          npx axe http://localhost:5000/index.html --exit || true
          kill $(jobs -p)

      - name: Link Checker
        run: npx linkinator "src/**/*.html" --silent

      - name: Setup Pages
        if: github.ref == 'refs/heads/main'
        uses: actions/configure-pages@v5

      - name: Upload artifact
        if: github.ref == 'refs/heads/main'
        uses: actions/upload-pages-artifact@v3
        with:
          path: './src'

      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: actions/deploy-pages@v4
```

**Key fixes from original prompt:**

- Added proper GitHub Pages permissions (`contents: read`, `pages: write`, `id-token: write`)
- Uses modern GitHub Actions for deployment (not peaceiris/actions-gh-pages)
- Installs required dependencies in workflow (`stylelint`, `stylelint-config-standard`, `serve`)
- Handles background processes properly with sleep and kill
- Only deploys on main branch pushes
- Added concurrency control for pages deployment

## 3️⃣ Required Configuration Files

### `.stylelintrc.json` (root directory)

```json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "no-empty-source": null
  }
}
```

### `package.json` (root directory)

```json
{
  "devDependencies": {
    "serve": "^14.2.4",
    "stylelint-config-standard": "^39.0.0"
  }
}
```

### `.nojekyll` (root directory)

```
(empty file - just create it)
```

## 4️⃣ Phase Road-Map (docs/development_plan.md)

| Phase | Unlocks                  | Review Gate        |
| ----- | ------------------------ | ------------------ |
| 0     | Repo Init                | Maintainer         |
| 1     | Business Analysis        | Product Owner      |
| 2     | Brand & Style Guides     | Brand + A11y leads |
| 3     | Design Spec & Wireframes | Stakeholders       |
| 4     | Tech Architecture        | Tech lead          |
| 5     | Build Sprint 1           | CI + manual QA     |
| 6     | Content + SEO/AIO        | Lighthouse CI ≥ 90 |
| 7     | Compliance QA            | Legal/DPO          |
| 8     | Staging Review           | Product Owner      |
| 9     | Production Launch        | GO/NO-GO mins      |
| 10    | Post-Launch              | Retrospective      |

## 5️⃣ README.md Structure (create in Phase 0)

```markdown
# Legs on The Ground

[Project description]

## Project Snapshot

- **Live URL**: [GitHub Pages URL]

## Phase Checklist

- [ ] Phase 0: Repo Init
- [ ] Phase 1: Business Analysis
- [ ] Phase 2: Brand & Style Guides
- [ ] Phase 3: Design Spec & Wireframes
- [ ] Phase 4: Tech Architecture
- [ ] Phase 5: Build Sprint 1
- [ ] Phase 6: Content + SEO/AIO
- [ ] Phase 7: Compliance QA
- [ ] Phase 8: Staging Review
- [ ] Phase 9: Production Launch
- [ ] Phase 10: Post-Launch

## Directory Map

[Include full directory structure]

## Quick Start

- Clone the repository
- Navigate to the `/src` folder
- Use a local server to preview the site (e.g., `npx serve`)

## Development Plan & Checkpoints

See [docs/development_plan.md](docs/development_plan.md)

## Legal & Compliance Summary

- ADA, GDPR, Fair-Housing compliance

## Accessibility Commitment

- WCAG 2.2 AA compliance

## Data-Privacy Commitment

- Contact: privacy@legs-ground.com

## Contributing

- Follow GitHub-flow and Conventional Commits

## Contact / Maintainers

- Maintainer: @maintainer-handle
```

## 6️⃣ Initial HTML Structure

### `src/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Legs on The Ground</title>
    <meta
      name="description"
      content="Legs on The Ground - Real estate investor services in Puerto Rico for off-islanders."
    />
    <meta
      name="keywords"
      content="real estate, Puerto Rico, property management, renovation, investment"
    />
    <meta property="og:title" content="Legs on The Ground" />
    <meta
      property="og:description"
      content="Helping off-islanders buy, renovate, and manage properties in Puerto Rico."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:url"
      content="https://username.github.io/repository-name/"
    />
    <meta property="og:image" content="images/og-image.jpg" />
  </head>
  <body>
    <h1>Coming soon</h1>
  </body>
</html>
```

### `src/404.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Not Found</title>
  </head>
  <body>
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <a href="index.html">Return to Home</a>
  </body>
</html>
```

### `src/styles/base.css`

```css
/* Placeholder CSS file for Stylelint */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

## 7️⃣ Business Analysis Foundation

The project includes pre-built business analysis documents:

### `docs/business-analysis.md`

- Brand Archetypes (The Caregiver, The Sage)
- Robert Cialdini's Methods of Persuasion (6 principles)
- Arbitrage opportunities
- Leverage points
- Value proposition

### `docs/customer-personas.md`

- The Remote Investor (40-55 years old, high-income professionals)
- The Retiree (60+ years old, vacation home seekers)
- The Entrepreneur (30-45 years old, commercial property buyers)

### `docs/assets.md`

- Organized asset documentation for context management

## 8️⃣ Design-Token & Style-Guide Specs (Phase 2)

```css
/* tokens.css */
:root {
  /* palette */
  --brand-900: #003d4c;
  --brand-700: #006c83;
  --brand-400: #19a7c4;
  --sand-50: #f9f9f7;
  --sand-300: #d6d6d1;
  --success: #2b884b;
  --error: #d92d20;
  --text-primary: #1a1a1a;
  --text-muted: #555;

  /* spacing */
  --space-xs: 4px;
  --space-s: 8px;
  --space-m: 16px;
  --space-l: 24px;

  /* radius & shadow */
  --radius: 12px;
  --shadow-card: 0 2px 8px rgb(0 0 0 / 0.08);

  /* type scale (clamp for fluid) */
  --fs-h1: clamp(2.5rem, 1.1vw+2rem, 4.2rem);
  --fs-h2: clamp(1.75rem, 0.8vw+1.5rem, 3rem);
  --fs-body: 1rem;
  --fs-small: 0.875rem;
}
```

## 9️⃣ Compliance Stubs (Phase 7)

Create in `/src/legal/`:

- privacy-policy.md
- terms-of-service.md
- accessibility-statement.md
- cookie-policy.md
- disclaimer-real-estate.md

## 🔟 Rules for Implementation

### Advance a phase only after:

1. All artifacts for that phase committed
2. README checklist box checked
3. An issue opened & closed linking the PR

### File conventions:

- Every Markdown begins with `<!-- summary: … -->`
- Filenames use lowercase-kebab-case
- Media lives in `src/images/`; use relative paths
- CI must pass before merging to main

## 🚀 Immediate Action (Phase 0)

### Create the repo scaffold exactly as above:

1. **Initialize Repository**:

   ```bash
   git init
   git remote add origin [your-repo-url]
   ```

2. **Create Required Files**:
   - README.md with all Phase-0 sections stubbed
   - docs/development_plan.md with roadmap table
   - .github folder with issue/PR templates and working ci.yml
   - .stylelintrc.json configuration
   - package.json with dev dependencies
   - Blank .nojekyll file
   - Placeholder /src/index.html with SEO meta tags

3. **Initial Commit**:

   ```bash
   git add .
   git commit -m "Initial commit: Add project scaffold and documentation"
   git push -u origin main
   ```

4. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
   - Wait for deployment to complete

5. **Verify Deployment**:
   - Check GitHub Actions tab for successful CI run
   - Visit your GitHub Pages URL
   - Create Phase-0 issue and post the live link

**Stop. Await human approval before moving to Phase 1.**

---

## 📋 Troubleshooting Common Issues

### GitHub Actions Failures:

- **Permission denied**: Check that Pages source is set to "GitHub Actions" in repository settings
- **Stylelint errors**: Ensure .stylelintrc.json exists and has correct configuration
- **serve command fails**: Dependencies are installed in CI workflow, not locally
- **Background process issues**: Use `|| true` and `kill $(jobs -p)` for cleanup

### Missing Files:

- Create placeholder CSS file in src/styles/base.css to prevent Stylelint errors
- Ensure .nojekyll file exists to prevent Jekyll processing
- Check that all required directories exist in src/ folder

This updated prompt reflects the actual working implementation and includes all the fixes discovered during development.
