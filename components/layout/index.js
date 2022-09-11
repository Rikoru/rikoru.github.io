import React from 'react';
import PropTypes from 'prop-types';

import styles from './layout.module.scss';
import Header from '../header';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <div>
      <section className={styles.headerContainer}>
        <Header></Header>
      </section>
      <div className={styles.main}>{children}</div>
      <section className={styles.footerContainer}>
        <Footer></Footer>
      </section>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.element,
};
