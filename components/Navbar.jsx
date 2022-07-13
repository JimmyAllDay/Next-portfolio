import NavLink from "./NavLink";
import { Spin as Hamburger } from "hamburger-react";

export default function Navbar({ showNav, setShowNav, showNavMenu }) {
  return (
    <div className="flex flex-row-reverse mb-2 bg-blog print:hidden">
      <div
        className={`ml-auto mt-1 mr-3 border rounded fixed z-[1000] ${
          showNav
            ? "text-hamburger border-none"
            : "text-dark border-none bg-light bg-opacity-70"
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
              <NavLink href={"/"} name="Portfolio" prefetch />
              <NavLink href={"/resume"} name="Resume" prefetch />
              <NavLink href={"/posts/posts-main"} name="Writing" prefetch />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
