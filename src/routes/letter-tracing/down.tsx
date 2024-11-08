import { createFileRoute } from "@tanstack/react-router";
import LetterTracing from "@/games/LetterTracing";
import Down from "@/games/LetterTracing/Down/Down";

export const Route = createFileRoute("/letter-tracing/down")({
  component: () => <LetterTracing Letter={Down} name="Down" />,
});
