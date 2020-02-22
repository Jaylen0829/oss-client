import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import FileDrop from "react-file-drop";
import { ipcRenderer } from "electron";
import ToolBar from "./toolbar";
import Table from "./table";
import { Layout } from "../../store/app/types";
import { RootState } from "../../store";
import Grid from "./grid";
import Footer from "./footer";
import Buttons from "./buttons";

const Bucket = () => {
  const selectLayout = (state: RootState) => state.app.layout;
  const layout = useSelector(selectLayout);
  const selectVdir = (state: RootState) => state.app.vdir;
  const vdir = useSelector(selectVdir);

  return (
    <div className="bucket-wrapper">
      <Buttons vdir={vdir} />
      <ToolBar vdir={vdir} />
      <div className="content-wrapper">
        <FileDrop
          onDrop={files => {
            if (files) {
              const filePaths: string[] = [];
              for (let i = 0; i < files.length; i += 1) {
                filePaths.push(files[i].path);
              }
              ipcRenderer.send("drop-files", vdir.getPathPrefix(), filePaths);
            }
          }}
        />
        {Layout.grid === layout ? <Grid vdir={vdir} /> : <Table vdir={vdir} />}
      </div>
      <Footer vdir={vdir} />
    </div>
  );
};

export default Bucket;
