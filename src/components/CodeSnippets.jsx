import React, { useContext } from "react";
import codeContext from "../context/codeContext";
import CodeSnippetItem from "./CodeSnippetItem";
import { useEffect } from "react";

const CodeSnippets = () => {
  const context = useContext(codeContext);
  const { codesnippets, getCodesnippets } = context;

  useEffect(() => {
    getCodesnippets();
    // eslint-disable-next-line
  }, []);

  const updateCodeSnippet = () => {};

  return (
    <div>
      <div className="text-3xl">Your Codes</div>
      <div className="grid grid-cols-4 justify-between mt-3">
        {codesnippets.map((codesnippet) => {
          return (
            <CodeSnippetItem
              key={codesnippet._id}
              updateCodeSnippet={updateCodeSnippet}
              codesnippet={codesnippet}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CodeSnippets;
