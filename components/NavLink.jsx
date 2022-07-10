import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ href, name }) {
  const router = useRouter();

  //!The below ternary isn't working the way it's meant to - this may be the result of multiple renders
  //TODO: Fix this ternary so that navigation links change based on active link. Reinstate Next.js Link component when you do.
  return (
    <a
      href={href}
      className={`lg:inline-flex lg:w-auto w-full px-2 py-1 rounded text-slate-600 items-center justify-center hover:bg-slate-200 hover:text-slate-800 ${
        router.pathname === { href } ? "text-accent" : "text-dark"
      }`}
    >
      {name}
    </a>
  );
}
