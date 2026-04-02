import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import MySelect from '../mySelect/MySelect';
import UtilArray from '../../utils/UtilArray';
import UsersActions from '../../actions/UsersActions';

const SelectTheme = ({ ...otherProps }) => {
  const { t } = useTranslation();

  const [list, setList] = useState(UtilArray.EMPTY_ARRAY);

  useEffect(() => {
    let data = [
      { label: t('WORD_THEME_LIGHT'), value: UsersActions.THEME.LIGHT },
      { label: t('WORD_THEME_DARK'), value: UsersActions.THEME.DARK },
      { label: t('WORD_THEME_SYSTEM'), value: UsersActions.THEME.SYSTEM },
    ];
    setList(data);
  }, [t]);

  return <MySelect {...otherProps} options={list} />;
};

export default SelectTheme;
