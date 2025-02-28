import React from 'react';
import { useFormContext } from 'react-hook-form';
import { SelectFieldProps } from '../types';

function SelectField(props: SelectFieldProps & { name: string }) {
  const { register } = useFormContext();
  const { label, options, name, defaultValue } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} {...register(name)} defaultValue={defaultValue}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
