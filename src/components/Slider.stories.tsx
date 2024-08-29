import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Inputs/Slider',
  component: Slider,
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Slider>;

const SliderTemplate: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return (
      <div className="w-64">
        <Slider {...args} value={value} onValueChange={setValue} />
        <p className="mt-2">Current value: {value}</p>
      </div>
    );
  },
};

export const Default: Story = {
  ...SliderTemplate,
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

export const WithStep: Story = {
  ...SliderTemplate,
  args: {
    min: 0,
    max: 100,
    step: 10,
    value: 50,
  },
};

export const CustomRange: Story = {
  ...SliderTemplate,
  args: {
    min: -50,
    max: 50,
    value: 0,
  },
};

export const Disabled: Story = {
  ...SliderTemplate,
  args: {
    min: 0,
    max: 100,
    value: 30,
    disabled: true,
  },
};

export const SmallRange: Story = {
  ...SliderTemplate,
  args: {
    min: 0,
    max: 5,
    step: 0.1,
    value: 2.5,
  },
};