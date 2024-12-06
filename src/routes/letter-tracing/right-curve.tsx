import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from "@/games/LetterTracing";
import RightCurve from "@/games/LetterTracing/RightCurve";

export const Route = createFileRoute('/letter-tracing/right-curve')({
  component: () => <LetterTracing Letter={RightCurve} name="Right Curve" />,
})
