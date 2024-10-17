import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { Season } from '@/types/season';
import SideBar from '../SideBar';

type SSRSideBarProps = {
  children: React.ReactNode;
};

const SSRSideBar = async (props: SSRSideBarProps) => {
  const { children } = props;
  try {
    const currentSeason = (await axiosBase.get<Season>('/api/nba/season')).data;
    return <SideBar currentSeason={currentSeason.ApiSeason}>{children}</SideBar>;
  } catch (error) {
    const date = new Date().getFullYear();
    return <SideBar currentSeason={date.toString()}>{children}</SideBar>;
  }
};

export default SSRSideBar;
