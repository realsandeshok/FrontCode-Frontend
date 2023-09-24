import React from "react";
import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <AppBar className="relative">
        <Toolbar className="bg-black ">
          <div className="shadow-md w-full top-0 left-0 ">
            <div className=" flex items-center justify-between py-[1vw]  px-7 ">
              <div
                className="text-white hover:text-gray-400 duration-500 
            text-2xl cursor-pointer flex items-center text-[2vw]"
              >
                <span className=" pr-[2vw]">
                  <CodeOffIcon fontSize="large" />
                </span>
                FrontCode - Empowering Frontend Developers and Beginners
              </div>
              <Stack
                direction="row"
                spacing={3}
                style={{
                  width: "21%",
                }}
              >
                <Link to={"/login"} style={{ width: "100%" }}>
                  <Button
                    style={{
                      backgroundColor: "#333333",
                      fontWeight: "normal",
                      fontSize: "15px",
                    }}
                    variant="contained"
                    fullWidth
                  >
                    LOGIN
                  </Button>
                </Link>
                <Link to={"/signup"} style={{ width: "100%" }}>
                  <Button
                    style={{
                      backgroundColor: "#333333",
                      fontWeight: "normal",
                      fontSize: "15px",
                    }}
                    variant="contained"
                    fullWidth
                  >
                    SIGN UP
                  </Button>
                </Link>
              </Stack>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
