import { createFileRoute } from "@tanstack/react-router";
import FreeDraw from "../../FreeDraw";

export const Route = createFileRoute("/free-draw/")({
  component: () => <FreeDraw />,
});
