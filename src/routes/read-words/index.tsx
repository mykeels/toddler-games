import ReadWords from '@/games/ReadWords'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/read-words/')({
  component: () => <ReadWords />,
})
