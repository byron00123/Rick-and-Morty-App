import React from 'react';

import { Table as T } from '@mui/material';

import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = (props) => {
  return (
    <T stickyHeader aria-label='sticky table'>
      <TableHead {...props} />
      <TableBody {...props} />
    </T>
  );
};

export default Table;