import { bindKeyboard } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import * as React from "react";
import { useState } from "react";
import { useLocationState } from "./useLocationState";
import { Box } from "@mui/material";
import { AppBar } from "../AppBar/AppBar";
import { ArtWorkControls } from "./ArtWorkControls";
import { ArtworkItem } from "./ArtworkItem";
import { Navigate, useLocation } from "react-router-dom";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export const Artwork = (): React.ReactElement | null => {
  const location = useLocation();
  const state = useLocationState();
  const [page, setPage] = useState(0);
  return location.state ? (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <AppBar title={state?.name || ""}>
        <ArtWorkControls setPage={setPage} page={page} state={state} />
      </AppBar>
      <BindKeyboardSwipeableViews
        index={page}
        style={{ flexGrow: 1 }}
        containerStyle={{ flexGrow: 1, height: "100%" }}
        onChangeIndex={(index) => setPage(index)}
      >
        {(state?.files || []).map((file) => (
          <ArtworkItem key={file.url} file={file} />
        ))}
      </BindKeyboardSwipeableViews>
    </Box>
  ) : (
    <Navigate to={""} />
  );
};
