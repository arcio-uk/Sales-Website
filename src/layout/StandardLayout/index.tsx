import { AiFillHeart } from 'react-icons/ai';
import { Outlet } from 'react-router';

import Text from '@/misc/Text';

import './index.css';

const staticText = Text.standardLayout;

const StandardLayout = () => (
  <div className="flex flex-col h-screen justify-between">
    <header className="h-16 bg-gradient-to-r from-orange-400 to-red-400 fixed top-0 w-full text-4xl justify-right flex-col space-x-5 text-white z-10">
      <div className="flex-1 inline-block align-middle">
        Helooooooooo, I&#39;m a navigation bar!
      </div>
      <div className="flex-1 inline-block align-middle">
        Helooooooooo, I&#39;m a navigation bar!
      </div>

    </header>

    <div className="main">
      <div className="h-16" />
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
