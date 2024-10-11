import type { Meta, StoryObj } from '@storybook/react';
import ConferenceTitle from './ConferenceTitle';

const meta = {
  title: 'Atoms/ConferenceTitle',
  component: ConferenceTitle,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    conference: 'Eastern',
  },
} satisfies Meta<typeof ConferenceTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
