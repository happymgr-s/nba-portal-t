import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { Season } from '@/types/season';
import SideBar from '../SideBar';
import { seasonMockData } from '@/lib/mockData/seaseonMockData';

type SSRSideBarProps = {
  children: React.ReactNode;
};

const SSRSideBar = async (props: SSRSideBarProps) => {
  const { children } = props;
  try {
    const currentSeason = (await axiosBase.get<Season>('/api/nba/season')).data;
    return <SideBar currentSeason={currentSeason}>{children}</SideBar>;
  } catch (error) {
    return <SideBar currentSeason={seasonMockData}>{children}</SideBar>;
  }
};

export default SSRSideBar;
