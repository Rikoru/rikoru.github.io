import { g } from '../../../constants/global'
import styles from './header.module.scss'

export default function Header() {
  return (
    <section className={styles.header}> 
      <h1>{g.titleCool}</h1>
      <h2>test</h2>
    </section>
  )
}