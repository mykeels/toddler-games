import { createFileRoute } from '@tanstack/react-router'
import FindAndTap from '@/games/FindAndTap'

export const Route = createFileRoute("/find-and-tap/numbers")({
  component: () => <FindAndTap getCharacterSet={(set) => set.numbers} />,
});
