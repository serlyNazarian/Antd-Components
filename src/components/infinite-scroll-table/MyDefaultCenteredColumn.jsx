import MyFlex from '../flex/MyFlex';

const MyDefaultCenteredColumn = ({ children, gap, ...otherProps }) => {
  return (
    <MyFlex {...otherProps} align="center" justify="center" gap={gap} block>
      {children}
    </MyFlex>
  );
};

export default MyDefaultCenteredColumn;
