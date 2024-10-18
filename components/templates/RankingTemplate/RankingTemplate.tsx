import React from 'react';
import { Standing } from '@/types/standing';
import { Team } from '@/types/team';

import ConferenceTitle from '@/components/atoms/ConferenceTitle/ConferenceTitle';
import StandingsTable from '@/components/organisms/StandingsTable/StandingsTable';

type RankingTemplateProps = {
  standings: Standing[];
  teams: Team[];
};

/**
 * 順位ページテンプレート
 * @param props
 */
const RankingTemplate: React.FC<RankingTemplateProps> = (props) => {
  const { standings, teams } = props;

  const easternStandings = standings.filter((standing) => standing.Conference === 'Eastern');
  const westernStandings = standings.filter((standing) => standing.Conference === 'Western');

  const sortedEasternStandings = [...easternStandings].sort(
    (a, b) => a.ConferenceRank - b.ConferenceRank
  );
  const sortedWesternStandings = [...westernStandings].sort(
    (a, b) => a.ConferenceRank - b.ConferenceRank
  );

  return (
    <>
      <div className="py-4">
        <div className="flex flex-col items-center gap-2 mb-6">
          <ConferenceTitle conference="Eastern" />
          <StandingsTable standings={sortedEasternStandings} teams={teams} />
        </div>

        <div className="flex flex-col items-center gap-2">
          <ConferenceTitle conference="Western" />
          <StandingsTable standings={sortedWesternStandings} teams={teams} />
        </div>
      </div>
    </>
  );
};

export default RankingTemplate;
