import { forwardRef } from 'react';
import InputText from './InputText';
import SVGSearchIcon from '../../icons/SVGSearchIcon';
import useWindowSize from '../../utils/useWindowSize';

const MySearchInput = forwardRef(({ ...otherProps }, ref) => {
  const { isMobile } = useWindowSize();

  return (
    <InputText
      {...otherProps}
      ref={ref}
      prefix={<SVGSearchIcon style={{ marginRight: 2 }} />}
      style={{ minWidth: isMobile ? '' : 260, maxWidth: isMobile ? 130 : '' }}
    />
  );
});

export default MySearchInput;
