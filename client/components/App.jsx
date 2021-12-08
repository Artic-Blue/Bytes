import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './Home/index';
import Products from './Products/index';
import Profile from './Profile/index';
import Lifestyle from './Lifestyle/index';
import NotFound from './NotFound/index';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="products" element={<Products />} />
      <Route path="profile" element={<Profile />} />
      <Route path="lifestyle" element={<Lifestyle />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
