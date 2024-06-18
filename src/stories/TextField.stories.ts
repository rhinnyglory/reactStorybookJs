import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextField, { TextFieldProps } from './Textfield';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
  },
} as Meta;

const Template: StoryFn<TextFieldProps> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  size: 'large',
};

export const WithMaxLength = Template.bind({});
WithMaxLength.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  maxLength: 10,
  size: 'large',
};

export const WithMinLength = Template.bind({});
WithMinLength.args = {
  label: 'Name',
  placeholder: 'Enter your name',
  minLength: 2,
  size: 'small',
};
