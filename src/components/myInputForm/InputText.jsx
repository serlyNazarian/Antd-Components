import { useState, forwardRef, useImperativeHandle } from 'react';
import { Input } from 'antd';

const InputText = (
  {
    label,
    onClear,
    onChange,
    value = '',
    placeholder,
    onPressEnter,
    defaultValue,
    allowClear = true,
    ...otherProps
  },
  ref
) => {
  const [inputValue, setInputValue] = useState(value);

  const clearInput = () => {
    setInputValue('');
    onClear && onClear();
  };

  useImperativeHandle(ref, () => ({
    clearInput: () => clearInput(),
  }));

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
    if (!e.target.value) onClear && onClear();
  };

  return (
    <Input
      {...otherProps}
      label={label}
      value={inputValue}
      autoComplete="nope"
      allowClear={allowClear}
      onChange={handleOnChange}
      defaultValue={defaultValue}
      placeholder={placeholder || label || ''}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onPressEnter && onPressEnter(e.target.value);
        }
      }}
    />
  );
};

export default forwardRef(InputText);
