import React, { Dispatch, SetStateAction } from "react";
import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography } from "@mui/material";
import { Close } from "../assets/close";
import { ArrowLeft } from "../assets/arrow-left";
import { BreadCrumb } from "../assets/breadcrumb";
import { ArrowRight } from "../assets/arrow-right";

type Props = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  state: GetSketchDocument_share_version_document_artboards_entries;
};

const style = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  margin: 2,
};

export const ArtWorkControls = ({
  page,
  state,
  setPage,
}: Props): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <span style={{ display: "flex", position: "absolute" }}>
      <Box display={"flex"}>
        <IconButton onClick={() => navigate("/")}>
          <Close />
        </IconButton>
      </Box>
      <Box display={"flex"}>
        <Box style={style}>
          <IconButton
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
          >
            <ArrowLeft />
          </IconButton>
        </Box>
        <Box style={style}>
          <Typography color={"black"} style={{ opacity: 0.5 }}>
            {page + 1}
          </Typography>
        </Box>
        <Box style={style}>
          <BreadCrumb />
        </Box>
        <Box style={style}>
          <Typography color={"black"} style={{ opacity: 0.5 }}>
            {state.files.length}
          </Typography>
        </Box>
        <Box style={style}>
          <IconButton
            disabled={page + 1 === state.files.length}
            onClick={() => setPage((p) => p + 1)}
          >
            <ArrowRight />
          </IconButton>
        </Box>
      </Box>
    </span>
  );
};
