import React from 'react';
import PropTypes from 'prop-types';

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

PostBody.propTypes = {
  content: PropTypes.any,
};
