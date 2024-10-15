import Svg, { Path, Rect } from 'react-native-svg';
import { IconProps } from './icon-props';

const SvgLearn: React.FC<IconProps> = ({
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
        x="10"
        y="20"
        width="40"
        height="80"
        fill={fillColorFirst}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx="5"
      />
      <Rect
        x="70"
        y="20"
        width="40"
        height="80"
        fill={fillColorFirst}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        rx="5"
      />
      <Path
        d="M 60 20 Q 60 70, 60 100"
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
    </Svg>
  );
};

export default SvgLearn;
