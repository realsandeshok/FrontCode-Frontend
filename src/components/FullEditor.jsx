import React from "react";
import CodeEditor from "../screens/CodeEditor"; // Import your CodeEditor component

const FullEditor = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50 flex flex-col justify-center items-center text-white">
      <div className="w-full bg-gray-900 p-4 flex justify-between items-center">
        <h2 className="text-white">Edit Code</h2>
        <button
          className="text-white bg-transparent border border-white px-2 py-1 rounded hover:bg-white hover:text-black"
          onClick={onClose}
        >
          Close
        </button>
      </div>
      <CodeEditor />
    </div>
  );
};

export default FullEditor;
