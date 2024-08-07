import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Layout/Accordion',
  component: Accordion,
  argTypes: {
    allowMultiple: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const defaultItems = [
  {
    title: 'Section 1',
    content: <p>Content for section 1</p>,
  },
  {
    title: 'Section 2',
    content: <p>Content for section 2</p>,
  },
  {
    title: 'Section 3',
    content: <p>Content for section 3</p>,
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const AllowMultiple: Story = {
  args: {
    items: defaultItems,
    allowMultiple: true,
  },
};

export const WithLongContent: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        title: 'Section with long content',
        content: (
          <div>
            <p>This is a longer piece of content to demonstrate how the accordion handles larger amounts of text.</p>
            <p>It includes multiple paragraphs and can contain any React elements.</p>
            <ul>
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        ),
      },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      title: `Section ${i + 1}`,
      content: <p>Content for section {i + 1}</p>,
    })),
  },
};

export const NestedContent: Story = {
  args: {
    items: [
      ...defaultItems,
      {
        title: 'Section with nested accordion',
        content: (
          <Accordion
            items={[
              { title: 'Nested 1', content: <p>Nested content 1</p> },
              { title: 'Nested 2', content: <p>Nested content 2</p> },
            ]}
          />
        ),
      },
    ],
  },
};