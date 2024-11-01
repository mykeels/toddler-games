import { LetterSvgProps } from "../LetterTracing.types";
import {
  DEFAULT_LETTER_SIZE,
  DEFAULT_COLOR,
  DEFAULT_DOT_SIZE,
} from "../LetterTracing.consts";

export default function Across({
  size = DEFAULT_LETTER_SIZE,
  dotSize = DEFAULT_DOT_SIZE,
  color = DEFAULT_COLOR,
}: LetterSvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/*<!-- Horizontal line -->*/}
      <circle cx="10" cy="50" r={dotSize} fill={color} />
      <circle cx="20" cy="50" r={dotSize} fill={color} />
      <circle cx="30" cy="50" r={dotSize} fill={color} />
      <circle cx="40" cy="50" r={dotSize} fill={color} />
      <circle cx="50" cy="50" r={dotSize} fill={color} />
      <circle cx="60" cy="50" r={dotSize} fill={color} />
      <circle cx="70" cy="50" r={dotSize} fill={color} />
      <circle cx="80" cy="50" r={dotSize} fill={color} />
      <circle cx="90" cy="50" r={dotSize} fill={color} />
    </svg>
  );
}
