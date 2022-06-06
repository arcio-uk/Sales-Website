import React from 'react';
import clsx from 'clsx';

type TextAreaProps = {
	name: string;
	label: string;
	className?: string;
	onchange?: Function;
	props?: Array<any>;
};

const TextArea = ({
  name, label, className, ...props
}: TextAreaProps) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900">
      {label}
    </label>
    <textarea
      id={name}
      className={clsx(
        'bg-gray-50 border transition-all border-gray-300 text-gray-900 text-sm rounded-lg outline-none hover:border-purple-500 focus:border-purple-500 block w-full p-2.5 h-32 min-h-[8rem]',
        className,
      )}
      {...props}
    />
  </div>
);

export default TextArea;
