# Team Agreements & Roles

## Table of Contents

1. Introduction
2. Language
3. Task Distribution
4. Project Board & Issues

   * Issues
   * Definition of Ready (DoR)
   * Definition of Done (DoD)
5. Issue Structure

   * Epic (Main Issue)
   * Subissues
   * Example
6. FDND Agency Conventions
7. Branch Management

---

## 1. Introduction

This document describes the team agreements, roles, and workflows for working on the project. The goal is to ensure clarity, consistency, and quality throughout the development process.

## 2. Language

The website and all internal documentation are written in English.

## 3. Task Distribution

Tasks are divided into issues. Each team member picks up new issues only after their previous issues have been tested and merged into the `dev` branch.

At all times, the **FDND Agency conventions** are followed. This applies to workflows, code style, naming conventions, documentation, and collaboration practices throughout the project.

## 4. Project Board & Issues

### Project Board Rules

* Issues that are being worked on must be closed before starting a new issue.
* The only exception is when closing the issue is not possible (for example, when waiting for feedback). In that case, a new issue may be picked up.

### Issues

* All issues must be assigned and labeled with relevant labels immediately.
* Issues must contain a short description of the functionality.

#### Definition of Ready (DoR)

An issue is ready to be picked up when:

* The issue has been estimated (pokered) for value.
* It follows the format: *As a user, I want ..., so that ...*.
* Acceptance criteria are clearly defined.
* All relevant labels are added.
* Each acceptance criterion is converted into a subissue and can be checked off individually.

**DoR Example**

* **User story:** As a user, I want to log in with my email and password, so that I can access my personal dashboard.
* **Estimated:** 5 story points
* **Labels:** `Epic`, `Feature`, `Frontend`
* **Acceptance criteria:**

  1. The login page contains email and password fields
  2. An error message is shown when credentials are invalid
  3. The user is redirected after a successful login
* **Subissues:** One subissue per acceptance criterion

#### Definition of Done (DoD)

An issue is considered done when:

* All described functionalities are implemented (acceptance criteria).
* The functionality has been thoroughly tested, including:

  * Accessibility (A11y): keyboard navigation (tab), color contrast, screen reader
  * Performance
  * HTML validation
  * Responsive and device testing
  * User testing
* A merge request has been created.

  * The pull request template is filled in as completely as possible.

**DoD Example**

* All acceptance criteria are completed and checked off
* Login flow tested with valid and invalid credentials
* Accessibility tested using keyboard navigation and screen reader
* HTML validated without critical errors
* Tested on mobile and desktop viewports
* At least one user has tested the login flow
* Merge request created and reviewed
* Merge request approved and merged into the `dev` branch

## 5. Issue Structure

To maintain clarity, we use a clear structure with **Epics** and **Subissues**.

### Epic (Main Issue)

* Represents a larger feature or functionality.
* Label: `Epic`
* Description includes **acceptance criteria**.
* Each acceptance criterion is elaborated into a subissue.

### Subissues

* Created for each acceptance criterion.
* Linked to the corresponding Epic.
* Description contains details, a task list, and any references.
* All subissues must be completed before the Epic can be closed.

### Example

**Epic:** `User can log in`
**Labels:** `Epic`, `Feature`
**Acceptance Criteria:**

* Login page with email and password
* Error message for incorrect credentials
* Redirect to dashboard after successful login

**Subissues:**

1. `Create login page` – page, routing, and styling
2. `Validate login credentials` – validation and error handling
3. `Redirect after login` – redirect to `/dashboard` and testing

## 6. FDND Agency Conventions

At all times, the **FDND Agency conventions** are followed. This includes, but is not limited to:

* Project workflow and collaboration agreements
* Code style and formatting
* Naming conventions (branches, commits, files)
* Documentation standards
* Review and merge practices

These conventions are leading and apply to the entire project lifecycle.

## 7. Branch Management

* Delete branches that have already been merged or are no longer in use.
* Keep branch names consistent with the FDND Agency guidelines.
