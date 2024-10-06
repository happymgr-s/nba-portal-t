import React from "react";
import { Team } from "@/types/team";

import TeamsCard from "@/components/organisms/TeamsCard/TeamsCard";

type TeamsTemplateProps = {
  teams: Team[];
};

/**
 * コンポーネント
 * @param props
 */
const TeamsTemplate: React.FC<TeamsTemplateProps> = (props) => {
  const { teams } = props;

  return (
    <>
      <div className='grid grid-cols-5 gap-2'>
        {teams.map((team) => (
          <TeamsCard key={team.Key} href={`/teams/${team.Key}`} team={team} />
        ))}
      </div>
    </>
  );
};

export default TeamsTemplate;
