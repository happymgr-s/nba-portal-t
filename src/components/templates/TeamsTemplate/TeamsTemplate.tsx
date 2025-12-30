import React from 'react';
import { Team } from '@/types/team';

import ConferenceTitle from '@/components/atoms/ConferenceTitle/ConferenceTitle';
import TeamsCardsTemplate from '../TeamsCardsTemplate/TeamsCardsTemplate';

type TeamsTemplateProps = {
  teams: Team[];
};

/**
 * チーム一覧テンプレート
 * @param props
 */
const TeamsTemplate: React.FC<TeamsTemplateProps> = (props) => {
  const { teams } = props;

  const atlanticTeams = teams.filter((team) => team.Division === 'Atlantic');
  const centralTeams = teams.filter((team) => team.Division === 'Central');
  const southeastTeams = teams.filter((team) => team.Division === 'Southeast');
  const northwestTeams = teams.filter((team) => team.Division === 'Northwest');
  const pacificTeams = teams.filter((team) => team.Division === 'Pacific');
  const southwestTeams = teams.filter((team) => team.Division === 'Southwest');

  return (
    <div className="p-1 pb-4 md:p-4">
      <div className="flex flex-col gap-4 lg:gap-8">
        <div className="flex flex-col gap-2 lg:gap-4">
          <ConferenceTitle conference="Eastern" />

          <TeamsCardsTemplate division="ATLANTIC" teams={atlanticTeams} />
          <TeamsCardsTemplate division="CENTRAL" teams={centralTeams} />
          <TeamsCardsTemplate division="SOUTHEAST" teams={southeastTeams} />
        </div>

        <div className="flex flex-col gap-2 lg:gap-4">
          <ConferenceTitle conference="Western" />

          <TeamsCardsTemplate division="NORTHWEST" teams={northwestTeams} />
          <TeamsCardsTemplate division="PACIFIC" teams={pacificTeams} />
          <TeamsCardsTemplate division="SOUTHWEST" teams={southwestTeams} />
        </div>
      </div>
    </div>
  );
};

export default TeamsTemplate;
