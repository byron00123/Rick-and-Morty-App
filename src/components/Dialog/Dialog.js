import { useEffect, useState } from 'react';
import axios from 'axios';

import { DialogTitle, Dialog as D, DialogContent } from '@mui/material';

import CardChar from '../Cards/CardChar/CardChar';

import styles from './Dialog.module.scss';
import { useTranslation } from 'react-i18next';

const Dialog = (props) => {
  const { onClose, open, informations } = props;

  const [charData, setCharData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${informations}`
      );

      setCharData(response.data);
    };

    fetchData();
  }, [informations]);

  return (
    <D onClose={onClose} open={open} className={styles.dialog}>
      <div className={styles.container}>
        <DialogTitle className={styles.container__title}>
          {t('dialogCharTitle')}
        </DialogTitle>
        <DialogContent
          className={styles.container__content}
          style={{
            padding:
              informations.length === 0 ? '0 1.5rem' : '0 1.5rem 0 2.5rem',
          }}
        >
          {charData.length > 0 &&
            charData.map((char) => <CardChar data={char} key={char.id} />)}
          {informations.length === 0 && (
            <div className={styles.empty}>
              <span>{t('dialogNoData')}</span>
            </div>
          )}
        </DialogContent>
      </div>
    </D>
  );
};

export default Dialog;