import Image from "next/image";

export default function Home() {
  return (
    <div className='flex flex-col items-center gap-3 p-2'>
      <h1>suzypark.dev에 오신걸 환영합니다!</h1>
      <IntroductionBanner />
      🏗️🚧 홈 - 공사 중 🚧🏗️
      <div>기술스택</div>
      <div>경험</div>
      <div>프로젝트</div>
    </div>
  );
}

const IntroductionBanner = () => {
  const contents = {
    title: "프론트엔드 개발자 박수지",
    subTitle: "~같이 일하는 경험이 쾌적한 사람~",
    description: "주도적! 적극적! 협조적! 평화적!",
    image: {
      src: "/polar-bear.webp",
      alt: "천천히 걸어오는 북극곰",
    },
  };

  return (
    <article className='grid grid-cols-[5fr_1fr] bg-[#990099] w-full max-w-lg drop-shadow-lg'>
      <div className='flex flex-col items-center p-2'>
        <h1 className='font-extrabold text-xl text-[#2DFF00] text-shadow-sm text-shadow-gray-700'>
          {contents.title}
        </h1>
        <p className='text-white text-sm'>{contents.subTitle}</p>
        <p className='bg-gray-900 font-bold text-white text-md mt-0.5 px-4 w-fit'>
          {contents.description}
        </p>
      </div>
      <div className='content-center bg-white'>
        <Image
          src={contents.image.src}
          width={100}
          height={100}
          alt={contents.image.alt}
          className='mt-3'
        />
      </div>
    </article>
  );
};
