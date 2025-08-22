import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className='flex flex-col justify-center select-none'>
      <article
        className={`
          bg-windows-content
          border-2 
          border-windows-border-dark
          border-t-windows-border-light 
          border-l-windows-border-light
          inset-shadow-windows
        `}
      >
        <header className='bg-windows-title text-white px-2'>
          404 Not Found
        </header>
        <div className='flex flex-col justify-center items-center p-4 gap-2'>
          <div className='flex items-start gap-2'>
            <Image
              src='/tip.png'
              width={40}
              height={40}
              alt='Tip icon'
              className='size-10'
            />
            <div>
              <h3 className='font-bold text-xl'>404 Not Found</h3>
              <p>Could not find requested resource</p>
            </div>
          </div>
          <Link
            href='/'
            className={`
                block text-center w-1/2 p-1 mt-2
                bg-windows-content hover:bg-windows-content-hover
                border-2 
                border-windows-border-dark
                border-t-windows-border-light 
                border-l-windows-border-light
                inset-shadow-windows
              `}
          >
            <div className='rounded-sm border-2 border-dotted'>Return Home</div>
          </Link>
        </div>
      </article>
    </div>
  );
}
