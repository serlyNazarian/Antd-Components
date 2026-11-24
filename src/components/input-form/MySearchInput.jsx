import { forwardRef } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import InputText from './InputText';
import useWindowSize from '../../hooks/UseWindowSize';

const MySearchInput = forwardRef(({ ...otherProps }, ref) => {
  const { isMobile } = useWindowSize();

  return (
    <InputText
      {...otherProps}
      ref={ref}
      prefix={<SearchOutlined style={{ marginRight: 2 }} />}
      style={{ minWidth: isMobile ? '' : 260, maxWidth: isMobile ? 130 : '' }}
    />
  );
});

export default MySearchInput;
