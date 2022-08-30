import React from 'react'
import '../styles/global.scss'
import Layout from '../components/global/layout/layout'

// Portals pass props
// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
