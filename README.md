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
- `MyInput` - Text input
- `MyColorPicker` - Color picker
- `MyDatePicker` - Date selection
- And more...

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
