import { createFileRoute } from '@tanstack/react-router'
import TapToCount from '@/games/TapToCount'

export const Route = createFileRoute('/tap-to-count/')({
  component: () => <TapToCount />,
})
