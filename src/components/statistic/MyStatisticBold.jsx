import MyStatistic from './MyStatistic';

const MyStatisticBold = ({ ...otherProps }) => {
  return <MyStatistic {...otherProps} fontWeight={700} />;
};

export default MyStatisticBold;
