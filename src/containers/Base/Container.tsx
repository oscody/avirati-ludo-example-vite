import React from 'react';
import { BASE_SIZE, INNER_BASE_SIZE } from '../../globalConstants';
import { BaseColors } from '../../interfaces';
import { getStyleObject } from '../../utils';
import { CoinPlaceholder } from './components/CoinPlaceholder';
import styles from './Container.module.css';

interface IBaseProps {
  baseColor: BaseColors;
}

export const Base: React.FC<IBaseProps> = ({ baseColor }) => (
  <div className={styles.OuterContainer} style={getStyleObject(BASE_SIZE, baseColor)}>
    <div className={styles.InnerContainer} style={getStyleObject(INNER_BASE_SIZE)}>
      <CoinPlaceholder baseColor={baseColor} />
      <CoinPlaceholder baseColor={baseColor} />
      <CoinPlaceholder baseColor={baseColor} />
      <CoinPlaceholder baseColor={baseColor} />
    </div>
  </div>
);