import { useContext } from 'react';
import DataContext from '../../store/Context/ContextFav';

import useSortOrder from '../../hooks/useSortOrder';

import CardChar from '../../components/Cards/CardChar/CardChar';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder';
import NoData from '../../components/NoData/NoData';

import styles from './FavoriteChar.module.scss';

const FavoriteChar = (props) => {
  const { favChar } = useContext(DataContext);

  const { sort, onSetSort, onSortOrder } = useSortOrder('default', 'name');

  const length = favChar.filter((char) =>
    char.name.toLowerCase().includes(props.value.toLowerCase())
  ).length;

  return (
    <div className={styles.container}>
      {favChar.length !== 0 && (
        <div className={styles.container__filter}>
          <div className={styles.search}>
            <Search value={props.value} onSetValue={props.onSetValue} />
          </div>
          <SortOrder sort={sort} onSort={onSetSort} />
        </div>
      )}
      <div className={styles.container__main}>
        {favChar
          .filter((char) =>
            char.name.toLowerCase().includes(props.value.toLowerCase())
          )
          .sort(onSortOrder)
          .map((char) => (
            <CardChar data={char} key={char.id} />
          ))}

        {favChar.length === 0 && (
          <div style={{ width: '100%', paddingRight: '1rem' }}>
            <NoData url='/characters' text={'charactersNav'} />
          </div>
        )}

        {favChar.length > 0 && length === 0 && (
          <div style={{ width: '100%', paddingRight: '1rem' }}>
            <NoData />
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteChar;