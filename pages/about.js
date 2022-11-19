import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import MuiDivider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../public/profile.png';

import { getSectionPropsByRoute } from '../constants/sections';
import { ModernPage } from '../components/page_types';

import { g } from '../constants/global';

const Divider = styled(MuiDivider)({
  margin: '1rem 0',
});

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
      <ProfilePicture profilePic={profile} profileSize={profileSize} />
    </Stack>
  );

  const about = (
    <div>
      <Intro />
      <Divider />
      <Typography paragraph>
        Hi, I'm Mircea (pronounced "meer-cha"), and I'm a full-stack software
        developer from the Vancouver, BC area. I studied at SFU and have been
        working full-time for 3+ years. While I was in school I became
        interested in NLP, AI, and ML towards the end of my degree, but haven't
        had much of an opportunity to explore them since. Most of my front-end
        experience is in React, though I have also worked with React Native,
        Angular, and AngularJS. On the back-end, I've worked with Scala, Java,
        and PHP, and I also have some Python experience.
      </Typography>
      <Typography paragraph>
        I'm comfortable anywhere in the tech stack, and I'm currently looking
        towards gaining more dev-ops skills.
      </Typography>
      <Link href="/contact" passHref>
        <a>
          <Typography variant="h4">Reach out today!</Typography>
        </a>
      </Link>

      <Divider />
      <Typography paragraph>
        My partner and I love to take our 2 dogs out on hikes and various other
        adventures, which is something that BC has been great for.
      </Typography>
      <Typography paragraph>
        Nulla ut purus sollicitudin, consequat odio sed, ornare nulla. In
        pretium molestie tincidunt. Maecenas rutrum vulputate semper. Fusce
        consectetur eros nec turpis facilisis, ac tempus elit iaculis. Nulla
        facilisis pretium neque. Vestibulum placerat, massa eu hendrerit
        egestas, tellus enim eleifend dolor, in pulvinar nisi tellus pretium
        nunc. Suspendisse potenti. Proin ligula eros, congue vestibulum cursus
        vel, suscipit nec risus. Vestibulum ornare lorem eget nunc egestas
        sodales. Nullam gravida scelerisque leo, ac varius nisi bibendum et.
        Cras pretium, tortor sed tristique malesuada, tortor metus interdum
        ligula, eget viverra tellus libero a massa. Mauris dictum suscipit
        volutpat. Maecenas bibendum ornare nisi, varius pellentesque urna
        condimentum at. Fusce lobortis augue dignissim interdum rutrum. Nulla
        facilisi. Sed semper bibendum accumsan.
      </Typography>
      <Typography paragraph>
        Donec blandit neque sed libero interdum, sit amet venenatis ligula
        tincidunt. In hendrerit quis turpis non porttitor. Praesent rhoncus
        consequat augue, sit amet viverra metus sodales sit amet. Nunc rhoncus
        condimentum massa fermentum gravida. Praesent id ligula mattis est
        auctor malesuada a vel urna. Vestibulum sed enim efficitur, pretium ex
        rutrum, vestibulum neque. Sed malesuada nisl a dolor finibus porttitor.{' '}
      </Typography>
    </div>
  );

  return (
    <React.Fragment>
      <ModernPage sectionTitle={sectionTitle} icon={icon}>
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
};
