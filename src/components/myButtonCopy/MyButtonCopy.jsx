import { CopyOutlined } from '@ant-design/icons';
import MyButtonSecondary from '../myButton/MyButtonSecondary';
import { NotificationService } from '../../utils/NotificationService';

const MyButtonCopy = ({ label }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(label).then(() => {
      NotificationService.UtilNotify.notifyInfo('WORD_CODE_COPIED');
    });
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
