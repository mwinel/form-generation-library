import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextFieldProps } from '../types';

function TextField(props: TextFieldProps & { name: string }) {
  const {
    register,
    // formState: { errors },
  } = useFormContext();
  const { label, name, htmlType = 'text', placeholder } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={htmlType}
        placeholder={placeholder}
        {...register(name)}
      />
      {/* Display error message if validation fails */}
      {/* {errors[name] && (
        <span style={{ color: 'red' }}>{errors[name].message}</span>
      )} */}
    </div>
  );
}

export default TextField;
