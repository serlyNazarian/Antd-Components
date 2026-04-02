import { forwardRef, useImperativeHandle, useState } from 'react';
import { Drawer } from 'antd';
import { useTranslation } from 'react-i18next';
import SVGFilterOutlined from '../../icons/SVGFilterOutlined';
import MyButtonFilled from '../myButton/MyButtonFilled';
import MyDrawerButtons from './MyDrawerButtons';
import useWindowSize from '../../utils/useWindowSize';

const MyDrawerFilter = forwardRef(
  ({ children, formName, loading, ...otherProps }, ref) => {
    const { t } = useTranslation();
    const { isMobile } = useWindowSize();

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
        <MyButtonFilled
          onClick={showDrawer}
          label={isMobile ? null : t('WORD_MORE_FILTERS')}
          icon={<SVGFilterOutlined />}
          loading={loading}
          width={isMobile ? 50 : 130}
        />
        <Drawer
          {...otherProps}
          open={visible}
          onClose={closeDrawer}
          getContainer={false}
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

export default MyDrawerFilter;
