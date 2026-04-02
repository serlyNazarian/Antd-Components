import { forwardRef, useState } from 'react';
import { Form, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import UtilString from '../../utils/UtilString';

const PercentInput = forwardRef(
  (
    {
      name = 'numberValuePer',
      label,
      required = false,
      controls = false,
      className = UtilString.EMPTY_STRING,
      style,
      placeholder,
      maxLength = 3,
      min = 0,
      max = 100,
      step = 0,
      disabled,
      hidden,
      getValueProps,
      getValueFromEvent,
      normalize,
      shouldUpdate,
      valuePropName,
      onBlur,
      onChange,
      readOnly,
    },
    ref
  ) => {
    const { t } = useTranslation();

    const [decimal] = useState(2);
    const [value, setValue] = useState(0);

    let errorMessage = `${t('WORD_VALUE_FOR')} ${label} ${t(
      'WORD_IS_REQUIRED'
    )}`;

    let rules = [];
    if (required) {
      rules.push(() => ({
        validator(_, value) {
          if (value >= 0 || hidden) {
            return Promise.resolve();
          }
          return Promise.reject(errorMessage);
        },
      }));
    }

    const parseValue = (value) =>
      value ? parseFloat(value.replaceAll(',', '')).toFixed(decimal) : 0;

    const validate = (el) => {
      if (el.target.value > 100) {
        el.target.value = 100;
      }
      setValue(el.target.value);
    };

    return (
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        hidden={hidden}
        required={required}
        normalize={normalize}
        validateTrigger="onSubmit"
        shouldUpdate={shouldUpdate}
        valuePropName={valuePropName}
        getValueProps={getValueProps}
        getValueFromEvent={getValueFromEvent}
      >
        <InputNumber
          className={`full_width ${className}`}
          ref={ref}
          style={{ ...style }}
          controls={controls}
          placeholder={placeholder || label || ''}
          value={value}
          step={step}
          min={min}
          max={max}
          disabled={disabled}
          hidden={hidden}
          maxLength={maxLength}
          suffix="%"
          onBlur={(e) => {
            onBlur && onBlur(parseValue(e.target.value));
          }}
          onChange={onChange}
          onKeyUp={validate}
          readOnly={readOnly}
          onFocus={(e) => e.target.select()}
        />
      </Form.Item>
    );
  }
);

export default PercentInput;
