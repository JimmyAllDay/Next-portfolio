import Link from "next/link";

export default function NavMenu({ closeNav, navLinks }) {
  const mappedLinks = navLinks.map((link, i) => {
    return (
      <li
        key={i}
        className="nav__item sm:text-6xl text-5xl hover:text-accent"
        onClick={() => {
          closeNav();
        }}
      >
        <Link smooth href={link.href} className="nav__link">
          {link.section}
        </Link>
      </li>
    );
  });

  return (
    <div className="h-full bg-dark text-light flex flex-col">
      <ul className="nav__list h-full text-center my-auto justify-evenly flex flex-col">
        {mappedLinks}
      </ul>
    </div>
  );
}
