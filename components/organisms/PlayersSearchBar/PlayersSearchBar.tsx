'use client';
import React from 'react';

import { positionNameOptions, teamNameOptions } from '@/lib/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import Tabs from '@/components/molecules/Tabs/Tabs';
import GroupingSelectBox from '@/components/atoms/GroupingSelectBox/GroupingSelectBox';
import SelectBox from '@/components/atoms/SelectBox/SelectBox';
import { ReloadIcon } from '@radix-ui/react-icons';
import ParamsClearButton from '@/components/molecules/ParamsClearButton/ParamsClearButton';

type PlayersSearchBarProps = {};

type SearchParams = 'team' | 'position';

/**
 * 選手一覧検索バーコンポーネント
 * @param props
 */
const PlayersSearchBar: React.FC<PlayersSearchBarProps> = (props) => {
  const {} = props;

  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTeam = searchParams.get('team');
  const searchPosition = searchParams.get('position');

  const handleChangeInput = (name: SearchParams, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(name, value);

    router.replace(`${pathName}?${newParams.toString()}`);
  };

  const handleClickReset = () => {
    router.replace(`${pathName}?team=ALL&position=ALL`);
  };

  const tabList = [
    {
      label: 'ACTIVE',
      value: 'active',
      href: `/players/active?team=${searchTeam || 'ALL'}&position=${searchPosition || 'ALL'}`,
    },
    {
      label: 'FA',
      value: 'freeAgent',
      href: `/players/freeAgent?position=${searchPosition || 'ALL'}`,
    },
  ];

  const selectedTab = tabList.find((tab) => pathName.includes(tab.value))?.value;

  return (
    <>
      <div className="flex flex-col gap-2">
        <Tabs tabList={tabList} defaultSelected={selectedTab || ''} />

        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center p-1 md:p-2 border-2 border-gray-400 rounded-md">
          <div className="flex flex-col md:flex-row md:justify-start md:items-center gap-2 md:gap-4">
            {pathName.includes('active') && (
              <GroupingSelectBox
                selectOptions={teamNameOptions}
                groups={['', 'Eastern', 'Western']}
                value={searchTeam || 'ALL'}
                onValueChange={(value) => handleChangeInput('team', value)}
              />
            )}

            <SelectBox
              selectOptions={positionNameOptions}
              value={searchPosition || 'ALL'}
              onValueChange={(value) => handleChangeInput('position', value)}
            />
          </div>

          <ParamsClearButton handleClickReset={handleClickReset} />
        </div>
      </div>
    </>
  );
};

export default PlayersSearchBar;
