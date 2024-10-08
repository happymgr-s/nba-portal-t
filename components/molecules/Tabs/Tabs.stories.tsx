import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const tabList = [
  {
    label: 'ACTIVE',
    value: 'active',
  },
  {
    label: 'FA',
    value: 'freeAgent',
  },
];

const meta = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    tabList,
    handleClickTabs: () => {},
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
