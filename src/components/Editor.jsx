import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box } from "@mui/material";
import "codemirror/";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

export default function Editor(props) {
  const { displayName, language, value, onchange, icon, color } = props;

  function handleChange(editor, data, value) {
    onchange(value);
  }

  return (
    <Box className="flex-grow flex-col flex basis-0 px-2">
      <Box className="flex bg-[#060606] text-[#AAAEBC] justify-between ">
        <Box className="bg-[#1d1e22] flex px-2 py-3 ">
          <Box
            component="span"
            style={{
              backgroundColor: { color },
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 2,
              padddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          <Box className="ml-1">{displayName}</Box>
        </Box>
        <Box className="text-3xl">
          <ContentCopyIcon />
        </Box>
      </Box>

      <Box>
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="editor"
          options={{
            lineWrapping: true,
            lint: true,
            lineNumbers: true,
            mode: language,
            theme: "material",
          }}
        />
      </Box>
    </Box>
  );
}
