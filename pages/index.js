import { Stack } from '@mui/material';
import React from 'react';

import About from '../components/subsections/about';
import Contact from '../components/subsections/contact';

import Portfolio from '../components/subsections/portfolio';

export default function Index() {
  return (
    <>
      <Stack spacing={2} sx={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
        <About id="about"></About>
        <Portfolio id="portfolio"></Portfolio>
        <Contact id="contact"></Contact>
      </Stack>
    </>
  );
}
