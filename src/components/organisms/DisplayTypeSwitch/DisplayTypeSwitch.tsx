'use client';
import React, { useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { teamNameOptions } from '@/lib/constants';

import { Switch } from '@/components/ui/switch';
import GroupingSelectBox from '@/components/atoms/GroupingSelectBox/GroupingSelectBox';
import ParamsClearButton from '@/components/molecules/ParamsClearButton/ParamsClearButton';

type DisplayTypeSwitchProps = {};

/**
 * 日表示と月表示を切り替えるスイッチ
 * @param props
 */
const DisplayTypeSwitch: React.FC<DisplayTypeSwitchProps> = (props) => {
  const {} = props;

  const [monthDisplay, setMonthDisplay] = useState(false);
  const [closedDisplay, setClosedDisplay] = useState(true);

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const searchTeam = searchParams.get('team') || 'ALL';

  const handleCheckedSwitch = (name: string, checked: boolean) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set(name, checked.toString());

    if (name === 'month_display') {
      const currentDate = new Date();
      newSearchParams.delete('date');
      newSearchParams.delete('month');
      if (newSearchParams.get('month_display') === 'true') {
        newSearchParams.set(
          'month',
          currentDate.getFullYear() + '-' + (currentDate.getMonth() + 1).toString().padStart(2, '0')
        );
      }
      setMonthDisplay((prev) => !prev);
    }
    if (name === 'closed_display') setClosedDisplay((prev) => !prev);

    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  const handleSelectTeam = (value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('team', value);

    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  const handleClickReset = () => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete('month_display');
    newSearchParams.delete('closed_display');
    newSearchParams.delete('team');
    newSearchParams.delete('month');

    setClosedDisplay(true);
    setMonthDisplay(false);

    router.replace(`${pathName}?${newSearchParams}`);
  };

  return (
    <>
      <div className="w-full p-4 lg:p-2 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-1 border-2 border-gray-400 rounded-md">
        {/* 各スイッチ */}
        <div className="flex justify-center items-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <label htmlFor="month_display">月表示</label>
            <Switch
              id="month_display"
              onCheckedChange={(check) => handleCheckedSwitch('month_display', check)}
              checked={monthDisplay}
            />
          </div>

          <div className="flex justify-center items-center gap-2">
            <label htmlFor="closed_display">終了した試合の表示</label>
            <Switch
              id="closed_display"
              onCheckedChange={(check) => handleCheckedSwitch('closed_display', check)}
              checked={closedDisplay}
            />
          </div>
        </div>

        {monthDisplay && (
          <GroupingSelectBox
            selectOptions={teamNameOptions}
            groups={['', 'Eastern', 'Western']}
            value={searchTeam}
            onValueChange={(value) => handleSelectTeam(value)}
          />
        )}

        <ParamsClearButton handleClickReset={handleClickReset} />
      </div>
    </>
  );
};

export default DisplayTypeSwitch;
