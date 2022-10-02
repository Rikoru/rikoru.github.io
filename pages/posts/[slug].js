import React from 'react';
import PropTypes from 'prop-types';

import { useRouter } from 'next/router';

import styles from './posts.module.scss';
import { getAllPosts, getPostBySlug, postProps } from '../../lib/posts';

import PostHeader from '../../components/blog_post/post_header';
import PostBody from '../../components/blog_post/post_body';

import ErrorPage from 'next/error';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} withDarkMode />;
  }
  return (
    <React.Fragment>
      <div className={styles.postOuterWrapper}>
        <article className={styles.postInnerWrapper}>
          {router.isFallback ? (
            <React.Fragment>
              <PostHeader title="..." />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
            </React.Fragment>
          )}
        </article>
      </div>
    </React.Fragment>
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

Post.propTypes = {
  post: PropTypes.shape(postProps),
};
