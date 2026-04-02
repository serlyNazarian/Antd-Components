import { Segmented } from "antd";
import "./MySegmentedForm.scss";

const MySegmented = ({ color, style, ...otherProps }) => {
  return (
    <Segmented
      {...otherProps}
      style={{ width: 300, ...style }}
      className={`my_segment ${color}`}
    />
  );
};

export default MySegmented;
