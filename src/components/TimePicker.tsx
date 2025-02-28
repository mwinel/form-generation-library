import React from 'react';
import { useFormContext } from 'react-hook-form';
import { TimePickerProps } from '../types';

function TimePicker(props: TimePickerProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, defaultValue } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="time"
        id={name}
        {...register(name)}
        defaultValue={defaultValue || ''}
      />
    </div>
  );
}

export default TimePicker;
