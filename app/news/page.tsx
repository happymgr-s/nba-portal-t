import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetNewsResponse } from '../api/nba/news/route';

/**
 * ニュース一覧ページ
 */
const NewsListPage = async () => {
  const newses = (await axiosBase.get<GetNewsResponse>('/api/nba/news')).data;

  return (
    <>
      <div className="flex flex-col gap-4">
        {newses.map((news) => (
          <>
            <div className="border rounded-lg p-2">
              <h2 className="font-bold border-b-2">{news.Title}</h2>
              <p>{news.Content}</p>
              <a href={news.Url} target="_blank" className="text-blue-500 hover:opacity-75">
                {news.Url}
              </a>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default NewsListPage;
