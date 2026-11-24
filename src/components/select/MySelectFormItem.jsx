import { useMemo } from 'react';
import { Form } from 'antd';
import MySelect from './MySelect';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

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
      <MySelect
        {...otherProps}
        style={styleLocal}
        optionLabelProp="label"
        placeholder={placeholder || label || ''}
        showSearch={{
          filter: (input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
          optionFilterProp: 'label',
          onSearch: onSearch,
        }}
        onClear={onSearch}
      />
    </Form.Item>
  );
};

export default MySelectFormItem;
