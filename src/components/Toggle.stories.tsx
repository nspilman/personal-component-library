import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Inputs/Toggle',
  component: Toggle,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    label: 'Toggle me',
  },
};

export const Checked: Story = {
  args: {
    label: 'Toggle me',
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked toggle',
    disabled: true,
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small toggle',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large toggle',
    size: 'lg',
  },
};

export const Group: Story = {
  render: (args) => (
    <div className="space-y-4">
      <Toggle {...args} label="Option 1" />
      <Toggle {...args} label="Option 2" />
      <Toggle {...args} label="Option 3" />
    </div>
  ),
};