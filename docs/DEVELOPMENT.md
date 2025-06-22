# Development Guide

This document provides technical details for developers working on this React TypeScript component library template, including build architecture, development workflows, and React-specific implementation patterns.

## Build Architecture

### TypeScript Configuration

**Multiple TypeScript Configurations:**

- `tsconfig.json` - Development configuration with all files included
- React JSX support with `"jsx": "react-jsx"` for modern JSX transform

**Key Settings:**

- Target: `ESNext` for modern JavaScript features
- Module: `ESNext` for ES modules
- JSX: `react-jsx` for automatic JSX runtime
- Strict mode enabled for type safety
- React types included

> [!TIP]
> For detailed information about TypeScript setup, see the [TypeScript Setup Guide](../../docs/guides/typescript.md).

### Build System (tsup)

**Why tsup for React components:**

- Fast builds with esbuild under the hood
- Dual format output (ESM + CJS) without complex configuration
- React JSX preservation for optimal compatibility
- Automatic declaration file generation
- Built-in code splitting and tree-shaking

**Configuration (`tsup.config.ts`):**

```typescript
export default defineConfig({
  entry: ["src/index.ts", "src/button.ts", "src/card.ts"], // Multiple entries for tree-shaking
  format: ["esm", "cjs"], // Dual module format
  dts: true, // Generate .d.ts files
  jsx: "preserve", // Preserve JSX for React compatibility
  external: ["react", "react-dom"], // Don't bundle peer dependencies
  sourcemap: true, // Source maps for debugging
  clean: true, // Clean output before build
  splitting: true, // Code splitting for better tree-shaking
  treeshake: true, // Remove unused code
});
```

### Module Format Strategy

**Dual ESM/CJS Support for React:**

- Modern bundlers use ESM (`module` field)
- Legacy tools use CJS (`main` field)
- Individual component exports for tree-shaking

**package.json Configuration:**

```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    },
    "./button": {
      "import": {
        "types": "./dist/button.d.ts",
        "default": "./dist/button.js"
      },
      "require": {
        "types": "./dist/button.d.cts",
        "default": "./dist/button.cjs"
      }
    }
  }
}
```

## React Component Architecture

### Component Structure

**React Component Pattern:**

```typescript
import React from "react";

export interface ComponentProps {
  // TypeScript interface for props
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  // Component implementation
};

export default Component;
```

### Peer Dependencies Strategy

**Why Peer Dependencies for React:**

- Prevents React version conflicts
- Allows host app to control React version
- Reduces bundle size by not duplicating React

**Current Peer Dependencies:**

```json
{
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0",
    "tailwindcss": ">=3.0.0"
  }
}
```

### Tree-Shaking Optimization

**Individual Component Exports:**

- Each component has its own export file (`src/button.ts`, `src/card.ts`)
- Consumers can import specific components: `import { Button } from '@package/button'`
- Reduces bundle size for apps using only some components

## Testing Strategy

### React Testing Library Configuration

**Why React Testing Library:**

- Focuses on testing user interactions rather than implementation details
- Better integration with React components
- Simulates real user behavior

**Key Features Configured:**

- jsdom environment for DOM simulation
- React Testing Library utilities
- Component rendering helpers
- User interaction testing

**Test Patterns:**

- Component rendering tests
- Prop validation tests
- User interaction tests (clicks, form inputs)
- Accessibility testing with screen readers

### Testing Setup

**Vitest Configuration for React:**

```typescript
// vitest.config.ts
export default defineConfig({
  environment: "jsdom", // DOM simulation for React
  setupFiles: ["./tests/setup.ts"], // React Testing Library setup
  test: {
    globals: true, // No need to import test functions
  },
});
```

**Test Setup File:**

```typescript
// tests/setup.ts
import "@testing-library/jest-dom"; // Additional matchers
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup(); // Clean up after each test
});
```

## Development Workflow

### React Development Mode

**The `npm run dev` Command:**

- Runs tsx in watch mode
- Hot reloads React components
- TypeScript compilation on save
- Instant feedback for component changes

### Validation Pipeline for React

**The `npm run validate` Command:**

1. **Type checking** - `tsc --noEmit` (includes React JSX validation)
2. **Linting with auto-fix** - `eslint --fix` (includes React rules)
3. **Formatting with auto-fix** - `prettier --write .`
4. **Testing** - `vitest run` (includes React component tests)

### React-Specific Scripts

**Component Development:**

- `npm run dev` - Watch mode for component development
- `npm run build` - Build components for distribution
- `npm run test` - Run React component tests
- `npm run test:watch` - Watch mode for test development

## Key React Implementation Patterns

### Component Props Pattern

**TypeScript Interface with React Props:**

```typescript
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}
```

### Runtime Validation for React Components

**Peer Dependency Validation:**

```typescript
// src/utils/peer-deps.ts
export const validateReact = () => {
  if (typeof React === "undefined") {
    throw new Error(
      "React is required but not found. Please install react as a peer dependency."
    );
  }
};
```

### Styling with Tailwind CSS

**Component Styling Pattern:**

```typescript
import React from "react";
import { cn } from "../utils/cn"; // className utility

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        // Base styles
        "font-medium rounded-md transition-colors",
        // Variant styles
        {
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
          "bg-gray-200 text-gray-900 hover:bg-gray-300":
            variant === "secondary",
        },
        // Size styles
        {
          "px-2 py-1 text-sm": size === "small",
          "px-4 py-2": size === "medium",
          "px-6 py-3 text-lg": size === "large",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
```

## Code Quality Setup

### ESLint Configuration for React

**Rules Applied:**

- TypeScript ESLint recommended rules
- React ESLint plugin for React-specific rules
- React Hooks rules for proper hooks usage
- JSX accessibility rules
- Prettier integration to avoid conflicts

### React Testing Patterns

**Component Testing Strategy:**

```typescript
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../src/components/button";

describe("Button Component", () => {
  it("renders with correct text", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies variant styles correctly", () => {
    render(<Button variant="danger">Delete</Button>);
    expect(screen.getByRole("button")).toHaveClass("bg-red-600");
  });
});
```

## File Organization

### React Component Structure

```plaintext
src/
├── index.ts              # Main exports and public API
├── button.ts             # Individual Button export for tree-shaking
├── card.ts               # Individual Card export for tree-shaking
├── components/
│   ├── button.tsx        # Button component implementation
│   └── card.tsx          # Card component implementation
├── types.ts              # Type definitions
└── utils/
    ├── cn.ts             # className utility
    └── peer-deps.ts      # Peer dependency validation
```

### Test Structure

```plaintext
tests/
├── setup.ts              # React Testing Library setup
└── index.test.tsx        # Comprehensive component tests
```

## Technical Decisions

### Why These Tools for React?

**tsup over webpack/rollup:** Simpler configuration, faster builds, better TypeScript integration

**React Testing Library over Enzyme:** Modern testing approach, better accessibility testing

**Tailwind CSS:** Utility-first styling, excellent tree-shaking, design system consistency

**Peer Dependencies:** Prevents React version conflicts, reduces bundle size

### React Development Philosophy

1. **Component Reusability:** Design components that work in various contexts
2. **Accessibility First:** Ensure components work with screen readers and keyboard navigation
3. **Bundle Optimization:** Minimize impact on host application bundle size
4. **TypeScript Safety:** Leverage TypeScript for better developer experience
5. **Testing User Behavior:** Test what users actually do, not implementation details

### React-Specific Considerations

**JSX Preservation:** Components are built with JSX preserved, allowing consuming applications to handle JSX transformation based on their React version and configuration.

**Peer Dependency Range:** Support React 16.8+ (hooks introduction) while allowing newer versions for host applications.

**Styling Strategy:** Tailwind CSS provides consistent styling while allowing customization through className props and Tailwind configuration.
