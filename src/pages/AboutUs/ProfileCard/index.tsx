import React from 'react';
import {
  BsDiscord, BsLinkedin, BsTwitter, BsYoutube,
} from 'react-icons/bs';
import Rick from './rick.png';

interface ProfileCardProps {
  person: {
		name: string,
		role?: string,
		description: string,
	}
}

const ProfileCard = ({ person }: ProfileCardProps) => (
  <div className={`text-center
		rounded-2xl
		flex-1
		flex-col
		flex
		border-2
		bg-neutral-200 
		border-slate-500`}
  >
    <img src={Rick} className="rounded-t-2xl" />
    <div className="flex w-full justify-center content-center m-1">
      <BsLinkedin className="mx-1" />
      <BsYoutube className="mx-1" />
      <BsDiscord className="mx-1" />
      <BsTwitter className="mx-1" />
    </div>
    <div className="text-center text-3xl">
      {person.name}
    </div>
    <div className="border-2 border-black w-5/6 mx-auto my-3 rounded-full" />
    <div className="text-lg m-1">
      {person.description}
    </div>

  </div>
);

export default ProfileCard;
