import { createFileRoute } from '@tanstack/react-router'
import FindAndTapGame from '../../FindAndTap'

export const Route = createFileRoute('/find-and-tap/numbers')({
  component: () => <FindAndTapGame gameType="numbers" />,
})
