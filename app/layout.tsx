import './globals.css';
import type { Metadata } from 'next';

import Header from '@/components/organisms/Header/Header';

import { Roboto_Condensed, Zen_Kaku_Gothic_Antique } from 'next/font/google';
import Footer from '@/components/organisms/Footer/Footer';
import SideBar from '@/components/organisms/SideBar/SideBar';

const robotoCondensedFont = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-RobotoCondensed',
});

const zenKakuGothicFont = Zen_Kaku_Gothic_Antique({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ZenKakuGothic',
});

export const metadata: Metadata = {
  title: 'NBA PORTAL',
  description: 'NBA PORTAL for japanese',
  icons: '/basketballIcon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={` bg-[#eaeaea] ${robotoCondensedFont.className} ${zenKakuGothicFont.className} font-roboto antialiased`}
      >
        {/* サイドバー */}
        <SideBar>
          <div className="flex flex-col min-h-screen">
            {/* ヘッダー */}
            <Header />
            <div className="p-2 md:p-6">{children}</div>
            {/* フッター */}
            <Footer />
          </div>
        </SideBar>
      </body>
    </html>
  );
}
