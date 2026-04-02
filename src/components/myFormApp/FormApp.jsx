import { Form } from 'antd';
import LoadingIconApp from '../myLoadingIconApp/LoadingIconApp';

const FormApp = ({
  loading,
  children,
  onFinishFailed,
  name = 'FormApp',
  layout = 'vertical',
  autoComplete = 'off',
  validateTrigger = ['onSubmit'],
  // validateTrigger = ['onBlur', 'onChange', 'onSubmit'],
  ...otherProps
}) => {
  const handleonFinishFailed = (error) => {
    console.warn('Error : ', error);
    onFinishFailed && onFinishFailed(error);
  };

  return (
    <Form
      {...otherProps}
      name={name}
      layout={layout}
      preserve={false}
      autoComplete={autoComplete}
      validateTrigger={validateTrigger}
      onFinishFailed={handleonFinishFailed}
      scrollToFirstError
    >
      {loading ? <LoadingIconApp /> : children}
    </Form>
  );
};

export default FormApp;
