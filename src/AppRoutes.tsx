import React from "react";
import { Route, Routes } from "react-router-dom";
import { Document } from "./Document/Document";
import { Artwork } from "./ArtWork/Artwork";

export const AppRoutes = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/art/:id" element={<Artwork />} />
      <Route path="/" element={<Document />} />
      <Route path="/document/:id" element={<Document />} />
    </Routes>
  );
};
