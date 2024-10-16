import Svg, { Circle, Rect } from 'react-native-svg';
import { NavIconProps } from './icon-props';

const SvgProfile: React.FC<NavIconProps> = ({
  focused,
  height = 30,
  width = 30,
  fillColorFirst = "none",
  fillColorSecond = "none",
  strokeColor = "#666",
  strokeWidth = 7,
}) => {
  if (focused) {
    fillColorFirst = "#FFEC2D";
    fillColorSecond = "#00ABC2";
  }

  return (
    <Svg height={height} width={width} viewBox="0 0 120 120">
      <Circle 
        cx="60"
        cy="35"
        r="25"
        fill={fillColorFirst}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      <Rect
        x="20"
        y="70"
        width="80"
        height="40"
        fill={fillColorSecond}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx="10"
      />
    </Svg>
  );
};

export default SvgProfile;
