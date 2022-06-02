import Carosel from '@/ui/Carosel/Carosel';
import TitleBar from '@/ui/TitleBar';

const App = () => (
  <div className="justify-center content-center min-h-screen min-w-screen bg-zinc-200">
    <div className="flex">
      <TitleBar text="Welcome To Arcio" className="w-full bg-white m-5 rounded-full shadow-2xl" />

    </div>

    <Carosel>
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </Carosel>
  </div>
);

export default App;
