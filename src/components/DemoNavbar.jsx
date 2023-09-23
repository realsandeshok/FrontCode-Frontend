import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";
// import VolunteerActivism from "@mui/icons-material/VolunteerActivism";

function DemoNavbar() {
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-7 px-7">
        <div
          className="text-gray-800 hover:text-gray-400 duration-500 
            text-2xl cursor-pointer flex items-center font-[Poppins] "
        >
          <span className="text-3xl text-blue-600">
            {/* <VolunteerActivism fontSize="large" /> */}
          </span>
          Caring Hearts
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 
            pb-12 absolute md:static bg-white md:z-auto z-[-1] 
            left-0 w-full md:w-auto md:pl-0 pl-9 
            transition-all duration-500 ease-in ${
              open ? "top-20 opacity-100" : "top-[-490px]"
            }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7  text-gray-800 hover:text-gray-400 duration-500">
            <Link to={"/events"}>Events</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7  text-gray-800 hover:text-gray-400 duration-500">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7  text-gray-800 hover:text-gray-400 duration-500">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          {/* <Button /> */}
        </ul>
      </div>
    </div>
  );
}

export default DemoNavbar;
