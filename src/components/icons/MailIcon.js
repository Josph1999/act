export default function MailIcon({color}) {
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
        id="mask0_241_180"
        style={maskStyle}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="20"
        height="20"
      >
        <rect width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_241_180)">
        <path
          d="M3.84615 15.8333C3.4626 15.8333 3.14236 15.7048 2.88542 15.4479C2.62847 15.1909 2.5 14.8707 2.5 14.4871V5.51277C2.5 5.12923 2.62847 4.80899 2.88542 4.55204C3.14236 4.2951 3.4626 4.16663 3.84615 4.16663H16.1539C16.5374 4.16663 16.8576 4.2951 17.1146 4.55204C17.3715 4.80899 17.5 5.12923 17.5 5.51277V14.4871C17.5 14.8707 17.3715 15.1909 17.1146 15.4479C16.8576 15.7048 16.5374 15.8333 16.1539 15.8333H3.84615ZM10 10.0961L3.33333 5.73715V14.4871C3.33333 14.6367 3.38141 14.7596 3.47756 14.8557C3.57372 14.9519 3.69658 15 3.84615 15H16.1539C16.3034 15 16.4263 14.9519 16.5224 14.8557C16.6186 14.7596 16.6667 14.6367 16.6667 14.4871V5.73715L10 10.0961ZM10 9.16663L16.4103 4.99996H3.58975L10 9.16663ZM3.33333 5.73715V4.99996V14.4871C3.33333 14.6367 3.38141 14.7596 3.47756 14.8557C3.57372 14.9519 3.69658 15 3.84615 15H3.33333V5.73715Z"
          fill={color ? color : "#FDFDFD"}
        />
      </g>
    </svg>
  );
}