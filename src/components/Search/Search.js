import React from 'react';

import Icon from '../Icons/Icon';

import { useTranslation } from 'react-i18next';

import styles from './Search.module.scss';

const Search = (props) => {
  const { t } = useTranslation();

  const { value, onSetValue } = props;

  return (
    <div className={styles.search}>
      <input
        type={'text'}
        value={value}
        onChange={(e) => onSetValue(e.target.value)}
        placeholder={t('searchPlaceholder')}
      />
      <div className={styles.search__icon}>
        <Icon icon={'MagnifyingGlassIcon'} fill='black' />
      </div>
      <div
        className={styles.search__close}
        style={{ display: value ? 'block' : 'none' }}
        onClick={() => onSetValue('')}
      >
        <Icon icon={'CircleCloseIcon'} fill='black' />
      </div>
    </div>
  );
};

export default Search;