import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from './Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Data Display/Popover',
  component: Popover,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
  decorators: [
    (Story) => (
      <div className="h-64 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Popover</Button>,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Popover Title</h3>
        <p>This is the popover content.</p>
      </div>
    ),
  },
};

export const PositionTop: Story = {
  args: {
    ...Default.args,
    position: 'top',
  },
};

export const PositionLeft: Story = {
  args: {
    ...Default.args,
    position: 'left',
  },
};

export const PositionRight: Story = {
  args: {
    ...Default.args,
    position: 'right',
  },
};

export const WithForm: Story = {
  args: {
    trigger: <Button>Edit Profile</Button>,
    content: (
      <form className="p-4">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>
        <Button>Save Changes</Button>
      </form>
    ),
  },
};

export const WithCustomTrigger: Story = {
  args: {
    trigger: (
      <span className="text-blue-600 cursor-pointer underline">
        More info
      </span>
    ),
    content: (
      <div className="p-4 max-w-xs">
        <p>This popover is triggered by a text link instead of a button.</p>
      </div>
    ),
  },
};

export const Interactive: Story = {
  args: {
    trigger: <Button>Interactive Popover</Button>,
    content: (
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Choose an option</h3>
        <div className="space-y-2">
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 1
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 2
          </button>
          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Option 3
          </button>
        </div>
      </div>
    ),
  },
};