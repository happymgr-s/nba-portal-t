import Image from 'next/image';
import React from 'react';

type HeaderProps = {};

/**
 * ヘッダーコンポーネント
 * PCサイズの時は非表示
 * @param props
 */
const Header: React.FC<HeaderProps> = (props) => {
  const {} = props;

  return (
    <>
      <header className="w-full h-auto flex justify-center items-center p-1 bg-blue-600 sticky top-0 md:hidden z-40">
        <div className="flex items-end gap-1">
          <Image className="rounded-xl" src="/nba.svg" alt="NBA_icon" width={50} height={50} />
          <p className="leading-none font-extrabold text-lg text-white">NBA PORTAL</p>
        </div>
      </header>
    </>
  );
};

export default Header;
