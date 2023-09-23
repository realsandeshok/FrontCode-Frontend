import React from "react";
import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";

const Result = () => {
  const [src, setSrc] = useState("");
  const { html, css, javascript } = useContext(Context);
  const srcCode = `
    <html>
         <body>${html}</body>
         <style>${css}</style>
         <script>${javascript}</script>
       </html>
    `;

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setSrc(srcCode);
      }, 1000);

      return () => clearTimeout(timeout);
    },
    //eslint-disable-next-line
    [html, css, javascript]
  );

  return (
    <>
      <div
        className="px-2"
        style={{
          overflow: "hidden",
          height: "100%",
        }}
      >
        <iframe
          style={{
            height: "100%",
            width: "100%",
            border: "none",
          }}
          // width="100%"
          srcDoc={src}
          title="output"
          // height={260}
          sandbox="allow-scripts"
          border="0"
        />
      </div>
    </>
  );
};

export default Result;
