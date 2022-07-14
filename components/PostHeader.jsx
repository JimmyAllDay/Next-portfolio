import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/images/James_Marshall1.jpg";

export default function PostHeader({ name }) {
  return (
    <div className="flex flex-col pb-5">
      <div className="flex px-5 w-full max-w-3xl mx-auto">
        <div className="flex mx-auto">
          <div className="inline-block">
            <div className="h-[75px] w-[75px] overflow-hidden rounded-full">
              <Image priority src={profilePic} alt={name} />
            </div>
          </div>
          <h1 className="text-4xl text-dark font-bold my-auto ml-3">{name}</h1>
        </div>
      </div>
    </div>
  );
}
