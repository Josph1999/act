export default function SeeMore({ color }) {
  const maskStyle = {
    maskType: "alpha",
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // style={style}
    >
      <mask
        id="mask0_120_133"
        style={maskStyle}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#4338CA" />
      </mask>
      <g mask={`url(#mask0_120_133)`}>
        <path
          d="M6.18848 17.2885L5.5 16.6L15.5808 6.5H6.28845V5.5H17.2885V16.5H16.2885V7.2077L6.18848 17.2885Z"
          fill={color ? color : "#4338CA"}
        />
      </g>
    </svg>
  );
}
