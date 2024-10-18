import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Condensed, Zen_Kaku_Gothic_Antique } from 'next/font/google';

import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';
import SSRSideBar from '@/components/organisms/SideBar/server/SSRSideBar';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`bg-[#eaeaea] ${robotoCondensedFont.className} ${zenKakuGothicFont.className} ${actionNBALight.variable} ${actionNBAMedium.variable} ${actionNBABold.variable} font-roboto antialiased`}
      >
        {/* サイドバー */}
        <SSRSideBar>
          <div className="flex flex-col min-h-screen">
            {/* ヘッダー */}
            <Header />
            <div className="p-2 md:p-6">
              {children}
              <Analytics />
              <SpeedInsights />
            </div>
            {/* フッター */}
            <Footer />
          </div>
        </SSRSideBar>
      </body>
    </html>
  );
}
