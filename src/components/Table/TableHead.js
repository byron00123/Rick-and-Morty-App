import { useState } from 'react';

import { TableCell, TableHead as TH, TableRow } from '@mui/material';

import Icon from '../Icons/Icon';

import styles from './Table.module.scss';

const TableHead = ({ onSort, onSortName, data }) => {
  const columns = data.cells;

  const [orderState, setOrderState] = useState({
    [columns[0].filter]: true,
    [columns[1].filter]: true,
    [columns[2].filter]: true,
    [columns[3].filter]: true,
  });

  const handleSortOrder = (column) => {
    if (column.id !== 5) {
      orderState[column.filter] ? onSort('a-z') : onSort('z-a');
      setOrderState({
        ...orderState,
        [column.filter]: !orderState[column.filter],
      });
      onSortName(column.filter);
    }
  };
  return (
    <TH>
      <TableRow>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            style={{ width: column.width }}
            sx={{
              backgroundColor: '#1d1f25',
              color: 'white',
              fontFamily: 'Roboto',
            }}
            onClick={() => handleSortOrder(column)}
          >
            <div className={column.id !== 5 ? styles.table__row : ''}>
              {column.label}
              {column.id !== 5 && (
                <Icon
                  icon={
                    orderState[column.filter] ? 'UpArrowIcon' : 'DownArrowIcon'
                  }
                  fill='white'
                />
              )}
            </div>
          </TableCell>
        ))}
      </TableRow>
    </TH>
  );
};

export default TableHead;