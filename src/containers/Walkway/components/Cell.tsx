import React from "react";

import { CELL_SIZE } from "../../../globalConstants";
import { getStyleObject } from "../../../utils";

import styles from "./Cell.module.css";
import { WalkwayPosition } from '../../../state/interfaces';


interface ICellProps {
  row: number;
  column: number;
  walkwayPosition: WalkwayPosition;
}

export const Cell = ({ column, row, walkwayPosition }: ICellProps) => {
  return (
    <div
      className={styles.Container}
      style={getStyleObject(CELL_SIZE, CELL_SIZE)}
      data-row={row}
      data-column={column}
      data-position={walkwayPosition}
    />
  );
};
