import React, { useEffect, useState } from 'react';
import axios from 'axios';

import useSortOrder from '../../hooks/useSortOrder';

import CardChar from '../../components/Cards/CardChar/CardChar';
import Search from '../../components/Search/Search';
import SortOrder from '../../components/SortOrder/SortOrder';
import Pagination from '../../components/Pagination/Pagination';
import NoData from '../../components/NoData/NoData';

import styles from './Characters.module.scss';

const Characters = (props) => {
  const [charData, setCharData] = useState([]);
  const [pageData, setPageData] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      setCharData(response.data.results);
      setPageData(response.data.info.pages);
    };

    fetchData();
  }, [currentPage]);

  const { sort, onSetSort, onSortOrder } = useSortOrder('default', 'name');

  const length = charData.filter((char) =>
    char.name.toLowerCase().includes(props.value.toLowerCase())
  ).length;

  return (
    <div className={styles.container}>
      <div className={styles.container__filter}>
        <div className={styles.search}>
          <Search value={props.value} onSetValue={props.onSetValue} />
        </div>
        <SortOrder sort={sort} onSort={onSetSort} />
      </div>
      <div className={styles.container__main}>
        {charData &&
          charData
            .filter((char) =>
              char.name.toLowerCase().includes(props.value.toLowerCase())
            )
            .sort(onSortOrder)
            .map((char) => <CardChar data={char} key={char.id} />)}
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