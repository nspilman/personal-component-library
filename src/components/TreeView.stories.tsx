import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TreeView, TreeNode } from './TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'Components/Data Display/TreeView',
  component: TreeView,
};

export default meta;

type Story = StoryObj<typeof TreeView>;

const sampleData: TreeNode[] = [
  {
    id: '1',
    label: 'Root',
    children: [
      {
        id: '2',
        label: 'Child 1',
        children: [
          { id: '5', label: 'Grandchild 1' },
          { id: '6', label: 'Grandchild 2' },
        ],
      },
      { id: '3', label: 'Child 2' },
      {
        id: '4',
        label: 'Child 3',
        children: [
          { id: '7', label: 'Grandchild 3' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    data: sampleData,
  },
};

export const FlatList: Story = {
  args: {
    data: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
  },
};

export const DeepNesting: Story = {
  args: {
    data: [
      {
        id: '1',
        label: 'Level 1',
        children: [
          {
            id: '2',
            label: 'Level 2',
            children: [
              {
                id: '3',
                label: 'Level 3',
                children: [
                  { id: '4', label: 'Level 4' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};