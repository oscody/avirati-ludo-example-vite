import { Base } from "../Base/Container";
import { Walkway } from "../Walkway/Container";
import Home from "../Home/Container";
import { BaseColors, WalkwayPosition } from "../../state/interfaces";

import { BOARD_SIZE } from "../../globalConstants";
import { getStyleObject } from "../../utils";
import styles from "./Container.module.css";

export const Ludo = () => {
  return (
    <div
      className={styles.Container}
      style={getStyleObject(BOARD_SIZE, BOARD_SIZE)}
    >
      <Base baseColor={BaseColors.GREEN} />
      <Walkway position={WalkwayPosition.NORTH} />
      <Base baseColor={BaseColors.RED} />
      <Walkway position={WalkwayPosition.EAST} />
      <Home />
      <Walkway position={WalkwayPosition.WEST} />
      <Base baseColor={BaseColors.YELLOW} />
      <Walkway position={WalkwayPosition.SOUTH} />
      <Base baseColor={BaseColors.BLUE} />
    </div>
  );
};
