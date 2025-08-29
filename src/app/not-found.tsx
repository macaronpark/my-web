import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-svh flex-col items-center justify-center select-none">
      <article className="win95-panel-frame">
        <header className="win95-panel-title">404 Not Found</header>
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <div className="flex items-start gap-2">
            <Image
              src="/tip.png"
              width={40}
              height={40}
              alt="Tip icon"
              className="size-10"
            />
            <div>
              <h3 className="text-xl font-bold">404 Not Found</h3>
              <p className="text-sm">요청한 페이지를 찾을 수 없습니다.</p>
            </div>
          </div>
          <Link href="/" className="win95-nav mt-2 block w-1/2 p-1 text-center">
            <div className="rounded-sm border-2 border-dotted">
              홈으로 돌아가기
            </div>
          </Link>
        </div>
      </article>
    </div>
  );
}
