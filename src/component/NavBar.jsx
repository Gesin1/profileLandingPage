import { useState } from "react";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [menuBar, setMenubar] = useState(false);

  return (
    <>
      <nav
        role="menubar"
        className="flex flex-row justify-between items-center bg-white py-10 pr-14 pl-20 md:drop-shadow-md  z-10 fixed w-full "
      >
        <h1 className="font-mark font-extrabold text-5xl text-blueblack cursor-pointer">
          Gesin-1.dev
        </h1>
        <ul
          className={`flex flex-col md:flex md:flex-row md:static absolute right-0 left-0 top-32 w-full md:w-auto  justify-center items-center gap-6 transition-all duration-700 ease-in-out md:gap-0 py-10 md:  bg-white font-extrabold drop-shadow-md md:drop-shadow-none text-4xl md:py-0 ${
            menuBar ? "" : "hidden"
          }`}
        >
          <li className="px-7 font-mark text-blueblack hover:text-blue-500 transition-colors">
            <a href="#">Home</a>
          </li>
          <li className="px-7  font-mark text-blueblack hover:text-blue-500 transition-colors">
            <a href="#">About</a>
          </li>
          <li className="px-7  font-mark text-blueblack hover:text-blue-500 transition-colors">
            <a href="#">Project</a>
          </li>
          <li className="px-7  font-mark text-blueblack hover:text-blue-500 transition-colors">
            <a href="#">Contact</a>
          </li>
        </ul>
        <FaBars
          onClick={() => setMenubar((prevmenuBar) => !prevmenuBar)}
          area-label="Open menu"
          className="md:hidden hover:text-blue-500 transition-colors text-4xl font-medium cursor-pointer"
        />
      </nav>
    </>
  );
};

export default NavBar;
