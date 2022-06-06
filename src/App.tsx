import {
  FaCalendarCheck,
  FaMoneyCheckAlt,
} from 'react-icons/fa';
import {
  BsFillCalendarWeekFill,
  BsFillCalendarEventFill,
  BsBookmarkCheckFill,
} from 'react-icons/bs';

import {
  MdOutlineImportExport,
  MdAssignmentInd,
  MdTimeline,
  MdSportsKabaddi,
  MdAssignment,
} from 'react-icons/md';

import {
  IoCloudDone,
  IoPersonAdd,
} from 'react-icons/io5';

import {
  GiArchiveRegister,
} from 'react-icons/gi';

import {
  RiParentFill,
} from 'react-icons/ri';

import React from 'react';
import Carosel from '@/ui/Carosel/Carosel';
import {
  Speed, Security, Reliability, Flexibility,
} from '@/ui/Carosel/Slides';
import TitleBar from '@/ui/TitleBar';
import IconBox from '@/ui/IconBox/IconBox';

const App = () => (
  <div className="justify-center content-center h-full w-full bg-zinc-200 flex-col">
    <div className="flex">
      <TitleBar text="Welcome To Arcio" className="w-full bg-white m-5 rounded-full shadow-2xl" />

    </div>

    <Carosel>
      <Speed />
      <Security />
      <Reliability />
      <Flexibility />
    </Carosel>
    <div className="flex w-full justify-center">
      <div className="xl:grid-cols-4 grid grid-cols-2 md:gap-5 md:w-3/5">
        <IconBox title="Attendance Tracking" icon={<FaCalendarCheck className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Timetable Management" icon={<BsFillCalendarWeekFill className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Easy Data Imports and Exports" icon={<MdOutlineImportExport className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Cloud Hosting" icon={<IoCloudDone className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Course assignment" icon={<MdAssignmentInd className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Institution Registration" icon={<IoPersonAdd className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Exam Management" icon={<GiArchiveRegister className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Behavior Management" icon={<MdSportsKabaddi className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Guardian portal" icon={<RiParentFill className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Event Organiser" icon={<BsFillCalendarEventFill className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Resource Booker" icon={<BsBookmarkCheckFill className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Assignment Manager" icon={<MdAssignment className="w-full h-24 fill-slate-800" />} />
        <IconBox title="End of Term Course Reviews" icon={<MdTimeline className="w-full h-24 fill-slate-800" />} />
        <IconBox title="Expense Manager" icon={<FaMoneyCheckAlt className="w-full h-24 fill-slate-800" />} />
      </div>
    </div>

  </div>
);

export default App;
