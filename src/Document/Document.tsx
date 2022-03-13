import React from "react";
import { useQuery } from "@apollo/client";
import { GetSketchDocument } from "../typings/GetSketchDocument";
import { DocumentQuery } from "./documentQuery";

export const Document = (): React.ReactElement => {
  const { loading, error, data } = useQuery<GetSketchDocument>(DocumentQuery, {
    variables: {
      shortId: "26343997-bb48-43ff-a2f7-bd6bc7ef976c",
      // should work
      // shortId: "e981971c-ff57-46dc-a932-a60dc1804992",
    },
  });
  return (
    <div>
      <h2>ArtWorks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error:(</p>
      ) : (
        data?.share.version?.document?.artboards?.entries?.map((a) => {
          return <h2 key={a?.id}>{a?.name}</h2>;
        })
      )}
    </div>
  );
};
