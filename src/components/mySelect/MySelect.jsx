import SVGDropdownArrow from '../../icons/SVGDropdownArrow';
import MySelectWrapper from './MySelectWrapper';

const MySelect = ({ style, width, block, ...otherProps }) => {
  const styleLocal = { ...style, width: block ? '100%' : width || '' };
  return (
    <MySelectWrapper
      {...otherProps}
      style={styleLocal}
      suffixIcon={loading ? undefined : <SVGDropdownArrow />}
    ></MySelectWrapper>
  );
};

export default MySelect;
