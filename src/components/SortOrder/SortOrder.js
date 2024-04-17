import React, { useState } from 'react';
import Icon from '../../components/Icons/Icon';
import useClickOutside from '../../hooks/useClickOutside';
import { useTranslation } from 'react-i18next';
import styles from './SortOrder.module.scss';

const SortOrder = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState('all'); // New state for filter

  const domNode = useClickOutside(() => setOpen(false));

  const handleSortDefault = () => {
    setOpen(false);
    props.onSort('default');
    setFilter('all'); // Reset filter on default sort
  };

  const handleFilterChange = (newFilter) => { // New function for filter change
    setFilter(newFilter);
    if (props.onFilter) props.onFilter(newFilter); // Call onFilter prop if available
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
        {/* Existing sort options */}
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
        {/* New filter options */}
        <span onClick={() => handleFilterChange('alive')} className={filter === 'alive' ? styles.active : ''}>
          {t('alive')}
        </span>
        <span onClick={() => handleFilterChange('dead')} className={filter === 'dead' ? styles.active : ''}>
          {t('dead')}
        </span>
        <span onClick={() => handleFilterChange('unknown')} className={filter === 'unknown' ? styles.active : ''}>
          {t('unknown')}
        </span>
      </div>
    </div>
  );
};

export default SortOrder;
