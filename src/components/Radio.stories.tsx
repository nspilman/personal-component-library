import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Inputs/Radio',
  component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Default Radio',
    name: 'default-radio',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Radio',
    checked: true,
    name: 'checked-radio',
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-radio',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Radio',
    disabled: true,
    name: 'disabled-radio',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled Checked Radio',
    disabled: true,
    checked: true,
    name: 'disabled-checked-radio',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Radio',
    size: 'sm',
    name: 'small-radio',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Radio',
    size: 'lg',
    name: 'large-radio',
  },
};

export const Group: Story = {
  render: (args) => (
    <div className="space-y-2">
      <Radio {...args} name="radio-group" label="Option 1" value="1" />
      <Radio {...args} name="radio-group" label="Option 2" value="2" />
      <Radio {...args} name="radio-group" label="Option 3" value="3" />
    </div>
  ),
};