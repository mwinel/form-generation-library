import React from 'react';
import { useFormContext } from 'react-hook-form';
import { DatePickerProps } from '../types';

function DatePicker(props: DatePickerProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, isRange, defaultValue } = props;

  return (
    <div>
      <label>{label}</label>
      {isRange ? (
        <div>
          <input
            type="date"
            {...register(`${name}.start`)}
            defaultValue={
              typeof defaultValue === 'object' && defaultValue?.start
                ? defaultValue.start
                : ''
            } // Set default value for start date
          />
          <input
            type="date"
            {...register(`${name}.end`)}
            defaultValue={
              typeof defaultValue === 'object' && defaultValue?.end
                ? defaultValue.end
                : ''
            } // Set default value for end date
          />
        </div>
      ) : (
        <input
          type="date"
          {...register(name)}
          defaultValue={typeof defaultValue === 'string' ? defaultValue : ''} // Ensure defaultValue is a string
        />
      )}
    </div>
  );
}

export default DatePicker;
