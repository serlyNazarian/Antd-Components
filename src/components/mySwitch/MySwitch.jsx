import { Switch } from 'antd';
import MyFlexVertical from '../myFlex/MyFlexVertical';

const MySwitch = ({ label, ...otherProps }) => {
  return (
    <MyFlexVertical>
      {label ? <span>{label}</span> : null}
      <Switch {...otherProps} />
    </MyFlexVertical>
  );
};

export default MySwitch;
