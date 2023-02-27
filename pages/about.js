import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import MuiDivider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import Image from 'next/image';
import clouds from '../public/clouds.jpg';

import { getSectionPropsByRoute } from '../constants/sections';
import { ModernPage } from '../components/page_types';

import { g } from '../constants/global';

const Divider = styled(MuiDivider)({
  margin: '1rem 0',
});

export const about = (
  <div>
    <Typography paragraph>
      Hi, I&apos;m Mircea (pronounced &quot;meer-cha&quot;), and I&apos;m a
      full-stack software developer from the Vancouver, BC area. I studied at
      SFU and have been working full-time for 3+ years. While I was in school I
      became interested in NLP, AI, and ML towards the end of my degree, but
      haven&apos;t had much of an opportunity to explore them since.
    </Typography>
    <Typography paragraph>
      I&apos;m a full-stack developer with a passion for building high-quality
      web and mobile applications. If you&apos;re looking for someone who can
      bring a sense of humour to even the most complex coding challenges, then
      you&apos;ve come to the right place.
    </Typography>
    <Typography paragraph>
      I specialize in a range of technologies including React, React Native,
      Node, Python, and Scala. I&apos;m a lifelong learner and am always looking
      to expand my skill-set. I&apos;m constantly tinkering away on side
      projects, and love to experiment with new tools and languages.
    </Typography>
    <Typography paragraph>
      When it comes to my work, I&apos;m a stickler for detail, and take pride
      in writing clean, well-documented code. That being said, I also believe
      that levity is an essential ingredient in the development process. After
      all, if you can&apos;t laugh at yourself when you&apos;re knee-deep in
      debugging, then you&apos;re in for a tough ride.
    </Typography>
    <Typography paragraph>
      In addition to my technical expertise, I also have a strong interest in
      mentoring and knowledge sharing. I&apos;m always eager to help other
      developers grow and learn, and I believe that building strong
      relationships with others in the tech community is essential for success.
      Whether you&apos;re a fellow developer looking for a collaborator, or a
      business owner seeking to bring your vision to life, I&apos;m excited to
      work with you. So, take a look around my portfolio and get in touch.
    </Typography>
    <Link href="/contact" passHref>
      <a>
        <Typography variant="h4">
          Let&apos;s build something great together!
        </Typography>
      </a>
    </Link>
  </div>
);

export default function About({ sectionTitle, icon }) {
  const profileSize = 200;

  const ProfilePicture = ({ profilePic, profileSize }) => (
    <Avatar sx={{ width: profileSize, height: profileSize }}>
      <Image
        src={profilePic}
        alt="Picture of the author"
        layout="fill"
        priority
      />
    </Avatar>
  );

  const NameTitle = ({ name, title, subTitle = null }) => (
    <Stack sx={{ marginRight: '12px' }} alignItems="flex-end">
      <Typography variant="h3" sx={{ lineHeight: '3rem' }}>
        {name}
      </Typography>
      <Typography variant="h4" sx={{ lineHeight: '2rem', textAlign: 'right' }}>
        {title}
      </Typography>
      {subTitle && (
        <Typography variant="h4" sx={{ lineHeight: '1.5rem' }}>
          {subTitle}
        </Typography>
      )}
    </Stack>
  );

  const Intro = () => (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <NameTitle
        name={g.author}
        title="Full-stack Software Developer"
        subTitle="&amp; Technical Consultant"
      />
      <ProfilePicture profilePic={clouds} profileSize={profileSize} />
    </Stack>
  );

  return (
    <React.Fragment>
      <ModernPage sectionTitle={sectionTitle} icon={icon}>
        <Intro />
        <Divider />
        {about}
      </ModernPage>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...getSectionPropsByRoute('about'),
    },
  };
}

About.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  profilePic: PropTypes.string,
  profileSize: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
};
