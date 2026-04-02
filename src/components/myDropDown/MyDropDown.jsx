import { useState, forwardRef } from 'react';
import { Dropdown } from 'antd';
import MySpace from '../mySpace/MySpace';
import SVGArrow from '../../icons/SVGArrow';
import { UtilArray } from '../../utils/UtilArray';
import { UtilString } from '../../utils/UtilString';

const MyDropDown = forwardRef(
  (
    {
      gap,
      align,
      padding,
      children,
      marginTop,
      popupRender,
      onOpenChange,
      arrow = true,
      disableMarginTop,
      items = UtilArray.EMPTY_ARRAY,
      className = UtilString.EMPTY_STRING,
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    return (
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        popupRender={(menu) =>
          popupRender || (
            <div style={{ width: 270 }} className={className}>
              {menu}
            </div>
          )
        }
        onOpenChange={(val) => {
          setOpen(val);
          onOpenChange && onOpenChange(val);
        }}
        className="link_cursor"
      >
        <div ref={ref}>
          <MySpace
            align={align || 'start'}
            style={{
              gap: gap,
              padding: padding,
              marginTop,
            }}
            fullWidth
          >
            {children}
            <div style={{ marginTop: disableMarginTop ? 0 : 5 }}>
              {arrow ? (
                <div className="arrow_bg">
                  <SVGArrow
                    rotate={open ? 180 : 0}
                    // color={colors.primaryColor}
                  />
                </div>
              ) : null}
            </div>
          </MySpace>
        </div>
      </Dropdown>
    );
  }
);

export default MyDropDown;
