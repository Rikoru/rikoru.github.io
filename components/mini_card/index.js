import React from 'react';
import PropTypes from 'prop-types';

import styles from './mini_card.module.scss';
import Link from 'next/link';

const prepTitleSection = (title) =>
  !!title && (
    <div className={styles.miniCardTitle}>
      <h3>{title}</h3>
    </div>
  );

export default function MiniCard({ title, pageLink, children }) {
  return (
    <Link href={pageLink}>
      <div className={styles.miniCardFrame}>
        {prepTitleSection(title)}
        <div className={styles.miniCardBody}>{children}</div>
      </div>
    </Link>
  );
}
MiniCard.propTypes = {
  title: PropTypes.string,
  pageLink: PropTypes.string,
  children: PropTypes.element,
};
