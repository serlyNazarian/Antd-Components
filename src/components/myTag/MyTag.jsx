import { Tag } from 'antd';

const MyTag = ({ label, ...otherProps }) => {
  return (
    <Tag {...otherProps} className="text_align_center min_width_100px">
      {label}
    </Tag>
  );
};

export default MyTag;
