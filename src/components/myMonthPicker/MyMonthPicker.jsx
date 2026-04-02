import { memo, useState } from 'react';
import { DatePicker } from 'antd';
import UtilDate from '../../utils/UtilDate';
import SVGArrow from '../../icons/SVGArrow';
import MyCard from '../myCard/MyCard';
import MyTextBold from '../myText/MyTextBold';
import MyFlex from '../myFlex/MyFlex';
import './MyMonthPicker.scss';

const MyMonthPicker = ({ onChange }) => {
  const [date, setDate] = useState(UtilDate.getDateToday());
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleOnChange = (e) => {
    let d = e['$d'];
    let mom = UtilDate.getDateToday()
      .set('date', d.getDate())
      .set('month', d.getMonth())
      .set('year', d.getFullYear());
    setDate(mom);
    if (mom) {
      onChange && onChange(mom.month(), mom.year());
    }
  };

  const handelChange = (dat) => {
    onChange && onChange(dat.month(), dat.year());
  };

  const handleOnClickFirst = () => {
    let d = UtilDate.getDatePrevMonth(date);
    setDate(d);
    handelChange(d);
  };

  const limitDate = UtilDate.getDateToday().add(1, 'month');
  const isNextDisabled =
    date.isSame(limitDate, 'month') || date.isAfter(limitDate, 'month');

  const handleOnClickSecond = () => {
    if (isNextDisabled) return;
    let d = UtilDate.getDateNextMonth(date);
    setDate(d);
    handelChange(d);
  };

  const disabledDate = (current) => {
    return current && current.isAfter(limitDate, 'month');
  };

  return (
    <MyCard className="month_picker_card">
      <MyFlex
        gap={0}
        align="center"
        justify="space-between"
        className="full_height"
      >
        <div className="arrow_bg" onClick={handleOnClickFirst}>
          <SVGArrow rotate={90} />
        </div>
        <div onClick={() => setDatePickerOpen(true)}>
          <MyTextBold fontSize={15}>
            {UtilDate.formatMonthYear(date)}
          </MyTextBold>
        </div>
        <DatePicker
          className="my_month_date_picker"
          classNames={{ popup: { root: 'my_month_picker_dropdown' } }}
          picker="month"
          value={date}
          open={datePickerOpen}
          onChange={handleOnChange}
          onOpenChange={setDatePickerOpen}
          disabledDate={disabledDate}
        />
        <div
          className="arrow_bg"
          onClick={handleOnClickSecond}
          style={{
            opacity: isNextDisabled ? 0.3 : 1,
            pointerEvents: isNextDisabled ? 'none' : 'auto',
            cursor: isNextDisabled ? 'not-allowed' : 'pointer',
          }}
        >
          <SVGArrow rotate={-90} />
        </div>
      </MyFlex>
    </MyCard>
  );
};

export default memo(MyMonthPicker);
