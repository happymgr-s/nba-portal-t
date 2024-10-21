export type NewsItem = {
  NewsID: number;
  Source: string;
  Updated: string; // ISO 8601形式の日付
  TimeAgo: string; // 人が読める形式の経過時間
  Title: string;
  Content: string;
  Url: string;
  TermsOfUse: string;
  Author: string;
  Categories: string;
  PlayerID: number | null;
  TeamID: number | null;
  Team: string | null;
  PlayerID2: number | null;
  TeamID2: number | null;
  Team2: string | null;
  OriginalSource: string;
  OriginalSourceUrl: string;
};

export type Article = {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
};

interface Source {
  id: string | null;
  name: string;
}
