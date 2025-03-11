import React from "react";

const EmptyStatusIcon: React.FC<{
  fill?: string;
  width?: string;
  height?: string;
}> = ({ fill = "#E0E0DE", width = "100%", height = "100%" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke={fill} />
    </svg>
  );
};

export default EmptyStatusIcon;
