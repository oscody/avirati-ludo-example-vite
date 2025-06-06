import React from 'react';

import { WALKWAY_LENGTH, WALKWAY_WIDTH } from '../../globalConstants';
import { WalkwayPosition } from '../../interfaces';
import { getStyleObject } from '../../utils';
import styles from './Container.module.css';
import { Cell } from './components/cell';


interface IWalkwayProps {
  position: WalkwayPosition;
}




const Walkway: React.FC<IWalkwayProps> = ({ position }) => {

  const isHorizontal = [
    WalkwayPosition.EAST,
    WalkwayPosition.WEST,
  ].includes(position);


  const  renderCells = () => {
    const cells = [];

    for (let i = 0; i < WALKWAY_LENGTH * WALKWAY_WIDTH; i++) {
      cells.push(
        <Cell key={i}/>,
      )
    }

    return cells;
  }

  return (
    <div
      className={styles.Container}
      style={
          isHorizontal
          ? getStyleObject(WALKWAY_LENGTH, WALKWAY_WIDTH)
          : getStyleObject(WALKWAY_WIDTH, WALKWAY_LENGTH)
  
      }>
        {
          renderCells()
        }
    </div>
  );


  
};

export { Walkway };