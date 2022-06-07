import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import StandardLayout from '@/layout/StandardLayout';

const App = () => (
  <Router>
    <Routes>
      <Route element={<StandardLayout />}>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
