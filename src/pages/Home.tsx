import Carosel from '@/ui/Carosel/Carosel';
import ContactUs from '@/ui/ContactUs';
import {
  Speed, Security, Reliability, Flexibility,
} from '@/ui/Carosel/Slides';
import TitleBar from '@/ui/TitleBar';
import { IconBoxContainer } from '@/ui/IconBox';

const Home = () => (
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
  </div>
);

export default Home;