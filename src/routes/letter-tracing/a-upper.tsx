import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import A from '@/games/LetterTracing/A/A'

export const Route = createFileRoute('/letter-tracing/a-upper')({
  component: () => <LetterTracing Letter={A} name="uppercase A" />,
})
