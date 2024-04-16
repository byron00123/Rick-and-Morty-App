import React from 'react';
import { useNavigate } from 'react-router';

import { useTranslation } from 'react-i18next';

import notFound from '../../assets/images/r-m-portal.png';

import styles from './NoData.module.scss';

const NoData = ({ url, text, children }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleNavigate = () => {
    navigate(url);
  };

  return (
    <div className={styles.container}>
      {text && (
        <div className={styles.container__nav} onClick={handleNavigate}>
          <span>{t(text)}</span>
        </div>
      )}
      {notFound && (
        <div className={styles.container__image}>
          <img src={notFound} alt='no-match' />
        </div>
      )}
      {children ?? ''}
    </div>
  );
};

export default NoData;