import {
  AiOutlineApi,
} from 'react-icons/ai';
import Text from '@/misc/Text';
import Slide from './Slide';

const staticText = Text.caroselSlides.relyability;

const Reliability = () => (
  <Slide title={staticText.title} text={staticText.text} className="bg-gradient-to-r from-red-600 to-fuchsia-500">
    <AiOutlineApi className="w-36 h-36 flex-1 m-auto xl:my-auto my-3" />
  </Slide>
);

export default Reliability;
