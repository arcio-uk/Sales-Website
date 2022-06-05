import {
  FaCalendarCheck,
} from 'react-icons/fa';
import {
  BsFillCalendarWeekFill,
} from 'react-icons/bs';

import {
  MdOutlineImportExport,
} from 'react-icons/md';

import {
  AiOutlineCloudSync,
} from 'react-icons/ai';

import React from 'react';
import Carosel from '@/ui/Carosel/Carosel';
import { Speed, Security, Reliability } from '@/ui/Carosel/Slides';
import TitleBar from '@/ui/TitleBar';
import IconBox from '@/ui/IconBox/IconBox';

const App = () => (
  <div className="justify-center content-center h-full w-screen bg-zinc-200 flex-col">
    <div className="flex">
      <TitleBar text="Welcome To Arcio" className="w-full bg-white m-5 rounded-full shadow-2xl" />

    </div>

    <Carosel>
      <Speed />
      <Security />
      <Reliability />
    </Carosel>
    <div className="flex w-full justify-center">
      <div className="xl:grid-cols-4 grid md:grid-cols-2 grid-cols-1 gap-5 md:w-3/5 4/5">
        <IconBox title="Attendance Tracking" icon={<FaCalendarCheck className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Timetable Management" icon={<BsFillCalendarWeekFill className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Easy Data Imports and Exports" icon={<MdOutlineImportExport className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Cloud Hosting" icon={<AiOutlineCloudSync className="w-full h-24 fill-slate-800" />} />
      </div>
    </div>

  </div>
);

export default App;
