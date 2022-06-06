import React from 'react';
import clsx from 'clsx';

type TextfieldProps = {
	name: string;
	type: string;
	label: string;
	className?: string;
	onchange?: Function;
	props?: Array<any>;
};

const Textfield = ({
  name, type, label, className, ...props
}: TextfieldProps) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900">
      {label}
    </label>
    <input
      type={type}
      id={name}
      className={clsx(
        'bg-gray-50 border transition-all border-gray-300 text-gray-900 text-sm rounded-lg outline-none hover:border-purple-500 focus:border-purple-500 block w-full p-2.5',
        className,
      )}
      {...props}
    />
  </div>
);

export default Textfield;
