import React from "react";
import "./css/App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
// import CodeEditor from "./screens/CodeEditor";
// import Navbar from "./components/Navbar";
// import Home from "./screens/Home";
import YourWork from "./screens/YourWork";
import CodeSnippetState from "./context/CodeSnippetState";
import FullEditor from "./components/FullEditor";
// import Navbar from "./components/Navbar";
import LandingPage from "./screens/LandingPage";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import WorkDetails from "./components/WorkDetails";

function App() {
  return (
    <>
      <CodeSnippetState>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} /> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/codeeditor" element={<CodeEditor />} /> */}
            <Route path="/editor" element={<FullEditor />} />
            <Route path="/yourwork" element={<YourWork />} />
            <Route path="/yourwork/:id" element={<WorkDetails/>} />
          </Routes>
        </BrowserRouter>
      </CodeSnippetState>
    </>
  );
}

export default App;
