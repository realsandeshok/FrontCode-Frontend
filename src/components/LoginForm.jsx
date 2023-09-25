import { Box, Button, FormControl, Input, InputLabel } from "@mui/material";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import login from "../assets/images/comp-login.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const minLength = 8; // Password minLength

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/authentication/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      }
    );
    // const json = await response.json();
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authenticationToken);
      navigate("/yourwork");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex h-full w-full items-center justify-center bg-black">
      <Box className="bg-[#333333] h-[80%] w-[60%] border rounded-md">
        <div className="text-white py-[5vh] px-[10vw]">
          <div className="logo flex items-center justify-center h-[10vh] w-full">
            <div className="text-white cursor-pointer flex items-center text-[3vw] ">
              <CodeOffIcon fontSize="3vh" />
              <div className="pl-[1vw]">FrontCode</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row px-[10vw] py-[3vh] w-full text-white">
          <div className="image w-[40%] ">
            <div className="w-full ">
              <img src={login} alt="" />
            </div>
          </div>
          <div className="w-[60%] space-y-[4vh] pl-[2vw]">
            <form className="w-full space-y-[4vh]" onSubmit={handleSubmit}>
              <div className="w-full">
                <FormControl className="w-full">
                  <InputLabel htmlFor="email">Email address</InputLabel>
                  <Input
                    required
                    type="email"
                    id="email"
                    variant="standard"
                    fullWidth
                    value={credentials.email}
                    onChange={onChange}
                    name="email" // Add the name attribute
                  />
                </FormControl>
              </div>
              <div className="w-full">
                <FormControl className="w-full">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    inputProps={{ minLength: minLength }}
                    required
                    type="password"
                    id="password"
                    variant="standard"
                    fullWidth
                    onChange={onChange}
                    value={credentials.password}
                    name="password" // Add the name attribute
                  />
                </FormControl>
              </div>
              <div className="pt-[7vh] w-full">
                <Button
                  type="submit"
                  style={{
                    backgroundColor: "#333333",
                    fontWeight: "normal",
                    fontSize: "3vh",
                  }}
                  variant="contained"
                  fullWidth
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default LoginForm;
