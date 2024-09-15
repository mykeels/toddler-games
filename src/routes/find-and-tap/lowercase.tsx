import { createFileRoute } from "@tanstack/react-router";
import FindAndTap from "../../FindAndTap";

export const Route = createFileRoute("/find-and-tap/lowercase")({
  component: () => <FindAndTap getCharacterSet={set => set.lowercaseLetters} />,
});
