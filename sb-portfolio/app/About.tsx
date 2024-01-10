import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <div className="mb-4">
        <Image
          alt="Shani Brown headshot"
          height={300}
          priority={true}
          src="/ShaniBrown.png"
          width={300}
        />
      </div>
      <div>
        <div>
          <h3>About me.</h3>
          <p>
            I am a front-end focused software engineer and tech leader. I am
            passionate about front end testing, and creating a positive dev
            experience. I collaborate well with backend engineers, product and
            design. My highest priority is delivering reliable, scalable,
            legible, and reusable code.
          </p>
          <p>
            When I am not working, I enjoy spending time with family and
            friends. I meditate. I walk every day. I read. I experiment with
            different cuisines.
          </p>
          <h4 className="mt-4">Technical Leadership</h4>
          <ul className="list-disc pl-5 text-left">
            <li>Defining coding standards and best practices</li>
            <li>Exploring and analyzing new technologies</li>
            <li>Documentation</li>
            <li>Architecture</li>
            <li>
              Fostering open environment for contributions and collaborations
            </li>
            <li>Intentionally building camaraderie on a fully remote team</li>
            <li>Creating opportunities for teammates to shine and grow</li>
            <li>Mentorship</li>
          </ul>
          <div className="my-4">
            <Link
              href={'files/shani-brown.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              locale={false}
              download
            >
              Download Shani Brown&apos;s Resume
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <h3>About this site.</h3>
          <p>
            This site is my exploration of{' '}
            <Link href={'https://nextjs.org'}>NextJS 14</Link>. It uses SSR{' '}
            <Link href={'https://react.dev'}>React 18</Link> Components and{' '}
            <Link href={'https://www.typescriptlang.org'}>TypeScript 5</Link>.
            Styling is done with{' '}
            <Link href={'https://tailwindcss.com'}>Tailwind 3</Link>. It has e2e
            testing with{' '}
            <Link href={'https://www.cypress.io/'}>Cypress 13</Link>.
          </p>
          <p>
            The purpose of this site is to demonstrate coding abilities by
            providing examples of code I&apos;ve written, and challenges
            I&apos;ve completed.
          </p>
        </div>
      </div>
    </>
  );
}
