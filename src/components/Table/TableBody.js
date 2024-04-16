import { TableBody as TB, TableCell, TableRow } from '@mui/material';

import { useTranslation } from 'react-i18next';

const TableBody = ({ data, onSortOrder, onOpen }) => {
  const allData = data.results;
  const cells = data.cells;

  const { t } = useTranslation();

  return (
    <TB>
      {allData.sort(onSortOrder).map((data) => {
        const index = data.created.indexOf('T');
        const created = data.created.slice(0, index);
        return (
          <TableRow
            hover
            role='checkbox'
            tabIndex={-1}
            key={data.id}
            sx={{
              backgroundColor: '#3b3e43',
              ':hover': {
                backgroundColor: '#585e66 !important',
                cursor: 'default',
              },
            }}
          >
            {cells
              .filter((cell) => cell.id !== 5)
              .map((cell) => (
                <TableCell
                  sx={{ color: '#fff', fontFamily: 'Roboto' }}
                  key={cell.id}
                >
                  {cell.id !== 4 ? data[cell.filter] : created}
                </TableCell>
              ))}
            <TableCell
              sx={{
                textDecoration: 'underline',
                opacity: '0.75',
                color: '#fff',
                fontFamily: 'Roboto',
                ':hover': {
                  textDecoration: 'none',
                  opacity: 1,
                  cursor: 'pointer',
                },
              }}
              onClick={() => onOpen(data[cells[4].filter])}
            >
              {t('cellCharContent')}
            </TableCell>
          </TableRow>
        );
      })}
    </TB>
  );
};

export default TableBody;