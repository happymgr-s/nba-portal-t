import localFont from 'next/font/local';
import type { Meta, StoryObj } from '@storybook/react';
import TeamsCard from './TeamsCard';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

const actionNBALight = localFont({
  src: '../public/fonts/ActionNBACondWeb-Light.woff2',
  variable: '--font-actionNBALight',
});
const actionNBAMedium = localFont({
  src: '../public/fonts/ActionNBACondWeb-Medium.woff2',
  variable: '--font-actionNBAMedium',
});
const actionNBABold = localFont({
  src: '../public/fonts/ActionNBACondWeb-Bold.woff2',
  variable: '--font-actionNBABold',
});

const meta = {
  title: 'Organisms/TeamsCard',
  component: TeamsCard,
  parameters: {
    layout: '',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    team: teamsMockData[8],
  },
  decorators: [
    (Story) => (
      <div className={`${actionNBALight.variable} ${actionNBAMedium.variable} ${actionNBABold}`}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TeamsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
