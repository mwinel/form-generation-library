import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextAreaProps } from '../types';

function TextArea(props: TextAreaProps & { name: string }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { label, name, defaultValue, placeholder } = props;

  const errorMessage = errors[name]?.message as string;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        placeholder={placeholder}
        defaultValue={defaultValue || ''} // Set default value for text area
        {...register(name)}
      />
      {errorMessage && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
}

export default TextArea;
