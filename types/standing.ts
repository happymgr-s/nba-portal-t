export type Standing = {
  Season: number; // NBAレギュラーシーズン
  SeasonType: 1 | 2 | 3 | 4 | 5; // シーズンタイプ (1=Regular Season, 2=Preseason, 3=Postseason, 4=Offseason, 5=AllStar)
  TeamID: number; // チームのユニークID
  Key: string; // チームのアクティブ状態
  City: string; // チームの都市名
  Name: string; // チームのフルネーム
  Conference: 'Eastern' | 'Western'; // 会議 (Eastern または Western)
  Division: string; // ディビジョン (例: Atlantic, Central, Southeastなど)
  Wins: number; // レギュラーシーズン勝利数
  Losses: number; // レギュラーシーズン敗北数
  Percentage: number; // 勝率
  ConferenceWins: number; // レギュラーシーズン会議内勝利数
  ConferenceLosses: number; // レギュラーシーズン会議内敗北数
  DivisionWins: number; // レギュラーシーズンディビジョン内勝利数
  DivisionLosses: number; // レギュラーシーズンディビジョン内敗北数
  HomeWins: number; // ホームゲームでの勝利数
  HomeLosses: number; // ホームゲームでの敗北数
  AwayWins: number; // アウェーゲームでの勝利数
  AwayLosses: number; // アウェーゲームでの敗北数
  LastTenWins: number; // 直近10試合の勝利数
  LastTenLosses: number; // 直近10試合の敗北数
  PointsPerGameFor: number; // 平均得点
  PointsPerGameAgainst: number; // 平均失点
  Streak: number; // 連勝または連敗の数
  GamesBack: number; // リーダーとのゲーム差
  StreakDescription: string; // 連勝または連敗の概要 (例: W5, L1)
  GlobalTeamID: number; // グローバルなチームのユニークID
  ConferenceRank: number; // 会議内でのランク
  DivisionRank: number; // ディビジョン内でのランク
};
