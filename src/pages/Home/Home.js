import React from 'react';
import { useNavigate } from 'react-router';

import Icon from '../../components/Icons/Icon';
import SideTitle from '../../components/SideTitle/SideTitle';
import Search from '../../components/Search/Search';

import portalGun from '../../assets/images/portal-gun.png';
import photo from '../../assets/images/r-m-photo.png';

import { useTranslation } from 'react-i18next';

import styles from './Home.module.scss';

const Home = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleNavigateChar = () => {
    navigate('/characters');
  };

  return (
    <div className={styles.container}>
      <SideTitle />
      <div className={styles.wrapper}>
        <div className={styles.wrapper__search}>
          <div className={styles.main}>
            <div className={styles.main__title}>
              <span>Rick & Morty</span>
            </div>
            <div className={styles.main__explanation}>
              <span>{t('homeExplanation')}</span>
            </div>
            <Search value={props.value} onSetValue={props.onSetValue} />
            <div className={styles.main__find}>
              <div
                className={styles.button}
                style={{ display: props.value ? 'block' : 'none' }}
                onClick={handleNavigateChar}
              >
                <Icon icon='ArrowIcon' fill='#3b3e43' />
              </div>
            </div>
          </div>
          <div className={styles.body}>
            <div className={styles.shadow}>
              <img src={portalGun} alt='portal-gun' />
            </div>
          </div>
        </div>
        <div className={styles.wrapper__picture}>
          <div className={styles.shadow}>
            <img src={photo} alt='rick-and-morty' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;