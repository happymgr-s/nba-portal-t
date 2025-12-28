import createClient from "openapi-fetch";
import type { paths as ScoresPaths } from "@/types/generated/sportsdata-scores";
import type { paths as StatsPaths } from "@/types/generated/sportsdata-stats";

/**
 * sportsdata.io Scores API クライアント（サーバーサイド専用）
 * @example
 * const { data } = await scoresApi.GET('/{format}/teams', {
 *   params: { path: { format: 'json' } }
 * });
 */
export const scoresApi = createClient<ScoresPaths>({
  baseUrl: "https://api.sportsdata.io/v3/nba/scores",
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.NBA_API_KEY!,
  },
});

/**
 * sportsdata.io Stats API クライアント（サーバーサイド専用）
 * @example
 * const { data } = await statsApi.GET('/{format}/PlayerSeasonStats/{season}', {
 *   params: { path: { format: 'json', season: '2025' } }
 * });
 */
export const statsApi = createClient<StatsPaths>({
  baseUrl: "https://api.sportsdata.io/v3/nba/stats",
  headers: {
    "Ocp-Apim-Subscription-Key": process.env.NBA_API_KEY!,
  },
});
