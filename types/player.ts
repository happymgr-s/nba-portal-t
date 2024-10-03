export type Player = {
  PlayerID: number;
  SportsDataID: string;
  Status: string;
  TeamID: number;
  Team: string;
  Jersey: number | null;
  PositionCategory: string;
  Position: string;
  FirstName: string;
  LastName: string;
  BirthDate: string; // ISO 8601形式の日付（例: "1986-03-25T00:00:00"）
  BirthCity: string;
  BirthState: string | null;
  BirthCountry: string;
  GlobalTeamID: number;
  Height: number; // 単位はインチ
  Weight: number; // 単位はポンド
};
