import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from "@/games/LetterTracing";
import LeftCurve from "@/games/LetterTracing/LeftCurve";

export const Route = createFileRoute('/letter-tracing/left-curve')({
  component: () => <LetterTracing Letter={LeftCurve} name="Left Curve" />,
})
