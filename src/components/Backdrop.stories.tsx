import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Feedback/Backdrop',
  component: Backdrop,
  argTypes: {
    open: { control: 'boolean' },
    color: { control: 'select', options: ['dark', 'light'] },
    blur: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    open: true,
    children: <div className="bg-white p-4 rounded-md">Backdrop Content</div>,
  },
};

export const LightBackdrop: Story = {
  args: {
    ...Default.args,
    color: 'light',
  },
};

export const WithBlur: Story = {
  args: {
    ...Default.args,
    blur: true,
  },
};

export const WithComplexContent: Story = {
  args: {
    open: true,
    children: (
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
        <p className="mb-4">This is some content inside the backdrop.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Close
        </button>
      </div>
    ),
  },
};