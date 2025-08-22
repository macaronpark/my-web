import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NavBar({ children }: Props) {
  return (
    <nav
      className={`
        flex flex-wrap justify-center gap-1 w-full p-0.5 
        bg-windows-content
        border-t-2 border-b-2
        border-t-windows-border-light
        border-b-windows-border-dark
      `}
    >
      {children}
    </nav>
  );
}
