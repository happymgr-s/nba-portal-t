import React from "react";
import { NewsItem } from "@/types/news";

import NewsesCard from "@/components/organisms/NewsesCard/NewsesCard";

type NewsesTemplateProps = {
  newses: NewsItem[];
};

/**
 * コンポーネント
 * @param props
 */
const NewsesTemplate: React.FC<NewsesTemplateProps> = (props) => {
  const { newses } = props;

  return (
    <>
      <div className='flex flex-col gap-4'>
        {newses.map((news) => (
          <NewsesCard key={news.NewsID} news={news} />
        ))}
      </div>
    </>
  );
};

export default NewsesTemplate;
