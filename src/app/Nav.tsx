'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links } from './data';

type Nav = (typeof links)[number];

export default function Nav({ title, href, src }: Nav) {
  const cn = getClassName({ isCurrent: usePathname() === href });

  if (title === '홈') {
    return <HomeNav title={title} href={href} src={src} cn={cn} />;
  }

  return (
    <Link href={href} className={cn}>
      <NavImage src={src} />
      {title}
    </Link>
  );
}

const getClassName = ({ isCurrent }: { isCurrent: boolean }) => {
  return clsx(
    'flex items-center gap-1',
    isCurrent ? 'win95-nav-current' : 'win95-nav',
  );
};

const HomeNav = ({ title, href, src, cn }: Nav & { cn: string }) => {
  return (
    <>
      <Link href={href} className={clsx(cn, 'font-semibold')}>
        <NavImage src={src} />
        {title}
      </Link>
      <HomeNavDivider />
    </>
  );
};

const HomeNavDivider = () => {
  return (
    <div className="border-l-win95-border-light border-t-win95-border-light m-0.5 w-1 border-2 border-gray-400" />
  );
};

const NavImage = ({ src }: Pick<Nav, 'src'>) => {
  return (
    <Image
      src={src}
      width={20}
      height={20}
      alt=""
      aria-hidden={true}
      className="size-5"
      unoptimized={true}
    />
  );
};
