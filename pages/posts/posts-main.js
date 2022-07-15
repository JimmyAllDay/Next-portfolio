import Head from "next/head";
import Link from "next/link";

import { siteTitle } from "../../components/Layout";

import { getSortedPostsData } from "../../lib/posts";

import Date from "../../components/Date";
import Card from "../../components/Card";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
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
        <ul className="grid grid-cols-fluid justify-items-center sm:justify-items-start">
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
