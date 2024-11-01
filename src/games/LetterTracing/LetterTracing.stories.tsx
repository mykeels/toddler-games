import LetterTracing from ".";
import A from "./A/A";
import Across from "./Across/Across";
import B from "./B/B";
import Down from "./Down/Down";

export default {
  title: "Games/LetterTracing",
  component: LetterTracing,
};

export const WithAcross = () => <LetterTracing Letter={Across} />;

export const WithDown = () => <LetterTracing Letter={Down} />;

export const WithA = () => <LetterTracing Letter={A} />;

export const WithB = () => <LetterTracing Letter={B} />;
