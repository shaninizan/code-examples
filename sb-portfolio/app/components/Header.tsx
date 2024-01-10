import { Roboto_Slab, Tangerine } from 'next/font/google';
import Menu from './Menu';

const roboto_slab = Roboto_Slab({ subsets: ['latin'] });
const tangerine = Tangerine({ weight: ['400'], preload: false });

export default function Header() {
  return (
    <>
      <div className="border-b w-full flex justify-between">
        <h1 className={`${roboto_slab.className} text-5xl w-1/2`}>
          Shani Brown
        </h1>
        <Menu />
      </div>
      <div>
        <h2 className={`${tangerine.className} indent-10 text-2xl w-full`}>
          Lead Front End Software Engineer
        </h2>
      </div>
    </>
  );
}
