import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from '../types';

function TextField(props: TextFieldProps & { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, htmlType = 'text', placeholder } = props;

  // Get nested errors using lodash-like get syntax
  const errorMessage = errors[name]?.message as string;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={htmlType}
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
}

export default TextField;
