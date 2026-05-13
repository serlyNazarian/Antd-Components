import MyFlex from '../myFlex/MyFlex';
import { useTranslation } from 'react-i18next';
import MyButtonMain from '../myButton/MyButtonMain';
import MyButtonSecondary from '../myButton/MyButtonSecondary';

const MyDrawerButtons = ({ closeDrawer, formName }) => {
  const { t } = useTranslation();

  let btnWidth = 75;

  return (
    <MyFlex>
      <MyButtonSecondary
        label={t('WORD_CANCEL')}
        onClick={closeDrawer}
        width={btnWidth}
      />
      <MyButtonMain
        label={t('WORD_APPLY')}
        onClick={closeDrawer}
        width={btnWidth}
        form={formName}
      />
    </MyFlex>
  );
};

export default MyDrawerButtons;
