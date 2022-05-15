import React from 'react';
import Header from '../../component/header/Header';

const id = ({ post }: any) => {
  return (
    <>
      <Header />
      <div className=''>
        {post.date.substring(0, 10)}
        {post.title}
        {post.category}
      </div>
    </>
  );
};
export default id;

export async function getStaticPaths() {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_KEY,
    },
  };
  const res = await fetch(`${process.env.NEXT_API}news`, option);
  const resJson = await res.json();
  const paths = resJson.contents.map((content: any) => ({
    params: {
      id: content.id,
      title: content.title,
      category: content.category,
      date: content.date,
    },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const option: {} = {
    headers: {
      'X-MICROCMS-API-KEY': process.env.NEXT_KEY,
    },
  };
  const res = await fetch(`${process.env.NEXT_API}news/${params.id}`, option);
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
}
