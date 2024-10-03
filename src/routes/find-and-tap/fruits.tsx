import { createFileRoute } from '@tanstack/react-router'
import FindAndTap from '@/games/FindAndTap'

export const Route = createFileRoute('/find-and-tap/fruits')({
  component: () => <FindAndTap getCharacterSet={set => set.fruits} />,
})
