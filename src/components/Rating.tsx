import React from 'react';
import { useFormContext } from 'react-hook-form';
import { RatingProps } from '../types';

function Rating(props: RatingProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, defaultValue } = props;

  return (
    <div>
      <label>{label}</label>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="radio"
              value={star}
              {...register(name)}
              defaultChecked={defaultValue === star} // Set default checked state
              style={{ display: 'none' }} // Hide the radio input
            />
            <span
              style={{
                cursor: 'pointer',
                fontSize: '24px',
                color: star <= (defaultValue || 0) ? '#FFD700' : '#ccc', // Gold for selected stars
              }}
            >
              ★
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Rating;
