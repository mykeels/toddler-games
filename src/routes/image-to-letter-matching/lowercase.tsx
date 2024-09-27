import { createFileRoute } from "@tanstack/react-router";
import ImageToLetterMatching from "../../ImageToLetterMatching";

export const Route = createFileRoute("/image-to-letter-matching/lowercase")({
  component: () => (
    <ImageToLetterMatching transformLetter={(letter) => letter.toLowerCase()} />
  ),
});
