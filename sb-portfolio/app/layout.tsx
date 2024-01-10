import type { Metadata } from 'next';
import { Assistant } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const assistant = Assistant({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shani Brown',
  description: 'Shani Brown portfolio',
  keywords:
    'ReactJs, NextJS, Front End, Engineer, Software, Tailwind, Cypress, TypeScript, Javascript, portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        <main className="min-h-screen items-center justify-center p-24 bg-gray-900 w-11/12 mx-auto">
          <div className="z-10 max-w-5xl w-full items-center">
            <Header />
          </div>

          <div className="mb-32 pt-10 grid sm:text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
