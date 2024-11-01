import { LetterSvgProps } from "../LetterTracing.types";
import {
  DEFAULT_LETTER_SIZE,
  DEFAULT_DOT_SIZE,
  DEFAULT_COLOR,
} from "../LetterTracing.consts";

export default function A({
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
      {/*<!-- Left diagonal line -->*/}
      <circle cx="5" cy="80" r={dotSize} fill={color} />
      <circle cx="10" cy="70" r={dotSize} fill={color} />
      <circle cx="15" cy="60" r={dotSize} fill={color} />
      <circle cx="20" cy="50" r={dotSize} fill={color} />
      <circle cx="25" cy="40" r={dotSize} fill={color} />
      <circle cx="30" cy="30" r={dotSize} fill={color} />
      <circle cx="35" cy="20" r={dotSize} fill={color} />
      <circle cx="40" cy="10" r={dotSize} fill={color} />

      {/*<!-- Right diagonal line -->*/}
      <circle cx="75" cy="80" r={dotSize} fill={color} />
      <circle cx="70" cy="70" r={dotSize} fill={color} />
      <circle cx="65" cy="60" r={dotSize} fill={color} />
      <circle cx="60" cy="50" r={dotSize} fill={color} />
      <circle cx="55" cy="40" r={dotSize} fill={color} />
      <circle cx="50" cy="30" r={dotSize} fill={color} />
      <circle cx="45" cy="20" r={dotSize} fill={color} />
      <circle cx="40" cy="10" r={dotSize} fill={color} />

      {/*<!-- Horizontal crossbar -->*/}
      <circle cx="20" cy="50" r={dotSize} fill={color} />
      <circle cx="30" cy="50" r={dotSize} fill={color} />
      <circle cx="40" cy="50" r={dotSize} fill={color} />
      <circle cx="50" cy="50" r={dotSize} fill={color} />
      <circle cx="60" cy="50" r={dotSize} fill={color} />
    </svg>
  );
}
