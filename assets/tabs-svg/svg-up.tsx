import Svg, { Path } from 'react-native-svg';
import { IconProps } from './icon-props';

const SvgArrowUp: React.FC<IconProps> = ({
  height = 24,
  width = 24,
}) => {
  return (
    <Svg height={height} width={width} viewBox="0 0 24 24">
      <Path
        d="M12 8L6 14H18L12 8Z"
        fill="#666"
      />
    </Svg>
  );
};

export default SvgArrowUp;
