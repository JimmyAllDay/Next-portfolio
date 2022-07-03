import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/James_Marshall1.jpg";

export default function HomeHero({ name }) {
  return (
    <div className="grid grid-cols-3 sm:max-w-4xl max-w-sm mx-auto py-6 px-2 text-dark">
      <h1 className="text-3xl sm:text-6xl col-span-3 sm:col-span-2 sm:col-start-2 sm:ml-5 font-primary md:text-left">
        Hi, I'm
      </h1>
      <h1 className="text-4xl sm:text-7xl col-span-3 font-bold font-primary mb-1 sm:col-span-2 sm:col-start-2 sm:ml-5 md:text-left">
        {name}
      </h1>
      <div className="drop-shadow-3xl col-span-3 row-span-3 sm:col-span-1 sm:absolute sm:w-[215px] md:w-[260px] max-w-[400px] sm:ml-4">
        <Image priority src={profilePic} alt={name} />
      </div>

      <div className="bg-accent py-2 col-span-3 sm:max-w-full max-w-[400px]">
        <h3 className="text-left ml-1 sm:mr-1 font-secondary text-xl md:text-2xl sm:text-right">
          Junior Javascript Developer
        </h3>
      </div>
      <h5 className="mt-1 ml-1 sm:mr-1 text-left font-secondary md:text-xl col-span-3 sm:text-right sm:ml-3">
        Fitzroy, Melbourne, Australia
      </h5>
      <h5 className="mt-1 ml-1 sm:mr-1 text-left font-secondary md:text-xl col-span-3 sm:text-right hover:text-accent">
        <Link href="mailto:jameswhmarshall@gmail.com">
          jameswhmarshall@gmail.com
        </Link>
      </h5>
    </div>
  );
}
