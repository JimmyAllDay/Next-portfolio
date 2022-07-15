import Image from "next/image";
import Link from "next/link";
import Date from "./Date";

export default function Card({ title, date, id, image, synopsis, hashTags }) {
  const renderHashTags = hashTags.map((tag, i) => {
    return (
      <div
        key={`${title}_${i}`}
        className="inline-block bg-hash rounded-full px-1 py-[0.25em] text-sm font-semibold text-gray mr-1 mb-1"
      >
        {`#${tag}`}
      </div>
    );
  });

  return (
    <li className="inline-block shadow-lg duration-300 transform hover:scale-105 max-w-[300px] mb-3 sm:mr-auto">
      <Link href={`/posts/${id}`}>
        <a>
          <div className="rounded overflow-hidden text-dark">
            <Image
              priority
              src={image}
              alt="Sunset in the mountains"
              width="500px"
              height="250px"
            />
            <div className="p-2">
              <div className="font-bold text-xl text-gray">{title}</div>
              <small className="text-gray">
                <Date dateString={date} />
              </small>
              <p className="text-gray">{`${synopsis}..`}</p>
              <div className="pt-1 pb-2">{renderHashTags}</div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
