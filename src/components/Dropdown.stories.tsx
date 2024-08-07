import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Inputs/Dropdown',
  component: Dropdown,
  argTypes: {
    width: {
      control: 'select',
      options: ['auto', 'full'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Options',
    items: [
      { label: 'Edit', onClick: () => console.log('Edit clicked') },
      { label: 'Duplicate', onClick: () => console.log('Duplicate clicked') },
      { label: 'Delete', onClick: () => console.log('Delete clicked') },
    ],
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    width: 'full',
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Select a fruit',
    items: [
      'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 
      'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon'
    ].map(fruit => ({
      label: fruit,
      onClick: () => console.log(`${fruit} selected`),
    })),
  },
};

export const LongLabels: Story = {
  args: {
    label: 'Select an option',
    items: [
      { label: 'This is a very long option that should wrap nicely', onClick: () => {} },
      { label: 'Another lengthy option to demonstrate text wrapping', onClick: () => {} },
      { label: 'Short option', onClick: () => {} },
    ],
  },
};