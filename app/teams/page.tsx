import React from 'react';

import { axiosBase } from '@/lib/axiosBase';
import { GetActiveTeamProfileListResponse } from '../api/nba/teams/active/route';
import TeamsCard from '@/components/organisms/TeamsCard/TeamsCard';

/**
 * チーム一覧ページ
 */
const TeamsPage = async () => {
  const res = await axiosBase.get<GetActiveTeamProfileListResponse>('/api/nba/teams/active');

  if (res.data.length === 0) {
    return <>データがありません。</>;
  }

  return (
    <>
      <div className="grid grid-cols-5 gap-2">
        {res.data.map((data) => (
          <>
            <TeamsCard
              href={`/teams/${data.Key}`}
              logoUrl={data.WikipediaLogoUrl || ''}
              logoAlt={`${data.Name}_logo`}
              teamName={`${data.City} ${data.Name}`}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default TeamsPage;
