import MyButton from './MyButton';

const MyButtonMain = ({ form, ...otherProps }) => {
  return (
    <MyButton
      {...otherProps}
      form={form}
      type="primary"
      htmlType={form ? 'submit' : 'button'}
    />
  );
};

export default MyButtonMain;
