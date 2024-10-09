import type { Meta, StoryObj } from '@storybook/react';
import SelectBox from './SelectBox';

const mockSelectOptions = [
  {
    label: 'select1',
    value: 'select1',
  },
  {
    label: 'select2',
    value: 'select2',
  },
  {
    label: 'select3',
    value: 'select3',
  },
];

const meta = {
  title: 'Atoms/SelectBox',
  component: SelectBox,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    selectOptions: mockSelectOptions,
  },
} satisfies Meta<typeof SelectBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
