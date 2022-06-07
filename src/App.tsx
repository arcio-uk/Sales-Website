import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from '@/pages/Home';
import StandardLayout from '@/layout/StandardLayout';
import NotFound from '@/pages/NotFound';

const App = () => (
  <Router>
    <Routes>
      <Route element={<StandardLayout />}>
        <Route path="/pricing" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
