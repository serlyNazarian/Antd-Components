import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';

const MyDividerOr = () => {
  const { t } = useTranslation();

  const styles = {
    fontSize: 14,
    margin: '5px 0',
  };

  return <Divider style={styles}>{t('WORD_OR_WITH_EMAIL')}</Divider>;
};

export default MyDividerOr;
