import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Form, FormGroup, FormLabel, FormHelperText } from './Form';
import { Input } from './Input';
import { Button } from './Button';

const meta: Meta<typeof Form> = {
  title: 'Components/Inputs/Form',
  component: Form,
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: (args) => (
    <Form {...args} onSubmit={(e) => console.log('Form submitted', e)}>
      <FormGroup>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" placeholder="Enter your email" />
        <FormHelperText>We'll never share your email with anyone else.</FormHelperText>
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  ),
};

export const Horizontal: Story = {
  ...Default,
  args: {
    layout: 'horizontal',
  },
};

export const WithValidation: Story = {
  render: (args) => (
    <Form {...args} onSubmit={(e) => console.log('Form submitted', e)}>
      <FormGroup>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input id="username" placeholder="Enter your username" required />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type="password" placeholder="Enter your password" required minLength={8} />
        <FormHelperText>Password must be at least 8 characters long.</FormHelperText>
      </FormGroup>
      <Button type="submit">Sign In</Button>
    </Form>
  ),
};

export const ComplexForm: Story = {
  render: (args) => (
    <Form {...args} onSubmit={(e) => console.log('Form submitted', e)}>
      <FormGroup>
        <FormLabel htmlFor="fullName">Full Name</FormLabel>
        <Input id="fullName" placeholder="Enter your full name" required />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="phone">Phone</FormLabel>
        <Input id="phone" type="tel" placeholder="Enter your phone number" />
      </FormGroup>
      <FormGroup>
        <FormLabel htmlFor="message">Message</FormLabel>
        <textarea
          id="message"
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
          rows={4}
          placeholder="Enter your message"
          required
        ></textarea>
      </FormGroup>
      <Button type="submit">Send Message</Button>
    </Form>
  ),
};