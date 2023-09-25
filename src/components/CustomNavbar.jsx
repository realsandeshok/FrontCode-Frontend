import React, { useState, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import codeContext from "../context/codeContext";

const CustomNavbar = () => {
  const context = useContext(codeContext);
  // eslint-disable-next-line
  const { addCodesnippet } = context;

  const [isTitle, setIsTitle] = useState("");
  const [title, setTitle] = useState("Untitled");

  const handleClick = () => {
    addCodesnippet(title);
  };
  return (
    <div>
      <AppBar className="relative">
        <Toolbar className="w-full flex items-center justify-between px-7 bg-black">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <span className="text-3xl">
              <CodeOffIcon fontSize="large" />
            </span>
            FrontCode
            <div className="flex flex-col items-start justify-start">
              <div className="flex items-center justify-center gap-3">
                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.input
                        className="px-3 border-none bg-transparent text-lg text-white outline-none w-[12vw]"
                        key={"TitleInput"}
                        type="text"
                        placeholder="Your Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <motion.p
                        key={"titleLable"}
                        className="px-3 text-xl text-white "
                      >
                        {title}
                      </motion.p>
                    </>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isTitle ? (
                    <>
                      <motion.div
                        key={"CheckIcon"}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(false)}
                      >
                        <TaskAltIcon
                          fontSize="medium"
                          style={{ paddingBottom: "7px" }}
                        />
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div
                        key={"EditIcon"}
                        whileTap={{ scale: 0.9 }}
                        className="cursor-pointer"
                        onClick={() => setIsTitle(true)}
                      >
                        <ModeEditIcon
                          fontSize="medium"
                          style={{ paddingBottom: "5px" }}
                        />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={handleClick}
              className="px-6 "
              variant="contained"
              style={{
                backgroundColor: "#333333",
                fontWeight: "normal",
                fontSize: "13px",
              }}
            >
              Save
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomNavbar;
