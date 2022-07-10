import Image from "next/image";

export default function PortfolioItem({ image, link }) {
  return (
    <>
      <a href={link} className="bg-accent flex">
        <Image
          src={image}
          alt=""
          className="overflow-hidden transition duration-700 transform hover:scale-110 hover:opacity-70"
        />
      </a>
    </>
  );
}
