import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavouriteProducts from './Pages/FavouriteProducts';

function App() {
  const [favourites, setFavourites] = useState([]);

  // Handler to add/remove favourites
  const handleFavourite = (productId) => {
    setFavourites(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Shop
                favourites={favourites}
                onFavourite={handleFavourite}
              />
            }
          />
          <Route
            path='/favourites'
            element={
              <FavouriteProducts 
              favourites={favourites} 
              onFavourite={handleFavourite}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;