import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MuiDivider from '@mui/material/Divider';
import BackArrow from '@mui/icons-material/ArrowBackIosNewRounded';

import profile from '../../../public/profile.png';

import PostTitle from '../post_title';

export const Divider = () => (
  <MuiDivider variant="fullWidth" sx={{ margin: '0.5rem' }} />
);

export default function PostHeader({ title, coverImage, date }) {
  const ImageSection = (coverImage) => (
    <React.Fragment>
      {coverImage && <img aria-hidden="true" src={coverImage} loading="lazy" />}
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Link href="/posts" passHref>
          <IconButton aria-label="Go back">
            <BackArrow />
          </IconButton>
        </Link>
        <PostTitle title={title} />
        <Stack direction="column" alignItems="flex-end">
          <Avatar sx={{ width: 24, height: 24 }}>
            <Image src={profile} width={24} height={24} />
          </Avatar>
          <Typography variant="subtitle2">{date}</Typography>
        </Stack>
      </Stack>

      <Divider />
      {coverImage && <ImageSection coverImage={coverImage} />}
    </React.Fragment>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  date: PropTypes.string,
};
