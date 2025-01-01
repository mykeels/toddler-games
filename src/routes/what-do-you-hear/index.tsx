import { createFileRoute } from '@tanstack/react-router'
import { WhatDoYouHear } from '@/games/WhatDoYouHear'

export const Route = createFileRoute('/what-do-you-hear/')({
  component: () => <WhatDoYouHear />,
})
