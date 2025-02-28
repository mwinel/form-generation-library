import React from 'react';
import {
  FormProvider,
  useFieldArray,
  useForm,
  useFormContext,
} from 'react-hook-form';
import NumberField from './components/NumberField';
import TextField from './components/TextField';
import CheckboxField from './components/CheckboxField';
import RadioField from './components/RadioField';
import SelectField from './components/SelectField';
import { ArrayFieldProps, Field, FormProps, ObjectFieldProps } from './types';
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import FileUpload from './components/FileUpload';
import TextArea from './components/TextArea';
import Toggle from './components/Toggle';
import Slider from './components/Slider';
import Rating from './components/Rating';

function ObjectField(props: ObjectFieldProps & { name: string }) {
  const { label, name, properties } = props;

  return (
    <div>
      <label>{label}</label>
      {Object.entries(properties).map(([fieldName, objectField]) => {
        return renderFields([`${name}.${fieldName}`, objectField]);
      })}
    </div>
  );
}

const appendDefaults = {
  text: '',
  number: 0,
  array: [],
  object: {},
  checkbox: false,
  radio: '',
  select: '',
  date: '',
  time: '',
  file: '',
  textarea: '',
  toggle: '',
  slider: '',
  rating: '',
};

function ArrayField(props: ArrayFieldProps & { name: string }) {
  const { name, itemField, label } = props;

  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  function add() {
    append(appendDefaults[itemField.type]);
  }

  return (
    <div>
      <label>{label}</label>
      <button onClick={add} type="button">
        +
      </button>

      {fields.map((item, i) => {
        return (
          <div key={`ArrayField__${name}_${item.id}`}>
            {renderFields([`${name}[${i}]`, itemField])}
            <button type="button" onClick={() => remove(i)}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}

function renderFields([name, fieldProps]: [string, Field]) {
  if (fieldProps.type === 'text') {
    return <TextField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'number') {
    return <NumberField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'object') {
    return <ObjectField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'array') {
    return <ArrayField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'checkbox') {
    return <CheckboxField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'radio') {
    return <RadioField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'select') {
    return <SelectField {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'date') {
    return <DatePicker {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'time') {
    return <TimePicker {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'file') {
    return <FileUpload {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'textarea') {
    return <TextArea {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'toggle') {
    return <Toggle {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'slider') {
    return <Slider {...fieldProps} name={name} />;
  }
  if (fieldProps.type === 'rating') {
    return <Rating {...fieldProps} name={name} />;
  }

  return <div>Unknown type</div>;
}

export function Form({ fields, onSubmit }: FormProps) {
  const form = useForm();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {Object.entries(fields).map(renderFields)}

        <button type="submit">Save</button>
      </form>
    </FormProvider>
  );
}
