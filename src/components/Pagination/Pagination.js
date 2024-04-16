import React from 'react';

import { Pagination as P } from '@mui/material';

import styles from './Pagination.module.scss';

const Pagination = ({ pageData, currentPage, onSetCurrentPage }) => {
  const handleChangePage = (event, value) => {
    onSetCurrentPage(value);
  };
  return (
    <div className={styles.pagination}>
      <P
        count={pageData}
        shape='rounded'
        page={currentPage}
        onChange={handleChangePage}
      />
    </div>
  );
};

export default Pagination;