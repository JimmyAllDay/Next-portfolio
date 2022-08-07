import Image from "next/image";

export default function UnderDevelopmentItem({ image, link }) {
  return (
    <>
      <a href={link} className="flex relative bg-accent group">
        <p className="absolute text-md z-10 w-full text-light bg-accent mx-auto px-1 hidden group-hover:block transition-all">
          Under Development
        </p>
        <Image
          src={image}
          alt=""
          className="overflow-hidden transition duration-700 transform hover:scale-110 hover:opacity-70"
        />
      </a>
    </>
  );
}
