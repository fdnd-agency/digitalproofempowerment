# Table of content

1. Project workflows.
2. Status and progress.
3. Important milestones and deadlines.
4. Current position of the project in the overall product roadmap.
5. Following atomic design theory (code).
6. Design system and style guide.
7. The Backlog.

---

## 1. Project workflows

Overview of the project workflow is found in the [CONTRIBUTING.md](./CONTRIBUTING.md) file in the root of the repository. It includes information on how to contribute to the project, including guidelines for submitting pull requests and reporting issues.

## 2. Status and progress

The current status and progress of the project can be tracked through the project's board, which is available on GitHub. The board includes columns for "Epics", "user stories", "To Do,", "In Progress,", "In Review," and "Done," allowing team members to easily see the status of each task.

## 3. Important milestones and deadlines

Every sprint is two weeks long and has its own milestones and deadlines, based on the sprint planning.

Current practice is to have sprint planning on the first day of the sprint, and to have a sprint review and retrospective on the last day of the sprint.

On sprint planing the Epics and user stories are created and assigned.

On sprint review the team reviews the work completed during the sprint, and discusses any issues or challenges that arose. The retrospective is an opportunity for the team to reflect on the sprint and identify areas for improvement.

## 4. Current position of the project in the overall product roadmap

Current position of the project

1. Home page with quick access to the most important features.
   a. Quick access to Clock in and Clock out.
   b. Quick access to globalLeaks to submit new reports/evidence.
   c. Navigational menu with access to main features.

2. Clock in and clock out detailed functionality where quick submissions can be edited and new ones can be created.

3. GlobalLeaks for submitting reports. The admin is responsible for administering the instance, managing settings, pages, channels, setting up users other admins or recipients and so on , and creating the questionnaires or submitting reports. Notably, the Admin cannot access reports.

4. Epics to pick up can be found in the [project board](https://github.com/orgs/fdnd-agency/projects/101)
   1. progressive web app (PWA) for mobile users. this web app is intended to provide a seamless experience for users accessing the platform on mobile devices, allowing them to easily clock in and out, submit reports, and access other features of the platform.

   2. Proof tips page to provide users with guidance on how to submit effective evidence, including tips on what information to include,what is an accepted format and retrieve data from phone apps to submit it.( This page was not started research on evidence and tips is expected to start with it).

## 5 Following atomic design theory

When creating new components, have a look at [atoms folder](./src/lib/components/atoms) and [molecules folder](./src/lib/components/molecules) to see if there are any existing components that can be reused or extended. This will help maintain consistency across the project and reduce the amount of duplicate code.

When creating new components, consider whether they should be classified as an atom, molecule, or organism based on their level of complexity and reusability. Atoms are the most basic building blocks, while organisms are more complex and may contain multiple atoms and molecules.

When creating new components, make sure to follow the project's coding standards and guidelines, which can be found in the [CONTRIBUTING.md](./CONTRIBUTING.md) file in the root of the repository. This will help ensure that the code is consistent and maintainable across the project.

## 6 Design system and style guide

The project follows a design system and style guide to ensure consistency in the user interface and user experience. The design system includes a set of reusable components, such as buttons, forms, and icons, that can be used across the project. The style guide includes guidelines for typography, color, and layout to ensure a cohesive look and feel throughout the project. The design system and style guide can be found in the [design folder](./src/lib/design) of the repository.

## 7 The Backlog

In the backlog you can find issues related to the login flow if the project continues down the route of logging based on a uuid to access old reports/evidence (the issues were created based on the design of the welcome page, which is currently not available as a feature and can change in future team meetings).
