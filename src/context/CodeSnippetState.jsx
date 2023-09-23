import CodeContext from "./codeContext";
import { useState } from "react";

const CodeSnippetState = (props) => {
  const host = "http://localhost:5000";
  const codesnippetsInitial = [];

  const [codesnippets, setCodesnippets] = useState(codesnippetsInitial);

  // Get all Codesnippets
  const getCodesnippets = async (title) => {
    // TODO API call
    const response = await fetch(`${host}/api/codesnippet/getallcodesnippets`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmNzNiYmY2YjIxMzUwZmRiMmI4MmJhIn0sImlhdCI6MTY5NDM0Njg0N30.5wotCFfWHire3bYHVxuzd3IorQEJU4MKVngu0Ed49fU",
      },
    });
    const json = await response.json();
    console.log(json);
    setCodesnippets(json);
  };

  // Add
  const addCodesnippet = async (title) => {
    // TODO API call
    // eslint-disable-next-line
    const response = await fetch(`${host}/api/codesnippet/addcodesnippet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authentication-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmNzNiYmY2YjIxMzUwZmRiMmI4MmJhIn0sImlhdCI6MTY5NDM0Njg0N30.5wotCFfWHire3bYHVxuzd3IorQEJU4MKVngu0Ed49fU",
      },
      body: JSON.stringify({ title }),
    });

    const codesnippet = await response.json();
    setCodesnippets(codesnippets.concat(codesnippet));
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
          "authentication-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmNzNiYmY2YjIxMzUwZmRiMmI4MmJhIn0sImlhdCI6MTY5NDM0Njg0N30.5wotCFfWHire3bYHVxuzd3IorQEJU4MKVngu0Ed49fU",
        },
      }
    );
    const json = response.json();
    const newCode = codesnippets.filter((codesnippet) => {
      return codesnippet._id !== id;
    });
    setCodesnippets(newCode);
  };

  // Edit
  const editCodesnippet = async (id, title) => {
    // API Call
    const response = await fetch(
      `${host}/api/codesnippet/updatecodesnippet/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authentication-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmNzNiYmY2YjIxMzUwZmRiMmI4MmJhIn0sImlhdCI6MTY5NDM0Njg0N30.5wotCFfWHire3bYHVxuzd3IorQEJU4MKVngu0Ed49fU",
        },
        body: JSON.stringify({ id, title }),
      }
    );
    // eslint-disable-next-line
    const json = response.json();

    // Logic to edit Client Side
    for (let index = 0; index < codesnippets.length; index++) {
      const element = codesnippets[index];
      if (element._id === id) {
        element.title = title;
      }
    }
  };

  return (
    <>
      <CodeContext.Provider
        value={{
          codesnippets,
          addCodesnippet,
          deleteCodesnippet,
          editCodesnippet,
          getCodesnippets,
        }}
      >
        {props.children}
      </CodeContext.Provider>
    </>
  );
};

export default CodeSnippetState;
