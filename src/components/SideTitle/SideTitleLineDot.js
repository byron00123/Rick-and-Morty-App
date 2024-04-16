import React from 'react';

import Dot from '../Dot/Dot';
import LineVertical from '../LineVertical/LineVertical';

import styles from './SideTitle.module.scss';

const SideTitleLineDot = ({ direction }) => {
  const style = direction === 'reverse' ? styles.reverse : styles.group;
  return (
    <div className={style}>
      <div className={styles.dots}>
        <Dot />
        <Dot />
        <Dot />
      </div>
      <LineVertical />
    </div>
  );
};

export default SideTitleLineDot;