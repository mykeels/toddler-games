import { useParams } from "react-router";
import { LetterTracing } from ".";
import A from "./A/A";
import Across from "./Across/Across";
import B from "./B/B";
import Circle from "./Circle";
import Down from "./Down/Down";
import LeftCurve from "./LeftCurve";
import RightCurve from "./RightCurve";
import Square from "./Square";
import Triangle from "./Triangle";

export const LetterTracingRoute = () => {
  const { characterSet } = useParams();
  const Letter =
    {
      "a-upper": A,
      across: Across,
      "b-upper": B,
      circle: Circle,
      down: Down,
      "left-curve": LeftCurve,
      "right-curve": RightCurve,
      square: Square,
      triangle: Triangle,
    }[characterSet as never] || A;
  const name =
    {
      "a-upper": "uppercase A",
      "b-upper": "uppercase B",
      "left-curve": "left curve",
      "right-curve": "right curve",
      square: "square",
      triangle: "triangle",
    }[characterSet as never] || characterSet;

  return <LetterTracing Letter={Letter} name={name} />;
};
