import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/James_Marshall1.jpg";

export default function HomeHero({ name }) {
  return (
    <div className="flex py-5" id="home">
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

          <p className="text-center font-secondary sm:text-left sm:w-full">
            Fitzroy, Melbourne, Australia
          </p>

          <div className="text-center sm:text-left">
            <Link href="mailto:jameswhmarshall@gmail.com">
              <p className="text-accent hover:underline hover:cursor-pointer">
                jameswhmarshall@gmail.com
              </p>
            </Link>
            <Link href="https://github.com/JimmyAllDay">
              <p className="text-accent hover:underline hover:cursor-pointer">
                github.com/JimmyAllDay
              </p>
            </Link>
            <Link href="https://jamesdev.com.au">
              <p className="text-accent hover:underline hover:cursor-pointer hidden print:inline-flex">
                jamesdev.com.au
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
