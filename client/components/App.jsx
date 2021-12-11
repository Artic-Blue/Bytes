import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home/index';
import NavBar from './NavBar/index';
import Shop from './Shop/index';
import Products from './Shop/Products/Products';
import ProductDetail from './Shop/Products/ProductDetail';
import Meals from './Shop/Meals/Meals';
import MealDetail from './Shop/Meals/MealDetail';
import Farmers from './Shop/Farmers/Farmers';
import FarmerDetail from './Shop/Farmers/FarmerDetail';
import Settings from './Settings/index';
import Tracker from './Tracker/index';
import Cart from './Cart/index';
import Login from './Login/index';
import NotFound from './NotFound/index';

import GlobalStyle from './App.styled';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/cart" element={<Cart />} />
        {/* shop routes */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/products" element={<Products />} />
        <Route path="/shop/products/:productId" element={<ProductDetail />} />
        <Route path="/shop/meals" element={<Meals />} />
        <Route path="/shop/meals/:mealId" element={<MealDetail />} />
        <Route path="/shop/farmers" element={<Farmers />} />
        <Route path="/shop/farmers/:farmerId" element={<FarmerDetail />} />
        {/* errors */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
