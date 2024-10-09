import type { Meta, StoryObj } from '@storybook/react';
import GroupingSelectBox from './GroupingSelectBox';
import { teamNameOptions } from '@/lib/constants';

const meta = {
  title: 'Atoms/GroupingSelectBox',
  component: GroupingSelectBox,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    selectOptions: teamNameOptions,
    groups: ['', 'Eastern', 'Western'],
    defaultValue: teamNameOptions[0].value,
  },
} satisfies Meta<typeof GroupingSelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
