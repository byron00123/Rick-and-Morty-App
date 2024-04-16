import React, { useState } from 'react';

import Icon from '../../components/Icons/Icon';

import useClickOutside from '../../hooks/useClickOutside';

import { useTranslation } from 'react-i18next';

import styles from './SortOrder.module.scss';

const SortOrder = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const domNode = useClickOutside(() => setOpen(false));

  const handleSortDefault = () => {
    setOpen(false);
    props.onSort('default');
  };

  return (
    <div className={styles.sort} ref={domNode}>
      <span onClick={handleSortDefault}>{t('sortText')}</span>
      <div className={styles.sort__icon} onClick={() => setOpen(!open)}>
        <Icon icon={'SortIcon'} fill='#3b3e43' />
      </div>
      <div
        className={styles.sort__option}
        style={{ display: open ? 'flex' : 'none' }}
      >
        <span
          onClick={() => props.onSort('a-z')}
          className={props.sort === 'a-z' ? styles.active : ''}
        >
          A &gt; Z
        </span>
        <span
          onClick={() => props.onSort('z-a')}
          className={props.sort === 'z-a' ? styles.active : ''}
        >
          Z &gt; A
        </span>
      </div>
    </div>
  );
};

export default SortOrder;