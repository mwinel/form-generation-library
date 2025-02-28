import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TextAreaProps } from '../types';

function TextArea(props: TextAreaProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, defaultValue } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        {...register(name)}
        defaultValue={defaultValue || ''} // Set default value for text area
      />
    </div>
  );
}

export default TextArea;
