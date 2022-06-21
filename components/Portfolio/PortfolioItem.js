import Image from "next/image";

export default function PortfolioItem({ image, link }) {
  return (
    <>
      <a href={link} className="portfolio__item">
        <Image
          src={image}
          alt=""
          className="portfolio__img"
          width="300"
          height="150"
        />
      </a>
    </>
  );
}
