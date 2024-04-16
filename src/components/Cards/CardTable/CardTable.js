import { Paper, TableContainer } from '@mui/material';

import Table from '../../Table/Table';

import Dialog from '../../Dialog/Dialog';

import useTable from '../../../hooks/useTable';

const EpisodeCard = (props) => {
  const { open, handleClose, handleOpen, informations } = useTable();

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 750 }}>
        <Table {...props} onOpen={handleOpen} />
      </TableContainer>
      <Dialog onClose={handleClose} open={open} informations={informations} />
    </Paper>
  );
};

export default EpisodeCard;