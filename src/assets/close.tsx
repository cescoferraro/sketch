import * as React from "react";

export const Close = (): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
    >
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        d="M3.5,13.5 L13.5,3.5 M13.5,13.5 L3.5,3.5"
        opacity=".5"
        transform="matrix(-1 0 0 1 14 -3)"
      />
    </svg>
  );
};
