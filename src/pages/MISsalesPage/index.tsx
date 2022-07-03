import Carosel from '@/ui/Carosel/Carosel';
import ContactUs from '@/ui/ContactUs';
import {
  Speed, Security, Reliability, Flexibility,
} from './Slides';
import TitleBar from '@/ui/TitleBar';
import { IconBoxContainer } from '@/ui/IconBox';
import Text from '@/misc/Text';

const MISsalesPage = () => (
  <div className="justify-center content-center h-full w-full flex-col">
    <div className="flex">
      <TitleBar text={Text.welcome} className="w-full bg-white m-5 rounded-full shadow-2xl" />
    </div>
    <Carosel>
      <Speed />
      <Security />
      <Reliability />
      <Flexibility />
    </Carosel>
    <IconBoxContainer />
    <ContactUs />
  </div>
);

export default MISsalesPage;
