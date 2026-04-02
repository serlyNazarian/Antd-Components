import MyText from './MyText';

const MyTextTitle = ({ children, fontSize = 16, ...otherProps }) => {
  return (
    <MyText bold fontSize={fontSize} {...otherProps}>
      {children}
    </MyText>
  );
};

export default MyTextTitle;
