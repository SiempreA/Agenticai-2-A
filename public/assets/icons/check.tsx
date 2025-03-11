import React from "react";

const CheckIcon: React.FC<{
  fill?: string;
  opacity?: number;
  width?: string;
  height?: string;
}> = ({
  fill = "#739961",
  opacity = "100%",
  width = "100%",
  height = "100%",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    opacity={opacity}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke={fill} />
    <path
      d="M16.125 23L10.5 17.375L11.3838 16.4912L16.125 21.2318L24.6163 12.7412L25.5 13.625L16.125 23Z"
      fill={fill}
    />
  </svg>
);

export default CheckIcon;
