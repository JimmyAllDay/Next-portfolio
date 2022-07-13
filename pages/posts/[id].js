import Layout from "../../components/Layout";

import { getAllPostIds, getPostData } from "../../lib/posts";

import Date from "../../components/Date";

import Head from "next/head";

import Image from "next/image";

//! Do Not Fetch an Next.js API Route from getStaticProps or getStaticPaths
//! You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
//! Here’s why: getStaticProps and getStaticPaths run only on the server-side and will never run on the client-side. That means you can write code such as direct database queries without sending them to browsers.

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="max-w-3xl mx-auto">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className="flex flex-col">
        <h1 className="text-3xl mx-auto">{postData.title}</h1>
        <div className="text-sm mx-auto">
          <p>
            <Date dateString={postData.date} />
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <Image src={postData.imagePath} alt="" width="400px" height="250px" />
        </div>
        <div
          className="p-5"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </div>
  );
}
