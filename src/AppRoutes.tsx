import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Document } from "./Document/Document";
import { Artwork } from "./ArtWork/Artwork";

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route
        path="/sketch"
        element={
          <Navigate to={"/document/e981971c-ff57-46dc-a932-a60dc1804992"} />
        }
      />
      <Route path="/sketch/artwork/:id" element={<Artwork />} />
      <Route path="/sketch/document/:id" element={<Document />} />
    </Routes>
  );
};
