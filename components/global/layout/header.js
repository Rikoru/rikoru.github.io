import React from 'react';
import Link from 'next/link';
import { g } from '../../../constants/global';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.headerTitle}>
          <h1>
            <Link href="/">{g.titleCool}</Link>
          </h1>
        </div>
        <div className={styles.navbar}>
          <ul>
            <li>
              <Link href="portfolio">Portfolio</Link>
            </li>
            <li>
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
