import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Navigation/Stepper',
  component: Stepper,
  argTypes: {
    currentStep: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

const steps = [
  { label: 'Step 1', description: 'Description for step 1' },
  { label: 'Step 2', description: 'Description for step 2' },
  { label: 'Step 3', description: 'Description for step 3' },
  { label: 'Step 4', description: 'Description for step 4' },
];

export const Default: Story = {
  args: {
    steps: steps,
    currentStep: 1,
  },
};

export const Halfway: Story = {
  args: {
    ...Default.args,
    currentStep: 2,
  },
};

export const Completed: Story = {
  args: {
    ...Default.args,
    currentStep: 4,
  },
};

export const WithoutDescriptions: Story = {
  args: {
    steps: steps.map(({ label }) => ({ label })),
    currentStep: 2,
  },
};

export const ManySteps: Story = {
  args: {
    steps: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
      { label: 'Step 5' },
      { label: 'Step 6' },
    ],
    currentStep: 3,
  },
};