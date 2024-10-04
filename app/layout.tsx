import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import SideBarLink from '@/components/molecules/SideBarLink/SideBarLink';
import Header from '@/components/organisms/Header/Header';

const geistSans = localFont({
  src: '../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ヘッダー */}
        <Header />

        {/* サイドバー */}
        <div className=" flex flex-row p-3 ">
          <div className="flex flex-col gap-3 border-r pr-10">
            <SideBarLink href="/">HOME</SideBarLink>
            <SideBarLink href="/teams">Teams</SideBarLink>
            <SideBarLink href="/players/active">Players</SideBarLink>
            <SideBarLink href="/news">News List</SideBarLink>
            <SideBarLink href="/todo">Todo</SideBarLink>
          </div>
          <div className="p-7">{children}</div>
        </div>

        {/* フッター */}
      </body>
    </html>
  );
}
