'use client';
import { positionNames, statusNames, teamNames } from '@/lib/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type SearchBarProps = {};

/**
 * コンポーネント
 * @param props
 */
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const {} = props;
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchFirstName = searchParams.get('firstname');
  const searchLastName = searchParams.get('lasttname');
  const searchTeam = searchParams.get('team');
  const searchPosition = searchParams.get('position');

  const handleChangeInput = (name: string, value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set(name, value);

    router.replace(`${pathName}?${newParams.toString()}`);
  };

  const handleSelectStatus = (value: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    router.replace(`/players/${value}?${newParams.toString()}`);
  };

  return (
    <>
      <div className="flex gap-3">
        <div>
          <label htmlFor="firstname">firstName : </label>
          <input
            defaultValue={searchFirstName || ''}
            className="border"
            type="text"
            name="firstname"
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">lastName : </label>
          <input
            defaultValue={searchLastName || ''}
            className="border"
            type="text"
            name="lastname"
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="team">team : </label>
          <select
            className="border cursor-pointer p-1"
            defaultValue={searchTeam || 'ALL'}
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
            name="team"
          >
            {teamNames.map((team) => (
              <option key={team} value={team !== 'ALL' ? team : ''}>
                {team}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="position">position : </label>
          <select
            className="border cursor-pointer p-1"
            defaultValue={searchPosition || 'ALL'}
            onChange={(e) => handleChangeInput(e.target.name, e.target.value)}
            name="position"
            id=""
          >
            {positionNames.map((positionName) => (
              <option key={positionName} value={positionName !== 'ALL' ? positionName : ''}>
                {positionName}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="border cursor-pointer p-1"
            onChange={(e) => handleSelectStatus(e.target.value)}
          >
            {statusNames.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
