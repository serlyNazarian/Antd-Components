import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import colors from '../../styles/Color.scss';

const MyDividerOr = () => {
  const { t } = useTranslation();

  const styles = {
    fontSize: 14,
    margin: '5px 0',
    color: colors.dividerTextColor,
    borderColor: colors.dividerColor,
  };

  return <Divider style={styles}>{t('WORD_OR_WITH_EMAIL')}</Divider>;
};

export default MyDividerOr;
