import { Progress } from 'antd';
import UtilNumber from '../../utils/UtilNumber';
import UtilString from '../../utils/UtilString';
import useMyTheme from '../../theme/useMyTheme';
import colors from '../../styles/Color.scss';

const MyProgressBar = ({
  color,
  percent,
  totalSpent,
  isSelected,
  shouldBePerc,
  totalBudgeted,
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  let per = UtilNumber.calcTwoNumbersPercentage(
    totalSpent || 0,
    totalBudgeted || 0
  );

  if (per > 100) per = 100;

  let overSpentPercentage =
    UtilNumber.calcTwoNumbersPercentage(
      totalSpent - totalBudgeted,
      totalBudgeted
    ) > 0
      ? UtilNumber.calcTwoNumbersPercentage(
          totalSpent - totalBudgeted,
          totalBudgeted
        )
      : 0;

  if (overSpentPercentage >= 100) {
    if (totalBudgeted) {
      overSpentPercentage =
        100 - UtilNumber.calcTwoNumbersPercentage(totalBudgeted, totalSpent);
    } else {
      overSpentPercentage = 100;
    }
  }

  const isOverspent =
    totalBudgeted > 0 && totalSpent > totalBudgeted && overSpentPercentage > 0;

  const getProgressHeight = () => {
    const size = otherProps?.size;
    if (size === 'small') return 6;
    if (size === 'large') return 16;
    return 8;
  };

  let progDivStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    width: `${overSpentPercentage}%`,
    height: getProgressHeight(),
    position: 'absolute',
    bottom: 6,
    right: 0,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: overSpentPercentage === 100 ? 100 : 0,
    borderBottomLeftRadius: overSpentPercentage === 100 ? 100 : 0,
    backgroundColor: isOverspent ? colors.warningColor : 'transparent',
  };

  let perDivStyle = {
    position: 'absolute',
    left: `${shouldBePerc}%`,
    width: 2,
    height: '130%',
  };

  const { token } = useMyTheme();

  const progressPercent = percent || per;

  const selectedStrokeColor = token?.colorWhite || colors.whiteColor;
  const selectedTrailColor =
    token?.colorTextQuaternary || 'rgba(255,255,255,0.35)';

  const strokeColorValue =
    isSelected && progressPercent < 100
      ? selectedStrokeColor
      : color || undefined;
  const trailColorValue =
    isSelected && progressPercent < 100 ? selectedTrailColor : undefined;

  return (
    <div style={{ position: 'relative' }}>
      <Progress
        {...otherProps}
        showInfo={false}
        className={className}
        percent={progressPercent}
        trailColor={trailColorValue}
        strokeColor={strokeColorValue}
      />
      <div style={progDivStyle} />
      {Boolean(shouldBePerc) && <div style={perDivStyle} />}
    </div>
  );
};

export default MyProgressBar;
