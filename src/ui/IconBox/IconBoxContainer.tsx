/* eslint-disable max-len */
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

import {
  VscTypeHierarchySub,
} from 'react-icons/vsc';

import Text from '@/misc/Text';

import IconBox from './IconBox';

const info = Text.explanationBoxes;

const iconStyling = 'w-full h-24 fill-slate-800';

const IconBoxContainer = () => (
  <div className="flex w-full justify-center mt-5 mb-5">
    <div className="xl:grid-cols-4 grid grid-cols-2 gap-2 md:gap-5 md:w-3/5">
      <IconBox data={info.timetable} icon={<BsFillCalendarWeekFill className={iconStyling} />} />
      <IconBox data={info.attendance} icon={<FaCalendarCheck className={iconStyling} />} showInfo />
      <IconBox data={info.importExport} icon={<MdOutlineImportExport className={iconStyling} />} />
      <IconBox data={info.cloud} icon={<IoCloudDone className={iconStyling} />} />
      <IconBox data={info.courseAssignment} icon={<MdAssignmentInd className={iconStyling} />} />
      <IconBox data={info.signup} icon={<IoPersonAdd className={iconStyling} />} />
      <IconBox data={info.examManagement} icon={<GiArchiveRegister className={iconStyling} />} />
      <IconBox data={info.behaviorManagement} icon={<MdSportsKabaddi className={iconStyling} />} />
      <IconBox data={info.guardianPortal} icon={<RiParentFill className={iconStyling} />} showInfo />
      <IconBox data={info.eventOrganiser} icon={<BsFillCalendarEventFill className={iconStyling} />} />
      <IconBox data={info.resourceBooker} icon={<BsBookmarkCheckFill className={iconStyling} />} />
      <IconBox data={info.assignmentManager} icon={<MdAssignment className={iconStyling} />} />
      <IconBox data={info.courseReviews} icon={<MdTimeline className={iconStyling} />} />
      <IconBox data={info.expenseManager} icon={<FaMoneyCheckAlt className={iconStyling} />} />
      <IconBox data={info.accessControl} icon={<VscTypeHierarchySub className={iconStyling} />} />
    </div>
  </div>
);

export default IconBoxContainer;
