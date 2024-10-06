import React from "react";
import { NewsItem } from "@/types/news";

type NewsesCardProps = {
  news: NewsItem;
};

/**
 * コンポーネント
 * @param props
 */
const NewsesCard: React.FC<NewsesCardProps> = (props) => {
  const { news } = props;

  return (
    <>
      <div className='border rounded-lg p-2'>
        <h2 className='font-bold border-b-2'>{news.Title}</h2>
        <p>{news.Content}</p>
        <a href={news.Url} target='_blank' className='text-blue-500 hover:opacity-75'>
          {news.Url}
        </a>
      </div>
    </>
  );
};

export default NewsesCard;
