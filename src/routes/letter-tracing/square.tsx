import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import Square from '@/games/LetterTracing/Square'

export const Route = createFileRoute('/letter-tracing/square')({
  component: () => <LetterTracing Letter={Square} name="square" />,
})
