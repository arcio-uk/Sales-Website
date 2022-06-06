import {
  SiOpenaccess,
} from 'react-icons/si';
import Text from '@/misc/Text';
import Slide from './Slide';

const staticText = Text.caroselSlides.flexibility;

const Flexibility = () => (
  <Slide title={staticText.title} text={staticText.text} className="bg-gradient-to-r from-fuchsia-500 to-pink-500">
    <SiOpenaccess className="w-36 h-36 flex-1 m-auto xl:my-auto my-3" />
  </Slide>
);

export default Flexibility;
