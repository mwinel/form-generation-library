import React from 'react';
import { useFormContext } from 'react-hook-form';
import { ToggleProps } from '../types';

function Toggle(props: ToggleProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, defaultChecked } = props;

  return (
    <div>
      <label>
        <input
          type="checkbox"
          {...register(name)}
          defaultChecked={defaultChecked}
        />
        {label}
      </label>
    </div>
  );
}

export default Toggle;
