import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-svh select-none">
      <article className="win95-panel-frame">
        <header className="win95-panel-title">404 Not Found</header>
        <div className="flex flex-col justify-center items-center p-4 gap-2">
          <div className="flex items-start gap-2">
            <Image src="/tip.png" width={40} height={40} alt="Tip icon" className="size-10" />
            <div>
              <h3 className="font-bold text-xl">404 Not Found</h3>
              <p className="text-sm">요청한 페이지를 찾을 수 없습니다.</p>
            </div>
          </div>
          <Link href="/" className="win95-nav block text-center w-1/2 p-1 mt-2">
            <div className="rounded-sm border-2 border-dotted">홈으로 돌아가기</div>
          </Link>
        </div>
      </article>
    </div>
  );
}
