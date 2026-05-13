# Antd Components

A custom Ant Design component library built with React

## Installation

```bash
npm install my-ui-lib-ubicross
```

### Peer Dependencies

This library requires the following peer dependencies:

- `react` >= 18
- `antd` >= 5
- `react-router-dom` ^6 (optional, only if using router-dependent components)
- `react-i18next` >= 11 (optional, only if using i18n utilities)

Note: The library is fully tree-shakeable, so unused peer dependencies won't be included in your bundle.

## Features

- 🎨 Custom Ant Design components
- ⚛️ Built with React 18+
- 📦 Fully tree-shakeable
- 🚀 Optimized bundle size
- 📱 Responsive design

## Usage

```javascript
import { MyButton, MyAlert, MyCard } from 'my-ui-lib-ubicross';

function App() {
  return (
    <>
      <MyButton type="primary">Click me</MyButton>
      <MyAlert message="Success" type="success" />
      <MyCard title="My Card">Card content here</MyCard>
    </>
  );
}
```

## Utility Usage Across Projects

You can import utilities directly from the package root.

```javascript
import {
  NotificationProvider,
  UtilNotify,
  parseServerError,
  createServerErrorParser,
} from 'my-ui-lib-ubicross';

function AppRoot() {
  return (
    <NotificationProvider>
      <App />
    </NotificationProvider>
  );
}

async function saveData(t) {
  try {
    // await apiCall();
    UtilNotify.success(t('WORD_SAVED_SUCCESSFULLY'));
  } catch (error) {
    const message = parseServerError(error?.message, t);
    UtilNotify.error(t('WORD_ERROR'), message);
  }
}

// Or create a reusable parser:
const parseError = createServerErrorParser(t);
const errorMsg = parseError(error?.message);
```

Notes:

- Wrap your app once with `NotificationProvider`.
- Pass your translator function (for example `t` from `react-i18next`) to `parseServerError(message, t)`.
- `MyButtonCopy` now shows success/error notifications automatically, and accepts optional props: `successMessage`, `errorMessage`.
- Use `createServerErrorParser(translate)` to build a reusable parser function that works throughout your app.

## Recent Changes (v1.0.6)

### Library Portability

- Removed all project-specific dependencies (color files, custom theme hooks).
- Components now use Ant Design theme tokens for automatic theme support.
- Fixed all import paths to ensure components work across any consuming project.

### API Additions

- Expanded root exports in `src/components/index.js` so most components are available from one import source.
- Added reusable utilities:
  - `UtilNotify` - notification service
  - `NotificationProvider` - wrapper for notification context
  - `parseServerError` - error message parser with i18n support
  - `createServerErrorParser` - factory for custom error parsers
- Refactored `SelectTheme` to be project-agnostic with fixed options:
  - Light (`light`)
  - Dark (`dark`)
  - System (`system`)

## Available Components

### Buttons

- `MyButton` - Base button component
- `MyButtonMain` - Primary call-to-action button
- `MyButtonSecondary` - Secondary button
- `MyButtonDanger` - Danger/delete action button
- `MyButtonDelete` - Delete button variant
- `MyButtonConfirmDelete` - Delete with confirmation
- And more...

### Layout

- `MyDefaultPageLayout` - Standard page wrapper
- `MyDefaultPageHeader` - Page header component
- `MyFlex` / `MyFlexVertical` - Flexible layout
- `MySpace` - Spacing component

### Forms

- `MyCheckBox` - Checkbox component
- `MySelect` - Select dropdown
- `InputText` - Text input
- `InputTextFormItem` - Form text input
- `InputTextAreaFormItem` - Form text area
- `InputNumberFormItem` - Form number input
- `InputEmailFormItem` - Form email input
- `InputPasswordFormItem` - Form password input
- `InputPasswordConfirmFormItem` - Form confirm password input
- `InputFormDatePicker` - Form date picker
- `InputFormRangeDatePicker` - Form range date picker
- `MyColorPicker` - Color picker
- `InputOtpFormItem` / `MyOtpInput` - OTP inputs
- `SelectLanguage` / `SelectTheme` - language and theme selectors

### Data Display

- `MyTable` - Data table component
- `MyTableInfinity` - Infinite scrolling table
- `MyPagination` - Pagination
- `MyTag` - Tag component
- `MyStatistic` - Statistic display

### Other

- `MyAlert` - Alert/notification
- `MyModal` - Modal dialog
- `MyDrawer` - Drawer component
- `MyTooltip` - Tooltip
- `MyIcon` - Icon wrapper
- `MyDivider` - Divider line
- `MyImage` - Image wrapper
- `MyProgressBar` - Progress display
- `PercentInput` - Percent value input

## Development

### Setup

```bash
npm install
```

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run dev
```

## Publishing Updates

1. Update your components in `src/`
2. Bump the version:
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```
3. Build:
   ```bash
   npm run build
   ```
4. Publish:
   ```bash
   npm publish
   ```

## Project Structure

```
src/
├── components/     # React components
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
└── index.js        # Exports
```

## Dependencies

- **React** - UI library
- **Ant Design (antd)** - Component foundation

## License

MIT

## Author

[Serly/Ubicross]

## Repository

https://github.com/serlyNazarian/Antd-Components

## Support

For issues, questions, or suggestions, please open an issue on GitHub.
