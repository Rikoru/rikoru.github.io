import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { title, titleCool, license, licenseUri } from '/constants/home_app.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="{title}" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {titleCool}
          </h1>
        </header>
        <p>Work in Progress</p>
      </main>

      <footer className={styles.footer}>
        <p>
          <Link href={licenseUri}>
            <a>{license}</a>
          </Link> 
        </p>
      </footer>
    </div>
  )
}
