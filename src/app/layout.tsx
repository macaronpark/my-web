import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import NavBar from "@/app/NavBar";
import Nav from "./Nav";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Suzy Park's web",
  description: "Welcome to Suzy Park's web.",
};

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const links = [
  { title: "Home", href: "/", icon: "/home.png" },
  { title: "Portfolio", href: "/portfolio", icon: "/portfolio.png" },
  { title: "Blog", href: "/blog", icon: "/blog.png" },
  { title: "Shrine", href: "/shrine", icon: "/shrine.png" },
  { title: "Gallery", href: "/gallery", icon: "/gallery.png" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
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
