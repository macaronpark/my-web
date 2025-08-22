import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
  icon: string;
};

export default function Nav({ title, href, icon }: Props) {
  return (
    <Link
      key={href}
      href={href}
      className={`
            flex items-center gap-1 min-w-fit px-2 py-1
            bg-windows-content hover:bg-windows-content-hover
            border-2
            border-windows-border-dark
            border-t-windows-border-light 
            border-l-windows-border-light
            inset-shadow-windows
          `}
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
