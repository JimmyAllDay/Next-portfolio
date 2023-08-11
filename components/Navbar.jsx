import Link from 'next/link';
import { useRouter } from 'next/router';
import { Spin as Hamburger } from 'hamburger-react';

export default function Navbar({ showNav, setShowNav, showNavMenu }) {
  const router = useRouter();
  const pages = [
    { name: 'Portfolio', path: '/' },
    { name: 'Writing', path: '/posts/posts-main' },
  ];

  const mapLinks = pages.map((page, index) => {
    return (
      <Link key={index} href={page.path}>
        <a
          className={`lg:inline-flex lg:w-auto w-full px-2 py-1 rounded items-center justify-center ${
            router.pathname === page.path
              ? 'text-dark dark:text-accent'
              : 'text-gray hover:text-dark hover:bg-light dark:hover:text-accentd dark:text-accent dark:hover:bg-stone-700'
          }`}
        >
          {page.name}
        </a>
      </Link>
    );
  });

  return (
    <div className="flex flex-row-reverse mb-2 bg-blog print:hidden dark:bg-stone-800">
      <div
        className={`ml-auto mt-1 mr-3 border rounded fixed z-[1000] ${
          showNav
            ? 'text-hamburger border-none'
            : 'text-dark border-none bg-light bg-opacity-70'
        }`}
      >
        <Hamburger
          toggled={showNav}
          toggle={setShowNav}
          onToggle={(toggled) => showNavMenu()}
        />
      </div>
      <div className="mr-auto">
        <nav className="flex items-center flex-wrap mb-1 text-lg">
          <div className="inline-flex flex-grow">
            <div className="flex flex-row pt-1 items-start sm:pl-5">
              {mapLinks}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
