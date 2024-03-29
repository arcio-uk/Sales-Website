/* eslint-disable react/require-default-props */
import {
  ReactNode, useEffect, useState,
} from 'react';

type IconBoxProps = {
  data: {
    title: string;
    description: string;
  };
  showInfo?: boolean;
  icon: ReactNode;
}
const IconBox = ({ data, icon, showInfo }: IconBoxProps) => {
  const [open, setOpen] = useState(showInfo);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
      }, 500);
    }
  }, [closing]);

  return (
    <div className={`flex-col flex ${open && 'col-span-2'} animate__animated animate__fadeIn `}>
      <div
        className={`
          text-center 
        bg-white 
          ${open ? 'rounded-t-2xl' : 'rounded-2xl'} 
          flex-1 
          flex-col 
          flex
          min-w-fit 
          cursor-pointer 
          z-10 
          hover:animate-iconBoxHoverAnimation 
        hover:bg-neutral-200 
          border-2
          border-white
          hover:border-slate-500 
        `}
        onClick={() => (open ? setClosing(true) : setOpen(true))}
      >
        <div className="md:m-2 m-1 overlay flex-2">
          {icon}
        </div>
        <div className="text-3xl md:m-2 m-1 flex-1 flex flex-col">
          <div className="flex-center m-auto">
            {data.title}
          </div>
        </div>

      </div>
      {
        open && (
          <div className={`animate__animated ${closing ? 'animate__backOutDown' : 'animate__backInUp'} animate__faster flex-col col-span-full bg-white p-2 rounded-b-2xl`}>
            {data.description}
          </div>
        )
      }
    </div>

  );
};

export default IconBox;
