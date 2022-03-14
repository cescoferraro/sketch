import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";
import { useNavigate } from "react-router-dom";
import useMeasure from "react-use-measure";
import { Grid } from "@mui/material";
import * as React from "react";

interface Props {
  a: GetSketchDocument_share_version_document_artboards_entries;
}

export const DocumentGridItem = ({ a }: Props): React.ReactElement => {
  const navigate = useNavigate();
  const [ref, bounds] = useMeasure();
  const firstFile = a?.files[0];
  const condition =
    firstFile.height < bounds.height || firstFile.width < bounds.width;
  return (
    <Grid
      onClick={() => navigate(`/art/${a?.id}`, { state: a })}
      ref={ref}
      item
      xs={2}
      sm={4}
      md={4}
    >
      <div
        style={{
          height: 200,
          backgroundSize: condition ? "" : "contain",
          backgroundImage: !condition ? `url(${firstFile?.url})` : undefined,
        }}
      >
        {condition && <img style={{}} src={firstFile?.url || ""} alt="" />}
      </div>
    </Grid>
  );
};
