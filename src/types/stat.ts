export type Stat = {
  StatID: number; // The unique ID of the stat
  TeamID: number | null; // The unique ID of the player's team
  PlayerID: number | null; // Unique ID assigned to each player that stays with them throughout their career
  SeasonType: number | null; // The type of season (1=Regular Season, 2=Preseason, 3=Postseason, 4=Offseason, 5=AllStar)
  Season: number | null; // The NBA regular season for which these totals apply
  Name: string | null; // Player's name
  Team: string | null; // The abbreviation of the Team
  Position: string | null; // Player's position in the starting lineup or substituted position
  Started: number | null; // Number of games started
  GlobalTeamID: number | null; // A globally unique ID for this team
  Updated: string | null; // The timestamp of when the record was last updated (US Eastern Time)
  Games: number | null; // The number of games played
  FantasyPoints: number | null; // Total fantasy points
  Minutes: number | null; // Total number of minutes played
  Seconds: number | null; // Total number of seconds played
  FieldGoalsMade: number | null; // Total number of field goals made
  FieldGoalsAttempted: number | null; // Total number of field goals attempted
  FieldGoalsPercentage: number | null; // Total field goal percentage
  EffectiveFieldGoalsPercentage: number | null; // Total effective field goals percentage
  TwoPointersMade: number | null; // Total two pointers made
  TwoPointersAttempted: number | null; // Total two pointers attempted
  TwoPointersPercentage: number | null; // Total two pointers percentage
  ThreePointersMade: number | null; // Total three pointers made
  ThreePointersAttempted: number | null; // Total three pointers attempted
  ThreePointersPercentage: number | null; // Total three pointers percentage
  FreeThrowsMade: number | null; // Total free throws made
  FreeThrowsAttempted: number | null; // Total free throws attempted
  FreeThrowsPercentage: number | null; // Total free throws percentage
  OffensiveRebounds: number | null; // Total offensive rebounds
  DefensiveRebounds: number | null; // Total defensive rebounds
  Rebounds: number | null; // Total rebounds
  OffensiveReboundsPercentage: number | null; // Total offensive rebounds percentage
  DefensiveReboundsPercentage: number | null; // Total defensive rebounds percentage
  TotalReboundsPercentage: number | null; // The player/team total rebounds percentage
  Assists: number | null; // Total assists
  Steals: number | null; // Total steals
  BlockedShots: number | null; // Total blocked shots
  Turnovers: number | null; // Total turnovers
  PersonalFouls: number | null; // Total personal fouls
  Points: number | null; // Total points scored
  TrueShootingAttempts: number | null; // The player's true shooting attempts
  TrueShootingPercentage: number | null; // The player's true shooting percentage
  PlayerEfficiencyRating: number | null; // The player's linear weight efficiency rating
  AssistsPercentage: number | null; // The player's assist percentage
  StealsPercentage: number | null; // The player's steal percentage
  BlocksPercentage: number | null; // The player's block percentage
  TurnOversPercentage: number | null; // The player's turnover percentage
  UsageRatePercentage: number | null; // The player's usage rate percentage
  FantasyPointsFanDuel: number | null; // Total FanDuel daily fantasy points scored
  FantasyPointsDraftKings: number | null; // Total DraftKings daily fantasy points scored
  FantasyPointsYahoo: number | null; // Total Yahoo daily fantasy points scored
  PlusMinus: number | null; // Total plus minus
  DoubleDoubles: number | null; // Total double-doubles scored
  TripleDoubles: number | null; // Total triple-doubles scored
  FantasyPointsFantasyDraft: number | null; // Total FantasyDraft daily fantasy points scored
  IsClosed: boolean; // Indicates whether the game is over and the stats for this player have been verified
  LineupConfirmed: boolean | null; // Indicates whether starting lineup is confirmed
  LineupStatus: string | null; // Indicates whether player is starting, active, or inactive
};
