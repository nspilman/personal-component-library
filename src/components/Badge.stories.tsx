import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    outline: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    ...Default.args,
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    variant: 'danger',
  },
};

export const Outline: Story = {
  args: {
    ...Default.args,
    outline: true,
  },
};

export const OutlinePrimary: Story = {
  args: {
    ...Primary.args,
    outline: true,
  },
};

export const LongText: Story = {
  args: {
    ...Default.args,
    children: 'This is a badge with long text',
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    children: (
      <>
        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Verified
      </>
    ),
  },
};