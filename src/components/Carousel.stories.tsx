import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Data Display/Carousel',
  component: Carousel,
  argTypes: {
    interval: { control: 'number' },
    showControls: { control: 'boolean' },
    showIndicators: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const slides = [
  <div key="1" className="bg-red-500 h-64 flex items-center justify-center text-white text-2xl">Slide 1</div>,
  <div key="2" className="bg-blue-500 h-64 flex items-center justify-center text-white text-2xl">Slide 2</div>,
  <div key="3" className="bg-green-500 h-64 flex items-center justify-center text-white text-2xl">Slide 3</div>,
];

export const Default: Story = {
  args: {
    slides: slides,
  },
};

export const NoControls: Story = {
  args: {
    ...Default.args,
    showControls: false,
  },
};

export const NoIndicators: Story = {
  args: {
    ...Default.args,
    showIndicators: false,
  },
};

export const CustomInterval: Story = {
  args: {
    ...Default.args,
    interval: 2000,
  },
};