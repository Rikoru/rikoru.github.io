import React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

import MuiDivider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MuiAvatar from '@mui/material/Avatar';
import Link from 'next/link';
import Image from 'next/image';
import profile from '../public/profile.png';

import { getSectionPropsByRoute } from '../constants/sections';
import { ModernPage } from '../components/page_types';

import { g } from '../constants/global';
import theme from '../styles/theme';

const Divider = styled(MuiDivider)({
  margin: '1rem 0',
});

const Avatar = styled(MuiAvatar)({
  marginTop: theme.sizing.headerOffset,
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

  const NameTitle = ({ name, title, subTitle }) => (
    <Stack>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h4" sx={{ fontStyle: 'italic' }}>
        {title}
      </Typography>
      {subTitle && (
        <Typography variant="h5" sx={{ fontStyle: 'italic' }}>
          {subTitle}
        </Typography>
      )}
    </Stack>
  );

  const about = (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <NameTitle
          name={g.author}
          title="Full-stack Software Developer"
          subTitle="Technical Consultant"
        />
        <ProfilePicture profilePic={profile} profileSize={profileSize} />
      </Stack>
      <Divider />

      <Typography paragraph>
        Suspendisse potenti. Curabitur dui magna, euismod dignissim pellentesque
        ac, ultricies vel enim. Sed venenatis leo nec massa tincidunt, ut
        imperdiet nibh venenatis. Aenean libero enim, accumsan ut laoreet et,
        euismod sit amet orci. Donec in convallis neque. Aenean non tellus et
        justo convallis tempor eu vel neque. Morbi eu blandit purus, sed mollis
        dui. Aliquam vehicula pharetra bibendum. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Fusce sit amet
        nisl ut mi aliquet porta vel vitae ligula. Quisque sed tristique orci.
        Nullam sit amet quam eget orci facilisis mattis a non ligula.
      </Typography>
      <Typography paragraph>
        Fusce consectetur facilisis velit, sit amet tincidunt tellus porta non.
        Praesent sit amet pharetra sem. Ut blandit gravida lacus, at rhoncus
        massa lobortis ut. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Vivamus vel imperdiet est. Sed vitae ullamcorper neque, sed
        efficitur turpis. Cras ut blandit quam. In ac porta nulla. Curabitur
        condimentum eget orci quis pellentesque. Donec cursus consectetur magna,
        et fringilla dolor fringilla in. Fusce sed quam suscipit, malesuada
        mauris quis, luctus dui.
      </Typography>
      <Link href="/contact" passHref>
        <a>
          <Typography variant="h4">Reach out today!</Typography>
        </a>
      </Link>

      <Divider />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
        fringilla leo. Mauris mi orci, iaculis dictum lacus vitae, dapibus
        rhoncus lorem. Nulla vitae viverra risus, vel imperdiet dui. Praesent
        blandit massa et tempor fringilla. Fusce sit amet vulputate ex. Sed
        rhoncus lacus sit amet mauris suscipit, et viverra libero varius.
        Phasellus et dolor felis. Quisque varius cursus lectus vitae commodo.
        Sed feugiat mi velit, nec blandit lacus scelerisque at.
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
