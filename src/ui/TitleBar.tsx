import React from 'react';

interface TitlebarProps {
  text: string;
  className: string;
}

const TitleBar = ({ text, className = '' }:TitlebarProps) => (
  <div className={`text-center overflow-hidden flex text-5xl p-4 justify-center w-full ${className} align-middle`}>
    <div className="flex-auto justify-center flex-col m-auto">
      <div className="h-[0.2vh] bg-black m-4" />
    </div>
    <div className="flex-nowrap">
      {text}
    </div>
    <div className="flex-auto justify-center flex-col m-auto">
      <div className="h-[0.2vh] bg-black m-4" />
    </div>
  </div>
);

export default TitleBar;
