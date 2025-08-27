import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NavBar({ children }: Props) {
  return (
    <nav
      className={`
        flex flex-wrap flex-start gap-0.5 w-full px-1 py-0.5 
        bg-win95-lightgray bevel-raised border-l-0 border-r-0
      `}
    >
      {children}
    </nav>
  );
}
