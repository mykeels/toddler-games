import { createFileRoute } from "@tanstack/react-router";
import FindAndTap from "@/games/FindAndTap";

export const Route = createFileRoute("/find-and-tap/animals")({
  component: () => <FindAndTap getCharacterSet={(set) => set.animals} />,
});
