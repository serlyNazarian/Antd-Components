import { Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';
import { QuestionCircleOutlined } from '@ant-design/icons';
import MyButton from './MyButton';
import colors from '../../styles/Color.module.scss';

const MyButtonConfirmDelete = ({
  icon,
  label,
  title,
  width,
  okText,
  loading,
  onClick,
  onCancel,
  cancelText,
  ...otherProps
}) => {
  const { t } = useTranslation();

  const handleCancel = (e) => {
    e?.stopPropagation();
    onCancel && onCancel();
  };

  const okButtonProps = {
    color: 'danger',
    danger: true,
  };

  const cancelButtonProps = {
    type: 'outlined',
    style: {
      borderColor: colors.newBorderColor,
    },
  };

  return (
    <Popconfirm
      {...otherProps}
      title={title || t('WORD_ARE_YOU_SURE_YOU_WANT_TO_DELETE')}
      onCancel={handleCancel}
      okText={okText || t('WORD_DELETE')}
      cancelText={cancelText || t('WORD_CANCEL')}
      okButtonProps={okButtonProps}
      cancelButtonProps={cancelButtonProps}
      icon={
        <QuestionCircleOutlined
          style={{
            color: 'red',
          }}
        />
      }
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MyButton
          icon={icon}
          label={label}
          width={width}
          onClick={onClick}
          loading={loading}
          style={{ backgroundColor: 'transparent' }}
          danger
        />
      </div>
    </Popconfirm>
  );
};

export default MyButtonConfirmDelete;
