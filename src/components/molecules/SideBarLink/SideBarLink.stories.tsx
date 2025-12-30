import type { Meta, StoryObj } from '@storybook/react';
import SideBarLink from './SideBarLink';
import { Home } from 'lucide-react';

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
    children: 'ホーム',
    icon: <Home className="w-4 h-4" />,
    sidebarOpen: true,
    handleClickLink: () => {},
  },
} satisfies Meta<typeof SideBarLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
