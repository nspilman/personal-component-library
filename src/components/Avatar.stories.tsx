import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    initials: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/300',
    alt: 'User avatar',
  },
};

export const WithInitials: Story = {
  args: {
    initials: 'JD',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    initials: 'SM',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    initials: 'LG',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    src: 'https://i.pravatar.cc/300',
  },
};

export const Fallback: Story = {
  args: {
    src: 'invalid-image-url',
  },
};

export const Group: Story = {
  render: (args) => (
    <div className="flex -space-x-4">
      <Avatar {...args} src="https://i.pravatar.cc/300?img=1" />
      <Avatar {...args} src="https://i.pravatar.cc/300?img=2" />
      <Avatar {...args} src="https://i.pravatar.cc/300?img=3" />
      <Avatar {...args} initials="+2" />
    </div>
  ),
};