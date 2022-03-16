import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import * as React from "react";

type Props = {
  a: GetSketchDocument_share_version_document_artboards_entries;
};

export const DocumentGridItem = ({ a }: Props): React.ReactElement => {
  const navigate = useNavigate();
  const firstFile = a?.files[0];
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
        onClick={() => navigate(`/art/${a?.id}`, { state: a })}
        src={firstFile?.url || ""}
        alt={a.id}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Grid>
  );
};
