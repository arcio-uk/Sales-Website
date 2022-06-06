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

import IconBox from './IconBox';

const iconStyling = 'w-full h-24 fill-slate-800';

const IconBoxContainer = () => (
  <div className="flex w-full justify-center">
    <div className="xl:grid-cols-4 grid grid-cols-2 md:gap-5 md:w-3/5">
      <IconBox title="Attendance Tracking" icon={<FaCalendarCheck className={iconStyling} />} />
      <IconBox title="Timetable Management" icon={<BsFillCalendarWeekFill className={iconStyling} />} />
      <IconBox title="Easy Data Imports and Exports" icon={<MdOutlineImportExport className={iconStyling} />} />
      <IconBox title="Cloud Hosting" icon={<IoCloudDone className={iconStyling} />} />
      <IconBox title="Course assignment" icon={<MdAssignmentInd className={iconStyling} />} />
      <IconBox title="Institution Registration" icon={<IoPersonAdd className={iconStyling} />} />
      <IconBox title="Exam Management" icon={<GiArchiveRegister className={iconStyling} />} />
      <IconBox title="Behavior Management" icon={<MdSportsKabaddi className={iconStyling} />} />
      <IconBox title="Guardian portal" icon={<RiParentFill className={iconStyling} />} />
      <IconBox title="Event Organiser" icon={<BsFillCalendarEventFill className={iconStyling} />} />
      <IconBox title="Resource Booker" icon={<BsBookmarkCheckFill className={iconStyling} />} />
      <IconBox title="Assignment Manager" icon={<MdAssignment className={iconStyling} />} />
      <IconBox title="End of Term Course Reviews" icon={<MdTimeline className={iconStyling} />} />
      <IconBox title="Expense Manager" icon={<FaMoneyCheckAlt className={iconStyling} />} />
    </div>
  </div>
);

export default IconBoxContainer;
