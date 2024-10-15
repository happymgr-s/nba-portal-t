import Image from 'next/image';
import React from 'react';

type CenterLogoProps = {
  src: string;
};

/**
 * ロゴが中央になるように配置
 * @param props
 */
const CenterLogo: React.FC<CenterLogoProps> = (props) => {
  const { src } = props;

  return (
    <>
      <div className="flex justify-center items-center w-28 h-28">
        <Image src={src} alt="home_team_logo" width={70} height={70} />
      </div>
    </>
  );
};

export default CenterLogo;
