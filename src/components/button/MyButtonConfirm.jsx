import { Button, Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';

const MyButtonConfirm = ({
  icon,
  title,
  label,
  danger,
  okText,
  disabled,
  onCancel,
  onConfirm,
  cancelText,
  className = '',
}) => {
  const { t } = useTranslation();

  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <Popconfirm
      title={title || t('WORD_ARE_YOU_SURE')}
      onConfirm={onConfirm}
      onCancel={handleCancel}
      okText={okText || t('WORD_YES')}
      cancelText={cancelText || t('WORD_NO')}
      disabled={disabled}
    >
      <Button
        icon={icon}
        danger={danger}
        className={className}
        onClick={(e) => e.stopPropagation()}
      >
        {label}
      </Button>
    </Popconfirm>
  );
};

export default MyButtonConfirm;
