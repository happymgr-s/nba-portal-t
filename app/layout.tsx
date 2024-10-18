import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Roboto_Condensed, Zen_Kaku_Gothic_Antique } from 'next/font/google';

import Header from '@/components/organisms/Header/Header';
import Footer from '@/components/organisms/Footer/Footer';
import SSRSideBar from '@/components/organisms/SideBar/server/SSRSideBar';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

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
  description:
    'Discover in-depth team profiles, real-time scores, and breaking NBA updates in one place.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <Head>
        <meta
          name="google-site-verification"
          content="nqC9VyESC0lqQqxhaIc1-3p05cOQaIj_3phmWnHPcA4"
        />
      </Head>
      <body
        className={`bg-[#eaeaea] ${robotoCondensedFont.className} ${zenKakuGothicFont.className} ${actionNBALight.variable} ${actionNBAMedium.variable} ${actionNBABold.variable} font-roboto antialiased`}
      >
        {/* サイドバー */}
        <SSRSideBar>
          <div className="flex flex-col min-h-screen">
            {/* ヘッダー */}
            <Header />
            <div>
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
