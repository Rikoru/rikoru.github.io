import React from 'react';
import PropTypes from 'prop-types';

import styles from './expand_panel.module.scss';
import { styled } from '@mui/material/styles';

import MuiAccordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import ExpandMoreRounded from '@mui/icons-material/ExpandMoreRounded';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const makeSummary = (item, index) => {
  const indexName = 'panel-' + index;
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreRounded />}
      aria-controls={indexName + '-content'}
      id={indexName + '-header'}
    >
      <Typography variant="h3" sx={{ width: '33%', flexShrink: 0 }}>
        {item.title}
      </Typography>
      {item.subTitle && (
        <Typography sx={{ color: 'text.secondary' }}>
          {item.subTitle}
        </Typography>
      )}
    </AccordionSummary>
  );
};

const makePanel = (item, index, expanded, handleChange) => {
  return (
    <Accordion
      expanded={expanded === index}
      onChange={handleChange(index)}
      key={index}
    >
      {makeSummary(item, index)}
      <AccordionDetails>{item.body}</AccordionDetails>
    </Accordion>
  );
};

export default function ExpandPanel({ items }) {
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : false);
  };

  const panels = () =>
    items.map((item, index) => makePanel(item, index, expanded, handleChange));

  return <div className={styles.expandPanelWrapper}>{panels()}</div>;
}
ExpandPanel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string,
      body: PropTypes.node,
      footerContent: PropTypes.node,
    })
  ),
};
