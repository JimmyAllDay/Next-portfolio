import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/James_Marshall1.jpg";

export default function HomeHero({ name }) {
  return (
    <div className="p-5 max-w-5xl mx-auto" id="home">
      <div className="relative flex">
        <div className="mx-auto sm:w-full">
          <h1 className="sm:ml-[290px] text-5xl sm:text-6xl">Hi, I'm</h1>
          <h1 className="sm:ml-[290px] text-5xl sm:text-7xl font-bold mb-1">
            {name}
          </h1>
          <div className="hero-pic sm:w-[260px] max-w-[400px] drop-shadow-3xl">
            <Image priority src={profilePic} alt={name} />
          </div>

          <div className="bg-accent py-2 sm:max-w-full sm:pl-[290px] max-w-[400px]">
            <h3 className="text-left ml-1 sm:mr-1 font-secondary text-xl md:text-2xl md:text-right">
              Junior Javascript Developer
            </h3>
          </div>
          <h5 className="mt-1 ml-1 sm:mr-1 text-left font-secondary md:text-xl col-span-3 sm:text-right sm:ml-3">
            Fitzroy, Melbourne, Australia
          </h5>
          <h5 className="mt ml-1 sm:mr-1 text-left font-secondary md:text-xl col-span-3 sm:text-right hover:text-accent">
            <Link href="mailto:jameswhmarshall@gmail.com">
              jameswhmarshall@gmail.com
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
}
