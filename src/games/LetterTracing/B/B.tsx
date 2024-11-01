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
    40, 10, 
    60, 20, 
    60, 40, 
    40, 45, 
    5
  );
  const lowerCurvePoints = generateCubicCurvePoints(
    40, 45, 
    60, 55, 
    60, 75, 
    40, 80, 
    5
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 80 90"
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

      {/*<!-- Middle vertical line -->*/}
      <circle cx="30" cy="10" r={dotSize} fill={color} />
      <circle cx="30" cy="45" r={dotSize} fill={color} />
      <circle cx="30" cy="80" r={dotSize} fill={color} />

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

function generateCubicCurvePoints(
  startX: number,
  startY: number,
  control1X: number,
  control1Y: number,
  control2X: number,
  control2Y: number,
  endX: number,
  endY: number,
  numPoints: number
) {
  const points = [];

    for (let t = 0; t <= 1; t += 1/numPoints) {
        // Cubic Bézier formula:
        // B(t) = (1-t)³P₀ + 3(1-t)²tP₁ + 3(1-t)t²P₂ + t³P₃
        const x = Math.pow(1-t, 3) * startX + 
                  3 * Math.pow(1-t, 2) * t * control1X + 
                  3 * (1-t) * Math.pow(t, 2) * control2X + 
                  Math.pow(t, 3) * endX;
                  
        const y = Math.pow(1-t, 3) * startY + 
                  3 * Math.pow(1-t, 2) * t * control1Y + 
                  3 * (1-t) * Math.pow(t, 2) * control2Y + 
                  Math.pow(t, 3) * endY;
                  
        points.push({x: Math.round(x), y: Math.round(y)});
    }
    
    return points;
}
