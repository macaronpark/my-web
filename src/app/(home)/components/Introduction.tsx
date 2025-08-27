import Image from "next/image";
import type { Introduction } from "../type";

export default function Introduction({ contents }: { contents: Introduction }) {
  return (
    <section className="flex flex-col items-center w-full max-w-xl">
      <Banner
        title={contents.title}
        subTitle={contents.subTitle}
        description={contents.description}
        image={contents.image}
      />
      <InfoLinkList
        github={contents.github}
        email={contents.email}
        phone={contents.phone}
        address={contents.address}
      />
    </section>
  );
}

const Banner = ({
  title,
  subTitle,
  description,
  image,
}: Pick<Introduction, "title" | "subTitle" | "description" | "image">) => {
  return (
    <div className="w-full grid grid-cols-[5fr_1fr] bg-[#990099] drop-shadow-lg text-center">
      <div className="flex flex-col items-center p-2">
        <h2 className="font-extrabold text-2xl text-[#2DFF00] text-shadow-sm text-shadow-gray-700">
          {title}
        </h2>
        <p className="text-white text-sm">{subTitle}</p>
        <p className="bg-gray-900 font-bold text-md text-white mt-1 px-4 w-fit">{description}</p>
      </div>
      <div className="flex justify-center items-center bg-white">
        <Image
          src={image.src}
          width={100}
          height={100}
          alt={image.alt}
          className="w-20 h-auto mt-3"
        />
      </div>
    </div>
  );
};

const InfoLinkList = ({
  github,
  email,
  phone,
  address,
}: Pick<Introduction, "github" | "email" | "phone" | "address">) => {
  return (
    <p className="flex flex-wrap justify-center max-w-sm gap-x-2 mt-3 text-center text-sm">
      <InfoLink label={github.split("https://")[1]} href={github} />
      <InfoLink
        label={email}
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
      />
      <InfoLink label={phone} href={`tel:${phone}`} />
      <InfoLink label={address} href={`https://map.naver.com/p/search/${address}`} />
    </p>
  );
};

const InfoLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <>
      <a target="_blank" href={href} className="text-[#0000ee] underline">
        {label}
      </a>
      <span> | </span>
    </>
  );
};
