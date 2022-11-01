import {
  AiOutlineSecurityScan,
} from 'react-icons/ai';

import Text from '@/misc/Text';
import Slide from './Slide';

const staticText = Text.caroselSlides.security;

const Security = () => (
  <Slide title={staticText.title} text={staticText.text} className="bg-gradient-to-r from-orange-500 to-red-600">
    <AiOutlineSecurityScan className="w-36 h-36 flex-1 m-auto xl:my-auto my-3" />
  </Slide>
);

export default Security;
