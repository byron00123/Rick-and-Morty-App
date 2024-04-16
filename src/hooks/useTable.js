import { useState } from 'react';

const useTable = () => {
  const [open, setOpen] = useState(false);
  const [informations, setInformations] = useState('');

  let digit = /\d+/;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (info) => {
    let uri = '';

    for (let i of info) {
      uri += i.match(digit)[0] + ',';
    }

    setInformations(uri);
    setOpen(true);
  };

  return {
    informations,
    open,
    handleClose: () => handleClose(),
    handleOpen: (info) => handleOpen(info),
  };
};

export default useTable;