import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from "@/games/LetterTracing";
import LeftSlash from "@/games/LetterTracing/LeftSlash";

export const Route = createFileRoute('/letter-tracing/left-slash')({
  component: () => <LetterTracing Letter={LeftSlash} name="Left Slash" />,
})
