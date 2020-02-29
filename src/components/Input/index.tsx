import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { LabelStyled } from './styles';

interface Props {
  name: string;
  label?: string;
}

const InputStyled = {
  background: 'rgba(0, 0, 0, 0.2)',
  border: '0.5px solid #fff',
  borderRadius: '4px',
  height: '44px',
  padding: '0 15px',
  color: '#fff',
  margin: '0 0 10px',
};

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <LabelStyled htmlFor={fieldName}>{label}</LabelStyled>}

      <input
        style={InputStyled}
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
};

export default Input;
