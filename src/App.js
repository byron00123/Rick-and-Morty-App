import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import { DataProvider } from './store/Context/ContextFav';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Characters from './pages/Characters/Characters';
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'; 

import NotFound from './pages/NotFound/NotFound';
import './assets/i18n/index';
import './App.module.scss';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Router> {/* Wrap the entire application with the Router */}
      <DataProvider>
        <Header onSetValue={setSearchValue} />
        <Routes>
          <Route
            path='/'
            element={<Home value={searchValue} onSetValue={setSearchValue} />}
          />
          <Route
          path='/characters'
          element={
            <Characters value={searchValue} onSetValue={setSearchValue} />
          }
        />
          <Route path='/characters/:id' element={<CharacterDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default App;
