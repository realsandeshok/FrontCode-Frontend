import React from "react";
import Box from "@mui/material/Box";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { Button, TextField } from "@mui/material";
import login from "../assets/images/comp-login.png";

const SignupForm = () => {
  return (
    <div className=" flex h-full w-full items-center justify-center bg-black">
      <Box className="bg-red-600 h-[80%] w-[60%] border rounded-md">
        <div className="text-white py-[5vh] px-[10vw]">
          <div className="logo flex items-center justify-center h-[10vh] w-full">
            <div className="text-white cursor-pointer flex items-center text-[3vw] ">
              <CodeOffIcon fontSize="3vh" />
              <div className="pl-[1vw]">FrontCode</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  px-[10vw] py-[3vh] w-full text-white">
          <div className="image w-[40%] ">
            <div className="w-full ">
              <img src={login} alt="" />
            </div>
          </div>
          {/* <div className="w-[5%]">
            <div className="w-full">
              <img
                src=""
                alt=""
              />
            </div>
          </div> */}
          <div className="w-[60%] flex flex-col pl-[2vw]">
            <div className="pb-[3vh] w-full">
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="pt-[3vh] w-full">
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="pt-[10vh] w-full">
              <Button
                style={{
                  backgroundColor: "#333333",
                  fontWeight: "normal",
                  fontSize: "15px",
                }}
                variant="contained"
                fullWidth
              >
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default SignupForm;
