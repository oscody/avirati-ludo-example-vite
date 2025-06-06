import React from "react";

import { CELL_SIZE } from "../../../globalConstants";
import { getStyleObject } from "../../../utils";

import styles from "./Cell.module.css";

export const Cell = () => {
  return (
    <div
      className={styles.Container}
      style={getStyleObject(CELL_SIZE, CELL_SIZE)}
    />
  );
};
