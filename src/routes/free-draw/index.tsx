import { createFileRoute } from "@tanstack/react-router";
import FreeDraw from "@/games/FreeDraw";

export const Route = createFileRoute("/free-draw/")({
  component: () => <FreeDraw />,
});
