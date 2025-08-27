import Image from "next/image";
import type { Introduction } from "../type";

export default function Introduction({ contents }: { contents: Introduction }) {
  return (
    <section className="w-full max-w-xl">
      <div className="grid grid-cols-[5fr_1fr] bg-[#990099] drop-shadow-lg text-center">
        <div className="flex flex-col items-center p-2">
          <h2 className="font-extrabold text-2xl text-[#2DFF00] text-shadow-sm text-shadow-gray-700">
            {contents.title}
          </h2>
          <p className="text-white text-sm">{contents.subTitle}</p>
          <p className="bg-gray-900 font-bold text-md text-white mt-1 px-4 w-fit">
            {contents.description}
          </p>
        </div>
        <div className="flex justify-center items-center bg-white">
          <Image
            src={contents.image.src}
            width={100}
            height={100}
            alt={contents.image.alt}
            className="w-20 h-auto mt-3"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm">
        <a target="_blank" href={contents.github} className="text-[#0000ee] underline">
          {contents.github.split("https://")[1]}
        </a>
        <span> | </span>
        <a
          target="_blank"
          href={
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=${encodeURIComponent(contents.gmail)}`
          }
          className="text-[#0000ee] underline"
        >
          {contents.gmail}
        </a>
        <span> | </span>
        <br />
        <a target="_blank" href={contents.phone} className="text-[#0000ee] underline">
          {contents.phone}
        </a>
        <span> | </span>
        <a
          target="_blank"
          href={`https://map.naver.com/p/search/${contents.address}`}
          className="text-[#0000ee] underline"
        >
          {contents.address}
        </a>
      </p>
    </section>
  );
}
