import { forwardRef } from 'react';
import MyButton from './MyButton';
import { Popconfirm } from 'antd';
import { useTranslation } from 'react-i18next';
import { QuestionCircleOutlined } from '@ant-design/icons';

const MyButtonRoundConfirmDelete = forwardRef(
  (
    { okText, cancelText, onConfirm, title, description, ...otherProps },
    ref
  ) => {
    const { t } = useTranslation();

    const okButtonProps = {
      color: 'danger',
      danger: true,
    };

    const cancelButtonProps = {
      type: 'outlined',
      // style: {
      //   borderColor: colors.newBorderColor,
      // },
    };

    return (
      <Popconfirm
        title={title || t('WORD_ARE_YOU_SURE')}
        description={description}
        onConfirm={onConfirm}
        okText={okText}
        cancelText={cancelText}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        icon={
          <QuestionCircleOutlined
            style={{
              color: 'red',
            }}
          />
        }
      >
        <MyButton {...otherProps} ref={ref} shape="circle" />
      </Popconfirm>
    );
  }
);

export default MyButtonRoundConfirmDelete;
