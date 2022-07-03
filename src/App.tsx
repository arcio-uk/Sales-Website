import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import MISsalesPage from '@/pages/MISsalesPage';
import AboutUs from '@/pages/AboutUs';
import StandardLayout from '@/layout/StandardLayout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';

const App = () => (
  <Router>
    <Routes>
      <Route element={<StandardLayout />}>
        <Route path="/mis" element={<MISsalesPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
