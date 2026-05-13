import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { Modal, Spin } from 'antd';
import MyTextBold from '../myText/MyTextBold';
import MyModalFooter from './MyModalFooter';

const MyModal = forwardRef(
  (
    {
      form,
      onOk,
      title,
      danger,
      footer,
      saving,
      loading,
      onClose,
      labelOk,
      children,
      minHeight,
      disableOk,
      trigerText,
      width = 500,
      footerExtra,
      getContainer,
      height = 700,
      onVisibleChange,
      forceRender = false,
      destroyOnHidden = true,
      ...otherProps
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);

    const showModal = () => {
      setOpen(true);
      onVisibleChange && onVisibleChange(true);
    };

    const handleCancel = () => {
      setOpen(false);
      onVisibleChange && onVisibleChange(false);
    };

    useImperativeHandle(ref, () => ({
      open: () => {
        showModal();
      },
      close: () => {
        handleCancel();
      },
    }));

    useEffect(() => {
      if (!open) {
        onClose && onClose();
      }
    }, [open, onClose]);

    return (
      <>
        {trigerText && <div onClick={showModal}>{trigerText}</div>}
        <Modal
          {...otherProps}
          title={<MyTextBold>{title}</MyTextBold>}
          open={open}
          // loading={loading}
          confirmLoading={saving}
          onCancel={handleCancel}
          width={width}
          destroyOnHidden={destroyOnHidden}
          getContainer={getContainer}
          forceRender={forceRender}
          onOk={onOk}
          centered
          footer={
            footer !== undefined ? (
              footer
            ) : (
              <MyModalFooter
                form={form}
                onOk={onOk}
                danger={danger}
                loading={saving}
                labelOk={labelOk}
                disableOk={disableOk}
                footerExtra={footerExtra}
                handleCancel={handleCancel}
              />
            )
          }
        >
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: height - 150,
              }}
            >
              <Spin size="large" />
            </div>
          ) : (
            <div
              style={{
                maxHeight: height,
                minHeight: minHeight,
                overflow: 'auto',
              }}
              className="full_width padding_10"
            >
              {children}
            </div>
          )}
        </Modal>
      </>
    );
  }
);

export default MyModal;
