import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function NavLink({ route, name }) {
  const router = useRouter();
  return (
    <Link href={route}>
      <a
        className={`lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-slate-600 items-center justify-center hover:bg-slate-200 hover:text-slate-800 ${
          router.pathname == { route } ? "text-accent" : "text-dark"
        }`}
      >
        {name}
      </a>
    </Link>
  );
}

export default function Navbar({ showNavMenu, closeNav }) {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-white mb-1 text-dark text-lg">
        <div className="inline-flex flex-grow">
          <div className="flex flex-row pt-1 items-start sm:pl-5">
            <NavLink route={"/"} name="Portfolio" prefetch />
            <NavLink route={"/resume"} name="Resume" prefetch />
            <NavLink route={"/posts/posts-main"} name="Writing" prefetch />
          </div>
        </div>
      </nav>
    </>
  );
}
