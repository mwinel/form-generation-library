import React from 'react';
import { useFormContext } from 'react-hook-form';
import { RadioFieldProps } from '../types';

function RadioField(props: RadioFieldProps & { name: string }) {
  const { register } = useFormContext();
  const { label, options, name, defaultValue } = props;

  return (
    <div>
      <label>{label}</label>
      {options.map((option) => (
        <div key={option.value}>
          <label>
            <input
              id={name}
              type="radio"
              value={option.value}
              {...register(name)}
              defaultChecked={option.value === defaultValue}
            />
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
}

export default RadioField;
