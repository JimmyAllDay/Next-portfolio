import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/James_Marshall1.jpg";

export default function HomeHero({ name }) {
  return (
    <div className="flex py-5">
      <div className="flex sm:flex-row-reverse flex-col px-5 w-full max-w-3xl mx-auto">
        <div className="inline-block">
          <div className="h-[200px] w-[200px] overflow-hidden rounded-full mx-auto">
            <Image priority src={profilePic} alt={name} />
          </div>
        </div>
        <div className="flex flex-col pb-5 sm:pr-5 w-full">
          <h1 className="text-5xl pt-1 text-center sm:text-left">{name}</h1>
          <h1 className="text-2xl font-secondary text-center sm:text-left">
            Javascript Developer
          </h1>
          <div className="relative flex pt-1 pb-2 items-center">
            <div className="border-t w-full"></div>
          </div>

          <div className="text-center sm:text-left">
            <p className="pb-3 text-center sm:text-left">
              I'm a web developer interested in the convergence of technology,
              entrepreneurship, altruism, spirituality and culture. Currently
              based in Fitzroy, Melbourne, Australia.
            </p>

            <div className="text-center sm:text-left">
              <Link href="mailto:jameswhmarshall@gmail.com">
                <button className="bg-accent hover:bg-accentd text-light font-secondary text-xl py-1 w-[125px]">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
