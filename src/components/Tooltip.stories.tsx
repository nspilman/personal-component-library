import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button'; // Assuming we have a Button component

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    content: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const PositionTop: Story = {
  args: {
    ...Default.args,
    position: 'top',
  },
};

export const PositionBottom: Story = {
  args: {
    ...Default.args,
    position: 'bottom',
  },
};

export const PositionLeft: Story = {
  args: {
    ...Default.args,
    position: 'left',
  },
};

export const PositionRight: Story = {
  args: {
    ...Default.args,
    position: 'right',
  },
};

export const LongContent: Story = {
  args: {
    content: 'This is a tooltip with a rather long content to demonstrate how it handles wrapping.',
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const CustomTrigger: Story = {
  args: {
    content: 'Custom trigger example',
    children: <span className="underline cursor-help">Hover over this text</span>,
  },
};

export const WithinText: Story = {
  render: (args) => (
    <p>
      This is a paragraph with a 
      <Tooltip content="I'm a tooltip within text!" {...args}>
        <span className="text-blue-500 cursor-help"> tooltip </span>
      </Tooltip>
      inside it.
    </p>
  ),
};