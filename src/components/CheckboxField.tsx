import React from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxFieldProps } from '../types';

function CheckboxField(props: CheckboxFieldProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, defaultChecked } = props;

  return (
    <div>
      <label>
        <input
          id={name}
          type="checkbox"
          {...register(name)}
          defaultChecked={defaultChecked}
        />
        {label}
      </label>
    </div>
  );
}

export default CheckboxField;
