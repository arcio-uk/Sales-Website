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
        <Route path="Sales-Website/" element={<MISsalesPage />} />
        <Route path="Sales-Website/about-us" element={<AboutUs />} />
        <Route path="Sales-Website/*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
