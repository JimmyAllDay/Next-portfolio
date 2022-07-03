import Image from "next/image";

export default function PortfolioItem({ image, link }) {
  return (
    <>
      <a href={link}>
        <Image
          src={image}
          alt=""
          className="overflow-hidden transition hover:scale-120"
        />
      </a>
    </>
  );
}
