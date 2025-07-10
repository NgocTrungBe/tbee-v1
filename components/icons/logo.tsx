const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 84 96"
  >
    <title>Logo</title>
    <g transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        {/* Lục giác giữ nguyên */}
        <polygon
          id="Shape"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
          fill="none"
        />

        {/* Chữ T vẽ bằng path, thay cho chữ B gốc */}
        <path
          d="M33 30 L33 34 L41 34 L41 61 L46 61 L46 34 L54 34 L54 30 Z"
          fill="currentColor"
        />
      </g>
    </g>
  </svg>
);

export default IconLogo;
