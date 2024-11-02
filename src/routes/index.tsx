import { createFileRoute } from '@tanstack/react-router'
import { Home } from '@/Home'
import { z } from 'zod';

export const Route = createFileRoute('/')({
  component: Home,
  validateSearch: z.object({
    title: z.string().optional(),
  }),
});
