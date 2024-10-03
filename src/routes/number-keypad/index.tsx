import { createFileRoute } from '@tanstack/react-router'
import NumberKeypad from '@/games/NumberKeypad'

export const Route = createFileRoute('/number-keypad/')({
  component: () => <NumberKeypad />,
})
