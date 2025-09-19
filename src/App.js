
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import{ BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory/>}/>
        <Route path='/women' element={<ShopCategory/>}/>
        <Route path='/kids' element={<ShopCategory/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':productId' element={<Product/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
