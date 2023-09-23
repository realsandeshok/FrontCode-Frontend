import { useContext } from "react";
import Context from "../context/Context";
import Editor from "./Editor";

const Workspace = () => {
  const { html, css, javascript, setHtml, setCss, setJavascript } =
    useContext(Context);

  return (
    <>
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
    </>
  );
};

export default Workspace;
