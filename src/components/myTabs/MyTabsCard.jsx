import { Tabs } from 'antd';

const MyTabsCard = ({ ...otherProps }) => {
  return <Tabs {...otherProps} type="card" size="large" />;
};

export default MyTabsCard;
