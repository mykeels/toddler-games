import { SvgProps } from '../LetterTracing.types';
import { DEFAULT_LETTER_SIZE, DEFAULT_COLOR } from '../LetterTracing.consts';

export default function LeftCurve({ size = DEFAULT_LETTER_SIZE, color = DEFAULT_COLOR }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M70 8C31.3401 8 8 38.1177 8 70C8 101.882 31.3401 132 70 132"
        stroke={color}
        strokeWidth="3"
        strokeDasharray="8 4"
      />
    </svg>
  );
}
