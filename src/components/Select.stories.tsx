import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Inputs/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const defaultOptions = [
  { value: '', label: 'Select an option' },
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
  },
};

export const WithLabel: Story = {
  args: {
    options: defaultOptions,
    label: 'Select an option',
  },
};

export const Small: Story = {
  args: {
    options: defaultOptions,
    size: 'sm',
    label: 'Small Select',
  },
};

export const Large: Story = {
  args: {
    options: defaultOptions,
    size: 'lg',
    label: 'Large Select',
  },
};

export const Disabled: Story = {
  args: {
    options: defaultOptions,
    label: 'Disabled Select',
    disabled: true,
  },
};

export const WithManyOptions: Story = {
  args: {
    options: [
      { value: '', label: 'Select a country' },
      { value: 'us', label: 'United States' },
      { value: 'ca', label: 'Canada' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
    ],
    label: 'Select a country',
  },
};

export const WithDefaultValue: Story = {
  args: {
    options: defaultOptions,
    label: 'Select with default value',
    defaultValue: 'option2',
  },
};