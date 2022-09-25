import { Avatar, Divider, Typography } from '@mui/material';
import { g } from '../../../constants/global';
import PropTypes from 'prop-types';
import PostTitle from '../post_title';

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle title={title} />
      <Typography variant="subtitle">
        {g.author}, {date}
      </Typography>
      <Divider />
    </>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string,
  coverImage: PropTypes.string,
  date: PropTypes.string,
};
