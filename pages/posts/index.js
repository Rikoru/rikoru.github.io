import Link from 'next/link';

import styles from './posts.module.scss';

import { getAllPosts } from '../../lib/posts';
import { getSectionByRoute } from '../../constants/sections';

import SectionCard from '../../components/section_card';

import { Typography } from '@mui/material';

export default function Posts({ posts, sectionTitle, icon }) {
  return (
    <>
      <SectionCard title={sectionTitle} icon={icon}>
        <div className={styles.postInnerWrapper}>
          <ul className={styles.postsList}>
            {posts.map(({ slug, title, date }) => (
              <li key={slug}>
                <Link href={`/posts/${slug}`}>
                  <a>
                    <Typography variant="subtitle">{date}</Typography>
                    <Typography>{title}</Typography>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </SectionCard>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getAllPosts(['slug', 'title', 'date']);
  const section = getSectionByRoute('posts');

  return {
    props: {
      posts: allPostsData,
      sectionTitle: section.name,
      icon: section.icon,
    },
  };
}
