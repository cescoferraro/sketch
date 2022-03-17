import React from "react";
import { Box, CircularProgress, Container, Grid } from "@mui/material";
import { DocumentGridItem } from "./DocumentGridItem";
import { AppBar } from "../AppBar/AppBar";
import { useDocumentQuery } from "./useDocumentQuery";

export const Document = (): React.ReactElement => {
  const { loading, error, data } = useDocumentQuery();
  return (
    <>
      <AppBar
        title={loading ? "Sketch" : data?.share.version?.document?.name || ""}
      />
      <Container style={{ marginTop: 30 }}>
        {loading ? (
          <Box justifyContent={"center"} width={"100%"} display={"flex"}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <>
            <p>Error:( </p>
            <p>{JSON.stringify(error)}</p>
          </>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 16 }}
          >
            {data?.share.version?.document?.artboards?.entries?.map(
              (a, index) => (
                <DocumentGridItem key={index} artwork={a} />
              )
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};
