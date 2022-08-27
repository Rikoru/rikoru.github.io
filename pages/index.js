import Head from 'next/head'
import Layout from '../components/layout'

export default function Index() {
  return (
    <section>
      <h2>Index</h2>

      <p>
        This is the home page, make it basic but point to different things.
      </p>

      <p>
        Explain what I can do!
      </p>

      <p>
        Projects.
      </p>


      {/* {ProjectCardsComponent} */}
    </section>
    // <div className='container'>
    //   <Head>
    //     <title>{g.title}</title>
    //     <meta name="description" content="{title}" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <main className='main'>
    //     <header className={styles.header}>
    //       <h1 className={styles.title}>
    //         {titleCool}
    //       </h1>
    //     </header>
    //     <p>Work in Progress</p>
    //   </main>
    //   <footer className={styles.footer}>
    //     <p>
    //       <Link href={licenseUri}>
    //         <a>{license}</a>
    //       </Link> 
    //     </p>
    //   </footer>
    // </div>
  )
}

Index.getLayout
