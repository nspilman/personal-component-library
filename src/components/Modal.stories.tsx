import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from './Button'; // Assuming we have a Button component

const meta: Meta<typeof Modal> = {
  title: 'Components/Feedback/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isOpen: {
      control: 'boolean',
    },
    onClose: { action: 'closed' },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <p>This is the content of the modal.</p>
        </Modal>
      </>
    );
  },
};

export const Default: Story = {
  ...ModalTemplate,
  args: {
    title: 'Example Modal',
    size: 'md',
  },
};

export const SmallModal: Story = {
  ...ModalTemplate,
  args: {
    ...Default.args,
    size: 'sm',
    title: 'Small Modal',
  },
};

export const LargeModal: Story = {
  ...ModalTemplate,
  args: {
    ...Default.args,
    size: 'lg',
    title: 'Large Modal',
  },
};

export const ModalWithLongContent: Story = {
  ...ModalTemplate,
  args: {
    ...Default.args,
    title: 'Modal with Long Content',
    children: (
      <>
        <p>This modal has a lot of content to demonstrate scrolling behavior.</p>
        {Array(20).fill(0).map((_, i) => (
          <p key={i}>This is paragraph {i + 1}.</p>
        ))}
      </>
    ),
  },
};

export const ModalWithoutTitle: Story = {
  ...ModalTemplate,
  args: {
    ...Default.args,
    title: undefined,
  },
};