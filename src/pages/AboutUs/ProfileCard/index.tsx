import React from 'react';
import {
  BsDiscord, BsLinkedin, BsTwitter, BsYoutube,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Rick from './rick.png';

interface ProfileCardProps {
  person: {
		name: string,
		role?: string,
		description: string,
		socials?: {
			linkedIn?: string,
			youtube?: string,
			discord?: string,
			twitter?: string,
		}
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
    {person.socials && (
    <div className="flex justify-center content-center border-2 border-slate-500 max-w-full p-1 m-1 rounded-md">
      {person.socials.linkedIn && (
      <a href={person.socials.linkedIn} target="_blank" rel="noreferrer">
        <BsLinkedin className="mx-1" />
      </a>
      )}
      {person.socials.youtube && (
      <a href={person.socials.youtube} target="_blank" rel="noreferrer">
        <BsYoutube className="mx-1" />
      </a>
      )}
      {person.socials.discord && (
      <a href={person.socials.discord} target="_blank" rel="noreferrer">
        <BsDiscord className="mx-1" />
      </a>
      )}
      {person.socials.twitter && (
      <a href={person.socials.twitter} target="_blank" rel="noreferrer">
        <BsTwitter className="mx-1" />
      </a>
      )}
    </div>
    )}

    <div className="text-center text-3xl">
      {person.name}
    </div>
    <div className="border-b-2 h-1 border-slate-500 w-11/12 mx-auto my-2 rounded-full" />
    <div className="text-lg m-1">
      {person.description}
    </div>

  </div>
);

export default ProfileCard;
