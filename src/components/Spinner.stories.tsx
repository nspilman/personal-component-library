import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Feedback/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'white'],
    },
    srText: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <div className="p-4 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
};

export const White: Story = {
  args: {
    color: 'white',
  },
  decorators: [
    (Story) => (
      <div className="p-4 flex items-center justify-center bg-gray-800">
        <Story />
      </div>
    ),
  ],
};

export const CustomSRText: Story = {
  args: {
    srText: 'Please wait while content is loading...',
  },
};

export const WithText: Story = {
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Spinner {...args} />
      <span>Loading...</span>
    </div>
  ),
};