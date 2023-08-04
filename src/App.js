import {  Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import CartPage from './Components/CartPage';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
    <Route path="/home" element={<ProductCard />}></Route>
    <Route path="cart" element={<CartPage/>}></Route>
    </Routes>
    </div>
   
  );
}

export default App;
