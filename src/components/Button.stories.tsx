import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ArrowRight, Plus } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Components/Inputs/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    leftIcon: {
      control: 'boolean',
    },
    rightIcon: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
    children: 'Ghost Button',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: 'lg',
    children: 'Large Button',
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    children: 'Add Item',
    leftIcon: <Plus />,
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    children: 'Next',
    rightIcon: <ArrowRight />,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    children: 'Disabled Button',
    disabled: true,
  },
};