import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import '../../../public/footer_bg.png';

type FooterProps = {};

/**
 * コンポーネント
 * @param props
 */
const Footer: React.FC<FooterProps> = (props) => {
  const {} = props;

  return (
    <>
      <footer className="w-full mt-auto">
        <div className=" text-white flex flex-col p-4 gap-4 w-full bg-[url('/footer_bg.png')] bg-repeat">
          {/* ロゴ */}
          <div className="flex justify-center items-center">
            <div className="flex items-end gap-2">
              <Image
                className="rounded-lg md:w-16 md:h-16"
                src={'/nba.svg'}
                alt="nba_logo"
                width={40}
                height={40}
              />
              <div className="leading-none font-extrabold text-sm md:text-xl md:flex md:gap-1">
                <p className="leading-none text-">NBA</p>
                <p className="leading-none text-">PORTAL</p>
              </div>
            </div>
          </div>

          {/* リンク */}
          <div className="flex flex-col gap-4 justify-start items-start font-hiragino md:hidden">
            <Link href={'/'} className=" font-medium text-white text-left">
              ホーム
            </Link>
            <Link href={'/'} className=" font-medium text-white text-left">
              日程・結果
            </Link>
            <Link href={'/'} className=" font-medium text-white text-left">
              選手
            </Link>
            <Link href={'/'} className=" font-medium text-white text-left">
              チーム
            </Link>
            <Link href={'/'} className=" font-medium text-white text-left">
              順位・スタッツ
            </Link>
          </div>
        </div>
        {/* コピーライト */}
        <div className=" bg-white w-full h-8 flex justify-center items-center">
          <p className="leading-none font-sans">© 2024 Taguchi Inc.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
