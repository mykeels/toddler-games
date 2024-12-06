import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from "@/games/LetterTracing";
import RightSlash from "@/games/LetterTracing/RightSlash";

export const Route = createFileRoute('/letter-tracing/right-slash')({
  component: () => <LetterTracing Letter={RightSlash} name="Right Slash" />,
})
