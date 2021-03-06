export const Separator = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1"
      height="60"
      viewBox="0 0 1 60"
    >
      <defs>
        <linearGradient id="separator-a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E7E7EA" stopOpacity="0" />
          <stop offset="31.588%" stopColor="#E7E7EA" />
          <stop offset="49.952%" stopColor="#E7E7EA" />
          <stop offset="68.257%" stopColor="#E7E7EA" />
          <stop offset="100%" stopColor="#E7E7EA" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect
        width="1"
        height="60"
        y="2"
        fill="url(#separator-a)"
        fillRule="evenodd"
        opacity=".6"
        transform="translate(0 -2)"
      />
    </svg>
  );
};
