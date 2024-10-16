export interface IconProps {
  height?: number;
  width?: number;
  fillColorFirst?: string;
  fillColorSecond?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export interface NavIconProps extends IconProps  {
  focused: boolean;
}