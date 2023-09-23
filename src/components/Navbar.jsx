import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CodeOffIcon from "@mui/icons-material/CodeOff";

function Navbar() {
  let [open, setOpen] = useState(false);
  return (
    <>
      <AppBar className="relative">
        <Toolbar className="bg-black ">
          <div className="shadow-md w-full top-0 left-0 ">
            <div className="md:flex items-center justify-between py-2 md:px-7 px-7 ">
              <div
                className="text-white hover:text-gray-400 duration-500 
            text-2xl cursor-pointer flex items-center "
              >
                <span className="text-3xl pr-1">
                  <CodeOffIcon fontSize="large" />
                </span>
                FrontCode
              </div>
              <div
                onClick={() => setOpen(!open)}
                className=" absolute right-[2rem] top-[1rem] cursor pointer md:hidden"
              >
                <MenuIcon name={open ? "close" : "menu"}></MenuIcon>
              </div>
              <ul
                className={`bg-black md:flex md:items-center md:pb-0 
             absolute md:static md:z-auto z-[0] 
            left-0 w-full md:w-auto md:pl-0 pl-10 
            transition-all duration-500 ease-in ${
              open ? " opacity-100" : "top-[-490px]"
            }`}
              >
                <li className="md:ml-8 text-xl md:my-0 my-7 text-white hover:text-gray-400 duration-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="md:ml-8 text-xl md:my-0 my-7  text-white hover:text-gray-400 duration-500">
                  <Link to={"/codeeditor"}>CodeEditor</Link>
                </li>
                <li className="md:ml-8 text-xl md:my-0 my-7  text-white hover:text-gray-400 duration-500">
                  <Link to={"/yourwork"}>YourWork</Link>
                </li>
              </ul>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
