import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Inputs/Calendar',
  component: Calendar,
  argTypes: {
    selectedDate: { control: 'date' },
    onDateSelect: { action: 'date selected' },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};

export const WithSelectedDate: Story = {
  args: {
    selectedDate: new Date(2023, 5, 15),
  },
};