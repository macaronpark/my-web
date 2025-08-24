import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import NavBar from "@/app/NavBar";
import Nav from "./Nav";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "박수지",
  description: "박수지의 웹에 오신걸 환영합니다.",
};

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const links = [
  { title: "홈", href: "/", icon: "/home.png" },
  { title: "프로젝트", href: "/project", icon: "/project.png" },
  { title: "성전", href: "/shrine", icon: "/shrine.png" },
  { title: "갤러리", href: "/gallery", icon: "/gallery.png" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body
        className={`${notoSansKR.variable} antialiased flex justify-center`}
      >
        <header className='flex flex-col items-center w-full h-svh'>
          <NavBar>
            {links.map((link) => (
              <Nav
                key={link.href}
                title={link.title}
                href={link.href}
                icon={link.icon}
              />
            ))}
          </NavBar>
          <div className='flex h-full p-2 max-w-screen-lg'>{children}</div>
        </header>
      </body>
    </html>
  );
}
