import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Layout/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined'],
    },
    width: {
      control: 'select',
      options: ['fluid', 'fixed'],
    },
    header: {
      control: 'text',
    },
    footer: {
      control: 'text',
    },
    image: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p>This is the main content of the card.</p>,
  },
};

export const WithHeaderAndFooter: Story = {
  args: {
    ...Default.args,
    header: <h3 className="text-lg font-semibold">Card Header</h3>,
    footer: <p className="text-sm text-gray-500">Card Footer</p>,
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    image: '/api/placeholder/400/200',
  },
};

export const Outlined: Story = {
  args: {
    ...Default.args,
    variant: 'outlined',
  },
};

export const FixedWidth: Story = {
  args: {
    ...Default.args,
    width: 'fixed',
  },
};

export const CompleteCard: Story = {
  args: {
    header: <h3 className="text-lg font-semibold">Complete Card</h3>,
    children: (
      <div>
        <p className="mb-2">This card demonstrates all available features.</p>
        <button className="bg-primary text-white px-4 py-2 rounded">Action</button>
      </div>
    ),
    footer: <p className="text-sm text-gray-500">Last updated: 2 days ago</p>,
    image: '/api/placeholder/400/200',
    variant: 'elevated',
    width: 'fixed',
  },
};