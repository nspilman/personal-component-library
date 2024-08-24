import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navigation/Navbar',
  component: Navbar,
  argTypes: {
    sticky: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

const DefaultLogo = () => (
  <div className="text-2xl font-bold text-primary">Logo</div>
);

export const Default: Story = {
  args: {
    logo: <DefaultLogo />,
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
};

export const Sticky: Story = {
  args: {
    ...Default.args,
    sticky: true,
  },
};

export const WithImage: Story = {
  args: {
    ...Default.args,
    logo: <img src="/api/placeholder/120/40" alt="Logo" />,
  },
};

export const LongNavigation: Story = {
  args: {
    logo: <DefaultLogo />,
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
};