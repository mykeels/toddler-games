import { createFileRoute } from '@tanstack/react-router'
import ImageToLetterMatching from '../../ImageToLetterMatching'

export const Route = createFileRoute('/image-to-letter-matching/')({
  component: () => <ImageToLetterMatching />,
})
