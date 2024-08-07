import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'error'],
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'email'],
    },
    disabled: {
      control: 'boolean',
    },
    helperText: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    ...Default.args,
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Number: Story = {
  args: {
    ...Default.args,
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
  },
};

export const WithHelperText: Story = {
  args: {
    ...Default.args,
    helperText: 'This is some helper text',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    helperText: 'Username is available',
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    helperText: 'Username is already taken',
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};