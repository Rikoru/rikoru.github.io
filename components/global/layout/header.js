import React from 'react';
import Link from 'next/link';
import { g } from '../../../constants/global';
import styles from './header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerTitle}>
        <Link href="/">
          <h1>{g.titleCool}</h1>
        </Link>
      </div>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link href="about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
