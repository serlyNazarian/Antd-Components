import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import UtilArray from '../../utils/UtilArray';
import MySelect from '../mySelect/MySelect';

const SelectLanguage = ({ ...otherProps }) => {
  const { t } = useTranslation();

  const [list, setList] = useState(UtilArray.EMPTY_ARRAY);

  useEffect(() => {
    let data = [
      { label: t('WORD_ENGLISH'), value: 'en' },
      { label: t('WORD_ARMENIAN'), value: 'hy' },
      // { label: t('WORD_RUSSIAN'), value: 'ru' },
      // { label: t('WORD_ARABIC'), value: 'ar' },
    ];
    setList(data);
  }, [t]);

  return <MySelect {...otherProps} options={list} />;
};

export default SelectLanguage;
