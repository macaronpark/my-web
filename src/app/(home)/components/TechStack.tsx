import Image from 'next/image';
import { PT_Sans } from 'next/font/google';
import type { TechStackGroup, TechStackItem } from '../type';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400'],
});

export default function TechStack({
  contents,
}: {
  contents: TechStackGroup[];
}) {
  return (
    <section className="win95-panel-frame">
      <h2 className="win95-panel-title flex items-center gap-1">
        <Image
          src="/folder.png"
          width={16}
          height={16}
          alt="폴더"
          className="size-4"
          unoptimized={true}
        />
        <span>Tech stack</span>
      </h2>
      <ul
        className={`win95-panel-body grid grid-cols-1 gap-x-2 gap-y-3 sm:grid-cols-6 ${ptSans.className} text-[0.8rem]`}
      >
        {contents.map((stack) => (
          <li key={stack.category}>
            <h3 className="mb-0.5 font-bold whitespace-break-spaces text-gray-500 sm:mb-2 sm:text-center">
              {stack.category}
            </h3>
            <ul className="grid grid-cols-4 gap-y-1 sm:grid-cols-1">
              {stack.items.map((item) => (
                <TechStackItem
                  key={item.name}
                  name={item.name}
                  src={item.src}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

const TechStackItem = ({ name, src }: TechStackItem) => {
  return (
    <li className="flex w-18 flex-col items-center gap-0.5">
      <Image
        src={src}
        width={40}
        height={40}
        alt=""
        aria-hidden={true}
        unoptimized={true}
      />
      <p className={`h-4 text-center leading-3 sm:h-6`}>{name}</p>
    </li>
  );
};
