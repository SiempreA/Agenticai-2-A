const XIcon: React.FC<{
  fill?: string;
  opacity?: number;
  width?: string;
  height?: string;
}> = ({
  fill = "#D10001",
  opacity = "100%",
  width = "100%",
  height = "100%",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#F31710" />
      <path
        d="M23 13.875L22.125 13L18 17.125L13.875 13L13 13.875L17.125 18L13 22.125L13.875 23L18 18.875L22.125 23L23 22.125L18.875 18L23 13.875Z"
        fill={fill}
        opacity={opacity}
      />
    </svg>
  );
};

export default XIcon;
