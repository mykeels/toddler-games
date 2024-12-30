import { createFileRoute } from '@tanstack/react-router'
import { Flow } from '@/games/Flow'

export const Route = createFileRoute('/flow/')({
  component: () => <Flow />,
})
