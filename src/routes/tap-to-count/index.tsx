import { createFileRoute } from '@tanstack/react-router'
import TapToCount from '../../TapToCount'

export const Route = createFileRoute('/tap-to-count/')({
  component: () => <TapToCount />,
})
