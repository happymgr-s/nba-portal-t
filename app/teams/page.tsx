import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { axiosBase } from '@/lib/axiosBase';
import { GetActiveTeamProfileListResponse } from '../api/nba/teams/active/route';

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
          <Link key={data.TeamID} href={`/teams/${data.Key}`}>
            <div className="flex flex-col gap-2 rounded-lg border p-3 cursor-pointer hover:scale-125 duration-75">
              <div className="flex w-9 h-9 justify-center items-center">
                <Image
                  src={data.WikipediaLogoUrl || ''}
                  alt={`${data.Name}_logo`}
                  width={40}
                  height={40}
                />
              </div>
              <p>
                {data.City} {data.Name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default TeamsPage;
