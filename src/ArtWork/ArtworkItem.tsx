import { GetSketchDocument_share_version_document_artboards_entries_files } from "../typings/GetSketchDocument";
import * as React from "react";
import Slide from "@mui/material/Slide";

type Props = {
  f: GetSketchDocument_share_version_document_artboards_entries_files;
};

export function ArtworkItem(props: Props): React.ReactElement {
  return (
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <img
          src={props.f.url}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </Slide>
  );
}
