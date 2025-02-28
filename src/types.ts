import { HTMLInputTypeAttribute } from 'react';
import { SubmitHandler, FieldValues } from 'react-hook-form';

type FieldSchema = {
  type:
    | 'text'
    | 'number'
    | 'array'
    | 'object'
    | 'checkbox'
    | 'radio'
    | 'select'
    | 'date'
    | 'time'
    | 'file'
    | 'textarea'
    | 'toggle'
    | 'slider'
    | 'rating';
};

type DefaultProps = {
  label: string;
  placeholder?: string;
};

export type TextFieldProps = FieldSchema &
  DefaultProps & {
    type: 'text';
    htmlType?: HTMLInputTypeAttribute;
  };

export type NumberFieldProps = FieldSchema &
  DefaultProps & {
    type: 'number';
    min?: number;
    max?: number;
  };

export type ObjectFieldProps = FieldSchema &
  DefaultProps & {
    type: 'object';
    properties: Fields;
  };

export type ArrayFieldProps = FieldSchema &
  DefaultProps & {
    type: 'array';
    itemField: Field;
  };

export type CheckboxFieldProps = DefaultProps & {
  type: 'checkbox';
  defaultChecked?: boolean;
};

export type RadioFieldProps = DefaultProps & {
  type: 'radio';
  options: { value: string; label: string }[];
  defaultValue?: string;
};

export type SelectFieldProps = DefaultProps & {
  type: 'select';
  options: { value: string; label: string }[];
  defaultValue?: string;
};

export type DatePickerProps = DefaultProps & {
  type: 'date';
  isRange?: boolean;
  defaultValue?: { start?: string; end?: string } | string;
};

export type TimePickerProps = DefaultProps & {
  type: 'time';
  defaultValue?: string;
};

export type FileUploadProps = DefaultProps & {
  type: 'file';
  accept?: string; // Optional to specify accepted file types (e.g., 'image/*')
};

export type TextAreaProps = DefaultProps & {
  type: 'textarea';
  defaultValue?: string;
};

export type ToggleProps = DefaultProps & {
  type: 'toggle';
  defaultChecked?: boolean;
};

export type SliderProps = DefaultProps & {
  type: 'slider';
  min: number;
  max: number;
  step?: number;
  defaultValue?: number;
};

export type RatingProps = DefaultProps & {
  type: 'rating';
  defaultValue?: number; // Optional default value for rating (1 to 5)
};

export type Field =
  | TextFieldProps
  | NumberFieldProps
  | ObjectFieldProps
  | ArrayFieldProps
  | CheckboxFieldProps
  | RadioFieldProps
  | SelectFieldProps
  | DatePickerProps
  | TimePickerProps
  | FileUploadProps
  | TextAreaProps
  | ToggleProps
  | SliderProps
  | RatingProps;

type Fields = Record<string, Field>;

export interface FormProps {
  fields: Fields;
  onSubmit: SubmitHandler<FieldValues>;
}
