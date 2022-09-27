import React from 'react';
import { useRouter } from 'next/router';

import styles from './posts.module.scss';
import { getAllPosts, getPostBySlug } from '../../lib/posts';

import PostHeader from '../../components/blog_post/post_header';
import PostBody from '../../components/blog_post/post_body';
import PostTitle from '../../components/blog_post/post_title';

import ErrorPage from 'next/error';
import markdownToHtml from '../../lib/markdownToHtml';
import { IconButton } from '@mui/material';
import BackArrow from '@mui/icons-material/ArrowBackIosNewRounded';
import Link from 'next/link';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} withDarkMode />;
  }
  return (
    <>
      <div className={styles.postOuterWrapper}>
        <Link href="/posts" passHref>
          <IconButton aria-label="Go back">
            <BackArrow />
          </IconButton>
        </Link>
        {router.isFallback ? (
          <PostTitle>...</PostTitle>
        ) : (
          <>
            <article className={styles.postInnerWrapper}>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
