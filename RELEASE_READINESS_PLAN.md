# Component Library Release Readiness Plan

This plan covers the work needed to make `my-ui-lib-ubicross` safe, predictable, and easy to use across multiple projects with different Ant Design themes.

## Goal

The library should:

- Install cleanly in a new React project.
- Work with each project's Ant Design theme.
- Expose only complete, supported components.
- Provide TypeScript autocomplete and prop validation.
- Work in browser and server-rendered applications.
- Pass automated build, test, and package checks before publishing.
- Keep credentials and project-specific code out of the package.

---

## Phase 0: Security

### 0.1 Rotate the exposed npm token

**Priority:** Immediate  
**Status:** [ ] Not started

The local `.npmrc` contains a plaintext npm authentication token.

Tasks:

- [ ] Revoke the existing token in npm.
- [ ] Create a new granular or automation token with only the required permissions.
- [ ] Confirm `.npmrc` is ignored by Git.
- [ ] Ensure the token is not present in Git history, documentation, logs, or published files.
- [ ] Store publishing credentials in the CI secret store instead of project files.

Completion criteria:

- The old token is revoked.
- No usable credential exists in the repository or package archive.

---

## Phase 1: Fix Package Publishing

### 1.1 Correct the ESM entry point

**Priority:** Blocker  
**Status:** [ ] Not started

The build generates `dist/index.mjs`, but `package.json` points to `dist/index.esm.js`.

Tasks:

- [ ] Change the `module` field to `./dist/index.mjs`.
- [ ] Add an `exports` map for ESM and CommonJS consumers.
- [ ] Confirm `main` points to `./dist/index.js`.
- [ ] Test both `import` and `require` against the packed package.

Suggested configuration:

```json
{
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    }
  }
}
```

### 1.2 Improve package metadata

**Priority:** High  
**Status:** [ ] Not started

Tasks:

- [ ] Add `repository`, `homepage`, and `bugs` fields.
- [ ] Define supported Node versions with `engines`.
- [ ] Add a correct `sideEffects` setting.
- [ ] Add a `prepublishOnly` script that runs all verification checks.
- [ ] Confirm `npm pack --dry-run` includes only intended files.

Completion criteria:

- A clean consumer project can install and import the packed library using ESM and CommonJS.

---

## Phase 2: Make Styling Portable

### 2.1 Remove the undocumented global CSS dependency

**Priority:** Blocker  
**Status:** [ ] Not started

Components reference global classes such as:

- `full_width`
- `bold`
- `link_cursor`
- `my_card`
- `arrow_bg`
- `remove_margin_bottom`

The stylesheet defining these classes is not currently imported or published. Other referenced classes, including `text_align_center` and `min_width_100px`, appear to be undefined.

Tasks:

- [ ] Find every CSS class used by exported components.
- [ ] Identify undefined classes.
- [ ] Decide on one styling strategy:
  - Component-local styles and Ant Design tokens — preferred.
  - A documented library stylesheet imported by consumers.
  - A stylesheet imported automatically by the package entry.
- [ ] Remove project-specific CSS variables.
- [ ] Avoid generic global class names that could collide with consumer applications.
- [ ] Verify styles in light and dark themes.

Completion criteria:

- Components render correctly without relying on CSS from the original application.
- Library styles do not override unrelated consumer application styles.

### 2.2 Complete theme-token adoption

**Priority:** High  
**Status:** [ ] Not started

Tasks:

- [ ] Replace brand-related hard-coded colors with Ant Design tokens.
- [ ] Review white and red hard-coded values and keep them only where semantically necessary.
- [ ] Confirm explicit `color` and `style` props intentionally override theme tokens.
- [ ] Test at least two different `colorPrimary` values.
- [ ] Test Ant Design light and dark algorithms.
- [ ] Document how each consuming project configures `ConfigProvider`.

Completion criteria:

- The same component package adopts the theme of each consuming project without library changes.

---

## Phase 3: Define the Public API

### 3.1 Reconcile source files, exports, and documentation

**Priority:** Blocker  
**Status:** [ ] Not started

Several components exist in `src` or are listed in the README but are not exported because they depend on missing files or packages.

Components requiring a decision include:

- `MyProgressBar`
- `MyMonthPicker`
- `InputFormDatePicker`
- `InputFormRangeDatePicker`
- `MyDefaultPageLayout`
- `MyDefaultPageWrapper`
- `MyCaptcha`
- `IconRound`

Tasks:

- [ ] Decide whether each component is supported, postponed, or removed.
- [ ] Add missing utilities such as `UtilDate`, `UtilNumber`, `UrlHelper`, and `MyHelmet` where appropriate.
- [ ] Add required dependencies for supported components.
- [ ] Export every supported component from the public entry point.
- [ ] Remove unsupported components from the README.
- [ ] Add an automated test that imports every documented export.

Completion criteria:

- Every documented component can be imported from the package root.
- No public export depends on a missing module.

### 3.2 Standardize component behavior

**Priority:** Medium  
**Status:** [ ] Not started

Tasks:

- [ ] Merge consumer `className` values instead of replacing them.
- [ ] Forward refs consistently where the underlying Ant Design component supports refs.
- [ ] Preserve consumer `style`, event handlers, and standard Ant Design props.
- [ ] Review default prop values for surprising behavior.
- [ ] Clarify that `SelectTheme` selects a value but does not apply a theme itself.
- [ ] Review components for accessibility labels and keyboard support.

Known example:

- `MyTag` currently replaces the consumer-provided `className`.

---

## Phase 4: Add Types

### 4.1 Provide TypeScript declarations

**Priority:** High  
**Status:** [ ] Not started

Tasks:

- [ ] Choose between migrating source files to TypeScript or maintaining declaration files.
- [ ] Extend the appropriate Ant Design prop types for wrapper components.
- [ ] Type component-specific props, callbacks, and forwarded refs.
- [ ] Generate `.d.ts` files during the build.
- [ ] Include declaration files in the published package.
- [ ] Add a TypeScript consumer compilation test.

Completion criteria:

- Consumers receive autocomplete for every public component.
- Invalid props and callback signatures are caught during compilation.

---

## Phase 5: Fix Dependencies and Integrations

### 5.1 Declare direct dependencies correctly

**Priority:** High  
**Status:** [ ] Not started

Tasks:

- [ ] Declare `@ant-design/icons` explicitly if it remains directly imported.
- [ ] Decide whether icons should be a peer dependency or a regular dependency.
- [ ] Prevent unnecessary dependencies from being bundled into the library output.
- [ ] Verify React and Ant Design are externalized so consumers do not receive duplicate copies.
- [ ] Inspect final bundle size and contents.

### 5.2 Handle optional integrations properly

**Priority:** High  
**Status:** [ ] Not started

The README calls some integrations optional, while `package.json` currently makes them required peer dependencies.

Tasks:

- [ ] Decide whether `react-i18next` is required globally or only for specific components.
- [ ] Decide whether `react-router-dom` is required globally or only for `MyLink`.
- [ ] Use `peerDependenciesMeta` for genuinely optional peers.
- [ ] Consider separate entry points for router, i18n, CAPTCHA, and other integrations.
- [ ] Document installation requirements for each optional entry point.

### 5.3 Define supported version ranges

**Priority:** Medium  
**Status:** [ ] Not started

Tasks:

- [ ] Define the supported React versions.
- [ ] Define the supported Ant Design major versions.
- [ ] Avoid an unrestricted `antd >=5` range unless future major versions are tested.
- [ ] Test the oldest and newest supported versions in CI.

Completion criteria:

- A consumer only installs dependencies needed for the components or integrations it uses.
- Supported versions are explicit and tested.

---

## Phase 6: Internationalization

### 6.1 Define the translation contract

**Priority:** High  
**Status:** [ ] Not started

Many components expect translation keys such as `WORD_YES`, `WORD_NO`, and `WORD_THEME_LIGHT`.

Choose one or combine several approaches:

- Bundle default English messages.
- Provide a dedicated library translation namespace.
- Allow all labels to be overridden through props.
- Document every required translation key.

Tasks:

- [ ] Inventory all translation keys used by the library.
- [ ] Add default fallback labels.
- [ ] Document how consuming projects provide translations.
- [ ] Test components with and without an i18n provider.

Completion criteria:

- Components display readable labels even when a consumer has not registered custom translations.

---

## Phase 7: Browser and SSR Compatibility

### 7.1 Make browser globals safe

**Priority:** High  
**Status:** [ ] Not started

`UseWindowSize` reads `window` during initial render, and utilities may access `document` directly. This can fail during server rendering.

Tasks:

- [ ] Guard `window` and `document` access with environment checks.
- [ ] Provide stable initial values during server rendering.
- [ ] Avoid server/client hydration mismatches.
- [ ] Add an SSR import and render test.

Completion criteria:

- Importing and server-rendering the library does not throw when `window` or `document` is unavailable.

---

## Phase 8: Testing and Quality Checks

### 8.1 Add automated tests

**Priority:** High  
**Status:** [ ] Not started

Minimum test coverage:

- [ ] Import every public export.
- [ ] Render every public component.
- [ ] Verify primary theme inheritance.
- [ ] Verify light and dark theme behavior.
- [ ] Verify forwarded refs.
- [ ] Verify form validation behavior.
- [ ] Verify event handlers and controlled values.
- [ ] Verify notification behavior with `NotificationProvider`.
- [ ] Check essential accessibility behavior.

### 8.2 Add a packed-package smoke test

**Priority:** High  
**Status:** [ ] Not started

Tasks:

- [ ] Build the package.
- [ ] Run `npm pack`.
- [ ] Install the archive into a minimal consumer fixture.
- [ ] Test ESM import.
- [ ] Test CommonJS import if CommonJS remains supported.
- [ ] Run a production consumer build.
- [ ] Confirm no undeclared dependency is resolved from the library's development environment.

### 8.3 Add linting and formatting

**Priority:** Medium  
**Status:** [ ] Not started

Tasks:

- [ ] Add ESLint rules for React and hooks.
- [ ] Add a formatter configuration.
- [ ] Add scripts for `lint`, `format:check`, and `test`.
- [ ] Remove or intentionally handle development `console` calls.

Completion criteria:

- A single verification command checks formatting, linting, types, tests, build output, and package contents.

---

## Phase 9: Documentation and Component Preview

### 9.1 Improve consumer documentation

**Priority:** Medium  
**Status:** [ ] Not started

Tasks:

- [ ] Add a complete installation example.
- [ ] Add a `ConfigProvider` theming example.
- [ ] Document dark mode configuration.
- [ ] Document required providers and optional dependencies.
- [ ] Document each public component's props and common examples.
- [ ] Document translation setup and default messages.
- [ ] Add a migration guide for breaking releases.

### 9.2 Add a visual component workbench

**Priority:** Medium  
**Status:** [ ] Not started

Storybook or a small documentation application should demonstrate:

- [ ] All public components.
- [ ] Multiple primary theme colors.
- [ ] Light and dark modes.
- [ ] Loading, disabled, error, and empty states.
- [ ] Mobile and desktop layouts.
- [ ] Accessibility checks where practical.

---

## Phase 10: Continuous Integration and Releases

### 10.1 Add CI verification

**Priority:** High  
**Status:** [ ] Not started

Run these checks for every pull request:

- [ ] Install dependencies from the lockfile.
- [ ] Lint and check formatting.
- [ ] Run type checks.
- [ ] Run unit and component tests.
- [ ] Build the package.
- [ ] Run the packed-package smoke test.
- [ ] Verify package contents.

### 10.2 Make releases repeatable

**Priority:** Medium  
**Status:** [ ] Not started

Tasks:

- [ ] Adopt a consistent versioning and changelog workflow.
- [ ] Require CI to pass before publishing.
- [ ] Publish with a CI-held npm token.
- [ ] Tag releases in Git.
- [ ] Document rollback or deprecation procedures.

---

## Recommended Execution Order

1. Rotate the npm token.
2. Fix package entry points and add an `exports` map.
3. Remove or publish the CSS dependency.
4. Reconcile public exports and documentation.
5. Add a packed-package smoke test.
6. Add TypeScript declarations.
7. Correct dependency and optional-peer configuration.
8. Define the translation contract.
9. Fix SSR compatibility.
10. Add broader tests, CI, documentation, and component previews.

---

## Definition of Ready for General Use

The library is ready for reuse across projects when all of the following are true:

- [ ] No credentials are stored in the repository or package.
- [ ] ESM and supported CommonJS imports work from the packed package.
- [ ] Every documented component is exported and usable.
- [ ] No component relies on missing or undocumented global CSS.
- [ ] Components inherit each consumer project's Ant Design theme.
- [ ] TypeScript declarations cover the complete public API.
- [ ] Required and optional dependencies are correctly declared.
- [ ] Translation behavior and fallback labels are documented.
- [ ] Browser and server-rendered usage do not throw errors.
- [ ] Tests, build checks, and package smoke tests pass in CI.
- [ ] Installation, theming, providers, and component usage are documented.

