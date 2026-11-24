import MyCard from './MyCard';

const MyCardTransparent = ({ children, ...otherProps }) => {
  return (
    <MyCard
      {...otherProps}
      style={{ backgroundColor: 'transparent' }}
      withoutShadow
      block
    >
      {children}
    </MyCard>
  );
};

export default MyCardTransparent;
