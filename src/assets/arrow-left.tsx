import * as React from "react";

interface Props {
  onClick?: () => void;
}

export const ArrowLeft = ({ onClick }: Props): React.ReactElement => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="13"
      viewBox="0 0 7 13"
    >
      <polyline
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        points=".5 12.5 6.5 6.5 .5 .5"
        opacity=".5"
        transform="matrix(-1 0 0 1 7 0)"
      />
    </svg>
  );
};
