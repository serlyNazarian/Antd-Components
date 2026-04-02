import { Switch } from 'antd';
import MySpace from '../mySpace/MySpace';

const MySwitch = ({ label, ...otherProps }) => {
  return (
    <MySpace direction="vertical">
      {label ? <span>{label}</span> : null}
      <Switch {...otherProps} />
    </MySpace>
  );
};

export default MySwitch;
