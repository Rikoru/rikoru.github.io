import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import leaves from '../public/leaves.png';

import getProjects from '../constants/projects';
import SectionCard from '../components/section_card';
import ExpandPanel from '../components/expand_panel';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import DrawIcon from '@mui/icons-material/BrushRounded';
import CraftIcon from '@mui/icons-material/ContentCutRounded';

const about = (
  <div>
    <Typography>(Photo goes here)</Typography>
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
      I&apos;m aiming to become more of a generalist, but my skills fall more
      into software development than in dev-ops. I&apos;m available to chat,
      whether you need help with your internal tools or your customer-facing
      features.{' '}
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

// const prepProjectsList = (projects) => {
//   return projects.map((project) => {
//     return (
//       <MiniCard
//         title={project.title}
//         subTitle={project.subTitle}
//         pageLink={project.pageLink}
//       >
//         {project.body}
//       </MiniCard>
//     );
//   });
// };

export default function Index() {
  const projects = useMemo(() => getProjects().slice(0, 2));
  const projectsList = useMemo(
    () => <ExpandPanel items={projects} />,
    projects
  );

  return (
    <>
      <Image src={leaves} layout="responsive" quality={100} />

      <SectionCard title="About" icon="person">
        {about}
      </SectionCard>

      <SectionCard title="Projects" icon="list">
        <>
          <Typography paragraph>
            Here are a few of my recent projects. This area will continue to
            change as new ideas percolate. For a full list of projects,{' '}
            <Link href="/portfolio">check out my portfolio.</Link>
          </Typography>
          {projectsList}
        </>
      </SectionCard>
    </>
  );
}

Index.getLayout;
