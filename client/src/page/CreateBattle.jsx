import React from 'react';

import { PageHOC } from '../components';

const CreateBattle = () => {
  return (
    <div>
    </div>
  )
};

export default PageHOC(
    CreateBattle,
  <>
    Create <br /> a new Battle
  </>,
  <>
   Create your own Battle <br /> and invite your friends
  </>,
);