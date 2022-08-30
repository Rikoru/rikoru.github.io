import styles from './layout.module.scss'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <main>
      <section className={styles.headerContainer}>
        <Header></Header>
      </section>
      <section className={styles.main}>
        {children}
      </section>
      <section className={styles.footerContainer}>
        <Footer></Footer>
      </section>
    </main>
  )
}