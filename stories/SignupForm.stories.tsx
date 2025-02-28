import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Form, FormProps } from '../src';
import * as yup from 'yup';

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
  comments: yup
    .string()
    .min(10, 'Comments must be at least 10 characters')
    .max(15, 'Comments must be less than 15 characters')
});

const meta: Meta = {
  title: 'SignupForm',
  component: Form,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = args => <Form {...args} />;

export const SignupForm = Template.bind({});

const fields: FormProps['fields'] = {
  firstName: {
    type: 'text',
    label: 'First name',
  },
  lastName: {
    type: 'text',
    label: 'Last name',
  },
  email: {
    type: 'text',
    label: 'Email',
  },
  agreeToTerms: {
    type: 'checkbox',
    label: 'I agree to the terms and conditions',
    defaultChecked: true,
  },
  sex: {
    type: 'radio',
    label: 'Sex',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
    defaultValue: 'male',
  },
  favoriteFruit: {
    type: 'select',
    label: 'Favorite Fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' },
    ],
    defaultValue: 'banana',
  },
  eventDate: {
    type: 'date',
    label: 'Event Date',
    defaultValue: '2025-10-01',
  },
  eventDateRange: {
    type: 'date',
    label: 'Event Date Range',
    isRange: true,
    defaultValue: {
      start: '2025-10-01',
      end: '2025-10-07',
    },
  },
  eventTime: {
    type: 'time',
    label: 'Event Time',
    defaultValue: '14:00',
  },
  profilePicture: {
    type: 'file',
    label: 'Profile Picture',
    // accept: 'image/*', // Specify accepted file types
  },
  comments: {
    type: 'textarea',
    label: 'Comments',
    defaultValue: 'Enter your comments here...',
  },
  notifications: {
    type: 'toggle',
    label: 'Enable Notifications',
    defaultChecked: true,
  },
  ageRange: {
    type: 'slider',
    label: 'Age Range',
    min: 0,
    max: 100,
    step: 10,
    defaultValue: 500,
  },
  rating: {
    type: 'rating',
    label: 'Product Rating',
    defaultValue: 4,
  },
};

SignupForm.args = {
  fields,
  validationSchema,
  onSubmit: values => {
    console.log('values', values);
  },
};
