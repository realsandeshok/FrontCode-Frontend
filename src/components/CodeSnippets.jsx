import React, { useContext, useState } from "react";
import codeContext from "../context/codeContext";
import CodeSnippetItem from "./CodeSnippetItem";
import { useEffect } from "react";
import { Fab } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CodeSnippets = () => {
  const context = useContext(codeContext);
  const { codesnippets, getCodesnippets, addCodesnippet } = context;
  // eslint-disable-next-line
  const [title, setTitle] = useState("Untitled");
  const nav = useNavigate();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getCodesnippets();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {codesnippets.map((codesnippet) => {
          return (
            <CodeSnippetItem key={codesnippet._id} codesnippet={codesnippet} />
          );
        })}
      </div>
      <div className="flex justify-end">
        <Fab
          color="primary"
          aria-label="add"
          onClick={async () => {
            const snip = await addCodesnippet(title, "", "", "");
            nav("/yourwork/editor/" + snip._id);
          }}
        >
          <Add />
        </Fab>
      </div>
    </div>
  );
};

export default CodeSnippets;
