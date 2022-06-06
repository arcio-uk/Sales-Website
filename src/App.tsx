import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '@/pages/Home';
import StandardLayout from '@/layout/StandardLayout';

const App = () => (
  <Router>
    <Routes>
      <Route element={<StandardLayout />}>
        <Route path="/about-us" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
