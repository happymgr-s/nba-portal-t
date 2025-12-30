import { Button } from '@/components/ui/button';
import Link, { LinkProps } from 'next/link';
import React from 'react';

type SideBarLinkProps = LinkProps & {
  icon: React.ReactNode;
  sidebarOpen: boolean;
  handleClickLink: () => void;
  children: React.ReactNode;
};

/**
 * サイドバーのリンクコンポーネント
 * @param props
 */
const SideBarLink: React.FC<SideBarLinkProps> = (props) => {
  const { icon, sidebarOpen, handleClickLink, children, ...rest } = props;

  return (
    <>
      <Button
        variant="ghost"
        className="w-full h-auto rounded-none hover:bg-gray-500 py-3"
        onClick={handleClickLink}
      >
        <Link
          {...rest}
          className={`flex justify-start items-center gap-2  ${sidebarOpen && 'w-full'}`}
        >
          {icon}
          <span>{sidebarOpen && children}</span>
        </Link>
      </Button>
    </>
  );
};

export default SideBarLink;
