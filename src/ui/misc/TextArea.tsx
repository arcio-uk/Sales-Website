import React from 'react';
import clsx from 'clsx';

type TextareaProps = {
	name: string;
	label: string;
	className?: string;
  onChange?: Function;
	props?: Array<any>;
};

const Textarea = ({
  name, label, className, ...props
}: TextareaProps) => (
  <div className="flex flex-col w-full">
    <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-900">
      {label}
    </label>
    <textarea
      id={name}
      className={clsx(
        'bg-gray-50 border transition-all border-gray-300 text-gray-900 text-sm rounded-lg outline-none hover:border-purple-500 focus:border-purple-500 block w-full p-2.5 h-52 resize-none',
        className,
      )}
      {...props}
    />
  </div>
);

export default Textarea;
