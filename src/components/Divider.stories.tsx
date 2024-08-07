import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Layout/Divider',
  component: Divider,
  argTypes: {
    color: {
      control: 'select',
      options: ['light', 'dark'],
    },
    thickness: {
      control: 'select',
      options: ['thin', 'medium', 'thick'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const DarkThick: Story = {
  args: {
    color: 'dark',
    thickness: 'thick',
  },
};

export const WithContent: Story = {
  render: (args) => (
    <div>
      <p>Above content</p>
      <Divider {...args} />
      <p>Below content</p>
    </div>
  ),
};