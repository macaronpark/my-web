import Image from "next/image";
import { PT_Sans } from "next/font/google";
import type { TechStackItem } from "../type";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export default function TechStack({ contents }: { contents: TechStackItem[] }) {
  return (
    <section className="win95-panel-frame">
      <h2 className="win95-panel-title flex items-center gap-1">
        <Image src="/folder.png" width={16} height={16} alt="폴더" className="size-4" />
        <span>Tech stack</span>
      </h2>
      <ul
        className={`win95-panel-body grid grid-cols-1 sm:grid-cols-6 gap-x-2 gap-y-3 ${ptSans.className} text-[0.8rem]`}
      >
        {contents.map((stack) => (
          <li key={stack.category}>
            <h3 className="mb-0.5 sm:mb-2 font-bold text-gray-500 whitespace-break-spaces sm:text-center">
              {stack.category}
            </h3>
            <ul className="grid grid-cols-4 sm:grid-cols-1 gap-y-1">
              {stack.items.map((item) => (
                <li key={item.name} className="flex flex-col items-center gap-0.5 w-18">
                  <Image src={item.src} width={40} height={40} alt={item.name} />
                  <p className={`h-4 sm:h-6 text-center leading-3`}>{item.name}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
