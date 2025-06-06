import React from 'react';

interface IconBackProps {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
}

const IconBack: React.FC<IconBackProps> = ({
  width = 24,
  height = 24,
  stroke = "#4F4FFF",
  fill = "#4F4FFF"
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="11.5"
      transform="rotate(-180 12 12)"
      stroke={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.0601 8.42905C13.8133 8.19032 13.4175 8.19032 13.1707 8.42905L9.93988 11.5541C9.6867 11.7989 9.6867 12.2011 9.93988 12.4459L13.1707 15.5709C13.4175 15.8097 13.8133 15.8097 14.0601 15.5709C14.3133 15.3261 14.3133 14.9239 14.0601 14.6791L11.2904 12L14.0601 9.32095C14.3133 9.07606 14.3133 8.67394 14.0601 8.42905Z"
      fill={fill}
    />
  </svg>
);

export default IconBack;
