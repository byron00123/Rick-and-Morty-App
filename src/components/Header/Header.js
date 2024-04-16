import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import useMediaQuery from '@mui/material/useMediaQuery';

import Icon from '../Icons/Icon';

import useClickOutside from '../../hooks/useClickOutside';

import logo from '../../assets/images/logo.png';

import i18next from 'i18next';

import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

const Header = (props) => {
  const isActive = ({ isActive }) => {
    return isActive ? styles.active : '';
  };

  const [openSettings, setOpenSettings] = useState(false);
  const [hambugerOpen, setHamburgerOpen] = useState(false);

  const domNode = useClickOutside(() => setOpenSettings(false));

  const styleSettings = openSettings
    ? { display: 'block' }
    : { display: 'none' };

  const [language, setLanguage] = useState(
    localStorage.getItem('language') || 'en-GB'
  );

  const languageHandler = (lang) => {
    localStorage.setItem('language', lang);
    i18next.changeLanguage(lang);
    setLanguage(lang);
  };

  const { t } = useTranslation();
  const location = useLocation();

  const headerList = [
    {
      id: '1234-Header-Home',
      name: t('homeNav'),
      to: '/',
    },
    {
      id: '1234-Header-Characters',
      name: t('charactersNav'),
      to: '/characters',
    },
    {
      id: '1234-Header-Locations',
      name: t('locationsNav'),
      to: '/locations',
    },
    {
      id: '1234-Header-Episodes',
      name: t('episodesNav'),
      to: '/episodes',
    },
    {
      id: '1234-Header-FavChar',
      name: t('favoriteCharNav'),
      to: '/favoritechar',
    },
  ];

  const handleNavigateSearch = (pathname) => {
    if (pathname !== location.pathname) {
      props.onSetValue('');
    }
  };

  const handleNavigateIcon = (pathname) => {
    if (pathname !== location.pathname) {
      props.onSetValue('');
    }
  };

  const handleHamburger = () => {
    setHamburgerOpen(!hambugerOpen);
  };

  const media = useMediaQuery('(max-width: 666px)');

  const handleHamburgerNavigateSearch = (pathname) => {
    if (pathname !== location.pathname) {
      props.onSetValue('');
    }

    setTimeout(() => setHamburgerOpen(false), 100);
  };

  return (
    <header className={styles.container}>
      <div className={styles.container__logo}>
        <Link to={'/'} onClick={() => handleNavigateIcon('/')}>
          <img src={logo} alt='main-logo' />
        </Link>
      </div>
      <div className={styles.container__hamburger}>
        <button onClick={handleHamburger}>
          <Icon icon='HamburgerIcon' fill='#3b3e43' />
        </button>
      </div>
      <nav className={styles.container__nav}>
        <ul>
          {headerList.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                className={isActive}
                onClick={() => handleNavigateSearch(link.to)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.container__settings}>
        <div className={styles.collapse} ref={domNode}>
          <button onClick={() => setOpenSettings(!openSettings)}>
            <Icon icon={'SettingsIcon'} fill='black' />
          </button>
          <div className={styles.selections} style={styleSettings}>
            <div className={styles.selections__country}>
              <div
                className={styles.flag}
                onClick={() => languageHandler('en-GB')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/rick-sanchez.png'
                  alt='UK'
                />
                <span className={language === 'en-GB' ? styles.active : ''}>
                  EN
                </span>
              </div>
              <div
                className={styles.flag}
                onClick={() => languageHandler('sw')}
              >
                <img
                  src='https://img.icons8.com/plasticine/30/000000/morty-smith.png'
                  alt='sw'
                />
                <span className={language === 'tr-TR' ? styles.active : ''}>
                  SW
                </span>
              </div>
            </div>
            <div className={styles.selections__play}>
              <a
                href='https://www.netflix.com/title/80014749'
                target={'_blank'}
                rel='noreferrer'
              >
                <Icon icon='NetflixIcon' wh={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <nav
        className={styles.container__nav_2}
        style={{ display: hambugerOpen && media ? 'flex' : 'none' }}
      >
        <ul>
          {headerList.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to}
                className={isActive}
                onClick={() => handleHamburgerNavigateSearch(link.to)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;