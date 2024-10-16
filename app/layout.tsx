import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Header from '@/components/organisms/Header/Header';

import { Roboto_Condensed, Zen_Kaku_Gothic_Antique } from 'next/font/google';
import Footer from '@/components/organisms/Footer/Footer';
import SideBar from '@/components/organisms/SideBar/SideBar';
import { Analytics } from '@vercel/analytics/next';
import { axiosBase } from '@/lib/axiosBase';
import { GetCurrentSeasonResponse } from './api/nba/season/route';

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

const actionNBALight = localFont({
  src: '../public/fonts/ActionNBACondWeb-Light.woff2',
  variable: '--font-actionNBALight',
});
const actionNBAMedium = localFont({
  src: '../public/fonts/ActionNBACondWeb-Medium.woff2',
  variable: '--font-actionNBAMedium',
});
const actionNBABold = localFont({
  src: '../public/fonts/ActionNBACondWeb-Bold.woff2',
  variable: '--font-actionNBABold',
});

export const metadata: Metadata = {
  title: 'NBA PORTAL',
  description: 'NBA PORTAL for japanese',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentSeason = (await axiosBase.get<GetCurrentSeasonResponse>('/api/nba/season')).data;
  return (
    <html lang="ja">
      <body
        className={`bg-[#eaeaea] ${robotoCondensedFont.className} ${zenKakuGothicFont.className} ${actionNBALight.variable} ${actionNBAMedium.variable} ${actionNBABold.variable} font-roboto antialiased`}
      >
        {/* サイドバー */}
        <SideBar currentSeason={currentSeason.ApiSeason}>
          <div className="flex flex-col min-h-screen">
            {/* ヘッダー */}
            <Header />
            <div className="p-2 md:p-6">
              {children}
              <Analytics />
            </div>
            {/* フッター */}
            <Footer />
          </div>
        </SideBar>
      </body>
    </html>
  );
}
