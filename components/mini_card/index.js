import React from 'react'
import PropTypes from 'prop-types'

import styles from './mini_card.module.scss'

export default function MiniCard({ children }) {
  return (
    <div className={styles.miniCardFrame}>
      {children}
    </div>
  );
}
MiniCard.propTypes = {
  children: PropTypes.element,
}