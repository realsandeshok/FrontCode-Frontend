import React, { useState, useContext, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { AppBar, Toolbar } from "@mui/material";
import Button from "@mui/material/Button";
import Editor from "./Editor";
import CodeContext from "../context/codeContext";

const FullEditor = () => {
  const context = useContext(CodeContext);
  // eslint-disable-next-line
  const {
    addCodesnippet,
    setTitle,
    title,
    html,
    setHtml,
    css,
    setCss,
    javascript,
    setJavascript,
  } = context;

  const [isTitle, setIsTitle] = useState("");

  const handleClick = () => {
    addCodesnippet(title, html, css, javascript);
  };

  const [src, setSrc] = useState("");
  const srcCode = `
    <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${javascript}</script>
       </html>
    `;

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setSrc(srcCode);
      }, 1000);

      return () => clearTimeout(timeout);
    },
    //eslint-disable-next-line
    [setSrc]
  );

  return (
    <>
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
        <div>
          <div className="flex bg-[#060606] ">
            {/* <Workspace /> */}
            <Editor
              icon="/"
              language="xml"
              displayName="HTML"
              value={html}
              onchange={setHtml}
            />
            <Editor
              icon="*"
              language="css"
              displayName="CSS"
              value={css}
              onchange={setCss}
            />
            <Editor
              icon="{}"
              language="javascript"
              displayName="JS"
              value={javascript}
              onchange={setJavascript}
            />
          </div>
          <div>
            {/* <Result /> */}
            <div
              className="px-2"
              style={{
                overflow: "hidden",
                height: "100%",
              }}
            >
              <iframe
                style={{
                  height: "100%",
                  width: "100%",
                  border: "none",
                }}
                // width="100%"
                srcDoc={src}
                title="output"
                // height={260}
                sandbox="allow-scripts"
                border="0"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullEditor;
