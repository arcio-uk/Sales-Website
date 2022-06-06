import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import Carosel from '@/ui/Carosel/Carosel';
import ContactUs from '@/ui/ContactUs';
import {
  Speed, Security, Reliability, Flexibility,
} from '@/ui/Carosel/Slides';
import TitleBar from '@/ui/TitleBar';
import { IconBoxContainer } from '@/ui/IconBox';

const App = () => (
  <div className="justify-center content-center h-full w-full flex-col">
    <div className="flex">
      <TitleBar text="Welcome To Arcio" className="w-full bg-white m-5 rounded-full shadow-2xl" />

    </div>

    <Carosel>
      <Speed />
      <Security />
      <Reliability />
      <Flexibility />
    </Carosel>
    <IconBoxContainer />
    <ContactUs />
    <div className="text-center p-3 bg-gradient-to-r from-orange-400 to-red-400 text-white font-semibold">
      Copyright © 2022 Arcio LLC - Made with
      {' '}
      <AiFillHeart className="fill-red-600 inline align-middle" />
      {' '}
      By the Arcio Team
    </div>
  </div>
);

export default App;
