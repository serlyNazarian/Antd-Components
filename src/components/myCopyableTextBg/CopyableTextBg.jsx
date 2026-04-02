import { Typography } from 'antd';

const { Paragraph } = Typography;

const CopyableTextBg = ({ label }) => {
  return (
    <Paragraph className="full_width copyable_paragraph" code copyable>
      {label}
    </Paragraph>
  );
};

export default CopyableTextBg;
