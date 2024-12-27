import { createFileRoute } from '@tanstack/react-router'
import TypeAway from '@/games/TypeAway'

export const Route = createFileRoute('/type-away/')({
  component: () => <TypeAway />,
})
