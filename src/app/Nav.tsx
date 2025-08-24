"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
  icon: string;
};

export default function Nav({ title, href, icon }: Props) {
  const isCurrent = usePathname() === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-1 min-w-fit px-2 py-1 bg-windows-content hover:bg-windows-content-hover border-2 border-windows-border-dark",
        isCurrent
          ? "border-b-windows-border-light border-r-windows-border-light inset-shadow-[2px_2px_rgba(0,0,0,0.125)] brightness-92"
          : "border-t-windows-border-light border-l-windows-border-light inset-shadow-windows"
      )}
    >
      <Image
        src={icon}
        width={20}
        height={20}
        alt={title + " icon"}
        className='size-5'
      />
      {title}
    </Link>
  );
}
