# React Example Package

A minimal React TypeScript package template. It is designed to demonstrate how to structure, build, test, and publish a React component library in a portable and easy-to-understand way.

Currently, this package exports Button and Card React components with TypeScript support and tree-shaking optimization.

## Installation

> [!TIP]
> For local installation (using a local copy of this package instead of the one published to NPM), see the [Local Installation section](#local-installation).

```bash
npm install @madooei/react-example-package
```

**Peer Dependencies**: This package requires React, React DOM, and Tailwind CSS as peer dependencies:

```bash
npm install react react-dom tailwindcss
```

**Note**: The package includes runtime checks that will throw helpful error messages if peer dependencies are missing or incompatible.

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

// Or default imports:
// import Button from '@madooei/react-example-package/button';
// import Card from '@madooei/react-example-package/card';

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

**Recommendation**: Use individual imports in production applications with many components for optimal bundle size.

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

**Setup Tailwind CSS:**

1. Install Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer`
2. Initialize Tailwind: `npx tailwindcss init -p`
3. **Important**: Configure your `tailwind.config.js` to include the component library:
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
4. Add Tailwind directives to your CSS file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

**Without step 3**, Tailwind won't include the component library's classes and components will appear unstyled.

### TailwindCSS V4

Follow tailwind's instruction to set it up. You should still create the `tailwind.config.js` as shown above. Then, add it to your primary CSS file:

```css
@import "tailwindcss";
@config "tailwind.config.js";
```

## Local Installation

This template is particularly useful for creating packages that are intended to be used locally so read the instructions below for local development.

### Local Development (Without Publishing to NPM)

There are three ways to use this package locally:

#### Option 1: Using npm link

1. Clone this repository, install dependencies, build the package, and create a global symlink:

   ```bash
   git clone <repository-url> react-package-workspace
   cd react-package-workspace/packages/react-example-package
   # Install dependencies and build the package
   npm install
   npm run build
   # Create a global symlink
   npm link
   ```

   Note: You can unlink the package later using `npm unlink`.

2. In your other project where you want to use this package:

   ```bash
   npm link @madooei/react-example-package
   ```

3. Import the package in your project:

   ```typescript
   import { Button, Card } from "@madooei/react-example-package";
   ```

#### Option 2: Using local path

In your other project's `package.json`, add this package as a dependency using the local path:

```json
{
  "dependencies": {
    "@madooei/react-example-package": "file:/path/to/react-example-package"
  }
}
```

You can use absolute or relative paths with the `file:` protocol.

Then run `npm install` in your project.

Now you can import the package in your project as usual.

#### Option 3: Using a local tarball (npm pack)

1. Follow option 1 but instead of using `npm link`, create a tarball of the package:

   ```bash
   npm pack
   ```

   This will generate a file like `madooei-react-example-package-1.0.0.tgz`. (Or whatever version you have.)
   You can find the tarball in the same directory as your `package.json`.

2. In your other project, install the tarball:

   ```bash
   npm install /absolute/path/to/react-example-package/madooei-react-example-package-1.0.0.tgz
   ```

   Or, if you copy the tarball into your project directory:

   ```bash
   npm install ./madooei-react-example-package-1.0.0.tgz
   ```

This method installs the package exactly as it would be published to npm, making it ideal for final testing. After this installation, you must have the package in your `node_modules` directory, and you can import it as usual. You will also see the package in your `package.json` file as a dependency:

```json
{
  "dependencies": {
    "@madooei/react-example-package": "file:madooei-react-example-package-1.0.0.tgz"
  }
}
```
