import { LetterSvgProps } from "../LetterTracing.types";
import {
  DEFAULT_LETTER_SIZE,
  DEFAULT_COLOR,
  DEFAULT_DOT_SIZE,
} from "../LetterTracing.consts";

export default function Down({
  size = DEFAULT_LETTER_SIZE,
  dotSize = DEFAULT_DOT_SIZE,
  color = DEFAULT_COLOR,
}: LetterSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 80 90"
    >
      {/*<!-- Vertical line -->*/}
      <circle cx="45" cy="10" r={dotSize} fill={color} />
      <circle cx="45" cy="20" r={dotSize} fill={color} />
      <circle cx="45" cy="30" r={dotSize} fill={color} />
      <circle cx="45" cy="40" r={dotSize} fill={color} />
      <circle cx="45" cy="50" r={dotSize} fill={color} />
      <circle cx="45" cy="60" r={dotSize} fill={color} />
      <circle cx="45" cy="70" r={dotSize} fill={color} />
      <circle cx="45" cy="80" r={dotSize} fill={color} />
    </svg>
  );
}
