import React from "react";
import Workspace from "../components/WorkSpace";
import Result from "../components/Result";
import DataProvider from "../context/DataProvider";
import CustomNavbar from "../components/CustomNavbar";

function CodeEditor() {
  return (
    <>
      <CustomNavbar />
      {/* <div className="text-[20px]">CustomNavbar</div> */}
      <DataProvider>
        <div className="flex bg-[#060606] ">
          <Workspace />
        </div>
        <div>
          <Result />
        </div>
      </DataProvider>
    </>
  );
}

export default CodeEditor;
