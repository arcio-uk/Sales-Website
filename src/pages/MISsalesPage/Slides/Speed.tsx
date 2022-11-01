import {
  MdSpeed,
} from 'react-icons/md';

import Text from '@/misc/Text';
import Slide from './Slide';

const staticText = Text.caroselSlides.speed;

const Speed = () => (
  <Slide title={staticText.title} text={staticText.text} className="bg-gradient-to-r from-pink-500 to-orange-500">
    <MdSpeed className="w-36 h-36 flex-1 m-auto xl:my-auto my-3" />
  </Slide>
);

export default Speed;
