import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';
import { Button } from './Button';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Layout/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerTemplate: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Drawer</Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Drawer Content</h2>
          <p>This is the content of the drawer.</p>
        </Drawer>
      </>
    );
  },
};

export const Default: Story = {
  ...DrawerTemplate,
  args: {
    position: 'left',
    size: 'md',
  },
};

export const RightPosition: Story = {
  ...DrawerTemplate,
  args: {
    position: 'right',
    size: 'md',
  },
};

export const SmallSize: Story = {
  ...DrawerTemplate,
  args: {
    position: 'left',
    size: 'sm',
  },
};

export const LargeSize: Story = {
  ...DrawerTemplate,
  args: {
    position: 'left',
    size: 'lg',
  },
};

export const FullWidth: Story = {
  ...DrawerTemplate,
  args: {
    position: 'left',
    size: 'full',
  },
};

export const WithNavigation: Story = {
  ...DrawerTemplate,
  args: {
    position: 'left',
    size: 'md',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Navigation</Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <nav>
            <ul className="space-y-4">
              <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Services</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
            </ul>
          </nav>
        </Drawer>
      </>
    );
  },
};

export const WithForm: Story = {
  ...DrawerTemplate,
  args: {
    position: 'right',
    size: 'md',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Form</Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
            </div>
            <Button type="submit">Send</Button>
          </form>
        </Drawer>
      </>
    );
  },
};