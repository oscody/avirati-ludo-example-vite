import React from 'react';

import { HOME_SIZE } from '../../globalConstants';
import { getStyleObject } from '../../utils';

const Home = () => {
  return (
    <div style={getStyleObject(HOME_SIZE, HOME_SIZE)} />
  );
};

export default Home;
