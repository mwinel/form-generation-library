import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { SliderProps } from '../types';

function Slider(props: SliderProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, min, max, step, defaultValue } = props;

  // State to hold the current value of the slider
  const [currentValue, setCurrentValue] = useState(defaultValue || min);

  // Handle change event to update the current value
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(event.target.value)); // Convert string to number
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="range"
        id={name}
        {...register(name)}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue || min} // Set default value for slider
        onChange={handleChange} // Update current value on change
      />
      <div>
        <span>Current Value: {currentValue}</span>
      </div>
      <div>
        <span>Min: {min}</span>
        <span>Max: {max}</span>
      </div>
    </div>
  );
}

export default Slider;
