import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Feedback/Progress',
  component: Progress,
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    max: { control: 'number' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'success', 'warning', 'error'] },
    showLabel: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 50,
    max: 100,
    size: 'md',
    variant: 'default',
    showLabel: false,
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const WithLabel: Story = {
  args: {
    ...Default.args,
    showLabel: true,
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
    value: 100,
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
    value: 70,
  },
};

export const Error: Story = {
  args: {
    ...Default.args,
    variant: 'error',
    value: 30,
  },
};

export const CustomMax: Story = {
  args: {
    ...Default.args,
    value: 75,
    max: 200,
    showLabel: true,
  },
};