import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Product', href: '/category/product' },
    ],
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
    ],
  },
};

export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/category/subcategory' },
      { label: 'Sub-subcategory', href: '/category/subcategory/sub-subcategory' },
      { label: 'Product', href: '/category/subcategory/sub-subcategory/product' },
    ],
  },
};

export const LongLabels: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'This is a very long category name that might wrap', href: '/category' },
      { label: 'Another long product name to test wrapping', href: '/category/product' },
    ],
  },
};