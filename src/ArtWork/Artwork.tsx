import { bindKeyboard } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import * as React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLocationState } from "./useLocationState";
import { useRedirectToHomeIfNoStateEffect } from "../hooks/useRedirectHomeIfNoStateEffect";
import { Box } from "@mui/material";
import { SketchAppBar } from "../AppBar/SketchAppBar";
import { ArtWorkControls } from "./ArtWorkControls";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

export const Artwork = (): React.ReactElement => {
  const location = useLocation();
  const state = useLocationState(location);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  useRedirectToHomeIfNoStateEffect(location, navigate);
  return (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <SketchAppBar title={state?.name || ""}>
        <ArtWorkControls setPage={setPage} page={page} state={state} />
      </SketchAppBar>
      <BindKeyboardSwipeableViews
        index={page}
        style={{ flexGrow: 1 }}
        containerStyle={{ flexGrow: 1, height: "100%" }}
        onChangeIndex={(index) => setPage(index)}
      >
        {(state?.files || []).map((f) => {
          return (
            <div key={f.url} style={{ background: "green", height: "100%" }}>
              <img
                src={f.url}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </BindKeyboardSwipeableViews>
    </Box>
  );
};
