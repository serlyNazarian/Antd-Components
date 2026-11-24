import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react';
import { Form, InputNumber } from 'antd';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

const InputNumberFormItem = forwardRef(
  (
    {
      name,
      suffix,
      label,
      variant,
      onEscape,
      onBlur,
      readOnly,
      onChange,
      errorMsg,
      placeholder,
      onPressEnter,
      tooltipTitle,
      classNameInput,
      hidden = false,
      controls = false,
      required = false,
      autoFocus = false,
      hasFeedback = false,
      className = UtilString.EMPTY_STRING,
      ...otherProps
    },
    ref
  ) => {
    const { t } = useTranslation();

    const refComponent = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        refComponent.current.focus();
        refComponent.current.select();
      },
    }));

    const rules = useMemo(() => {
      return [
        {
          required: required && !hidden,
          message:
            errorMsg ||
            `${t('WORD_VALUE_FOR')} ${label} ${t('WORD_IS_REQUIRED')}`,
        },
      ];
    }, [errorMsg, hidden, label, required, t]);

    return (
      <Form.Item
        name={name}
        label={label}
        rules={rules}
        hidden={hidden}
        tooltip={tooltipTitle}
        hasFeedback={hasFeedback}
        validateTrigger="onSubmit"
        className={`full_width ${className}`}
        style={{ height: hidden ? 0 : undefined }}
      >
        <InputNumber
          {...otherProps}
          ref={refComponent}
          className={`full_width ${classNameInput}`}
          placeholder={placeholder || label || ''}
          autoFocus={autoFocus}
          readOnly={readOnly}
          autoComplete="nope"
          onChange={onChange}
          onPressEnter={onPressEnter}
          controls={controls}
          suffix={suffix}
          variant={variant}
          onBlur={onBlur}
          type="number"
          onFocus={() => {
            refComponent?.current?.select();
          }}
          onKeyUp={(e) => {
            if (e.key === 'Escape') {
              onEscape && onEscape();
            }
          }}
        />
      </Form.Item>
    );
  }
);

export default InputNumberFormItem;
