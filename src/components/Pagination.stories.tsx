import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: { control: 'number' },
    totalPages: { control: 'number' },
    showFirstLast: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const PaginationTemplate: Story = {
  render: (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          console.log(`Page changed to ${page}`);
        }}
      />
    );
  },
};

export const Default: Story = {
  ...PaginationTemplate,
  args: {
    currentPage: 1,
    totalPages: 10,
  },
};

export const WithoutFirstLast: Story = {
  ...PaginationTemplate,
  args: {
    currentPage: 1,
    totalPages: 10,
    showFirstLast: false,
  },
};

export const ManyPages: Story = {
  ...PaginationTemplate,
  args: {
    currentPage: 50,
    totalPages: 100,
  },
};

export const FewPages: Story = {
  ...PaginationTemplate,
  args: {
    currentPage: 1,
    totalPages: 3,
  },
};

export const LastPage: Story = {
  ...PaginationTemplate,
  args: {
    currentPage: 10,
    totalPages: 10,
  },
};