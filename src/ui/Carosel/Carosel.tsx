import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import '@/ui/carosel.css';
import 'keen-slider/keen-slider.min.css';
import Arrow from './Arrow';

export interface CaroselProps {
  children: React.ReactNode
}

const Carosel = ({ children }: CaroselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      <div className="navigation-wrapper shadow-2xl">
        <div ref={sliderRef} className="keen-slider">
          {children}
        </div>
        {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
                currentSlide
                === instanceRef.current.track.details.slides.length - 1
              }
          />
        </>
        )}
      </div>
      {loaded && instanceRef.current && (
      <div className="dots">
        {[
          ...Array(instanceRef.current.track.details.slides.length).keys(),
        ].map((idx) => (
          // eslint-disable-next-line jsx-a11y/control-has-associated-label
          <button
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
            className={`dot${currentSlide === idx ? ' active' : ''}`}
          />
        ))}
      </div>
      )}
    </div>
  );
};

export default Carosel;
