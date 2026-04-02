import { useTranslation } from 'react-i18next';
import MyButtonMain from '../myButton/MyButtonMain';
import MyButtonSecondary from '../myButton/MyButtonSecondary';
import MyFlex from '../myFlex/MyFlex';
import MyButtonDanger from '../myButton/MyButtonDanger';

const MyModalFooter = ({
  onOk,
  form,
  danger,
  loading,
  labelOk,
  disableOk,
  footerExtra,
  handleCancel,
}) => {
  const { t } = useTranslation();

  let btnWidth = 75;

  return (
    <MyFlex block>
      <MyFlex block>
        {footerExtra || (
          <>
            <div />
            <div />
          </>
        )}
      </MyFlex>
      <MyFlex align="end">
        <MyButtonSecondary
          key="cancel"
          label={t('WORD_CANCEL')}
          onClick={handleCancel}
          width={btnWidth}
        />
        {danger ? (
          <MyButtonDanger
            key="ok"
            onClick={onOk}
            loading={loading}
            disabled={disableOk}
            label={labelOk || t('WORD_OK')}
            // width={btnWidth}
          />
        ) : (
          <MyButtonMain
            key="ok"
            form={form}
            onClick={onOk}
            loading={loading}
            disabled={disableOk}
            label={labelOk || t('WORD_OK')}
            // width={btnWidth + 20}
          />
        )}
      </MyFlex>
    </MyFlex>
  );
};

export default MyModalFooter;
