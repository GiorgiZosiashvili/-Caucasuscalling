/* eslint-disable react/prop-types */
const Arrow = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} fill="none" {...props}>
    <path
      stroke={props.stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.823 1-7 7 7 7"
      opacity={0.6}
    />
  </svg>
);
const Location = ({ ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      fill="#fff"
      d="M3.563 8.438c0 4.167 3.181 8.69 5.99 12.597.666.928 1.306 1.818 1.862 2.652a.703.703 0 0 0 1.17 0c.556-.834 1.195-1.724 1.863-2.652 2.808-3.908 5.99-8.43 5.99-12.598C20.438 3.785 16.652 0 12 0 7.347 0 3.562 3.785 3.562 8.438Zm12.656 0A4.223 4.223 0 0 1 12 12.655a4.223 4.223 0 0 1-4.219-4.219A4.223 4.223 0 0 1 12 4.22a4.223 4.223 0 0 1 4.219 4.218Z"
    />
    <path fill="#fff" d="M12 11.25a2.813 2.813 0 1 0 0-5.625 2.813 2.813 0 0 0 0 5.625Z" />
  </svg>
);
const NavArrow = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={13} fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="#999"
        d="M3.017 6.827h6.78L6.684 9.55l.791.687 4.457-3.897-4.457-3.897-.785.687 3.109 2.723H3.017v.974Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M14.16 12.185H.788V.495H14.16z" />
      </clipPath>
    </defs>
  </svg>
);
export default NavArrow;

export { Arrow, Location, NavArrow };
