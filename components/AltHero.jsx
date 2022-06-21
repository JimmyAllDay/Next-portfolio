import Link from "next/link";
import Image from "next/image";

export default function AltHero({ name }) {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            priority
            src="/images/James_Marshall1.jpg"
            className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
            height={108}
            width={108}
            alt={name}
          />
        </a>
      </Link>
      <h2>
        <Link href="/">
          <a>{name}</a>
        </Link>
      </h2>
    </>
  );
}
