import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import styles from './posts.module.scss';

import { getAllPosts } from '../../lib/posts';
import { getSectionPropsByRoute } from '../../constants/sections';

import { Typography } from '@mui/material';
import { ModernPage } from '../../components/page_types';

export default function Posts({ posts, sectionTitle, icon }) {
  return (
    <React.Fragment>
      <ModernPage sectionTitle={sectionTitle} icon={icon}>
        <div className={styles.postInnerWrapper}>
          <ul className={styles.postsList}>
            {posts.map(({ slug, title, date }) => (
              <li key={slug}>
                <Link href={`/posts/${slug}`}>
                  <a>
                    <Typography variant="h3">
                      ({date}) {title}
                    </Typography>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </ModernPage>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPosts(['slug', 'title', 'date']);

  return {
    props: {
      posts: allPostsData,
      ...getSectionPropsByRoute('posts'),
    },
  };
}

Posts.propTypes = {
  sectionTitle: PropTypes.string,
  icon: PropTypes.string,
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
};
