import Carosel from '@/ui/Carosel/Carosel';
import TitleBar from '@/ui/TitleBar';
import {
  Speed, Security, Reliability, Flexibility,
} from '@/pages/MISsalesPage/Slides';

const home = () => (
  <div className="flex-col justify-center w-full">
    <Carosel slideContainerClass="h-[88vh]">
      <Speed />
      <Security />
      <Reliability />
      <Flexibility />
    </Carosel>
    <div className="bg-white md:w-1/2 w-9/12 mx-auto my-5 shadow-2xl rounded-2xl">
      <TitleBar text="Arcio" className="font-6xl" />
    </div>

  </div>
);

export default home;
