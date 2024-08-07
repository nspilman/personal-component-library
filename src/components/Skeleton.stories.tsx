import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText, SkeletonCircular, SkeletonRectangular } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const CircularSkeleton: Story = {
  args: {
    variant: 'circular',
    width: 50,
    height: 50,
  },
};

export const RectangularSkeleton: Story = {
  args: {
    variant: 'rectangular',
    width: '100%',
    height: 100,
  },
};

export const TextLines: Story = {
  render: () => (
    <div className="space-y-2">
      <SkeletonText />
      <SkeletonText width="75%" />
      <SkeletonText width="50%" />
    </div>
  ),
};

export const AvatarWithText: Story = {
  render: () => (
    <div className="flex items-center space-x-4">
      <SkeletonCircular width={50} height={50} />
      <div className="space-y-2">
        <SkeletonText width={120} />
        <SkeletonText width={200} />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 p-4 border rounded-lg space-y-4">
      <SkeletonRectangular height={150} />
      <SkeletonText />
      <SkeletonText width="75%" />
      <SkeletonText width="50%" />
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex space-x-4">
        <SkeletonText width={100} />
        <SkeletonText width={100} />
        <SkeletonText width={100} />
      </div>
      {[...Array(5)].map((_, index) => (
        <div key={index} className="flex space-x-4">
          <SkeletonText width={100} />
          <SkeletonText width={100} />
          <SkeletonText width={100} />
        </div>
      ))}
    </div>
  ),
};