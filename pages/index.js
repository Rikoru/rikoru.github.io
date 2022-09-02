import React from 'react';
import Card from '../components/card';
import MiniCard from '../components/mini_card';

export default function Index() {
  const projects = (
    <>
      <MiniCard title="My Personal Site" pageLink="about">
        <p>This is the description.</p>
      </MiniCard>

      <MiniCard title="Other" pageLink="projects">
        <p>Check out some of the projects I{'\''}ve worked on:</p>
        <ul>
          <li>temp</li>
        </ul>
      </MiniCard>
    </>
  );

  return (
    <>
      <Card title="Home" icon="person">
        <p>
          This is the home page, make it basic but point to different things.
        </p>
      </Card>

      <Card title="Projects" icon="list">
        <p>Here are a few of my recent (public) projects</p>
        {projects}
      </Card>

      <Card title="Portfolio" icon="book">
        <p>Can I also do a portfolio.</p>
      </Card>

      <Card title="Bloop" icon="book">
        <p>is big</p>
        <p>Problematic even.</p>
      </Card>
    </>
  );
}

Index.getLayout;
