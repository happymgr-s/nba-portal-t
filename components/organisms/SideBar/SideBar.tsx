import SideBarLink from '@/components/molecules/SideBarLink/SideBarLink';
import React, { useState } from 'react';

type SideBarProps = {};

/**
 * コンポーネント
 * @param props
 */
const SideBar: React.FC<SideBarProps> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen relative">
      {/* モバイル用トグルボタン */}
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden fixed top-4 left-4 z-50"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* サイドバー */}
      <aside
        className={`w-64 bg-gray-100 border-r absolute inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition duration-200 ease-in-out`}
      >
        <ScrollArea className="h-full">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">メニュー</h2>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                ホーム
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                プロフィール
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                設定
              </Button>
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </div>
  );
};

export default SideBar;
