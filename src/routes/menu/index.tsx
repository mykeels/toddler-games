import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@/GameListing'
import { z } from 'zod'

export const Route = createFileRoute('/menu/')({
  component: Home,
  validateSearch: z.object({
    title: z.string().optional(),
  }),
})
