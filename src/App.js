import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { DataProvider } from './store/Context/ContextFav';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <DataProvider>
      <Header onSetValue={setSearchValue} />
      <Routes>
        <Route
          path="/"
          element={<Home value={searchValue} onSetValue={setSearchValue} />}
        />
      </Routes>
    </DataProvider>
  );
};

export default App;
