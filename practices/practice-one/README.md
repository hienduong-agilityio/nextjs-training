# Practice-one ( Ecommerce )

This document concerns NextJS practice one E-ecommerce . This is a web application built from NextJS. This includes the features in the app and the estimation during which I implement tasks in this practice.

## Targets

- Initialize a Next.js application using a single command line or migrate to the Next.js latest version from current practice.
- Get familiar with the outstanding features of Next.js, especially routing, caching, streaming, and data fetching.
- Know how a Next.js application works and accomplish a full-stack web application.
- Get to know metadata which is crucial for SEO and shareability.
- Handle errors and be aware of which errors should be shown for each situation.
- Although this is Next.js practice, Unit testing, and Storybook are still mandatory.

## RELATED DOCUMENTS

- React training plan ( [Document](https://docs.google.com/document/d/1s4ywrP9Ainu0f0-8y1YSVgjPGyPcv9bb9onvp-m-fMY/edit?tab=t.lo8jhxkfip6r#heading=h.1c34tn6oqvhw) )
- Design for practice ( view via [Figma](https://www.figma.com/design/8Zpw9ByzkcLv5aFjZflbOH/E-Comm-(Copy)?node-id=3385-1577&node-type=frame&t=Lf08G1P5AZ4FvJJB-0) )

## Technical stacks

- ⚡ [Next.js](https://nextjs.org/) with App Router support
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org/)
- 💎 Integrate with [Tailwind CSS](https://tailwindcss.com/)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge) for efficiently merge Tailwind CSS classes without style conflicts
- ✅ Strict Mode for TypeScript and React 18
- 📏 Linter with [ESLint](https://eslint.org/)
- 💖 Code Formatter with [Prettier](https://prettier.io/)
- 🦊 [Husky](https://github.com/typicode/husky) for Git Hooks
- 🚫 [Lint-staged](https://github.com/lint-staged/lint-staged) for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- ☂️ Code coverage with [V8](https://v8.dev/blog/javascript-code-coverage)
- 🎉 Storybook for UI development
- Utilize NextUI for UI development

## Editor

- Visual Studio Code

## Author

- hien.duong <[hien.duong@asnet.com.vn](hien.duong@asnet.com.vn)>

### Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # Next.js App (App Router)
│   ├── components                  # React components
│   ├── constants                   # App constants
│   ├── helpers                     # Helpers folder
│   ├── hooks                       # Hooks folder
│   ├── icons                       # Icons folder
│   ├── layouts                     # React components for app layout
│   ├── ui                          # React components by feature
│
├── .editorconfig.json              # Editorconfig
├── .eslintrc.json                  # ESLint configuration
├── .lintstagedrc                   # Lint-stage
├── .prettierrc                     # Prettier configuration
├── jest.config.ts                  # Jest configuration
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # Post CSS configuration
├── tailwind.config.ts              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## Getting started

Step by step to get started this app at your location

## How to run

### Prerequisites

Make sure you install packages with correct version below:

- [node v18.18.2+](https://nodejs.org/en/download/package-manager)
- [pnpm 9.1.2+](https://pnpm.io/installation)

- **Note:**:
  - Please add `.env` into root of project source code, refer `.env.sample`.
  - Refer: Here's the [sample mockAPI project](https://mockapi.io/clone/665e8a3f1e9017dc16f05e15), feel free to **clone** then use in your project

### Get source code

| Command                                                                | Action                    |
| :--------------------------------------------------------------------- | :------------------------ |
| `git clone git@gitlab.asoft-python.com:hien.duong/nextjs-training.git` | Clone Repository with SSH |
| `cd nextjs-training\practices\practice-one`                            | Redirect to folder        |

### Build and Run app

| Command            | Action                                     | Port                    |
| :----------------- | :----------------------------------------- | :---------------------- |
| `$ pnpm install`   | Install packages dependencies              | N/A                     |
| `$ pnpm build`     | Build app with optimized production mode   | N/A                     |
| `$ pnpm start`     | Starts the application in production mode. | <http://localhost:3000> |
| `$ pnpm dev`       | Run the app in development mode            | <http://localhost:3000> |
| `$ pnpm storybook` | Run Storybook.                             | <http://localhost:6006> |
| `$ pnpm test`      | Run Unit Test                              | N/A                     |
| `$ pnpm coverage`  | Generate code coverage                     | N/A                     |

Happy path: Open the web server <http://localhost:3000>
_Note that the default port is 3000, you can custom it!_
