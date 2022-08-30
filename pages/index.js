import React from 'react'
import Card from '../components/card';
import MiniCard from '../components/mini_card';

export default function Index() {
  return (
    <Card pageTitle='Home'>
      <p>This is the home page, make it basic but point to different things.</p>

      <MiniCard>
        <p>About Mini-card?</p>
      </MiniCard>

      <p>Projects Mini-card?</p>
    </Card>
  );
}

Index.getLayout;
