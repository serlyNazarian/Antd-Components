import { useEffect } from 'react';
import { notification } from 'antd';

let notificationApi = null;

export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    notificationApi = api;

    return () => {
      notificationApi = null;
    };
  }, [api]);

  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};

const config = {
  placement: 'top',
  closeIcon: false,
  duration: 3,
};

const open = (type, options) => {
  if (notificationApi) {
    notificationApi[type]({
      ...config,
      ...options,
    });
  } else {
    notification[type]({
      ...config,
      ...options,
    });
  }
};

const UtilNotify = {
  success: (message, description) => open('success', { message, description }),

  error: (message, description) => open('error', { message, description }),

  info: (message, description) => open('info', { message, description }),

  warning: (message, description) => open('warning', { message, description }),
};

export default UtilNotify;
