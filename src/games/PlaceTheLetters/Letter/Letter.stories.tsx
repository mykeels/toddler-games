import { Letter } from "./Letter";

export default {
  title: "Games/PlaceTheLetters/Letter",
  component: Letter,
};

export const A = () => <Letter value="A" defaultPosition={{ x: 100, y: 100 }} />;