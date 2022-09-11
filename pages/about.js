import React from 'react';

import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import leaves from '../public/leaves.png';

import SectionCard from '../components/section_card';

import DrawIcon from '@mui/icons-material/BrushRounded';
import CraftIcon from '@mui/icons-material/ContentCutRounded';

const about = (
  <div>
    <Typography>Mircea Taras</Typography>
    <Typography sx={{ fontStyle: 'italic' }}>
      Full-stack Software Developer &amp; Consultant
    </Typography>

    <Divider sx={{ margin: '1rem 0' }} />

    <Typography paragraph>
      Hi, my name is Mircea, among my various interests, I also moonlight as a
      technical consultant. With 3+ years in software development, I&apos;ve got
      a decent list of skills I can share with anyone that needs them.
    </Typography>
    <Typography paragraph>
      Whether you need help with your internal tools or your customer-facing
      features, I&apos;m available to chat today!
    </Typography>
    <Link href="/contact" passHref>
      <Button variant="outlined">Reach out today!</Button>
    </Link>

    <Divider sx={{ margin: '1rem 0' }} />

    <Typography paragraph>
      If you&apos;re looking for my creative endeavours:
    </Typography>

    <Stack spacing={1} direction="row">
      <Link href="https://www.instagram.com/meerkat.art/" passHref>
        <Button variant="outlined" startIcon={<DrawIcon />}>
          Art Instagram
        </Button>
      </Link>
      <Link href="https://www.instagram.com/mircea.crafts/" passHref>
        <Button variant="outlined" startIcon={<CraftIcon />}>
          Crafts Instagram
        </Button>
      </Link>
    </Stack>
  </div>
);

export default function About() {
  return (
    <>
      <SectionCard title="About" icon="person" background={leaves}>
        {about}
      </SectionCard>
    </>
  );
}
