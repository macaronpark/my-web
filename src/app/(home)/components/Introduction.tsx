import Image from 'next/image';
import type { Introduction } from '../type';

export default function Introduction({ contents }: { contents: Introduction }) {
  return (
    <section className="flex w-full max-w-xl flex-col items-center">
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
}: Pick<Introduction, 'title' | 'subTitle' | 'description' | 'image'>) => {
  return (
    <div className="grid w-full grid-cols-[5fr_1fr] bg-[#990099] text-center drop-shadow-lg">
      <div className="flex flex-col items-center p-2">
        <h2 className="text-2xl font-extrabold text-[#2DFF00] text-shadow-gray-700 text-shadow-sm">
          {title}
        </h2>
        <p className="text-sm text-white">{subTitle}</p>
        <p className="text-md mt-1 w-fit bg-gray-900 px-4 font-bold text-white">
          {description}
        </p>
      </div>
      <div className="flex items-center justify-center bg-white">
        <Image
          src={image.src}
          width={100}
          height={100}
          alt={image.alt}
          className="mt-3 h-auto w-20"
          unoptimized={image.unoptimized}
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
}: Pick<Introduction, 'github' | 'email' | 'phone' | 'address'>) => {
  return (
    <p className="mt-3 flex max-w-sm flex-wrap justify-center gap-x-2 text-center text-sm">
      <InfoLink label={github.split('https://')[1]} href={github} />
      <InfoLink
        label={email}
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
      />
      <InfoLink label={phone} href={`tel:${phone}`} />
      <InfoLink
        label={address}
        href={`https://map.naver.com/p/search/${address}`}
      />
    </p>
  );
};

const InfoLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <span className="text-[#0000ee] underline">{label}</span>
      <span> | </span>
    </a>
  );
};
