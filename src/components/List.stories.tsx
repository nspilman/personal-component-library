import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/Data Display/List',
  component: List,
  argTypes: {
    variant: {
      control: 'select',
      options: ['unordered', 'ordered', 'none'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof List>;

const sampleItems = [
  'First item',
  'Second item',
  'Third item',
  'Fourth item',
];

export const Unordered: Story = {
  args: {
    variant: 'unordered',
    items: sampleItems,
  },
};

export const Ordered: Story = {
  args: {
    variant: 'ordered',
    items: sampleItems,
  },
};

export const None: Story = {
  args: {
    variant: 'none',
    items: sampleItems,
  },
};

export const WithComplexItems: Story = {
  args: {
    items: [
      <span key="1">Item with <strong>bold</strong> text</span>,
      <a key="2" href="#">Item with a link</a>,
      <div key="3">Item with multiple<br/>lines</div>,
    ],
  },
};