import React from "react";
import { axiosBase } from "@/lib/axiosBase";
import { GetNewsResponse } from "../api/nba/news/route";

import NewsesTemplate from "@/components/templates/NewsesTemplate/NewsesTemplate";

/**
 * ニュース一覧ページ
 */
const NewsListPage = async () => {
  const newses = (await axiosBase.get<GetNewsResponse>("/api/nba/news")).data;

  return (
    <>
      <NewsesTemplate newses={newses} />
    </>
  );
};

export default NewsListPage;
