export type Schedule = {
  GameID: number; // The unique ID of this game
  Season: number; // The NBA season of the game
  SeasonType: number; // The type of season (1=Regular, 2=Preseason, 3=Playoffs)
  Status:
    | 'Scheduled'
    | 'InProgress'
    | 'Final'
    | 'F/OT'
    | 'Suspended'
    | 'Postponed'
    | 'Delayed'
    | 'Canceled'
    | 'Forfeit'
    | 'NotNecessary'
    | null; // Game status (Scheduled, InProgress, Final, etc.)
  Day?: string | null; // The date of the game
  DateTime?: string | null; // The date and time of the game
  AwayTeam: string; // Abbreviation of the Away Team
  HomeTeam: string; // Abbreviation of the Home Team
  AwayTeamID: number; // Unique ID of the away team
  HomeTeamID: number; // Unique ID of the home team
  StadiumID?: number; // Unique ID of the stadium
  AwayTeamScore?: number | null; // Points scored by the away team
  HomeTeamScore?: number | null; // Points scored by the home team
  Updated?: string; // Timestamp of last update (US Eastern Time)
  GlobalGameID: number; // Globally unique ID for the game
  GlobalAwayTeamID: number; // Globally unique ID for the away team
  GlobalHomeTeamID: number; // Globally unique ID for the home team
  IsClosed: boolean; // Whether the game is over and finalized
  NeutralVenue?: boolean | null; // Whether the game is played at a neutral venue
  DateTimeUTC?: string | null; // Game date and time in UTC
};

export type Game = {
  GameID: number;
  Season: number;
  SeasonType: 1 | 2 | 3; // 1=Regular Season, 2=Preseason, 3=Playoffs
  Status:
    | 'Scheduled'
    | 'InProgress'
    | 'Final'
    | 'F/OT'
    | 'Suspended'
    | 'Postponed'
    | 'Delayed'
    | 'Canceled'
    | 'Forfeit'
    | 'NotNecessary'
    | null;
  Day: string | null; // ISO date string (YYYY-MM-DD)
  DateTime: string | null; // ISO datetime string (YYYY-MM-DDTHH:mm:ss)
  AwayTeam: string;
  HomeTeam: string;
  AwayTeamID: number;
  HomeTeamID: number;
  StadiumID: number | null;
  Channel: string | null;
  Attendance: number | null;
  AwayTeamScore: number | null;
  HomeTeamScore: number | null;
  Updated: string | null; // ISO datetime string
  Quarter: '1' | '2' | '3' | '4' | 'Half' | 'OT' | null;
  TimeRemainingMinutes: number | null;
  TimeRemainingSeconds: number | null;
  PointSpread: number | null;
  OverUnder: number | null;
  AwayTeamMoneyLine: number | null;
  HomeTeamMoneyLine: number | null;
  GlobalGameID: number;
  GlobalAwayTeamID: number;
  GlobalHomeTeamID: number;
  PointSpreadAwayTeamMoneyLine: number | null;
  PointSpreadHomeTeamMoneyLine: number | null;
  LastPlay: string | null;
  IsClosed: boolean;
  Quarters: Quarter[];
  GameEndDateTime: string | null; // ISO datetime string
  HomeRotationNumber: number | null;
  AwayRotationNumber: number | null;
  NeutralVenue: boolean | null;
  OverPayout: number | null;
  UnderPayout: number | null;
  CrewChiefID: number | null;
  UmpireID: number | null;
  RefereeID: number | null;
  AlternateID: number | null;
  DateTimeUTC: string | null; // ISO datetime string
  SeriesInfo: Series | null;
  InseasonTournament: boolean;
};

export type Quarter = {
  QuarterID: number; // Unique identifier for each Quarter
  GameID: number; // The unique ID for this game
  Number: number; // The Number (Order) of the Quarter in the scope of the Game
  Name: string; // The Name of the Quarter (e.g., "1", "2", "3", "4", "OT", "OT2", "OT3")
  AwayScore: number | null; // Total points scored by the away team in this Quarter
  HomeScore: number | null; // Total points scored by the home team in this Quarter
};

export type Series = {
  HomeTeamWins: number; // Number of Wins by the Home Team
  AwayTeamWins: number; // Number of Wins by the Away Team
  GameNumber: number; // Game Number in the Series
  MaxLength: number; // Maximum Number of Games in the Series
};
