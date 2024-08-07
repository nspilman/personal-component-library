import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/Inputs/TimePicker',
  component: TimePicker,
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'time changed' },
  },
};

export default meta;

type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {},
};

export const WithInitialValue: Story = {
  args: {
    value: '14:30',
  },
};