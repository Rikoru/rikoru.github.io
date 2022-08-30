import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (
    <section>
      <h2>Index</h2>

      <Link href="about">testtest</Link>

      {/* <Card>

      </Card> */}

      <p>This is the home page, make it basic but point to different things.</p>

      <p>Explain what I can do!</p>

      <p>Projects.</p>

      {/* {ProjectCardsComponent} */}
    </section>
  );
}

Index.getLayout;
