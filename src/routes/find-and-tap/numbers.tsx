import { createFileRoute } from '@tanstack/react-router'
import FindAndTap from '../../FindAndTap'

export const Route = createFileRoute("/find-and-tap/numbers")({
  component: () => <FindAndTap getCharacterSet={(set) => set.numbers} />,
});
