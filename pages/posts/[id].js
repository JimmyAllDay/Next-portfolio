import Layout from "../../components/Layout";

import { getAllPostIds, getPostData } from "../../lib/posts";

import Date from "../../components/date";

import Head from "next/head";

import utilStyles from "../../styles/utils.module.css";

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
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
