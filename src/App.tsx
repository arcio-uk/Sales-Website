/* eslint-disable arrow-body-style */
import { useState } from 'react';
import logo from './logo.svg';
import TitleBar from '@/ui/TitleBar';

const App = () => {
  return (
    <div className="justify-center content-center min-h-screen min-w-screen bg-zinc-200">
      <div className="flex">
        <TitleBar text="Welcome To Arcio" className="w-full" />

      </div>
      <div className="bg-black text-white text-center">
        hi
      </div>
    </div>
  );
};

export default App;
