import React from 'react';

import SideTitleLineDot from './SideTitleLineDot';
import Icon from '../Icons/Icon';

import styles from './SideTitle.module.scss';

const SideTitle = () => {
  return (
    <div className={styles.wrapper}>
      <SideTitleLineDot />
      <span className={styles.wrapper__title}>R & M</span>
      <SideTitleLineDot direction={'reverse'} />
      <a
        className={styles.wrapper__icon}
        href='https://www.linkedin.com/in/byronomondi/'
        target={'_blank'}
        rel='noreferrer'
      >
        <Icon icon='LinkedInIcon' fill='#3b3e43' />
      </a>
      <a
        className={styles.wrapper__icon}
        href='https://github.com/byron00123/Rick-and-Morty-App'
        target={'_blank'}
        rel='noreferrer'
      >
        <Icon icon='GitHubIcon' fill='#3b3e43' />
      </a>
      <a
        className={styles.wrapper__icon}
        href='https://rickandmortyapi.com/'
        target={'_blank'}
        rel='noreferrer'
      >
        <Icon icon='MainIcon' fill='#3b3e43' wh={50} />
      </a>
    </div>
  );
};

export default SideTitle;