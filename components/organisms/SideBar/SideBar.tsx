'use client';
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BarChart4, Calendar, Home, Menu, Newspaper, Trophy, User, Users, X } from 'lucide-react';

import SideBarLink from '@/components/molecules/SideBarLink/SideBarLink';
import Image from 'next/image';
import Link from 'next/link';

type SideBarProps = {
  children?: React.ReactNode;
};

/**
 * サイドバーコンポーネント
 * @param props
 */
const SideBar: React.FC<SideBarProps> = (props) => {
  const { children } = props;
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClickLink = () => {
    if (!isMobile) return;
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen relative">
      {/* トグルボタン */}
      <Button
        variant="outline"
        size="icon"
        className=" fixed top-3 left-3 z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* PC表示時のロゴ */}
      {sidebarOpen && !isMobile && (
        <Link href="/">
          <Image
            className="fixed top-2 left-16 z-50"
            src={'/NBA_PORTAL_LOGO.png'}
            alt="NBA_PORTAL_LOGO"
            width={85}
            height={85}
          />
        </Link>
      )}

      {/* サイドバー */}
      <aside
        className={`pt-10 bg-gray-100 border-r absolute inset-y-0 left-0 transform transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-40 translate-x-0' : isMobile ? '-translate-x-full' : 'w-16 translate-x-0'
        } md:relative`}
      >
        <ScrollArea className="h-full">
          <div className="py-4">
            <nav>
              <SideBarLink
                href={`/`}
                icon={<Home className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                ホーム
              </SideBarLink>

              <SideBarLink
                href={`/`}
                icon={<Calendar className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                日程
              </SideBarLink>

              <SideBarLink
                href={`/players/active`}
                icon={<User className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                選手
              </SideBarLink>

              <SideBarLink
                href={`/teams`}
                icon={<Users className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                チーム
              </SideBarLink>

              <SideBarLink
                href={`/`}
                icon={<Trophy className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                順位
              </SideBarLink>

              <SideBarLink
                href={`/`}
                icon={<BarChart4 className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                スタッツ
              </SideBarLink>

              <SideBarLink
                href={`/news`}
                icon={<Newspaper className="w-5 h-5" />}
                sidebarOpen={sidebarOpen}
                handleClickLink={handleClickLink}
              >
                ニュース
              </SideBarLink>
            </nav>
          </div>
        </ScrollArea>
      </aside>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default SideBar;
