import MyFlex from '../myFlex/MyFlex';

const MyDefaultCenteredColumn = ({ children, gap, ...otherProps }) => {
  return (
    <MyFlex {...otherProps} align="center" justify="center" gap={gap} block>
      {children}
    </MyFlex>
  );
};

export default MyDefaultCenteredColumn;
