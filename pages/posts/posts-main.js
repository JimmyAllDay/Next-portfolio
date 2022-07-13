import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { siteTitle } from "../../components/Layout";

import { getSortedPostsData } from "../../lib/posts";

import Date from "../../components/Date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Card({ title, date, id, image, synopsis, hashTags }) {
  const renderHashTags = hashTags.map((tag) => {
    return (
      <span className="inline-block bg-nav rounded-full px-1 py-[0.25em] text-sm font-semibold text-dark mr-1 mb-1">
        {`#${tag}`}
      </span>
    );
  });

  return (
    <li className="inline-block shadow-lg hover:bg-blog max-w-[300px] mb-3">
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
              <p class="text-gray">{`${synopsis}..`}</p>
              <div className="pt-1 pb-2">{renderHashTags}</div>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function Main({ allPostsData }) {
  return (
    <div className="bg-blog sm:p-5 p-2">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="bg-light px-2 pt-2">
        <h2 className="text-xl font-secondary mb-2 text-accent" id="posts">
          Posts
        </h2>
        <ul className="grid grid-cols-fluid">
          {allPostsData.map(
            ({ id, date, title, imagePath, synopsis, hashTags }) => (
              <Card
                key={id}
                image={imagePath}
                id={id}
                title={title}
                date={date}
                href={`/posts/${id}`}
                synopsis={synopsis}
                hashTags={hashTags}
              />
            )
          )}
        </ul>
      </section>
    </div>
  );
}
