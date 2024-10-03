import { axiosBase } from '@/lib/axiosBase';
import { GetTeamDataListResponse } from './api/nba/getTeamsProfile/route';
import Image from 'next/image';

export default async function Home() {
  const res = await axiosBase.get<GetTeamDataListResponse>('/api/nba/getTeamsProfile');

  if (res.data.length === 0) {
    return <>データがありません。</>;
  }

  return (
    <div className="p-8 grid grid-cols-5 gap-2">
      {res.data.map((data) => (
        <div key={data.GlobalTeamID} className=" flex flex-col gap-2 rounded-lg border p-3 ">
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
      ))}
    </div>
  );
}
