import React from 'react';
import {
  BsDiscord, BsLinkedin, BsTwitter, BsYoutube,
} from 'react-icons/bs';
import Rick from './rick.png';

interface ProfileCardProps {
  firstName: string;
  description: string;
}

const ProfileCard = ({ firstName, description }: ProfileCardProps) => (
  <div className={`text-center
		rounded-2xl
		flex-1
		flex-col
		flex
		min-w-fit
		border-2
		bg-neutral-200 
		border-slate-500`}
  >
    <img src={Rick} className="rounded-t-2xl" />
    <div className="flex max-w-full w-3/4 justify-center content-center m-auto">
      <BsLinkedin className="mx-1" />
      <BsYoutube className="mx-1" />
      <BsDiscord className="mx-1" />
      <BsTwitter className="mx-1" />
    </div>
    <div className="text-center text-3xl">
      {firstName}
    </div>
    <div className="border-2 border-black w-5/6 mx-auto my-3 rounded-full" />
    <div className="text-lg">
      {description}
    </div>

  </div>
);

export default ProfileCard;
