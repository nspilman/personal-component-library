import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Inputs/Switch',
  component: Switch,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchTemplate: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Switch
        {...args}
        checked={checked}
        onChange={(newChecked) => {
          setChecked(newChecked);
          console.log(`Switch toggled: ${newChecked}`);
        }}
      />
    );
  },
};

export const Default: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  ...SwitchTemplate,
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
    label: 'Enable notifications',
  },
};

export const Disabled: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  ...SwitchTemplate,
  args: {
    checked: true,
    disabled: true,
  },
};

export const WithLongLabel: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
    label: 'This is a very long label to demonstrate how the switch component handles wrapping text',
  },
};