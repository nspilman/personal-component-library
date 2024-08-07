import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Inputs/Rating',
  component: Rating,
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5, step: 0.5 } },
    max: { control: { type: 'number', min: 1, max: 10 } },
    readOnly: { control: 'boolean' },
    onChange: { action: 'rating changed' },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: 4,
    readOnly: true,
  },
};

export const CustomMax: Story = {
  args: {
    value: 7,
    max: 10,
  },
};

export const HalfStar: Story = {
  args: {
    value: 3.5,
  },
};