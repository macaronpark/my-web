import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import NavBar from '@/app/NavBar';
import Nav from '@/app/Nav';
import { links } from './data';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: '박수지',
  description: '박수지의 웹에 오신걸 환영합니다.',
};

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} min-h-svh antialiased`}>
        <header className="sticky top-0 z-10 flex flex-col items-center">
          <NavBar>
            {links.map((link) => (
              <Nav key={link.href} {...link} />
            ))}
          </NavBar>
        </header>
        {children}
      </body>
    </html>
  );
}
