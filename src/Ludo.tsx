import React from 'react';

import { Base } from './containers/Base/Container';
import { Walkway } from './containers/Walkway/Container';
import Home from './containers/Home/Container';
import { BaseColors, WalkwayPosition } from './interfaces';

import { BOARD_SIZE } from './globalConstants';
import { getStyleObject } from './utils';
import styles from './Ludo.module.css';

export const Ludo = () => {
    return (
      <div className={styles.Container} style={getStyleObject(BOARD_SIZE, BOARD_SIZE)}>
        <Base baseColor={BaseColors.GREEN}/>
        <Walkway position={WalkwayPosition.NORTH}/>
        <Base baseColor={BaseColors.RED}/>
        <Walkway position={WalkwayPosition.EAST}/>
        <Home />
        <Walkway position={WalkwayPosition.WEST}/>
        <Base baseColor={BaseColors.YELLOW}/>
        <Walkway position={WalkwayPosition.SOUTH}/>
        <Base baseColor={BaseColors.BLUE}/>
      </div>
    );
  };