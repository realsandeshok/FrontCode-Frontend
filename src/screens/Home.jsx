import React from "react";
import boy from "../assets/boy.png";
import { useTypingEffect } from "../components/TypeWriter";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function Home() {
  const text = useTypingEffect(
    "Welcome to FrontCode, your ultimate destination for frontend development excellence. Step into a world where innovation and imagination merge seamlessly with code, empowering you to build stunning digital experiences. Whether you're a seasoned developer or just starting your journey join us in shaping the web of tomorrow, one line of code at a time.",
    50
  );

  return (
    <>
      <div className="flex w-full ">
        <div className="left w-[60%] py-[2vw] px-[5vw]">
          <div className="text-[3.5vw] leading-[4vw] font-bold">
            Crafting Beautiful Frontends, One Line at a Time. Your Canvas for
            Creativity in Code.
          </div>
          <div className=" text-[1.5vw] font-medium w-[80%] mt-[2vw] mb-[3vw]">
            {text}
          </div>
          <div className=" w-[60%] font-medium text-[1.25vw]">
            Embark on Your Journey Today - Let's Get Started!
          </div>
          <div className=" py-2 w-[40%] justify-evenly">
            <Stack direction="row" spacing={3}>
              <Button
                style={{
                  backgroundColor: "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
                variant="contained"
                fullWidth
              >
                SIGN UP
              </Button>
              <Button
                style={{
                  backgroundColor: "black",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
                variant="contained"
                fullWidth
              >
                LOGIN
              </Button>
            </Stack>
          </div>
        </div>
        <div className="right w-[40%] px-[1vw]">
          <img className="h-[100%] w-[100%]" src={boy} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
