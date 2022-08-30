import React from 'react'
import PropTypes from 'prop-types'
import styles from './card.module.scss'

export default function Card({ pageTitle, children }) {

  return (
    <div className={styles.cardFrame}>
      <div className={styles.cardHeader}>
        <h2>
          {pageTitle}
        </h2>
      </div>
      <div className={styles.cardBody}>
        {children}
      </div>
    </div>
  )

}
Card.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.element,
}