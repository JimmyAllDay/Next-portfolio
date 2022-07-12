import NavLink from "./NavLink";

export default function Navbar({ showNavMenu, closeNav }) {
  return (
    <>
      <nav className="flex items-center flex-wrap bg-white mb-1 text-dark text-lg bg-blog">
        <div className="inline-flex flex-grow">
          <div className="flex flex-row pt-1 items-start sm:pl-5">
            <NavLink href={"/"} name="Portfolio" prefetch />
            <NavLink href={"/resume"} name="Resume" prefetch />
            <NavLink href={"/posts/posts-main"} name="Writing" prefetch />
          </div>
        </div>
      </nav>
    </>
  );
}
