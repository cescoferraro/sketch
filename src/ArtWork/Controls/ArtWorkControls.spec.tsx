import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ArtWorkControls } from "./ArtWorkControls";

test("ArtWorkControls renders", () => {
  const tree = render(
    <BrowserRouter>
      <ArtWorkControls
        setPage={jest.fn()}
        page={1}
        state={{
          id: "2394i230e3",
          isArtboard: false,
          name: "Foto",
          files: [
            {
              height: 10,
              scale: 1,
              thumbnails: [],
              url: "https://google.com",
              width: 10,
            },
          ],
        }}
      />
    </BrowserRouter>
  );
  expect(tree).toMatchSnapshot();
});
