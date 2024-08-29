import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastContainer } from './Toast';
import { Button } from './Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
    },
    duration: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

const ToastTemplate: Story = {
  render: (args) => {
    const [toasts, setToasts] = useState<React.ReactNode[]>([]);

    const addToast = () => {
      const newToast = (
        <Toast
          key={Date.now()}
          {...args}
          onClose={() => setToasts((prev) => prev.slice(1))}
        />
      );
      setToasts((prev) => [...prev, newToast]);
    };

    return (
      <div>
        <Button onClick={addToast}>Show Toast</Button>
        <ToastContainer>{toasts}</ToastContainer>
      </div>
    );
  },
};

export const Success: Story = {
  ...ToastTemplate,
  args: {
    variant: 'success',
    message: 'Operation completed successfully!',
  },
};

export const Error: Story = {
  ...ToastTemplate,
  args: {
    variant: 'error',
    message: 'An error occurred. Please try again.',
  },
};

export const Warning: Story = {
  ...ToastTemplate,
  args: {
    variant: 'warning',
    message: 'Warning: This action cannot be undone.',
  },
};

export const Info: Story = {
  ...ToastTemplate,
  args: {
    variant: 'info',
    message: 'New update available. Please refresh the page.',
  },
};

export const LongDuration: Story = {
  ...ToastTemplate,
  args: {
    variant: 'info',
    message: 'This toast will stay for 10 seconds.',
    duration: 10000,
  },
};

export const BottomLeft: Story = {
  ...ToastTemplate,
  args: {
    variant: 'success',
    message: 'Toast in bottom-left corner',
    position: 'bottom-left',
  },
};

export const MultipleToasts: Story = {
  render: (args) => {
    const [toasts, setToasts] = useState<React.ReactNode[]>([]);

    const addToast = (variant: 'success' | 'error' | 'warning' | 'info') => {
      const newToast = (
        <Toast
          key={Date.now()}
          variant={variant}
          {...args}
        />
      );
      setToasts((prev) => [...prev, newToast]);
    };

    return (
      <div>
        <div className="space-x-2">
          <Button onClick={() => addToast('success')}>Success</Button>
          <Button onClick={() => addToast('error')}>Error</Button>
          <Button onClick={() => addToast('warning')}>Warning</Button>
          <Button onClick={() => addToast('info')}>Info</Button>
        </div>
        <ToastContainer>{toasts}</ToastContainer>
      </div>
    );
  },
};