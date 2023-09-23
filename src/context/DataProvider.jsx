import { useState } from "react";
import Context from "./Context";

const DataProvider = ({ children }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");

  return (
    <>
      <Context.Provider
        value={{
          html,
          setHtml,
          css,
          setCss,
          javascript,
          setJavascript,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default DataProvider;
