import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.scss';
import Layout from '../components/layout';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <React.Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
