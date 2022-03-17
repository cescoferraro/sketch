import * as React from "react";
import {
  AppBar as MUIAppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { SketchLogo } from "../assets/sketch-logo";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export const AppBar = ({ title, children }: Props): React.ReactElement => {
  const navigate = useNavigate();
  return (
    <Box>
      <MUIAppBar
        position="static"
        sx={{
          background: "white",
          boxShadow: "none",
          borderBottom: "1px rgb(230,230,230) solid",
        }}
      >
        <Toolbar>
          {!children && (
            <span style={{ display: "flex", position: "absolute" }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => navigate("/")}
              >
                <SketchLogo />
              </IconButton>
            </span>
          )}
          {children}
          <Typography
            variant="h6"
            component="div"
            align={"center"}
            sx={{ color: "black", flexGrow: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </MUIAppBar>
    </Box>
  );
};
