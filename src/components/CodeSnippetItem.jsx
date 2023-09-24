import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { Link } from "react-router-dom";
import codeContext from "../context/codeContext";
import FullEditor from "./FullEditor";

const CodeSnippetItem = (props) => {
  const context = useContext(codeContext);
  const { deleteCodesnippet } = context;

  const { codesnippet } = props;
  return (
    <>
      <div className="my-[15px]">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia component="img" height="250px" image="" alt="LOGO" />

          <div className="flex items-center justify-between">
            <CardHeader title={codesnippet.title} />
            <div className="flex px-4 ">
              <div className="px-2 cursor-pointer">
                <DeleteIcon
                  onClick={() => {
                    deleteCodesnippet(codesnippet._id);
                  }}
                />
              </div>
              <div className="px-2 cursor-pointer">
                <EditIcon />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CodeSnippetItem;
