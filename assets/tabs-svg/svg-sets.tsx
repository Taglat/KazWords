import Svg, { Circle, Rect } from 'react-native-svg';
import { NavIconProps } from './icon-props';

const SvgSets: React.FC<NavIconProps> = ({
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
      <Rect
        x="5"
        y="15"
        width="25"
        height="100"
        fill={fillColorSecond}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        ry="10"
        rx="10"
      />
      <Rect
        x="40"
        y="15"
        width="25"
        height="100"
        fill={fillColorSecond}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        ry="10"
        rx="10"
      />
      <Rect
        x="80"
        y="15"
        width="25"
        height="100"
        fill={fillColorFirst}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        ry="10"
        rx="10"
        transform="rotate(-10 100 60)"
      />
    </Svg>
  );
};

export default SvgSets;
