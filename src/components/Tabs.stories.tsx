import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  argTypes: {
    defaultActiveTab: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: <p>Content for Tab 1</p> },
      { label: 'Tab 2', content: <p>Content for Tab 2</p> },
      { label: 'Tab 3', content: <p>Content for Tab 3</p> },
    ],
  },
};

export const WithDefaultActiveTab: Story = {
  args: {
    ...Default.args,
    defaultActiveTab: 1,
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { label: 'Tab 1', content: <p>Content for Tab 1</p> },
      { label: 'Tab 2', content: <p>Content for Tab 2</p> },
      { label: 'Tab 3', content: <p>Content for Tab 3</p> },
      { label: 'Tab 4', content: <p>Content for Tab 4</p> },
      { label: 'Tab 5', content: <p>Content for Tab 5</p> },
      { label: 'Tab 6', content: <p>Content for Tab 6</p> },
    ],
  },
};

export const WithComplexContent: Story = {
  args: {
    tabs: [
      {
        label: 'Profile',
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">User Profile</h3>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
            <p>Role: Administrator</p>
          </div>
        ),
      },
      {
        label: 'Settings',
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">User Settings</h3>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Receive notifications
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Dark mode
            </label>
          </div>
        ),
      },
      {
        label: 'Activity',
        content: (
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <ul className="list-disc pl-5">
              <li>Logged in at 09:30 AM</li>
              <li>Updated profile picture</li>
              <li>Posted a new comment</li>
            </ul>
          </div>
        ),
      },
    ],
  },
};