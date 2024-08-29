import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Text} from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Data Display/Typography',
  component: Text,
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption'],
    },
    color: {
      control: 'select',
      options: ['default', 'secondary', 'primary'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'This is some text',
  },
};

export const Heading1: Story = {
  args: {
    variant: 'h1',
    children: 'Heading 1',
  },
};

export const Heading2: Story = {
  args: {
    variant: 'h2',
    children: 'Heading 2',
  },
};

export const Heading3: Story = {
  args: {
    variant: 'h3',
    children: 'Heading 3',
  },
};

export const Body1Text: Story = {
  args: {
    variant: 'body1',
    children: 'This is body1 text.',
  },
};

export const Body2Text: Story = {
  args: {
    variant: 'body2',
    children: 'This is body2 text.',
  },
};

export const CaptionText: Story = {
  args: {
    variant: 'caption',
    children: 'This is caption text.',
  },
};

export const ColorVariants: Story = {
  args: {
    children: 'This text has different color variants.',
  },
  render: (args) => (
    <div className="space-y-2">
      <Text {...args} color="default">Default Color</Text>
      <Text {...args} color="secondary">Secondary Color</Text>
      <Text {...args} color="primary">Primary Color</Text>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="h5">Heading 5</Text>
      <Text variant="h6">Heading 6</Text>
      <Text variant="body1">This is Body1 text. Ita&pos;s the default size for body copy.</Text>
      <Text variant="body2">This is Body2 text. It&pos;s slightly smaller than Body1.</Text>
      <Text variant="caption">This is Caption text. It&pos;s the smallest text size.</Text>
    </div>
  ),
};