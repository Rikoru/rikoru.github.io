import React from 'react';
import { ModernPage } from '../components/page_types';
import { about } from './about';

export default function Index() {
  return (
    <ModernPage sectionTitle="home">
      <React.Fragment>{about}</React.Fragment>
    </ModernPage>
  );
}
