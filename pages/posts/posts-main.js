import Head from "next/head";
import Link from "next/link";

import { siteTitle } from "../../components/Layout";

import { getSortedPostsData } from "../../lib/posts";

import Date from "../../components/date";

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
      <section className="bg-light p-2">
        <h2 className="text-xl font-secondary mb-2 text-accent">Posts</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="inline-block p-3 rounded bg-blog">
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
