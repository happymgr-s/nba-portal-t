import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type SideBarLinkProps = LinkProps & {
  children: string;
};

/**
 * サイドバーのリンクコンポーネント
 * @param props
 */
const SideBarLink: React.FC<SideBarLinkProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <div className="flex justify-start items-center gap-1 hover:border-b">
        <Image src="/basketBallIcon.png" alt="バスケットボールアイコン" width={20} height={20} />
        <Link {...rest}>{children}</Link>
      </div>
    </>
  );
};

export default SideBarLink;
