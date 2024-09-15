import { createFileRoute } from '@tanstack/react-router'
import FindAndTapGame from '../../FindAndTap'

export const Route = createFileRoute('/find-and-tap/fruits')({
  component: () => <FindAndTapGame gameType="fruits" />,
})
