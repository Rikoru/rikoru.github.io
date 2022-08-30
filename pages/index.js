import React from 'react';
import Card from '../components/card';
import MiniCard from '../components/mini_card';

export default function Index() {
  return (
    <Card pageTitle="Home">
      <p>This is the home page, make it basic but point to different things.</p>

      <MiniCard title="About" pageLink="about">
        <p>This is the description</p>
      </MiniCard>

      <MiniCard title="Projects" pageLink="projects">
        <p>Check out some of the projects I've worked on:</p>
        <ul>
          <li>This website</li>
        </ul>
      </MiniCard>
    </Card>
  );
}

Index.getLayout;
