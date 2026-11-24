import { useTranslation } from 'react-i18next';
import MyButtonMain from '../button/MyButtonMain';
import MyButtonSecondary from '../button/MyButtonSecondary';
import MyFlex from '../flex/MyFlex';
import MyButtonDanger from '../button/MyButtonDanger';

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
