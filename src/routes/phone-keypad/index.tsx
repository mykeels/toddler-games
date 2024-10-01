import { createFileRoute } from "@tanstack/react-router";
import PhoneKeypad from "../../PhoneKeypad";

export const Route = createFileRoute("/phone-keypad/")({
  component: () => <PhoneKeypad />,
});
