import React from "react";
import { useQuery } from "@apollo/client";
import { GetSketchDocument } from "../typings/GetSketchDocument";
import { DocumentQuery } from "./documentQuery";
import { Container, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { DocumentGridItem } from "./DocumentGridItem";
import { SketchAppBar } from "../AppBar/SketchAppBar";

export const Document = (): React.ReactElement => {
  const { id } = useParams();
  const { loading, error, data } = useQuery<GetSketchDocument>(DocumentQuery, {
    variables: { id: id || "e981971c-ff57-46dc-a932-a60dc1804992" },
  });
  return (
    <>
      <SketchAppBar
        title={loading ? "Sketch" : data?.share.version?.document?.name || ""}
      />
      <Container style={{ marginTop: 30 }}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error:(</p>
        ) : (
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 12, md: 16 }}
          >
            {data?.share.version?.document?.artboards?.entries?.map(
              (a, index) => (
                <DocumentGridItem key={index} a={a} />
              )
            )}
          </Grid>
        )}
      </Container>
    </>
  );
};
