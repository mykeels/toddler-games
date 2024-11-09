import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import Triangle from '@/games/LetterTracing/Triangle'

export const Route = createFileRoute('/letter-tracing/triangle')({
  component: () => <LetterTracing Letter={Triangle} name="triangle" />,
})
