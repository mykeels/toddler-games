import { createFileRoute } from "@tanstack/react-router";
import FindAndTap from "@/games/FindAndTap";

export const Route = createFileRoute("/find-and-tap/lowercase")({
  component: () => <FindAndTap getCharacterSet={set => set.lowercaseLetters} />,
});
