import { createFileRoute } from '@tanstack/react-router'
import LetterTracing from '@/games/LetterTracing'
import Circle from '@/games/LetterTracing/Circle'

export const Route = createFileRoute('/letter-tracing/circle')({
  component: () => <LetterTracing Letter={Circle} name="circle" />,
})
