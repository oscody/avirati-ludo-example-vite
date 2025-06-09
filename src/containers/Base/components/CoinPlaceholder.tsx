import React from "react";
import { COIN_PLACEHOLDER_SIZE, COIN_SIZE } from "../../../globalConstants";
import { BaseColors } from "../../../state/interfaces";
import { getStyleObject } from "../../../utils";
import styles from "./CoinPlaceholder.module.css";

interface ICoinPlaceholderProps {
  baseColor: BaseColors;
}

export const CoinPlaceholder: React.FC<ICoinPlaceholderProps> = ({
  baseColor,
}) => (
  <div
    className={styles.Container}
    style={getStyleObject(COIN_PLACEHOLDER_SIZE, COIN_PLACEHOLDER_SIZE)}
    >
    <div
      className={styles.Circle}
      style={getStyleObject(COIN_SIZE, COIN_SIZE, baseColor)}
      />
  </div>
);
