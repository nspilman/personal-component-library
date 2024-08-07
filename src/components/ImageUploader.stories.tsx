import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ImageUploader } from './ImageUploader';

const meta: Meta<typeof ImageUploader> = {
  title: 'Components/Inputs/ImageUploader',
  component: ImageUploader,
  argTypes: {
    maxSizeInMB: { control: 'number' },
    acceptedFileTypes: { control: 'array' },
  },
};

export default meta;

type Story = StoryObj<typeof ImageUploader>;

export const Default: Story = {
  args: {
    onImageUpload: (file: File) => console.log('Uploaded file:', file),
  },
};

export const CustomSize: Story = {
  args: {
    ...Default.args,
    maxSizeInMB: 2,
  },
};

export const CustomFileTypes: Story = {
  args: {
    ...Default.args,
    acceptedFileTypes: ['image/jpeg', 'image/png'],
  },
};