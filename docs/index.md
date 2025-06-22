# React Example Package

A minimal React TypeScript package template for creating reusable React components that can be used both locally and published to NPM.

**Features:**

- Written in TypeScript
- Builds to both modern ES modules and CommonJS formats
- Provides TypeScript type definitions
- ESLint for code linting
- Prettier for code formatting
- Vitest for testing
- Tsup for building
- React component optimization with tree-shaking
- Tailwind CSS integration

## Installation

```bash
npm install @madooei/react-example-package
```

**Peer Dependencies**: This package requires React, React DOM, and Tailwind CSS as peer dependencies:

```bash
npm install react react-dom tailwindcss
```

## Usage

You can import components in two ways for optimal bundle optimization:

### Named Imports (Barrel Export)

```tsx
import React from "react";
import { Button, Card } from "@madooei/react-example-package";

function App() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is a card component from the example package.</p>
        <Button onClick={() => alert("Hello!")}>Click me!</Button>
      </Card>
    </div>
  );
}
```

### Individual Imports (Optimal Tree-Shaking)

For the smallest possible bundle size, import components individually:

```tsx
import React from "react";
import { Button } from "@madooei/react-example-package/button";
import { Card } from "@madooei/react-example-package/card";

function App() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is a card component from the example package.</p>
        <Button onClick={() => alert("Hello!")}>Click me!</Button>
      </Card>
    </div>
  );
}
```

### Components

#### Button

A customizable button component with variants, sizes, and states.

**Props:**

- `children` (ReactNode) - Button content
- `variant?` ("primary" | "secondary" | "danger") - Button style variant (default: "primary")
- `size?` ("small" | "medium" | "large") - Button size (default: "medium")
- `disabled?` (boolean) - Whether button is disabled (default: false)
- `onClick?` (function) - Click handler

#### Card

A container component with optional title and custom styling.

**Props:**

- `children` (ReactNode) - Card content
- `title?` (string) - Optional title displayed at top of card
- `className?` (string) - Additional CSS classes to apply

### Styling

This package **requires Tailwind CSS** for styling. Components use Tailwind utility classes and will not display correctly without Tailwind CSS properly configured in your project.

Configure your `tailwind.config.js` to include the component library:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add this line to scan the component library:
    "./node_modules/@madooei/react-example-package/dist/**/*.{js,cjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## Cloning the Repository

To make your workflow more organized, it's a good idea to clone this repository into a directory named `react-package-workspace`. This helps differentiate the workspace from the `react-example-package` located in the `packages` directory.

```bash
git clone https://github.com/madooei/react-example-package react-package-workspace

cd react-package-workspace
```

## Repository Structure

- `packages` — Contains the primary package(s) for this repository (e.g., `react-example-package`). Each package is self-contained and can be copied out and used independently.
- `examples` — Contains examples of how to use the packages. Each example is a minimal, standalone project.
- `playgrounds` — Contains demos of the dependencies of the primary package(s). Each playground is a minimal, standalone project.
- `docs` — Contains various documentation for users and developers.
- `.github` — Contains GitHub-specific files, such as workflows and issue templates.

## How to Use This Repo

- To work on a package, go to `packages/<package-name>` and follow its README.
- To try an example, go to `examples/<example-name>` and follow its README.
- To run the playground, go to `playground/<package-name>` and follow its README.
- For documentation, see the `docs` folder.

### Using a VSCode Multi-root Workspace

With Visual Studio Code, you can enhance your development experience by using a multi-root workspace to access packages, examples, and playgrounds simultaneously. This approach is more efficient than opening the root directory, or each package or example separately.

To set up a multi-root workspace:

1. Open Visual Studio Code.
2. Navigate to `File > Open Workspace from File...`.
3. Select the `react-example-package.code-workspace` file located at the root of the repository. This action will open all specified folders in one workspace.

The `react-example-package.code-workspace` file can be customized to include different folders or settings. Here's a typical configuration:

```json
{
  "folders": [
    {
      "path": "packages/react-example-package"
    },
    {
      "path": "examples/with-tailwind3"
    },
    {
      "path": "playgrounds/vite"
    }
  ],
  "settings": {
    // Add any workspace-specific settings here, for example:
    "git.openRepositoryInParentFolders": "always"
  }
}
```

## Developing the Package

Change to the package directory and install dependencies:

```bash
cd packages/react-example-package
npm install
```

- Read the [Project Roadmap](../../docs/ROADMAP.md) for project goals, status, evolution, and development guidelines.
- Read the [Development Guide](DEVELOPMENT.md) for detailed information on the package architecture, build configuration, and implementation patterns.
- Follow the [Contributing Guide](../../docs/CONTRIBUTING.md) for contribution guidelines, coding standards, and best practices.

## Package Management

When you are ready to publish your package:

```bash
npm run release
```

This single command will:

- Validate your code with the full validation pipeline
- Analyze commits to determine version bump
- Update package.json version and changelog
- Build the package
- Create and push git tag
- Create GitHub release
- Publish to NPM

> [!TIP]
> For detailed information about package publishing, versioning, and local development workflows, see the [NPM Package Management Guide](../../docs/guides/npm-package.md).
