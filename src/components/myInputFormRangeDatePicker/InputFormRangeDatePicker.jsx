import { useMemo } from "react";
import { Form, DatePicker } from "antd";
import UtilDate from "../../utils/UtilDate";
import { useTranslation } from "react-i18next";
import SVGDropdownArrow from "../../icons/SVGDropdownArrow";

const { RangePicker } = DatePicker;

const InputFormRangeDatePicker = ({
  label,
  style,
  hidden,
  onChange,
  placeholder,
  name = "DateValue",
  required = false,
  readOnly = false,
  allowClear = true,
  hasFeedback = false,
  format = "DD/MM/YYYY",
}) => {
  const { t } = useTranslation();

  const rangePresets = useMemo(() => {
    return [
      {
        label: t("WORD_TODAY"),
        value: [UtilDate.getStartDateToday(), UtilDate.getDateToday()],
      },
      {
        label: t("WORD_THIS_MONTH"),
        value: [UtilDate.getThisMonthStart(), UtilDate.getThisMonthEnd()],
      },
      {
        label: t("WORD_LAST_30_DAYS"),
        value: [
          UtilDate.getDateWithCustomMinusPlusDays(false, -30),
          UtilDate.getDateToday(),
        ],
      },
      {
        label: t("WORD_LAST_MONTH"),
        value: [UtilDate.getLastMonthStart(), UtilDate.getLastMonthEnd()],
      },
      {
        label: t("WORD_THIS_YEAR"),
        value: [UtilDate.getThisYearStart(), UtilDate.getThisYearEnd()],
      },
    ];
  }, [t]);

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${label || placeholder} ${t("WORD_IS_REQUIRED")}`,
      },
    ];
  }, [hidden, label, placeholder, required, t]);

  const handleOnChange = (e) => {
    if (!readOnly) {
      const localDateFrom = e?.[0]
        ? e[0].startOf("day").format("YYYY-MM-DD")
        : null;
      const localDateTo = e?.[1]
        ? e[1].startOf("day").format("YYYY-MM-DD")
        : null;
      onChange && onChange(e, localDateFrom, localDateTo);
    }
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      style={style}
      hidden={hidden}
      layout="vertical"
      hasFeedback={hasFeedback}
    >
      <RangePicker
        format={format}
        inputReadOnly={true} //for mobile keyboard
        allowClear={!readOnly && allowClear}
        className="full_width"
        allowEmpty={[true, true]}
        placeholder={["From", "To"]}
        presets={rangePresets}
        onChange={handleOnChange}
        suffixIcon={<SVGDropdownArrow />}
      />
    </Form.Item>
  );
};

export default InputFormRangeDatePicker;
