import { axiosBase } from '@/lib/axiosBase';
import { GetTeamDataListResponse } from './api/nba/getTeamsProfile/route';
import Image from 'next/image';

export default async function Home() {
  const res = await axiosBase.get<GetTeamDataListResponse>('/api/nba/getTeamsProfile');
  return (
    <div className="">
      {res.data.map((data) => (
        <div key={data.GlobalTeamID} className="border p-3">
          <Image
            src={data.WikipediaLogoUrl || ''}
            alt={`${data.Name}_logo`}
            width={40}
            height={40}
          />
          <p>{data.WikipediaLogoUrl}</p>
          <p>{data.Name}</p>
          <p>{data.City}</p>
        </div>
      ))}
    </div>
  );
}
