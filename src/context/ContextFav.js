import { useState, createContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [favChar, setFavChar] = useState([]);

  const handleFavChar = (data) => {
    setFavChar(
      favChar.find((item) => item.id === data.id)
        ? favChar.filter((item) => item.id !== data.id)
        : [...favChar, { ...data, fav: true }]
    );
  };
  const values = { favChar: favChar, onFavChar: handleFavChar };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataContext;