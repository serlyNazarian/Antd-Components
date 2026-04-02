import { useMemo } from 'react';
import { Form, Input } from 'antd';
import SVGLock from '../../icons/SVGLock';
import { useTranslation } from 'react-i18next';
import { UtilString } from '../../utils/UtilString';

const InputPasswordConfirmFormItem = ({
  name,
  label,
  readOnly,
  placeholder,
  hidden = false,
  required = true,
  allowClear = true,
  hasFeedback = false,
  prefix = <SVGLock />,
  className = UtilString.EMPTY_STRING,
  classNameInput = UtilString.EMPTY_STRING,
}) => {
  const { t } = useTranslation();

  const rules = useMemo(() => {
    return [
      {
        required: required && !hidden,
        message: `${t('WORD_PLEASE_CONFIRM_YOUR_PASSWORD')}`,
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject(
            new Error(
              `${t('WORD_THE_TWOPASSWORDS_THAT_YOU_ENTERED_DO_NOT_MATCH')}`
            )
          );
        },
      }),
    ];
  }, [hidden, required, t]);

  return (
    <Form.Item
      name={name}
      label={label}
      rules={rules}
      hidden={hidden}
      className={className}
      hasFeedback={hasFeedback}
      validateTrigger="onSubmit"
      dependencies={['password']}
    >
      <Input.Password
        prefix={prefix}
        readOnly={readOnly}
        autoComplete="nope"
        allowClear={allowClear}
        className={classNameInput}
        placeholder={placeholder || label || ''}
      />
    </Form.Item>
  );
};

export default InputPasswordConfirmFormItem;
