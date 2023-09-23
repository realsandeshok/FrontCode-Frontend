import React from "react";
import "./css/App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CodeEditor from "./screens/CodeEditor";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import YourWork from "./screens/YourWork";
import CodeSnippetState from "./context/CodeSnippetState";

function App() {
  return (
    <>
      {/* <div className="flex flex-col"> */}
      <CodeSnippetState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codeeditor" element={<CodeEditor />} />
            <Route path="/yourwork" element={<YourWork />} />
          </Routes>
        </BrowserRouter>
      </CodeSnippetState>
      {/* </div> */}
    </>
  );
}

export default App;
