import { Tabs } from 'antd';
import './MyTabsCard.scss';

const MyTabsCard = ({ ...otherProps }) => {
  return <Tabs {...otherProps} type="card" size="large" />;
};

export default MyTabsCard;
