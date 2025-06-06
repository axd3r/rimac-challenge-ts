import React from 'react';

interface IconProps {
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
  fillCircle: string;
}

const IconStep1: React.FC<IconProps> = ({ 
  width = 24, 
  height = 24, 
  stroke = '#C5CBE0',
  fill = "white",
  fillCircle
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginRight: '10px'}}
  >
    <circle cx="12" cy="12" r="12" stroke={stroke} fill={fillCircle}/>
    <path
      d="M14.7295 15.89V17H9.92953V15.89H11.6875V10.832C11.6875 10.632 11.6935 10.426 11.7055 10.214L10.4575 11.258C10.3855 11.314 10.3135 11.35 10.2415 11.366C10.1735 11.378 10.1075 11.378 10.0435 11.366C9.98353 11.354 9.92953 11.334 9.88153 11.306C9.83353 11.274 9.79753 11.24 9.77353 11.204L9.30553 10.562L11.9515 8.312H13.1695V15.89H14.7295Z"
      fill={fill}
    />
  </svg>
);

export default IconStep1;
