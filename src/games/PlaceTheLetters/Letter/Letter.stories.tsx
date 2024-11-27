import { Letter } from "./Letter";

export default {
  title: "Games/PlaceTheLetters/Letter",
  component: Letter,
};

export const DraggableA = () => <Letter value="A" draggable={{ position: { x: 100, y: 100 } }} />;

export const NonDraggableA = () => <Letter value="A" />;
