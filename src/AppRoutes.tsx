import React from "react";
import {Route, Routes} from "react-router-dom";
import {Document} from "./Document/Document";

export const AppRoutes = (): React.ReactElement => {
    return (
        <Routes>
            <Route path="/" element={<Document/>}/>
            <Route path="/:id" element={<Document/>}/>
        </Routes>
    )
}