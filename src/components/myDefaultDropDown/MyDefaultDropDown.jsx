import { Dropdown } from 'antd';
import SVGDropdownArrow from '../../icons/SVGDropdownArrow';
import SVGRemoveFilterIcon from '../../icons/SVGRemoveFilterIcon';
import MyFlex from '../myFlex/MyFlex';
import colors from '../../styles/Color.scss';
import MyButton from '../myButton/MyButton';

const MyDefaultDropDown = ({
  title,
  onClose,
  inactive,
  menuProps,
  ...otherProps
}) => {
  return (
    <>
      <Dropdown menu={menuProps} {...otherProps}>
        <MyButton
          color={inactive ? 'default' : 'primary'}
          variant={inactive ? 'outlined' : 'filled'}
          style={
            !inactive
              ? {
                  backgroundColor: colors.primaryColorLighter10,
                }
              : {}
          }
        >
          <MyFlex block align="center" justify="space-between">
            {title}
            {inactive ? (
              <SVGDropdownArrow />
            ) : (
              <SVGRemoveFilterIcon
                color={colors.primaryColor}
                onClick={(e) => {
                  e?.stopPropagation();
                  onClose?.(null);
                }}
              />
            )}
          </MyFlex>
        </MyButton>
      </Dropdown>
    </>
  );
};

export default MyDefaultDropDown;
