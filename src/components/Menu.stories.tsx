import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  argTypes: {
    label: { control: 'text' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Menu>;

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
    fullWidth: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Actions',
    items: [
      { label: '📝 Edit', onClick: () => console.log('Edit clicked') },
      { label: '📋 Copy', onClick: () => console.log('Copy clicked') },
      { label: '🗑️ Delete', onClick: () => console.log('Delete clicked') },
    ],
  },
};

export const LongList: Story = {
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

export const NestedContent: Story = {
  args: {
    label: 'Advanced Options',
    items: [
      { 
        label: 'Change Status',
        onClick: () => console.log('Change Status clicked')
      },
      { 
        label: 'Permissions',
        onClick: () => console.log('Permissions clicked')
      },
      { 
        label: 'Analytics',
        onClick: () => console.log('Analytics clicked')
      },
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    ...Default.args,
    className: 'bg-gray-100 p-4 rounded-lg',
  },
};