import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import * as React from "react";

interface Props {
  artwork: GetSketchDocument_share_version_document_artboards_entries;
}

export const DocumentGridItem = ({ artwork }: Props): React.ReactElement => {
  const navigate = useNavigate();
  const firstFile = artwork?.files[0];
  return (
    <Grid
      item
      xs={2}
      sm={4}
      md={4}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        onClick={() => navigate(`/artwork/${artwork?.id}`, { state: artwork })}
        src={firstFile?.url || ""}
        alt={artwork.name}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Grid>
  );
};
