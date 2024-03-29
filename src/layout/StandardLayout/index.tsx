import { AiFillHeart } from 'react-icons/ai';
import { Outlet } from 'react-router';

import Text from '@/misc/Text';

import './index.css';

const staticText = Text.standardLayout;

const StandardLayout = () => (
  <div className="flex flex-col h-screen justify-between">

    <div className="main">
      <Outlet />
    </div>

    <footer className="text-center p-3 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold z-10 bottom-0 relative w-full">
      {staticText.copyright.first}
      <AiFillHeart className="fill-red-600 inline align-middle" />
      {staticText.copyright.second}
    </footer>
  </div>
);

export default StandardLayout;
