import { Outlet } from 'react-router';

const StandardLayout = () => (
  <div>
    <div className="h-16 bg-white fixed top-0 w-full text-4xl justify-right flex-col space-x-5">
      <div className="flex-1 inline-block align-middle">
        Helooooooooo, I&#39;m a navigation bar!
      </div>
      <div className="flex-1 inline-block align-middle">
        Helooooooooo, I&#39;m a navigation bar!
      </div>

    </div>
    <div className="h-16" />
    <Outlet />
  </div>
);

export default StandardLayout;
