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
  <div className="text-center bg-white rounded-2xl shadow-2xl flex-col flex min-w-fit m-2">
    <div className="md:m-2 m-1 overlay flex-2">
      {icon}
    </div>
    <div className="text-3xl md:m-2 m-1 flex-1 flex flex-col">
      <div className="flex-center m-auto">
        {title}
      </div>
    </div>
    {children}
  </div>
);

export default IconBox;
