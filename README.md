# Digital Proof Empowerment

A safe and secure platform for collecting evidence of workplace misconduct, built with SvelteKit.

---

## Getting started

Clone the repository and install dependencies:

```bash
git clone https://github.com/fdnd-agency/digitalproofempowerment.git
cd digitalproofempowerment
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available scripts

| Script              | Description                               |
| ------------------- | ----------------------------------------- |
| `npm run dev`       | Start development server                  |
| `npm run build`     | Build for production                      |
| `npm run preview`   | Preview production build                  |
| `npm run lint`      | Run ESLint on all JS and Svelte files     |
| `npm run format`    | Run Prettier on all files                 |
| `npm run stylelint` | Run Stylelint on all CSS and Svelte files |

---

## Code quality

This project uses automated code quality tools that run on every commit and every pull request.

### Tools

- **ESLint** — lints `.js` and `.svelte` files for code errors
- **Prettier** — formats all files consistently
- **Stylelint** — lints `.css` files and `<style>` blocks in `.svelte` files
- **Husky** — runs lint-staged automatically on every commit
- **Commitlint** — enforces the FDND commit message convention

### Running checks manually

```bash
# Lint JS and Svelte files
npm run lint

# Check formatting
npx prettier --check .

# Fix formatting
npm run format

# Lint CSS
npm run stylelint
```

### Pre-commit hooks

After running `npm install`, Husky hooks are activated automatically. On every `git commit`:

- Staged `.js` and `.svelte` files are linted with ESLint and formatted with Prettier
- Staged `.css` files are linted with Stylelint and formatted with Prettier
- Staged `.html`, `.json`, and `.md` files are formatted with Prettier

If a file has errors the commit will be blocked until the errors are fixed.

---

## Commit convention

This project follows the [FDND commit convention](https://docs.fdnd.nl/conventies.html).

### Format

```
<type>: <description> [optional emoji] #<issue-number>

```

### Allowed types

| Type       | Description                                             |
| ---------- | ------------------------------------------------------- |
| `feat`     | Implementing a new feature                              |
| `fix`      | Fix for a bug, style or layout issue                    |
| `chore`    | Changes to build process or auxiliary tools             |
| `docs`     | Changes to documentation                                |
| `style`    | Changes that affect readability but not functionality   |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `perf`     | A code change that improves performance                 |
| `test`     | Adding or correcting tests                              |
| `build`    | Changes that affect the build system or dependencies    |
| `ci`       | Changes to CI configuration files and scripts           |

### Examples

```bash
feat: add login page #147
fix: correct null check 🐛 #23
chore: setup eslint #149
refactor: deduplicate marker popup creation 🧑‍💻 #56
```

### What gets rejected

```bash
"wip"                    # no type, no issue number
"feat: add login page"   # missing issue number
"WIP: some stuff #23"    # wrong type
```

---

## Branching strategy

This project follows the [Git Flow](https://www.gitkraken.com/learn/git/git-flow) branching strategy.

| Branch      | Description                               |
| ----------- | ----------------------------------------- |
| `main`      | Production-ready code                     |
| `dev`       | Integration branch for completed features |
| `feature/*` | New features or stories                   |
| `fix/*`     | Bug fixes                                 |
| `release/*` | Release preparation                       |

### Example

```bash
git checkout dev
git checkout -b feature/setup-prettier
# do work
git push origin feature/setup-prettier
# open PR into dev
```

---

## CI pipeline

A GitHub Actions workflow runs automatically on every push and pull request to `main` and `dev`. The pipeline runs:

1. Install dependencies
2. ESLint
3. Prettier check
4. Stylelint
5. Build verification

A PR cannot be merged if any step fails.
