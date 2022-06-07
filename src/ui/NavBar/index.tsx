const NavBar = () => (
  <div className="h-16 bg-gradient-to-r from-orange-400 to-red-400 fixed top-0 w-full text-4xl text-white z-10">
    <div className="w-full hidden md:flex select-none justify-right text-2xl items-center lg:basis-2/5">
      <div className="flex-1 inline-block align-middle hover:bg-purple-400/25 cursor-pointer m-2">
        Helooooooooo, I&#39;m a navigation bar!
      </div>
      <div className="flex-1 inline-block align-middle">
        Helooooooooo, I&#39;m a navigation bar!
      </div>
    </div>

  </div>
);

export default NavBar;
