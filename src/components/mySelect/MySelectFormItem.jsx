import { useMemo } from 'react';
import { Form, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import UtilString from '../../utils/UtilString';
import SVGDropdownArrow from '../../icons/SVGDropdownArrow';

const MySelectFormItem = ({
  name,
  label,
  style,
  block,
  width,
  hidden,
  onSearch,
  required,
  placeholder,
  errorMessage,
  tooltipTitle,
  disableMargins,
  className = UtilString.EMPTY_STRING,
  ...otherProps
}) => {
  const { t } = useTranslation();

  const styleLocal = { ...style, width: block ? '100%' : width || '' };

  const errMessage = errorMessage
    ? errorMessage
    : `${t('WORD_ERROR_PLEASE_SELECT')} ${placeholder ? placeholder : label}!`;

  const rules = useMemo(() => {
    return [
      { required: required && !hidden, message: errMessage },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value) {
            return Promise.resolve();
          }
          if (getFieldValue(name) !== '') {
            return Promise.resolve();
          }
          return Promise.reject(errMessage);
        },
      }),
    ];
  }, [errMessage, name, required, hidden]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      style={styleLocal}
      hasFeedback={false}
      tooltip={tooltipTitle}
      validateTrigger="onSubmit"
      className={`${className} ${disableMargins ? 'disable_margins' : ''}`}
    >
      <Select
        {...otherProps}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        style={styleLocal}
        optionFilterProp="label"
        optionLabelProp="label"
        onSearch={onSearch}
        onClear={onSearch}
        suffixIcon={<SVGDropdownArrow />}
        placeholder={placeholder || label || ''}
      />
    </Form.Item>
  );
};

export default MySelectFormItem;
