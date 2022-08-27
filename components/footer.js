import Link from 'next/link'
import { g } from '../constants/global'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <section className={styles.footer}>
      <p>
        <Link href={g.licenseUri}>
          <a><strong>{g.license}</strong></a>
        </Link> 
      </p>
    </section>
  )
}