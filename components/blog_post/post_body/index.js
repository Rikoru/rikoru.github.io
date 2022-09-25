import styles from './markdown.module.scss';

export default function PostBody({ content }) {
  return (
    <div className={styles.postWrapper}>
      <div
        className={styles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
