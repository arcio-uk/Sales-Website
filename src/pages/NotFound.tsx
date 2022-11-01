import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex justify-center w-full m-5 animate__animated animate__fadeIn">
    <div className="text-2xl md:text-3xl bg-white md:w-3/5 max-w-full my-auto p-5 rounded-2xl shadow-2xl">
      Sorry, the page you&#39;re looking for doesn&#39;t exist :(
      <Link to="/Sales-Website/" className="block mt-10 cursor-pointer text-blue-500 underline select-none">
        Click Here to go home
      </Link>
    </div>
  </div>
);

export default NotFound;
