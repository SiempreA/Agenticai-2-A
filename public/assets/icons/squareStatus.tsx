import React from "react";

const SquareStatusIcon: React.FC<{
  fill?: string;
  opacity?: number;
  width?: string;
  height?: string;
}> = ({ fill = "#222222", width = "100%", height = "100%" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.958496"
        y="0.625"
        width="35.4167"
        height="35.4167"
        rx="17.7083"
        stroke="#E0E0DE"
        strokeWidth="1.25"
      />
      <rect
        width="16.6667"
        height="16.6667"
        transform="translate(10.3335 10)"
        fill="white"
      />
      <rect
        width="16.6667"
        height="16.6667"
        transform="translate(10.3335 10)"
        fill="white"
      />
      <path
        d="M23.8753 12.0833H13.4587C13.1824 12.0833 12.9174 12.193 12.7221 12.3883C12.5267 12.5837 12.417 12.8487 12.417 13.1249V23.5416C12.417 23.8179 12.5267 24.0828 12.7221 24.2782C12.9174 24.4735 13.1824 24.5833 13.4587 24.5833H23.8753C24.1516 24.5833 24.4165 24.4735 24.6119 24.2782C24.8072 24.0828 24.917 23.8179 24.917 23.5416V13.1249C24.917 12.8487 24.8072 12.5837 24.6119 12.3883C24.4165 12.193 24.1516 12.0833 23.8753 12.0833ZM13.4587 23.5416V13.1249H23.8753V23.5416H13.4587Z"
        fill={fill}
      />
    </svg>
  );
};

export default SquareStatusIcon;
