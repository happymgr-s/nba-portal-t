import TeamsCard from '@/components/organisms/TeamsCard/TeamsCard';
import { Team } from '@/types/team';
import React from 'react';

type TeamsCardsTemplateProps = {
  division: 'ATLANTIC' | 'CENTRAL' | 'SOUTHEAST' | 'NORTHWEST' | 'PACIFIC' | 'SOUTHWEST';
  teams: Team[];
};

/**
 * チームカードを並べるテンプレート ※ページ全体のレイアウトではない
 * @param props
 */
const TeamsCardsTemplate: React.FC<TeamsCardsTemplateProps> = (props) => {
  const { division, teams } = props;

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-2">
        <h2 className="text-center lg:w-32">{division} DIVISION</h2>
        <div className="w-full flex overflow-x-auto py-2">
          <div className="flex flex-nowrap gap-2 2xl:w-full 2xl:justify-between">
            {teams.map((team) => (
              <TeamsCard key={team.Key} team={team} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamsCardsTemplate;
