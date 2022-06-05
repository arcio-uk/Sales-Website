/* eslint-disable react/require-default-props */
import React, {
  JSXElementConstructor, ReactElement, ReactNode, useState,
} from 'react';

type IconBoxProps = {
  title: string;
  children?: ReactNode;
  icon: ReactNode;
}
const IconBox = ({ title, icon, children }: IconBoxProps) => (
  <div className="text-center bg-white m-5 rounded-2xl shadow-2xl flex-col flex">
    <div className="m-2 overlay flex-2">
      {icon}
    </div>
    <div className="text-3xl  m-2 flex-1 flex flex-col">
      <div className="flex-center m-auto">
        {title}
      </div>
    </div>
    {children}
  </div>
);

export default IconBox;
