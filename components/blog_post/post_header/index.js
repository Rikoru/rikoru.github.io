import React from 'react';
import PropTypes from 'prop-types';

import Link from 'next/link';
import Image from 'next/image';

import { Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MuiDivider from '@mui/material/Divider';
import BackArrow from '@mui/icons-material/ArrowBackIosNewRounded';

import PostTitle from '../post_title';

import clouds from '../../../public/clouds.jpg';

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
        <Stack direction="row" spacing={1}>
          <Typography variant="subtitle2">{date}</Typography>
          <Avatar sx={{ width: 24, height: 24 }}>
            <Image src={clouds} width={24} height={24} />
          </Avatar>
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
