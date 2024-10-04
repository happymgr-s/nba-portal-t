import Image from 'next/image';
import React from 'react';

type HeaderProps = {};

/**
 * コンポーネント
 * @param props
 */
const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <>
      <header className="w-full h-auto flex justify-center items-center p-1 bg-blue-600">
        <div className="flex items-end gap-1">
          <Image className="rounded-xl" src="/nba.svg" alt="NBA_icon" width={50} height={50} />
          <p className="leading-none font-extrabold text-xl text-white">NBA PORTAL</p>
        </div>
      </header>
    </>
  );
};

export default Header;
