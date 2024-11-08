import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import B from '@/games/LetterTracing/B/B'

export const Route = createFileRoute('/letter-tracing/b-upper')({
  component: () => <LetterTracing Letter={B} name="uppercase B" />,
})
