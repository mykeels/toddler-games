import PlaceTheLetters from '@/games/PlaceTheLetters'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/place-the-letters/')({
  component: () => <PlaceTheLetters />,
})
