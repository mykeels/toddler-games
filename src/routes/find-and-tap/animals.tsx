import { createFileRoute } from "@tanstack/react-router";
import FindAndTap from "@/games/FindAndTap";

export const Route = createFileRoute("/find-and-tap/animals")({
  component: () => {
    return <FindAndTap getCharacterSet={(set) => set.animals} />
  },
});
