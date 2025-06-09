import React from "react";
import { WALKWAY_LENGTH, WALKWAY_WIDTH } from '../../globalConstants';
import { WalkwayPosition } from '../../state/interfaces';
import { getStyleObject } from '../../utils';
import styles from './Container.module.css';
import { Cell } from './components/Cell';


interface IWalkwayProps {
  position: WalkwayPosition;
}

const Walkway: React.FC<IWalkwayProps> = ({ position }) => {

  const isHorizontalWalkway = React.useCallback(
    () => [WalkwayPosition.EAST, WalkwayPosition.WEST].includes(position),
    [position]
  );

  // This replaces the class's renderCells method
  const renderCells = React.useCallback(() => {
    const isHorizontal = isHorizontalWalkway();
    const cells = [];

    if (isHorizontal) {
      for (let row = 0; row < WALKWAY_WIDTH; row++) {
        for (let column = 0; column < WALKWAY_LENGTH; column++) {
          cells.push(
            <Cell
              key={`cell-${row}-${column}`}
              column={column}
              row={row}
              walkwayPosition={position}
            />
          );
        }
      }
    } else {
      for (let row = 0; row < WALKWAY_LENGTH; row++) {
        for (let column = 0; column < WALKWAY_WIDTH; column++) {
          cells.push(
            <Cell
              key={`cell-${row}-${column}`}
              column={column}
              row={row}
              walkwayPosition={position}
            />
          );
        }
      }
    }

    return cells;
  }, [isHorizontalWalkway, position]);

  const isHorizontal = isHorizontalWalkway();

  return (
    <div
      className={styles.Container}
      style={
        isHorizontal
          ? getStyleObject(WALKWAY_LENGTH, WALKWAY_WIDTH)
          : getStyleObject(WALKWAY_WIDTH, WALKWAY_LENGTH)
      }
    >
      {renderCells()}
    </div>
  );
};

export { Walkway };
