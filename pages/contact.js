import React from 'react';
import PropTypes from 'prop-types';

import { g } from '../constants/global';

import SectionCard from '../components/section_card';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SendRounded from '@mui/icons-material/SendRounded';

import clouds from '../public/clouds.jpg';

const SendMail = ({ fields }) => {
  const { subject, body } = fields;
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  const mailTo = `mailto:${g.getEmail()}${params}`;
  return (
    <Button
      sx={{ marginTop: '1rem' }}
      variant="outlined"
      href={mailTo}
      startIcon={<SendRounded />}
      disabled={!subject || !body}
    >
      Send
    </Button>
  );
};

const contactBlurb = (
  <>
    <Typography paragraph>
      My inbox is open if you&apos;d like to reach out.
    </Typography>
    <Typography paragraph>
      Let&apos;s chat so we can figure out what I can do for you.
    </Typography>
  </>
);

export default function Contact() {
  const [values, setValues] = React.useState({
    subject: '',
    body: '',
  });

  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <>
      <SectionCard
        title="Contact"
        icon="contact_mail_rounded"
        background="../public/clouds"
      >
        <>
          {contactBlurb}
          <Box component="form" autoComplete="off">
            <Stack spacing={2}>
              <TextField
                required
                size="small"
                onChange={handleChangeForm('subject')}
                id="subject-field"
                label="Subject"
              />
              <TextField
                required
                size="small"
                onChange={handleChangeForm('body')}
                multiline
                rows={4}
                id="body-field"
                label="What would you like help with?"
              />
            </Stack>
            <SendMail fields={values} />
          </Box>
        </>
      </SectionCard>
    </>
  );
}
SendMail.propTypes = {
  fields: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};
