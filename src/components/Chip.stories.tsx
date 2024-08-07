import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Data Display/Chip',
  component: Chip,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
    },
    clickable: {
      control: 'boolean',
    },
    onDelete: { action: 'deleted' },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: 'Chip',
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    variant: 'primary',
  },
};

export const Clickable: Story = {
  args: {
    ...Default.args,
    clickable: true,
    onClick: () => alert('Chip clicked!'),
  },
};

export const Deletable: Story = {
  args: {
    ...Default.args,
    onDelete: () => {},
  },
};

export const ClickableAndDeletable: Story = {
  args: {
    ...Default.args,
    clickable: true,
    onClick: () => alert('Chip clicked!'),
    onDelete: () => {},
  },
};

export const ChipGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip>Tag 1</Chip>
      <Chip variant="primary">Tag 2</Chip>
      <Chip variant="secondary">Tag 3</Chip>
      <Chip variant="success">Tag 4</Chip>
      <Chip variant="warning">Tag 5</Chip>
      <Chip variant="danger">Tag 6</Chip>
    </div>
  ),
};