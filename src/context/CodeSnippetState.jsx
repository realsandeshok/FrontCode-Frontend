import CodeContext from "./codeContext";
import { useState } from "react";

const CodeSnippetState = (props) => {
  const host = "http://localhost:5000";
  const codesnippetsInitial = [];
  const [title, setTitle] = useState("Untitled");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javascript, setJavascript] = useState("");
  const [codesnippets, setCodesnippets] = useState(codesnippetsInitial);
  const [gettingCodesnippet, setGetCodesnippet] = useState(codesnippetsInitial);

  // Get all Codesnippets
  const getCodesnippets = async (title) => {
    // TODO API call
    const response = await fetch(`${host}/api/codesnippet/getallcodesnippets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authentication-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    console.log(json);
    setCodesnippets(json);
  };

  // Add
  const addCodesnippet = async (title, html, css, javascript) => {
    // TODO API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/codesnippet/addcodesnippet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authentication-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({ title, html, css, javascript }),
    });
    const codesnippet = await response.json();
    setCodesnippets(codesnippets.concat(codesnippet));
    return codesnippet;
  };

  // Delete
  const deleteCodesnippet = async (id) => {
    // TODO API call
    const response = await fetch(
      `${host}/api/codesnippet/deletecodesnippet/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": localStorage.getItem("token"),
        },
      }
    );
    // eslint-disable-next-line
    const json = response.json();
    const newCode = codesnippets.filter((codesnippet) => {
      return codesnippet._id !== id;
    });
    setCodesnippets(newCode);
  };

  // Edit
  const editCodesnippet = async (id, title, html, css, javascript) => {
    // API Call
    const response = await fetch(
      `${host}/api/codesnippet/updatecodesnippet/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "authentication-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({ id, title, html, css, javascript }),
      }
    );
    // eslint-disable-next-line
    const json = response.json();

    // Logic to edit Client Side
    for (let index = 0; index < codesnippets.length; index++) {
      const element = codesnippets[index];
      if (element._id === id) {
        element.title = title;
        element.html = html;
        element.css = css;
        element.javascript = javascript;
      }
    }
  };

  // Get Particular codesnippet
  const getCodesnippet = async (id) => {
    // API call will be done here later.
    const response = await fetch(`${host}/api/codesnippet/codesnippet/${id}`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log("data:", json);
    setGetCodesnippet(json);
    return json;
  };

  return (
    <>
      <CodeContext.Provider
        value={{
          html,
          setHtml,
          css,
          setCss,
          javascript,
          setJavascript,
          title,
          setTitle,
          codesnippets,
          addCodesnippet,
          deleteCodesnippet,
          editCodesnippet,
          getCodesnippets,
          getCodesnippet,
          gettingCodesnippet,
        }}
      >
        {props.children}
      </CodeContext.Provider>
    </>
  );
};

export default CodeSnippetState;
