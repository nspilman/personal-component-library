import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
    title: {
      control: 'text',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational alert.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operation completed successfully.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please be cautious about this action.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'An error occurred. Please try again.',
  },
};

export const WithTitle: Story = {
  args: {
    variant: 'info',
    title: 'Important Information',
    children: 'This alert includes a title for additional context.',
  },
};

export const Dismissible: Story = {
  args: {
    variant: 'success',
    title: 'Task Complete',
    children: 'You can dismiss this alert by clicking the close button.',
    onClose: () => alert('Alert closed'),
  },
};

export const LongContent: Story = {
  args: {
    variant: 'warning',
    title: 'Long Alert',
    children: `This alert contains a longer message to demonstrate how the component handles 
               multiple lines of text. It should wrap properly and maintain proper spacing.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
               nisi vel consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
               nunc euismod nunc.`,
  },
};