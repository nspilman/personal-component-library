import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableHeader } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Data Display/Table',
  component: Table,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
];

export const Default: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  ...Default,
  args: {
    striped: true,
  },
};

export const Hoverable: Story = {
  ...Default,
  args: {
    hoverable: true,
  },
};

export const Small: Story = {
  ...Default,
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  ...Default,
  args: {
    size: 'lg',
  },
};

export const WithActions: Story = {
  render: (args) => (
    <Table {...args}>
      <TableHead>
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Email</TableHeader>
          <TableHeader>Role</TableHeader>
          <TableHeader>Actions</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {sampleData.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.role}</TableCell>
            <TableCell>
              <button className="text-blue-600 hover:text-blue-800 mr-2">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};