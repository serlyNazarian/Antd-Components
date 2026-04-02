import { forwardRef, useImperativeHandle, useState } from 'react';
import { Drawer } from 'antd';
import MyButtonSecondary from '../myButton/MyButtonSecondary';
import MyDrawerButtons from './MyDrawerButtons';

const MyDrawer = forwardRef(
  ({ children, label, formName, icon, loading, ...otherProps }, ref) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };

    const closeDrawer = () => {
      setVisible(false);
    };

    useImperativeHandle(ref, () => ({
      showDrawer: showDrawer,
      closeDrawer: closeDrawer,
    }));

    return (
      <>
        <MyButtonSecondary
          icon={icon}
          label={label}
          loading={loading}
          onClick={showDrawer}
        />
        <Drawer
          {...otherProps}
          open={visible}
          getContainer={false}
          onClose={closeDrawer}
          extra={
            <MyDrawerButtons closeDrawer={closeDrawer} formName={formName} />
          }
        >
          {children}
        </Drawer>
      </>
    );
  }
);

export default MyDrawer;
