import Link from "next/link";
import { useState } from "react";

import { Spin as Hamburger } from "hamburger-react";

function NavLink({ route, name }) {
  return (
    <Link href={route}>
      <a className="lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-slate-600 items-center justify-center hover:bg-slate-200 hover:text-slate-800">
        {name}
      </a>
    </Link>
  );
}

export default function Navbar({ showNavMenu, closeNav }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white mb-1">
        <div className="inline-flex flex-grow">
          <div className="p-1 flex flex-row w-full items-start">
            <NavLink route={"/"} name="Portfolio" />
            <NavLink route={"/resume"} name="Resume" />
            <NavLink route={"/posts/posts-main"} name="Writing" />
          </div>
        </div>
        <Hamburger
          toggled={active}
          toggle={setActive}
          onToggle={(toggled) => showNavMenu()}
        />
      </nav>
    </>
  );
}
