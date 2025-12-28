// Server-side API clients (sportsdata.io直接アクセス)
export { scoresApi, statsApi } from "./server-api-client";

// Type exports for convenience
export type { paths as ScoresPaths } from "@/types/generated/sportsdata-scores";
export type { paths as StatsPaths } from "@/types/generated/sportsdata-stats";
