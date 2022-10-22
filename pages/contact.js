import React from 'react';
import PropTypes from 'prop-types';

import { g } from '../constants/global';
import { getSectionPropsByRoute } from '../constants/sections';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import SendRounded from '@mui/icons-material/SendRounded';
import { ModernPage } from '../components/page_types';

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
  <React.Fragment>
    <Typography variant="h3">
      My inbox is open if you&apos;d like to reach out.
    </Typography>
    <Typography variant="h4">
      Let&apos;s chat so we can figure out what I can do for you.
    </Typography>
  </React.Fragment>
);

export default function Contact({ sectionTitle, icon }) {
  const [values, setValues] = React.useState({
    subject: '',
    body: '',
  });

  const handleChangeForm = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <React.Fragment>
      <ModernPage sectionTitle={sectionTitle} icon={icon}>
        <React.Fragment>
          {contactBlurb}
          <Box sx={{ marginTop: '2rem' }} component="form" autoComplete="off">
            <Stack spacing={2}>
              <TextField
                required
                onChange={handleChangeForm('subject')}
                id="subject-field"
                label="Subject"
              />
              <TextField
                required
                onChange={handleChangeForm('body')}
                multiline
                rows={4}
                id="body-field"
                label="What would you like help with?"
              />
            </Stack>
            <SendMail fields={values} />
          </Box>
        </React.Fragment>
      </ModernPage>
    </React.Fragment>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ...getSectionPropsByRoute('contact'),
    },
  };
}
SendMail.propTypes = {
  fields: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

Contact.propTypes = {
  sectionTitle: PropTypes.string,
  icon: PropTypes.string,
};
