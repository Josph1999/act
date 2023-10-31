export default function SendIcon() {
  const maskStyle = {
    maskType: "alpha",
  };

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_241_170"
        style={maskStyle}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_241_170)">
        <path
          d="M10.9422 16.1218L8.91974 11.048L3.84601 8.99352L3.81396 8.46788L16.1858 3.78198L11.4678 16.1218H10.9422ZM11.1954 14.4807L14.7627 5.20507L5.45499 8.74032L9.53832 10.3974L11.1954 14.4807Z"
          fill="#FDFDFD"
        />
      </g>
    </svg>
  );
}
