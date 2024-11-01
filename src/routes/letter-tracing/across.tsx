import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import Across from '@/games/LetterTracing/Across/Across'

export const Route = createFileRoute('/letter-tracing/across')({
  component: () => <LetterTracing Letter={Across} />,
})
