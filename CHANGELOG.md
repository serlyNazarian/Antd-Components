# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.6] - 2026-05-13

### Added

- Added notification utility support with `UtilNotify` and `NotificationProvider`.
- Added server error parsing helpers `parseServerError` and `createServerErrorParser`.
- Added and exported `MyFlexCenter`.
- Expanded root component barrel exports in `src/components/index.js` for broader one-place imports.

### Changed

- Updated `MyButtonCopy` to use `UtilNotify` and show success/error feedback on copy.
- Refactored `SelectTheme` to be app-agnostic with default `light`, `dark`, and `system` values.
- Updated `MyDataEmpty` to use `MyFlexCenter`.
- Updated utility barrel exports in `src/utils/index.js` to include notify and error handler utilities.
- Fixed `useWindowSize` imports across components to point to `src/hooks/UseWindowSize`.
- Replaced custom SVG icons with Ant Design icon components for full portability:
  - SVGArrow → `ArrowRightOutlined`, `DownOutlined`, `LeftOutlined`, `RightOutlined`
  - SVGMenu → `MenuOutlined`
  - SVGEmail → `MailOutlined`
  - SVGLock → `LockOutlined`
  - SVGSearchIcon → `SearchOutlined`
  - SVGFilterOutlined → `FilterOutlined`
  - SVGTableSortIcon → `SortAscendingOutlined`
- Removed all project-specific color/theme file dependencies (Color.module.scss, useMyTheme hook).
- Updated `MyPageHeader`, `MyProgressBar`, `MyDropDown`, `MyMonthPicker`, `MyDrawerFilter`, `MySearchInput`, `InputEmailFormItem`, and `InputPasswordConfirmFormItem` to use Ant Design theme tokens.

### Removed

- Removed `MyCollapse` component (`src/components/myCollapse/MyCollapse.jsx`).
- Removed all imports of local app theme hooks and color modules.

## [1.0.0] - 2026-04-02

### Added

- Initial release of Antd Components library
- Button components (MyButton, MyButtonMain, MyButtonSecondary, MyButtonDanger, etc.)
- Layout components (MyDefaultPageLayout, MyDefaultPageHeader, MyFlex, MyFlexVertical, MySpace)
- Form components (MyCheckBox, MySelect, MyColorPicker, MyDatePicker, MyModal, etc.)
- Data display components (MyTable, MyTableInfinity, MyPagination, MyTag, MyStatistic)
- Icon components (MyIcon, MyIconRound, SVGPlusBtn)
- Utility components (MyAlert, MyDrawer, MyTooltip, MyDivider, etc.)
- Custom hooks (UseWindowSize)
- Utility functions (UtilArray, UtilGeneral, UtilObject, UtilString)
- Tree-shakeable bundle with ESM and CommonJS exports

[1.0.0]: https://github.com/serlyNazarian/Antd-Components/releases/tag/v1.0.0
[1.0.6]: https://github.com/serlyNazarian/Antd-Components/releases/tag/v1.0.6
