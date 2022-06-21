import Link from "next/link";

export default function NavMenu({ closeNav, navLinks }) {
  const mappedLinks = navLinks.map((link, i) => {
    return (
      <li
        key={i}
        className="nav__item"
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
    <>
      <ul className="nav__list">{mappedLinks}</ul>
    </>
  );
}
