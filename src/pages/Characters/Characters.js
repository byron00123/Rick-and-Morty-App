import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useSortOrder from '../../hooks/useSortOrder';

import CardChar from '../../components/Cards/CardChar/CardChar';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder'; // Updated SortOrder
import Pagination from '../../components/Pagination/Pagination';
import NoData from '../../components/NoData/NoData';

import styles from './Characters.module.scss';

const Characters = (props) => {
  const [charData, setCharData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState('all'); // New state for filter

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}${filter !== 'all' ? '&status=' + filter : ''}`
      );

      setCharData(response.data.results);
      setPageData(response.data.info.pages);
    };

    fetchData();
  }, [currentPage, filter]); // Update useEffect dependency for filter

  const { sort, onSetSort, onSortOrder } = useSortOrder('default', 'name');

  const filteredData = charData.filter((char) =>
    char.name.toLowerCase().includes(props.value.toLowerCase())
  );

  const length = filter === 'all' ? filteredData.length : charData.filter((char) => char.status === filter && char.name.toLowerCase().includes(props.value.toLowerCase())).length;

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        <div className={styles.search}>
          <Search value={props.value} onSetValue={props.onSetValue} />
        </div>
        <SortOrder sort={sort} onSort={onSetSort} onFilter={setFilter} /> {/* Pass onFilter prop */}
      </div>
      <div className={styles.container__main}>
        {charData && (
          <>
            {filteredData.length > 0 ? (
              filteredData.sort(onSortOrder).map((char) => (
                <CardChar data={char} key={char.id} />
              ))
            ) : (
              <NoData />
            )}
          </>
        )}
        <div style={{ width: '100%', paddingRight: '1rem' }}>
          {length === 0 && <NoData />}
        </div>
      </div>
      <Pagination
        pageData={pageData}
        currentPage={currentPage}
        onSetCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Characters;
