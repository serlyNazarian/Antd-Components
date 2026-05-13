import UtilNotify from '../../utils/UtilNotify';
import { CopyOutlined } from '@ant-design/icons';
import MyButtonSecondary from '../myButton/MyButtonSecondary';

const MyButtonCopy = ({
  label,
  successMessage = 'Copied to clipboard',
  errorMessage = 'Failed to copy to clipboard',
}) => {
  const handleCopy = async () => {
    if (!navigator?.clipboard?.writeText) {
      UtilNotify.warning(errorMessage);
      return;
    }

    try {
      await navigator.clipboard.writeText(String(label || ''));
      UtilNotify.success(successMessage);
    } catch (error) {
      UtilNotify.error(errorMessage);
    }
  };

  return (
    <MyButtonSecondary
      label={label}
      onClick={handleCopy}
      suffixIcon={<CopyOutlined />}
    />
  );
};

export default MyButtonCopy;
