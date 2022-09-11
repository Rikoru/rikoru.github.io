import React from 'react';
import '../styles/global.scss';
import Layout from '../components/layout';

// Portals pass props
// eslint-disable-next-line react/prop-types
function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}

export default App;
