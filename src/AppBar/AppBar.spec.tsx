import { AppBar } from "./AppBar";
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

test("AppBar renders", () => {
  const tree = render(
    <BrowserRouter>
      <AppBar title={"Testing"} />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
