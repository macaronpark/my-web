import type { Welcome } from '../type';

export default function Welcome({ contents }: { contents: Welcome }) {
  return (
    <section className="text-center">
      <h1 className="text-2xl font-bold">{contents.title}</h1>
      <p className="mt-1">{contents.subTitle}</p>
    </section>
  );
}
