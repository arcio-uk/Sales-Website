/* eslint-disable react/require-default-props */
import { ReactNode } from 'react';

type SlideProps = {
  title: string;
	text: string;
	className: string;
  children?: ReactNode;
};

const Slide = ({
  title, text, className, children,
}: SlideProps) => (
  <div className={`keen-slider__slide text-center flex w-full items-center ${className}`}>
    <div className="text-white text-5xl flex xl:flex-row flex-col w-4/5 content-center justify-center mx-auto bg-slate-800/20 xl:p-5 p-3 m-3 rounded-2xl">
      <div className="flex-1 xl:my-auto my-3">{title}</div>
      <div className="w-1 bg-white rounded-xl rotate-12" />
      <div className="flex-1 text-2xl mx-4 xl:mx-16 xl:my-auto my-3">{text}</div>
      <div className="w-1 bg-white rounded-xl rotate-12" />
      { /* Here is where the icon should go, it should be an outline! */ }
      {children}
    </div>
  </div>
);

export default Slide;
