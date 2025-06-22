# How to Use This React Package Template

This guide provides a step-by-step checklist for using the react-package-workspace template to create your own React component library.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- A text editor (VS Code recommended)
- Basic knowledge of React and TypeScript

## Step 1: Download the Template

### Option A: Download as ZIP (Recommended for new projects)

1. Go to the GitHub repository page
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Rename the extracted folder to your project name (e.g., `my-react-components-workspace`)

### Option B: Clone and Remove Git History

```bash
git clone <repository-url> my-react-components-workspace
cd my-react-components-workspace
rm -rf .git
git init
```

## Step 2: Update Package Information

### 2.1 Update Main Package (`packages/react-example-package/package.json`)

Open `packages/react-example-package/package.json` and update:

```json
{
  "name": "@your-scope/your-react-components",
  "version": "0.1.0",
  "description": "Your React component library description",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/your-react-components.git"
  },
  "homepage": "https://your-username.github.io/your-react-components/",
  "bugs": {
    "url": "https://github.com/your-username/your-react-components/issues"
  }
}
```

**Checklist:**
- [ ] Update `name` with your NPM scope and package name
- [ ] Set appropriate `description`
- [ ] Update `repository.url` with your GitHub repository
- [ ] Update `homepage` with your GitHub Pages URL
- [ ] Update `bugs.url` with your issues URL
- [ ] Change `author` if needed
- [ ] Update `keywords` array to match your components
- [ ] Review peer dependencies (React, React-DOM, Tailwind CSS)

### 2.2 Update Root Package (`package.json`)

Update the root `package.json`:

```json
{
  "name": "your-react-components-workspace",
  "description": "Workspace for your-react-components"
}
```

**Checklist:**
- [ ] Update `name` to match your workspace name
- [ ] Update `description`

## Step 3: Update Documentation

### 3.1 Update Main README (`README.md`)

Replace the content with your project information:

**Checklist:**
- [ ] Update project title and description
- [ ] Update installation instructions with your package name
- [ ] Update repository URLs
- [ ] Update clone instructions with your repository
- [ ] Update VS Code workspace file references
- [ ] Replace example usage with your components

### 3.2 Update Package README (`packages/react-example-package/README.md`)

**Checklist:**
- [ ] Update package title and description
- [ ] Update installation command: `npm install @your-scope/your-react-components`
- [ ] Replace component examples with your actual components
- [ ] Update peer dependency instructions
- [ ] Update repository clone instructions
- [ ] Update VS Code workspace references

### 3.3 Update Documentation (`docs/index.md`)

**Checklist:**
- [ ] Update package name and description
- [ ] Replace component documentation with your components
- [ ] Update installation instructions
- [ ] Update peer dependency setup
- [ ] Update Tailwind configuration examples
- [ ] Replace usage examples with your component APIs

### 3.4 Update Roadmap (`docs/ROADMAP.md`)

**Checklist:**
- [ ] Replace with your component library's actual roadmap
- [ ] Update project overview section
- [ ] List your current and planned components
- [ ] Define your component design system goals
- [ ] Update technical architecture section
- [ ] Customize success criteria for your components

## Step 4: Update React Components

### 4.1 Replace Example Components (`packages/react-example-package/src/`)

**Checklist:**
- [ ] Replace `src/components/button.tsx` with your Button component or remove
- [ ] Replace `src/components/card.tsx` with your Card component or remove
- [ ] Update `src/index.ts` with exports for your components
- [ ] Add your own React components to `src/components/`
- [ ] Update or replace `src/types.ts` with your component prop types
- [ ] Remove peer dependency checks in `src/utils/` if not needed

### 4.2 Update Component Exports

If you're changing components, update the exports structure:

**Checklist:**
- [ ] Update `src/index.ts` barrel exports
- [ ] Create individual component export files (e.g., `src/button.ts`)
- [ ] Update `package.json` exports field for tree-shaking
- [ ] Update `tsup.config.ts` entry points

### 4.3 Update Tests (`packages/react-example-package/tests/`)

**Checklist:**
- [ ] Replace `tests/index.test.tsx` with tests for your components
- [ ] Add comprehensive test coverage for your React components
- [ ] Update test descriptions and assertions
- [ ] Test component props, events, and rendering
- [ ] Add accessibility testing if needed

## Step 5: Update Examples

### 5.1 Update Tailwind Examples (`examples/`)

**Checklist:**
- [ ] Update `examples/with-tailwind3/package.json` with your package name
- [ ] Replace component usage in `examples/with-tailwind3/src/App.tsx`
- [ ] Update `examples/with-tailwind4/package.json` with your package name
- [ ] Replace component usage in `examples/with-tailwind4/src/App.tsx`
- [ ] Update README files in each example directory
- [ ] Test both Tailwind v3 and v4 compatibility

### 5.2 Add More Examples (Optional)

If you need additional examples:

**Checklist:**
- [ ] Create new example directories under `examples/`
- [ ] Copy structure from existing examples
- [ ] Update each example's package.json and source code
- [ ] Add README.md files explaining each example
- [ ] Test different integration patterns (Next.js, Vite, etc.)

## Step 6: Update Playgrounds

### 6.1 Update Existing Playgrounds

For each playground in `playgrounds/`:

**Checklist:**
- [ ] Update `playgrounds/vite/package.json` with relevant React dependencies
- [ ] Replace React component demos in playground source code
- [ ] Update playground README.md files with descriptions
- [ ] Test React component rendering in playgrounds

### 6.2 Add React-Specific Playgrounds

**Checklist:**
- [ ] Create playground for React Testing Library setup
- [ ] Add playground for Storybook integration (if using)
- [ ] Create playground for component styling approaches
- [ ] Add playground for accessibility testing

## Step 7: Update Configuration Files

### 7.1 Update VS Code Workspace (`.code-workspace`)

**Checklist:**
- [ ] Rename workspace file to match your project
- [ ] Update folder paths if you've renamed directories
- [ ] Add any additional folders you've created
- [ ] Update workspace settings for React development

### 7.2 Update Build Configuration

**Checklist:**
- [ ] Review `tsup.config.ts` entry points for your components
- [ ] Update TypeScript configuration in `tsconfig.json`
- [ ] Verify React-specific build settings
- [ ] Test ESM/CJS dual builds work correctly

### 7.3 Update Testing Configuration

**Checklist:**
- [ ] Review `vitest.config.ts` for React Testing Library setup
- [ ] Update `tests/setup.ts` with any custom test utilities
- [ ] Verify jsdom environment configuration
- [ ] Test React component rendering in tests

## Step 8: Update Styling Configuration

### 8.1 Tailwind CSS Setup

**Checklist:**
- [ ] Update component Tailwind classes for your design system
- [ ] Review Tailwind config in examples for your component scanning
- [ ] Test component styling in both Tailwind v3 and v4
- [ ] Update documentation for required Tailwind setup

### 8.2 Component Styling Approach

**Checklist:**
- [ ] Decide on styling approach (Tailwind, CSS Modules, styled-components)
- [ ] Update build configuration for chosen styling approach
- [ ] Update peer dependencies if using alternative styling
- [ ] Document styling requirements for users

## Step 9: Initialize Your Component Library

### 9.1 Install Dependencies

```bash
cd packages/your-react-components
npm install
```

**Checklist:**
- [ ] Install dependencies successfully
- [ ] Verify React peer dependencies
- [ ] Check for any dependency conflicts
- [ ] Test React component compilation

### 9.2 Build and Test

```bash
npm run validate
```

**Checklist:**
- [ ] TypeScript compilation succeeds
- [ ] React JSX compilation works
- [ ] Linting passes (including React rules)
- [ ] Formatting passes
- [ ] React component tests pass
- [ ] Build completes successfully with React exports

### 9.3 Test Examples and Playgrounds

```bash
cd ../../examples/with-tailwind3
npm install
npm run dev
```

**Checklist:**
- [ ] Examples install and run successfully
- [ ] React components render correctly
- [ ] Tailwind styling works as expected
- [ ] Playgrounds work with React setup
- [ ] Component linking between workspace packages works

## Step 10: Set Up Repository

### 10.1 Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: Set up React component library from template"
```

### 10.2 Create GitHub Repository

**Checklist:**
- [ ] Create new repository on GitHub
- [ ] Add remote origin
- [ ] Push initial commit
- [ ] Set up GitHub Pages for component documentation

### 10.3 Configure NPM Publishing

**Checklist:**
- [ ] Create NPM account if needed
- [ ] Set up NPM scope if using scoped packages
- [ ] Add NPM_TOKEN to GitHub repository secrets
- [ ] Test publishing workflow
- [ ] Consider publishing strategy for React components

## Step 11: Final Verification

### 11.1 Complete Component Library Check

**Checklist:**
- [ ] All package.json files have correct information
- [ ] All README files are updated and accurate
- [ ] Documentation reflects your actual component APIs
- [ ] Examples demonstrate real React component usage
- [ ] Tests cover your React component functionality
- [ ] React build system works correctly
- [ ] Peer dependencies are properly configured
- [ ] Component styling works in target environments

### 11.2 React-Specific Verification

**Checklist:**
- [ ] Components render correctly in React applications
- [ ] TypeScript props are properly typed
- [ ] Tree-shaking works for individual component imports
- [ ] Peer dependency validation works correctly
- [ ] Tailwind CSS classes are applied correctly
- [ ] Component accessibility is acceptable

## Common React-Specific Gotchas

### Component Exports

- Ensure both named and default exports work correctly
- Test tree-shaking with individual component imports
- Verify TypeScript types are exported alongside components

### Peer Dependencies

- React and React-DOM should always be peer dependencies
- Test with different React versions within your range
- Include helpful error messages for missing peer dependencies

### Styling

- Test that Tailwind classes are included in user builds
- Verify component library scanning in Tailwind config
- Test both Tailwind v3 and v4 compatibility

### Build Configuration

- React JSX should be preserved in build output
- External dependencies should include React/React-DOM
- TypeScript declaration files should include React types

## Troubleshooting

### React Build Issues

If builds fail:
1. Check React imports and JSX syntax
2. Verify tsup React configuration
3. Ensure React types are installed
4. Test component rendering in isolation

### Component Styling Issues

If styling doesn't work:
1. Verify Tailwind CSS setup in examples
2. Check component library path in Tailwind config
3. Test CSS class purging and inclusion
4. Verify component className props

### Peer Dependency Issues

If peer dependencies fail:
1. Check version ranges in peerDependencies
2. Test with minimum supported React version
3. Verify runtime validation error messages
4. Test installation in fresh React project

## Next Steps

After completing this checklist:

1. **Build Your Components**: Create your actual React component library
2. **Add Storybook**: Set up component documentation and testing
3. **Implement Design System**: Create consistent component APIs
4. **Add Accessibility**: Implement ARIA and keyboard navigation
5. **Set Up CI/CD**: Configure automated testing and publishing
6. **Create Documentation**: Build comprehensive component guides

## Getting Help

If you run into React-specific issues:

- Check React and TypeScript documentation
- Review React Testing Library guides for component testing
- Consult Tailwind CSS documentation for styling integration
- Ask questions in React and component library communities

Remember: This template provides a solid foundation for React component libraries, but you'll need to customize it significantly to match your specific component requirements and design system goals.