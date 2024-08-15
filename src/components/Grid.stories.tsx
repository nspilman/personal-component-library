import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 6, 12],
    },
    gap: {
      control: 'select',
      options: [1, 2, 4, 6, 8],
    },
    responsive: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Grid>;

const GridItemWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white p-4 text-center">{children}</div>
);

export const Default: Story = {
  args: {
    cols: 3,
    gap: 4,
    children: (
      <>
        <GridItemWrapper>1</GridItemWrapper>
        <GridItemWrapper>2</GridItemWrapper>
        <GridItemWrapper>3</GridItemWrapper>
        <GridItemWrapper>4</GridItemWrapper>
        <GridItemWrapper>5</GridItemWrapper>
        <GridItemWrapper>6</GridItemWrapper>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    ...Default.args,
    responsive: true,
  },
};

export const DifferentColumnSpans: Story = {
  args: {
    cols: 12,
    gap: 4,
    children: (
      <>
        <GridItem span={6}><GridItemWrapper>Span 6</GridItemWrapper></GridItem>
        <GridItem span={6}><GridItemWrapper>Span 6</GridItemWrapper></GridItem>
        <GridItem span={4}><GridItemWrapper>Span 4</GridItemWrapper></GridItem>
        <GridItem span={4}><GridItemWrapper>Span 4</GridItemWrapper></GridItem>
        <GridItem span={4}><GridItemWrapper>Span 4</GridItemWrapper></GridItem>
        <GridItem span={3}><GridItemWrapper>Span 3</GridItemWrapper></GridItem>
        <GridItem span={3}><GridItemWrapper>Span 3</GridItemWrapper></GridItem>
        <GridItem span={3}><GridItemWrapper>Span 3</GridItemWrapper></GridItem>
        <GridItem span={3}><GridItemWrapper>Span 3</GridItemWrapper></GridItem>
        <GridItem span={12}><GridItemWrapper>Span 12 (Full Width)</GridItemWrapper></GridItem>
      </>
    ),
  },
};

export const NestedGrids: Story = {
  args: {
    cols: 2,
    gap: 4,
    children: (
      <>
        <GridItem>
          <GridItemWrapper>
            <Grid cols={2} gap={2}>
              <GridItemWrapper>Nested 1</GridItemWrapper>
              <GridItemWrapper>Nested 2</GridItemWrapper>
            </Grid>
          </GridItemWrapper>
        </GridItem>
        <GridItem>
          <GridItemWrapper>
            <Grid cols={2} gap={2}>
              <GridItemWrapper>Nested 3</GridItemWrapper>
              <GridItemWrapper>Nested 4</GridItemWrapper>
            </Grid>
          </GridItemWrapper>
        </GridItem>
      </>
    ),
  },
};