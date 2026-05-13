import { useMemo } from 'react';
import MySelect from '../mySelect/MySelect';
import { useTranslation } from 'react-i18next';

export const THEME_VALUES = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
};

const SelectTheme = ({
  lightValue = THEME_VALUES.LIGHT,
  darkValue = THEME_VALUES.DARK,
  systemValue = THEME_VALUES.SYSTEM,
  ...otherProps
}) => {
  const { t } = useTranslation();

  const selectOptions = useMemo(() => {
    return [
      { label: t('WORD_THEME_LIGHT'), value: lightValue },
      { label: t('WORD_THEME_DARK'), value: darkValue },
      { label: t('WORD_THEME_SYSTEM'), value: systemValue },
    ];
  }, [darkValue, lightValue, systemValue, t]);

  return <MySelect {...otherProps} options={selectOptions} />;
};

export default SelectTheme;
