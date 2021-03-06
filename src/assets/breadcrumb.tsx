import * as React from "react";

export const BreadCrumb = (): React.ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="7"
      height="12"
      viewBox="0 0 7 12"
    >
      <defs>
        <path
          id="breadcrumb-a"
          d="M1.91422632,11.4052039 L6.34643225,1.40520393 C6.5702202,0.900290676 6.34232311,0.309561628 5.83740985,0.0857736753 C5.3324966,-0.138014277 4.74176755,0.0898828101 4.5179796,0.594796067 L0.0857736753,10.5947961 C-0.138014277,11.0997093 0.0898828101,11.6904384 0.594796067,11.9142263 C1.09970932,12.1380143 1.69043837,11.9101172 1.91422632,11.4052039 Z"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="breadcrumb-b" fill="#fff">
          <use href="#breadcrumb-a" />
        </mask>
        <use
          fill="#000"
          fillOpacity="0"
          fillRule="nonzero"
          href="#breadcrumb-a"
        />
        <g fill="#000" fillOpacity=".4" mask="url(#breadcrumb-b)">
          <rect width="16" height="16" transform="translate(-5 -2)" />
        </g>
      </g>
    </svg>
  );
};
