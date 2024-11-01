import { LetterSvgProps } from "../LetterTracing.types";
import {
  DEFAULT_LETTER_SIZE,
  DEFAULT_COLOR,
  DEFAULT_DOT_SIZE,
} from "../LetterTracing.consts";

export default function B({
  size = DEFAULT_LETTER_SIZE,
  dotSize = DEFAULT_DOT_SIZE,
  color = DEFAULT_COLOR,
}: LetterSvgProps) {
  const upperCurvePoints = generateCubicCurvePoints(
    [40, 10],
    [65, 15],
    [65, 45],
    [40, 50],
    6
  );
  const lowerCurvePoints = generateCubicCurvePoints(
    [40, 50],
    [65, 55],
    [65, 85],
    [40, 90],
    6
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      {/*<!-- Vertical line -->*/}
      <circle cx="20" cy="10" r={dotSize} fill={color} />
      <circle cx="20" cy="20" r={dotSize} fill={color} />
      <circle cx="20" cy="30" r={dotSize} fill={color} />
      <circle cx="20" cy="40" r={dotSize} fill={color} />
      <circle cx="20" cy="50" r={dotSize} fill={color} />
      <circle cx="20" cy="60" r={dotSize} fill={color} />
      <circle cx="20" cy="70" r={dotSize} fill={color} />
      <circle cx="20" cy="80" r={dotSize} fill={color} />
      <circle cx="20" cy="90" r={dotSize} fill={color} />

      {/*<!-- Middle vertical line -->*/}
      <circle cx="30" cy="10" r={dotSize} fill={color} />
      <circle cx="30" cy="50" r={dotSize} fill={color} />
      <circle cx="30" cy="90" r={dotSize} fill={color} />

      {/*<!-- Upper curve -->*/}
      {upperCurvePoints.map((point) => (
        <circle
          key={`${point.x}-${point.y}`}
          cx={point.x}
          cy={point.y}
          r={dotSize}
          fill={color}
        />
      ))}

      {/*<!-- Lower curve -->*/}
      {lowerCurvePoints.map((point) => (
        <circle
          key={`${point.x}-${point.y}`}
          cx={point.x}
          cy={point.y}
          r={dotSize}
          fill={color}
        />
      ))}
    </svg>
  );
}

type Point = [number, number];

function generateCubicCurvePoints(
  start: Point,
  control1: Point,
  control2: Point,
  end: Point,
  count: number
) {
  const points = [];
  const [startX, startY] = start;
  const [control1X, control1Y] = control1;
  const [control2X, control2Y] = control2;
  const [endX, endY] = end;

  for (let t = 0; t <= 1; t += 1 / count) {
    // Cubic Bézier formula:
    // B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃
    const x =
      Math.pow(1 - t, 3) * startX +
      3 * Math.pow(1 - t, 2) * t * control1X +
      3 * (1 - t) * Math.pow(t, 2) * control2X +
      Math.pow(t, 3) * endX;

    const y =
      Math.pow(1 - t, 3) * startY +
      3 * Math.pow(1 - t, 2) * t * control1Y +
      3 * (1 - t) * Math.pow(t, 2) * control2Y +
      Math.pow(t, 3) * endY;

    points.push({ x: Math.round(x), y: Math.round(y) });
  }

  return points;
}
