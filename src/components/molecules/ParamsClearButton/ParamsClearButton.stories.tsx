import type { Meta, StoryObj } from '@storybook/react';
import ParamsClearButton from './ParamsClearButton';

const meta = {
  title: 'Molecules/ParamsClearButton',
  component: ParamsClearButton,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    handleClickReset: () => {},
  },
} satisfies Meta<typeof ParamsClearButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
