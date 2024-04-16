import { useState } from 'react';

const useSortOrder = (value, name) => {
  const [sort, setSort] = useState(value);

  const handleSortOrder = (a, b) => {
    if (sort === 'a-z') {
      return a[name].localeCompare(b[name]);
    } else if (sort === 'z-a') {
      return b[name].localeCompare(a[name]);
    }
    return a - b;
  };

  return {
    onSortOrder: (a, b) => handleSortOrder(a, b),
    onSetSort: (value) => setSort(value),
    sort: sort,
  };
};

export default useSortOrder;