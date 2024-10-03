import type { Meta, StoryObj } from '@storybook/react';
import SideBarLink from './SideBarLink';

const meta = {
  title: 'Molecules/SideBarLink',
  component: SideBarLink,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    href: '/',
    children: 'HOME',
  },
} satisfies Meta<typeof SideBarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
