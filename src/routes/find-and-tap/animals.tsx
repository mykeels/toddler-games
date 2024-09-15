import { createFileRoute } from "@tanstack/react-router";
import FindAndTap from "../../FindAndTap";

export const Route = createFileRoute("/find-and-tap/animals")({
  component: () => <FindAndTap getCharacterSet={(set) => set.animals} />,
});
