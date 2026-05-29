## Table of Contents

1. Introduction
2. Language
3. Task Distribution
4. Project Board & Issues
   - Issues
   - Definition of Ready (DoR)
   - Definition of Done (DoD)

5. Issue Structure
   - Epic (Main Issue)
   - User Story
   - Subissues
   - Example

6. FDND Agency Conventions
7. Atomic Design Theory
8. Branch Management
9. Merging pull Requests

10. Code Quality
    - Tools
    - Running checks manually
    - Pre-commit hooks
    - Branch naming rules
    - Commit message format
    - Examples
    - What gets rejected
    - CI Pipeline

---

## 1. Introduction

This document describes the project agreements and workflows for working on the project. The goal is to ensure clarity, consistency, and quality throughout the development process.

## 2. Language

The website and all internal documentation are written in English.

## 3. Task Distribution

Tasks are divided into issues. Each team member picks up new issues only after their previous issues have been tested and merged into the `dev` branch.

At all times, the [FDND Agency conventions](https://docs.fdnd.nl/conventies.html) are followed. This applies to workflows, code style, naming conventions, documentation, and collaboration practices throughout the project.

## 4. Project Board & Issues

### Project Board Rules

- Issues that are being worked on must be closed before starting a new issue.
- The only exception is when closing the issue is not possible (for example, when waiting for feedback). In that case, a new issue may be picked up.

### Issues

1. All issues must be assigned and labeled with relevant labels immediately.
   - Estimation (poker) must be done as soon as possible, ideally within 24 hours of issue creation.

   - status labels (e.g., `To Do`, `In Progress`, `Review`, `Done`) must be updated as the issue progresses.

   - Priority labels (e.g., `High - P0`, `Medium - P1`, `Low - P2`) must be assigned based on the issue's importance and urgency.

   - Assignees must be updated to reflect the current responsible team member.

   - Labels for type (e.g., `Bug`, `Feature`, `Improvement`, `User Story`) and area (e.g., `Frontend`, `Backend`, `Design`) must be added to provide context.

2. Issues must contain a short description of the functionality.

#### Definition of Ready (DoR)

An issue is ready to be picked up when:

- The issue has been estimated (pokered) for value.
- It follows the format: _As a user, I want ..., so that ..._.
- Acceptance criteria are clearly defined.
- All relevant labels are added.
- Each acceptance criterion is converted into a subissue and can be checked off individually.

**DoR Example**

- **User story:** As a user, I want to log in with my email and password, so that I can access my personal dashboard.
- **Estimated:** 5 story points
- **Labels:** `Epic`, `Feature`, `Frontend`
- **Acceptance criteria:**
  1. The login page contains email and password fields
  2. An error message is shown when credentials are invalid
  3. The user is redirected after a successful login

- **Subissues:** One subissue per acceptance criterion

#### Definition of Done (DoD)

An issue is considered done when:

- All described functionalities are implemented (acceptance criteria).
- The functionality has been thoroughly tested, including:
  - Accessibility (A11y): keyboard navigation (tab), color contrast, screen reader
  - Performance
  - HTML validation
  - Responsive and device testing
  - User testing

- A merge request has been created.
  - The pull request template is filled in as completely as possible.

**DoD Example**

- All acceptance criteria are completed and checked off
- Login flow tested with valid and invalid credentials
- Accessibility tested using keyboard navigation and screen reader
- HTML validated without critical errors
- Tested on mobile and desktop viewports
- At least one user has tested the login flow
- Merge request created and reviewed
- Merge request approved and merged into the `dev` branch

## 5. Issue Structure

To maintain clarity, we use a clear structure with **Epics** **User Stories** and **Subissues**.

### Epic (Main Issue)

- Represents a larger feature or functionality.
- Label: `Epic`
- Description includes **acceptance criteria**.
- Each acceptance criterion is elaborated into a subissue.

### User Story

- Follows the format: _As a user, I want ..., so that ..._.
- Provides context and motivation for the feature.
- Acceptance criteria are defined to specify the requirements and conditions for completion.

### Subissues

- Created if user stories have multiple acceptance criteria.
- Linked to the corresponding user story, and the user story is linked to the epic.
- Description contains details, a task list, and any references.
- All subissues must be completed before the Epic can be closed.

### Example

**Epic:** `User can log in`
**Labels:** `Epic`, `Feature`
**Acceptance Criteria:**

- Login page with email and password
- Error message for incorrect credentials
- Redirect to dashboard after successful login

**Subissues:**

1. `Create login page` – page, routing, and styling
2. `Validate login credentials` – validation and error handling
3. `Redirect after login` – redirect to `/dashboard` and testing

## 6. FDND Agency Conventions

At all times, the [**FDND Agency conventions**](https://docs.fdnd.nl/conventies.html) are followed. This includes, but is not limited to:

- Project workflow and collaboration agreements
- Code style and formatting
- Naming conventions (branches, commits, files)
- Documentation standards
- Review and merge practices

These conventions are leading and apply to the entire project lifecycle.

## 7. Atomic Design Theory

The project follows the principles of Atomic Design, which emphasizes building interfaces from the smallest components (atoms) to larger, reusable structures (molecules, organisms, templates, and pages). This approach promotes consistency, scalability, and maintainability in the design and development process.

- **Atoms**: Basic building blocks (e.g., buttons, input fields, icons).
- **Molecules**: Combinations of atoms that function together (e.g., a search form with an input and a button).
- **Organisms**: Complex components made up of molecules and/or atoms (e.g., a header with navigation).
- **Templates**: Page-level structures that define the layout and structure of a page (e.g., a product listing page).
- **Pages**: Specific instances of templates that represent the final UI (e.g., the homepage with actual content).
  **In this project we use atoms, molecules, and organisms. Templates and pages are omitted because SvelteKit's +layout.svelte and +page.svelte files serve the same purpose.**
  By adhering to Atomic Design principles, we ensure that our design system is modular, reusable, and easy to maintain as the project evolves.
  Read more: [Atomic Design by Brad Frost](https://bradfrost.com/blog/post/atomic-web-design/)

## 8. Branch Management

- Branches must be created from the `dev` branch.
- Each branch should include the issue number and a brief description (e.g., `feat/login-page-223`).
- Ensure that branches are up to date with the `dev` branch before merging to avoid conflicts.
- Delete branches that have already been merged or are no longer in use.

### Branching strategy

This project follows the [Git Flow](https://www.gitkraken.com/learn/git/git-flow) branching strategy.

| Branch     | Description                               |
| ---------- | ----------------------------------------- |
| `main`     | Production-ready code                     |
| `dev`      | Integration branch for completed features |
| `feature/` | New features or stories                   |
| `fix/`     | Bug fixes                                 |
| `release/` | Release preparation                       |

### Branch naming rules

A pre-commit hook automatically validates your branch name. **Base branches** (`main`, `dev`) have no extra requirements. **All other branches** must end with a hyphen and the related issue number.

```
<type>/<description>-<issue-number>
```

| Type       | Example                   |
| ---------- | ------------------------- |
| `feat/`    | `feat/login-123`          |
| `feature/` | `feature/dashboard-45`    |
| `fix/`     | `fix/broken-link-97`      |
| `bugfix/`  | `bugfix/fix-header-12`    |
| `hotfix/`  | `hotfix/security-patch-8` |
| `release/` | `release/v1.2.0-60`       |
| `docs/`    | `docs/readme-updated-3`   |

If your branch name does not match this pattern, the commit will be blocked with an error message.

### Example

```bash
git checkout dev
git checkout -b feat/setup-prettier-149
# do work
git push origin feat/setup-prettier-149
# open PR into dev
```

---

## 9. Merging pull Requests

- Pull requests must be reviewed by at least one other team member before merging.
- Ensure that all checks (e.g., CI tests, code reviews) have passed before merging
- Use descriptive commit messages that reference the issue number (e.g., `Fix login validation - closes #223`).
- After merging, update the issue status to `Done` and ensure all relevant labels are updated
- Branch owner should merge the pull request and delete the branch after merging to keep the repository clean.

## 10. Code Quality

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

### Commit message format

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

### CI Pipeline

Every push and pull request to `main` and `dev` automatically triggers a GitHub Actions workflow. The pipeline runs the following steps in order:

1. Install dependencies — `npm install`
2. ESLint — `npm run lint`
3. Prettier — `npx prettier --check .`
4. Stylelint — `npm run stylelint`
5. Build verification — `npm run build`

**A pull request cannot be merged if any step fails.** Fix all errors locally before opening or updating a PR.
