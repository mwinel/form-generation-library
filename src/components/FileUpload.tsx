import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FileUploadProps } from '../types';

function FileUpload(props: FileUploadProps & { name: string }) {
  const { register } = useFormContext();
  const { label, name, accept } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        id={name}
        {...register(name)}
        accept={accept}
      />
    </div>
  );
}

export default FileUpload;
