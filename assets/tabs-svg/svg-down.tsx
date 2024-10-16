import Svg, { Path } from 'react-native-svg';
import { IconProps } from './icon-props';

const SvgArrowDown: React.FC<IconProps> = ({
  height = 24,
  width = 24,
}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24">
      <Path
        d="M12 16L6 10H18L12 16Z"
        fill="#666"
      />
    </Svg>
  );
};

export default SvgArrowDown;
