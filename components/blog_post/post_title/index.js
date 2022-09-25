import Typography from '@mui/material/Typography';

export default function PostTitle({ title }) {
  return (
    <Typography variant="h4" sx={{ fontSize: '4rem', fontWeight: '600' }}>
      {title}
    </Typography>
  );
}
