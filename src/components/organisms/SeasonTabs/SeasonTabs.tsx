'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Tabs from '@/components/molecules/Tabs/Tabs';

type SeasonTabsProps = {};

/**
 * コンポーネント
 * @param props
 */
const SeasonTabs: React.FC<SeasonTabsProps> = (props) => {
  const {} = props;

  const searchParams = useSearchParams();

  const slicedSearchParams = searchParams
    .toString()
    .replace(`&season=${searchParams.get('season')}`, '')
    .replace(`season=${searchParams.get('season')}`, '');

  const tabList = [
    {
      label: 'レギュラー',
      value: '2025',
      href: `/schedule?${slicedSearchParams !== '' ? slicedSearchParams + '&' : ''}season=2025`,
    },
    {
      label: 'プレ',
      value: '2025PRE',
      href: `/schedule?${slicedSearchParams !== '' ? slicedSearchParams + '&' : ''}season=2025PRE`,
    },
    {
      label: 'ポスト',
      value: '2025POST',
      href: `/schedule?${slicedSearchParams !== '' ? slicedSearchParams + '&' : ''}season=2025POST`,
    },
    {
      label: 'オールスター',
      value: '2025STAR',
      href: `/schedule?${slicedSearchParams !== '' ? slicedSearchParams + '&' : ''}season=2025STAR`,
    },
  ];

  return (
    <>
      <div className="text-center">
        <Tabs tabList={tabList} defaultSelected={searchParams.get('season') || '2025REG'} />
      </div>
    </>
  );
};

export default SeasonTabs;
