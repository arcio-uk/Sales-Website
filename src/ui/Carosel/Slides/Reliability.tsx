import {
  AiFillApi,
} from 'react-icons/ai';

const Reliability = () => (
  <div className="keen-slider__slide text-center bg-gradient-to-r from-orange-500 to-pink-600 flex w-screen items-center">
    <div className="text-white text-5xl flex xl:flex-row flex-col w-4/5 content-center justify-center mx-auto">
      <div className="flex-1 xl:my-auto my-3">Reliability</div>
      <div className="w-1 bg-white" />
      <div className="flex-1 text-2xl mx-16 xl:my-auto my-3">We use the reliability of the cloud, alongside flexible code for different methods of deployment to increase our relyability</div>
      <div className="w-1 bg-white" />
      <AiFillApi className="w-36 h-36 flex-1 m-auto xl:my-auto my-3" />
    </div>
  </div>
);

export default Reliability;
