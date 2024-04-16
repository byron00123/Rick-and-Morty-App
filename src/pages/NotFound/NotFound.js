import NoData from '../../components/NoData/NoData';

import { useTranslation } from 'react-i18next';

import styles from './NotFound.module.scss';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NoData url='/' text={'homeNav'}>
      <div className={styles.container__content}>
        <span>404 - Wubba Lubba Dub Dub - {t('notFound')}</span>
      </div>
    </NoData>
  );
};

export default NotFound;