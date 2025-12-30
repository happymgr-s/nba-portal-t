import React from "react";
import { axiosBase } from "@/lib/axiosBase";
import { GetNewsResponse } from "../api/nba/news/route";

import NewsesTemplate from "@/components/templates/NewsesTemplate/NewsesTemplate";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

/**
 * ニュース一覧ページ
 */
const NewsListPage = async () => {
  try {
    const newses = (await axiosBase.get<GetNewsResponse>("/api/nba/news")).data;

    return (
      <>
        <NewsesTemplate newses={newses} />
      </>
    );
  } catch (error) {
    return <>データの取得に失敗しました。</>;
  }
};

export default NewsListPage;
