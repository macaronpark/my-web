import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function NavBar({ children }: Props) {
  return (
    <nav
      className={`bg-win95-lightgray bevel-raised flex w-full flex-wrap justify-start gap-0.5 border-r-0 border-l-0 px-1 py-0.5`}
    >
      {children}
    </nav>
  );
}
