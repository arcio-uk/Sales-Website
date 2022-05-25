import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import '@/ui/carosel.css';
import TitleBar from '@/ui/TitleBar';

const Arrow = (props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) => {
  const { disabled, left, onClick } = props;

  const disabeld = disabled ? ' arrow--disabled' : '';
  return (
    <svg
      onClick={onClick}
      className={`arrow ${
        left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
};

const App = () => {
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
    <div className="justify-center content-center min-h-screen min-w-screen bg-zinc-200">
      <div className="flex">
        <TitleBar text="Welcome To Arcio" className="w-full bg-white m-5 rounded-full shadow-2xl" />

      </div>
      <div className="navigation-wrapper shadow-2xl">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">1</div>
          <div className="keen-slider__slide number-slide2">2</div>
          <div className="keen-slider__slide number-slide3">3</div>
          <div className="keen-slider__slide number-slide4">4</div>
          <div className="keen-slider__slide number-slide5">5</div>
          <div className="keen-slider__slide number-slide6">6</div>
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
              type="button"
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

export default App;
